import React from "react";

function AppJsArrayCodeEx() {
    return (
      <div>
        <div className="header-tab">App.js (parent)</div>
        <div className = "codeExs">
          <div>{`import React from "react";`}</div>
          <div>{`import ArrayChildCode from "./ArrayChildCode";`}</div>
          <br></br>
          <div>{`function App(){`}</div>
          <div style={{marginLeft: "1em"}}>{`return (`}</div>
          <div style={{marginLeft: "2em"}}>{`<h3>B. Passing an array as   props:</h3>`}</div>
          <div style={{marginLeft: "2em"}}>{`<div className="examples">`} </div>
          <div style={{marginLeft: "3em"}}>{`<ArrayChildCode name = { ["George", "Joe"]} />`}</div>
          <div style={{marginLeft: "2em"}}>{`</div>`}</div>
          <div style={{marginLeft: "2em"}}>{`<p>`}</div>
          <div style={{marginLeft: "3em"}}>{`(Due to the way an array is  parsed in React, the name George and Joe`}</div>
          <div style={{marginLeft: "3em"}}>{`are combined in the render.  Additional formatting is needed to change this.)`}</div>
          <div style={{marginLeft: "2em"}}>{`</p>`}</div>
          <div style={{marginLeft: "1em"}}>{`)`}</div>
          <div>{`}`}</div>
          <br></br>

          <div>{`export default App`}</div>
        </div>
      </div>
    )
}

export default AppJsArrayCodeEx