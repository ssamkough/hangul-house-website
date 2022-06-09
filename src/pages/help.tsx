import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import { hangulAlphabet } from '../constants';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 36px;
    font-size: 2em;
`;

const Stack = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

const help = (): React.ReactElement => (
    <Container>
        <Wrapper>
            {hangulAlphabet.map((obj) => {
                const { letter, romaji, mnemonic, name, nameInKorean } = obj;
                return (
                    <Stack key={letter}>
                        <span>
                            <strong>letter</strong>: {letter}
                        </span>
                        <span>
                            <strong>romaji</strong>: {romaji}
                        </span>
                        {mnemonic && (
                            <span>
                                <strong>mnemonic</strong>: {mnemonic}
                            </span>
                        )}
                        <span>
                            <strong>name</strong>: {name} / {nameInKorean}
                        </span>
                    </Stack>
                );
            })}
        </Wrapper>
    </Container>
);

export default help;
