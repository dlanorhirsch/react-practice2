import React from 'react';

function AppJsFunctionCodeEx() {
  return (
    <div>
      <div className="header-tab">App.js (parent)</div>

<pre className="codeExs">{`
import React from 'react';
import FunctionChildCode from './FunctionChildCode';

function App() {
  return (
    <h3>
      Passing a string via a function as props
    </h3>
    <p>
      Rendering functions as props is generally used and is often
      the preferred method over higher order components (HOC's).
    </p>
    <div>This example renders:</div>
    <div className = "examples">
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
  )
}

export default App

`}</pre>
</div>
  )
}

export default AppJsFunctionCodeEx

