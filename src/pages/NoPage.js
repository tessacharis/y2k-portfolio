import React from "react";
import { Link } from "react-router-dom";
import nopage from "../assets/nopage.png";

const NoPage = () => {
  return (
    <section>
      <div className="window-content">
        <div className="window-content-container">
          <img src={nopage} alt="404" />
          <p>
            There's nothing here! Look away!
          </p>
          <Link to="/" className="button">&#8592; Back to Home</Link>
        </div>
      </div>
    </section>
  );
};

export default NoPage;
