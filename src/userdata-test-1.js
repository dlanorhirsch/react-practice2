import React from 'react';
import ReactDOM from 'react-dom';

import { useState, useEffect } from 'react';

export const People = () => {
  const [hasError, setErrors] = useState(false);
  const [people, setPeople] = useState({});

  useEffect(() => {

    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      res 
        .json()
        .then(res => setPeople(res))
        .catch(err => setErrors(err));
    }
    fetchData();

  })
  return (
    <div>
      <span>{JSON.stringify(people)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  ); 
}


export default People;



ReactDOM.render(<People/>, document.getElementById('root'));