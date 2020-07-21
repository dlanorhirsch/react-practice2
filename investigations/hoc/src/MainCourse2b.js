import React from 'react'
import { Component } from 'react';
import {withToggler} from "./withToggler";


class MainCourse2b extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.toggle}>{this.props.on ? "Hide" : "Show"} Main Course </button>
          <div style={{visibility: this.props.on ? "visible" : "hidden"}}>
            <ul className="teasers">
              <li className="items">Fettucini Alfredo</li>
              <li className="items">Linguini with Clam Sauce</li>
              <li className="items">Seafood Arrabbiata</li>
              <li className="items">Beef Braciole</li>
            </ul>
          </div>
      </div>
    )
  }
}
const SuperChargedComponent = withToggler(MainCourse2b)

export default SuperChargedComponent



