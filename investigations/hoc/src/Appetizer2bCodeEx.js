import React from 'react';
import {Component} from "react"

class Appetizer2bCodeEx extends Component {
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
      <button style={{marginBottom: "15px"}} onClick={this.toggle}>{this.state.show ? "Hide" : "Show"} Code Example: Appetizers2bCodeEx.js </button>
          <div style={{display: this.state.show ? "block" : "none"}}>
  {/* --------------- begin code exampmle ---------------- */}

  <div className="appetizerCodeExs">{`class Appetizer2bCodeEx extends Component{`}
  <div style={{marginLeft: "1em"}}>{`render(){`}</div>
  <div style={{marginLeft: "2em"}}>{`return(`}</div>
  <div style={{marginLeft: "3em"}}>{`<div>`}</div>
  <div style={{marginLeft: "4em"}}>{`<button onClick={this.props.toggle}>{this.props.on ? "Hide" : "Show"} Appetizers </button>`}</div>
  <div style={{marginLeft: "4em"}}>{`<div style={{visibility: this.props.on ? "visible" : "hidden"}}>`}</div>
  <div style={{marginLeft: "5em"}}>{`<ul className="teasers">`}</div>
  <div style={{marginLeft: "6em"}}>{`<li className="items">Stuffed Clams</li>`}</div>
  <div style={{marginLeft: "6em"}}>{`<li className="items">Fried Mozzerella Sticks</li>`}</div>
  <div style={{marginLeft: "6em"}}>{`<li className="items">Stuff Mushrooms</li>`}</div>
  <div style={{marginLeft: "6em"}}>{`<li className="items">Fried Clams</li>`}</div>
  <div style={{marginLeft: "5em"}}>{`</ul>`}</div>
  <div style={{marginLeft: "4em"}}>{`</div>`}</div>
  <div style={{marginLeft: "3em"}}>{`</div>`}</div>
  <div style={{marginLeft: "2em"}}>{`)`}</div>
  <div style={{marginLeft: "1em"}}>{`}`}</div>
  <div >{`}`}</div>

<div>{`const SuperMenu = withToggler(Appetizer)`}</div>
<div>{`export default SuperMenu`}</div>

{/* -------------------end code example ---------------------- */}
        </div>
      </div>
      </div>
    )
  }
}

export default Appetizer2bCodeEx