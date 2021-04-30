import React from "react";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <div
        style={{
          minHeight: "80vh",
          padding: "50px",
          textAlign: "left",
          lineHeight: "40px",
          fontSize: "1.2rem",
        }}
      >
        <h1>Philantha</h1>
        <p style={{ marginTop: "2rem" }}>
          Statistics Graduate at Nanyang Technological University, Singapore
        </p>
        <p style={{ marginTop: "2rem" }}>
          I build <span style={{ color: "purple" }}>projects</span> for fun in
          my free time, surrounding topics of my interest.
        </p>
        <p style={{ marginTop: "2rem" }}>
          I decided to major in Statistics as I wanted to find out how companies
          like YouTube and Netflix make use of data to help them plan better
          content. While I do enjoy observing patterns from data, I realised
          that I wanted to try something different. I'm somone who's open to
          trying new things and I live by the motto 'You never know until you
          try'. I took up an app development internship in my final year,
          despite having no knowledge on UX/UI let alone mobile development
          frameworks. React Native and JavaScript were new to me but it was
          relatively easy picking up the concepts fast as I already had coding
          background from my modules in University. There was lots of trial and
          error during my exploration of software engineering but I enjoyed the
          learning process. One can never know everything because the software
          industry is constantly evolving. From picking up backend development
          to integrating third-party libraries, there was something new to learn
          almost everyday. I really like the fact that software engineers are
          able to build something out of nothing and build products that will
          potentially impact the lives of many people.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default About;
