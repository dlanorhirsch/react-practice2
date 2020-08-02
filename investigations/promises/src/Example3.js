import React from "react"

function Example3(props) {
    // console.log(props.name)
    return (
      <div>
        {props.render(true)}
      </div>
    )
}

export default Example3