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
          <img src="https://user-images.githubusercontent.com/39444378/133944046-53b061c4-c51a-4568-aaea-1055816983eb.png"
               alt="React Icon"
               className="logo"
               style={{width: "10%",
                      height: "auto",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      padding: "2em 0 1em 0"}}>
          </img>
        </header>
        
    <Container>
    <Row>
      <h1 style={{textAlign: "center", marginBottom: "1.5em"}}>React Examples</h1>
        <p>This is an exploratory investigation to learn React. Numerous components were created with the intention of using the knowledge gained and applying it to a related project <a href="https://hirschro.study-groups.org/color-charts/public/">Color Charts</a>. The two investigations form the basis of a React application under development involving aspects of color. Additional investigations may be developed in an effort to settle on the most appropriate frameworks for the project. In the spirit of sharing, it is hoped that others beginning their journey to learn web development might benefit from these investigations. The code for all of the following examples is available here: <a href="https://github.com/hirschro/react-examples/tree/master/src">React Examples/src directory</a>
        </p>
      </Row>
      <hr></hr>
      <Container>
        <Row>
          <h3>Simple  Counter:</h3>
          <p>This counter, aquired from <a href="https://www.freecodecamp.org">Free Code Camp</a> (an excellent resource for learning web development), is simple and easy to implement. It can be developed further for more complex applications. This counter is based on their tutorial available <a href="https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-write-a-simple-counter/301425">here</a>.
          </p>
          <Counter/>
        </Row>
      </Container>
      <hr></hr>
      <Container>
        <Row>
          <h3>Render a Simple List:</h3>
            <p>
            The components one can create with React are limitless, from simple to complex. This example renders a simple list. The code is available at the link in the opening paragraph.
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
            A more complex challenge than rendering simple lists is working with arrays. Though more complicated, some additional knowledge will go a long way. A helpful resource is available here: <a href="https://reactjs.org/docs/lists-and-keys.html">(React: Lists and Keys)</a>.
            <br></br>
            </p>
            <p>There is a bit more emphasis on styling in this example. This link provides general information about <a href="https://reactjs.org/docs/faq-styling.html">Styling and CSS in  React).</a>
            </p>

            <p>More specifically and for the example below, in-line JSX was utilized. To learn more about JSX, follow this link: <a href="https://reactjs.org/docs/introducing-jsx.html#:~:text=It%20is%20called%20JSX%2C%20and,JSX%20produces%20React%20%E2%80%9Celements%E2%80%9D.">Introducing JSX</a>.
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
            Rending forms in React is simple enough, however, like many frameworks, it requires updating and maintaining state. Follow this link to learn more about <a href="https://reactjs.org/docs/faq-state.html">Component State</a>.

      
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
            This investigation orininated with Nathan Sebhastian at Hackernoon.com <a href="https://hackernoon.com/hands-on-projects-to-learn-the-basics-of-react-3a06726514a8">(link)</a> It is well written and easy to follow. It is helpful for learning about and understanding this essential aspect of React. Follow this link to understand what it means to <a href="https://reactjs.org/docs/render-props.html">Render Props</a>.
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
            This example was also taken from hackernoon.com (link above). This investigation involves the use of React fragments <a href="https://reactjs.org/docs/react-api.html#reactfragment">(see React Fragments)</a> This example is a bit more involved an warrants the effort to review and understand the code involved.
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
            There are a variety of methods for creating carousels (also known as sliders). The Bootstrap framework offers a carousel. There are numerous    npm  packages available as well. They range from very simple to complicated; the functionality and degree of responsiveness coincides with    code   complexity. Reading the documentation assosciated with the package will provide some information that is helpful when chosing the right   package   for you project.
            </p>
            <p>
            Not all packages are created equal. The initial package used for this example had functionality that including a continuous loop which could    be   stopped at any point. However, despite its claim to be responsive, there were problems with it rendering properly on mobile devices    (thumbs  extended beyond the page).
            </p>
            <p>
            The next package, the one used for this example had less functionality, though its functionality was efficient and unproblematic. One could optionally add functionality if needed.
            </p>
            <p>
            The npm package can be found here: <a href="https://www.npmjs.com/package/pure-react-carousel">(npm pure-react-carousel).</a>  It took minutes to put together, including adjustments to the CSS. Thanks to the folks who created it!
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
            This investigation is an exploration/comparison in methodology, old and new. It involves the creation of forms by using technology associated with each.
            </p>
            <p>
            The forms below are identical in appearance.  However, the first example uses <a href="https://reactjs.org/docs/hooks- intro.html">React Hooks</a>, while the second uses React <a href="https://reactjs.org/docs/state-and-lifecycle.html">State and Lifecycle</a> methods. 
            </p>
          <TodoApp/>
          <TodoList/>
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
          The code mounts a group of user data cards to the DOM. The API data used came from typicode's json placeholder API on GitHub: <a href="https://jsonplaceholder.typicode.com/users">https://jsonplaceholder.typicode.com/users</a>.
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