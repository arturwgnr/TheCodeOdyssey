export default function Topbar() {
  return (
    <div className="topbar">
      <div className="left"></div>

      <div className="center"></div>

      <div className="right">
        <button className="config-button">⚙️</button>
        <button className="logout-button">Logout</button>
        <img className="user-img" src="" alt="" />
      </div>
    </div>
  );
}
