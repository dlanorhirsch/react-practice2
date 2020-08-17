import React from 'react'
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
const SuperChargedComponent = withToggler(MainCourse2)

export default SuperChargedComponent



