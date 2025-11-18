import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import api from "../api/api";
import "../styles/Login.css";

export default function Login() {
  const { login } = useContext(AuthContext);
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  async function handleLogin() {
    try {
      if (!formData.email || !formData.password) {
        return alert("Check information");
      }

      const res = await api.post("/login", formData);

      login(res.data.token, res.data.user);
      setFormData({ email: "", password: "" });

      nav("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Error during login!");
      setFormData({ ...formData, password: "" });
    }
  }

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-sub">
          Access your account to continue your journey
        </p>

        <div className="login-fields">
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
        </div>

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

        <p className="register-redirect">
          Don't have an account?{" "}
          <span onClick={() => nav("/register")}>Create one</span>
        </p>
      </div>
    </div>
  );
}
