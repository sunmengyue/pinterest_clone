import React from 'react';
import styled from 'styled-components';
import './Mainboard.css';
import Pin from './Pin';

const Mainboard = ({ pins }) => {
  return (
    <Wrapper>
      <Container className='mainboard_container'>
        {pins.map((pin, index) => {
          let { urls } = pin;
          return <Pin key={index} urls={urls} />;
        })}
      </Container>
    </Wrapper>
  );
};

export default Mainboard;

const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 1rem;
`;

const Container = styled.div`
  column-gap: 5px;
  margin: 0 auto;
  height: 100%;
  background-color: #fff;
`;
