import { useNavigate } from "react-router-dom";
import "../styles/Landing.css";

export default function Landing() {
  const nav = useNavigate();

  return (
    <div className="landing-container">
      <header className="landing-header">
        <h2 className="logo">Code Odyssey</h2>
        <nav className="nav-btns">
          <button onClick={() => nav("/login")} className="nav-button">
            Login
          </button>
          <button
            onClick={() => nav("/register")}
            className="nav-button nav-register"
          >
            Register
          </button>
        </nav>
      </header>

      <section className="hero">
        <h1 className="hero-title">Master Your Coding Journey</h1>
        <p className="hero-subtitle">
          Track your skills, organize your week, manage tasks and evolve every
          single day.
        </p>

        <div className="hero-actions">
          <button className="cta-primary" onClick={() => nav("/dashboard")}>
            Enter Dashboard
          </button>
          <button className="cta-secondary" onClick={() => nav("/tasks")}>
            About
          </button>
        </div>
      </section>
    </div>
  );
}
