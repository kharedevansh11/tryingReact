import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './Search.css';

const Search = () => {
   const [query,setQuery] = useState('');
   const todos = useSelector(state => state.todos);

   const filteredUsers = todos.filter(todo =>
    todo.title.toLowerCase().startsWith(query.toLowerCase())
   );
  return (
    <div className="search-container">
        <input type="text"
        placeholder="search user by name"
        className="search-box"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        />
        <ul className="todos-list">
            {filteredUsers.map(todo => (
                <li key={todo.id} className="todo-card">{todo.title} {todo.completed}</li>
            ))}
        </ul>
      
    </div>
  )
}

export default Search