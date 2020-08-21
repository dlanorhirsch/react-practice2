import React from 'react';
import { Component } from 'react';

class StringChildCodeEx extends Component {
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
        {this.state.show ? "Hide Code" : "StringChildCode.js Code Ex. (child)"}
      </button>
    <div style={{display: this.state.show ? "block" : "none"}}>
    
<pre className = "codeExs">{`
import React from "react"

function StringChildCode(props) {
    return <h4>Hi {props.name}</h4>
}

export default StringChildCode

`}
</pre>
    </div>
    </div>
    )
  }
}

export default StringChildCodeEx