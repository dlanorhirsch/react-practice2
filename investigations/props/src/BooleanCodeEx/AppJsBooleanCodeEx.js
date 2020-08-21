import React from 'react';
import { Component } from 'react';

class AppJsBooleanCodeEx extends Component {
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

<pre className = "codeExs">{`
import React from 'react';
import BooleanChildCode from './BooleanChildCode';

function App() {
  return (
    <div className = "examples">
      <BooleanChildCode render={
        function(isDayTime) {
          return (
            <h4>
              {isDayTime ? "Good Day" : "Good Evening"}, Sally}
            </h4>
          )
        }
      }
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
export default AppJsBooleanCodeEx