import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import Products from '../components/Products/Products';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    setProducts(data.data);
  }, [data]);
  const Container = styled.div`
    padding-top: 100px;
  `;
  return (
    <Container>
      <Products products={products} />
    </Container>
  );
};

export default Shop;
