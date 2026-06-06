import { useState, useRef, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
// import { Modal } from "components/Modal";
import { StyledSprintContainer, StyledButtonsContainer } from "./Sprint.styled.js";
import { vocabDataSelector } from "../../redux/selectors.ts";
import { useKeyPress } from "../../hooks/useKeyPress.ts";
import constants from "@/constants";
import successSfx from "/src/assets/sounds/345299__scrampunk__okay.wav";
import failureSfx from "/src/assets/sounds/761510__valhallaproject__friendly-fire.wav";
import recordSfx from "/src/assets/sounds/582988__oysterqueen__success.mp3";

type CurrentWord = {
    fakeTransl?: string,
    enWord?: string,
    ruTransl?: string[],
}

export const Sprint = () => {
    const { SPRINT_COUNTER } = constants;

    const [countdown, setCountdown] = useState(SPRINT_COUNTER);
    const [isStarted, setIsStarted] = useState(false);
    const [currentWord, setCurrentWord] = useState({} as CurrentWord);
    const [scores, setScores] = useState(0);
    const [record, setRecord] = useState(0);

    const counter = useRef(10);
    const countdownId = useRef(0);
    const scoresRef = useRef(0);
    const recordRef = useRef(0);

    const reduxVocabData = useSelector(vocabDataSelector);

    const getNextWord = useCallback(() => {
        // console.log("getNextWord :: reduxVocabData", reduxVocabData);
        if (reduxVocabData.vocabData.length > 0) {
            let index = Math.round(Math.random() * (reduxVocabData.vocabData.length - 1));
            // console.log("getNextWord :: index", index);
            const word = reduxVocabData.vocabData[index];
            console.log("getNextWord :: word", word);
            if (Math.random() > 0.5) {
                index = Math.round(Math.random() * (reduxVocabData.vocabData.length - 1));
                setCurrentWord({ ...word, fakeTransl: reduxVocabData.vocabData[index].ruTransl[0] });
            } else {
                setCurrentWord({ ...word });
            }
        }
    }, [reduxVocabData]);

    function handleAccept() {
        console.log('Sprint :: handleAccept :: isStarted', isStarted);
        if (isStarted) {
            if (!currentWord.fakeTransl || currentWord.fakeTransl === currentWord.ruTransl![0]) {
                setScores((prevScores) => {
                    const nextScores = prevScores + 1;
                    scoresRef.current = nextScores;
                    return nextScores;
                });
                playSuccess();
            } else {
                playFailure();
            }
            getNextWord();
        }
    }

    function handleDecline() {
        if (isStarted) {
            if (currentWord.fakeTransl && currentWord.fakeTransl !== currentWord.ruTransl![0]) {
                setScores((prevScores) => {
                    const nextScores = prevScores + 1;
                    scoresRef.current = nextScores;
                    return nextScores;
                });
                playSuccess();
            } else {
                playFailure();
            }
            getNextWord();
        }
    }

    function handleRestart() {
        start();
    }

    function playFailure() {
        const audio = new Audio(failureSfx);
        audio.play().catch(error => {
            console.log("playFailure :: audio playback failed", error);
        });
    }

    function playRecord() {
        const audio = new Audio(recordSfx);
        audio.play().catch(error => {
            console.log("playRecord :: audio playback failed", error);
        });
    }

    function playSuccess() {
        const audio = new Audio(successSfx);
        audio.play().catch(error => {
            console.log("playSuccess :: audio playback failed", error);
        });
    }

    const start = useCallback(() => {
        // console.log('Sprint :: start :: isStarted', isStarted);

        // if (!isStarted) {
            setScores(0);
            setCountdown(SPRINT_COUNTER);
            counter.current = SPRINT_COUNTER;
            getNextWord();
            countdownId.current = setInterval(() => {
                // console.log(`interval handler ${Date.now()} :: ${counter.current} :: ${scoresRef.current}`);
                if (counter.current > 0) {
                    counter.current -= 1;
                } else {
                    stop();
                }
                setCountdown(counter.current);
            }, 1000);
            setIsStarted(true);
        // }
    }, [SPRINT_COUNTER, getNextWord]);

    const stop = useCallback(() => {
        clearInterval(countdownId.current);
        setIsStarted(false);
        console.log('stop :: scores', scores, 'record', record);
        if (scoresRef.current > recordRef.current) {
            setRecord(scoresRef.current);
            recordRef.current = scoresRef.current;
            playRecord();
        }
    }, [scores]);

    useEffect(() => {
        console.log("useEffect starts");
    }, [start]);

    useKeyPress('ArrowLeft', handleAccept);
    useKeyPress('ArrowRight', handleDecline);
    useKeyPress('ArrowUp', start);

    return (
        <StyledSprintContainer>
            <div>Record - { record } Scores - { scores}</div>
            <h1 className="text-4xl">{countdown}</h1>
            {currentWord.enWord && <h1 className="text-4xl">{currentWord.enWord} - {currentWord.fakeTransl ?? currentWord.ruTransl![0]}</h1>}
            <StyledButtonsContainer>
                <button type="button" onClick={handleAccept} className="btn-sprint">Accept</button>
                <button type="button" onClick={handleDecline} className="btn-sprint">Decline</button>
</StyledButtonsContainer>
            {!isStarted && <div>
                <button type="button" onClick={handleRestart} className="btn-sprint mr-1">Restart</button>
                <hr className="mt-1" />
                Press Up to restart
                </div>
            }
            {/* <button type="button" onClick={getNextWord} className="btn-sprint">NextWord</button> */}
        </StyledSprintContainer>
    );
}