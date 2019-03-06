import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

const Container = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  align-items: center;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    flex-flow: column wrap;
    align-content: center;
    justify-content: center;
    height: 50vh;
    width: 100vw;
  }

  @media only screen and (max-width: 320px) {
    flex-flow: column wrap;
    justify-content: center;
    height: 33vh;
  }
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

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    h1 {
      text-align: center;
      font-size: 2.5rem;
    }

    p {
      text-align: center;
      margin-top: 5%;
      color: white;
      font-size: 1.5rem;
    }
  }

  @media only screen and (min-width: 770px) and (max-width: 1296px) {
    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 2rem;
    }
  }
`;

const SearchContainer = styled.div`
  display: flex;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    flex-flow: column wrap;
    align-content: center;
  }
`;

const Search = styled.input`
  height: 45px;
  width: 50%;
  padding-left: 1%;
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

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    width: 80%;
    text-align: center;

    &::-webkit-input-placeholder {
      text-align: center;
    }
  }
`;

const CoolButton = styled.button`
  width: 12.5%;
  height: 50px;
  border-radius: 10px;
  background-color: rgba(28, 180, 149, 1);
  border: none;
  cursor: pointer;
  margin-left: 5%;
  color: white;

  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.05);
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    align-self: center;
    margin-top: 15px;
    margin-left: 0;
    width: 50%;
  }

  @media only screen and (min-width: 770px) and (max-width: 1296px) {
    width: 25%;
  }
`;

const mapStateToProps = state => ({
  input: state.search,
});

const mapDispatchToProps = dispatch => ({
  handleChange: (input) => dispatch(actions.handleSearch(input)),
  handleSubmit: (input) => dispatch(actions.fetchDogs(input))
});

const GettingStarted = props => {
  const { handleChange, handleSubmit, input } = props;
  return (
    <Container>
      <TextContainer>
        <h1>Dog API</h1>
        <p>Search for your favorite breeds!</p>
        <br />
        <SearchContainer>
          <Search
            type="text"
            placeholder="Search.."
            onChange={(e) => handleChange(e.target.value)}
            value={input}
          />
          <CoolButton
            onClick={() => handleSubmit(input)}
          >Submit</CoolButton>
        </SearchContainer>
      </TextContainer>
    </Container>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(GettingStarted);
