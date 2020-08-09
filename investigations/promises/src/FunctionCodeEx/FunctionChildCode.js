import React from "react"

function FunctionChildCode(props) {
    // console.log(props.name)
    return (
      <div>
        {props.render("Bob")}
      </div>
    )
}

export default FunctionChildCode