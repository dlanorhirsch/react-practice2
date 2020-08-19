
import React from 'react';
import './styles.css';
import DisplayFavNum from "./DisplayFavNum";
import FavNumbCodeEx from "./FavNumbCodeEx";
import Appetizers1 from "./Appetizers1";
import MainCourses1 from "./MainCourses1";
import MainCourses1CodeEx from "./MainCourses1CodeEx";
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
    <p>Most of the code examples below are the components that are imported into 
      App.js and can be see <a 
        className="embedded-anchor" 
        href="https://github.com/dlanorhirsch/react-examples/blob/master/investigations/hoc/src/App.js" 
        target="_blank" 
        rel="noopener noreferrer"> 
        here.
      </a>
    </p>
    
    {/* <hr></hr> */}
      {/* <h2>Higher Order Component </h2> */}
      
      <h2>Functional HOC</h2>
      <p>
        This example demonstrates the code structure and syntax of a higher order
         component. The example files are withFavoriteNumber.js and DisplayFavNumb.js.
      </p>
      <p>This component displays:</p>
      <h3 className="example-styling">
      <DisplayFavNum />
      </h3>
      <br></br>
      <FavNumbCodeEx />
         
 

      <h2>Class Component vs Class Component w/HOC</h2>
      <p>
        The examples below demonstrate two approaches to creating components in 
        React that render the same output, displaying and hiding menu items 
        as seen here. 
      </p>
      <h3>
        Class Components: 
      </h3>
      <p>
        The first examples, Appetizers1.js and MainCourses1.js are class based components
        that contain a toggle function which relies on the value of state
        to display or hide menu items in each category. The toggler function 
        is tied to a button via an on-click event listener. When the button is clicked,
        state is updated, and the display is shown or hidden depending on the value of
        state. Each file has its own toggle function. Addtional information on <a 
          className="embedded-anchor" 
          href="https://reactjs.org/docs/react-component.html" 
          target="_blank" 
          rel="noopener noreferrer">Class Components
        </a> can be found in the React documentation. 
      </p>
      <p>
        <a className="embedded-anchor" 
          href="https://github.com/dlanorhirsch/react-examplesblob/master/investigations/hoc/src/Appetizers1.js" 
          target="_blank" 
          rel="noopener noreferrer">
          Appetizers1.js
        </a> and,
        <a className="embedded-anchor"
          href="https://github.com/dlanorhirsch/react-examples/ blob/master/investigations/hoc/src/Appetizers2.js"
          target="_blank"
          rel="noopener noreferrer">
          MainCourses1.js
        </a> (class components) render the following: 
      </p>

        <Appetizers1 />
        <Appetizers1CodeEx />
        <MainCourses1CodeEx />
      {/* <p>MainCourse1.js has the file structure, only the rended elements have
         been changed.
      </p> */}
    
      <h3>Class Components w/HOC</h3>
      <p>          
        The files Appetizers2.js and MainCourses2.js are class components
         that use a HOC to manage state and the toggle functionality. Removing 
         the toggle() function from Appetizers1.js and MainCourses1.js simplifies
         the code. A separate HOC function, 
         <code style={{fontSize: ".9em"}}> {`<WithToggler />`} </code> is accessed
          by both Appetizers2.js and 
          MainCourses2.js components. 
      </p>
      <p>
        <a className="embedded-anchor" 
          href="https://github.com/dlanorhirsch/react-examples/blob/master/investigations/hoc/src/Appetizers2.js" 
          target="_blank" 
          rel="noopener noreferrer">
          Appetizers2.js
        </a> and,
        <a className="embedded-anchor"
          href="https://github.com/dlanorhirsch/react-examples/blob/master/investigations/hoc/src/MainCourses2.js"
          target="_blank"
          rel="noopener noreferrer">
          MainCourses2.js
        </a> (class components) render the following: 
      </p>
    
      {/* Appetizer1 controls the button and display for "Show " */}
      <MainCourses1 />
      {/* MainCourse1 controls the button and display for "Show MainCourse" */} 
      
      <br></br>
      {/* Appetizer1CodeEx.js controls the button and display for this file. */}

      {/* <hr></hr> */}
      <h3>
      Class Components with HOC: Appetizers2.js,
         MainCourses2.js
      </h3>

      <p>
        In second example, Appetizers2.js the code from the class components 
        were re-written as a higher order component. The toggler function 
        was removed and a new toggler component was created. Both Appetizer2.js 
        and MainCourses2.js assess the WithToggler.js HOC. State has also been 
        removed from these files and placed within the new toggler component. 
        This shortens and symplifies the code, and is a common pattern found 
        in React.
      </p>
      <Appetizers2CodeEx />
    
      {/* Appetizer2CodeEx.js controls the button and display for this 
          //example file. */}

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

