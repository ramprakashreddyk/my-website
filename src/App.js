import React, { useState, useEffect } from 'react';
import './App.css';
import Cookies from 'js-cookie';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Load todos from cookies on initial mount
  useEffect(() => {
    const todosFromCookies = Cookies.getJSON('todos');
    if (todosFromCookies && todosFromCookies.length) {
      setTodos(todosFromCookies);
    }
  }, []);

  // Save todos to cookies whenever todos state changes
  useEffect(() => {
    Cookies.set('todos', todos);
  }, [todos]);

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };
  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };
  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <center>
    <div className="App">
      <header className="App-header">
      <h1>Prakash</h1>
        <h1>Todos</h1>
        <div className="todo-container">
          <div className="todo-input">
            <input type="text" value={newTodo} onChange={handleInputChange} />
            <button onClick={handleAddTodo}>Add</button>
          </div>
          <ul className="todo-list">
            {todos.map((todo, index) => (
              <li key={index}>
                {todo}
                <button onClick={() => handleDeleteTodo(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        
      </header>
    </div>
    </center>
  );
}

export default App;