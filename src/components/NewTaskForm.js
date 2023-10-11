
import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState("Work");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      text: taskText,
      category: taskCategory,
    };

    onTaskFormSubmit(newTask);

    setTaskText("");
    setTaskCategory("Work");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Details:
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            aria-label="Details"
          />
        </label>
       <label>
  Category:
  <select
    value={taskCategory}
    onChange={(e) => setTaskCategory(e.target.value)}
    aria-label="Category"
  >
    {categories.map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ))}
  </select>
</label>

        <button type="submit">Add task</button>
      </form>
    </div>
  );
}

export default NewTaskForm;
