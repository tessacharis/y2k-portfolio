import React from "react";
import { Link } from "react-router-dom";
import nopage from "../assets/nopage.png";
import GlitchBackground from "../components/GlitchBackground";

const NoPage = () => {
  return (
    <section style={{ position: "relative", minHeight: "100vh", maxWidth: "none" }}>
      <GlitchBackground />
      <div className="window-content">
        <div className="window-content-container" style={{ margin: "20px auto", textAlign: "center" }}>
          <Link to="/" className="back-button">
            <span class="visually-hidden">Back to Home</span>X
          </Link>
          <img src={nopage} alt="404" style={{ maxWidth: "400px", margin: "20px auto" }} />
          <h1>
            There's nothing here. This is a missing page.
          </h1>
          <Link to="/" className="button" style={{ margin: "0px auto" }}>&#8592; Back to Home</Link>
        </div>
      </div>
    </section>
  );
};

export default NoPage;
