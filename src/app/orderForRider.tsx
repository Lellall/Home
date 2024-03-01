// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { CopyAllOutlined } from '@mui/icons-material';
import { useIncompleteStore } from './incompleteOrderStore';
import { Navbar } from '../features';
import { Button } from '@mui/material';
import useAvailableOrdersStore from '../features/newshop/availableOrdersStore';
import { ArrowCircleDown } from 'iconsax-react';
import Select from 'react-select';
import { formatCurrency } from '../utils/currencyFormat';


const TableWrapper = styled.div`
  font-family: Arial, sans-serif;
//   border: 1px solid #ccc;
  overflow: hidden;
//   margin: 70px ;
//   margin-top:140px;
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
  font-size: 11px;
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
  background-color: #eafef1;
  color: #00a661;
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
    color: red;
  }
`;
const Content = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
     min-height: 200px;
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


const OrderForRider = () => {
    const options = [
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
        { value: 'orange', label: 'Orange' },
        { value: 'grape', label: 'Grape' },
    ];

    const { incompleteOrders, fetchIncompleteOrders } = useIncompleteStore();
    const intervalIdRef = useRef(null);
    const [expandedRow, setExpandedRow] = useState(null);
    const { startPolling, availableOrders, showClaimModal, replyToOrder } = useAvailableOrdersStore();
    const hasClaim = useAvailableOrdersStore(state => state.hasClaim);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedRow, setSelectedRow] = useState();

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    // useEffect(() => {
    //   if (hasClaim === false) {
    //     const stopPolling = startPolling(); // Start polling when component mounts

    //     // Clean up function to stop polling when the component unmounts
    //     return () => stopPolling();
    //   }
    // }, [hasClaim]);
    console.log('====================================');
    console.log(availableOrders, 'availableOrders');
    console.log('====================================');

    useEffect(() => {
        intervalIdRef.current = setInterval(() => {
            fetchIncompleteOrders();
        }, 10000);

        return () => {
            clearInterval(intervalIdRef.current);
        };
    }, []);

    const toggleExpand = ({ id, ind }) => {
        console.log('====================================');
        console.log(ind, 'ind');
        console.log('====================================');
        setSelectedRow(ind)
        setExpandedRow((prevExpandedRow) => (prevExpandedRow === id ? null : id));
    };
    const copyInfo = (productName, address, phoneNumber) => {
        console.log('====================================');
        console.log(productName, address, phoneNumber, 'productName, address, phoneNumber');
        console.log('====================================');
        const info = `Name: ${productName}\nAddress: ${address.streetName}, ${address.estate}, ${address.poBox}\nPhone Number: ${phoneNumber}`;
        navigator.clipboard.writeText(info);
        alert("Information copied to clipboard!");
    };
    console.log('====================================');
    console.log(selectedRow);
    console.log('====================================');

    return (
        <div>
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
                        {incompleteOrders.map((item, ind) => (
                            <React.Fragment key={item.id}>
                                <TableRow onClick={() => toggleExpand({ id: item.id, ind })}>
                                    <TableDataCell>{item.reference}</TableDataCell>
                                    <TableDataCell style={{ color: getStatusColor(item.status) }}>
                                        {item.status === 'COMPLETED' ? 'PAID ORDER' : item.status}
                                    </TableDataCell>
                                    <TableDataCell>{formatCurrency(item.amount)}</TableDataCell>
                                    <TableDataCell>{item.userId}</TableDataCell>
                                    <TableDataCell>{item.orderId}</TableDataCell>
                                    <TableDataCell>{formatDateTime(item.createdAt)}</TableDataCell>
                                    <TableDataCell>
                                        <Button>
                                            <ArrowCircleDown size="32" color="#00a661" />
                                        </Button>
                                    </TableDataCell>
                                </TableRow>
                                {expandedRow === item.id && (
                                    <ExpandableRow>
                                        <ExpandableDataCell colSpan="7">
                                            <Content>
                                                <div>
                                                    <h4>Items</h4>
                                                    <ul>
                                                        {item.items.map((product,idx) => (
                                                            // <li key={product.productId}>
                                                            //     {product.productName} - {formatCurrency(product.price)} - Quantity: {product.count}
                                                            // </li>
                                                            <div key={product.productId}>
                                                                <p>{idx + 1}:  {product.productName} - ${p.count}</p>

                                                            </div>
                                                        ))}
                                                        <p>Address: {item.address?.streetName}, {item.address?.estate}, {item.address?.poBox}</p>
                                                        <p>Phone Number: {item.phoneNumber}</p>
                                                        <p>Quantity: {item.items.map((p,idx) => `${p?.productName}: ${p.count}`).join(',')}</p>

                                                        {/* {item.items.map(product => (
                                                            <div key={order.id}>
                                                                <p>Amount: {order.amount}</p>
                                                                <p>Created At: {order.createdAt}</p>
                                                                <p>Updated At: {order.updatedAt}</p>
                                                                <p>Address: {order.address?.streetName}, {order.address?.estate}, {order.address?.poBox}</p>
                                                                <p>Phone Number: {order.phoneNumber}</p>
                                                            </div>
                                                        ))} */}
                                                    </ul>
                                                </div>
                                                <div style={{ display: "flex" }}>
                                                    <Select
                                                        value={selectedOption}
                                                        onChange={handleChange}
                                                        options={options}
                                                        placeholder="Assign a rider"
                                                    />
                                                    <Button style={{ height: "40px", marginLeft: "5px" }}>Complete this Order</Button>
                                                </div>
                                            </Content>
                                            <InteractiveIcon onClick={() => copyInfo(incompleteOrders[selectedRow].items.map((i) => i.productName), incompleteOrders[selectedRow].address, incompleteOrders[selectedRow].phoneNumber)} />
                                        </ExpandableDataCell>
                                    </ExpandableRow>
                                )}
                            </React.Fragment>
                        ))}
                    </TableBody>
                </Table>
            </TableWrapper>
        </div>
    )
}

export default OrderForRider