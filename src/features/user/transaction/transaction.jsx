import { useEffect, useState } from 'react';

import {
  HeadingContainer,
  HeadingText,
  EmptyState,
  MainContainer,
} from './transaction.styles';
import OrderTable from './transactionTable';
import Pagination from 'rc-pagination';
import useOrderStore from '../../../app/orderStore';
import useTransactionHistory from './useTransactionHistory';

const Transaction = () => {
  const { transactionHistory, resultTotals, fetchTransactionHistory } =
    useTransactionHistory();

  const [page, setPage] = useState(1);
  const initStore = useOrderStore((state) => state.init);

  useEffect(() => {
    initStore();
    fetchTransactionHistory(page, 10);
  }, []);

  const onChange = (pageNumber) => {
    setPage(pageNumber);
    fetchTransactionHistory(pageNumber);
  };
  return (
    <MainContainer>
      <HeadingContainer>
        <HeadingText>Transaction History </HeadingText>
      </HeadingContainer>
      <>
        {transactionHistory?.length ? (
          <>
            <OrderTable transactions={transactionHistory} />

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

export default Transaction;
