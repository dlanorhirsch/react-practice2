import React from 'react';

function FavNumbCodeEx(){
  return (
    <div>
    <a href=></a>
      <pre>{`
import React from 'react';

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
    </div>
  )
}