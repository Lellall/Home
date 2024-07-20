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
import styled from 'styled-components';
import Select from 'react-select';

const options = [
  { value: 'PENDING', label: 'Pending' },
  { value: 'FAILED', label: 'Failed' },
  { value: 'COMPLETED', label: 'Completed' },
];

const Transaction = () => {
  const { transactionHistory, resultTotals, fetchTransactionHistory, loading } =
    useTransactionHistory();

  const [page, setPage] = useState(1);
  const initStore = useOrderStore((state) => state.init);
  const [selectedOption, setSelectedOption] = useState({
    value: '',
    label: '',
  });
  useEffect(() => {
    initStore();
    fetchTransactionHistory(page, 10);
  }, [fetchTransactionHistory, initStore, page]);

  const onChange = (pageNumber) => {
    setPage(pageNumber);
    fetchTransactionHistory(pageNumber);
  };
  const handleSelectChange = (e) => {
    setSelectedOption(e.value);
    fetchTransactionHistory(1, 10, e.value);
  };

  return (
    <MainContainer>
      <HeadingContainer>
        <HeadingText>Transaction History{loading ? '...' : ''}</HeadingText>
        <div>
          {/* <Label>Status:</Label> */}
          <StyledSelect
            options={options}
            value={selectedOption.value}
            onChange={handleSelectChange}
            placeholder='Select Status'
          />
        </div>
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
const StyledSelect = styled(Select)`
  width: 200px;
  font-size: 11px;
`;
