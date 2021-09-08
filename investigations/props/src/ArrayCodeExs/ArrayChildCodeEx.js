import React from 'react';
import { Component } from 'react';

class ArrayChildCodeEx extends Component {
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
          {this.state.show ? "Hide Code" : "ArrayChildCode.js Ex."}
        </button>
      <div style={{display: this.state.show ? "block" : "none"}}>
      
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
    </div>
    )
  }
}

export default ArrayChildCodeEx