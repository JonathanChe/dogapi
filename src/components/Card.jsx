import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  height: 200px;
  width: 200px;
  margin: 2.5%;
  overflow: hidden;
  border: 1px solid #ddd;

  img {
    height: auto;
    max-width: 100%;
    display: block;
  }

  &:hover {
    transform: scale(1.1);
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    
  }
`;

const Card = ({ img }) => (
  <CardContainer>
    <img src={img} alt="dog" />
  </CardContainer>
)

export default Card;
