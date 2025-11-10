export default function Home() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log(Object.fromEntries(formData));
    }

    return (
        <div className="home-container">
            <h1 className="title">Type Or Perish!</h1>
            
            <div className="description-container">
                <p>Type Or Perish is an exciting trivia game where you have to answer trivia questions by typing as quickly and accurately as possible. You have 5 lives, and the game gets harder as you progress. Good luck!</p>
            </div>

            <form onSubmit={handleSubmit} className="form-container">
                <input type="text" required placeholder="Enter your name: " className="input-box" name="playerName"/>
                
                <div className="radio-container">
                    <h2>Choose Your Difficulty: </h2>

                    <div className="radio-subcontainer">
                        <div>
                            <label htmlFor="easy"><div className="solid-circle" style={{backgroundColor: "#33FF00"}}></div> Easy</label>
                            <input type="radio" required id="easy" name="difficulty" value="easy"/>
                        </div>

                        <div>
                            <label htmlFor="medium"><div className="solid-circle" style={{backgroundColor: "#FF8000"}}></div> Medium</label>
                            <input type="radio" required id="medium" name="difficulty" value="medium"/>
                        </div>

                        <div>
                            <label htmlFor="hard"><div className="solid-circle" style={{backgroundColor: "#FF0000"}}></div> Hard</label>
                            <input type="radio" required id="hard" name="difficulty" value="hard"/>
                        </div>
                    </div>
                </div>

                <div className="radio-container">
                    <h2>Choose Your Modifier: </h2>

                    <div className="radio-subcontainer">
                        <div>
                            <label htmlFor="hidden"><div className="solid-circle" style={{backgroundColor: "#DD00FF"}}></div> Hidden</label>
                            <input type="radio" id="hidden" name="modifier" value="hidden"/>
                        </div>

                        <div>
                            <label htmlFor="sonicSpeed"><div className="solid-circle" style={{backgroundColor: "#00FFF2"}}></div> Sonic Speed</label>
                            <input type="radio" id="sonicSpeed" name="modifier" value="sonicSpeed"/>
                        </div>

                        <div>
                            <label htmlFor="perfect"><div className="solid-circle" style={{backgroundColor: "#FF0051"}}></div> Perfect</label>
                            <input type="radio" id="perfect" name="modifier" value="perfect"/>
                        </div>
                    </div>
                </div>

                <button className="submit-button">Start Game!</button>
            </form>
        </div>
    )
}