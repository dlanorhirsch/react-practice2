import React from "react";
import './styles.css';
import AppJsArrayCodeEx from "./ArrayCodeExs/AppJsArrayCodeEx";
import ArrayChildCode from "./ArrayCodeExs/ArrayChildCode";
import ArrayChildCodeEx from "./ArrayCodeExs/ArrayChildCodeEx";

import AppJsStringCodeEx from "./StringCodeEx/AppJsStringCodeEx";
import StringChildCode from "./StringCodeEx/StringChildCode";
import StringChildCodeEx from "./StringCodeEx/StringChildCodeEx";

import AppJsFunctionCodeEx from "./FunctionCodeEx/AppJsFunctionCodeEx";
import FunctionChildCode from "./FunctionCodeEx/FunctionChildCode";
import FunctionChildCodeEx from "./FunctionCodeEx/FunctionChildCodeEx";

import AppJsBooleanCodeEx from "./BooleanCodeEx/AppJsBooleanCodeEx";
import BooleanChildCode from "./BooleanCodeEx/BooleanChildCode";
import BooleanChildCodeEx from "./BooleanCodeEx/BooleanChildCodeEx";

// -------------------------------------------------------------- //

function App() {
  return (
    <div>
    <h1 className="investigation-doc">Props Investigation</h1>
    <h2>Passing Props</h2>
      <p>
        {/* <h2>Props</h2> */}
        This investigation is an excercise in passing various data types as props 
        within components: <strong>strings</strong>, <strong>arrays</strong>,
        and <strong>functions</strong>. The two function examples pass a string
        and a boolean respectively. Note that all child files are rendered
        through one App.js file in the 
          <a 
            href="https://github.com/dlanorhirsch/react-examples/blob/master/investigations/props/src/App.js" 
            target="_blank" 
            rel="noopener noreferrer">
            react-examples/investigations/render-props/App.js
          </a>.
      </p>
      <p>However, for the purposes of this investigation, each example below shows
       how the App.js file would be written as a stand alone component in App.js.
        To see the entire App.js file follow the link above.
      </p>
     {/* -------------------------------------------------------------------- */}
      <h2>Passing a String and an Array as props</h2>
      <h3>
        A string as props
      </h3>
      <div>
        This example renders:
        <div className="examples">
          <StringChildCode name="Uncle Jonathan!"/>
        </div>
      </div>
      
      <AppJsStringCodeEx />
      <br></br>
      <StringChildCodeEx />
      <br></br>
      {/* <hr></hr> */}
{/* -------------------------------------------------------------------- */}
    <h3> 
        An array as props
      </h3>
      <div>This example renders:</div>
      <div className="examples">
        <ArrayChildCode names={["Larry", "Curly", "Mo"]} />
      </div>
      <AppJsArrayCodeEx />
      <br></br>
      <ArrayChildCodeEx />
      {/* <hr></hr> */}
{/* --------------------------------------------------------------------- */}
      <h3>
      <h2>Passing functions as props(2 examples)</h2>
        1. A string (via a function) as props
      </h3>
      <p>
        Rending functions as props is generally used and is often a preferred
         method to higher order components (HOC's). 
      </p>
      <div>This example renders:</div>
      <div className="examples"> 
        <FunctionChildCode render={
          function(name) {
            return <h4>Hello there, {name}</h4>
          }
        }/></div>
        <AppJsFunctionCodeEx />
        <br></br>
        <FunctionChildCodeEx />
      {/* <hr></hr> */}
{/* ---------------------------------------------------------------------- */}
      <h3>
        2. A boolean (via a function) as props
      </h3>
      <div>This example renders:</div>
      <div className="examples">
        <BooleanChildCode render={
          function(isDayTime) {
            return <h4>{isDayTime ? "Good day" : "Good evening"}, Sally!</h4>
          }
        }/></div>
        <AppJsBooleanCodeEx />
        <br></br>
        <BooleanChildCodeEx />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>  

  )
}

export default App
