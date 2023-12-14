import React, { useEffect, useRef, useState } from 'react';

import { motion, useTransform, useScroll } from 'framer-motion';
import styled from 'styled-components';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';
import HighCard from './HighCard';
import Ring from '../../assets/2.png';
import InfoCard from './InfoCard';
import RPNG from '../../assets/pr.png';
import NPNG from '../../assets/pn.png';
import BBN from '../../assets/bbn.png';
import HighCard2 from './HighCard2';
import FRI from '../../assets/fri2.jpg';

const Div = styled(motion.div)`
  font-size: 12rem;
  font-family: 'Playfair Display', serif;

  //height: 100%;
`;
const DivWrap = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Bot = styled.div`
  height: 10px;
  width: 10px;
  background: orange;
`;
const BotWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: baseline;
  justify-content: baseline;
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
  gap: 0px;
  z-index: 2;
  position: relative;
`;
const Pink = styled.div`
  width: 100vw;
  height: 500px;
  background: rgba(245, 245, 245);
  // opacity: 20%;
  position: absolute;
  z-index: 0;
  margin-top: 300px;
`;
const Wrapper = styled.div`
  display: flex;
  transition: transform 1s ease;
  //min-width: 2340px;
  max-width: 100%;
  //overflow: hidden;
  //gap: 20px;
  /* Add transition for smooth sliding */
`;
const Header = styled.div`
  font-weight: 600;
  //width: 100%;
  //display: flex;
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  color: #000;
  position: absolute;
  background: white;
  z-index: 3;
  padding: 15px;
  //height: 20px;
  //padding-top: 100px;
  //height: 40px;
  //margin-bottom: 50px;
`;

const Highlights = () => {
  //   const [isSticky, setIsSticky] = useState(false);
  //   const targetRef = useRef(null);

  //   useEffect(() => {
  //     const observer = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach((entry) => {
  //           setIsSticky(entry.isIntersecting);
  //         });
  //       },
  //       { threshold: 0.5 } // Adjust threshold as needed
  //     );

  //     if (targetRef.current) {
  //       observer.observe(targetRef.current);
  //     }

  //     return () => {
  //       if (targetRef.current) {
  //         observer.unobserve(targetRef.current);
  //       }
  //     };
  //   }, []);
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);
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
  //   fetchData();
  // }, []);

  // const latestProducts = products.filter((product) => product.latest === 1);
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  // };

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  // };
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

  // const handleNextSlide = () => {
  //   setSlideIndex((prevIndex) => (prevIndex === 1 ? 0 : prevIndex + 1));
  // };

  // const handlePrevSlide = () => {
  //   setSlideIndex((prevIndex) => Math.max(0, prevIndex - 1));
  // };
  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };
  // const [isHovered2, setIsHovered2] = useState(false);

  // const handleMouseEnter2 = () => {
  //   setIsHovered2(true);
  // };

  // const handleMouseLeave2 = () => {
  //   setIsHovered2(false);
  // };

  return (
    <div style={{ height: '300vh' }} ref={targetRef}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          width: '100%',
          height: '105vh',
          background: 'rgb(245,245,245)',
          display: 'flex',
          alignItems: 'center',
          overflowX: 'auto',
          color: '#FF0054',
          flexDirection: 'column',
        }}
      >
        {/* <Pink></Pink> */}
        {/* <Header>Highlights</Header> */}

        <motion.div
          style={{ x, transform: 'translate3d(0, 0, 0)' }}
          className="flex gap-4 "
        >
          <Container>
            <Wrapper
              style={{ transform: `translateX(${-slideIndex * 1170}px)` }}
            >
              <HighCard src={Ring} header="Custom Cut Rings" />
              <InfoCard src={RPNG} />
              <HighCard2 src={BBN} header="Handpicked Necklaces" />
              <InfoCard src={NPNG} />
              <HighCard src={FRI} header="Shop in the Sale" />
            </Wrapper>
          </Container>

          {/* {CardData.map((card) => {
            return <Card card={card} key={card.id} title={card.title}></Card>;
          })} */}
        </motion.div>
      </div>
    </div>
  );
};

export default Highlights;
