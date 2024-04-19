import styled from 'styled-components';
import { Footer } from '../features';
import SliderComponent from '../features/newshop/newShop';
import { MultipleProducts } from '../StoreSlide';
import CategoriesList from './categoriesItems';
import General from '../features/newshop/general';
import SubCategory from './subCategories';
import { useNavigate } from 'react-router-dom';
import useProductStore from './productStore';
import { useEffect, useRef, useState } from 'react';
import ReusableCard from '../features/newshop/card';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ColorRing } from 'react-loader-spinner';
import AlertCards from '../features/newshop/AlertCard';
import ModalVerified from './Welcome';
import Navbar from './Nav';
import Modal from './modal';
import { BaseUrl } from '../utils/config';
import axios from 'axios';
import { RoundButton } from '../App';
import useGlobalModalStore from './useGlobalModal';
import moment from 'moment/moment';

const TopSnacker = styled.div`
  display: flex;
  flex: 1;
  // justify-content: space-between;
  width: 100vw;
  margin: 10px 15px;
`;

const TopSnackerColor = styled.div`
  width: 20px;
  border-radius: 4px;
  background: #ffb000;
  color: transparent;
  height: 30px;
  margin-bottom: 20px;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin: 20px 40px;
  width: 100vw;
  @media (max-width: 912px) {
    margin: 20px 0px;
  }
`;
const Categories = styled.div`
  width: 20%;
  // position: fixed;
  box-sizing: border-box;
  // min-height: 100vh;
  background: #fff;
  top: 10rem;
  // z-index: -1;

  @media (max-width: 912px) {
    display: none; // Hide the component on screens with a width of 768 pixels or smaller
  }
`;
const Products = styled.div`
  width: 71%;
  margin-right: 90px;
  // margin-left: 21%;
  // margin-bottom: 10000px
  /* background: red; */
  min-height: 100vh;
  @media (max-width: 912px) {
    width: 100%;
    margin-left: 0;
    //  overflow-x: hidden;
  }
`;

const Cover = styled.div`
  margin-top: 50px;
  margin-bottom: 150px;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 912px) {
    padding: 0;
  }
`;
const Picks = styled.div`
  margin: 10px auto;
  width: 100%;
`;
const ContainerInf = styled.div`
  display: flex;
  justify-content: center; /* Center the content horizontally */
  margin: 20px 0px;
  @media (max-width: 912px) {
    width: 100%;
    overflow-x: hidden;
    //  margin-left: -20px;
  }
  @media (max-width: 412px) {
    // width: 100%;
    margin-left: 0;
  }
  @media (max-width: 360px) {
    width: 100%;
    margin-left: 15px;
  }
`;

const CategoryButton = styled.div`
  display: none;
  /* background: red; */
  margin-top: 3rem;
  margin-bottom: -3rem;
  display: flex;
  justify-content: center;
  display: none;
  @media (max-width: 912px) {
    display: flex;
  }
`;
const ModalCategoryCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* max-width: 400px; */
`;
const ModalCategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  height: 100px;
  text-align: center;
  padding: 2px;
  margin: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px 0px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    box-shadow: none;
    transition: 0.35s ease;
  }
`;
const CategoriesHeader = styled.h2`
  font-weight: 300;
  color: #43484d;
`;
const NewStore = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const products = useProductStore((state) => state.products);
  const fetchProducts = useProductStore((state) => state.fetchProducts);
  const categories = useProductStore((state) => state.categories);
  const [modalOpen, setModalOpen] = useState(false);
  // const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [isSelectCategory, setIsSelectCategory] = useState(false);
  const {
    setIsShopsClose,
    isShopsClose,
    isCategoryModalOpen,
    setIsCategoryModalOpen,
  } = useGlobalModalStore();
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const updateWorkingHours = () => {
      // const now = new Date();
      const now = moment();
      let hour = now.hours();
      hour = hour % 12 || 12;
      const minute = now.minutes();
      let shopsOpen = hour >= 10 && hour <= 17 && minute >= 0;
      setIsShopsClose(!shopsOpen);
    };
    updateWorkingHours();
    // Update every minute
    const intervalId = setInterval(updateWorkingHours, 60000);

    return () => clearInterval(intervalId);
  }, [isShopsClose, setIsShopsClose]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const user = params.get('user');
    const token = params.get('token');
    if (user && token) {
      setModalOpen(true);
    }
  }, []);

  useEffect(() => {
    loadNextPage();
  }, []);

  const loadNextPage = async () => {
    try {
      await fetchProducts(page);
      setPage(page + 1);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleAddToWishlist = (productId) => {
    navigate(`/product/${productId}`);
  };
  // const [categories, setCategories] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${BaseUrl}/categories/all-categories`
  //       );
  //       setCategories(response.data.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const searchProducts = useProductStore(
    (state) => state.searchProductsByCategory
  );
  const handleCategorySearch = (category) => {
    navigate(`?cat=${category?.name}`);
    searchProducts(category.id);
    setIsCategoryModalOpen(false);

    // setIsCategory(true);
  };
  const handleCategoryCloseSearch = () => {
    navigate('/');
    searchProducts('');
    setIsCategoryModalOpen(false);
    setIsSelectCategory(false);
  };

  return (
    <>
      <ModalVerified show={modalOpen} onClose={closeModal} />
      <Navbar />
      <div style={{ marginTop: '10rem' }}></div>
      {/* <AlertCards type="danger">
      Payment System Maintenance Notice: Our payment system is currently undergoing maintenance for improved performance and security. We apologize for any inconvenience. Please bear with us as we work to resolve this issue. Thank you for your understanding.
      </AlertCards> */}
      <Container>
        <Categories>
          <CategoriesList />
        </Categories>
        <Products>
          <div>
            <MultipleProducts />
          </div>
          <CategoryButton>
            <RoundButton
              bgColor={isSelectCategory && '#ffb000'}
              style={{
                // border: isSelectCategory && ' 1px solid red',
                boxShadow: isSelectCategory && 'none',
                width: '150px',
                color: '#FFFFFF',
              }}
              onClick={() => {
                isSelectCategory
                  ? handleCategoryCloseSearch()
                  : setIsCategoryModalOpen(true);
              }}
            >
              {isSelectCategory ? 'Clear Categories' : 'Choose Categories'}
            </RoundButton>
          </CategoryButton>
          <ContainerInf>
            <InfiniteScroll
              style={{ float: 'center' }}
              dataLength={products.length}
              next={loadNextPage}
              hasMore={hasMore}
              loader={
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // height: "10vh",
                  }}
                >
                  <ColorRing
                    visible={products.length === 0 ? false : true}
                    height='80'
                    width='80'
                    ariaLabel='color-ring-loading'
                    wrapperStyle={{ float: 'center' }}
                    wrapperClass='color-ring-wrapper'
                    colors={[
                      '#e15b64',
                      '#f47e60',
                      '#f8b26a',
                      '#abbd81',
                      '#849b87',
                    ]}
                  />
                </div>
              }
              endMessage={<p>No more products</p>}
            >
              <Cover>
                {products.map((product, index) => (
                  <ReusableCard
                    key={index}
                    title={product?.name}
                    price={product?.price}
                    discount='20% OFF'
                    imageUrl={product?.imageUrl}
                    isShopClose={isShopsClose}
                    onAddToWishlist={() => navigate(`product/${product?.id}`)}
                  />
                ))}
              </Cover>
            </InfiniteScroll>
          </ContainerInf>
        </Products>
      </Container>
      {/* <div>
        <div style={{ margin: "1px 20px" }}>
          <TopSnacker>
            <TopSnackerColor>heeo</TopSnackerColor>
            <div
              style={{
                marginLeft: "15px",
                fontSize: "12px",
                fontWeight: "400",
                color: "#004225",
              }}
            >
              Category
            </div>
          </TopSnacker>
          <div
            style={{
              marginLeft: "15px",
              fontSize: "18px",
              fontWeight: "400",
              color: "#004225",
            }}
          >
            Browse By Shop Category
          </div>
          <SubCategory />
          <TopSnacker>
            <TopSnackerColor>heeo</TopSnackerColor>
            <div
              style={{
                marginLeft: "10px",
                fontSize: "13px",
                fontWeight: "400",
                color: "#004225",
              }}
            >
              This Month's Pick
            </div>
          </TopSnacker>
        </div>
        <Picks>
          <General dislay={4} />
          <TopSnacker>
            <TopSnackerColor>heeo</TopSnackerColor>
            <div
              style={{
                marginLeft: "10px",
                fontSize: "13px",
                fontWeight: "400",
                color: "#004225",
              }}
            >
              Top Vendors this week
            </div>
          </TopSnacker>
        </Picks>
      </div> */}

      <Modal
        show={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        style={{ maxWidth: '450px' }}
      >
        <>
          <CategoriesHeader>Categories</CategoriesHeader>
          <ModalCategoryCont>
            {categories?.map((category) => {
              return (
                <div key={category.id} style={{ cursor: 'poiter' }}>
                  <ModalCategoryCard
                    onClick={() => {
                      handleCategorySearch(category);
                      setIsSelectCategory(true);
                    }}
                  >
                    <img
                      src={category.imageUrl}
                      width={50}
                      height={50}
                      style={{ borderRadius: '100%' }}
                    />
                    {category.name}
                  </ModalCategoryCard>
                </div>
              );
            })}
          </ModalCategoryCont>
        </>
      </Modal>

      <div style={{ marginTop: '5rem' }}>
        <Footer style={{ zIndex: '2' }} />
      </div>
    </>
  );
};

export default NewStore;
