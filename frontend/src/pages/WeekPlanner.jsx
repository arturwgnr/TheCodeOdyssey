import { useState } from "react";
import Topbar from "../components/Topbar";
import "../styles/WeekPlanner.css";

export default function WeekPlanner() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pending",
    date: null,
    priority: "",
    category: "",
  });

  const [tasks, setTasks] = useState([]);

  //add: desc, status

  //idea: DESCRICAO add com condicional caso user queira ao clicar na task e mostrar mais opcoes / STATUS add default pending e depois user pode mudar pra in progress ou done.

  return (
    <div className="week-page">
      <Topbar />

      <div className="week-content">
        {/* ===== TASK INBOX ===== */}
        <section className="inbox-section">
          <h2 className="section-title">Inbox</h2>

          {/* ---- Task Creation Form ---- */}
          <div className="task-form">
            <input
              name="title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              type="text"
              placeholder="Task title"
            />

            <select
              name="priority"
              value={formData.priority}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            >
              <option value="">Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <select
              name="category"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            >
              <option value="">Category</option>
              <option value="study">Study</option>
              <option value="personal">Personal</option>
              <option value="gym">Gym</option>
              <option value="work">Work</option>
            </select>
            <button
              onClick={() => {
                setTasks([...tasks, { ...formData, id: crypto.randomUUID() }]);
                setFormData({
                  title: "",
                  description: "",
                  status: "pending",
                  date: null,
                  priority: "",
                  category: "",
                });
              }}
            >
              Add
            </button>
          </div>

          {/* ---- Task List ---- */}
          <div className="inbox-list">
            {tasks.map((task) => (
              <div className="task-card" key={task.id}>
                <div className="task-left">
                  <div className="task-priority-bar"></div>
                  <p className="task-title">{task.title}</p>
                </div>

                <div className="task-actions">
                  <button>Edit</button>
                  <button>Done</button>
                  <button>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== WEEKLY PLANNER ===== */}
        <section className="planner-section">
          <h2 className="section-title">Weekly Planner</h2>

          <div className="week-grid">
            {/* One column per day */}
            <div className="day-column">
              <h3 className="day-title">Monday</h3>
              <div className="day-tasks">
                <div className="task-card">Task A</div>
              </div>
            </div>

            <div className="day-column">
              <h3 className="day-title">Tuesday</h3>
              <div className="day-tasks">
                <div className="task-card">Task B</div>
              </div>
            </div>

            <div className="day-column">
              <h3 className="day-title">Wednesday</h3>
              <div className="day-tasks"></div>
            </div>

            <div className="day-column">
              <h3 className="day-title">Thursday</h3>
              <div className="day-tasks"></div>
            </div>

            <div className="day-column">
              <h3 className="day-title">Friday</h3>
              <div className="day-tasks"></div>
            </div>

            <div className="day-column">
              <h3 className="day-title">Saturday</h3>
              <div className="day-tasks"></div>
            </div>

            <div className="day-column">
              <h3 className="day-title">Sunday</h3>
              <div className="day-tasks"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
