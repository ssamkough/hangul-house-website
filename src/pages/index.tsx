import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import { hangulAlphabet, HangulLetterDetail } from '../constants';

const TOAST_TIME = 1000;

const Stack = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const BigFont = styled.span`
    font-size: 4em;
`;

const StyledInput = styled.input`
    font-size: 30px;
    height: 60px;
    max-width: 200px;
`;

const Toast = styled.span<{ color: string }>`
    font-size: 1.2em;
    color: ${({ color }) => color};
`;

const shuffle = (array: HangulLetterDetail[]) => {
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
};

const index = (): React.ReactElement | null => {
    const [currentLetterIndex, setCurrentLetterIndex] = useState<number>(0);
    const [letterDetail, setLetterDetails] = useState<HangulLetterDetail>();
    const [randomizedAlphabet, setRandomizedAlphabet] = useState<HangulLetterDetail[]>();
    const [answerValue, setAnswerValue] = useState<string>('');
    const [score, setScore] = useState<number>(0);
    const [toastColor, setToastColor] = useState<'green' | 'red'>('green');
    const [toastMessage, setToastMessage] = useState<string | null>();

    const enterKeyPressed = (event: KeyboardEvent) => {
        if (event.key === 'Enter' && currentLetterIndex < 40) {
            if (letterDetail?.romaji !== answerValue.toLowerCase()) {
                setToastColor('red');
                setToastMessage('wrong');
                return;
            }
            setScore((currentScore) => currentScore + 100);
            setCurrentLetterIndex((index) => index + 1);
            setAnswerValue('');
            setToastColor('green');
            setToastMessage('right');
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', enterKeyPressed, false);
        return () => {
            document.removeEventListener('keydown', enterKeyPressed, false);
        };
    }, [enterKeyPressed]);

    useEffect(() => {
        setRandomizedAlphabet(shuffle(hangulAlphabet));
    }, []);

    useEffect(() => {
        if (randomizedAlphabet) setLetterDetails(randomizedAlphabet[currentLetterIndex]);
    }, [randomizedAlphabet, currentLetterIndex]);

    useEffect(() => {
        const timeoutId = setTimeout(() => setToastMessage(null), TOAST_TIME);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [toastMessage, TOAST_TIME]);

    return (
        <Container>
            <Stack>
                {currentLetterIndex == 40 ? (
                    <>
                        <BigFont>your final score was: {score}</BigFont>
                        <button
                            onClick={() => {
                                setScore(0);
                                setCurrentLetterIndex(0);
                                setRandomizedAlphabet(shuffle(hangulAlphabet));
                            }}
                        >
                            restart
                        </button>
                    </>
                ) : (
                    <>
                        <BigFont>{letterDetail?.letter}</BigFont>
                        <StyledInput
                            type="text"
                            id="answer_value"
                            name="answer_value"
                            value={answerValue}
                            onChange={(event) => setAnswerValue(event.target.value)}
                        />
                    </>
                )}
                {toastMessage && <Toast color={toastColor}>{toastMessage}</Toast>}
            </Stack>
        </Container>
    );
};

export default index;
