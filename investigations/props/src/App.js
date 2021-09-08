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
      <p>
        {/* <h2>Props</h2> */}
        <strong>Passing Props:</strong> This investigation is an excercise in passing various data types as props 
        within components: <strong>strings</strong>, <strong>arrays</strong>,
        and <strong>functions</strong>. The two function examples pass a string
        and a boolean respectively. Note that all child files are rendered
        through one App.js file in the 
          <a 
            href="https://github.com/dlanorhirsch/react-examples/blob/master/investigations/props/src/App.js" 
            target="_blank" 
            rel="noopener noreferrer"> react-examples/investigations/render-props/App.js
          </a>
      </p>
      <p>For the purposes of this investigation, each example below shows
       how the App.js file would be written as a stand alone component in App.js.
        To see the entire App.js file follow the link above. The links below connect to the gitHub repository for this investigation.
      </p>
     {/* -------------------------------------------------------------------- */}

      <h2>
        A string as props
      </h2>
      <p>This example renders:</p>
      <div>
        
        <div className="examples">
          <StringChildCode name="Uncle Jonathan!"/>
        </div>
      </div>
      <AppJsStringCodeEx />
      <StringChildCodeEx />
      <a className="a-codeEx-link" href="https://github.com/dlanorhirsch/react-examples/blob/master/investigations/props/src/StringCodeEx/StringChildCode.js"
      target="_blank"
      rel="noopener noreferrer">
      StringChildCode.js</a>
      <br></br>
      <br></br>
      <br></br>
{/* -------------------------------------------------------------------- */}
    <h3> 
        An array as props
      </h3>
      <p>This example renders:</p>
      <div className="examples">
        <ArrayChildCode names={["Larry", "Curly", "Mo"]} />
      </div>
      <AppJsArrayCodeEx />
      <ArrayChildCodeEx /><a className="a-codeEx-link" 
        href="https://github.com/dlanorhirsch/react-examples/blob/master/investigations/props/src/ArrayCodeExs/ArrayChildCode.js"
        target="_blank"
        rel="noopener noreferrer">
        ArrayChildCode.js</a>
      <br></br>
      <br></br>
{/* --------------------------------------------------------------------- */}
      <h2>
        Passing functions as props(2 examples)
      </h2>
      <h3>
        1. A string (via a function) as props
      </h3>
      <p>
        Rending functions as props is generally used and is often a preferred
         method to higher order components (HOC's). 
      </p>
      <p>This example renders:</p>
      <div className="examples"> 
        <FunctionChildCode render={
          function(name) {
            return <h4>Hello there, {name}</h4>
          }
        }/></div>
        <AppJsFunctionCodeEx />
        <FunctionChildCodeEx />
        <a className="a-codeEx-link" 
          href="https://github.com/dlanorhirsch/react-examples/blob/master/investigations/props/src/FunctionCodeEx/FunctionChildCode.js"
        target="_blank"
        rel="noopener noreferrer">
        FunctionChildCode.js</a>
      <br></br>
      <br></br>
      <br>

      </br>
{/* ---------------------------------------------------------------------- */}
      <h3>
        2. A boolean (via a function) as props
      </h3>
      <p>This example renders:</p>
      <div className="examples">
        <BooleanChildCode render={
          function(isDayTime) {
            return <h4>{isDayTime ? "Good day" : "Good evening"}, Sally!</h4>
          }
        }/></div>
        <AppJsBooleanCodeEx />
        <BooleanChildCodeEx />
        <a className="a-codeEx-link" 
          href="https://github.com/dlanorhirsch/react-examples/blob/master/investigations/props/src/BooleanCodeEx/BooleanChildCode.js"
        target="_blank"
        rel="noopener noreferrer">
        BooleanChildCode.js</a>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>  

  )
}

export default App
