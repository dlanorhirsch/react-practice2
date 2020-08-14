import React from 'react'

function PropsChild(props){
  return(
    <div className="example-styling">
     {props.children} 
    </div>
  )
}

export default PropsChild
