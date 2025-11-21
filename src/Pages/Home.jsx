import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";  // <-- import useNavigate
import "../App.css"

export default function Home() {
    const [username, setUsername] = useState("");
    const [difficulty, setDifficulty] = useState("easy");
    const [difficultyText, setDifficultyText] = useState("#33FF00");
    const [modifier, setModifier] = useState("nomod");
    const [modifierText, setModifierText] = useState("#33FF00");

    const navigate = useNavigate(); // <-- initialize navigate

    const difficultyColors = {
        easy: "#33FF00",
        medium: "#FF8000",
        hard: "#FF0000",
    };

    const modifierColors = {
        nomod: "#1eff00ff",
        hidden: "#DD00FF",
        sonicSpeed: "#00FFF2",
        perfect: "#FF0051",
    };

    useEffect(() => {
        if (difficultyColors[difficulty]) setDifficultyText(difficultyColors[difficulty]);
        if (modifierColors[modifier]) setModifierText(modifierColors[modifier]);
    }, [difficulty, modifier]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const payload = {
            username,
            difficulty,
            modifier,
        };

        // Navigate to GamePage with state
        navigate("/game", { state: payload });

        // optional reset
        setUsername("");
    };

    return (
        <div className="home-container">
            <h1 className="title">Type Or Perish!</h1>

            <div className="description-container">
                <p>Type Or Perish is an exciting trivia game where you have to answer trivia questions by typing as quickly and accurately as possible. You have 5 lives, and the game gets harder as you progress. Good luck!</p>
            </div>

            <form onSubmit={handleSubmit} className="form-container">
                <input 
                    type="text" 
                    required 
                    placeholder="Enter your name: " 
                    className="input-box" 
                    name="username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                />

                {/* Difficulty section */}
                <div className="radio-container">
                    <h2>Choose Your Difficulty: </h2>
                    <div className="radio-subcontainer">
                        {["easy","medium","hard"].map((level) => (
                            <div key={level}>
                                <label htmlFor={level}>
                                    <div className="solid-circle" style={{backgroundColor: difficultyColors[level]}}></div> {level.charAt(0).toUpperCase() + level.slice(1)}
                                </label>
                                <input 
                                    type="radio" 
                                    required 
                                    id={level} 
                                    name="difficulty" 
                                    value={level} 
                                    onClick={()=>setDifficulty(level)}
                                />
                            </div>
                        ))}
                    </div>
                    <h2>You Chose: <span style={{color: difficultyText}}> {difficulty}</span></h2>
                </div>

                {/* Modifier section */}
                <div className="radio-container">
                    <h2>Choose Your Modifier: </h2>
                    <div className="radio-subcontainer">
                        {["nomod","hidden","sonicSpeed","perfect"].map((mod) => (
                            <div key={mod}>
                                <label htmlFor={mod}>
                                    <div className="solid-circle" style={{backgroundColor: modifierColors[mod]}}></div> {mod === "nomod" ? "No Mod" : mod}
                                </label>
                                <input 
                                    type="radio" 
                                    id={mod} 
                                    name="modifier" 
                                    value={mod} 
                                    onClick={()=>setModifier(mod)}
                                />
                            </div>
                        ))}
                    </div>
                    <h2>You Chose: <span style={{color: modifierText}}> {modifier}</span></h2>
                </div>

                <button className="submit-button">Start Game!</button>
            </form>
        </div>
    );
}
