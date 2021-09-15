import React from 'react';
import "./index.css";

export class Addresses extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      addresses: [{id: 1, fname: "Ronald ", lname: "McPherson", street: "120 Carpenter St, #5", city: "Providence ", st: "RI", zip: " 02916"},
                {id:2, fname: "Robert ", lname: "Smith", street: "2 Hurricane Dr", city: "Tuckertown ", st: "NJ", zip: " 99999"},
                {id: 3, fname: "George ", lname: "Washington", street: "1776 Independence Way", city: "Mount Vernon ", st: "NY", zip: " 11111"},
                {id: 4, fname: "Bilbo ", lname: "Biggins", street: "Round Door Dr", city: "Hobbiton ", st: "The Shire", zip: "unk"},
                {id: 5, fname: "Albert ", lname: "Morrison", street: "232 Adelaide Ave", city: "Providence ", st: "RI", zip: " 02907"},
                {id: 6, fname: "Paul ", lname: "Revere", street: "99 Liberty Ave", city: "Boston ", st: "MA", zip: " 11991"}          
    ]
    };
  }
  render(){
    const styles = {
      fontSize: 14,
      marginLeft: 20,
      marginTop: 5,
      marginBottom: 5,
      maxWidth: "300px"
    }
    return (
      <div style={{display: "flex", flexWrap:"wrap", marginBottom: "2em", justifyContent: "center"}}>
        {this.state.addresses.map(address => 
          <div className="addressBox" 
               style={{
                  width: "200px", 
                  border: "1px solid gray",
                  margin: ".24em",
                  borderRadius: "5px",
                  background: "#e5e5e5"
                  
               
               }} key={address.id}> 
            <div style={styles}>{address.fname}{address.lname}</div>
            <div style={styles}>{address.street}</div>
            <div style={styles}>{address.city}{address.st}{address.zip}</div>
          </div>
        )}
      </div> 
    
    )
  }
}