import React from 'react';

function StringChildCodeEx() {
  return (
      <div className = "codeExs">
        <div><strong>{`StringChildCodeEx.js (child):`}</strong></div>
        <hr></hr>
        <div>{`import React from "./react;`}</div>
        <br></br>
        <div>{`function StringChildCode(props) {`}</div>
        <div style={{marginLeft: "1em"}}>{`return`}
        <div style={{marginLeft: "2em"}}>{`<h4>Hi {props.name}</h4>`}</div>
        </div>
        <div>{`}`}</div>

        <div>{`export default StringChildCodeEx`}</div>
      </div>
    
  )
}

export default StringChildCodeEx