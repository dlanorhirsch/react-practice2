import React from 'react';
import "./styles.css"

function ArrayAndStringCodeEx() {
  return (
      <div className = "codeExs">
        <div><strong>{`ArrayCodeEx.js (child):`}</strong></div>
        <hr></hr>
        <div>{`import React from "./react;`}</div>
        <br></br>
        <div>{`function Example1(props) {`}</div>
        <div style={{marginLeft: "1em"}}>{`return`}
        <div style={{marginLeft: "2em"}}>{`<h4>Hi {props.name}</h4>`}</div>
        </div>
        <div>{`}`}</div>

        <div>{`export default Example1`}</div>
      </div>
    
  )
}

export default ArrayAndStringCodeEx