import React from 'react';

function BooleanChildCode (props) {
  // console.log(props.name)
  return (
    <div>
      {props.render(true)}
    </div>
  )
}

export default BooleanChildCode