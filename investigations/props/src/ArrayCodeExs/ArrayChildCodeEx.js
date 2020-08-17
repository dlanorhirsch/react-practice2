import React from 'react';

function ArrayChildCodeEx() {
  return (
    <div>
      <a 
        className="header-tab" 
        href="https://github.com/dlanorhirsch/react-examples/blob/master/investigations/props/src/ArrayCodeExs/ArrayChildCode.js" 
        target="_blank" rel="noopener noreferrer">
        ArrayChildCode.js
      </a>
      
<pre className = "codeExs">{`
import React from 'react';

function ArrayChildCode(props) {
  return (
    <div>
      <h4>Hi {props.names} </h4>
    </div>
  )
}

export default ArrayChildCode

`}
</pre>
</div>  
  )
}

export default ArrayChildCodeEx