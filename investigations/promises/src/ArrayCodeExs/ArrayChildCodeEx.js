import React from 'react';

function ArrayChildCodeEx() {
  return (
      <div>
        <div className="header-tab">ArrayChildCode.js</div>
        <div className = "codeExs">
          
          <div>{`import React from "react;`}</div>
          <br></br>
          <div>{`function ArrayChildCode(props) {`}</div>
          <div style={{marginLeft: "1em"}}>{`return(`}</div>
          <div style={{marginLeft: "2em"}}>{`<div>`}</div>
          <div style={{marginLeft: "3em"}}>{`<h4>Hi {props.name}</h4>`}</div>
          <div style={{marginLeft: "2em"}}>{`</div>`}</div>
          <div style={{marginLeft: "1em"}}>{`)`}</div>
          <div>{`}`}</div>
          <br></br>
          <div>{`export default ArrayChildCodeEx`}</div>
        </div>
      </div>
  )
}

export default ArrayChildCodeEx