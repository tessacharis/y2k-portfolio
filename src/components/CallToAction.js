import React from "react";
import { Link } from "react-router-dom";
import "../styles/calltoaction.scss";

export const CallToAction = ({ bordered = false }) => {
  return (
    <section aria-label="call-to-action" className="cta-section">
      <div className="cta-content-wrapper">
        <div className={`cta-inner ${bordered ? "cta-inner--bordered" : ""}`.trim()}>
          <h2 className="cta-heading">Can we create something beautiful?</h2>
          <div className="layout-split-1-3">
            <div className="col-1 cta-col-1">
              <h3 className="cta-subheading">Tessa Newbacher</h3>
              <p><strong>Senior Consultant & Developer | 10+ Years Experience</strong></p>
              <p>
                I partner with companies to turn complex problems into elegant, scalable digital solutions. From strategic planning and UX design to full-stack development, I deliver end-to-end impact.
              </p>
              <ul className="cta-list">
                <li className="cta-list-item">US-based (EST Time Zone)</li>
                <li><a href="mailto:tessacharis@gmail.com" className="cta-link">tessacharis@gmail.com</a></li>
              </ul>
              <Link to="/help" className="button-primary cta-button">
                Book a Consultation
              </Link>
            </div>

            <div className="col-2">
              <div className="cta-links-list">
                <Link to="/blog" className="cta-link-item">
                  View All Blog Posts & Resources
                </Link>
                <Link to="/work/mentorcliq" className="cta-link-item">
                  MentorcliQ Case Study: Contributed to 4x revenue growth over 5 years
                </Link>
                <Link to="/work/wia-dcc" className="cta-link-item">
                  Women in Analytics Case Study: Decreased overall bounce rate by 30%
                </Link>
                <Link to="/work/uhm" className="cta-link-item">
                  Union Home Mortgage Case Study: Creating a design system from disjointed websites and products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
