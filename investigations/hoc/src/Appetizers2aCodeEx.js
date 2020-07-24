import Markdown from 'markdown-to-jsx';
import React from 'react';
import {Component} from "react"


class Appetizers2aCodeEx extends Component {
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
    return (
      <div>
<Markdown>
# Hello World
- 1
- 2      
- 3
</Markdown>

      <button style={{marginBottom: "15px"}} onClick={this.toggle}>{this.state.show ? "Hide" : "Show"} Code Example: Appetizers2aCodeEx.js </button>
        <div style={{display: this.state.show ? "block" : "none"}}>

  {/* --------------- begin code exampmle ---------------- */}
          <div className="appetizerCodeExs">{`class Appetizer2aCodeEx extends Component{`}
            <div style={{marginLeft: "1em"}}>{`state = {`}</div>
            <div style={{marginLeft: "2em"}}>{`on: false`}</div>
            <div style={{marginLeft: "1em"}}>{`}`}</div>

            <div style={{marginLeft: "1em"}}>{`toggle = () => {`}</div>
            <div style={{marginLeft: "2em"}}>{`this.setState(prevState => {`}</div>
            <div style={{marginLeft: "3em"}}>{`return {`}</div>
            <div style={{marginLeft: "4em"}}>{`on: !prevState.on`}</div>
            <div style={{marginLeft: "3em"}}>{`}`}</div>
            <div style={{marginLeft: "2em"}}>{`})`}</div>
            <div style={{marginLeft: "1em"}}>{`}`}</div>
            <div style={{marginLeft: "1em"}}>{`render(){`}</div>
            <div style={{marginLeft: "2em"}}>{`return(`}</div>
            <div style={{marginLeft: "3em"}}>{`<div>`}</div>
            <div style={{marginLeft: "4em"}}>{`<button onClick={this.toggle}>{this.state.on   ?       "Hide" : "Show"}  `} </div>
            <div style={{marginLeft: "4em"}}>{`</button>`}</div>
            <div style={{marginLeft: "5em"}}>{`<div style={{visibility: this.state.on ?   "visible"       : "hidden"}}>`}</div>
            <div style={{marginLeft: "6em"}} >{`<ul className="teasers">`}</div>
            <div style={{marginLeft: "7em"}}>{`<li className="items">Stuffed Clams</li>`}</div>
            <div style={{marginLeft: "7em"}}>{`<li className="items">Fried Mozzerella   Sticks</      li>`}</div>         
            <div style={{marginLeft: "7em"}}>{`<li className="items">Stuff Mushrooms</li>`} </div>
            <div style={{marginLeft: "7em"}}>{`<li className="items">Fried Clams</li>`}</div>
            <div style={{marginLeft: "6em"}}>{`</ul>`}</div>
            <div style={{marginLeft: "5em"}}>{`</div>`}</div>
            <div style={{marginLeft: "4em"}}>{`</div>`}</div>
            <div style={{marginLeft: "3em"}}>{`)`}</div>
            <div style={{marginLeft: "2em"}}>{`}`}</div>
            <div style={{marginLeft: "1em"}}>{`}`}</div>
{/* -------------------end code example ---------------------- */}
          </div>
        </div>
      </div>
    )
  }
}


export default Appetizers2aCodeEx