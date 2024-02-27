import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { CopyAllOutlined } from '@mui/icons-material';
import { useIncompleteStore } from './incompleteOrderStore';
import { Navbar } from '../features';

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

const ProfessionalTable = () => {
  const { incompleteOrders, fetchIncompleteOrders } = useIncompleteStore();
  const intervalIdRef = useRef(null);

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
            {data.map((item) => (
              <React.Fragment key={item.id}>
                <TableRow onClick={() => toggleExpand(item.id)}>
                  <TableDataCell>{item.reference}</TableDataCell>
                  <TableDataCell style={{ color: getStatusColor(item.status) }}>
                    {item.status}
                  </TableDataCell>
                  <TableDataCell>{item.amount}</TableDataCell>
                  <TableDataCell>{item.userId}</TableDataCell>
                  <TableDataCell>{item.orderId}</TableDataCell>
                  <TableDataCell>{item.createdAt}</TableDataCell>
                  <TableDataCell>{item.updatedAt}</TableDataCell>
                </TableRow>
                {expandedRow === item.id && (
                  <ExpandableRow>
                    <ExpandableDataCell colSpan="7">
                      <div>
                        <h4>Items</h4>
                        <ul>
                          {item.items.map((product) => (
                            <li key={product.productId}>
                              {product.productName} - {product.price}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <InteractiveIcon onClick={() => copyToClipboard(JSON.stringify(item))} />
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
