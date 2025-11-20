import Topbar from "../components/Topbar";
import "../styles/WeekPlanner.css";

export default function WeekPlanner() {
  return (
    <div className="week-page">
      <Topbar />

      <div className="week-content">
        {/* ===== TASK INBOX ===== */}
        <section className="inbox-section">
          <h2 className="section-title">Inbox</h2>

          {/* ---- Task Creation Form ---- */}
          <div className="task-form">
            <input type="text" placeholder="Task title" />
            <select>
              <option>Priority</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
            <select>
              <option>Category</option>
              <option>Study</option>
              <option>Personal</option>
              <option>Gym</option>
              <option>Work</option>
            </select>
            <button>Add</button>
          </div>

          {/* ---- Task List ---- */}
          <div className="inbox-list">
            <div className="task-card">
              <div className="task-left">
                <div className="task-priority-bar"></div>
                <p className="task-title">Example task</p>
              </div>

              <div className="task-actions">
                <button>Edit</button>
                <button>Done</button>
                <button>Delete</button>
              </div>
            </div>
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
