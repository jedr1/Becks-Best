import React, { useState } from 'react';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import Img1 from '../../assets/black-friday.jpg';
import Img2 from '../../assets/fri2.jpg';
import Img3 from '../../assets/shop-bag.jpg';
import Img4 from '../../assets/fri2.jpg';
import styled from 'styled-components';
import Video from '../Images/VideoDark.mp4';
import { Link } from 'react-router-dom';
import { Button } from '../Button';

const VideoBg = styled.video`
  width: 100vw;
  height: 95vh;
  margin-top: 5vh;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  position: absolute;
  z-index: 0;
  //z-index: 0;
  top: 0;
  //z-index: 999;
`;
const Div = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: left;
  color: #fff;
  overflow: hidden;
  height: 100vh;
`;
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  z-index: 99;
  margin-left: 125px;
`;
const Content = styled.div`
  // border: 1px solid #000;
  padding: 20px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  max-width: 1000px;
  //margin-top: 150px;
  @media screen and (max-width: 380px) {
    height: 100%;
  }
`;
const Header = styled.h1`
  text-align: left;
  font-size: 4rem;
  //font-family: 'Roboto Slab', serif;
  font-family: 'Playfair Display', serif;
  //font-family: 'Playfair Display', serif;
  font-weight: 800;
  margin-top: 50px;
  text-transform: uppercase;
  @media screen and (max-width: 1300px) {
    font-size: 3rem;
    margin-top: 75px;
  }
  @media screen and (max-width: 768px) {
    font-size: 3.5rem;
    margin-top: 75px;
  }
  @media screen and (max-width: 500px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 380px) {
    font-size: 2.6rem;
    overflow: hidden;
  }
`;
const SubHeader = styled.div`
  //text-align: center;
  font-size: 1.3rem;
  margin-top: 25px;
  margin-bottom: 50px;
  @media screen and (max-width: 500px) {
    margin-bottom: 0px;
    margin-top: 20px;
  }
`;
const Chev = styled.div``;
const BtnWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  display: flex;
  gap: 20px;
  //margin-bottom: 125px;
  @media screen and (max-width: 650px) {
    margin-top: 25px;
    margin-left: 10px;
    margin-right: 10px;
  }
  @media screen and (max-width: 500px) {
    grid-gap: 5px;
    grid-template-columns: 1fr;
    margin-top: 50px;
  }
`;
const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [Img1, Img2, Img3, Img4];
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };
  console.log(currentSlide);
  return (
    <Div>
      <VideoBg
        autoPlay
        loop
        muted
        src={Video}
        type="video/mp4"
        data-aos="fade"
      />
      <Wrapper>
        <Content>
          <Header>Refined Beauty</Header>
          <SubHeader>
            Experience the Pinnacle of Elegance with Our Collections
          </SubHeader>
          <BtnWrap>
            <a href="https://www.youtube.com/watch?v=QV8-ndOKSa8">
              <Button buttonStyle="btn--outline" buttonSize="btn--large">
                Watch Video
              </Button>
            </a>
            <Link to="/shop">
              <Button buttonSize="btn--large">Shop Now</Button>
            </Link>
          </BtnWrap>
        </Content>
      </Wrapper>
      {/* <div className="w-full h-auto overflow-x-hidden">
        <div className="w-screen-h-[650px] relative">
          <div
            style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            className="w-[400vw] h-full flex transition-transform duration-1000"
          >
            <img
              className="w-screen h-[80vh] object-cover"
              src={data[0]}
              alt=""
              loading="priority"
            />
            <img
              className="w-screen h-[80vh] object-cover"
              src={data[1]}
              alt=""
            />
            <img
              className="w-screen h-[80vh] object-cover"
              src={data[2]}
              alt=""
            />
            <img
              className="w-screen h-[80vh] object-cover"
              src={data[3]}
              alt=""
            />
          </div>
          <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
            <div
              onClick={prevSlide}
              className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white activ:bg-gray-900 duration-300"
            >
              <HiArrowLeft />
            </div>
            <div
              onClick={nextSlide}
              className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white activ:bg-gray-900 duration-300"
            >
              <HiArrowRight />
            </div>
          </div>
        </div>
      </div> */}
    </Div>
  );
};

export default Banner;
