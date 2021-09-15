import React from 'react';

export class MasterForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentStep: 1,
      email: '',
      username: '',
      password: '',
    }
  }
  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
 }
  handleSubmit = (event) => {
    event.preventDefault()
    const { email, username, password } = this.state
    alert(`Your registration detail:  \n
          Email: ${email} \n
          Username: ${username} \n
          Password: ${password}`)
  }
// underscore: sematic cue, communicates that this is called later in the code
_next = () => {  
  let currentStep = this.state.currentStep
  currentStep = currentStep >= 2 ? 3 : currentStep + 1
  this.setState({
    currentStep: currentStep
  })
}
_previous = () => {
  let currentStep = this.state.currentStep
  currentStep = currentStep <= 1 ? 1 : currentStep -1
  this.setState({
    currentStep: currentStep
  })
}

previousButton(){
  let currentStep = this.state.currentStep;
  if(currentStep !==1){
    return (
      <button className="btn btn-secondary"
        type="button" style={{margin: "1em 0 1em 2em"}} 
        onClick={this._prev}>
        Previous
      </button>
    )
  }
  return null;
}
nextButton(){
  let currentStep = this.state.currentStep;
  if(currentStep <3){
    return (
      <button className="btn btn-primary float-right"
      type="button" 
      style={{margin: "1em 0 1em 2em"}}
      onClick={this._next}>
        Next
    </button>
    )
  }
  return null;
}

  
  
//using react fragments...https://reactjs.org/docs/fragments.html
  render() {
    return (
      
      <React.Fragment>
        <h3>A Wizard Form!</h3>
        <p>Step {this.state.currentStep}</p>

        <form onSubmit={this.handleSubmit}> 
          {/* render the form steps and pass required props in */}
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            username={this.state.username}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password}
          />
          {this.previousButton()}
          {this.nextButton()}
        </form>
      </React.Fragment>
    )
  }
}

function Step1(props) {
  if(props.currentStep !== 1) {
    return null
  }
  return (
    <div className="form-group">
      <label style={{marginLeft: "20px"}} htmlFor="email">Email address</label>
      <input style={{marginLeft: "20px", width: "300px", marginBottom: "1em"}}
      className="form-control"
      id="email"
      type="text"
      placeholder="Enter email"
      defaultValue={props.email}  //props from parent
      onChange={props.handleChange}  //props from parent
      />
    </div>
  );
}
function Step2(props){
  if(props.currentStep !== 2) {
    return null
  }
  return (
    <div className="form-group">
      <label style={{marginLeft: "20px"}}  htmlFor="username">User Name</label>
      <input style={{marginLeft: "20px", width: "300px", marginBottom: "1em"}}
      className="form-control"
      id="username"
      type="text"
      placeholder="Enter user name"
      defaultValue={props.username}  //props from parent
      onChange={props.handleChange}  //props from parent
      />
    </div>
  );
}
function Step3(props){
  if(props.currentStep !== 3) {
    return null
  }
  return (
    <React.Fragment>
    <div className="form-group">
      <label style={{marginLeft: "20px"}}      
      htmlFor="password">Password</label>
      <input style={{marginLeft: "20px", width: "300px", marginBottom: "1em"}}
      className="form-control"
      id="password"
      type="text"
      placeholder="Enter password"
      defaultValue={props.password}  //props from parent
      onChange={props.handleChange}  //props from parent
      />
    </div>
    <button className="btn btn-success btn-block" style={{margin: "1em 0 1em 2em"}}>Sign up</button>
    </React.Fragment>
  );
}
// export {MasterForm};