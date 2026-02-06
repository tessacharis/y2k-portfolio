import { Link } from "react-router-dom";
import "../styles/work.scss";
import MentorcliQ1 from "../assets/mentorcliq-design-system.webp";
import MentorcliQ2 from "../assets/mentorcliq-design-system2.webp";
import MentorcliQ3 from "../assets/mentorcliq-screenshots.png";
import Pres from "../assets/cliq-fest-ds-presentation-armenia.jpg";

const MentorcliQ = () => {
  return (
    <section className="portfolio-item" aria-labelledby="portfolio-heading">
      <div className="window-content">
        <div className="window-content-container">
          <Link to="/work" className="back-button">
            <span class="visually-hidden">Back to Work</span>X
          </Link>
          <div className="portfolio-heading-container">
            <h1 id="portfolio-heading">MentorcliQ & CommunityCliQ</h1>
            <span className="badge">Happily Employed</span>
            <p>
              <Link to="https://www.mentorcliq.com" target="_blank">
                MentorcliQ.com
              </Link>
            </p>
          </div>
          <h2>Senior UI/UX Product Designer</h2>
          <h3>Oct 2020 - Present | B2B Mentoring SaaS | Web & Mobile</h3>
          <div className="window-content-grid">
            <div className="window-content-small">
              <div className="window-content-header">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <h2>The Company</h2>
              </div>
              <div class="window-content-small-container">
                <p>
                  MentorcliQ is a mentoring software platform that helps
                  organizations launch, manage, and scale high-impact employee
                  mentoring and talent development programs.
                </p>
                <p>
                  CommunityCliQ (formerly Diverst) supports employee communities
                  and ERGs, helping global organizations track impact on
                  engagement, retention, and belonging.
                </p>
                <p>
                  I joined MentorcliQ as the first in-house UI/UX designer when
                  the company was at <strong>$5M ARR</strong>. Over the past
                  five years, the company has grown to <strong>$20M</strong>{" "}
                  ARR, consistently winning enterprise deals over competitors
                  due to{" "}
                  <strong>
                    strong product capabilities, intuitive UX, and close
                    collaboration between Product, Engineering, and Customer
                    Success teams
                  </strong>
                  .
                </p>
              </div>
            </div>
            <div className="window-content-small">
              <div className="window-content-header">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <h2>The Software</h2>
              </div>
              <div
                class="window-content-small-container"
                style={{ textAlign: "center" }}>
                <img
                  src={MentorcliQ3}
                  alt="Screenshots of the MentorcliQ product on laptop, tablet and mobile app."
                  className="mq-small-image"
                />
              </div>
            </div>
            <div className="window-content-small">
              <div className="window-content-header">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <h2>Impact // Business Outcomes</h2>
              </div>
              <div class="window-content-small-container">
                <ul>
                  <li>
                    Contributed to <strong>4× revenue growth</strong> over 5
                    years by strengthening product usability, scalability, and
                    enterprise readiness
                  </li>
                  <li>
                    Helped MentorcliQ Revenue teams consistently{" "}
                    <strong>win competitive deals</strong> through
                    differentiated product experience and AI-driven capabilities
                  </li>
                  <li>
                    Partner closely with <strong>Customer Success teams</strong>{" "}
                    to uncover user pain points and turn insights into shipped
                    product improvements
                  </li>
                  <li>
                    Translate <strong>customer listening sessions</strong>{" "}
                    directly into roadmap decisions, feature prioritization, and
                    UX refinements
                  </li>
                </ul>
              </div>
            </div>
            <div className="window-content-small">
              <div className="window-content-header">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <h2>Product // UX Leadership</h2>
              </div>
              <div class="window-content-small-container">
                <ul>
                  <li>
                    Established <strong>end-to-end UX design</strong> processes
                    including user research, usability testing, and iterative
                    validation
                  </li>
                  <li>
                    Introduced and scaled a{" "}
                    <strong>React + Storybook design system</strong>, enabling
                    faster development and consistent UI across products
                  </li>
                  <li>
                    Supported engineering teams during a major platform
                    migration from Drupal 7 to a Spring / React architecture
                  </li>
                  <li>
                    Worked with international engineering teams across the U.S.,
                    Canada, and Armenia
                  </li>
                </ul>
              </div>
            </div>
            <div className="window-content-small">
              <div className="window-content-header">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <h2>AI // Emerging Features</h2>
              </div>
              <div class="window-content-small-container">
                <ul>
                  <li>
                    <strong>SmartSteps</strong>: AI-guided workflows that help
                    mentors and mentees navigate their relationship and stay on
                    track
                  </li>
                  <li>
                    <strong>CliQ AI</strong>: Particantp-facing AI assistant for
                    in-product guidance and supprot
                  </li>
                  <li>
                    <strong>Admin AI</strong>: AI Assitant for administrators to
                    surface insights, manage programs and reduce operational
                    overhead
                  </li>
                  <li>
                    <strong>Content Generation with AI</strong>: Provided AI
                    Assitants embedded within user workflows to help them
                    generate goals, meeting agendas and more as they progress
                    through the mentoring relationship
                  </li>
                  <li>
                    Designed the <strong>MentorcliQ Help Center</strong> within
                    the Zendesk environment, improving self-service support and
                    reducing support requests
                  </li>
                </ul>
              </div>
            </div>
            <div className="window-content-small">
              <div className="window-content-header">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <h2>Design System Implementation</h2>
              </div>
              <div class="window-content-small-container">
                <img
                  src={MentorcliQ1}
                  alt="Various UI elements and components, branding guidelines, color pallette and icon examples for the MentorcliQ Design System"
                />
              </div>
            </div>
            <div className="window-content-small">
              <div className="window-content-header">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <h2>Components // Documentation</h2>
              </div>
              <div class="window-content-small-container">
                <img
                  src={MentorcliQ2}
                  alt="Various screenshots of the MentorcliQ Product - including the participant and admin dashboards, tables, timelines, videos, rich text editors, progress loader bars, and more."
                />
              </div>
            </div>
            <div className="window-content-small">
              <div className="window-content-header">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <h2>Presentations // Team Training</h2>
              </div>
              <div class="window-content-small-container">
                <img
                  className="mq-small-image"
                  src={Pres}
                  alt="Tessa is standing in front of a projected screen talking through a slide presentation about Design Systems at MentorcliQ Armenia."
                />
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

export default MentorcliQ;
