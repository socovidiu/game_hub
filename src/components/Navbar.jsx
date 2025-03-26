import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {


  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>GameHub</h2>
      <ul style={styles.navLinks}>
        <li>
          <Link to="/" style={styles.link}>Home</Link>
        </li>
        <li style={styles.dropdown} onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
          <span style={styles.link}>Games ▼</span>
          {dropdownOpen && (
            <ul style={styles.dropdownMenu}>
              <li><Link to="/tic-tac-toe" style={styles.dropdownLink}>Tic-Tac-Toe</Link></li>
              <li><Link to="/sudoku" style={styles.dropdownLink}>Sudoku (Coming Soon)</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
    backgroundColor: "#333",
    color: "white"
  },
  logo: {
    margin: "0"
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
    padding: "0",
    margin: "0"
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    cursor: "pointer",
  },
  dropdown: {
    position: "relative",
  },
  dropdownMenu: {
    position: "absolute",
    top: "100%",
    left: "-40px",  // 👈 Moves dropdown slightly left
    backgroundColor: "#444",
    padding: "10px",
    listStyle: "none",
    margin: "0",
    borderRadius: "5px",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
    minWidth: "150px",  // 👈 Fixed width to prevent overflow
    maxWidth: "180px",
  },
  dropdownLink: {
    color: "white",
    textDecoration: "none",
    display: "block",
    padding: "5px",
  },
};


