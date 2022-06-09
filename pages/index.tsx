import React from 'react';
import Container from './components/Container';
import { hanguAlphabet } from './constants';

const Home = (): React.ReactElement => (
  <Container>
    {hanguAlphabet.map((obj) => 
   { 
     const {letter} = obj;
    return (
      <div key={letter}>{letter}</div>
    )})}
  </Container>
)

export default Home
