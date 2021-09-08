import React from 'react';
import { Component } from 'react';

class BooleanChildCodeEx extends Component {
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
          {this.state.show ? "Hide Code" : "BooleanChildCode.js Ex."}
        </button>
      <div style={{display: this.state.show ? "block" : "none"}}>

<pre className = "codeExs">{`
import React from 'react';

function BooleanChildCode(props) {
  return (
    <div>
      {props.render(true)}
    </div>
  )
}

export default BooleanChildCode

export default App

`}
</pre>
    </div>
    </div>
    )
  }
}
export default BooleanChildCodeEx