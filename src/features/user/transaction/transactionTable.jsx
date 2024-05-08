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

const StatusTd = styled(Td)`
  color: ${({ status }) => {
    switch (status) {
      case 'PENDING':
        return 'orange';
      case 'PROCESSING':
        return 'blue';
      case 'DELIVERED':
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
            <Th>User Id</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
            <Th>Order Id</Th>
            <Th> Platform</Th>
            <Th>Reference</Th>
          </tr>
        </thead>
        <tbody>
          {transactions?.map((order) => (
            <tr key={order.orderId}>
              <Td>{order.userId}</Td>
              <Td>{order.amount}</Td>
              <StatusTd status={order.status}>{order.status}</StatusTd>
              {/* <Td>&#x20A6;{order.paymentItems[0].price}</Td> */}
              <Td>{order.orderId} </Td>
              <Td>{order.paymentPlatform} </Td>
              <Td>{order.reference} </Td>
              <StatusTd style={{ cursor: 'pointer' }}>
                {' '}
                {/* {order?.paymentItems?.length} */}
              </StatusTd>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
