import React from 'react';
import './styles.css';
import {withFavoriteNumber} from "./withFavoriteNumber";
import PCP from "./parent-child-props";

import Appetizers1 from "./Appetizers1";
import Appetizers1CodeEx from "./Appetizers1CodeEx";
// import MainCourse2a from "./MainCourse2a";

// import Appetizer2b from "./Appetizers2";
import MainCourse2b from "./MainCourse2b";

import Appetizer2aCodeEx from "./Appetizers2CodeEx";
import Appetizer2bCodeEx from "./Appetizers2bCodeEx";
// import WithTogglerCodeEx from "./WithTogglerCodeEx";

import WFavNumbCodeEx from "./WFavNumbCodeEx";

// --------------------------------------------------//

function App(props) { 
  // console.log(props)
  return (
  <div>
  
  <div className="investigation-doc">
    <h1>Investigation:</h1>
    <h2>Higher Order Components</h2>
    <p><strong>Definition:</strong> A higher order component (HOC) is a function that takes a component as a parameter and returns a new component wrapping the given component and "supercharging" it by giving it some extra abilities</p>
    <p>
      HOCs generally pass properties (props) from one component to another. The code for the following 3 examples are based on a single component passing props. It is helpful to understand how props are passed prior to writing HOCs. For more information on passing props, see Investigations/Props.
    </p>
    
    <hr></hr>
    <div style={{marginBottom: "1.5em"}}>
      <h3>Passing props from parent to child component.</h3>
      <div>This component displays:</div>
        <PCP>
         Hello World
        </PCP>
        <PCP>
         ...and everyone else!
        </PCP>
        <PCP>
          Is there anyone else out there?
        </PCP>
    </div>
      <hr></hr>

      <h2>Higher Order Component </h2>
      
      <h3>Functional HOC component:</h3>
      <p>
        This is a simple example that demonstrates the code structure and syntax of a higher order component.
      </p>
      <div>This component displays:</div>
      <h3 className="example-styling">
        My favorite number is: {props.favoriteNumber} 
      </h3>
      <br></br>
      <WFavNumbCodeEx />
     
      <hr></hr>
      <h3>Function, Class and Higher Order Components</h3>
      <p>
        The examples below demonstrate two approaches to creating components in React that render the same output, displaying and hiding menu items as seen below. 
      </p>
      <p>
        The files Appetizers1.js and MainCourses1.js are     class based components that contain a toggle function which relies on the value of state to display or hide the menu items.
      </p>
      <p>          
        The files Appetizers2.js and MainCourses2.js are functional components. Changing the component type (class to function) and removing the toggle() function simplifies the code. A separate HOC function,{`<WithToggler />`} is accessed by both function components. 
      </p>
      <div>Addtional information on <a href="https://reactjs.org/docs/components-and-props.html">Function and Class Components</a> can be found in the React documentation.</div>
      
      <table id="component-table">
        <tr>
          <th>Class Components</th>
          <th>Function Components w/HOC</th>
        </tr>
        <tr>
          <td>Appetizer1.js</td>
          <td>Appetizer2.js</td>
        </tr>
        <tr>
          <td>MainCourse2.js</td>
          <td>MainCourse2.js</td>
        </tr>
      </table>
      <Appetizers1 />
      
      {/* Appetizer2b controls the button and display for "Show " */}

      <MainCourse2b />
      {/* MainCourse2b controls the button and display for "Show MainCourse" */} 
      <h3>Class Components</h3>
      <p>
        The first example, Appetizer1.js, is a class component with a 
        toggler function tied to a button via an on-click event listener. When the
        button is clicked, state is updated, and the display is shown or 
        hidden depending on the value of state. Each file has its own toggle
        function. 
        </p>
        <p>MainCourse1.js has the file structure, only the rended elements have been changed.
      </p>
      
      <Appetizers1CodeEx />
      {/* Appetizer2aCodeEx controls the button and display for this file. */}

      <hr></hr>
      <h3>
        Ex. 2b: Class components as higher-order components, 2b.js,
         MainCourse2b.js
      </h3>

      <p>
        In this example, the code in 2a was re-written as a higher order 
        component. The toggler function removed. A new toggler component
        that is accessed by both appetizer and main course components was
        then created and shared with both files via HOCs. State has been 
        removed from the Appetizer2a component and placed within the 
        withToggler HOC, where state is now maintained. This shortens and
        symplifies the code, and is a common pattern found in React.
      </p>
   
    
      {/* Appetizer2bCodeEx controls the button and display for this 
          //example file. */}

      {/* <WithTogglerCodeEx /> */}
      {/* withTogglerCodeEx controls the button and display for this example file */}

      {/* See note in WithTogglerCodeEx regarding this component, line 27. */}
      <hr></hr>
      
    </div>
    </div>
  );
}
const favNumbApp = withFavoriteNumber(App)
export default favNumbApp

// can also be written as:
// export default withFavoriteNumber(App)


  


//Rather than exporting App, we export the component that gets 
//returned when withFavoriteMumber is called
