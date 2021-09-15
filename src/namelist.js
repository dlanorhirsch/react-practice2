import React from 'react';

export class NameList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      list: ["Ron", "Bob", "Larry"]
    };
  }
render()
{
  return (
    <div style={{margin: "0 0 1.8em 2.5em"}}>
      {this.state.list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
     </div>
  )}
}
