import React, { Component } from "react";
import './Resume4.css'

class Resume4 extends Component {
  render() {
    return (
      <div className="resume4">
        <div class="resume">
          <div class="column">
            <div class="inpair">
              <section class="profile">
                <h1>Samarth Singh</h1>
                <p>
                  <em>AR developer || Research enthusiast</em>
                </p>
              </section>
            </div>
            <section class="education">
              <h2>Education</h2>
              <ul class="timeline">
                <li class="event">
                  <p>2019-2023</p>
                  <div class="content">
                    <h3>
                      B.Tech <br />
                      Information Technology
                    </h3>
                    <p>
                      <em>
                        Indian Institute of Information Technology,
                        Vadodara,Gandhinagar
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
                      <em>Dewan Public School, Meerut</em>
                    </p>
                    <p>Percentage : 92.00</p>
                    <br />
                  </div>
                  <span class="duration">2016-2017</span>
                  <div class="content">
                    <h3>School</h3>
                    <h4>Secondary</h4>
                    <p>
                      <em>Dewan Public School, Meerut</em>
                    </p>
                    <p>CGPA : 9.6</p>
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
      </div>
    );
  }
}

export default Resume4;
