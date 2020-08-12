import React from "react";;

function AppJsStringCodeEx() {
    return (
      <div>
      <div className="header-tab">App.js (parent)</div>
<pre className = "codeExs">{`
import React from "react";
import StringChildCode from "./StringChildCode";

function App() {
  return (
    <h4>A. Passing a string as props: </h4>
    <div className="examples">
      <StringChildCode name = "Uncle George"/>
    </div>
  )
}

export default App

`}
</pre>
</div>  
    )
}

export default AppJsStringCodeEx