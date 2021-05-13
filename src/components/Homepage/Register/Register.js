import React, { Component } from "react";
import axios from "axios";
import "../Login/login.css";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    response: null,
  };

  onNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
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
    axios.post("http://localhost:5000/register/", this.state).then((data) => {
      console.log(data);
      localStorage.setItem("auth", data.data.token);
      this.setState({ response: "Success" });
      // this.props.history.push("/");
    });
  };
  render() {
    return (
      <div className="login">
        <div className="login__form">
          <h1>Register</h1>
          <input
            style={{
              width: "350px",
              margin: "0",
              padding: "0",
              marginBottom: "20px",
              background:'transparent'
            }}
            onChange={this.onNameChange}
            type="text"
            placeholder="name"
          />
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
            <button
              style={{
                padding: "5px 10px",
                cursor: "pointer",
                display: "block",
                margin: "auto",
                width: "100px",
                height: "40px",
                borderRadius: "15px",
                background: "linear-gradient(to right,#146CF6,#00F800)",
              }}
              onClick={this.onSubmitHandler}
            >
              Register
            </button>
            
          </div>
          {this.state.response}
        </div>
      </div>
    );
  }
}

export default Register;
