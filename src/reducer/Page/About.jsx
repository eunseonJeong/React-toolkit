import React from "react";
import { Link, useLocation } from "react-router-dom";

function About() {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li>
          {/* <Link to="/"> */}
            Home
          {/* </Link> */}
        </li>
        <li>
          {/* <Link
            to="/About"
          > */}
            About
          {/* </Link> */}
        </li>
      </ul>
    </nav>
  );
}

export default About;
