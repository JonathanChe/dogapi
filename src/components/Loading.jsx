import React from 'react';
import styled, { keyframes } from 'styled-components';

const scale = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

const LoadingStyles = styled.h1`
  color: white;
  font-size: 2rem;
  animation: ${scale} 2s infinite ease;
`;



const Loading = () => (<LoadingStyles>Loading</LoadingStyles>);

export default Loading;
