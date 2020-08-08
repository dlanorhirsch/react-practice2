import React from "react";
import './styles.css';
import AppJsArrayCodeEx from "./ArrayCodeExs/AppJsArrayCodeEx";
import ArrayChildCode from "./ArrayCodeExs/ArrayChildCode";
import ArrayChildCodeEx from "./ArrayCodeExs/ArrayChildCodeEx";

import AppJsStringCodeEx from "./StringCodeExs/AppJsStringCodeEx";
import StringChildCode from "./StringCodeExs/StringChildCode";
import StringChildCodeEx from "./StringCodeExs/StringChildCodeEx";

import Example3 from "./Example3";
import Example4 from "./Example4";



function App() {
  return (
    <div>
    <h1 className="investigation-doc">Investigation:</h1>
      <h2>
        Rending Props
      </h2>
      <h3>
       Ex. 3: This example is an excercise in passing various data types as props within components.
      </h3>
      <p>
        Rending props is generally used and is often preferred over higher order components. 
      </p>
      <div>Include code example</div>
{/* ------------------------------------ */}

{/* NOTE: A and B below use the same child file, Examples1and2.js */}

      <hr></hr>
      <h4>
        A. Passing a string as props: 
      </h4>
      <div className="examples"><StringChildCode name="Uncle George"/></div>
      <AppJsStringCodeEx />
      <br></br>
      <StringChildCodeEx />
      <hr></hr>
{/* ------------------------------------ */}
      <h3>
        B. Passing an array as props: 
      </h3>
      <div className="examples">
        <ArrayChildCode name={["George", "Joe"]}/>
      </div>
        <div>(Due to the way an array is parsed in React, the name George and Joe are combined in the render. Additional formatting is needed to change this.)</div>
      <br></br>
      <AppJsArrayCodeEx />
      <br></br>
      <ArrayChildCodeEx />
      <hr></hr>
{/* ------------------------------------ */}
      <h3>
        C. Passing a string via a function as props:
      </h3>
      <div className="examples">
        <Example3 render={
          function(name) {
            return <h4>Hello there, {name}</h4>
          }
        }/>
      </div>
      <div>(Include code example)</div>
      <hr></hr>
{/* ------------------------------------ */}
      <h3>D. Passing a boolean via a function as props:</h3>
      <div className="examples">
        <Example4 render={
          function(isDayTime) {
            return <h4>{isDayTime ? "Good day" : "Good evening"}, Sally!</h4>
          }
        }/>
      </div>  
      <div>(Include code example)</div> 
    </div>   
  )
}

export default App
