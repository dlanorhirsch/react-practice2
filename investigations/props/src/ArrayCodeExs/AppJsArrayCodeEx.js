import React from 'react';
import { Component } from 'react';

class AppJsArrayCodeEx extends Component {
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
        {this.state.show ? "Hide Code" : "App.js CodeEx.js (parent)"}
      </button>
    <div style={{display: this.state.show ? "block" : "none"}}>
    
<pre className="codeExs">{`
import React from "react";
import ArrayChildCode from "./ArrayChildCode;

function ArrayChildCode(props) {
    return (
      <h4>
        Welcome {' '}
          { props.names
            .map((name) => {
              return name  }
            ).join(", ")
          }
      </h4>
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

export default AppJsArrayCodeEx