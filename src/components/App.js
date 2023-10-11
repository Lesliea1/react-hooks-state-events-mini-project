import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList"; // Import the TaskList component

import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const onDeleteTask = (taskToBeDeleted) => {
    setTasks(tasks.filter((task) => task.id !== taskToBeDeleted.id));
  };

  const filteredTasks = (selectedCategory) =>
    selectedCategory === "All"
      ? tasks
      : tasks.filter(
          (task) =>
            task.category === selectedCategory || task.category === undefined
        );

  const filteredTasksList = filteredTasks(selectedCategory);

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={filteredTasksList} onDeleteTask={onDeleteTask} />{" "}
    </div>
  );
}

export default App;
