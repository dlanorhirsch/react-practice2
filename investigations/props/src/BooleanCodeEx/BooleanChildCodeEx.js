import React from 'react';

function BooleanChildCodeEx() {
  return (
    <div>
      <a className="header-tab" 
        href="https://github.com/dlanorhirsch/react-examples/blob/master/investigations/props/src/BooleanCodeEx/BooleanChildCode.js" 
        target="_blank" 
        rel="noopener noreferrer">
        BooleanChildCode.js
      </a>

<pre className = "codeExs">{`
import React from 'react';

function BooleanChildCode(props) {
  return (
    <div>
      {props.render(true)}
    </div>
  )
}

export default BooleanChildCode

`}</pre>
    </div>
  )
}

export default BooleanChildCodeEx
