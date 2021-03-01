import React from 'react';
import styled from 'styled-components';

function Pin({ urls }) {
  return (
    <Wrapper>
      <Container>
        <img src={urls?.regular} alt='pin' />
      </Container>
    </Wrapper>
  );
}

export default Pin;

const Wrapper = styled.div`
  display: inline-flex;
  padding: 8px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 236px;

  img {
    border-radius: 1rem;
    width: 100%;
    cursor: zoom-in;
    object-fit: cover;
  }
`;
