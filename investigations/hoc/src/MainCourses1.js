import React from 'react'
import { Component } from 'react';

class MainCourses1 extends Component{
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
        <button onClick={this.toggle}>{this.state.on ? "Hide" : "Show"} Main Course </button>
          <div style={{visibility: this.state.on ? "visible" : "hidden"}}>
            <ul className="teasers">
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

export default MainCourses1