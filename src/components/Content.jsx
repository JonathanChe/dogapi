import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ErrorMessage from './ErrorMessage';
import Card from './Card';

const ContentContainer = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;
`;

const mapStateToProps = state => ({
  error: state.error,
  breeds: state.breeds,
});

const Content = ({ error, breeds }) => {
  const displayCards = breeds.length > 0
    ? breeds.map((img) => <Card key={img} img={img} />)
    : undefined;

  return (
    <ContentContainer>
      {error
        ? <ErrorMessage msg={error} />
        : displayCards
      }
    </ContentContainer>
  )
};

export default connect(mapStateToProps, null)(Content);
