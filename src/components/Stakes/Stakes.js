import React from 'react';
import styled from 'styled-components';
import Img1 from '../../assets/1.png';
import { Button } from '../Button';

const Container = styled.div`
  height: 100%;
  padding-bottom: 50px;
  position: relative;
  margin-top: -25px;
  background: #fff;
`;
const Header = styled.div`
  padding: 50px;
  padding-top: 75px;
  padding-left: 250px;
  background: rgb(245, 245, 245);
  font-size: 3.5rem;
  font-family: 'Playfair Display', serif;
  text-transform: uppercase;

  font-weight: 700;
  max-width: 1000px;
`;
const Img = styled.img`
  position: absolute;
  right: 0;
  height: 600px;
  width: 350px;
  margin-top: 50px;
  margin-right: 50px;
  object-fit: cover;
`;
const Para = styled.div`
  width: 600px;
  font-weight: 300;
  margin-left: 250px;
  padding-top: 50px;
  padding-bottom: 50px;
`;
const BtnWrap = styled.div`
  margin-left: 250px;
`;

const Stakes = () => {
  return (
    <Container>
      <Img src={Img1} alt="" />
      <Header>
        Don't Sacrifice
        <br /> Quality For Price
      </Header>
      <Para>
        Choosing quality over price in jewelry is crucial as it guarantees
        enduring beauty and craftsmanship. Prioritizing quality ensures that
        each piece tells a unique story and stands the test of time. At our
        boutique, we emphasize that the investment in superior craftsmanship
        results in jewelry that transcends mere cost, becoming a lasting symbol
        of elegance and sophistication.
      </Para>
      <BtnWrap>
        <Button buttonSize="btn--large">Shop Now</Button>
      </BtnWrap>
    </Container>
  );
};

export default Stakes;
