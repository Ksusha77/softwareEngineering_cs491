import { useState } from 'react'
import './App.css'
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
    }
  };

  const deleteTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">My To-Do List</h1>
      <TodoInput onAddTask={addTask} />
      <TodoList tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App
