import React from 'react';
import Link from "next/link";

const About = () => {
  // throw new Error('ERROR SAMPLE')
  return (
    <>
      <h1>
        about page
      </h1>
      <Link href="/">Link to Home Page</Link>
    </>
  );
};

export default About;