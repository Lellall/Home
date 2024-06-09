import { useEffect, useState } from 'react';

import {
  HeadingContainer,
  HeadingText,
  EmptyState,
  MainContainer,
  LoadingTransaction,
} from './transaction.styles';
import OrderTable from './transactionTable';
import Pagination from 'rc-pagination';
// import useOrderStore from '../../../app/orderStore';
import { useGetTransactionsQuery } from './transaction.api';
import { Circle, LocalDining } from '@mui/icons-material';

const Transaction = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, refetch } = useGetTransactionsQuery({
    page,
  });

  // const initStore = useOrderStore((state) => state.init);

  // useEffect(() => {
  //   initStore();
  //   fetchTransactionHistory(page, 10);
  // }, []);

  const onChange = (pageNumber) => {
    setPage(pageNumber);
    refetch(pageNumber);
  };
  return (
    <MainContainer>
      <HeadingContainer>
        <HeadingText>Transaction History </HeadingText>
      </HeadingContainer>
      <>
        {isLoading ? (
          <LoadingTransaction>
            <h4>Loading Transaction History</h4>
          </LoadingTransaction>
        ) : data?.data?.length ? (
          <>
            <OrderTable transactions={data.data} />

            <Pagination
              onChange={onChange}
              current={page}
              total={data.resultTotal}
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
