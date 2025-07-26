import React from "react";
import { Link } from "react-router-dom";
import "../styles/work.scss";
import UHM from "../assets/uhm-brand-websites-mockup.png";
import Pres from "../assets/uhm-presentation-image.png";

const WIADCC = () => {
  return (
    <section className="portfolio-item" aria-labelledby="portfolio-heading">
      <div className="window-content">
        <div className="window-content-container">
          <Link to="/work" className="back-button">
            &#8592; Back to Work
          </Link>
          <div className="portfolio-heading-container">
            <h1 id="portfolio-heading">Union Home Mortgage</h1>
          </div>
          <hr />
          <h2>Front-end Developer | 2016 - 2020</h2>
          <h3>Responsive Website Design</h3>
          <p>
            During a 5-year stretch at Union Home Mortgage, I became the first
            in-house Front-End Developer and UX Designer. I created a design
            system in tandom with redesigning a collection of websites including
            UHM.com, MutualTitleAgency.com, UHMFoundation.org, and UHMDirect.com
            (formerly vLoan.com). In addition to customer-facing websites, I
            also designed a suite of internal digital products.
          </p>
          <img
            src={UHM}
            alt="Screenshots various projects, including website design for Union Home Mortgage, Union Home Foundation, and Mutual Title Agency."
          />
          <h2>Accomplishments</h2>
          <p>
            Having a cohesive design system among the various brand websites and
            digital products sped up engineering time by 50% and maintained
            consistent brand look and feel and improved overall code quality.
          </p>
          <p>
            Managed and led website redesign and optimization projects to
            enhance performance, including a lead generation funnel with a 45%
            conversion rate (increased by 21% from our original lead generation
            website).
          </p>
          <p>
            Design, test and launch multiple web apps per year for operations
            and sales teams to automate and streamline the mortgage process.
          </p>
          <p>
            Announced internal product launch and presented a live demo
            at our annual partner meeting to the entire company at
            Playhouse Square in Cleveland, Ohio.
          </p>
          <img
            className="mq-small-image"
            src={Pres}
            alt="Screenshots various projects, including website design for Union Home Mortgage, Union Home Foundation, and Mutual Title Agency."
          />
        </div>
      </div>
    </section>
  );
};

export default WIADCC;
