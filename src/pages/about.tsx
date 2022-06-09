import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    font-size: 1.4em;
`;

const about = (): React.ReactElement => (
    <Container>
        <Wrapper>
            <span>made to practice hangul quickly (specifically the romanization)</span>
            <span>for every correct letter you get it&apos;s 100 points</span>
            <span>
                you can find the source code{' '}
                <a href="https://github.com/ssamkough/hangul-house" target="_blank" rel="noopener noreferrer">
                    here
                </a>
            </span>
        </Wrapper>
    </Container>
);

export default about;
