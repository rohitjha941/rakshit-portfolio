import React, { Component } from "react";
import "./footer.scss";
import FaceBook from "../../static/Icons/facebook.png";
import Dribbble from "../../static/Icons/dribbble.png";
import Behance from "../../static/Icons/behance.png";
import Linkedin from "../../static/Icons/linkedin.png";
import Medium from "../../static/Icons/Path.png";



export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="text">You can also view my work on</div>

        <div className="footer-array">
          <a href="https://medium.com/@rakshitkeswani13" target="blank">
            <img src={Medium} alt="Medium" className="icons icons-margin" />
          </a>

          <a href="https://www.linkedin.com/in/rakshit-keswani" target="blank">
            <img src={Linkedin} alt="Linkedin" className="icons icons-margin" />
          </a>

          <a href="https://www.facebook.com/rakshit.keswani" target="blank">
            <img src={FaceBook} alt="Facebook" className="icons icons-margin" />
          </a>

          <a href="https://dribbble.com/RakshitK" target="blank">
            <img src={Dribbble} alt="Dribbble" className="icons icons-margin" />
          </a>

          <a href="https://www.behance.net/rakshitkes3b15" target="blank">
            <img src={Behance} alt="Behance" className="icons" />
          </a>
        </div>
      </footer>
    );
  }
}
