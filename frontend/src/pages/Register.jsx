import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import "../styles/Register.css";

export default function Register() {
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [repeatedPassword, setRepeatedPassword] = useState("");

  async function handleRegister() {
    try {
      if (formData.password !== repeatedPassword) {
        return alert("Passwords must match!");
      }

      const res = await api.post("/register", formData);

      console.log(res.data);

      setFormData({ username: "", email: "", password: "" });
      setRepeatedPassword("");

      nav("/login");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  }

  return (
    <div className="register-wrapper">
      <div className="register-stars"></div>
      <div className="register-stars2"></div>
      <div className="register-nebula"></div>
      <div className="register-glow"></div>

      <div className="register-card">
        <h1 className="register-title">Create Your Account</h1>
        <p className="register-sub">Start your Code Odyssey</p>

        <div className="register-fields">
          <input
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            type="text"
            placeholder="Username"
            className="input-field"
          />

          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type="email"
            placeholder="Email"
            className="input-field"
          />

          <input
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            type="password"
            placeholder="Password"
            className="input-field"
          />

          <input
            value={repeatedPassword}
            onChange={(e) => setRepeatedPassword(e.target.value)}
            type="password"
            placeholder="Repeat password"
            className="input-field"
          />
        </div>

        <button className="register-btn" onClick={handleRegister}>
          Create Account
        </button>

        <p className="login-redirect">
          Already have an account?{" "}
          <span onClick={() => nav("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
}
