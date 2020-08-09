import React from "react";
import './styles.css';
import AppJsArrayCodeEx from "./ArrayCodeExs/AppJsArrayCodeEx";
import ArrayChildCode from "./ArrayCodeExs/ArrayChildCode";
import ArrayChildCodeEx from "./ArrayCodeExs/ArrayChildCodeEx";

import AppJsStringCodeEx from "./StringCodeExs/AppJsStringCodeEx";
import StringChildCode from "./StringCodeExs/StringChildCode";
import StringChildCodeEx from "./StringCodeExs/StringChildCodeEx";

import AppJsFunctionCodeEx from "./FunctionCodeEx/AppJsFunctionCodeEx";
import FunctionChildCode from "./FunctionCodeEx/FunctionChildCode";
import FunctionChildCodeEx from "./FunctionCodeEx/FunctionChildCodeEx";

import AppJsBooleanCodeEx from "./BooleanCodeEx/AppJsBooleanCodeEx";
import BooleanChildCode from "./BooleanCodeEx/BooleanChildCode";
import BooleanChildCodeEx from "./BooleanCodeEx/BooleanChildCodeEx";

// import Example3 from "./Example3";

function App() {
  return (
    <div>
    <h1 className="investigation-doc">Investigation:</h1>
      <h2>
        Rending Props
      </h2>
      <p>
      This investigation is an excercise in passing various data types as props within components: strings, arrays, booleans and functions. Note that all child files are rendered through one App.js in the react-examples/investigations/render-props repository.
      </p>
      <p>However, for the purposes of this investigation, each example below shows how the App.js file would be written as a stand alone component in App.js. To see the entire App.js file that renders all child components, see <a href="https://github.com/dlanorhirsch/react-examples/blob/master/investigations/promises/src/App.js">react-examples/investigations/render-props/App.js</a>.
      </p>
     
{/* ------------------------------------ */}

      <hr></hr>
      <h3>
        <a href="https://github.com/dlanorhirsch/react-examples/tree/master/investigations/promises/src/StringCodeExs">A. Passing a string as props: </a>
      </h3>
      <div>This example renders:</div>
      <div className="examples"><StringChildCode name="Uncle George!"/></div>
      <AppJsStringCodeEx />
      <br></br>
      <StringChildCodeEx />
      <hr></hr>
{/* ------------------------------------ */}
      <h3>
        B. Passing an array as props: 
      </h3>
      <div>This example renders:</div>
      <div className="examples">
        <ArrayChildCode name={["George", "Joe"]}/>
      </div>
        <div style={{fontStyle:"italic", fontSize:".8em"}}>(Due to the way an array is parsed in React, the name George and Joe are combined in the render. Additional formatting is needed to change this.)</div>
      <br></br>
      <AppJsArrayCodeEx />
      <br></br>
      <ArrayChildCodeEx />
      <hr></hr>
{/* ------------------------------------ */}
      <h3>
        C. Passing a string via a function as props:
      </h3>
      <p>
        Rending functions as props is generally used and is often a preferred method to higher order components (HOC's). 
      </p>
      <div>This example renders:</div>
      <div className="examples"> 
        <FunctionChildCode render={
          function(name) {
            return <h4>Hello there, {name}</h4>
          }
        }/>
        <AppJsFunctionCodeEx />
        <br></br>
        <FunctionChildCodeEx />
      </div>

      <hr></hr>
{/* ------------------------------------ */}
      <h3>D. Passing a boolean via a function as props:</h3>
      <div>This example renders:</div>
      <div className="examples">
            <BooleanChildCode render={
          function(isDayTime) {
            return <h4>{isDayTime ? "Good day" : "Good evening"}, Sally!</h4>
          }
        }/>
        <AppJsBooleanCodeEx />
        <br></br>
        <BooleanChildCodeEx />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>  
    </div>   
  )
}

export default App
