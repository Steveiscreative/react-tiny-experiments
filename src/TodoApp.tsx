import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoApp() {
  const [newText, setNewText] = useState("");

  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("my-todo-list");
    return saved ? JSON.parse(saved) : [];
  });

  function updateCompleteStatus(id: number) {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function handleAdd() {
    if (!newText.trim()) return;

    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        text: newText,
        completed: false,
      },
    ]);

    setNewText("");
  }

  useEffect(() => {
    localStorage.setItem("my-todo-list", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="Todo">
      <div>
        {" "}
        <input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          placeholder="Add Task"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {" "}
            <input
              onChange={() => updateCompleteStatus(task.id)}
              type="checkbox"
              checked={task.completed}
            />{" "}
            <span
              className={
                task.completed
                  ? "line-through decoration-red-900 decoration-4"
                  : ""
              }
            >
              {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
