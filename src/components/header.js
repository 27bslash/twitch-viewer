import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
function Header() {
  return (
    <nav className="navbar">
      <li className="nav-item">
        <Link to="/">Top Streams</Link>
      </li>
      <li className="nav-item">
        <Link to="/Top-Games">Top Games</Link>
      </li>
    </nav>
  );
}
export default Header;
