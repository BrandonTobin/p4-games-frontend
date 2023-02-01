import React from "react";
import "../styles/AboutUs.css"
import brandon from "../../src/images/brandontobin.jpeg"

function AboutUs() {
  return (
    <div className="aboutus">
      <div className="profile">
      </div>
      <div className="brandon">
        <div className="infolinks">
          <section className="user-list">
            <img className="brandon-image" src={brandon} />
          </section>
          <h4 className="gitname"> Brandon Tobin </h4>
          <a
            href="https://github.com/BrandonTobin"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="github"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/brandontobinswe/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="linkedin"
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="linkedin"
            />
          </a>
        </div>
        <div className="Info">
          <p>
            Thank you for visiting my Game Creation app! My name is Brandon Tobin, a
            25 year old marketer that turned to software engineering.
            <br></br>
            <br></br>I am an experienced Software Engineer adept in offering
            cutting edge engineering solutions. Brining forth expertise in
            managing all aspects of the software development cycle. Skilled in
            problem solving and executing software tasks from start to finish.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;