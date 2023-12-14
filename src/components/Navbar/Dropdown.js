import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { menuData } from '../data/MenuData';
import Img1 from '../../assets/bbr-min.jpg';
import ShopBag from '../../assets/shop-all.png';
import ImgB from '../../assets/bbb.png';
import ImgBB from '../../assets/bbbb.png';
import ImgE from '../../assets/bbe.png';
import ImgS from '../../assets/bbs.png';
import ImgN from '../../assets/bbn.png';
import IconR from '../../assets/ring.png';
import IconE from '../../assets/earring.png';
import IconB from '../../assets/bracelet.png';
import IconN from '../../assets/necklace.png';

import './Dropdown.css';

const DropdownContainer = styled.div`
  //margin-top: 235px;
  position: fixed;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  //background: rgb(237, 237, 237);
  //background: #fff;
  //background: rgba(180, 134, 152, 0.9);
  //background: #000;
  display: grid;
  //align-items: center;
  top: 0;
  left: 0;

  transition-delay: ${({ isOpen }) => (isOpen ? '0s' : '1s')};
  /* opacity: ${({ isOpen }) => (isOpen ? '1' : '0')}; */
  //display: ${({ isOpen }) => (isOpen ? 'grid' : 'none')};
  /* top: ${({ isOpen }) => (isOpen ? '0' : '-150%')}; */
  z-index: ${({ isOpen }) => (isOpen ? '150' : '0')};
  @media screen and (max-width: 500px) {
    //height: 55vh;
  }
  @media screen and (max-width: 380px) {
    // height: 60vh;
  }
  @media screen and (max-width: 768px) {
    //margin-top: 195px;
  }
  @media screen and (max-width: 600px) {
    //margin-top: 145px;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  left: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const CloseIcon = styled(FaTimes)`
  color: rgb(178, 12, 78);
`;

const DropdownWrapper = styled.div`
  //display: flex;
  /* justify-content: center;
  align-items: center; */
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 2.5fr 1fr;
  }
`;

const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  // margin-bottom: 2rem;
  //display: flex;
  //position: relative;
  // left: 35vw;
  //left: 50%;
  @media screen and (max-width: 1500px) {
    grid-template-rows: repeat(7, 50px);
    //margin-bottom: 4rem;
  }
  @media screen and (max-width: 500px) {
    grid-template-rows: repeat(7, 60px);
  }
  @media screen and (max-width: 380px) {
    grid-template-rows: repeat(7, 60px);
    margin-bottom: 5rem;
  }
  @media screen and (max-height: 650px) {
    margin-top: 200px;
  }
`;

const DropdownLink = styled(Link)`
  ///background-color: #fff;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: left;
  text-decoration: none;
  color: #000;
  margin-left: 10px;
  font-size: 1.2rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  width: 100vw;
  align-self: center;
  //padding-bottom: 10px;
  //text-align: center;
  transition: 0.2s ease-in-out;

  &:hover {
    /* transform: translateX(20px); */
    padding-left: 20px;
  }
  @media screen and (max-width: 1500px) {
    font-size: 1.1rem;
    height: 30px;
  }
  @media screen and (max-width: 768px) {
    //margin-right: 50px;
    //font-size: 1rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
    height: 50px;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  color: #000;
  margin-bottom: 25px;
  @media screen and (max-width: 600px) {
    //margin-right: 50px;
  }
`;
const NavBtnLink = styled(Link)`
  border-radius: 50px;
  background: rgb(178, 12, 78);
  white-space: nowrap;
  padding: 10px 22px;
  margin-left: -20%;
  margin-top: 35px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transform: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: #fff;
  }
`;
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Wrap = styled.div`
  display: flex;
  height: 100vh;
  //align-items: center;
  margin-top: 150px;
  @media screen and (max-width: 1500px) {
    //align-items: flex-start;
    margin-top: -50px;
  }
  @media screen and (max-width: 500px) {
    margin-top: 0;
  }
  //justify-content: center;
`;
const One = styled.div`
  display: flex;
  //align-items: flex-start;
  //border-top: 30px solid #000;
  background: #fff;
  height: 100%;

  //transition: 1s ease;
  //transition: 01s ease-in-out;
  //margin-left: ${({ isOpen }) => (isOpen ? '-10px' : '0px;')};
`;
const Two = styled.div`
  /* position: relative;
  left: 0; */
  background-color: #081542;
  background-color: rgba(8, 21, 66, 0.8);
  background: rgb(245, 245, 245);
  background-color: rgb(237, 237, 237);
  height: 100%;
  width: 100%;
  transition: 01s ease-in-out;
  position: relative;
  z-index: 999;
  //margin-left: 3000px;
`;
const Div = styled.div``;

const PlusMinusIcon = styled.span`
  display: block;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: #fff;
    width: 20px;
    height: 3px;
    top: 50%;
    left: 10%;
    transform: translate(0%, 0%);
  }

  &::before {
    transform: rotate(90deg);
  }
`;
const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(135deg);
  }
`;

const PlusMinusButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #3498db;
  color: white;
  border: none;
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &.opened {
    animation: ${rotateAnimation} 0.3s ease forwards;
  }
`;
const List = styled.div`
  display: flex;
  gap: 15px;
  //margin-left: 100px;
  align-items: left;
  justify-content: left;

  &:hover {
    cursor: pointer;
  }
`;
const ListItem = styled.div`
  font-size: 2rem;
  font-family: 'Playfair Display', serif;
  margin-top: -10px;
`;
const Line = styled.div`
  border-bottom: 1px solid #ff0054;
  width: 100px;
  margin-top: 5px;
  //margin-left: 100px;
  //height: 10px;
`;
const ListWrap = styled.div`
  margin-left: 100px;
  margin-bottom: 25px;
  //transition: 300ms ease-in-out;
`;
const DropBoxMenu = styled.div`
  transition: height 0.5s ease-in-out; // You can adjust the duration and easing function
  height: ${({ isClicked }) => (isClicked ? '0' : 'auto')};
  //height: auto; // Set initial height to 0
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
  margin-left: 15px;
`;
const DropDown = styled.div`
  font-size: 300;
  transition: 300ms ease-in-out;
  &:hover {
    cursor: pointer;
    transform: translateX(10px);
  }
`;
const Img = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  margin-top: 100px;
`;
const TwoWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Head = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  margin-top: 15px;
  //width: 100%;
`;
const P = styled.p`
  text-align: center;
  font-weight: 300;
  font-size: 1.2rem;
  margin-right: 50px;
  margin-left: 50px;
  margin-top: 15px;
`;
const Ico = styled.img`
  height: 40px;
  width: 40px;
  margin-top: 15px;
`;

const Dropdown = ({ isOpen, toggle }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [isOpened, setIsOpened] = useState(false);

  const handleClicked = () => {
    setIsOpened(!isOpened);
  };
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const [isClicked2, setIsClicked2] = useState(false);

  const handleClick2 = () => {
    setIsClicked2(!isClicked2);
  };
  const [isClicked3, setIsClicked3] = useState(false);

  const handleClick3 = () => {
    setIsClicked3(!isClicked3);
  };
  const [isClicked4, setIsClicked4] = useState(false);

  const handleClick4 = () => {
    setIsClicked4(!isClicked4);
  };
  const [isClicked5, setIsClicked5] = useState(false);

  const handleClick5 = () => {
    setIsClicked5(!isClicked5);
  };
  return (
    <DropdownContainer isOpen={isOpen}>
      <DropdownWrapper>
        <One className={`${isOpen ? 'one' : 'one-gone'}`}>
          <Wrap>
            <DropdownMenu>
              <ListWrap>
                <List onClick={handleClick}>
                  <div className={`plus-button ${isClicked ? 'clicked' : ''}`}>
                    <div className="horizontal-line"></div>
                    <div
                      className={`vertical-line ${isClicked ? 'hidden' : ''}`}
                    ></div>
                  </div>
                  <ListItem>Shop All</ListItem>
                </List>
                <Line></Line>
                {isClicked ? (
                  <DropBoxMenu data-aos="fade-right">
                    <Link to="shop?sort=default">
                      <DropDown onClick={toggle}>Shop All</DropDown>
                    </Link>
                    <Link to="shop?sort=highToLow">
                      <DropDown onClick={toggle}>Price high to low</DropDown>
                    </Link>
                    <Link to="shop?sort=lowToHigh">
                      <DropDown onClick={toggle}>Price low to high</DropDown>
                    </Link>
                  </DropBoxMenu>
                ) : (
                  <div></div>
                )}
              </ListWrap>
              <ListWrap>
                <List onClick={handleClick2}>
                  <div className={`plus-button ${isClicked2 ? 'clicked' : ''}`}>
                    <div className="horizontal-line"></div>
                    <div
                      className={`vertical-line ${isClicked2 ? 'hidden' : ''}`}
                    ></div>
                  </div>
                  <ListItem>Rings</ListItem>
                </List>
                <Line></Line>
                {isClicked2 ? (
                  <DropBoxMenu data-aos="fade-right">
                    <Link to="/shop?sort=default&category=r">
                      <DropDown onClick={toggle}>Shop Rings</DropDown>
                    </Link>
                    <Link to="/shop?sort=highToLow&category=r">
                      <DropDown onClick={toggle}>Price high to low</DropDown>
                    </Link>
                    <Link to="shop?sort=lowToHigh&category=r">
                      <DropDown onClick={toggle}>Price low to high</DropDown>
                    </Link>
                  </DropBoxMenu>
                ) : (
                  <div></div>
                )}
              </ListWrap>
              <ListWrap>
                <List onClick={handleClick3}>
                  <div className={`plus-button ${isClicked3 ? 'clicked' : ''}`}>
                    <div className="horizontal-line"></div>
                    <div
                      className={`vertical-line ${isClicked3 ? 'hidden' : ''}`}
                    ></div>
                  </div>
                  <ListItem>Necklaces</ListItem>
                </List>
                <Line></Line>
                {isClicked3 ? (
                  <DropBoxMenu data-aos="fade-right">
                    <Link to="shop?sort=default&category=n">
                      <DropDown onClick={toggle}>Shop Necklaces</DropDown>
                    </Link>
                    <Link to="shop?sort=highToLow&category=n">
                      <DropDown onClick={toggle}>Price high to low</DropDown>
                    </Link>
                    <Link to="shop?sort=lowToHigh&category=n">
                      <DropDown onClick={toggle}>Price low to high</DropDown>
                    </Link>
                  </DropBoxMenu>
                ) : (
                  <div></div>
                )}
              </ListWrap>
              <ListWrap>
                <List onClick={handleClick4}>
                  <div className={`plus-button ${isClicked4 ? 'clicked' : ''}`}>
                    <div className="horizontal-line"></div>
                    <div
                      className={`vertical-line ${isClicked4 ? 'hidden' : ''}`}
                    ></div>
                  </div>
                  <ListItem>Earrings</ListItem>
                </List>
                <Line></Line>
                {isClicked4 ? (
                  <DropBoxMenu data-aos="fade-right">
                    <Link to="shop?sort=default&category=e">
                      <DropDown onClick={toggle}>Shop Earrings</DropDown>
                    </Link>
                    <Link to="shop?sort=highToLow&category=e">
                      <DropDown onClick={toggle}>Price high to low</DropDown>
                    </Link>
                    <Link to="shop?sort=lowToHigh&category=e">
                      <DropDown onClick={toggle}>Price low to high</DropDown>
                    </Link>
                  </DropBoxMenu>
                ) : (
                  <div></div>
                )}
              </ListWrap>
              <ListWrap>
                <List onClick={handleClick5}>
                  <div className={`plus-button ${isClicked5 ? 'clicked' : ''}`}>
                    <div className="horizontal-line"></div>
                    <div
                      className={`vertical-line ${isClicked5 ? 'hidden' : ''}`}
                    ></div>
                  </div>
                  <ListItem>Bracelets</ListItem>
                </List>
                <Line></Line>
                {isClicked5 ? (
                  <DropBoxMenu data-aos="fade-right">
                    <Link to="shop?sort=default&category=b">
                      <DropDown onClick={toggle}>Shop Bracelets</DropDown>
                    </Link>
                    <Link to="shop?sort=highToLow&category=b">
                      <DropDown onClick={toggle}>Price high to low</DropDown>
                    </Link>
                    <Link to="shop?sort=lowToHigh&category=b">
                      <DropDown onClick={toggle}>Price low to high</DropDown>
                    </Link>
                  </DropBoxMenu>
                ) : (
                  <div></div>
                )}
              </ListWrap>
            </DropdownMenu>
          </Wrap>
          {/* <BtnWrap>
            <Link to="/contact">
              <Button primary="true" dark="true" to="/contact">
                Contact us
              </Button>
            </Link>
          </BtnWrap> */}
        </One>
        <Two className={`${isOpen ? 'two' : 'two-gone'}`}>
          {isClicked5 ? (
            <TwoWrap data-aos="fade">
              <Img src={ImgB} alt="" />
              <Head>Shop Bracelets</Head>
              <Ico src={IconB} alt="" />
              <P>
                Will it fit your style? Is it too bold? Is it too understated?
                Can you afford it? When shopping for jewelry, you are going to
                run into problems. At Becks Best we mitigate these issues with
                our smart search: compare style, prices, and materials so that
                you can walk away with jewelry that is right for you. We even
                offer a free 30-day return because we want you to love your
                jewelry!{' '}
              </P>
            </TwoWrap>
          ) : (
            <div></div>
          )}
          {isClicked4 ? (
            <TwoWrap data-aos="fade">
              <Img src={ImgE} alt="" />
              <Head>Shop Earrings</Head>
              <Ico src={IconE} alt="" />
              <P>
                Will it fit your style? Is it too bold? Is it too understated?
                Can you afford it? When shopping for jewelry, you are going to
                run into problems. At Becks Best we mitigate these issues with
                our smart search: compare style, prices, and materials so that
                you can walk away with jewelry that is right for you. We even
                offer a free 30-day return because we want you to love your
                jewelry!{' '}
              </P>
            </TwoWrap>
          ) : (
            <div></div>
          )}
          {isClicked3 ? (
            <TwoWrap data-aos="fade">
              <Img src={ImgN} alt="" />
              <Head>Shop Necklaces</Head>
              <Ico src={IconN} alt="" />
              <P>
                Will it fit your style? Is it too bold? Is it too understated?
                Can you afford it? When shopping for jewelry, you are going to
                run into problems. At Becks Best we mitigate these issues with
                our smart search: compare style, prices, and materials so that
                you can walk away with jewelry that is right for you. We even
                offer a free 30-day return because we want you to love your
                jewelry!{' '}
              </P>
            </TwoWrap>
          ) : (
            <div></div>
          )}
          {isClicked2 ? (
            <TwoWrap data-aos="fade">
              <Img src={Img1} alt="" />
              <Head>Shop Rings</Head>
              <Ico src={IconR} alt="" />
              <P>
                Will it fit your style? Is it too bold? Is it too understated?
                Can you afford it? When shopping for jewelry, you are going to
                run into problems. At Becks Best we mitigate these issues with
                our smart search: compare style, prices, and materials so that
                you can walk away with jewelry that is right for you. We even
                offer a free 30-day return because we want you to love your
                jewelry!{' '}
              </P>
            </TwoWrap>
          ) : (
            <div></div>
          )}
          {isClicked ? (
            <TwoWrap data-aos="fade">
              <Img src={ImgS} alt="" />
              <Head>Shop All</Head>
              <Ico src={ShopBag} alt="" />
              <P>
                Will it fit your style? Is it too bold? Is it too understated?
                Can you afford it? When shopping for jewelry, you are going to
                run into problems. At Becks Best we mitigate these issues with
                our smart search: compare style, prices, and materials so that
                you can walk away with jewelry that is right for you. We even
                offer a free 30-day return because we want you to love your
                jewelry!{' '}
              </P>
            </TwoWrap>
          ) : (
            <div></div>
          )}

          <TwoWrap data-aos="fade">
            <Img src={ImgBB} alt="" />
            <Head>Shop Becks Best</Head>
            <Ico src={ShopBag} alt="" />
            <P>
              Will it fit your style? Is it too bold? Is it too understated? Can
              you afford it? When shopping for jewelry, you are going to run
              into problems. At Becks Best we mitigate these issues with our
              smart search: compare style, prices, and materials so that you can
              walk away with jewelry that is right for you. We even offer a free
              30-day return because we want you to love your jewelry!{' '}
            </P>
          </TwoWrap>
        </Two>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
