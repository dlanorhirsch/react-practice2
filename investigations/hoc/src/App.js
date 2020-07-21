import React from 'react';
import './styles.css';
import {withFavoriteNumber} from "./withFavoriteNumber"

import PCP from "./parent-child-props"

// import Appetizer2a from "./Appetizers2a"
// import MainCourse2a from "./MainCourse2a"

import Appetizer2b from "./Appetizers2b"
import MainCourse2b from "./MainCourse2b"

import Appetizer2aCodeEx from "./Appetizer2aCodeEx"
import Appetizer2bCodeEx from "./Appetizer2bCodeEx"




function App(props) { 
  // console.log(props)
  return (
  <div>
  
  <div className="investigation-doc">
    <h1>Investigation:</h1>
    <h2>Higher Order Components</h2>
    <p><strong>Definition:</strong> A function that takes a component as its first argument and returns a new component that wraps the given component,  providing it extra capabilities. Higher order components (HOCs) generally pass properties(props) from one component to another. The code for the following 3 elements are based on a single component passing props. It is helpful to understand how props are passed prior to writing higher HOCs.</p>
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
      <p>This is a simple example that demonstrates the code structure and syntax of a higher order component.</p>
      <h3 style={{color: "#0069d9", marginLeft: "2.5em"}}>My favorite number is: {props.favoriteNumber} </h3>

      <p className="codeEx1"> 
        <div>{`function withFavoriteNumber(component){`}</div>
        <div style={{marginLeft: "1rem"}}>{`const C = component;`}</div>
        <div style={{marginLeft: "2rem"}}>{`return function(props){`}</div>
        <div style={{marginLeft: "3rem"}}>{`return <C favoriteNumber={42} {...props}/>}`}</div>
      </p>
      
      <hr></hr>
      <h3>Ex. 2a: Class components with toggler function, Appetizer2a.js, MainCourse2a.js</h3>
      <p>This example represents a class component with a toggle button that updates state which in turn hides or shows the appetizer and main course menu items. Both Appetizer2a.js and MainCourse2a.js have their own toggle functions. The example below is the code for Appetizer2a.js. The code for MainCourse2a.js is essentially the same.</p>
      
      <Appetizer2aCodeEx />
      {/* Appetizer2aCodeEx controls the button and display for this file. */}

      <hr></hr>
      <h3>Ex. 2b: Class components with higer-order components, Appetizers2b.js, MainCourse2b.js, </h3>
      <p>In this example, the code in both components ending with "...2a.js" were re-written as a higher order components. Doing so allows for the re-use of the code which provides toggle functionality. A new component called withToggler.js replaces the toggler function in both ...2a.js components, thereby decreasing the amount of code needed. </p>
      <p>A seperate withToggler.js file is created, and is shared by the other two files via HOC's. This shortens and symplifies the code, and is a common pattern found in React. The results of the code follows:</p>
      
      <Appetizer2b />
      {/* Appetizer2b controls the button and display for "Show Appetizers" */}

      <MainCourse2b />
      {/* MainCourse2b controls the button and display for "Show MainCourse" */} 

      <Appetizer2bCodeEx />
      {/* Appetizer2bCodeEx controls the button and display for this file. */}
    </div>
    </div>
  );
}
const favNumbApp = withFavoriteNumber(App)
export default favNumbApp
// can also be written as:

// export default withFavoriteNumber(App)


  


//Rather than exporting App, we export the component that gets returned when withFavoriteMumber is called
