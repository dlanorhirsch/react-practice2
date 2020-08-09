import React from 'react';

function FunctionChildCodeEx() {
  return(
    <div>
      <div className="header-tab">{`FunctionChildCodeEx.js`}</div>
      <div className="codeExs">
        <div>{`import React from "react"`}</div>
        <br></br>
        <div>{`function FunctionChildCode(props) {`}</div>
        <div style={{marginLeft:"1em"}}>{`return (`}</div>
        <div style={{marginLeft:"2em"}}>{`<div>`}</div>
        <div style={{marginLeft:"3em"}}>{`props.render("Bob")}`}</div>
        <div style={{marginLeft:"2em"}}>{`</div>`}</div>
        <div style={{marginLeft:"1em"}}>{`)`}</div>
        <div>{`}`}</div>
        <br></br>
        <div>{`export default FunctionChildCode`}</div>
      </div>
    </div>
  )
}
export default FunctionChildCodeEx