import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Img1 from '../Images/HProducts/h1.jpg';
import { FaArrowRight } from 'react-icons/fa';
import './Cards.css';
import { useDispatch } from 'react-redux';

const Container = styled.div`
  height: 100vh;
  //width: 100%;

  //opacity: 20%;
  min-width: 500px;
  max-width: 500px;
  //border-radius: 5px;

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
const ImgWrapWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: end;
  flex-direction: column;
`;
const ImgWrap = styled.div`
  //width: 350px;
  width: 100%;
  height: 375px;
  //overflow-x: hidden;
  overflow: hidden;
  position: relative;

  //background: pink;
  object-fit: cover;
  border-left: 1px solid gray;
`;
const Img = styled.img`
  min-width: 500px;
  max-width: 1000px;
  width: 100%;
  min-width: 900px;
  height: 100%;
  //height: 375px;
  object-fit: cover;
  transition: 500ms ease-in-out;

  z-index: 1;
  transition: 1s ease-in-out;
  transform: translateX(-40%) translateX(${(props) => props.scrollOffset}px);
  transition: transform 0.2s ease-out;

  /* Scale the image on hover */
  /* ${ImgWrap}:hover & {
    cursor: pointer;
    transform: scale(1.02);
  } */
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
const Content = styled.div`
  font-family: 'Playfair Display', serif;
  padding-left: 25px;
`;

const HighCard = (props) => {
  const [scrollOffset, setScrollOffset] = useState(0);

  const handleScroll = () => {
    setScrollOffset(window.scrollY * 0.1); // Adjust the multiplier for different parallax speed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // const _id = product.title;
  // const idString = (_id) => {
  //   return String(_id).toLowerCase().split(' ').join('');
  // };
  // const rootId = idString(_id);
  // const [isHovered, setIsHovered] = useState(false);
  // const handleDetails = () => {
  //   navigate(`/product/${rootId}`, {
  //     state: {
  //       item: product,
  //     },
  //   });
  // };
  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };
  return (
    <Container className="bg-[#ff548d]">
      <Background></Background>

      <ImgWrapWrap>
        <Content className="w-full mb-[25px]  text-white text-[2.2rem]">
          <h2 className="pb-[10px]">{props.header}</h2>
          <div className="border-b border-b-solid border-b-white w-[50px]"></div>
        </Content>
        <ImgWrap
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
          className="bg-orange-900"
        >
          <Img src={props.src} alt="" scrollOffset={scrollOffset} />
        </ImgWrap>
      </ImgWrapWrap>
      {/* <Wrapper className="bg-white">
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
      </Wrapper> */}
    </Container>
  );
};

export default HighCard;
