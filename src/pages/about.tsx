import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';

const Wrapper = styled.div`
    font-size: 1.4em;
`;

const about = (): React.ReactElement => (
    <Container>
        <Wrapper>made to practice the romanization of hangul</Wrapper>
    </Container>
);

export default about;
