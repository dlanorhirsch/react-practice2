import React from 'react';
import {useEffect, useState} from 'react';

function PeopleData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();

  }, []);
  const loadData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
    .then(response =>  response.json())
    .then(data => setData(data));
  }
  // console.log(data);
  return(
    <div>
      <div className="container-fluid">
        <div>
          {data.map(data => (
            <div key={data.id}>
              <div className="list">
                <div className="body" 
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  width: "20em",
                  padding: ".6em",
                  margin: ".5em 0",
                  background: "#2571bc",
                  color: "#fff",
                  fontSize: ".9em"
                  }}>  
                <div><span style={{fontWeight: "bold"}}> Name:&nbsp;</span>{data.name}</div>
                  <div><span style={{fontWeight: "bold"}}>Company: </span>{data.company.name}</div>
                  <div><span style={{fontWeight: "bold"}}>Website: </span> {data.website}</div>
                  <div><span style={{fontWeight: "bold"}}>Username: </span> {data.username}</div>
                  <div><span style={{fontWeight: "bold"}}>Phone: </span> {data.phone}</div>
                  <div><span style={{fontWeight: "bold"}}>Email: </span> {data.email}</div>
                </div>  
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
  
  );
}
export default PeopleData;

