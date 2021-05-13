import React, { Component } from "react";
import "./Resume2.css";
import axios from "axios";
import samarth from '../../../media/samarthsingh.jpg'

class Resume2 extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/details/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        console.log(data.data);
        this.setState({
          data: data.data[data.data.length - 1],
        });
      });
  }

  render() {

    const {data} = this.state

    return (
      data.educationDetails ? 
      <div className="resume2">
        <table width="900px">
          <tr>
            <td
              width="200px"
              style={{
                color: "white",
                padding: "20opx",
                backgroundColor: "#002155",
              }}
            >
              <div class="td1">
                <center>
                  <img style={{height:'300px', width:'300px', borderRadius:'150px'}} src={samarth} />
                  <br />
                  <h1>{data.name}</h1>
                  <h2>Address</h2>
                  <hr />
                  <br />
                  <p>
                    {data.address}
                  </p>
                  <br />
                  <h2>Contact Info:</h2>
                  <hr />
                  <br />
                  <p>
                    {data.phone}
                    <br />
                    {data.email}
                    <br />
                    <a href="https://www.linkedin.com/in/samarth-singh-56b5251b4/">
                      Linkedin
                    </a>
                  </p>
                  {/* </p> */}
                </center>
              </div>
            </td>
            <td width="500px" bgcolor="#FDFEFE">
              <div class="resume">
                <div class="column">
                  <section class="education">
                    <h2>Education</h2>
                    <ul class="timeline">
                      <li class="event">
                        <p>2019-2023</p>
                        <div class="content">
                          <h3>
                            {data.educationDetails.Degree} <br />
                            {data.educationDetails.Branch}
                          </h3>
                          <p>
                            <em>
                              {data.educationDetails.institute}
                            </em>
                          </p>
                          <p>CPI: {data.educationDetails.CGPA}</p>
                          <br />
                        </div>
                        <span class="duration">2018-2019</span>
                        <div class="content">
                          <h3>School</h3>
                          <h4>Senior Secondary</h4>
                          <p>
                            <em>{data.educationDetails.seniorSec}</em>
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
                      <h3>Tools</h3>
                      <ul>
                        <li>MS-office</li>
                        <li>Github</li>
                        <li>Latex</li>
                        <li>Unity Engine</li>
                        <li>Android Studio</li>
                      </ul>
                      <br />
                      <h3>Programming Languages</h3>
                      <ul>
                        <li>C++</li>
                        <li>Java</li>
                        <li>C#</li>
                        <li>SQL</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                      </ul>
                      {/* </li> */}
                    </ul>
                  </section>

                  <section class="projects">
                    <h2>Research & Publications</h2>
                    <ul class="timeline">
                      <li class="event">
                        <span class="duration">20</span>
                        <div class="content">
                          <h3>ABC techno</h3>
                          <p>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </p>
                        </div>
                      </li>
                      <li class="event">
                        <span class="duration">20</span>
                        <div class="content">
                          <h3>XYZ techno</h3>
                          <p>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div> : null
    ); 
  }
}

export default Resume2;
