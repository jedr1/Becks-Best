import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ProductsCard from './ProductsCard';
import Img1 from '../../assets/shop-bag.jpg';
import ShopBag from '../../assets/hrt-bag.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Cont = styled.div`
  background: rgb(245, 245, 245);
`;
const Header = styled.div`
  font-weight: 600;
  //width: 100%;
  //display: flex;
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  color: #000;
  padding-top: 10px;
  //height: 20px;
  //padding-top: 100px;
  //height: 40px;
  //margin-bottom: 50px;
`;
const Desc = styled.div`
  font-weight: 300;
  font-size: 1.1rem;
  text-align: center;
  margin-right: 50px;
  margin-left: 50px;
  padding-top: 25px;
  padding-bottom: 25px;
`;
const Ico = styled.img`
  height: 40px;
  width: 40px;
  margin-top: 10px;
`;
const Wrap = styled.div`
  background: rgb(245, 245, 245);
  background: #fff;
  width: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Div = styled.div`
  padding-bottom: 50px;
  padding-top: 25px;
`;
const H1 = styled.h1`
  font-family: 'Playfair Display', serif;
  font-weight: 300;
  font-size: 1.5rem;
  color: #333;
  padding-bottom: 15px;
`;

const Products = ({ products }) => {
  // console.log(products);
  // const [data, setData] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:8081/api/products');
  //     setData(response.data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // useEffect(() => {
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:8081/api/products');
  //     setData(response.data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  //   fetchData();
  // }, []);

  // const latestProducts = products.filter((product) => product.latest === 1);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const defaultSort = queryParams.get('sort') || 'default';
  const defaultCategory = queryParams.get('category') || 'all';
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory); // Default to 'all'
  const [selectedSort, setSelectedSort] = useState(defaultSort);

  const productsArray = Object.values(products);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://becks-best-c64383031a9a.herokuapp.com/api/products'
      );
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    // Whenever selectedSort changes, you can update the URL
    const searchParams = new URLSearchParams();
    searchParams.set('sort', selectedSort);
    searchParams.set('category', selectedCategory);
    // Replace the current URL without reloading the page
    window.history.replaceState(
      {},
      '',
      `${location.pathname}?${searchParams.toString()}`
    );
  }, [selectedSort, selectedCategory, location.pathname]);

  // Filter products based on the selected category
  const filteredProducts = productsArray.filter((product) => {
    if (selectedCategory === 'all') {
      return true; // Show all products if 'all' is selected
    } else {
      return product[selectedCategory] === 1;
    }
  });
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (selectedSort === 'lowToHigh') {
      return a.price - b.price; // Sort low to high
    } else if (selectedSort === 'highToLow') {
      return b.price - a.price; // Sort high to low
    } else {
      return 0; // No sorting (default)
    }
  });
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedSort('default');
    setSelectedCategory('all');
  };

  return (
    <Cont className=" relative w-[100%] h-[100%] flex items-center justify-center flex-col">
      <img className="w-full h-60 object-cover" src={Img1} alt="" />
      {/* ... (existing code) */}
      {/* Filter dropdown */}
      <Wrap className=" my-[-50px]">
        <Header>
          Shop {selectedCategory === 'r' ? <span>Rings</span> : <span></span>}
          {selectedCategory === 'n' ? <span>Necklaces</span> : <span></span>}
          {selectedCategory === 'e' ? <span>Earrings</span> : <span></span>}
          {selectedCategory === 'b' ? <span>Bracelets</span> : <span></span>}
          {selectedCategory === 'all' ? <span>Becks Best</span> : <span></span>}
          {selectedCategory === 'sale' ? (
            <span>in the Sale</span>
          ) : (
            <span></span>
          )}
        </Header>
        <Ico src={ShopBag} alt="" />

        <Desc>
          Will it fit your style? Is it too bold? Is it too understated? Can you
          afford it? When shopping for jewelry, you are going to run into
          problems. At Becks Best we mitigate these issues with our smart
          search: compare style, prices, and materials so that you can walk away
          with jewelry that is right for you. We even offer a free 30-day return
          because we want you to love your jewelry!
        </Desc>

        <Div className="bg-[rgb(245,245,245)] w-full" data-aos="fade-up">
          <H1 className="text-center">Filter:</H1>
          <div className="w-full flex  items-center justify-center gap-[25px]">
            <div className="flex items-center gap-4 mb-4">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border p-2 w-[200px]"
              />
            </div>
            <div className="flex items-center gap-4 mb-4 ">
              {/* <span className="text-lg font-bold">Filter by Category:</span> */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border p-2 w-[200px]"
              >
                <option value="all">Category</option>
                <option value="r">Rings</option>
                <option value="n">Necklaces</option>
                <option value="e">Earrings</option>
                <option value="b">Bracelets</option>
                <option value="sale">Sale Products</option>
              </select>
            </div>
            <div className="flex items-center gap-4 mb-4">
              {/* <span className="text-lg font-bold">Sort by Price:</span> */}
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="border p-2 w-[200px]"
              >
                <option value="default">Price</option>
                <option value="lowToHigh">Low to High</option>
                <option value="highToLow">High to Low</option>
              </select>
            </div>
            <button
              onClick={clearFilters}
              className="border p-2 bg-gray-300 flex items-center justify-between w-[200px] group "
            >
              <span className="transition duration-300 ease-in-out group-hover:text-gray-500">
                Clear Filters{' '}
              </span>
              <span className="transition duration-300 ease-in-out">
                <i class="fa-solid fa-circle-xmark"></i>
              </span>
            </button>
            {/* <div className="border h-[40px] py-2  w-[200px] flex items-center justify-center">
              <div
                onClick={clearFilters}
                className="flex w-full h-full items-start justify-center"
              >
                <span>Clear </span>
                <div className="w-[200px] h-[full] flex items-center justify-center bg-gray">
                  <i class="fa-solid fa-circle-xmark"></i>
                </div>
              </div>
            </div> */}
          </div>
        </Div>
      </Wrap>

      {/* ... (existing code) */}
      <div className="w-full h-full bg-[rgb(245,245,245)]">
        <div
          className="w-[100%] h-[100%] flex items-center justify-center px-8"
          data-aos="fade-up"
        >
          <div className="max-w-screen-xl  py-10 grid grid-cols-4 gap-x-[25px] gap-y-[50px]">
            {/* {sortedProducts.map((item) => (
            <div className="flex w-[500px] items-center justify-center">
              <ProductsCard key={item._id} product={item} />
            </div>
          ))} */}
            {productsArray
              .filter((product) => {
                // Apply category filter
                if (selectedCategory === 'all') {
                  return true; // Show all products if 'all' categories selected
                } else {
                  return product[selectedCategory] === 1;
                }
              })
              .filter((product) => {
                // Apply search query filter
                const title = product.title || '';
                const description = product.description || '';
                return (
                  title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  description.toLowerCase().includes(searchQuery.toLowerCase())
                );
              })
              .sort((a, b) => {
                // Sort logic based on selectedSort
                if (selectedSort === 'lowToHigh') {
                  return a.price - b.price; // Sort low to high
                } else if (selectedSort === 'highToLow') {
                  return b.price - a.price; // Sort high to low
                } else {
                  return 0; // No sorting (default)
                }
              })
              .map((item) => (
                <div className="flex  items-center justify-center">
                  <ProductsCard key={item._id} product={item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </Cont>
  );
};

export default Products;
