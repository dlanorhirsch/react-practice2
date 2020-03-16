import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import "./index.css";

import {NameList } from "./namelist";
import {Addresses} from "./address";
import {AddressForm} from "./addressform";
import {CardList} from "./cards";

import {CarouselDemo} from './carousel';


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
              <p>The first excercise is a simple counter.  There are many examples and tutorials available including this one from www.freecodecamp.org.  They provide excellent excercises for learning React.  This counter is based on their tutorial.  This is the first one I created after reviewing the tutorial.</p>
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
            <Container>
            <h2>Rendering a List of Cards</h2>
            <p>This excercise was not too difficult.  This excercise is from Nathan Sebhastian at Hackernoon.com <a href="https://hackernoon.com/hands-on-projects-to-learn-the-basics-of-react-3a06726514a8">(link)</a>.  It is well written and easy to follow.  However, I had difficult with the import/export.  Eventually I rewrote the functions as functional expressions and assigned the functions to variables.  I was then able to export the variable.  This was a helpful excercise in applying props.  It also became clearer to me that it is the parent component that is exported and imported.</p>
              <CardList />
            </Container>
            <Container>
              
            <h2>Creating a Search Wizard</h2>
            <p>This example was again taken from hackernoon.com (link above).  This excercise helped me become familiar with React fragments <a href="https://reactjs.org/docs/react-api.html#reactfragment">(see React Fragments)</a>.</p>
             
              
            </Container>
            <Container>
            <h2>Rendering A Bootstrap Carousel</h2>
              <p>This was a most interesting process.  I started out trying to create a bootstrap carousel using code from their website.  I was having trouble getting it to work.  I started searching for tutorials and examples and I learned A LOT!  There are many ways to create a carousel (sometimes referred to as a slider).  The degree of dificulty with each approach varies significantly.  An example would be React Slick found here <a href="https://react-slick.neostack.com">(see React Slick @ neostack.com).</a>  Another one I found (and chose to use) was another npm package called "React Responsive Carousel."  It simplifies the process of creating a carousel tremendously, but continues to provide lots of options for control.  It litterally took minutes to put together.  Here is a link <a href="https://www.npmjs.com/package/react-responsive-carousel">(React Responsive Carousel ).</a></p>
              <Row>
                <CarouselDemo/>
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