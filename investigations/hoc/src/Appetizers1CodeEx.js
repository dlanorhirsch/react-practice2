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
      <br></br>
      <a className="codeExTitle" href="https://github.com/dlanorhirsch/react-examples/blob/master/investigations/hoc/src/Appetizers1.js">Appetizers1.js</a>
      <br></br>
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
          this.state.on ? "Hide" : "Show"}  
        </button>
          <div style={{
            visibility: this.state.on ? "visible" : "hidden"
          }}>
          <ul className="teasers">
            <li className="items">
              <a href=
                "http://greenevi.com/vegan-tomato-flatbread/">
                Vegan Tomato Flatbread
              </a>
            </li>
            <li className="items">
              <a href=
                "https://minimalistbaker.com/chickpea-shawarma-dip/">
                 Chickpea Shawarma Dip
              </a>
            </li>
            <li className="items">
              <a href=
                "https://www.blissfulbasil.com/vegan-caprese-pizza/">
                Vegan Caprese Pizza
              </a>
            </li>
            <li className="items">
              <a href=
                "https://www.lazycatkitchen.com/vegan-thai-corn-fritters/">
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
            `}</pre>
          </div>
      </div>
    )
  }
}

export default Appetizers1CodeEx
