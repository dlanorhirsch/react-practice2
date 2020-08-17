import React from "react"

function ArrayChildCode(props) {
    return (
      <h4>
        Welcome {` `}
          { props.names
            .map((name) => {
              return name  }
            ).join(", ")
          }
      </h4>
    )  
}

export default ArrayChildCode

