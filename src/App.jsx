import { BrowserRouter as Router, Routes, Route, useLocation  } from "react-router-dom";
import { useEffect } from "react";
import Navbar from  "./components/Navbar.jsx";
import HomePage from "./components/HomePage.jsx";
import TicTacToe from "./games/tic-tac-toe/TicTacToe.jsx";


function AppWrapper() {
  const location = useLocation();

  useEffect(() => {
    // Remove existing background classes
    document.body.classList.remove("homepage-bg", "tic-tac-toe-bg");

    // Add the appropriate class based on route
    if (location.pathname === "/") {
      document.body.classList.add("homepage-bg");
    } else if (location.pathname === "/tic-tac-toe") {
      document.body.classList.add("tic-tac-toe-bg");
    }
  }, [location.pathname]); // Re-run when route changes


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="*" element={<h1>404 - Game Not Found</h1>} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;