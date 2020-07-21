import React, {Component} from 'react'

// // HOC is a function that takes a component as a parameter
// // and returns a new component wrapping the given component
// // and "supercharging" it by giving it some extra abilities

class Toggler extends Component{
  state= {
    on: false
  }
  toggle = () => {
    this.setState(prevState => {
      return {
        on: !prevState.on
      }
    })
  }
  render() {
    const C = this.props.component
    return (
        <C on={this.state.on} toggle={this.toggle} {...this.props} />
        // passing a state variable to Component, passing toggle method down, and any props that get passed along ({this.})
    )
  }
}

export function withToggler(component) {
  return function(props) {
    return (
      <Toggler component={component} {...props}/>
    )
  }
}

//withToggler returns an anonymous function which is a constructor that returns a component

//the anonymous function returns a component 

//jsx gets transpiled to a function called createElement() when render is called