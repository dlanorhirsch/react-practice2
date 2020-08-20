import React from 'react'
import { Component } from 'react';

class MainCourse2CodeEx extends Component{
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

export default MainCourse2CodeEx


