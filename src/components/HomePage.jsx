import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div style={styles.container}>
      <h1>Welcome to GameHub! 🎮</h1>
      <p>Choose a game and start playing!</p>

      <div style={styles.gameList}>
        <Link to="/tic-tac-toe" style={styles.gameCard}>
          <h2>🟢 Tic-Tac-Toe</h2>
          <p>Classic 2-player strategy game.</p>
        </Link>
        
        <Link to="/sudoku" style={styles.gameCard}>
          <h2>🟡 Sudoku</h2>
          <p>Number puzzle (Coming Soon).</p>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  gameList: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  gameCard: {
    textDecoration: "none",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#333",
    color: "white",
    width: "200px",
    textAlign: "center",
    transition: "0.3s",
  },
};

export default HomePage;
