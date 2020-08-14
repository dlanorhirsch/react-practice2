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

//functional component called ArrayChildCode which takes an props Object (representing the property values from the names property in App.js, <ArrayChildCode />).

//
