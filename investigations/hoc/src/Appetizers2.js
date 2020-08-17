import React from 'react'
import { Component } from 'react';
import {withToggler} from "./withToggler"

class Appetizer2 extends Component{
  render(){
    return(
      <div>
        <button 
          onClick={this.props.toggle}>{this.props.on ? "Hide" : "Show"}
        </button>
          <div style={{visibility: this.props.on ? "visible" : "hidden"}}>
          <ul className="teasers">
              <li className="items">
                <a href="http://greenevi.com/vegan-tomato-flatbread/">
                  Vegan Tomato Flatbread
                </a>
              </li>
              <li className="items">
                <a href="https://minimalistbaker.com/chickpea-shawarma-dip/">
                  Chickpea Shawarma Dip
                </a>
              </li>
              <li className="items">
                <a href="https://www.blissfulbasil.com/vegan-caprese-pizza/">
                  Vegan Caprese Pizza
                </a>
              </li>
              <li className="items">
                <a href="https://www.lazycatkitchen.com/vegan-thai-corn-fritters/">
                  Vegan Thai Corn Fritters
                </a>
              </li>
            </ul>
          </div>
      </div>
    )
  }
}

const SuperMenu = withToggler(Appetizer2)
export default SuperMenu