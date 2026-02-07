import React from "react";
import { Link } from "react-router-dom";
import "../styles/work.scss";
import MentorcliQ1 from "../assets/mentorcliq-design-system.webp";
import WIA from "../assets/WIA-DCC-Website.png";
import UHM from "../assets/uhm-brand-websites-mockup.png";
import CommandPlastic from "../assets/CommandPlastic-Thumbnail.png";
import MatrixTradeInstitute from "../assets/Matrix-Trade-Institute-Website.png";
import AlignAI from "../assets/alignai-screenshots.png";

const Work = () => {
  return (
    <section aria-labelledby="portfolio-heading">
      <h2 id="portfolio-heading" className="visually-hidden">
        Portfolio
      </h2>
      <div className="grid-container">
        <div className="window-content window-content__static">
          <div className="window-content-container">
            <img
              className="portfolio-item-image"
              src={MentorcliQ1}
              alt="Various UI elements and components, branding guidelines, color pallette and icon examples for the MentorcliQ Design System"
            />
            <div className="window-description-container">
              <h2>MentorcliQ & CommunityCliQ</h2>
              <h3>
                Mentoring & Community SaaS | Web & Mobile App Product Design
              </h3>
              <p>
                See how end-to-end UX processes contributed to 4x revenue growth
                over five years.
              </p>
            </div>
            <Link to="/work/mentorcliq" className="details">
              Read Case Study
            </Link>
          </div>
        </div>

        <div className="window-content window-content__static">
          <div className="window-content-container">
            <img
              className="portfolio-item-image"
              src={WIA}
              alt="Screenshots of the WomenInAnalytics.com and DataConnectConf.com websites."
            />
            <div className="window-description-container">
              <h2>Women in Analytics & DataConnect</h2>
              <h3>
                Responsive Web Design for a women-led community and multiple
                conferences
              </h3>
              <p>
                Improved site architecture and consistent brand presence across
                two sites decreased overall bounce rate by 30%.
              </p>
            </div>
            <Link to="/work/wia-dcc" className="details">
              Read Case Study
            </Link>
          </div>
        </div>

        <div className="window-content window-content__static">
          <div className="window-content-container">
            <img
              className="portfolio-item-image"
              src={UHM}
              alt="Union Home Mortgage's family of brands and website screenshots mocked up inside of large and small devices."
            />
            <div className="window-description-container">
              <h2>Union Home Mortgage & Other Brands</h2>
              <h3>Responsive Website Design & Interal Product Development</h3>
            </div>
            <Link to="/work/uhm" className="details">
              Read Case Study
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="heading-container">
        <h2>Small Website Projects</h2>
      </div>
      <div className="grid-container">
        <div className="window-content window-content__static">
          <div className="window-content-container">
            <img
              className="portfolio-item-image"
              src={AlignAI}
              alt="AlignAI's website on large monitor, laptop and mobile"
            />
            <h2>AlignAI</h2>
            <h3>Responsive Website Design with Webflow, 2023-2024</h3>
          </div>
        </div>

        <div className="window-content window-content__static">
          <div className="window-content-container">
            <img
              className="portfolio-item-image"
              src={MatrixTradeInstitute}
              alt="Matrix Trade Institute Website"
            />
            <h2>Matrix Trade Institute</h2>
            <h3>Responsive Web Design with Umbraco CMS, 2019-2021</h3>
          </div>
        </div>

        <div className="window-content window-content__static">
          <div className="window-content-container">
            <img className="portfolio-item-image" src={CommandPlastic} alt="" />
            <h2>Command Plastic</h2>
            <h3>Responsive Website Design with Wordpress, 2018</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
