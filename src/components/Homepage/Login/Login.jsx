import React, { Component } from "react";
import axios from "axios";
import "./login.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    response: "",
  };

  onEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  onPasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  onSubmitHandler = () => {
    axios.post("http://localhost:5000/users/login", this.state).then((data) => {
      console.log(data);
      localStorage.setItem("data", data.data.token);
      this.setState({ response: "Success" });
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div className="login">
        <div className="login__form">
          <h1 style={{
            marginBottom:'20px'
          }}>Login</h1>
          <input
            style={{
              width: "350px",
              margin: "0",
              padding: "0",
              marginBottom: "20px",
              background:'transparent'
            }}
            onChange={this.onEmailChange}
            type="text"
            placeholder="email"
          />
          <input
            style={{
              width: "350px",
              margin: "0",
              padding: "0",
              marginBottom: "20px",
              background:'transparent'
            }}
            onChange={this.onPasswordChange}
            type="password"
            placeholder="password"
          />
          <div className="buttonbox">
            <button style={{
              padding: '5px 10px',
              cursor: 'pointer',
              display: 'block',
              margin: 'auto',
              width:'100px',
              height:'40px',
              borderRadius:'15px',
              background: 'linear-gradient(to right,#146CF6,#00F800)'
            }} onClick={this.onSubmitHandler}>Login</button>
            <button style={{
              padding: '5px 10px',
              cursor: 'pointer',
              display: 'block',
              margin: 'auto',
              width:'100px',
              height:'40px',
              borderRadius:'15px',
              background: 'linear-gradient(to right,#146CF6,#00F800)'
            }} onClick={() => this.props.history.push("/register")}>
              Register
            </button>
          </div>
          {this.state.response}
        </div>
      </div>
    );
  }
}

export default Login;
