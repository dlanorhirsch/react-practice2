import React from "react";;

function AppJsStringCodeEx() {
    return (
      <div className = "codeExs">
        <div><strong>{`App.js (parent):`}</strong></div>
        <hr></hr>
        <div>{`import React from "./react;`}</div>
        <div>{`import AppJsStringCodeEx from "./AppJsStringCodeEx";`}</div>
        <br></br>
        <div>{`function App() {`}</div>
        <div style={{marginLeft: "1em"}}>{`return (`}</div>
        <div style={{marginLeft: "1em"}}>{`<h4>A. Passing a string as props: </h4>`}</div>
        <div style={{marginLeft: "2em"}}>{`<div className="examples">`}</div>
        <div style={{marginLeft: "3em"}}>{`<StringChildCode name = "Uncle George" />`}</div>
        <div style={{marginLeft: "2em"}}>{`<div>`}</div>
        <div style={{marginLeft: "1em"}}>{`)`}</div>
        <div>{`}`}</div>
        <br></br>
        
        <div>{`export default App`}</div>
      </div>
    )
}

export default AppJsStringCodeEx