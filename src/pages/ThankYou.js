import React from "react";
import { Link } from "react-router-dom";
import thankyou from "../assets/thankyou.png";

const ThankYou = () => {
  return (
    <section>
      <div className="window-content">
        <div className="window-content-container">
          <img src={thankyou} alt="Thank you!" />
          <h2>
            Thank you for your message!
          </h2>
          <p>
            Keep your eyes peeled to your inbox - I'll be reaching out to learn more in a few days!
          </p>
          <Link to="/" className="button">&#8592; Back to Home</Link>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
