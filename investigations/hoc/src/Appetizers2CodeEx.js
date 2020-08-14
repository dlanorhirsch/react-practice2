import React from 'react';
import {Component} from "react";
// import WithTogglerCodeEx from "./WithTogglerCodeEx";

class Appetizers2bCodeEx extends Component {
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
        <button 
          style={{marginBottom: "15px"}}
          onClick={this.toggle}>
          {this.state.show ? "Hide" : "Show"}
          Code Example: Appetizers2bCodeEx.js
        </button>
      <div style={{display: this.state.show ? "block" : "none"}}>
<pre className="appetizerCodeExs">{`
import React from './react';

class Appetizer2bCodeEx extends Component{
  render(){
    return(
      <div>
        <button onClick={
          this.props.toggle}>{
            this.props.on ? "Hide" : "Show"
          }  
        </button>
      <div style={{
        visibility: this.props.on ? "visible" : "hidden"
      }}>
        <ul className="teasers">
          <li className="items">Stuffed Clams</li>
          <li className="items">Fried Mozzerella Sticks</li>
          <li className="items">Stuff Mushrooms</li>
          <li className="items">Fried Clams</li>
        </ul>
      </div>
    </div>
  }
}

export default Appetizer2bCodeEx
`}
{/* <WithTogglerCodeEx /> */}
</pre>
</div>
</div>
    )
  }
}

export default Appetizers2bCodeEx
