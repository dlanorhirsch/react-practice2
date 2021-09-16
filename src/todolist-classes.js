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
        <h4 style={{color: "black", fontSize: "1.1em", marginLeft: ".8em"}}>This is an example using classes and state.</h4>
      <div className="todo-list" style={{marginLeft: "2em"}}>{this.state.todos.map((todo,index) => 
        
          <div className="todo" key={index}>{todo}</div>
        
      
    )}
        <form onSubmit={this.handleSubmit}>
          <input style={{width: "100%", marginTop: "1em"}} 
            id ="todo"
            type="text" 
            name="todo" 
            placeholder="Add todo..." 
          />
          <button 
            className="btn btn-sm btn-light"
            style={{border:"solid 1px gray", marginTop:"5px"}}
            >Add Todo</button>
        </form>
        </div>  
        <a href="https://github.com/dlanorhirsch/react-examples/blob/master/src/todolist-classes.js" style={{color: "white"}}>(Source code for classes example.)</a>
    </div>
    )}
  }
  