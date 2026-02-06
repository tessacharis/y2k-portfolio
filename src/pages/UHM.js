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
            <span class="visually-hidden">Back to Work</span>X
          </Link>
          <div className="portfolio-heading-container">
            <h1 id="portfolio-heading">Union Home Mortgage</h1>
          </div>
          <hr />
          <h2>
            Marketing Intern → Digital Marketing Specialist → Front-End
            Developer & UX Designer
          </h2>
          <h3>
            2015 – 2020 | Financial Services | Enterprise Web & Internal Tools
          </h3>
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
                  Union Home Mortgage (UHM) is a national mortgage lender
                  supporting thousands of loan officers, operations staff, and
                  partners across the U.S.
                </p>{" "}
                <p>
                  Over a five-year period, I progressed from Marketing Intern to
                  Digital Marketing Specialist, and ultimately became the
                  company’s first in-house Front-End Developer and UX Designer.
                  In this role, I bridged the gap between Marketing, IT, and
                  Operations, leading the unification of brand experiences
                  across customer-facing websites and internal software tools.
                </p>
                <blockquote>
                  "People like Tessa are few and far between. Tessa worked for
                  and with me in several capacities over a two-year stretch at
                  Union Home Mortgage. Tessa's expansive skillset is impressive
                  and consistently evolving. She's an avid learner and a
                  determined self-starter. Her skills as a marketer, designer
                  and developer combined with her strategic-thinking chops make
                  her an asset for any team. Plus, she laughs at your jokes ...
                  even the lame ones (especially the lame ones). She's a real
                  gem."
                  <cite>- Gina Simpson, Marketing Manger</cite>
                </blockquote>
              </div>
            </div>
            <div className="window-content-small">
              <div className="window-content-header">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <h2>My Work</h2>
              </div>
              <div class="window-content-small-container">
                <img
                  src={UHM}
                  alt="Screenshots various projects, including website design for Union Home Mortgage, Union Home Foundation, and Mutual Title Agency."
                />
              </div>
            </div>
            <div className="window-content-small">
              <div className="window-content-header">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <h2>Problem Space</h2>
              </div>
              <div class="window-content-small-container">
                <p>
                  As UHM scaled, its digital ecosystem became increasingly
                  fragmented:
                </p>
                <ul>
                  <li>
                    Multiple brand websites built on different CMS platforms
                  </li>
                  <li>
                    Inconsistent UI libraries (Bootstrap, Material Design, and
                    contractor-built systems)
                  </li>
                  <li>
                    Duplicated effort across marketing and engineering teams
                  </li>
                  <li>
                    Manual, error-prone operational workflows driven by Excel
                    spreadsheets
                  </li>
                  <li>
                    Internal policy documentation that was difficult to search,
                    trust, or keep up to date
                  </li>
                  <li>
                    The organization needed standardization, scalability, and
                    automation—without slowing down the business.
                  </li>
                </ul>
              </div>
            </div>
            <div className="window-content-small">
              <div className="window-content-header">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <h2>My Role</h2>
              </div>
              <div class="window-content-small-container">
                <p>As the first Front-End Developer and UX Designer, I:</p>
                <ul>
                  <li>
                    Owned design and front-end development across multiple brand
                    websites
                  </li>
                  <li>Created and maintained a company-wide design system</li>
                  <li>
                    Partnered with Marketing, IT, Operations, and Executive
                    Leadership
                  </li>
                  <li>
                    Designed and launched internal web applications used daily
                    by operations and sales teams
                  </li>
                  <li>
                    Led UX strategy, UI design, and implementation from concept
                    to launch
                  </li>
                </ul>
              </div>
            </div>
            <div className="window-content-small">
              <div className="window-content-header">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <h2>Design System & Consolidation</h2>
              </div>
              <div class="window-content-small-container">
                <ul>
                  <li>
                    I designed and implemented UHM’s first design system,
                    consolidating: Visual design standards, UI components and
                    interaction patterns, Front-end code practices
                  </li>
                  <li>
                    At the same time, I led the migration of brand websites to a
                    single CMS (Umbraco), replacing a patchwork of platforms and
                    third-party solutions.
                  </li>
                  <li>
                    Websites redesigned and rebuid include: UHM.com,
                    MutualTitleAgency.com, UHMFoundation.org, UHMDirect.com
                    (formerly vLoan.com)
                  </li>
                </ul>
              </div>
            </div>
            <div className="window-content-small">
              <div className="window-content-header">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <h2>Revenue-Focus Web Optimization</h2>
              </div>
              <div class="window-content-small-container">
                <p>
                  I managed and led multiple website redesign and optimization
                  efforts focused on:
                </p>
                <ul>
                  <li>
                    Performance improvements, conversion optimization, clear
                    user flows for lead generation
                  </li>
                  <li>
                    Key initiatives resulted in:{" "}
                    <strong>45% lead conversion rate</strong>,{" "}
                    <strong>+21% improvement</strong> over the original lead
                    generation site
                  </li>
                </ul>
              </div>
            </div>
            <div className="window-content-small">
              <div className="window-content-header">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <h2>Product Design & Automation</h2>
              </div>
              <div class="window-content-small-container">
                <p>
                  In addition to customer-facing work, I designed and launched
                  several internal tools:
                </p>
                <p>
                  <b>Ask Alice (Internal Search Engine)</b>
                </p>
                <ul>
                  <li>
                    An internal search tool leveraging early AI / LLM-style
                    logic (pre-2020)
                  </li>
                  <li>Simple, focused UI optimized for speed and trust</li>
                  <li>
                    Guided users through content trees to surface accurate loan
                    policies and procedures
                  </li>
                  <li>
                    Ensured employees always accessed the most current
                    documentation
                  </li>
                </ul>
                <p>
                  This reduced confusion, improved compliance, and saved time
                  across operations teams.
                </p>
                <p>
                  <b>Operations & Loan Assignment App</b>
                </p>
                <ul>
                  <li>
                    Replaced Excel-based workflows with a live web application
                  </li>
                  <li>
                    Automated loan assignment and operational processes within
                    Encompass
                  </li>
                  <li>
                    Ensured data was always current, reducing errors and manual
                    overhead
                  </li>
                  <li>
                    Improved visibility and accountability for management and
                    operations teams
                  </li>
                </ul>
              </div>
            </div>
            <div className="window-content-small">
              <div className="window-content-header">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <h2>Evangelism & Adoption</h2>
              </div>
              <div class="window-content-small-container">
                <img
                  src={Pres}
                  alt="An image of me presenting to the company at Playhouse Square in Cleveland, OH. Behind me is a slideshow and picture of me as pre-teen sitting in front of the computer, showcasing my love of tech since I was a kid."
                />
                <ul>
                  <li>
                    Announced and demoed internal product live launches at UHM’s
                    annual partner meeting at Playhouse Square in Cleveland, Ohio
                  </li>
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
