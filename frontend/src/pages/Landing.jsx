import { useNavigate } from "react-router-dom";
import "../styles/Landing.css";

export default function Landing() {
  const nav = useNavigate();

  return (
    <div className="landing">
      <header className="landing-header">
        <h1 className="logo">Code Odyssey</h1>
        <nav className="nav">
          <button onClick={() => nav("/login")} className="nav-btn">
            Login
          </button>
          <button
            onClick={() => nav("/register")}
            className="nav-btn nav-highlight"
          >
            Register
          </button>
        </nav>
      </header>

      <main className="hero">
        <h2 className="hero-title">Elevate Your Coding Journey</h2>
        <p className="hero-subtitle">
          Build habits, track progress, and master your skills in a space
          designed for growth.
        </p>
        <div className="hero-actions">
          <button className="cta cta-primary" onClick={() => nav("/dashboard")}>
            Launch Dashboard
          </button>
          <button className="cta cta-secondary" onClick={() => nav("/tasks")}>
            Learn More
          </button>
        </div>
      </main>

      <footer className="landing-footer">
        <p>© 2025 Code Odyssey. All rights reserved.</p>
      </footer>
    </div>
  );
}
