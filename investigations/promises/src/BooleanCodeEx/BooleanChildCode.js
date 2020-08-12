import React from 'react';

function BooleanChildCode (props) {
  return (
    <div>
      {props.render(true)}
    </div>
  )
}

export default BooleanChildCode