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
import image from './react-logo.png';

export class Application extends React.Component{
  render(){
    return (
      <div className="main-div">
        <header>
          <img src={image}
               alt="React logo"
               className="logo"
               style={{width: "20%",
                      maxWidth: "300px",
                      height: "auto",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      padding: "2em 0 1em 0",
                      transform: "scale(1)"}}>
          </img>
        </header>
        
    <Container>
    <Row>
      <h1 style={{textAlign: "center", marginBottom: "1.5em"}}>React Examples</h1>
        <p>This is an exploratory investigation of React. Numerous components were created with the intention of using some of them in a future version of the <a href="https://hirschro.study-groups.org/color-charts/public/">Color Charts</a> project. The two investigations form the basis of a React application under development involving aspects of color. Additional investigations may be developed in an effort to settle on the most appropriate frameworks. The code for all of the following examples is available here: <a href="https://github.com/hirschro/react-examples/tree/master/src">React Examples/src directory</a>.
        </p>
      </Row>
      <hr></hr>
      <Container>
        <Row>
          <h3>Simple  Counter:</h3>
          <p>This counter, aquired from <a href="https://www.freecodecamp.org">Free Code Camp</a> (an excellent resource for learning web development), is simple and easy to implement. It can be developed further for more complex applications. This counter is based on this <a href="https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-write-a-simple-counter/301425">tutorial</a>. <a href="https://github.com/hirschro/react-examples/blob/master/src/counter.js" rel="noopener noreferrer" target="_blank">Source code</a>.
          </p>
          <Counter/>
        </Row>
      </Container>
      <hr></hr>
      <Container>
        <Row>
          <h3>Render a Simple List:</h3>
            <p>
            The components one can create with React are limitless, from simple to complex. This example renders a simple list. <a href="https://github.com/hirschro/react-examples/blob/master/src/namelist.js" target="_black" rel="noopener norefferer">Source code</a>.
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
            A more complex challenge than rendering simple lists is working with arrays. Though more complicated, they offer an opportunity to store multiple values in a single place. This article <a href="https://reactjs.org/docs/lists-and-keys.html">React: Lists and Keys</a> is a helpful resource for working with arrays.
            <br></br>
            </p>
            <p>There is a bit more emphasis on styling in this example. This link provides general information about <a href="https://reactjs.org/docs/faq-styling.html">Styling and CSS in React. </a> 
            More specifically and for the example below in-line JSX was utilized. JSX is an inline syntax extension of Javascript. This article <a href="https://reactjs.org/docs/introducing-jsx.html#:~:text=It%20is%20called%20JSX%2C%20and,JSX%20produces%20React%20%E2%80%9Celements%E2%80%9D.">Introducing JSX</a> is very helpful for understanding JSX. <a href="https://github.com/hirschro/react-examples/blob/master/src/address.js">Source code</a>.
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
            Rending forms in React is simple enough, however, like many frameworks, it requires updating and maintaining state. Follow this link to learn more about <a href="https://reactjs.org/docs/faq-state.html">Component State</a>. <a href="https://github.com/hirschro/react-examples/blob/master/src/addressform.js" target="_blank" rel="noopener noreferrer">Source code</a>.

      
            <div style={{fontWeight: "bold"}}>Enter Info:</div>
            </p>
            {/* <div>Enter Name and Address:</div> */}
            <AddressForm/>
        </Row>
      </Container>
      {/* -------------------------------------- */}
      <hr></hr>
      <Container>
        <Row>
          <h3>Rendering a List of Cards</h3>
            <p>
            This investigation originated with Nathan Sebhastian at  <a href="https://hackernoon.com/hands-on-projects-to-learn-the-basics-of-react-3a06726514a8" target="_blank" rel="noopener noreferrer">Hackernoon.com</a> It is well written and easy to follow. It is helpful for learning about and understanding this essential aspect of React. This article is helpful to understand what it means to <a href="https://reactjs.org/docs/render-props.html" target="_blank" rel="noopener noreferrer">Render Props</a>. <a href="https://github.com/hirschro/react-examples/blob/master/src/cards.js" target="_blank" rel="noopener noreferrer">Source code</a>.
            </p>
          <CardList/>
        </Row>
      </Container>
      {/* -------------------------------------- */}
      <hr></hr>
      <Container>
        <Row>
          <h3>Creating a Search Wizard</h3>
            <p>
            This example was also taken from hackernoon.com (link above). This investigation involves the use of <a href="https://reactjs.org/docs/react-api.html#reactfragment">React fragments </a> This example is a bit more involved an warrants the effort to review and understand the code involved. <a href="https://github.com/hirschro/react-examples/blob/master/src/wizard.js" target="_blank" rel="noopener noreferrer">Source code</a>.
            </p>
          <MasterForm/>
        </Row>
      </Container>
      {/* -------------------------------------- */}
      <hr></hr>
      <Container>
        <Row>
          <h3>Rendering A Carousel</h3>
            <p>
            There are a variety of methods for creating carousels (also known as sliders). In addition to Bootstrap, there are numerous other frameworks for creating carousels. There are numerous npm packages available as well. They range from simple to complicated; the functionality and degree of responsiveness coincides with code   complexity. Reading the documentation associated with the package will provide helpful information when selecting the best option for your application.
            </p>
                      <p>
            The npm package utilized here can be found at <a href="https://www.npmjs.com/package/pure-react-carousel" >NPM Pure-React-Carousel.</a><br></br><a href="https://github.com/hirschro/react-examples/blob/master/src/carousel2.js" target="_blank" rel="noopener noreferrer">Source code</a>.
            </p>
            {/* <Row className="carouselParent"> */}
          <Carousel/>
        </Row>
      </Container>
      {/* -------------------------------------- */}
      <hr></hr>
      <Container>
        <Row>
          <h3>React Forms/Todo Lists</h3>
            <p>
            This exploration is a comparison of methodologies, old and new. It involves the creation of forms by using these methodologies.
            </p>
            <p>
            The forms below are identical in appearance.  However, the first example uses <a href="https://reactjs.org/docs/hooks- intro.html">React Hooks</a>, while the second uses React <a href="https://reactjs.org/docs/state-and-lifecycle.html">State and Lifecycle</a> methods. 
            </p>
          <TodoApp/>
          <a href="https://github.com/hirschro/react-examples/blob/master/src/todolist-hooks.js" target="_blank" rel="noopener noreferrer">Source code</a>.
          <TodoList/><a href="https://github.com/hirschro/react-examples/blob/master/src/todolist-classes.js" target="_blank" rel="noopener noreferrer">Source code</a>.

        </Row>
      </Container>
      {/* ---------------------------------------- */}
      <hr></hr>
      <Container>
        <Row>
          <h3>Two Examples for Maintaining State in a React Component</h3>
          <p>
          This investigation involved using the data from an open source API database using React <code>fetch()</code>.
          </p>
          <p>
          The code mounts a group of user data cards to the DOM. The API data used came from typicode's json placeholder API on GitHub: <a href="https://jsonplaceholder.typicode.com/users">https://jsonplaceholder.typicode.com/users</a>.<br></br>
          <a href="https://github.com/hirschro/react-examples/blob/master/src/userdata2.js" target="_blank" rel="noopener noreferrer">Source code</a>.
          </p>
          <PeopleData />
            {/* <p>The lifecycle methods used are componentDidMount() and componentDidUnmount(). </p> */}
            {/* <PracticeData /> */}
        </Row>
      </Container>  
      {/* -------------------------------- */}
      <hr></hr>
      
    </Container>
    <footer>

    </footer>
  </div>
  )}          
}

ReactDOM.render(<Application />, document.getElementById('root'));