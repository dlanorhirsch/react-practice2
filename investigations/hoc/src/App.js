import React from 'react';
import './styles.css';
import {withFavoriteNumber} from "./withFavoriteNumber";

import PCP from "./parent-child-props";

// import Appetizer2a from "./Appetizers2a";
// import MainCourse2a from "./MainCourse2a";

import Appetizer2b from "./Appetizers2b";
import MainCourse2b from "./MainCourse2b";

import Appetizer2aCodeEx from "./Appetizers2aCodeEx";
import Appetizer2bCodeEx from "./Appetizers2bCodeEx";
// import WithTogglerCodeEx from "./WithTogglerCodeEx";

import Practice from "./Practice"

function App(props) { 
  // console.log(props)
  return (
  <div>
  
  <div className="investigation-doc">
    <h1>Investigation:</h1>
    <h2>Higher Order Components</h2>
    <p>
      <strong>Definition:</strong> A function that takes a component as 
      its first argument and returns a new component that wraps the given 
      component, providing it extra capabilities.
    </p> 
    <p>
      Higher order components (HOCs) generally pass properties (props) 
      from one component to another. The code for the following 3 elements 
      are based on a single component passing props. It is helpful 
      to understand how props are passed prior to writing HOCs.
    </p>
    <hr></hr>
    <div style={{marginBottom: "1.5em"}}>
      <h3>Passing props from parent to child component.</h3>
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

      <h2>Higher Order Component: </h2>
      
      <h3>Ex. 1: Function component, withFavoriteNumber.js</h3>
      <p>
        This is a simple example that demonstrates the code structure and 
        syntax of a higher order component.
      </p>
      <h3 style={{color: "#0069d9", marginLeft: "2.5em"}}>
        My favorite number is: {props.favoriteNumber} 
      </h3>

      <p className="codeEx1">
        <div>{`function withFavoriteNumber(component){`}</div>
        <div style={{marginLeft: "1rem"}}>{`const C = component;`}</div>
        <div style={{marginLeft: "2rem"}}>{`return function(props){`}</div>
        <div style={{marginLeft: "3rem"}}>
          {`return <C favoriteNumber={42} {...props}/>}`}
        </div>
      </p>
      
      <hr></hr>
      <h3>Exs. 2a & 2b: Class and Higher Order Components</h3>

      <p>
        These examples demonstrate two approaches to creating components
        with React that display and hide menu items as seen below.
      </p>
    
      <table className="namesTable">
        <tr>
          <th>Class comps.</th>
          <th>Class comps. w/HOC</th>
        </tr>
        <tr>
          <td>Appetizer2a.js</td>
          <td>Appetizer2b.js</td>
        </tr>
        <tr>
          <td>MainCourse2a.js</td>
          <td>MainCourse2b.js</td>
        </tr>
      </table>

      <Appetizer2b />
      {/* Appetizer2b controls the button and display for "Show " */}

      <MainCourse2b />
      {/* MainCourse2b controls the button and display for "Show MainCourse" */} 
      <h3>Ex. 2a:</h3>
      <p>
        The first example, Appetizer2a.js, is a class component with a 
        toggler function tied to a button via an event listener. When the
        button is clicked, state is updated, and the display is shown or 
        hidden depending on the value of state. Each file has its own toggle
        function.
      </p>

      <p className="note">
        (Note: This example below is for the file 
        Appetizer2a.js. The code for MainCourse2a.js is essentially the same
        and therefore not displayed.
      </p>
      
      <Appetizer2aCodeEx />
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
   
      <Appetizer2bCodeEx />
      {/* Appetizer2bCodeEx controls the button and display for this 
          //example file. */}

      {/* <WithTogglerCodeEx /> */}
      {/* withTogglerCodeEx controls the button and display for this example file */}

      {/* See note in WithTogglerCodeEx regarding this component, line 27. */}
      <hr></hr>
      <Practice />
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
