import React from 'react';

function WFavNumbCodeEx() {
  return (
    <div>
    <a className="header-tab" href="https://github.com/dlanorhirsch/react-examples/blob/master/investigations/hoc/src/withFavoriteNumber.js">withFavoriteNumber.js</a>
    <pre className="codeEx1">{`
import React from 'react';

function withFavoriteNumber(component){'
  const C = component;
  return function(props){
    return <C favoriteNumber={42} {...props} />
  }
}
export default wFavNumbCode
      `}</pre>
    </div>
  )
}

export default WFavNumbCodeEx