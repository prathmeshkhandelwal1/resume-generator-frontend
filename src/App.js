import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Input from "./components/Homepage/Input/Input";
import Register from "./components/Homepage/Register/Register";
import Login from "./components/Homepage/Login/Login";
import Resume from "./components/Homepage/Resume1/Resume";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Resume2 from "./components/Homepage/Resume2/Resume2";
import Resume3 from "./components/Homepage/Resume3/Resume3";
import Resume4 from "./components/Homepage/Resume4/Resume4";

class App extends Component {
  state = {
    resume: "resume1",
  };

  onSelectingResume = (resume) => {
    console.log('triggered', resume)
    this.setState({
      resume
    })
  }

  render() {
    return (
      <Router>
        <Route exact path="/" render={(props)=><Homepage {...props} onResumeChange={this.onSelectingResume}/>}/>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route
          path="/input"
          render={(props) => (
            <Input {...props} resumeState={this.state.resume} />
          )}
        />
        <Route path="/resume1" component={Resume} />
        <Route path="/resume2" component={Resume2} />
        <Route path="/resume3" component={Resume3} />
        <Route path="/resume4" component={Resume4} />
      </Router>
    );
  }
}

export default App;
