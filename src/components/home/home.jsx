import React, { Component } from "react";
import "./home.scss";
import HomeIllustration from "../../static/home-illustration.png";
import Aahar from "../../static/Images/AAHAR.png";
import { NavHashLink as Link } from "react-router-hash-link";
import Olx from "../../static/olx.png";
import Furlenco from "../../static/furlenco.png";
import TravelMate from "../../static/travelmate.png";
import OlxBlogs from "../../static/olx-blogs.jpg";

export default class Home extends Component {
  render() {
    return (
      <div className="home" id="landing">
        <div className="home-landing">
          <div className="home-landing-1">
            <div className="home-landing-title">Product Designer</div>

            <div className="home-landing-desc">
              Hello, I am Rakshit a product designer from IIT Roorkee. I am a
              self-taught designer with great enthusiasm for digital products
              that make things better and improves the human experience.
            </div>

            <Link smooth={true} exact={true} to="/#work">
              <div className="home-landing-work">View Work</div>
            </Link>
          </div>

          <div className="home-landing-photo">
            <img src={HomeIllustration} alt="Home Illustration" />
          </div>
        </div>

        <div className="home-work" id="work">
          <div className="title">Internship Projects</div>

          <div className="home-work-unit">
            <div className="home-work-pic">
              <img src={Olx} alt="Olx Internship" />
            </div>
            <div className="home-work-details">
              <div>
                <div className="home-work-title">
                  Solving for Next Billion Users on Olx
                </div>
                <div className="home-work-desc">
                  To assist the next billion users on Olx by building an audio
                  interaction b/w user and app. A complete end to end project
                  from guerilla research to testing the prototypes with users.
                </div>
              </div>
              <div className="home-work-medium">
                <a
                  href="https://medium.com/@rakshitkeswani13/85e1bfe41190"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Project Brief ->
                </a>
              </div>
            </div>
          </div>

          <div className="home-work-unit home-work-unit2">
            <div className="home-work-details">
              <div>
                <div className="home-work-title">
                  Product stories for Premium Products
                </div>
                <div className="home-work-desc">
                  To understand user behavior and build a user-centric design
                  story for signature products. To create an immersive
                  experience that emotionally connects the user to the
                  furniture.
                </div>
              </div>
              <div className="home-work-medium">
                <a
                  href="https://medium.com/@rakshitkeswani13/communicating-the-design-story-behind-furlencos-signature-products-c6e53ec82040"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Project Brief ->
                </a>
              </div>
            </div>
            <div className="home-work-pic">
              <img src={Furlenco} alt="Furlenco Internship" />
            </div>
          </div>

          <div className="title" style={{ marginTop: "5em" }}>
            Personal Experiments
          </div>

          <div className="home-work-unit">
            <div className="home-work-pic">
              <img
                src={TravelMate}
                alt="TravelMate: Encouraging safe travelling"
              />
            </div>
            <div className="home-work-details">
              <div>
                <div className="home-work-title">
                  TravelMate: Encouraging safe travelling{" "}
                </div>
                <div className="home-work-desc">
                  TravelMate is a Campus app that allows students to travel
                  together safely from and to, IIT Roorkee. TravelMate tackles
                  the problem of student safety during travel.
                </div>
              </div>
              <div className="home-work-medium">
                <a
                  href="https://medium.com/@rakshitkeswani13/travelmate-ux-case-study-e767771b64e3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read on Medium ->
                </a>
              </div>
            </div>
          </div>

          <div className="home-work-unit home-work-unit2">
            <div className="home-work-details">
              <div>
                <div className="home-work-title">AAHAR: UX Research</div>
                <div className="home-work-desc">
                  Designing a system to distribute the un-eaten mess food to
                  poor construction workers residing outside the campus.
                </div>
              </div>
              <div className="home-work-medium">
                <a
                  href="https://www.behance.net/gallery/75867469/Aahar-UX-System-design"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Behance Project ->
                </a>
              </div>
            </div>
            <div className="home-work-pic">
              <img src={Aahar} alt="AAHAR: UX Research" />
            </div>
          </div>
        </div>

        <div className="home-blogs">
          <div className="title" style={{ marginTop: "5em" }}>
            Blogs: I love to write my experiences.
          </div>

          <div className="home-blogs-array">
            <a href = "https://uxplanet.org/product-design-internship-olx-group-297b51855239" className="home-blogs-unit">
              <img
                src={OlxBlogs}
                alt="Product Design Internship at OLX Group, Gurgaon"
              ></img>
              <div className="home-blogs-name">
                Product Design Internship at OLX Group, Gurgaon
              </div>
            </a>
            <a href = "https://medium.com/@rakshitkeswani13/ux-intern-at-furlenco-ed68c80dc9b0"  className="home-blogs-unit">
              <img
                src={require("../../static/furlenco-blogs.jpg")}
                alt="UX Design Internship at Furlenco, Bangalore"
              ></img>
              <div className="home-blogs-name">
                UX Design Internship at Furlenco, Bangalore
              </div>
            </a>
            <a href = "https://uxplanet.org/design-sprint-ec35329c83a7"  className="home-blogs-unit">
              <img
                src={require("../../static/sprint.jpg")}
                alt="Sprint Kalidoscope"
              ></img>
              <div className="home-blogs-name">Sprint Kalidoscope</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
