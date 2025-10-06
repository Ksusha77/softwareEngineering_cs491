import React, { useState } from 'react';

const TodoInput = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleAdd = () => {
    if (newTask.trim() === '') return; // защита от пустого ввода
    onAddTask(newTask);
    setNewTask('');
  };

  return (
    <div className="flex w-80 mb-4">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a task"
        className="flex-grow p-2 rounded-l bg-gray-800 text-white outline-none"
      />
      <button
        onClick={handleAdd}
        className="px-4 bg-blue-500 hover:bg-blue-700 rounded-r"
      >
        +
      </button>
    </div>
  );
};

export default TodoInput;
