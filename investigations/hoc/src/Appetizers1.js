import React from 'react'
import { Component } from 'react';


class Appetizers1 extends Component{
  state = {
    on: true
  }
  toggle = () => {
    this.setState(prevState => {
      return {
        on: !prevState.on
      }
    })
  }
  render(){
    return(
      <div>
        <button onClick={this.toggle}>{this.state.on ? "Hide" : "Show"}  </button>
          <div style={{visibility: this.state.on ? "visible" : "hidden"}}>
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

export default Appetizers1