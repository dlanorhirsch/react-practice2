import React from 'react';

export class AddressForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fname: '',
      lname: '',
      street: '',
      city: '',
      state: '',
      zip: '' 
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value}
    );
  }
  

  handleSubmit(event) {
    alert("A name and address were submitted: ");
    event.preventDefault();
  
  }
  
  render(){
    const styles = {
      margin: 10
    }
    return (
      <div>
        <form style={{
          fontSize: 18,
          fontWeight: "bold",
          marginLeft: 100,
          display: "block",
          
          }}
          onSubmit={this.handleSubmit}>Enter Name and Address:
          <div className="container">
            <div className="col">  
              <label>
                <input
                  style={styles}
                  type="text"
                  placeholder="First name"
                  name="firstname"
                  onChange={this.handleChange} />
              </label>
              <label>
                <input 
                  style={styles}
                  type="text"
                  placeholder="Last name"
                  name="lastname" 
                  onChange={this.handleChange} />
              </label>
              <label>
               <input
                 style={styles}
                 type="text"
                 placeholder="Street"
                 name="street" 
                 onChange={this.handleChange} />
              </label>
              <label>
                <input
                  style={styles}
                  type="text"
                  placeholder="City"
                  name="city"
                  onChange={this.handleChange} />
              </label>
              <label>
                <input
                  style={styles}
                  type="text"
                  placeholder="State"
                  name="state"
                  onChange={this.handleChange} />
              </label>
              <label>
              <input
                style={styles}
                type="text"
                placeholder="Zip"
                name="zip"
                onChange={this.handleChange} />
          </label>
                
          <p>Hello: {" "}{this.state.firstname}{" "}{this.state.lastname}</p>
          <p>Your address is:{" "}
            {this.state.street}{" "}
            {this.state.city}{" "}{this.state.state}{"  "}{this.state.zip}
          </p>
        </div>
      </div>
        <button 
          style={styles}
          type="submit">Submit
        </button>
      </form>
    </div>
    )
  }
}
