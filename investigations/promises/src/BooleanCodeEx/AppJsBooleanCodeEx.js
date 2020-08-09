import React from 'react';

function AppJsBooleanCodeEx() {
  return(
    <div>
    <div className="header-tab">App.js (parent)</div>
      <div className = "codeExs">
      <div>{`function App() {`}</div>
      <div style={{marginLeft: "1em"}}>{`return(`}</div>
      <div style={{marginLeft: "2em"}}>{`<div>`}</div>
      <div style={{marginLeft: "3em"}}>{`<h3>D. Passing a boolean via a   function as props:</h3>`}</div>
      <div style={{marginLeft: "3em"}}>{`<div className="examples">`}</div>
      <div style={{marginLeft: "4em"}}>{`<Example4 render={`}</div>
      <div style={{marginLeft: "5em"}}>{`function(isDayTime) {`}</div>
      <div style={{marginLeft: "6em"}}>{`return(`}</div>
      <div style={{marginLeft: "7em"}}>{`<h4>`}</div>
      <div style={{marginLeft: "8em"}}>{`{isDayTime ? "Good day" : "Good  evening"}, Sally!`}</div>
      <div style={{marginLeft: "7em"}}>{`</h4>`}</div>
      <div style={{marginLeft: "6em"}}>{`)`}</div>
      <div style={{marginLeft: "4em"}}>{`}}/>`}</div>
      <div style={{marginLeft: "3em"}}>{`</div>`}</div>
      <div style={{marginLeft: "2em"}}>{`</div>`}</div>
      <div style={{marginLeft: "1em"}}>{`)`}</div>
      <div>{`}`}</div>
      <br></br>
      <div>{`export default App`}</div>
      </div>  
    </div>
  )
}

export default AppJsBooleanCodeEx