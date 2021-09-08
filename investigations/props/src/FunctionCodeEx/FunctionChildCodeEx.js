import React from 'react';
import { Component } from 'react';

class FunctionChildCodeEx extends Component {
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
          {this.state.show ? "Hide Code" : "FunctionChildCode.js Ex."}
        </button>
      <div style={{display: this.state.show ? "block" : "none"}}>
      
<pre className = "codeExs">{`import React from "react"

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
    </div>
    )
  }
}

export default FunctionChildCodeEx