import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

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
        return alert("Password must match!");
      } else {
        const res = await api.post("/register", formData);

        console.log(res.data);

        setFormData({ username: "", email: "", password: "" });
        setRepeatedPassword("");

        nav("/login");
      }
    } catch (error) {
      console.error(error);
      alert("Deu naooo bunheee unhee bunhee");
    }
  }

  return (
    <div>
      <h1>Register</h1>

      <input
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        type="text"
        placeholder="Username"
      />

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
      <input
        value={repeatedPassword}
        onChange={(e) => setRepeatedPassword(e.target.value)}
        type="password"
        placeholder="Repeat Password"
      />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
