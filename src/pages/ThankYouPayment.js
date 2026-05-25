import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO.js";

const ThankYou = () => {
  return (
    <section>
      <SEO
        title="Payment Successful | Tessa Newbacher"
        description="Thank you for your payment! It was a pleasure working with you."
      />
      <div className="window-content" style={{ margin: "100px auto" }}>
        <div className="window-content-container">
          <h1>
            It's been a pleasure doing business with you.
          </h1>
          <h2>Thank you for your payment.</h2>
          <p>
            If you experienced any trouble with the payment portal, require additional help, or want to continue our work together, please feel free to reach out to me at <a href="mailto:tessacharis@gmail.com">tessacharis@gmail.com</a>
          </p>
          <Link to="/" className="button">Back to Home</Link>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
