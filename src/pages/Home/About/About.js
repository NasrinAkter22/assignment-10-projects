import React, { Fragment } from "react";
import profile from "../../../images/profile.png";
import "./About.css";

const About = () => {
  return (
    <Fragment>
      <div className="about-me mx-0 text-center row " >
        <div className=" col-md-6">
          <img width={400} src={profile} alt="" />
        </div>
        <div className=" text-center text-md-start col-md-6 text-uppercse">
          <h1>
            ABOUT <span className="me-color">ME</span>
          </h1>
          <h3 className="text-uppercase"> Akter</h3>
          <p className="p-color text-uppercase">Student of Programming Hero</p>
          <p className="text-uppercase">
            Insha Allah my goal in the next 1 year is to be a{" "}
            <span className="dev-color" >Full Stack Web Developer</span>, and for that I can do
            everything I can Insha Allah. Applying for a full time job after
            completing the programming hero course in the next 2 months and
            constantly learning new tasks with more{" "}
            <span className="focus">Focus</span>. Besides, I will do freelancing
            and run the family with my income, I will go for Hajj with my father
            and mother, Insha Allah. I will have a service Related Worldwide side
            Company Insha Allah{" "}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
