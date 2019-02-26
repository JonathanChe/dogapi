import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Content from './Content';
import GettingStarted from './GettingStarted';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-size: 16px;
  }

  html {
    background: url('http://fineartbyjc.com/wp-content/uploads/2015/11/dog-view-landscape-desktop-wallpaper-hd.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`;

const AppStyles = styled.main`
  display: flex;
  min-height: 100vh;
`;

const App = () => (
  <AppStyles>
    <GlobalStyles />
    <GettingStarted />
    <Content />
  </AppStyles>
)

export default App;
