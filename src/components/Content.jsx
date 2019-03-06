import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ErrorMessage from './ErrorMessage';
import Card from './Card';
import Loading from './Loading';

const ContentContainer = styled.div`
  width: 50vw;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    width: 100vw;
  }

  @media only screen and (min-width: 770px) {
    height: 100vh;
    width: 50vw;
    padding: 1%;
    overflow: scroll;
  }
`;

const mapStateToProps = state => ({
  error: state.error,
  breeds: state.breeds,
  loading: state.loading,
});

const Content = ({ error, breeds, loading }) => {
  const displayCards = breeds.length > 0
    ? breeds.map((img) => <Card key={img} img={img} />)
    : undefined;

  return (
    <ContentContainer>
      {error && <ErrorMessage msg={error} />}
      {loading
        ? <Loading />
        : displayCards
      }
    </ContentContainer>
  )
};

export default connect(mapStateToProps, null)(Content);
