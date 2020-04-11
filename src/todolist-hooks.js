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
      <input style={{width: "100%"}}
        type="text"
        className='input'
        value={value}
        placeholder= "Add Todo..."
        onChange={e => setValue (e.target.value)} />
        <button 
            className="btn btn-sm btn-light"
            style={{border:"solid 1px gray", marginTop: "5px"}}
            >Add Todo</button>
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
      text: "Use JSX throughout the day.",
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
  <h5 style={{color: "black"}}>This is an example using React hooks.</h5>
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo key={index} index={index} todo={todo} />
      ))}
      <TodoForm addTodo={addTodo} />
      
    </div>
    <a href="https://github.com/dlanorhirsch/react-examples/blob/master/src/todolist.js" style={{color: "white"}}>(Source code for hooks example.)</a>
  </div>
)

}

export {TodoApp};