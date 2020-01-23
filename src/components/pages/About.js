import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <h1>About</h1>
      <hr />
      <p>
        This web application is built with React, and it uses{" "}
        <a href="http://makeup-api.herokuapp.com/">Makeup API</a> to get data of
        various make up products.
      </p>
      <hr />
      <a href="https://github.com/mehmetcanaygun">Built by Mehmet Can Aygün</a>
    </div>
  );
};

export default About;
