import React from 'react';

const TodoList = ({ tasks, onDeleteTask }) => {
  return (
    <ul className="space-y-2 w-80 text-left">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="flex justify-between items-start bg-gray-800 p-2 rounded"
        >
          <span
            className="flex-1 break-words whitespace-normal overflow-hidden"
          >
            {task}
          </span>
          <button
            onClick={() => onDeleteTask(index)}
            className="ml-2 text-red-400 hover:text-red-600 flex-shrink-0"
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
