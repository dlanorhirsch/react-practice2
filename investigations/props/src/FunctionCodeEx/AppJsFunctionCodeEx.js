import React from 'react';
import { Component } from 'react';

class AppJsFunctionCodeEx extends Component {
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
          {this.state.show ? "Hide Code" : "App.js Code Ex.(parent)"}
        </button>
      <div style={{display: this.state.show ? "block" : "none"}}>
      
<pre className = "codeExs">{`import React from 'react';
import FunctionChildCode from './FunctionChildCode';

function App() {
  return (
    <div>
      <div className = "examples">
        <FunctionChildCode render={
          function(name) {
            return <h4>Hello there, {name}</h4>
          }
        }/>
      </div>
    <hr></hr>
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

export default AppJsFunctionCodeEx