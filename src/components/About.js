import React from "react";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <div className="about-container">
        <h1 className="about-header">Philantha</h1>
        <p className="about-desc" style={{ marginTop: "2rem" }}>
          Statistics Graduate at Nanyang Technological University, Singapore
        </p>
        <p className="about-desc" style={{ marginTop: "2rem" }}>
          I build <a href='https://github.com/philanthalim' target='_blank' style={{ color: "purple",textDecoration:'none' }}>projects</a> for fun in
          my free time, surrounding topics of my interest.
        </p>
        <p className="about-desc" style={{ marginTop: "2rem" }}>
          I'm somone who's open to trying new things and I live by the motto
          'You never know until you try'. I took up an app development
          internship in my final year, despite having no knowledge on UX/UI let
          alone mobile app development frameworks and it was one of the best
          decisions I have made. One can never know everything because the
          software industry is constantly evolving. From picking up backend
          development to integrating third-party libraries, there was something
          new to learn almost everyday. It's amazing how software engineers are
          able to build something out of nothing and build products that will
          potentially impact the lives of many people.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default About;
