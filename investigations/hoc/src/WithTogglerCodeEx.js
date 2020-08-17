import React from "react";
import { Component } from "react"

class WithTogglerCodeEx extends Component {
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
  render(){
    return (
      
      <div>
      <a className="codeExTitle" 
        href="https://github.com/dlanorhirsch/react-examples/blob/master/investigations/hoc/src/withToggler.js" 
        target="_blank" 
        rel="noopener noreferrer">
        WithToggler.js</a>
      <br></br>
      <br></br>
        <button 
          style={{marginBottom: "15px"}}
          onClick={this.toggle}>
          {this.state.show ? "Hide Code" : "Show Code"}
        </button>
      <div style={{display: this.state.show ? "block" : "none"}}>

<pre className="appetizerCodeExs">{`
import React from 'react';

class Toggler extends Component{
  state= {
    on: true
  }
  toggle = () => {
    this.setState(prevState => {
      return {
        on: !prevState.on
      }
    })
  }
  render() {
    const C = this.props.component
    return (
        <C on={this.state.on} toggle={this.toggle} {...this.props} />
    )
  }
}

export function withToggler(component) {
  return function(props) {
    return (
      <Toggler component={component} {...props}/>
    )
  }
}

`}

    </pre>
        </div>
        </div>
    )
  }
}

export default WithTogglerCodeEx;