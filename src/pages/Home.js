import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import Banner from '../components/Banner/Banner';
import Carousel from '../components/Carousel/Carousel';
import Highlights from '../components/Carousel/Highlights';
import Prac from '../components/Carousel/Prac';
import Footer from '../components/Footer/Footer';
import FullRange from '../components/FullRange/FullRange';
import ParallaxSection from '../components/FullRange/Parrallax';
import Header from '../components/Header';
import Products from '../components/Products/Products';
import HoriCarousel from '../components/Stakes/Hori';
import Rand from '../components/Stakes/Rand';

import Stakes from '../components/Stakes/Stakes';
import Value from '../components/Value/Value';

const Div = styled.div`
  //max-width: 100vw;
  //overflow-x: hidden;
`;
const Div2 = styled.div`
  //overflow-x: auto;
`;

const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    setProducts(data.data);
  }, [data]);
  return (
    <Div>
      <Banner />
      <Highlights />
      <FullRange products={products} />
      <Div2>
        <Rand />
      </Div2>

      <Stakes />
      <Value />
      {/* <Products products={products} /> */}
    </Div>
  );
};

export default Home;
