import React from 'react';

function BooleanChildCodeEx() {
  return (
    <div>
      <div className="header-tab">BooleanChildCode.js</div>
      <div className="codeExs">
        <div>{`import React from 'react';`}</div>
        <br></br>
        <div>{`function BooleanChildCode(props) {`}</div>
        <div style={{marginLeft:"1em"}}>{`return (`}</div>
        <div style={{marginLeft:"2em"}}>{`<div>`}</div>
        <div style={{marginLeft:"3em"}}>{`{props.render(true)}`}</div>
        <div style={{marginLeft:"2em"}}>{`</div>`}</div>
        <div style={{marginLeft:"1em"}}>{`)`}</div>
        <div>{`}`}</div>
        <br></br>
        <div>{`export default BooleanChildCode`}</div>
      </div>
    </div>
  )
}

export default BooleanChildCodeEx
