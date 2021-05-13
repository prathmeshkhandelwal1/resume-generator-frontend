import React, { Component } from "react";
import axios from "axios";
import './Resume.css'
import dp from '../../../media/samarthsingh.jpg'

class Resume extends Component {

    state={
        data:{}
    }

  componentDidMount() {
      const token = localStorage.getItem('token')
      axios.get('http://localhost:5000/details/me',{
          headers:{
              'Authorization':`Bearer ${token}`
          }
      }).then(data=>{
          console.log(data.data)
          this.setState({
              data:data.data[data.data.length-1]
          })
      })
  }

  render() {

    const { data } = this.state
    console.log(data.educationDetails,'hey')

    

    return (
        data.educationDetails && data.skills ? 
      <div className="template">
        <div class="resume">
          <div class="column">
            <section class="profile">
              <h1>{data.name}</h1>
              <p>
                <em>{data.profession}</em>
              </p>
              <img src={dp} />
            </section>
            <section class="contact">
              <h2>Contact</h2>
              <ul>
                <li>{data.address}</li>
                <li>{data.email}</li>
                <li>(+91){data.phone}</li>
              </ul>
            </section>
            <section class="objectives">
              <p>
                {" "}
                {data.summary}
              </p>
            </section>

            <section class="social">
              <ul>
                <li>linkedin url</li>
                <li>github link</li>
              </ul>
            </section>
            <section class="education">
              <h2>Education</h2>
              <ul class="timeline">
                <li class="event">
                  <span class="duration">2019-2023</span>
                  <div class="content">
                    <h3>
                        {data.educationDetails.Degree}
                      <br />
                        {data.educationDetails.Branch}
                    </h3>

                    <p>
                      <em>
                        {data.educationDetails.institute}
                      </em>
                    </p>
                    <p>CPI: 10</p>
                    <br />
                  </div>
                  <span class="duration">2018-2019</span>
                  <div class="content">
                    <h3>School</h3>
                    <h4>Senior Secondary</h4>
                    <p>
                      <em>{data.seniorSec}</em>
                    </p>
                    <p>Percentage : {data.educationDetails.percentage}</p>
                    <br />
                  </div>
                  <span class="duration">2016-2017</span>
                  <div class="content">
                    <h3>School</h3>
                    <h4>Secondary</h4>
                    <p>
                      <em>{data.educationDetails.sec}</em>
                    </p>
                    <p>CGPA : {data.educationDetails.CGPA}</p>
                  </div>
                </li>
              </ul>
            </section>
          </div>
          <div class="column">
            <section class="skills">
              <h2>Skills</h2>
              <ul>
                <li>
                  <h3>Tools</h3>
                  <p>
                      {data.skills.tools}
                  </p>
                </li>
                <li>
                  <h3>Programming Languages</h3>
                  <p>
                      {data.skills.program}
                  </p>
                </li>
              </ul>
            </section>

            <section class="projects">
              <h2>Projects</h2>
              <ul class="timeline">
                <li class="event">
                  <span class="duration">20</span>
                  <div class="content">
                    <h3>ABC techno</h3>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </li>
                <li class="event">
                  <span class="duration">20</span>
                  <div class="content">
                    <h3>XYZ techno</h3>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div> : null
    ); 
  }
}

export default Resume;
