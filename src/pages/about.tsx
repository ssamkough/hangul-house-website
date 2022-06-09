import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';

const Wrapper = styled.div`
    font-size: 1.4em;
`;

const about = (): React.ReactElement => (
    <Container>
        <Wrapper>
            <p>made to practice and memorize hangul (specifically the romanization)</p>
            <p>for every correct letter you get it&apos;s 100 points</p>
        </Wrapper>
    </Container>
);

export default about;
