import React from 'react';
import { useState } from 'react';
import './index.css';

function Todo({todo, index}) {
  return (
    <div className="todo">{todo.text}</div>
  );
}
function TodoForm({addTodo}) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');

  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className='input'
        value={value}
        placeholder= "Add Todo..."
        onChange={e => setValue (e.target.value)} />
    </form>
  )
}

function TodoApp() {
  const [todos, setTodos] = useState([
    {
      text: "Learn to React",
      isCompleted: false
    },
    {
      text: "Search for toilet paper.",
      isComplete: false
    },
    {
      text: "Build a really cool todo app",
      isComplete: false
    }
  ]);

const addTodo = text => {
  const newTodos = [...todos, { text }];
  setTodos(newTodos);
}

return (
  <div className="todoapp">
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo key={index} index={index} todo={todo} />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  </div>
)

}

export {TodoApp};