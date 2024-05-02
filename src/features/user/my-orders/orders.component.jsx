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
  console.log('ordersHistory', resultTotals);
  // const options = ['Pending (2)', 'Completed (0)'];
  // const [filteredOrders, setFilteredOrders] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('PENDING');

  // const { addOrder, orders } = useOrderStore();
  const initStore = useOrderStore((state) => state.init);
  // console.log('order', orders);

  // const filterOrders = (status) => {
  //   if (status === 'PENDING') {
  //     setFilteredOrders(
  //       ordersHistory.filter((order) =>
  //         order.paymentItems.every((item) => item.status !== 'COMPLETE')
  //       )
  //     );
  //   } else if (status === 'COMPLETE') {
  //     setFilteredOrders(
  //       ordersHistory.filter((order) =>
  //         order.paymentItems.every((item) => item.status === 'COMPLETE')
  //       )
  //     );
  //   }
  // };
  useEffect(() => {
    // Initialize the store with data from localforage
    initStore();
    // setFilteredOrders(ordersHistory);
    fetchOrdersHistory(page, 'PENDING');
  }, []);

  const pendingFN = () => {
    setCurrentTab(1);
    fetchOrdersHistory(page, 'PENDING');
  };
  const acceptedFN = () => {
    setCurrentTab(2);
    setStatus('ACCEPTED');
    // fetchOrdersHistory(page, 'ACCEPTED');
  };
  const ongoingFN = () => {
    setCurrentTab(3);
    fetchOrdersHistory(page, 'ON_GOING');
  };
  const completedFN = () => {
    setCurrentTab(4);
    fetchOrdersHistory(page, 'COMPLETED');
  };
  const canceledFN = () => {
    setCurrentTab(5);
    fetchOrdersHistory(page, 'CANCELED');
  };

  const onChange = (pageNumber) => {
    setPage(pageNumber);
    fetchOrdersHistory(pageNumber, status);
  };
  return (
    <MainContainer>
      <HeadingContainer>
        <HeadingText>Orders (2)</HeadingText>
      </HeadingContainer>
      {/* <TabContainer>
        <StyledButton onClick={() => pendingFN()} active={currentTab === 1}>
          PENDING
        </StyledButton>
        <StyledButton onClick={() => acceptedFN()} active={currentTab === 2}>
          ACCEPTED
        </StyledButton>
        <StyledButton onClick={() => ongoingFN()} active={currentTab === 3}>
          ON_GOING
        </StyledButton>
        <StyledButton onClick={() => completedFN()} active={currentTab === 4}>
          COMPLETED
        </StyledButton>
        <StyledButton onClick={() => canceledFN()} active={currentTab === 5}>
          CANCELED
        </StyledButton>
      </TabContainer> */}
      <>
        {ordersHistory ? (
          <>
            <OrderTable orders={ordersHistory} />

            <Pagination
              onChange={onChange}
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
