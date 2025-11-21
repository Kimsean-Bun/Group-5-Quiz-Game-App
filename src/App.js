import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import GamePage from "./Pages/GamePage";
// import Leaderboard from "./pages/Leaderboard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<GamePage />} />
        {/* <Route path="/leaderboard" element={<Leaderboard />} /> */}
      </Routes>
    </Router>
  );
}