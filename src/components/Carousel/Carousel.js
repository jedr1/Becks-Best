import axios from 'axios';
import { useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import Card from './Card';

const Cont = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px;
  padding-top: 50px;
  padding-bottom: 0px;
  flex-direction: column;
`;
const Container = styled.div`
  //padding: 100px;
  /* width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center; */
  //gap: 20px;
  //z-index: 2;
  //position: relative;
  //display: flex;
  //overflow: hidden;
  //max-width: 80vw;
  gap: 20px;
  z-index: 2;
  position: relative;
  max-width: 1170px;
`;
const Pink = styled.div`
  width: 100vw;
  height: 150px;
  background: rgba(245, 245, 245);
  // opacity: 20%;
  position: absolute;
  z-index: 0;
  margin-top: 410px;
`;
const Wrapper = styled.div`
  display: flex;
  transition: transform 1s ease;
  min-width: 2340px;
  //gap: 20px;
  /* Add transition for smooth sliding */
`;
const Circle = styled.div`
  background: #333;
  color: #fff;
  height: 60px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  //border-radius: 50%;
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
const ButtonL = styled.button`
  /* position: absolute;
  left: 0;
  margin-left: 150px; */
`;
const ButtonR = styled.button`
  /* position: absolute;
  right: 0;
  margin-right: 10px; */
`;
const Header = styled.div`
  font-weight: 600;
  //width: 100%;
  //display: flex;
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  //height: 20px;
  margin-bottom: 50px;
  height: 60px;
`;
const Div2 = styled.div`
  display: flex;
`;

const Carousel = ({ products }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-60%']);
  console.log(products);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/products');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const latestProducts = products.filter((product) => product.latest === 1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };
  const [slideIndex, setSlideIndex] = useState(0);
  const [view, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px', // adjust rootMargin based on your needs
  });

  useEffect(() => {
    if (inView) {
      // Start scrolling animation when the component comes into view
      setSlideIndex(1); // or any other logic you want for the animation
    }
  }, [inView]);

  const handleNextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === 1 ? 0 : prevIndex + 1));
  };

  const handlePrevSlide = () => {
    setSlideIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };
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

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };
  return (
    <>
      <Cont>
        <Header>New Releases</Header>
        <Div2>
          <ButtonL onClick={handlePrevSlide}>
            <Circle
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              <Div className={isHovered2 ? 'left' : ''}>
                <FaChevronLeft />
              </Div>
            </Circle>
          </ButtonL>

          <Container>
            <Wrapper
              style={{ transform: `translateX(${-slideIndex * 1170}px)` }}
            >
              <Pink />
              {latestProducts.map((item) => (
                <Card key={item._id} product={item} />
              ))}
            </Wrapper>
          </Container>
          <ButtonR onClick={handleNextSlide}>
            <Circle
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Div className={isHovered ? 'right' : ''}>
                <FaChevronRight />
              </Div>
            </Circle>
          </ButtonR>
        </Div2>
      </Cont>
    </>
  );
};

export default Carousel;
