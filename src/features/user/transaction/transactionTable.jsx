import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

const Tag = styled.div`
  padding: 5px;
  border-radius: 15px;
  text-align: center;
  font-size: 14px;
`;

const CustomTag = styled(Tag)`
  background: ${({ status }) => {
    switch (status) {
      case 'PENDING':
        return '#ffa6004a';
      case 'PROCESSING':
        return '#0000ff55';
      case 'COMPLETED':
        return '#00800063';
      default:
        return 'transparent';
    }
  }};
`;

const StatusTd = styled(Td)`
  color: ${({ status }) => {
    switch (status) {
      case 'PENDING':
        return 'orange';
      case 'PROCESSING':
        return 'blue';
      case 'COMPLETED':
        return 'green';
      default:
        return 'black';
    }
  }};
`;

// eslint-disable-next-line react/prop-types
const TransactionTable = ({ transactions }) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>S/N</Th>
            <Th>Order Id</Th>
            <Th>Amount</Th>
            <Th>Total Items</Th>
            <Th>Status</Th>
            <Th> Platform</Th>
            <Th>Reference</Th>
          </tr>
        </thead>
        <tbody>
          {transactions?.map((order, index) => (
            <tr key={order.orderId}>
              <Td>{++index}</Td>
              <Td>{order.orderId} </Td>
              <Td>{order.amount}</Td>
              <Td>{order.items.length}</Td>
              <StatusTd status={order.status}>
                <CustomTag status={order.status}>{order.status}</CustomTag>
              </StatusTd>
              <Td>{order.paymentPlatform} </Td>
              <Td>{order.reference} </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
