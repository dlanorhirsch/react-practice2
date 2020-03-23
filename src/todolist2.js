import React from 'react';

export class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: ["grocery shopping",
              "practice coding",
              "take out trash"]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(event) {
    this.setState({
     task: event.target.value})
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      todos: [...this.state.todos]
    })
  }
  render(){
      return(
      <div>{this.state.todos.map((todo,index) => 
        
          <li key={index}>{todo}</li>
        
      
    )}
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            name="input" 
            value={this.state.todo}
            placeholder="Add todo..." 
            onChange={this.handleChange}/>
          <button>Add Todo</button>
        </form>
          
    </div>
    )}
  }
  