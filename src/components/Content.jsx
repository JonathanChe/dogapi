import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ErrorMessage from './ErrorMessage';

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
});

const Content = ({ error }) => {
  return (
    <ContentContainer>
      {error && <ErrorMessage msg={error} />}
    </ContentContainer>
  )
};

export default connect(mapStateToProps, null)(Content);
