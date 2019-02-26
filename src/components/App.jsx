import React from 'react';
import { createGlobalStyle } from 'styled-components';
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

const App = () => (
  <div>
    <GlobalStyles />
    <GettingStarted />
  </div>
);

export default App;
