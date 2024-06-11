import React, { useEffect, useState } from 'react';
import useProductStore from '../../app/productStore';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import {
  Table,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableRow,
  TableWrapper,
} from '../../app/orderForRider';
import { TableBody } from '@mui/material';
import { Menu } from 'iconsax-react';
import DropdownTableMenu from '../../app/dropDown';
import { BaseUrl } from '../../utils/config';
import axios from 'axios';
import { SearchInp } from '../ui/base/navbar/navbar.styles';
import Modal from '../../app/modal';
import { useForm } from 'react-hook-form';
import EditForm from '../../app/editForm';
import { ToastContainer } from 'react-toastify';

const Products = () => {
  // const fetchProducts = useProductStore((state) => state.fetchProducts);
  const [products, setProducts] = useState([]);
  const [all, setAll] = useState([]);
  const [current, setCurrent] = useState(0);
  const fetchProducts = async (page) => {
    try {
      const response = await axios.get(
        `${BaseUrl}/products?page=${page}&size=10`
      );
      const newData = response.data.data;
      setProducts(newData);
      setAll(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  // const products = useProductStore((state) => state.products);

  useEffect(() => {
    fetchProducts(current);
  }, [current]);
  // const [isOpen, setIsOpen] = useState(false);
  const [isOpenList, setIsOpenList] = useState([]);

  const [selected, setSelected] = useState(null);

  // const toggleDropdown = (index, productId) => {
  //   setOpenMenuProductId(productId === openMenuProductId ? null : productId);
  //   console.log(productId, "productId");
  //   const newIsOpenList = [...isOpenList];
  //   newIsOpenList[index] = !newIsOpenList[index];
  //   setIsOpenList(newIsOpenList);
  // };

  // const menuItems = ["Change Availability", "Change Price"];
  const handlePageClick = (page) => {
    setCurrent(page);
  };

  const isOpen = useProductStore((state) => state.isOpen);
  const openView = useProductStore((state) => state.openView);
  const closeView = useProductStore((state) => state.closeView);

  const openMenu = (product) => {
    setSelected(product);
    openView();
  };

  return (
    <>
      <ToastContainer />
      <Modal width='40%' show={isOpen} onClose={() => closeView()}>
        Edit Product
        <hr />
        <EditForm
          product={selected}
          fetchProducts={fetchProducts}
          current={current}
        />
      </Modal>
      <SearchInp
        type='text'
        placeholder='What are you looking for?'
        // value={searchTerm}
        // onChange={handleSearchChange}
      />
      <div style={{ width: '100%' }}>
        <TableWrapper>
          <Table>
            <TableHead>
              <TableHeadRow>
                <TableHeadCell>Name</TableHeadCell>
                <TableHeadCell>Price</TableHeadCell>
                <TableHeadCell>Quantity</TableHeadCell>
                <TableHeadCell>Available</TableHeadCell>
                <TableHeadCell>category</TableHeadCell>
                <TableHeadCell>Action</TableHeadCell>
              </TableHeadRow>
            </TableHead>
            <TableBody>
              {products?.map((product, index) => (
                <TableRow key={product.id}>
                  <TableDataCell>{product.name}</TableDataCell>
                  <TableDataCell>{product.price}</TableDataCell>
                  <TableDataCell>{product.quantity}</TableDataCell>
                  <TableDataCell>
                    {product.available ? 'Yes' : 'No'}
                  </TableDataCell>
                  <TableDataCell>{product.category?.name}</TableDataCell>
                  <TableDataCell>
                    <button
                      style={{
                        textAlign: 'center',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                      onClick={() => openMenu(product)}
                    >
                      <Menu size='16' color='#FF8A65' />
                      {/* <DropdownTableMenu
                        buttonText={<Menu size="16" color="#FF8A65" />}
                        isOpen={isOpenList[index] || false}
                        toggleDropdown={() => toggleDropdown(index, product.id)} // Pass toggleDropdown function with index
                        menuItems={menuItems}
                        productId={product.id}
                      /> */}
                    </button>
                  </TableDataCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableWrapper>
      </div>
      <div style={{ float: 'right', margin: '10px' }}>
        <Pagination
          onChange={handlePageClick}
          current={current}
          total={all?.resultTotal}
        />
      </div>
    </>
  );
};

export default Products;
