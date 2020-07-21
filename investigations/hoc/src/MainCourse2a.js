import React from 'react'
import { Component } from 'react';

class MainCourse2a extends Component{
  state = {
    on: false
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
        <button onClick={this.toggle}>{this.state.on ? "Hide" : "Show"} Main Course </button>
          <div style={{visibility: this.state.on ? "visible" : "hidden"}}>
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

export default MainCourse2a