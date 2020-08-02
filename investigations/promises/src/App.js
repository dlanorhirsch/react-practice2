import React from "react";
import './styles.css';
import Example1 from "./Example1"
import Example2 from "./Example2"
import Example3 from "./Example3"

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
        Rending props is generally used and is often preferred over higher order components. It has several advantages...
      </p>
      <div>Include code example</div>
{/* ------------------------------------ */}
      
      <hr></hr>
      <h4>
        A. Passing a string as props: 
      </h4>
      <div className="examples"><Example1 name="Uncle George"/></div>
      <div>(Include code example)</div>
      <hr></hr>
{/* ------------------------------------ */}
      <h3>
        B. Passing an array as props: 
      </h3>
      <div className="examples">
        <Example1 name={["George", "Joe"]}/>
      </div>
        <div>(Due to the way an array is parsed in React, the name George and Joe are combined in the render. Additional formatting is needed to change this.)</div>
        <div>(Include code example)</div>
      <hr></hr>
{/* ------------------------------------ */}
      <h3>
        C. Passing a string via a function as props:
      </h3>
      <div className="examples">
        <Example2 render={
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
        <Example3 render={
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
