import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const TextContainer = styled.div`
  margin-left: 5%;
  width: 75%;
  display: flex;
  flex-flow: column wrap;

  h1 {
    color: white;
    font-size: 5rem;
  }

  p {
    color: lightgray;
    font-size: 2.5rem;
  }
`;

const SearchContainer = styled.div`
  display: flex;
`;

const Search = styled.input`
  height: 45px;
  width: 50%;
  background-color: transparent;
  border: solid 2px rgba(255, 255, 255, 0.35);
  border-radius: 10px;
  color: white;

  &:focus {
    outline: none;
    background: rgba(0,0,0,0.33);
  }

  &::-webkit-input-placeholder {
    padding-left: 1%;
    color: white;
  }
`;

const CoolButton = styled.button`
  width: 12.5%;
  height: 50px;
  border-radius: 10px;
  background-color: #1cb495;
  border: none;
  cursor: pointer;
  margin-left: 5%;
  color: white;

  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.1)
  }
`;

const GettingStarted = () => {
  return (
    <Container>
      <TextContainer>
        <h1>Dog API</h1>
        <p>Search for your favorite breeds!</p>
        <br />
        <SearchContainer>
          <Search type="text" placeholder="Search.."/>
          <CoolButton>Submit</CoolButton>
        </SearchContainer>
      </TextContainer>
    </Container>
  )
};

export default GettingStarted;
