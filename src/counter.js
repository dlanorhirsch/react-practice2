import React from 'react';
import ReactDOM from 'react-dom';
import {NameList } from "./namelist";
import {Addresses} from "./address";
import "./index.css";
import {AddressForm} from "./addressform";


class Counter extends React.Component{
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
      const styles = {
        fontSize: 24,
        margin: 20,
        border: "1px solid black",
        display: "block"
      }  
  

      return (
        <div>
          <h2 style={{fontSize: 24, fontWeidht: "bold", marginLeft: 20, textDecoration: "underline"}}>Simple Counter:</h2>
          <button style={styles} onClick={this.increment}>Increment</button>
          <button style={styles} onClick={this.decrement}>Decrement</button>
          <button style={styles} onClick={this.reset}>Reset</button>
          <h2 style={{fontSize: 24, margin: 20}}>Current Count: {this.state.count}</h2>
          <NameList/>
          <Addresses/>
          <AddressForm/>
        </div>
      )
    }
  }

export default Counter;

ReactDOM.render(<Counter />, document.getElementById('root'));