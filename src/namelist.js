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
    <div>
      <h2 style={{marginLeft: 20, textDecoration: "underline"}}>Render a Simple List:</h2>
      <ul>
        {this.state.list.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  )
}
  }
