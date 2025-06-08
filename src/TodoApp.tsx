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
    <div className="Todo w-lg m-auto pt-5">
      <div className="flex justify-between bg-gray-100 p-3 mb-2">
        {" "}
        <input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          placeholder="Add Task"
          className="w-3/4"
        />
        <button
          className="bg-blue-500 py-1 px-4 cursor-pointer text-white"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="border-b border-gray-100 py-2">
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
