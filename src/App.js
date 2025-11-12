import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import GamePage from './components/GamePage';

function App() {

  const sampleQuestion = {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin"],
    correctAnswer: "Paris",
  };

  return (
    <div className="app-container">
      <Header />
      <Home />
      <GamePage
          questionData={sampleQuestion}
          user="USER#1"
          onNextQuestion={() => alert("Next question!")}
        />
      <Footer />
    </div>
  );
}

export default App;
