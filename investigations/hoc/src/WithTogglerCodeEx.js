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
        <button 
          style={{marginBottom: "15px"}}
          onClick={this.toggle}>
          {this.state.show ? "Hide Code" : "Display WithToggler.js Code Ex."}
        </button>
      <div style={{display: this.state.show ? "block" : "none"}}>

<pre className="codeExs">{`import React from 'react'
import { Component } from 'react';
import {withToggler} from "./withToggler";


class MainCourse2 extends Component{
  render(){
    return(
      <div>
        <button 
          onClick={this.props.toggle}>{this.props.on ? "Hide" : "Show"} Main Course 
        </button>
          <div style={{visibility: this.props.on ? "visible" : "hidden"}}>
          <ul className="appetizers">
              <li className="items">Creamy Squash Risotto w/Toasted Pepitas</li>
              <li className="items">Vegatarian Three-Bean Chili</li>
              <li className="items">Spanish Frittta w/Herby Yogurt & Greens</li>
              <li className="items">Veggie Burgers w/Zucchini & Corn</li>
            </ul>
          </div>
      </div>
    )
  }
}
const SuperChargedComponent = withToggler(MainCourse2)

export default SuperChargedComponent

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