import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GameProvider, useGame } from "../Context/GameContext";

import QuestionPrompt from "../Components/QuestionPrompt";
import ChoicesList from "../Components/ChoicesList";
import AnswerInput from "../Components/AnswerInput";
import Feedback from "../Components/Feedback";
import Timer from "../Components/Timer";

function GameStartWrapper() {
    const { startGame, isLoading } = useGame();

    useEffect(() => {
        startGame();
    }, []);

    if (isLoading || !startGame) {
        return (
            <div className="loading-screen">
                <p>Loading</p>
            </div>
        )
        
    }

    return (
        <>
            <div className="timer-section"><Timer /></div>
            <div className="feedback-section"><Feedback /></div>
            <div className="question-section"><QuestionPrompt /></div>
            <div className="choices-section"><ChoicesList /></div>
            <div className="answer-section"><AnswerInput /></div>
        </>
    );
}

export default function GamePage() {
    const { state } = useLocation();
    if (!state) return <h2>No settings found. Go back to Home.</h2>;

    return (
        <GameProvider settings={state}>
            <div className="game-container">
                <h1>Good luck, {state.username}!</h1>
                <GameStartWrapper />
            </div>
        </GameProvider>
    );
}
