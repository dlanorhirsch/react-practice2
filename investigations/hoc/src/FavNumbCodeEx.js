import React from 'react';

function FavNumbCodeEx(){
  return (
    <div>
    <a href="https://github.com/dlanorhirsch/react-examples/blob/master/investigations/hoc/src/withFavoriteNumber.js">withFavoriteNumber.js</a>
      <pre className="codeExs">{`import React from 'react';

export function withFavoriteNumber(component) {
  const C = component
  return function(props) {
      return (
          <C favoriteNumber={42} />
      )
  }
}
`}
</pre>
<a href="https://github.com/dlanorhirsch/react-examples/blob/master/investigations/hoc/src/DisplayFavNum.js">DisplayFavNum.js</a>
<pre className="codeExs">{`import React from "react";
import {withFavoriteNumber} from "./withFavoriteNumber";

function DisplayFavNumb(props) {
    return (
        <div>My favorite number is: {props.favoriteNumber}</div>
    )
}

export default withFavoriteNumber(DisplayFavNumb)
`}
</pre>

     
    </div>
  )
}

export default FavNumbCodeEx