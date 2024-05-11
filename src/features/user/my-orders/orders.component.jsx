import { useEffect, useState } from 'react';
import {
  HeadingContainer,
  HeadingText,
  TabContainer,
  StyledButton,
  EmptyState,
  MainContainer,
} from './orders.styles';
import OrderTable from './orderTable';
import useOrderStore from '../../../app/orderStore';
import useOrdersHistory from '../../../app/useOrdersHistory';
import Pagination from 'rc-pagination';

const Main = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const { ordersHistory, resultTotals, fetchOrdersHistory } =
    useOrdersHistory();
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('PENDING');

  const initStore = useOrderStore((state) => state.init);

  useEffect(() => {
    initStore();
    fetchOrdersHistory(page, status);
  }, [page, status]);

  const handleTabChange = (tabIndex, orderStatus) => {
    setCurrentTab(tabIndex);
    setStatus(orderStatus);
    setPage(1);
    fetchOrdersHistory(1, orderStatus);
  };

  const onChangePage = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <MainContainer>
      <HeadingContainer>
        <HeadingText>Orders (2)</HeadingText>
      </HeadingContainer>
      <TabContainer>
        <StyledButton
          onClick={() => handleTabChange(1, 'PENDING')}
          active={currentTab === 1}
        >
          PENDING
        </StyledButton>
        <StyledButton
          onClick={() => handleTabChange(2, 'ACCEPTED')}
          active={currentTab === 2}
        >
          ACCEPTED
        </StyledButton>
        <StyledButton
          onClick={() => handleTabChange(3, 'ON_GOING')}
          active={currentTab === 3}
        >
          ON_GOING
        </StyledButton>
        <StyledButton
          onClick={() => handleTabChange(4, 'COMPLETED')}
          active={currentTab === 4}
        >
          COMPLETED
        </StyledButton>
        <StyledButton
          onClick={() => handleTabChange(5, 'CANCELED')}
          active={currentTab === 5}
        >
          CANCELED
        </StyledButton>
      </TabContainer>
      <>
        {ordersHistory.length ? (
          <>
            <OrderTable orders={ordersHistory} />
            <Pagination
              onChange={onChangePage}
              current={page}
              total={resultTotals}
              style={{ marginTop: 10, marginBottom: 10 }}
            />
          </>
        ) : (
          <EmptyState>
            <img src='/assets/user-order.svg' alt='favorites' />
            <div className='text-container'>
              <p className='bold'>Nothing Yet!</p>
              <p>All your Closed Orders will be saved here.</p>
            </div>
          </EmptyState>
        )}
      </>
    </MainContainer>
  );
};

export default Main;
