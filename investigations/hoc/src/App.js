
import React from 'react';
import './styles.css';
import DisplayFavNum from "./DisplayFavNum";
import FavNumbCodeEx from "./FavNumbCodeEx";
import Appetizers1 from "./Appetizers1";
import MainCourses1 from "./MainCourses1";
import MainCourses1CodeEx from "./MainCourses1CodeEx";
import MainCourses2CodeEx from "./MainCourses2CodeEx"
import Appetizers1CodeEx from "./Appetizers1CodeEx";
import Appetizers2CodeEx from "./Appetizers2CodeEx";
import WithTogglerCodeEx from "./WithTogglerCodeEx";

// --------------------------------------------------//

function App(props) { 
  // console.log(props)
  return (
  <div>

  <div className="investigation-doc">
    <h1>Components and HOC Investigation</h1>
    {/* <h2>Higher Order Components</h2> */}
    <p><strong>Definition:</strong> A higher order component (HOC) is a function
     that takes a component as a parameter and returns a new component wrapping
      the given component and "supercharging" it by giving it some extra abilities.</p>
    <p>
      HOCs pass properties (props) from one component to another. The code for the
       following 3 examples are based on a single component passing props. It is 
       helpful to understand how props are passed prior to writing HOCs. For more 
       information on passing props, <a 
        className="embedded-anchor" 
        href="https://github.com/dlanorhirsch/react-examples/tree/master/investigations/props" 
        target="_blank" 
        rel="noopener noreferrer">
        see React-examples/Investigations/Props.
      </a>
    </p>
    <p>The compenents (and examples) below are imported into <a 
        className="embedded-anchor" 
        href="https://github.com/dlanorhirsch/react-examples/blob/master/investigations/hoc/src/App.js" 
        target="_blank" 
        rel="noopener noreferrer">App.js
      </a> where they are rendered to the DOM.
    </p>
      
      <h2>Functional HOC</h2>
      <p>
        This first example demonstrates the code structure and syntax of a higher order
         component. The components are withFavoriteNumber.js and DisplayFavNumb.js.
      </p>
      <p>These component displays:</p>
      <h3 className="example-styling">
      <DisplayFavNum />
      </h3>
      <br></br>
      <p>Links to the components are provided below along with examples of the code.
      </p>
      <FavNumbCodeEx />
       
      <h2>Class Component vs Class Component w/HOC</h2>
      <p>
        The following examples demonstrate two approaches to creating components in 
        React that render the same output; displaying and hiding menu items 
        as seen below. 
      </p>
      <h3>
        Class Components: 
      </h3>
      <p>
        The first examples, Appetizers1.js and MainCourses1.js are class based components
        that contain a toggle function which relies on the value of state
        to display or hide menu items in each category. The toggler() function 
        located within each component is tied to a button via an on-click event listener. 
        (See React docs, <a 
            className="embedded-anchor" 
            href="https://reactjs.org/docs/handling-events.html" 
            target="_blank"
            rel="noopener noreferrer">Handling events
          </a> for more information.) When the button is clicked,
        state is updated, and the display is shown or hidden depending on the value of
        state. Addtional information on <a 
          className="embedded-anchor" 
          href="https://reactjs.org/docs/react-component.html" 
          target="_blank" 
          rel="noopener noreferrer">Class Components
        </a> can also be found in the React docs. 
      </p>
      <p>
        <a className="embedded-anchor" 
          href="https://github.com/dlanorhirsch/react-examples/blob/master/investigations/hoc/src/Appetizers1.js" 
          target="_blank" 
          rel="noopener noreferrer">
          Appetizers1.js
        </a> and, 
        <a 
          className="embedded-anchor"
          href="https://github.com/dlanorhirsch/react-examples/blob/master/investigations/hoc/src/MainCourses1.js"
          target="_blank"
          rel="noopener noreferrer">MainCourses1.js
        </a> (class components) render the following: 
      </p>

        <Appetizers1 />
        <MainCourses1 />
        <p>To display the code for each class component, click below.</p>
        <Appetizers1CodeEx />
        <MainCourses1CodeEx />

        
      {/* <p>MainCourse1.js has the file structure, only the rended elements have
         been changed.
      </p> */}
    
      <h3>Class Components w/HOC</h3>
      <p>
        <a 
          className="embedded-anchor" 
          href="https://github.com/dlanorhirsch/react-examples/blob/master/investigations/hoc/src/Appetizers2.js"
          target="_blank"
          rel="noopener noreferrer">Appetizers2.js</a> and <a 
          className="embedded-anchor" 
          href="https://github.com/dlanorhirsch/react-examples/blob/master/investigations/hoc/src/MainCourses2.js"
          target="_blank"
          rel="noopener noreferrer">MainCourses2.js
        </a> render the same output as seen in the above  examples. However, these are class components
         that use a separate HOC to manage state and toggle functionality. Removing 
         the toggle() function from Appetizers1.js and MainCourses1.js simplifies
         the code. A separate HOC function, 
         <code style={{fontSize: ".9em"}}> {`<WithToggler />`} </code> was created and is accessed
          by both components. 
      </p>
      <p>
        To display the code for each class component and the HOC <a 
          className="embedded-anchor"
          href="https://github.com/dlanorhirsch/react-examples/blob/master/investigations/hoc/src/withToggler.js" 
          target="_blank" 
          rel="noopener noreferrer">WithToggler.js
          </a>, click below.</p>
      <Appetizers2CodeEx />
      <MainCourses2CodeEx />
    

      <WithTogglerCodeEx />
      {/* withTogglerCodeEx controls the button and display for this example file */}

      <hr></hr>
      <br></br>
      <br></br>
    </div>
    </div>
  );
}

export default App

// can also be written as:
// export default withFavoriteNumber(App)

