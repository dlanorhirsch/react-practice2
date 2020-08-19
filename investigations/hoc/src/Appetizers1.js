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
        <button onClick={this.toggle}>
          {this.state.on ? "Hide Appetizers" : "Show Appetizers"}
        </button>
          <div style={{visibility: this.state.on ? "visible" : "hidden"}}>
            <ul className="teasers">
              <li className="items">
                <a href="http://greenevi.com/vegan-tomato-flatbread/" 
                  target="_blank" rel="noopener noreferrer" >
                  Vegan Tomato Flatbread
                </a>
              </li>
              <li className="items">
                <a href="https://minimalistbaker.com/chickpea-shawarma-dip/" 
                  target="_blank" rel="noopener noreferrer" >
                  Chickpea Shawarma Dip
                </a>
              </li>
              <li className="items">
                <a href="https://www.blissfulbasil.com/vegan-caprese-pizza/" 
                  target="_blank" 
                  rel="noopener noreferrer" >
                  Vegan Caprese Pizza
                </a>
              </li>
              <li className="items">
                <a href="https://www.lazycatkitchen.com/vegan-thai-corn-fritters/" 
                  target="_blank" 
                  rel="noopener noreferrer" >
                  Vegan Thai Corn Fritters
                </a>
              </li>
            </ul>
          </div>
          
      </div>
    )
  }
}

export default Appetizers1