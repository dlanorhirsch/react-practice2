import React from 'react';
import { useState, useEffect } from 'react';

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
      }
      catch (error) {
        setError(error);
        console.log(error);
      }
    };
    FetchData();
  }, [url, options]);
  return {response, error};
  
};

export default function People() {
    const res = useFetch("https://jsonplaceholder.typicode.com/users", {});
      
    if (!res.response) {
      return <div>Loading...</div>;
    }
    return( 
   
      <div>
          <div>{res.name}</div>
      </div>
      )
    }