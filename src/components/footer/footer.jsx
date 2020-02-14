import React, { Component } from "react";
import "./footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-left">
          <div className="footer-header">Coffee? Just drop your mail</div>
          <div className="footer-message">
            Just drop your mail, I will get in touch within 24hrs
          </div>
          <form method ="post" netlify>
            <input type="email" />
            <input type="submit" value = "send"/>
          </form>
        </div>

        <div className="footer-right">
          <div className="footer-header">View me on social Media</div>
          <div className="footer-icon-array">
            <a
              href="https://medium.com/@rakshitkeswani13"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src={require("../../static/icons2/medium.png")}
                alt="Medium"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/rakshit-keswani"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={require("../../static/icons2/linkedin.png")} alt="" />
            </a>
            
            <a
              href="https://dribbble.com/RakshitK"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={require("../../static/icons2/dribble.png")} alt="" />
            </a>


          </div>
        </div>
      </footer>
    );
  }
}
