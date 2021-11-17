import React, { Component } from "react";
import './form.css';
class Form extends React.Component{
  constructor(){
    super()
    this.state = {
      email : " ",
      Password : "",
      emailError : "",
      PasswordError : ""
    }
  }
  valid()
  {
    if(!this.state.email.includes("@") && this.state.Password.length<6)
    {
      this.setState({emailError :"invalid email", PasswordError :"invalid password"})
    }
    else if(!this.state.email.includes("@"))
    {
      this.setState({emailError:"invalid email"})
    }
   else if(!this.state.Password.length<6)
    {
      this.setState({PasswordError:"invalid password"})
    }
    else{
      return true
    }
  }
  submit()
  {
    this.setState({emailError : "" , PasswordError : "" })
    if(this.valid())
    {
      alert("data inserted")
    }
  }
  render(){
    return(<div className="main">
      <h1 Align="center">Form</h1>
      <label>Email</label>
      <input type="text" onchange={(event)=>{this.setState({email:event.target.value})}}></input>
      <p>{this.state.emailError}</p>
      <label>Password</label>
      <input type="password" onchange={(event)=>{this.setState({Password:event.target.value})}}></input>
      <p>{this.state.PasswordError}</p>
      <button onClick={()=>this.submit()}>Submit</button>
      </div>
    );
  }
}

export default Form;