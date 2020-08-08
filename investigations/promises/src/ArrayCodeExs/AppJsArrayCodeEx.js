import React from "react";;

function AppJsArrayCodeEx() {
    return (
      <div className = "codeExs">
        <div><strong>{`App.js (parent):`}</strong></div>
        <hr></hr>
        <div>{`import React from "./react;`}</div>
        <div>{`import ArrayChildCodeEx from "./ArrayChildCodeEx";`}</div>
        <br></br>
        <div>{`function App(){`}</div>
        <div style={{marginLeft: "1em"}}>{`return (`}</div>
        <div style={{marginLeft: "2em"}}>{`<h3>B. Passing an array as props:</h3>`}</div>
        <div style={{marginLeft: "3em"}}>{`<div className="examples">`}</div>
        <div style={{marginLeft: "4em"}}>{`<ArrayChildCode name = {["George", "Joe"]} />`}</div>
        <div style={{marginLeft: "3em"}}>{`</div>`}</div>
        <br></br>
        <div style={{marginLeft: "3em"}}>{`<p>`}</div>
        <div style={{marginLeft: "4em"}}>{`(Due to the way an array is parsed in React, the name George and Joe`}</div>
        <div style={{marginLeft: "4em"}}>{`are combined in the render. Additional formatting is needed to change this.)`}</div>
        <div style={{marginLeft: "3em"}}>{`</p>`}</div>
        <br></br>
        
        <div>{`export default App`}</div>
      </div>
    )
}

export default AppJsArrayCodeEx