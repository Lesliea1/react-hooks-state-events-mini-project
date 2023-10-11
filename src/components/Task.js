import React from "react";

function Task({ task, onDeleteTask }) {
  const handleDeleteClick = () => {
    onDeleteTask(task);
  };

  return (
    <div className="task">
      <div className="label">{task.category || "No Category"}</div>
      <div className="text">{task.text || "No Task Text"}</div>
      <button className="delete" onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  );
}

export default Task;
