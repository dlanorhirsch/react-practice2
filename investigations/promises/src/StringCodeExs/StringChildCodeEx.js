import React from 'react';

function StringChildCodeEx() {
  return (
    <div>
    <div className="header-tab">StringChildCode.js</div>
          <div className = "codeExs">
            <div>{`import React from "./react;`}</div>
            <br></br>
            <div>{`function StringChildCode(props) {`}</div>
            <div style={{marginLeft: "1em"}}>{`return (`}
            <div>{`<div>`}</div>
            <div style={{marginLeft: "2em"}}>{`<h4>Hi {props.name}</h4>`}</div>
            <div>{`</div>`}</div>
            </div>
            <div style={{marginLeft: "1em"}}>{`)`}</div>
            <div>{`}`}</div>
            <br></br>
            <div>{`export default StringChildCodeEx`}</div>
          </div>
          </div>
    
  )
}

export default StringChildCodeEx