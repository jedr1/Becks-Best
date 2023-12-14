import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Img1 from '../../assets/1.png';

const ParallaxContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const ParallaxImage = styled.img`
  width: 100%;
  height: auto;
  transform: translateY(-50%) translateY(${(props) => props.scrollOffset}px);
  transition: transform 0.2s ease;
`;

const ParallaxText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const ParallaxSection = () => {
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

  return (
    <ParallaxContainer>
      <ParallaxImage
        src={Img1}
        alt="Parallax Image"
        scrollOffset={scrollOffset}
      />
      <ParallaxText>This is a Parallax Section</ParallaxText>
    </ParallaxContainer>
  );
};

export default ParallaxSection;
