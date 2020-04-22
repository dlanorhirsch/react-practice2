import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row} from 'react-bootstrap';
import "./index.css";

import {Counter} from './counter';
import {NameList } from "./namelist";
import {Addresses} from "./address";
import {AddressForm} from "./addressform";
import {CardList} from "./cards";
import {MasterForm} from './wizard';
import {CarouselDemo} from './carousel';
import {TodoApp} from './todolist-hooks';
import {TodoList} from './todolist-classes';
import {PracticeData} from './userdata';

export class Application extends React.Component{
  render(){
    return (
      <div className="main-div">
        <header className="jumbotron text-center p-5">
          <h1><img src="/React.png" alt="" className="logo"></img>React Practice Exercises</h1>
        </header>
    <Container>
      <Row>
        <h3>1. Simple  Counter:</h3>
        <p>The first excercise is a simple counter.  There are many examples and tutorials available including this one from www.freecodecamp.org.  They provide excellent excercises for learning React.  This counter is based on their tutorial.  This is the first one I created after reviewing the tutorial.
        </p>
        <Counter/>
        <hr></hr>
        <Container>
          <Row>
            <h3>2. Render a Simple List:</h3>
            <p>After watching many React tutorials and completing the freecodecamp tutorials (an excellent educational resource I might add: <a href="https://www.freecodecamp.org/learn/">https://www.freecodecamp.org/learn/</a>), I challenged myself to start creating components in React.  Folowing the counter, this simple list was my next effort.
            </p>
            <ul><NameList/></ul>
          </Row>
        </Container>
        {/* ---------------------------------- */}
        <Container>
         <Row>
            <h3>3. Render an Array of Objects:</h3>
            <p>Then I moved on to rendering arrays.  This presented new challenges; working with arrays in React is a bit more complicated. Here is a good reference: <a href="https://reactjs.org/docs/lists-and-keys.html">(React: Lists and Keys)</a> In this case, I wanted to render an array of addresses.  This section also uses in-line JSX styling (<a href="https://reactjs.org/docs/faq-styling.html">Styling and CSS in React).</a>
            </p>
            <Addresses/>
          </Row>
        </Container>
        {/* -------------------------------------- */}
        <Container style={{marginTop: "40px"}}>
          <Row>
            <h3>4. Rendering Forms</h3>
            <p>This challenge revolved around the creation of forms in React (no simple task!).  Actually, rendering the form itself is not difficult, however, updating state requires some additional knowledge.  Here is a link to <a href="https://reactjs.org/docs/faq-state.html">Component State.</a>
            </p>
            <AddressForm/>
          </Row>
        </Container>
        {/* -------------------------------------- */}
        <Container style={{marginTop: "40px"}}>
          <h3>5. Rendering a List of Cards</h3>
          <p>This excercise was not too difficult.  This excercise is from Nathan Sebhastian at Hackernoon.com <a href="https://hackernoon.com/hands-on-projects-to-learn-the-basics-of-react-3a06726514a8">(link)</a>.  It is well written and easy to follow.  However, I had difficult with the import/export.  Eventually I rewrote the functions as functional expressions and assigned the functions to variables.  I was then able to export the variable.  This was a helpful excercise in applying props.  It also became clearer to me that it is the parent component that is exported and imported.
          </p>
          <CardList/>
        </Container>
        {/* -------------------------------------- */}
        <Container style={{marginTop: "40px"}}>
          <h3>6. Creating a Search Wizard</h3>
          <p>This example was again taken from hackernoon.com (link above). This excercise helped me become familiar with React fragments <a href="https://reactjs.org/docs/react-api.html#reactfragment">(see React Fragments)</a>.</p>
          <MasterForm/>
        </Container>
        {/* -------------------------------------- */}
        <Container>
          <h3>7. Rendering A Bootstrap Carousel</h3>
          <p>This was a most interesting process.  I started out trying to create a bootstrap carousel using code from their website.  I was having trouble getting it to work.  I started searching for tutorials and examples and I learned A LOT!  There are many ways to create a carousel (sometimes referred to as a slider).  The degree of dificulty with each approach varies significantly.  An example would be React Slick found here <a href="https://react-slick.neostack.com">(see React Slick @ neostack.com).</a>  Another one I found (and chose to use) was another npm package called "React Responsive Carousel."  It simplifies the process of creating a carousel tremendously, but continues to provide lots of options for control.  It litterally took minutes to put together.  Here is a link <a href="https://www.npmjs.com/package/react-responsive-carousel">(React Responsive Carousel ).</a>
          </p>
          <Row>
            <CarouselDemo/>
          </Row>
        </Container>
        {/* -------------------------------------- */}
        <Container>
          <h3>8. React Forms/Todo Lists</h3>
          <p>This is an excercise in the creation of  forms using older and newer coding methods.  There form below are identical in appearance.  However, the example on the left using hooks while the example on the right uses classes and state <a href="https://reactjs.org/docs/hooks-intro.html">React Hooks.</a>
          </p>
          <Row>
            <TodoApp/>
            <TodoList/>
          </Row>
        </Container>
        {/* ---------------------------------------- */}
        <Container>
        </Container>
        {/* -------------------------------- */}
        <Container>
          <Row>
            <h3>9. Connecting to an Open Source API</h3>
            <p>Associating an open source API user database to React using "fetch".  Display a list of user information.  (This section was styled with standard CSS).The API accessed is: <a href="https://jsonplaceholder.typicode.com/users">https://jsonplaceholder.typicode.com/users.</a></p>
            <PracticeData/>
          </Row>
        </Container>  
      </Row>
    </Container>
    <footer>
      <div className="copywrite">Copywrite: StackStudio, 2020</div>
    </footer>
  </div>
  )}          
}

ReactDOM.render(<Application />, document.getElementById('root'));