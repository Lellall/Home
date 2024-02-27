import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { CopyAllOutlined } from '@mui/icons-material';
import { useIncompleteStore } from './incompleteOrderStore';
import { Navbar } from '../features';
import { Button } from '@mui/material';
import useAvailableOrdersStore from '../features/newshop/availableOrdersStore';

const TableWrapper = styled.div`
  font-family: Arial, sans-serif;
  border: 1px solid #ccc;
  overflow: hidden;
  margin: 70px ;
  margin-top:140px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

const TableHeadRow = styled.tr``;

const TableHeadCell = styled.th`
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 300;
  padding: 20px;
  text-align: left;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  font-size: 13px;
  padding: 20px;
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableDataCell = styled.td`
  padding: 12px;
  border-top: 1px solid #ccc;
  word-break: break-word;
  white-space: pre-wrap;
`;

const ExpandableRow = styled.tr`
  background-color: #e6f7ff;
`;

const ExpandableDataCell = styled.td`
  padding: 12px;
  border: 1px solid #ccc;
`;

const InteractiveIcon = styled(CopyAllOutlined)`
  color: #333;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: #555;
  }
`;


const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};

const getStatusColor = (status) => {
  switch (status) {
    case 'PENDING':
      return '#ffc107'; // Yellow
    case 'COMPLETED':
      return '#28a745'; // Green
    case 'CANCELLED':
      return '#dc3545'; // Red
    default:
      return '#333'; // Default color
  }
};

const formatDateTime = (dateTimeString) => {
  const date = new Date(dateTimeString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  const second = String(date.getSeconds()).padStart(2, '0');
  const millisecond = String(date.getMilliseconds()).padStart(3, '0');

  const formattedDateTime = `${year}-${month}-${day} ${hour}:${minute}:${second}.${millisecond}`;

  return formattedDateTime;
};

const ProfessionalTable = () => {
  const { incompleteOrders, fetchIncompleteOrders } = useIncompleteStore();
  const intervalIdRef = useRef(null);
  const [expandedRow, setExpandedRow] = useState(null);
  const { startPolling, availableOrders, showClaimModal, replyToOrder } = useAvailableOrdersStore();
  const hasClaim = useAvailableOrdersStore(state => state.hasClaim);

  // useEffect(() => {
  //   if (hasClaim === false) {
  //     const stopPolling = startPolling(); // Start polling when component mounts

  //     // Clean up function to stop polling when the component unmounts
  //     return () => stopPolling();
  //   }
  // }, [hasClaim]);
  console.log('====================================');
  console.log(availableOrders,'availableOrders');
  console.log('====================================');

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      fetchIncompleteOrders();
    }, 10000);

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, []);

  const toggleExpand = (id) => {
    setExpandedRow((prevExpandedRow) => (prevExpandedRow === id ? null : id));
  };

  return (
    <div>
      <Navbar />
      <TableWrapper>
        <Table>
          <TableHead>
            <TableHeadRow>
              <TableHeadCell>Reference</TableHeadCell>
              <TableHeadCell>Status</TableHeadCell>
              <TableHeadCell>Amount</TableHeadCell>
              <TableHeadCell>User ID</TableHeadCell>
              <TableHeadCell>Order ID</TableHeadCell>
              <TableHeadCell>Created At</TableHeadCell>
              <TableHeadCell>Action</TableHeadCell>
            </TableHeadRow>
          </TableHead>
          <TableBody>
            {incompleteOrders.map((item) => (
              <React.Fragment key={item.id}>
                <TableRow onClick={() => toggleExpand(item.id)}>
                  <TableDataCell>{item.reference}</TableDataCell>
                  <TableDataCell style={{ color: getStatusColor(item.status) }}>
                    {item.status}
                  </TableDataCell>
                  <TableDataCell>{item.amount}</TableDataCell>
                  <TableDataCell>{item.userId}</TableDataCell>
                  <TableDataCell>{item.orderId}</TableDataCell>
                  <TableDataCell>{formatDateTime(item.createdAt)}</TableDataCell>
                  <TableDataCell>
                    <Button>Expand</Button>
                  </TableDataCell>
                </TableRow>
                {expandedRow === item.id && (
                  <ExpandableRow>
                    <ExpandableDataCell colSpan="7">
                      <div>
                        <h4>Items</h4>
                        <ul>
                          {item.items.map((product) => (
                            <li key={product.productId}>
                              {product.productName} - N{product.price} - Count: {product.count}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <InteractiveIcon onClick={() => copyToClipboard(JSON.stringify(item.items))} />
                    </ExpandableDataCell>
                  </ExpandableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  );
};

export default ProfessionalTable;
