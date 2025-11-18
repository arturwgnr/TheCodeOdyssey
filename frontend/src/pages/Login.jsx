import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import api from "../api/api";

export default function Login() {
  const { login } = useContext(AuthContext);
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  async function handleLogin() {
    try {
      if (formData.email === "" || formData.password === "") {
        return alert("Check information");
      } else {
        const res = await api.post("/login", formData);

        console.log(res.data);

        login(res.data.token, res.data.user);
        setFormData({ email: "", password: "" });

        nav("/dashboard");
      }
    } catch (error) {
      console.error(error);
      alert("Error during login!");
      setFormData({ password: "" });
    }
  }

  return (
    <div>
      <h1>Login</h1>

      <input
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        type="email"
        placeholder="Email"
      />

      <input
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        type="password"
        placeholder="Password"
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
