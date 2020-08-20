import React from 'react';
import { Component } from 'react';

class AppJsStringCodeEx extends Component {
  state = {
    show: false
  }
  toggle = () => {
    this.setState(prevState => {
      return {
        show: !prevState.show
      }
    })
  }  
  render() {
    return (
    <div>
      <button 
        style={{marginBottom: "15px"}}
        onClick={this.toggle}>
        {this.state.show ? "Hide Code" : "Display App.js Code Ex.  (parent)"}
      </button>
    <div style={{display: this.state.show ? "block" : "none"}}>
    
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
    </div>
    )
  }
}

export default AppJsStringCodeEx