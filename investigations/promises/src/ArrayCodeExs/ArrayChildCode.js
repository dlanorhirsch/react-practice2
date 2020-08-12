import React from "react"

function ArrayChildCode(props) {
    return <h4>Welcome 
      {props.names
        .map((item) => {
          return <div>{item}</div>}
    )}</h4>
}

export default ArrayChildCode


