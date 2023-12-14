import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../Images/Logo.png';
import bag from '../Images/bag2.png';
import icon from '../Images/icon.png';
import search from '../Images/mag-glass.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import BRW from '../../assets/BRW-logo.webp';
import CART from '../../assets/Cart.jpg';
import './MenuIcon.css';

const Container = styled.div`
  background: white;
  height: 100px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.img`
  height: 50px;
  margin-right: 75px;
`;
const BagWrap = styled.div`
  position: absolute;
  right: 0;
  margin-right: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const Bag = styled.img`
  height: 65px;
  overflow-x: auto;
  overflow: auto;
  position: relative;
  z-index: 0;
  transition: 500ms ease-in-out;
  &:hover {
    cursor: pointer;
    height: 70px;
  }
`;
const Circle = styled.div`
  position: absolute;
  top: 0px; /* Adjust this value to position the circle from the top */
  right: 2.5px; /* Adjust this value to position the circle from the right */
  width: 30px;
  height: 30px;
  background-color: #ba9f07;
  border-radius: 50%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 800;
  z-index: 101;
`;
const Icon = styled.img`
  //height: 40px;
  // width 100%;
  object-fit: cover;
  transition: 500ms ease-in-out;
  margin-left: 5px;
  &:hover {
    cursor: pointer;
    /* transform: translateY(-4px); */
    //height: 45px;
  }
`;
const Icon2 = styled.img`
  //height: 40px;
  // width 100%;
  object-fit: cover;
  transition: 500ms ease-in-out;
  margin-left: 5px;
  &:hover {
    cursor: pointer;
    /* transform: translateY(-4px); */
    //height: 45px;
  }
`;
const ImageContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  &:hover {
    transition: 500ms ease;
    cursor: pointer;
  }
`;
const Search = styled.img`
  transition: 500ms ease-in-out;
  height: 25px;
`;

const Cont = styled.div`
  position: relative;
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
`;
const MenuIconWrap = styled.div`
  //height: 200px;
  /* width: 100%;
  height: 100%; */
  overflow-y: hidden;
  //position: absolute;
  left: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 75px;
`;
const IconWrap = styled.div`
  height: 100%;
  overflow: auto;
`;
const IconWrap2 = styled.div`
  height: 100%;
  overflow: auto;
`;
const Initial = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ff0054;
  //background: gray; /* You can choose your desired background color */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff; /* Text color inside the circle */
  font-size: 22px; /* You can adjust the font size */
  font-weight: 800;
`;

const Navbar = ({ toggle, isOpen, toggle2 }) => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.authData.userInfo);
  console.log('UserInf from Nav:', userInfo);
  const firstLetter = userInfo?.firstName?.charAt(0).toUpperCase();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const [isHovered2, setIsHovered2] = useState(false);

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };
  console.log(isOpen);

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };
  return (
    <Container>
      <Wrapper>
        <MenuIconWrap toggle={toggle} isOpen={isOpen}>
          <div
            className={`menu-icon ${isOpen ? 'open' : ''}`}
            onClick={toggle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div
              className={`${isHovered ? 'bar bar2 bar-hovered' : 'bar bar2'}`}
            ></div>
          </div>
        </MenuIconWrap>
        <Link>
          <Logo src={logo} alt="logo" onClick={toggle2} />
        </Link>
        <BagWrap onClick={toggle2}>
          <ImageContainer
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            <Search
              src={search}
              alt="search"
              className={`${isHovered2 ? 'move' : ''}`}
            />
          </ImageContainer>

          {userInfo ? (
            <Link to="/profile">
              <IconWrap2>
                <Initial>{userInfo ? firstLetter : ''}</Initial>
              </IconWrap2>
            </Link>
          ) : (
            <Link to="/sign-in">
              <IconWrap>
                <Icon
                  src={userInfo ? userInfo.image : icon}
                  className={userInfo ? 'icon' : 'p-icon'}
                  //className="icon"
                  alt="login"
                />
              </IconWrap>
            </Link>
          )}

          <Link to="/cart">
            <Cont>
              <Bag src={bag} alt="cart" />
              <Circle>{productData.length}</Circle>
            </Cont>
          </Link>
        </BagWrap>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
