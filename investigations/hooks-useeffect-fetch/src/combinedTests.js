import React, {useState, useEffect} from 'react'


// //////////// test1 //////////////////
const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setData(result)
          setIsLoading(false)
        })
    }

  fetchData()
  }, [url])

  return (
      <div>
        <div>{isLoading}</div>
        {data.map(data => <div key={data.id}>
        <div>{data.name}</div>

      </div>
      )}
    </div>
  );
}
export default UseFetch;
// ////////////// test2 //////////////////
function PeopleData() {
  const [data, setData] = useState([]);
    
    const url = 'https://jsonplaceholder.typicode.com/users';

    try {
      const response = fetch(url);
      const json = response.json;
      setData(json);
      console.log(data)
     
    }
    catch(err){
      console.log(err);
    }
    
  return (
    <div>
      {data.map(item => <div key={item.id}>
        <div>{item.name}</div>
        </div>)}
    </div>

  )
}
// ////////////////// test.3 ////////////////

function FetchData() {
  const [people, setPeople] = useState([]);

  async function fetchPeople(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const json = await response.json();
  setPeople(json);
  }
  useEffect(() => {
    fetchPeople();
  }, []);


return (
  
  <div>
      {people.map(data => 
        <div key={data.id}>
        <div className="list">
          <li className="header">{data.name}</li>
        <div className="body">  
          <li><strong>Company:</strong> {data.company.name}</li>
          <li><strong>User Name: </strong> {data.username}</li>
          <li><strong>Email: </strong> {data.email}</li>
          <li><strong>Phone: </strong>{data.phone}</li>
        </div>
          <li className="address"><strong>Address: </strong></li>
        <div className="body">
          <li><strong>Street:</strong> {data.address.street}</li>
          <li><strong>Suite: </strong> {data.address.suite}</li>
          <li><strong>City: </strong> {data.address.city}<br/></li>
          <li><strong>Zip Code:</strong> {data.address.zipcode}</li>
        </div>   
        </div>
        </div>
       )
      }
    </div>
 

  );
};


