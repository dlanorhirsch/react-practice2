import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';
import "./index.css";

import {Counter} from './counter';
import {NameList } from "./namelist";
import {Addresses} from "./address";
import {AddressForm} from "./addressform";
import {CardList} from "./cards";
import {MasterForm} from './wizard';
import {Carousel} from './carousel2';
import {TodoApp} from './todolist-hooks';
import {TodoList} from './todolist-classes';
// import {PracticeData} from './userdata';
import PeopleData from './userdata2.js';

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
          <h3>7. Rendering A Carousel</h3>
          <p>This was a interesting process. I tried several approaches.  As a new developer, my ability to modify each approach was limited. The degree of dificulty for each approach varied significantly. I started out trying to create a bootstrap carousel using code from their website. I was having trouble getting it to perform the way I wanted it to.  
          
          I started searching for tutorials and examples and I learned a LOT!  There are many ways to create a carousel (sometimes referred to as a slider). My second attempt was using an npm package. This one claimed to be responsive but there were issues with the thumbs at the bottom when resizing to a mobile-size screen (thumbs extended beyond the page). On to the next one! This one performed the best,  and was pretty easy to use.  The npm package can be found here: <a href="https://www.npmjs.com/package/pure-react-carousel">(npm pure-react-carousel).</a>  This is the one I used for the example.  It literally took minutes to put together, and some additional time to modify for this example.  All-in-all, this is a simple and easy to use carousel. Thanks to the folks who created it!
          </p>
          <Row className="carouselParent">
            <Carousel/>
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
            <h3>9. Two Examples for Maintaining State in a React Component</h3>
            <p>Associating an open source API user database to React using <code>fetch()</code> is the goal of this exercise.</p>
            
            <p>The code mounts a group of user data cards to the DOM, using two different methods, lifecycles, and hooks.  The API data used in both cases came from typicode's jsonplaceholder API on GitHub: <a href="https://jsonplaceholder.typicode.com/users">https://jsonplaceholder.typicode.com/users.</a> </p>
            
            <PeopleData />
            
            
            

            {/* <p>The lifecycle methods used are componentDidMount() and componentDidUnmount(). </p> */}
            {/* <PracticeData /> */}
          </Row>
        </Container>  
        <Container>
          <Row>
            
            <h4>Lifecycle Methods:</h4>
            <p>The code resulted in a "memory leak" error. This HackMD details the resolution of this error.<a href="https://hackmd.io/K-R5QPlRRnKR7UB5H3TC6g.com"> HackMD</a> Both version (lifecycle and hooks, were styled using the same standard CSS file by using the same classNames, though the contact is slightly different.</p>
            <p>Memory leaks...... </p>

            <h4>Hooks / Fetch / Async / Await</h4>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <h4>Hooks Methods:</h4>
          
          
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