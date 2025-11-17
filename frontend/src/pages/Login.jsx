import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
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
