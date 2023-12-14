import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Img1 from '../Images/HProducts/h1.jpg';
import { FaArrowRight } from 'react-icons/fa';
import './Cards.css';
import { useDispatch } from 'react-redux';

const Container = styled.div`
  height: 90vh;
  //width: 100%;

  //opacity: 20%;
  min-width: 500px;
  max-width: 500px;
  border-radius: 5px;
  //margin-left: 20px;
  //margin-right: 20px;
  //margin-top: 50px;
  // box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
const Background = styled.div``;
const Wrapper = styled.div``;
const Wrap = styled.div`
  width: 500px;
  padding-left: 15px;
  padding-bottom: 15px;
  //border-left: 1px solid #000;
  border-top: 1px solid gray;
`;
const ImgWrap = styled.div`
  //width: 350px;
  height: 375px;
  margin-top: 75px;
  //overflow-x: hidden;
  //overflow: hidden;
  position: relative;
  //background: pink;
  object-fit: cover;
  border-left: 1px solid gray;
`;
const Img = styled.img`
  width: 500px;
  height: 475px;
  object-fit: cover;
  transition: 500ms ease-in-out;
  position: relative;

  position: absolute;
  margin-top: -102px;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(
      0,
      0,
      0,
      0.5
    ); /* Adjust the alpha (fourth value) for transparency */
    opacity: 0; /* Initially transparent */
    transition: opacity 500ms ease-in-out;
    z-index: 99;
  }
  /* Show the overlay on hover */
  ${ImgWrap}:hover &::before {
    opacity: 1;
  }
  /* Scale the image on hover */
  ${ImgWrap}:hover & {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
const Header = styled.div`
  padding-top: 15px;
  font-weight: 400;
  font-size: 1.2rem;
  color: #000;
  //width: 350px;
`;
const SubHeader = styled.div`
  color: #ba9f07;
  font-weight: 300;
  font-size: 1.3rem;
`;
const Price = styled.div`
  display: flex;
  gap: 5px;
  //padding-top: 15px;
`;
const Circle = styled.div`
  background: #ff0055;
  color: #fff;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-top: 15px;
  transition: 300ms ease-in-out;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 5px rgba(178, 12, 78, 0.5);
  }
`;
const Div = styled.div`
  transition: 300ms ease-in-out;
`;

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = product.title;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(' ').join('');
  };
  const rootId = idString(_id);
  const [isHovered, setIsHovered] = useState(false);
  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Container className="bg-pink-200">
      <Background></Background>
      <ImgWrap
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="bg-pink-50"
      >
        <Img src={`http://localhost:8081/api/products/` + product.cover} />
      </ImgWrap>
      <Wrapper className="bg-white">
        <Wrap>
          <Header>{product.title}</Header>
          <Price>
            <SubHeader>£{product.price}</SubHeader>
            <p className="line-through text-gray-500 ">£{product.price}</p>
          </Price>
          <Circle
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Div className={isHovered ? 'right' : ''}>
              <FaArrowRight />
            </Div>
          </Circle>
        </Wrap>
      </Wrapper>
    </Container>
  );
};

export default Card;
