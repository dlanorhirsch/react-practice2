import React from 'react';

export class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: ["Search for toilet paper.",
              "Wash hands with soap and water.",
              "Stay 6 feet away from everyone."]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(event) {
    this.setState({
     todos: event.target.value})
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      todos: [...this.state.todos, event.target.todo.value]
    })
  }
  render(){
      return(
        <div className="todoapp">
        <h5 style={{color: "white"}}>This is an example using classes and state.</h5>
      <div className="todo-list">{this.state.todos.map((todo,index) => 
        
          <li className="todo" key={index}>{todo}</li>
        
      
    )}
        <form onSubmit={this.handleSubmit}>
          <input 
            id ="todo"
            type="text" 
            name="todo" 
            placeholder="Add todo..." 
          />
          <button 
            className="btn btn-sm btn-light"
            style={{marginLeft:  "20px", border:"solid 1px gray"}}
            >Add Todo</button>
        </form>
        </div>  
        <a href="https://github.com/dlanorhirsch/react-examples/blob/master/src/todolist-classes.js" style={{color: "white"}}>(Source code for classes example.)</a>
    </div>
    )}
  }
  