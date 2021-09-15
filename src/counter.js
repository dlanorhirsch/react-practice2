import React from 'react';


export class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    }
    increment = () => {
      this.setState({
        count: this.state.count + 1
      });  
    } 
    decrement = () => {
      this.setState({
        count: this.state.count - 1
      });
    }
    reset = () => {
      this.setState({
        count: 0
      });
    }
    render(){
      return (
        <div style={{textAlign: "center"}}>
          <button className="btn btn-primary"
            style={{height: 40, width: 100, margin: 10}}
            onClick={this.increment}>Increment
          </button>
          <button className="btn btn-primary" 
            style={{height: 40, width: 100, margin: 10}} 
            onClick={this.decrement}>Decrement
          </button>
          <button className="btn btn-primary" 
            style={{height: 40, width: 100, margin: 10}}
            onClick={this.reset}>Reset
          </button>
          <h2 style={{fontSize: 20, margin: 20}}>Current Count: {this.state.count}</h2>

        </div>
      )
    }
}
// ReactDOM.render(<Counter/>, document.getElementbyId('root'));