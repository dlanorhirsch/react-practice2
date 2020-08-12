import React from 'react';

function AppJsBooleanCodeEx() {
  return(
    <div>
      <div className="header-tab">App.js (parent)</div>

<pre className = "codeExs">{`
import React from 'react'
import BooleanCodeEx from './BooleanChildCode'

function App() {
  return (
    <div>
      <h3>Passing a boolean via a function as props</h3>
    </div>
    <div className = "examples">
      <BooleanChildCode render={
        function(isDayTime) {
          return (
            <h4>{isDayTime ? "Good Day" : "Good Evening"}, Sally}</h4>
          )
        }
      }
  )
}

export default App

`}
</pre>
    </div>
  )
}

export default AppJsBooleanCodeEx