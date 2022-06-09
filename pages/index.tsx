import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from './components/Container';
import { hanguAlphabet, HangulLetterDetail } from './constants';

const LetterStack = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Letter = styled.span`
    font-size: 4em;
`;

const StyledInput = styled.input`
    max-width: 200px;
`;

function shuffle(array: HangulLetterDetail[]) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

const Home = (): React.ReactElement | null => {
    const [currentLetterIndex, setCurrentLetterIndex] = useState<number>(0);
    const [letterDetail, setLetterDetails] = useState<HangulLetterDetail>();
    const [randomizedAlphabet, setRandomizedAlphabet] = useState<HangulLetterDetail[]>();
    const [answerValue, setAnswerValue] = useState<string>();
    const [score, setScore] = useState<number>(0);

    const enterKeyPressed = (event: KeyboardEvent) => {
        if (event.key === 'Enter' && currentLetterIndex < 40) {
            if (letterDetail?.romaji === answerValue) {
                setScore((currentScore) => currentScore + 100);
            }
            setCurrentLetterIndex((index) => index + 1);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', enterKeyPressed, false);
        return () => {
            document.removeEventListener('keydown', enterKeyPressed, false);
        };
    }, [enterKeyPressed]);

    useEffect(() => {
        setRandomizedAlphabet(shuffle(hanguAlphabet));
    }, []);

    useEffect(() => {
        if (randomizedAlphabet) setLetterDetails(randomizedAlphabet[currentLetterIndex]);
    }, [randomizedAlphabet, currentLetterIndex]);

    return (
        <Container>
            {currentLetterIndex == 40 ? (
                <div>your score was: {score}</div>
            ) : (
                <LetterStack>
                    <Letter>{letterDetail?.letter}</Letter>
                    <StyledInput
                        type="text"
                        id="answer_value"
                        name="answer_value"
                        value={answerValue}
                        onChange={(event) => setAnswerValue(event.target.value)}
                    />
                </LetterStack>
            )}
        </Container>
    );
};

export default Home;
