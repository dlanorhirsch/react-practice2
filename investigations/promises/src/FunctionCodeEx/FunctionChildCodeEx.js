import React from 'react';

function FunctionChildCodeEx() {
  return(
    <div>
      <a className="header-tab" href="https://github.com/dlanorhirsch/react-examples/blob/master/investigations/promises/src/FunctionCodeEx/FunctionChildCode.js">FunctionChildCode.js</a>
      
<pre className = "codeExs">{`
import React from 'react';

    function FunctionChildCode(props) {
      return (
        <div>
          {props.render("President Macron")}
        </div>
      )
    }

export default FunctionChildCode

`}
</pre>

    </div>
  )
}
export default FunctionChildCodeEx