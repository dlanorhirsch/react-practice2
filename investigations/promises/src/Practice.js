import React from 'react';
import Example from "./Example"

// Practice with render() props

function Practice() {
    return (
        <div>
        <h3>Ex. 3: This example is an excercise in passing various data types as props within components.</h3>
        <h4>
          A string: <Example name="Uncle George"/>
        </h4>
        <hr></hr>
        <h4>
          An array: <Example name={["George", "Joe"]}/>
          <div>(React combines array elements.)</div>
          <hr></hr>
        </h4>
        <h4>
          Functions: 
        </h4>
          
          
        </div>
    )
}

export default Practice