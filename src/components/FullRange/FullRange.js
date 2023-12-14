import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Img1 from '../../assets/e.png';
import Img2 from '../../assets/r.png';
import Img3 from '../../assets/n.png';
import Img4 from '../../assets/b.png';
import { Link } from 'react-router-dom';

const Container = styled.div`
  /* height: 100%;
  width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(245, 245, 245);
  position: relative;
  padding-bottom: 50px;
  margin-top: -25px;
`;
const Header = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  font-weight: 600;
  padding: 50px;
  padding-top: 100px;
`;
const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 500px;
  height: 350px;
  &:hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: 1s ease-in-out;
  /* transform: translateY(-80%) translateY(${(props) =>
    props.scrollOffset}px); */
  transition: transform 0.2s ease-out;
  /* ${ImageContainer}:hover & {
    transform: scale(1.05);
  } */
`;
const Overlay2 = styled.div`
  position: absolute;
  top: 250px;
  left: 0px;
  margin-left: 47px;
  //opacity: 0;
  //transform: translate(-50%, -50%);
  //transition: opacity 0.5s;
  transition: 300ms ease-in-out;
  text-align: left;
  color: white;
  //font-size: 1.8rem;
  //font-weight: bold;
  ${ImageContainer}:hover & {
    top: 200px;
  }
`;
const Overlay = styled.div`
  position: absolute;
  top: 375px;
  left: 0px;
  margin-left: 50px;
  opacity: 0;
  //transform: translate(-50%, -50%);
  transition: opacity 0.5s;
  text-align: center;
  color: white;
  font-size: 1.1rem;
  font-weight: 300;
  //font-weight: bold;

  transition: 300ms ease-in-out;
  transition-delay: 0.1s;

  ${ImageContainer}:hover & {
    opacity: 1;
    top: 275px;
  }
`;
const Div = styled.div`
  font-size: 2.2rem;
  //font-family: 'Playfair Display', serif;
  font-weight: 500;
  // text-transform: uppercase;
`;
const Wrapper = styled.div`
  // background-color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

const FullRange = ({ products }) => {
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
    <Container>
      <Header>Explore Our Full Range</Header>
      <Wrapper>
        <Wrap>
          <Link to="shop?sort=default&category=e">
            <ImageContainer>
              <Image src={Img1} alt="Earings" scrollOffset={scrollOffset} />
              <Overlay2>
                <Div>Earings</Div>
              </Overlay2>
              <Overlay>Explore more</Overlay>
            </ImageContainer>
          </Link>
          <Link to="shop?sort=default&category=r">
            <ImageContainer>
              <Image src={Img2} alt="Rings" scrollOffset={scrollOffset} />
              <Overlay2>
                <Div>Rings</Div>
              </Overlay2>
              <Overlay>Explore more</Overlay>
            </ImageContainer>
          </Link>
          <Link to="shop?sort=default&category=n">
            <ImageContainer>
              <Image src={Img3} alt="Necklaces" scrollOffset={scrollOffset} />
              <Overlay2>
                <Div>Necklaces</Div>
              </Overlay2>
              <Overlay>Explore more</Overlay>
            </ImageContainer>
          </Link>
          <Link to="shop?sort=default&category=b">
            <ImageContainer>
              <Image src={Img4} alt="Earings" scrollOffset={scrollOffset} />
              <Overlay2>
                <Div>Bracelets</Div>
              </Overlay2>
              <Overlay>Explore more</Overlay>
            </ImageContainer>
          </Link>
        </Wrap>
      </Wrapper>
    </Container>
  );
};

export default FullRange;
