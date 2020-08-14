import React from 'react'
import { Component } from 'react';
import {withToggler} from "./withToggler"

class Appetizer2 extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.toggle}>{this.props.on ? "Hide" : "Show"}  </button>
          <div style={{visibility: this.props.on ? "visible" : "hidden"}}>
            <ul className="teasers">
              <li className="items">Stuffed Clams</li>
              <li className="items">Fried Mozzerella Sticks</li>
              <li className="items">Stuff Mushrooms</li>
              <li className="items">Fried Clams</li>
            </ul>
          </div>
      </div>
    )
  }
}

const SuperMenu = withToggler(Appetizer2)
export default SuperMenu