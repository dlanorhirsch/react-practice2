import React from 'react';
import { Component } from 'react';

class Appetizers1CodeEx extends Component{
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
    return(
      <div>
      <div>Appetizers1.js</div> 
      <br></br>
        <button onClick={
          this.toggle}>{
            this.state.show ? "Hide Code" : "Show Code"
          }  
        </button>
        
          <div style={{display: this.state.show ? "block" : "none"}}>
           
            <pre className="appetizerCodeExs">{`import React from 'react'
import { Component } from 'react';


class Appetizers1 extends Component{
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
        <button onClick={this.toggle}>{
          this.state.on ? "Hide" : "Show"
          }  
        </button>
          <div style={{
            visibility: this.state.on ? "visible" : "hidden"
          }}>
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
            `}</pre>
          </div>
      </div>
    )
  }
}

export default Appetizers1CodeEx
