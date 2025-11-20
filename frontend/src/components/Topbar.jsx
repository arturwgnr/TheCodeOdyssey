import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function Topbar() {
  const nav = useNavigate();
  const { logout } = useContext(AuthContext);

  function handleLogout() {
    logout();

    nav("/");
  }

  return (
    <div className="topbar">
      <div className="left">
        <h1>Code Odyssey</h1>
      </div>

      <div className="center"></div>

      <div className="right">
        <img
          className="user-img"
          src="https://ui-avatars.com/api/?name=A"
          alt="user"
        />
        <button className="config-button">⚙️</button>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
}
