import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO.js";
import thankyou from "../assets/thankyou.png";

const ThankYou = () => {
  return (
    <section>
      <SEO
        title="Thank You | Tessa Newbacher"
        description="Thank you for getting in touch! Your message has been received successfully."
      />
      <div className="window-content" style={{ margin: "100px auto" }}>
        <div className="window-content-container">
          <img src={thankyou} alt="Thank you!" />
          <h1>
            Thank you for your message!
          </h1>
          <p>
            Keep your eyes peeled to your inbox - I'll be reaching out to learn more as soon as I can!
          </p>
          <Link to="/" className="button">&#8592; Back to Home</Link>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
