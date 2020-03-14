import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import "./index.css";

import {NameList } from "./namelist";
import {Addresses} from "./address";
import {AddressForm} from "./addressform";

// import data file once sass is installed

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
          <header class="jumbotron text-center p-5">
          
            <h1><img src="/React.png" alt="" class="logo"></img>My React Practice Exercises</h1>
          </header>
          <Container>
            <Row>
              <h2 class="mr-20">Simple  Counter:</h2>
              <p>The first excercise is a simple counter.  There are many examples and tutorials available including this one from www.freecodecamp.org.  They provide excellent excercises for learning React.  This counter is based on their tutorial.  This is the first one I created after reviewing the turorial.</p>
                <button class="btn btn-primary" style={{height: 40, width: 120, margin: 10}} onClick={this.increment}>Increment</button>
                <button class="btn btn-primary" style={{height: 40, width: 120, margin: 10}} onClick={this.decrement}>Decrement</button>
                <button class="btn btn-primary" style={{height: 40, width: 120, margin: 10}} onClick={this.reset}>Reset</button>
                <h2 style={{fontSize: 24, margin: 20}}>Current Count: {this.state.count}</h2>
              <hr></hr>
            <Container>
              <Row>
                <h2>Render a Simple List:</h2>
                <p>After watching many React tutorials and completing the freecodecamp tutorials (an excellent educational resource I might add), I challenged myself to start creating components in React.  Folowing the counter, this simple list was my next effort.</p>
                <ul><NameList/></ul>
              </Row>
            </Container>
            <Container>
              <Row>
                <h2>Render an Array of Objects:</h2>
                <p>Then I moved on to rendering arrays.  This presented new challenges; working with arrays in React is a bit more complicated. In this case, I wanted to render an array of addresses.</p>
                <Addresses/>
              </Row>
            </Container>
            <Container>
              <Row>
              <h2>Rendering Forms</h2>
              <p>This challenge revolved around the creation of forms in React (no simple task!).  Actually, rendering the form itself is not difficult, however, updating state requires some additional knowledge.</p>
                <AddressForm/>
              </Row>
            </Container>
            
            </Row>
          </Container>
        </div>
      )
    }
  }

export default Counter;

ReactDOM.render(<Counter />, document.getElementById('root'));