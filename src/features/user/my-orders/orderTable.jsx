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

const OrderTable = ({ orders }) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>Product Name</Th>
            <Th>Status</Th>
            <Th>Price</Th>
            <Th>Distance</Th>
            <Th>Action</Th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => (
            <tr key={order.orderId}>
              <Td>{order.paymentItems[0].productName}</Td>
              <StatusTd status={order.status}>{order.status}</StatusTd>
              <Td>&#x20A6;{order.paymentItems[0].price}</Td>
              <Td>{order.distance} km</Td>
              <StatusTd style={{ cursor: 'pointer' }} status={order.status}>
                {' '}
                continue
              </StatusTd>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
