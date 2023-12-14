import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  height: 350px;
  min-width: 350px;
  background: orange;
  position: relative;
`;

const Card = (card) => {
  return <Div>{card.title}</Div>;
};

export default Card;
