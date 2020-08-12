import React from "react"

function ArrayChildCode(props) {
    return <h4>Welcome 
      {props.names
        .map((item) => {
          return <div key="id">{item}</div>}
    )}</h4>
}

export default ArrayChildCode

// Types of props that can be passed: numbers, booleans, strings...
