import React from "react";
import { Link } from "react-router-dom";
import "../styles/work.scss";
import WIA from "../assets/WIA-DCC-Website.png";

const WIADCC = () => {
  return (
    <section className="portfolio-item" aria-labelledby="portfolio-heading">
      <div className="window-content">
        <div className="window-content-container">
          <Link to="/work" className="back-button">
            &#8592; Back to Work
          </Link>
          <div className="portfolio-heading-container">
            <h1 id="portfolio-heading">
              Women in Analytics / DataConnect Conference
            </h1>
            <span className="badge">Currently Freelancing</span>
            <p>
              <Link to="https://www.womeninanalytics.com" target="_blank">
                Go to WomenInAnalytics.com
              </Link>
              &nbsp;&nbsp;
              <Link to="https://www.dataconnectconf.com" target="_blank">
                Go to DataConnectConf.com
              </Link>
            </p>
          </div>
          <hr />
          <h2>Website Design | 2024 - Present</h2>
          <h3>Responsive Website Design</h3>
          <p>
            On a part-time freelance basis, I work with the Women in Analytics
            team to design and build responsive web pages across multiple
            websites for their community and event landing pages. From simple
            landing pages to more complex user workflows and conversions, I've
            helped the team creative a cohesive user experince, drive community
            engagement, and track website performance for their community
            members and event attendees using the Webflow platform.
          </p>
          <p>
            Being a part of the Women in Analytics (WIA) team has been an
            incredibly fulfilling experience for me, both professionally and
            personally. Mentorship has played a pivotal role in my career,
            providing me with guidance, support, and invaluable insights that
            have shaped my journey as a UI/UX Designer. WIA's dedication to
            fostering mentorship resonates deeply with me, as it mirrors the
            very principles that have driven my growth and success. I am proud
            to contribute to an organization that prioritizes empowering women
            in the field of analytics through mentorship and community building.
          </p>
          <img
            src={WIA}
            alt="Screenshots of the Women in Analytics & DataConnect Conference Websites"
          />
        </div>
      </div>
    </section>
  );
};

export default WIADCC;
