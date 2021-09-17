import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';

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
import "./index.css";

export class Application extends React.Component{
  render(){
    return (
      <div className="main-div">
        <header>
          <img src="/React-icon-dark.png" alt="" className="logo"></img>
        </header>
        <h1>React Examples</h1>
      
    <Container>
      <Row>
        <h3>Simple  Counter:</h3>
        <p>
          There are many examples and tutorials available including this one from www.freecodecamp.org (an excellent choice for learning web development). This counter is based on their tutorial.
        </p>
      <Counter/>
      <hr></hr>
    <Container>
      <Row>
        <h3>Render a Simple List:</h3>
          <p>
            After watching many React tutorials and completing the freecodecamp tutorials (an excellent educational resource I might add: <a href="https://www.freecodecamp.org/learn/">https://www.freecodecamp.org/learn/</a>), I challenged myself to start creating components in React.  Following the counter, this simple list was my next effort.
          </p>
        <NameList/>
      </Row>
    </Container>
    {/* ---------------------------------- */}
    <hr></hr>
    <Container>
      <Row>
        <h3>Render an Array of Objects:</h3>
        <p>
          Then I moved on to rendering arrays.  This presented new challenges; working with arrays in React is a bit more complicated. Here is a good reference: <a href="https://reactjs.org/docs/lists-and-keys.html">(React: Lists and Keys)</a> In this case, I wanted to render an array of addresses.  This section also uses in-line JSX styling (<a href="https://reactjs.org/docs/faq-styling.html">Styling and CSS in React).</a>
        </p>
        <Addresses/>
      </Row>
    </Container>
    {/* -------------------------------------- */}
    <hr></hr>
    <Container>
      <Row>
        <h3>Rendering Forms</h3>
          <p>
            This challenge revolved around the creation of forms in React (no simple task!).  Actually, rendering the form itself is not difficult, however, updating state requires some additional knowledge.  Here is a link to <a href="https://reactjs.org/docs/faq-state.html">Component State.</a>
            <div style={{fontWeight: "bold"}}>Enter Info:</div>
          </p>
          {/* <div>Enter Name and Address:</div> */}
        <AddressForm/>
      </Row>
    </Container>
    {/* -------------------------------------- */}
    <hr></hr>
    <Container>
      <h3>Rendering a List of Cards</h3>
        <p>
          This excercise was not too difficult.  This excercise is from Nathan Sebhastian at Hackernoon.com <a href="https://hackernoon.com/hands-on-projects-to-learn-the-basics-of-react-3a06726514a8">(link)</a>.  It is well written and easy to follow.  However, I had difficult with the import/export.  Eventually I rewrote the functions as functional expressions and assigned the functions to variables.  I was then able to export the variable.  This was a helpful excercise in applying props.  It also became clearer to me that it is the parent component that is exported and imported.
        </p>
      <CardList/>
    </Container>
    {/* -------------------------------------- */}
    <hr></hr>
    <Container>
      <h3>Creating a Search Wizard</h3>
          <p>
            This example was again taken from hackernoon.com (link above). This excercise helped me become familiar with React fragments <a href="https://reactjs.org/docs/react-api.html#reactfragment">(see React Fragments)</a>
          </p>
        <MasterForm/>
    </Container>
    {/* -------------------------------------- */}
    <hr></hr>
    <Container>
      <h3>Rendering A Carousel</h3>
        <p>
          There are a variety of methods for creating carousels (also known as sliders). The Bootstrap framework offers a carousel. There are numerous npm packages available as well. They range from very simple to complicated; the functionality and degree of responsiveness coincides with code complexity. Reading the documentation assosciated with the package will provide some information that is helpful when chosing the right package for you project.
        </p>
        <p>
          Not all packages are created equal. The initial package used for this example had functionality that including a continuous loop which could be stopped at any point. However, despite its claim to be responsive, there were problems with it rendering properly on mobile devices (tumbs extended beyond the page).
        </p>
        <p>
          The next package, and the one used for this example, had less functionality but there were no issues with the functionality. One could optionally add functionality if needed.
        </p>
        <p>
          The npm package can be found here: <a href="https://www.npmjs.com/package/pure-react-carousel">(npm pure-react-carousel).</a>  It literally took minutes to put together, including adjustments to the CSS. Thanks to the folks who created it!
        </p>
      <Row className="carouselParent">
        <Carousel/>
      </Row>
    </Container>
    {/* -------------------------------------- */}
    <hr></hr>
    <Container>
          <h3>React Forms/Todo Lists</h3>
          <p>This is an excercise in the creation of  forms using older and newer coding methods.  The forms below are identical in appearance.  However, the example on the left using hooks while the example on the right uses classes and state <a href="https://reactjs.org/docs/hooks-intro.html">React Hooks.</a>
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
        <hr></hr>
        <Container>
          <Row>
            <h3>Two Examples for Maintaining State in a React Component</h3>
            <p>Associating an open source API user database to React using <code>fetch()</code> is the goal of this exercise.</p>
            
            <p>The code mounts a group of user data cards to the DOM, using two different methods, lifecycles, and hooks.  The API data used in both cases came from typicode's jsonplaceholder API on GitHub: <a href="https://jsonplaceholder.typicode.com/users">https://jsonplaceholder.typicode.com/users.</a> </p>
            
            <PeopleData />
            {/* <p>The lifecycle methods used are componentDidMount() and componentDidUnmount(). </p> */}
            {/* <PracticeData /> */}
          </Row>
        </Container>  
        {/* -------------------------------- */}
        <hr></hr>
        <Container>
          <Row>
            <h4 style={{marginLeft: ".7em"}}>Lifecycle Methods:</h4>
            <p>
              This section is a discussion of life cycle methods used, including the discovery of multiple ways of writing the code that was discovered when the "memory leaks" error occured, and the resulting investigation of different code to accomplish the desired goal, and resolve the error.  The "in-depth" investigation of coding alternatives and various methods of error resolution to be discussed at more length in the following HackMD article:<a href="https://hackmd.io/zrKlbybdQ66lz1hRW1qsTA"> Investigations: Lifecycles, state, hooks and memory leaks.</a> 
            </p>

          <h4 style={{marginLeft: ".7em"}}>Hooks Methods:</h4>
          <p>This section is a discussion of the function component/hooks used to acheive the goal of fetching data and duplicate the results of the lifecycle methods.  See same HackMD article referenced above.</p>
          
          
          </Row>
        </Container>
        <Container>
          <Row>


          </Row>
        </Container>
      </Row>
    </Container>
    <footer>

    </footer>
  </div>
  )}          
}

ReactDOM.render(<Application />, document.getElementById('root'));