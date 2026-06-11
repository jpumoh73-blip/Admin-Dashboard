import React, { useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  // Add or Save Task
  const handleAddOrSave = () => {
    if (task.trim() === "") return;

    // Add new task
    if (editIndex === null) {
      setTasks([...tasks, task]);
    } 
    // Save edited task
    else {
      const updated = [...tasks];
      updated[editIndex] = editValue;
      setTasks(updated);
      setEditIndex(null);
      setEditValue("");
    }

    setTask("");
  };

  // Delete task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Start editing
  const startEdit = (index) => {
    setEditIndex(index);
    setEditValue(tasks[index]);
  };

  // Handle Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddOrSave();
    }
  };

  return (
    <div className="todo-container">
      <h1>My To-Do List</h1>

      {/* Input */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task..."
          value={editIndex === null ? task : editValue}
          onChange={(e) =>
            editIndex === null
              ? setTask(e.target.value)
              : setEditValue(e.target.value)
          }
          onKeyDown={handleKeyDown}
        />

        <button onClick={handleAddOrSave}>
          {editIndex === null ? "Add" : "Save"}
        </button>
      </div>

      {/* List */}
      <ul className="task-list">
        {tasks.map((item, index) => (
          <li key={index}>
            <span onDoubleClick={()=>
            startEdit(index)}>
              {item}
            </span>

            <div className="btn-group">
              <button onClick={() => startEdit(index)}>Edit</button>
              <button
                className="delete-btn"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;