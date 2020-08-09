import React from 'react';

function AppJsFunctionCodeEx() {
  return (
    <div>
      <div className="header-tab">App.js (parent)</div>
      <div className="codeExs">
        <div>{`import React from 'react:`}</div>
        <br></br>
        <div>{`function App() {`}</div>
        <div style={{marginLeft:"1em"}}>{`return (`}</div>
        <div style={{marginLeft:"2em"}}>{`<h3>`}</div>
        <div style={{marginLeft:"3em"}}>{`C. Passing a string via a function as props:`}</div>
        <div style={{marginLeft:"2em"}}>{`</h3>`}</div>
        <div style={{marginLeft:"2em"}}>{`<p>`}</div>
        <div style={{marginLeft:"3em"}}>{`Rending functions as props is generally used and`}</div>
        <div style={{marginLeft:"3em"}}>{`is often preferred method to higher order components. `}</div>
        <div style={{marginLeft:"2em"}}>{`</p>`}</div>
        <div style={{marginLeft:"2em"}}>{`<div className="examples">`}</div>
        <div style={{marginLeft:"3em"}}>{`<FunctionChildCode render={`}</div>
        <div style={{marginLeft:"4em"}}>{`function(name) {`}</div>
        <div style={{marginLeft:"5em"}}>{`return <h4>Hello there, {name}</h4>`}</div>
        <div style={{marginLeft:"4em"}}>{`}`}</div>
        <div style={{marginLeft:"3em"}}>{`}/>`}</div>
        <div style={{marginLeft:"3em"}}>{`<AppJsFunctionCodeEx />`}</div>
        <div style={{marginLeft:"3em"}}>{`<br></br>`}</div>
        <div style={{marginLeft:"3em"}}>{`<FunctionChildCodeEx />`}</div>
        <div style={{marginLeft:"2em"}}>{`</div>`}</div>
        <div style={{marginLeft:"1em"}}>{`)`}</div>
        <div>{`}`}</div>
        <br></br>
        <div>{`export default App`}</div>
      </div>
    </div>
  )
}

export default AppJsFunctionCodeEx

