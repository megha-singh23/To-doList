// import QuestionList from'./component/questionlist'
// import First from './component/first' 
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// const App=()=>{
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<First />} />
//         <Route path="/question-list" element={<QuestionList />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

//------TODOLIST PROJECT --------

import React, { useContext, useState } from 'react';
import { TodoContext } from './context/TodoContext';


const App = () => {
  const [newTodo, setNewTodo] = useState('');
  const { todos, addTodo, toggleTodo, deleteTodo } = useContext(TodoContext);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-green-500  w-full">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
        <div className="mb-4">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task"
            className="w-full p-2 border border-gray-300 rounded mb-2 focus:outline-none"
          />
          <button
            onClick={handleAddTodo}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className="flex justify-between items-center mb-2">
              <span
                className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : ''}`}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="bg-red-500 text-white p-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

