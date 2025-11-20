import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Topbar from "../components/Topbar";
import "../styles/Topbar.css";

export default function Dashboard() {
  const { logout } = useContext(AuthContext);
  const nav = useNavigate();

  function handleLogout() {
    logout();

    nav("/");
  }

  return (
    <div>
      <Topbar />
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={() => nav("/week-planner")}>Week planning</button>
    </div>
  );
}
