import React, { Component } from "react";
import "./input.css";
import axios from 'axios'

class Input extends Component {
  state = {
    educationDetails: {
      institute: "",
      Degree: "",
      Branch: "",
      startDate: "",
      endDate: "",
      seniorSec: "",
      percentage: null,
      sec: "",
      CGPA: null,
    },
    skills: {
      tools: "",
      program: "",
    },
    name: "",
    email: "",
    address: "",
    phone: null,
    profession: "",
    summary: "",
    response:''
  };


  onNameChange = (event) => {
    this.setState({
      name:event.target.value
    })
  }

  onEmailChange = (event) => {
    this.setState({
      email:event.target.value
    })
  }

  onAddChange = (event) => {
    this.setState({
      address:event.target.value
    })
  }

  onPhoneChange = (event) => {
    this.setState({
      phone:event.target.value
    })
  }

  onProfChange = (event) => {
    this.setState({
      profession:event.target.value
    })
  }

  onSummaryChange = (event) => {
    this.setState({
      summary:event.target.value
    })
  }

  onInstChange = (event) => {
    const obj = {...this.state.educationDetails}
    obj.institute = event.target.value
    this.setState({
      educationDetails:obj
    })
  }

  onDegChange = (event) => {
    const obj = {...this.state.educationDetails}
    obj.Degree = event.target.value
    this.setState({
      educationDetails:obj
    })
  }

  onstartChange = (event) => {
    const obj = {...this.state.educationDetails}
    obj.startDate = event.target.value
    this.setState({
      educationDetails:obj
    })
  }

  onendChange = (event) => {
    const obj = {...this.state.educationDetails}
    obj.endDate = event.target.value
    this.setState({
      educationDetails:obj
    })
  }

  onSeSecChange = (event) => {
    const obj = {...this.state.educationDetails}
    obj.seniorSec = event.target.value
    this.setState({
      educationDetails:obj
    })
  }

  onPerChange = (event) => {
    const obj = {...this.state.educationDetails}
    obj.percentage = event.target.value
    this.setState({
      educationDetails:obj
    })
  }

  onSecChange = (event) => {
    const obj = {...this.state.educationDetails}
    obj.sec = event.target.value
    this.setState({
      educationDetails:obj
    })
  }

  onCGPAChange = (event) => {
    const obj = {...this.state.educationDetails}
    obj.CGPA = event.target.value
    this.setState({
      educationDetails:obj
    })
  }

  onToolsChange = (event) => {
    const obj = {...this.state.skills}
    obj.tools = event.target.value
    this.setState({
      skills:obj
    })
  }
  onProgChange = (event) => {
    const obj = {...this.state.skills}
    obj.program = event.target.value
    this.setState({
      skills:obj
    })
  }

  onSubmit = (eve) => {
    eve.preventDefault()
    console.log('hey')
    const token = localStorage.getItem('token')
    console.log(token)
    if(this.state.skills.program === ''){
      this.setState({
        response:'Please enter all your data'
      })
    }else{
      axios.post('http://localhost:5000/details/',this.state, {
        headers:{
          'Authorization': `Bearer ${token}`
        }
      }).then(data=> {
        console.log(data)
        this.setState({
          response:'Successfully uploaded!'
        })
        this.props.history.push(`/${this.props.resumeState}`)
      })
    }
    
  }

  render() {
    return (
      <div>
        <section>
          <div class="parent">
            <h1 style={{color:'white', marginTop:'10px'}}>Enter your details</h1>
            <div class="main">
              <form action="/action_page.php">
                <label for="fname">Full name:&nbsp;</label>
                <input onChange={this.onNameChange} type="text" id="fname" name="fname" required />
                <br />
                <br />
                <label for="lname">
                  email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
                <input onChange={this.onEmailChange} type="text" id="email" name="email" required />
                <br />
                <br />
                <label for="address">
                  address:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
                <input onChange={this.onAddChange} type="text" id="address" name="address" required />
                <br />
                <br />
                <label for="contactNum">phone no.:&nbsp;</label>
                <input onChange={this.onPhoneChange} type="number" id="cn" name="cn"  required/>
                <br />
                <br />
                <label for="knownFor">known for:</label>
                <input onChange={this.onProfChange} type="text" id="kf" name="kf"  required/>
                <br />
                <br />
                <label for="image">Profile image:</label>
                <input type="file" id="image" name="image" />
                <br />
                <label for="knownFor">Summary:</label>
                <input onChange={this.onSummaryChange} type="text" id="kf" name="kf"  required/>
                <br />
                <label for="knownFor">Insititute</label>
                <input onChange={this.onInstChange} type="text" id="kf" name="kf" required />
                <br />
                <label for="knownFor">Degree:</label>
                <input onChange={this.onDegChange} type="text" id="kf" name="kf" required />
                <br />
                <label for="knownFor">Graduation start date:</label>
                <input onChange={this.onstartChange} type="text" id="kf" name="kf" required />
                <br />
                <label for="knownFor">Graduation end date:</label>
                <input onChange={this.onendChange} type="text" id="kf" name="kf" required />
                <br />
                <label for="knownFor">Senior Secondary</label>
                <input onChange={this.onSeSecChange} type="text" id="kf" name="kf" required />
                <br />
                <label for="knownFor">Percentage</label>
                <input onChange={this.onPerChange} type="text" id="kf" name="kf" required />
                <br />
                <label for="knownFor">Secondary</label>
                <input onChange={this.onSecChange} type="text" id="kf" name="kf" required />
                <br />
                <label for="knownFor">CGPA</label>
                <input onChange={this.onCGPAChange} type="text" id="kf" name="kf" required/>
                <br />
                <label for="knownFor">Tools</label>
                <input onChange={this.onToolsChange} type="text" id="kf" name="kf" required/>
                <br />
                <label for="knownFor">Programming Languages</label>
                <input onChange={this.onProgChange} type="text" id="kf" name="kf" required/>
                <br />
              </form>
              <button onClick={this.onSubmit} >Submit</button>
              
            </div>
            <p style={{color:'white'}}>{this.state.response}</p>
          </div>
        </section>
      </div>
    );
  }
}

export default Input;
