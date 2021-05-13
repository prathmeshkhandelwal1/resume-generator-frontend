import React, { Component } from "react";
import "./homepage.css";
import logo from '../../media/logo.png'
import resume1 from '../../media/resumepic1.png'
import resume2 from '../../media/resumepic2.jpg'
import resume3 from '../../media/resumepic3.jpg'
import Student1 from '../../media/Student.jpg'
import Student2 from '../../media/Student2.jpg'
import Student3 from '../../media/Student3.jpg'
import profStd from '../../media/studentformatresume.jpg'
import resumestd from '../../media/researcher.jpg'
import linkedin from '../../media/004-linkedin.png'
import twitter from '../../media/003-twitter.png'
import ig from '../../media/002-instagram.png'
import fb from '../../media/001-facebook.png'
import FreeResume from '../../media/freeresume.jpg'
import profresume from '../../media/professional_teacherResumeFormat.jpg'
import freeTrail from '../../media/freetrial.jpg'

class Homepage extends Component {

    state= {
        src: resume1,
        color:'#000065',
        background:'#000065'
    }

  

  imageslider = (color, img) => {
    this.setState({
        src:img,
        color:color
    })
  };


  pushing = (event) => {
    this.props.onResumeChange(event)
    this.props.history.push('/input')
  }

 

  render() {
    return (
      <div className="homepagecontainer">
        <div style={{background:this.state.color}} className="circle"></div>
        <div>
          <nav>
            <div className="img1">
              <img src={logo} width="100" height="100" />
              <ul>
                <li>
                  <a href="#section1">Home</a>
                </li>
                <li>
                  <a href="#section2">Resume</a>
                </li>
                <li>
                  <a href="#section4" onClick={()=>this.props.history.push('Login')}>My Account</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="content">
          <div className="textbox">
            <h4>
              It's just not
              <br />
            </h4>
            <h3 id="heading3" style={{color:this.state.color, fontSize:'40px'}}>Resume</h3>
            <h6>
              It's your <br />
            </h6>
            <h1 id="xyz" style={{color:this.state.color, fontSize:'70px'}}>Career</h1>
            <p></p>
          </div>
          <div className="resume">
            <img id="img" src={this.state.src} width="400" height="400" />
          </div>
          <ul className="thumb">
            <li>
              <img
                id="img1"
                src={resume1}
                width="80"
                height="80"
                onClick={()=>this.imageslider('#000065',resume1)}
              />
            </li>
            <li>
              <img
                id="img2"
                src={resume2}
                width="80"
                height="80"
                onClick={()=>this.imageslider('#996515',resume2)}
              />
            </li>
            <li>
              <img
                id="img3"
                src={resume3}
                width="80"
                height="80"
                onClick={()=>this.imageslider('#800000',resume3)}
              />
            </li>
          </ul>
        </div>
        <div className="textbox2">
          The purpose of a resume is to introduce yourself to employers, present
          your qualifications, and secure an interview.
          <br /> The goal of writing a resume is to showcase your experience,
          education, and skills in a standardized format which is easy for
          recruiters to read.
          <br />
          Now that you know what it is, here's our guide on{" "}
          <b>How to Build a Resume</b>.<br />
          A resume is definitely a must-have. Without it, you can't expect to be
          invited to a job interview.
          <br />
          Make a Persuasive Resume in Just Minutes Answer a few questions about
          your background, skills and experience, then select a template.
          <br /> Our Resume Builder does the rest.
        </div>
        <section id="section2">
          <div className="flipPortion">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={Student1}
                    alt="Avatar"
                    style={{ width: "400px", height: "450px" }}
                  />
                </div>
                <div onClick={()=>this.pushing('resume1')} className="flip-card-back">
                  <img
                    src={profStd}
                    alt="Avatar"
                    style={{ width: "390px", height: "480px" }}
                  />
                  <div id="btn1">
                    <button>
                      <a href="Input1.html">next</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flipPortion">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={Student3}
                    alt="Avatar"
                    style={{ width: "400px", height: "450px" }}
                  />
                </div>
                <div  onClick={()=>this.pushing('resume2')} className="flip-card-back">
                  <img
                    src={resumestd}
                    alt="Avatar"
                    style={{ width: "390px", height: "480px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flipPortion">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={Student2}
                    alt="Avatar"
                    style={{ width: "400px", height: "450px" }}
                  />
                </div>
                <div  onClick={()=>this.pushing('resume3')} className="flip-card-back">
                  <img
                    src={profresume}
                    alt="Avatar"
                    style={{ width: "390px", height: "480px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="freecard">
            <div className="flipPortion">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src={FreeResume}
                      alt="Avatar"
                      style={{ width: "450px", height: "450px" }}
                    />
                  </div>
                  <div  onClick={()=>this.pushing('resume4')} className="flip-card-back">
                    <img
                      src={freeTrail}
                      alt="Avatar"
                      style={{ width: "390px", height: "500px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="footer">
          <a
            className="footer-link"
            href="https://www.linkedin.com/"
            color="#120136"
          >
            <img src={linkedin} alt="in" />{" "}
          </a>
          <a className="footer-link" href="https://www.facebook.com/">
            <img src={fb} alt="fb" />
          </a>
          <a className="footer-link" href="https://www.twitter.com/">
            <img src={twitter} alt="tw" />
          </a>
          <a className="footer-link" href="https://www.instagram.com/">
            <img src={ig} alt="tw" />
          </a>
          <div>
            <p>
              ©2020 RB All Rights are Reserved
              <br /> This is a private website not belongs to any government
              organisation.Built only for project purpose.The content available
              on this site may be incorrect
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
