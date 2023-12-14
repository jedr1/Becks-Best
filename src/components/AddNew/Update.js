import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  position: relative;
`;

const Update = () => {
  const [product, setProduct] = useState({
    title: '',
    desc: '',
    price: null,
    cover: null,
    measure: '',
    oldPrice: null,
  });
  const navigate = useNavigate();
  const location = useLocation();
  const productId = location.pathname.split('/')[2];
  console.log(productId);
  const handleChange = (e) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct((prev) => ({ ...prev, [e.target.name]: file }));
    }
  };
  //console.log(product);
  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.put(
  //       'http://localhost:8081/api/products/' + productId,
  //       product
  //     );
  //     navigate('/');
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', product.title);
      formData.append('desc', product.desc);
      formData.append('price', product.price);
      formData.append('cover', product.cover);
      formData.append('measure', product.measure);
      formData.append('oldPrice', product.oldPrice);

      await axios.put(
        `https://becks-best-c64383031a9a.herokuapp.com/api/products/${productId}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
  const Cover = product.cover;
  console.log(Cover);
  return (
    <Container>
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="desc"
        onChange={handleChange}
        name="desc"
      />
      <input
        type="number"
        placeholder="price"
        onChange={handleChange}
        name="price"
      />
      <input
        type="file"
        placeholder="cover"
        onChange={handleFileChange}
        name="cover"
      />
      <input
        type="number"
        placeholder="oldPrice"
        onChange={handleChange}
        name="oldPrice"
      />
      <input
        type="text"
        placeholder="measure"
        onChange={handleChange}
        name="measure"
      />
      <button className="formButton" onClick={handleClick}>
        Update
      </button>
    </Container>
  );
};

export default Update;
