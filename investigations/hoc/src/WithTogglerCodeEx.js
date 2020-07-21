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
        {/* <button 
          style={{marginBottom: "15px"}}
          onClick={this.toggle}>
          {this.state.show ? "Hide" : "Show"}
          Code Example: withTogglerCodeEx.js
        </button>
      <div style={{display: this.state.show ? "block" : "none"}}> */}

{/* NOTE: 7/21/20: Rather than have a seperate button for the WithTogglerCodeEx component, I commented out the button and put the component in the Appetizer2bCodeEx component, so that both code examples render with the button from Appetizer2bCodeEx. I left the commented out code for the button in this file in case we modify the layout. /RJH */}

    {/*-------------- Code Example ----------------  */}

        <div className="appetizerCodeExs">{`class Toggler extends Component{`}
          <div style={{marginLeft: "1em"}}>{`state= {`}</div>
            <div style={{marginLeft: "2em"}}>{`on: false`}</div>
            <div style={{marginLeft: "1em"}}>{`}`}</div>
            <div style={{marginLeft: "1em"}}>{`toggle = () => {`}</div>
            <div style={{marginLeft: "2em"}}>{`this.setState(prevState => {`}</div>
            <div style={{marginLeft: "3em"}}>{`return {`}</div>
            <div style={{marginLeft: "4em"}}>{`on: !prevState.on`}</div>
            <div style={{marginLeft: "3em"}}>{`}`}</div>
            <div style={{marginLeft: "2em"}}>{`})`}</div>
            <div style={{marginLeft: "1em"}}>{`}`}</div>
            <div style={{marginLeft: "1em"}}>{`render() {`}</div>
            <div style={{marginLeft: "2em"}}>{`const C = this.props.component`}</div>
            <div style={{marginLeft: "3em"}}>{`return (`}</div>
            <div style={{marginLeft: "4em"}}>{`C on={this.state.on} toggle={this.toggle} {...this.props} />`}</div>
            <div style={{marginLeft: "3em"}}>{`)`}</div>
            <div style={{marginLeft: "2em"}}>{`}`}</div>
            <div style={{marginLeft: "1em"}}>{`export function withToggler(component) {`}</div>
            <div style={{marginLeft: "2em"}}>{`return function(props) {`}</div>
            <div style={{marginLeft: "3em"}}>{`return (`}</div>
            <div style={{marginLeft: "4em"}}>{`<Toggler component={component} {...props}/>`}</div>
            <div style={{marginLeft: "3em"}}>{`)`}</div>
            <div style={{marginLeft: "2em"}}>{`}`}</div>
            <div style={{marginLeft: "1em"}}>{`}`}</div>
            <div>{`}`}</div>
          </div>
    {/* ------------- END Code Example ---------------- */}
        </div>
      // </div>
    )
  }
}
export default WithTogglerCodeEx;