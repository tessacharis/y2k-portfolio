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
            <span class="visually-hidden">Back to Work</span>X
          </Link>
          <div className="portfolio-heading-container">
            <h1 id="portfolio-heading">
              Women in Analytics / DataConnect Conference
            </h1>
            <span className="badge">Currently Freelancing</span>
          </div>
          <hr />
          <h2>Freelance Senior Website Designer & Developer</h2>
          <h3>2023 - 2025 | Marketing & Community Websites | Webflow</h3>
          <div className="window-content-grid">
            <div className="window-content-small">
              <div className="window-content-header">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <h2>Overview</h2>
              </div>
              <div class="window-content-small-container">
                <p>
                  Women in Analytics (WIA) is a global nonprofit dedicated to
                  empowering women in the analytics field through education,
                  mentorship, and community. DataConnect Conference is WIA’s
                  flagship analytics conference, hosting events across multiple
                  cities and regions.
                </p>
                <p>
                  I partner with the WIA team on a part-time freelance basis to
                  redesign and evolve both WomenInAnalytics.com and
                  DataConnectConf.com, creating a cohesive, scalable web
                  experience that supports community growth, conference
                  expansion, and content accessibility.
                </p>
                <p>As a Freelance Website Designer, I:</p>
                <ul>
                  <li>
                    Led UX strategy, information architecture, and visual design
                  </li>
                  <li>Designed and built pages directly in Webflow</li>
                  <li>
                    Balanced marketing, content, and operational needs across
                    two connected websites
                  </li>
                  <li>
                    Ensured accessibility, responsiveness, and
                    conversion-focused design
                  </li>
                </ul>
              </div>
            </div>
            <div className="window-content-small">
              <div className="window-content-header">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <h2>Websites</h2>
              </div>
              <div class="window-content-small-container">
                <img
                  src={WIA}
                  alt="Screenshots of the Women in Analytics & DataConnect Conference Websites"
                />
                <div className="row">
                  <Link
                    className="details"
                    to="https://www.womeninanalytics.com"
                    target="_blank">
                    WomenInAnalytics.com
                  </Link>
                  &nbsp;&nbsp;
                  <Link
                    className="details"
                    to="https://www.dataconnectconf.com"
                    target="_blank">
                    DataConnectConf.com
                  </Link>
                </div>
              </div>
            </div>
            <div className="window-content-small">
              <div className="window-content-header">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <h2>Results</h2>
              </div>
              <div class="window-content-small-container">
                <p>
                  Improved information architecture, clearer page hierarchy, and
                  intent-driven UX reduced friction between Agenda → Register,
                  directly supporting ticket sales for DataConnect Columbus and
                  the new DCCWest event.
                </p>
                <ul>
                  <li>
                    <strong>Increased Page Views by 37%</strong> // 117K (2025)
                    vs 85K (2023)
                  </li>
                  <li>
                    <strong>Decreased Overall Bounce Rate by 27%</strong> //
                    37.1% (2025) vs 50.7% (2023)
                  </li>
                  <li>
                    <strong>
                      Decreased Register Page Overall Bounce Rate by 92%
                    </strong>{" "}
                    // 5.1% (2025) vs 66.8% (2023)
                  </li>
                  <li>
                    <strong>Increased overall High-Intent Engagement</strong> //
                    Agenda Avg Time: up to 2m 23s (register-adjacent evaluation
                    page)
                  </li>
                </ul>
              </div>
            </div>
            <div className="window-content-small">
              <div className="window-content-header">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <h2>Additional Website Features</h2>
              </div>
              <div class="window-content-small-container">
                <p>
                  In addition tor evamping the overall site structure and
                  estalishing a consistent visual language across community and
                  conference sites, I also created several several unique
                  features throughout the websites.
                </p>
                <h3>Gated Content & Advanced Search:</h3>
                <p>
                  To improve access to educational content, I designed and
                  built:
                </p>
                <ul>
                  <li>
                    Password-protected pages for the video conference library
                  </li>
                  <li>
                    Advanced search and filtering using Finsweet to help users
                    quickly find relevant sessions
                  </li>
                </ul>
                <h3>Speakers Bureau Experience</h3>
                <ul>
                  <li>Searchable list of available speakers</li>
                  <li>
                    Individual speaker profiles with bios, expertise, and brief
                    resumes
                  </li>
                  <li>Transparent pricing information for booking inquiries</li>
                </ul>
              </div>
            </div>
            <h2>Interested in learning more?</h2>
            <Link to="/help" className="details">
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WIADCC;
