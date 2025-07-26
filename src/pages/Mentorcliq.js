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
            &#8592; Back to Work
          </Link>
          <div className="portfolio-heading-container">
            <h1 id="portfolio-heading">MentorcliQ & CommunityCliQ</h1>
            <span className="badge">Happily Employed</span>
            <p>
              <Link to="https://www.mentorcliq.com" target="_blank">
                Go to MentorcliQ.com
              </Link>
            </p>
          </div>
          <h2>Senior UI/UX Product Designer</h2>
          <h3>
            Oct 2020 - Present | Mentoring SaaS | Web & Mobile App Product
            Design
          </h3>
          <p>
              I'm currently the Senior UI/UX Product Designer at MentorcliQ, a
              mentoring software solution that helps organizations launch,
              support, and grow high-impact employee mentoring programs. As the
              first designer on our product team, I've introduced design systems
              and processes and worked with international engineering teams for
              both MentorcliQ and CommunityCliQ products. Supported engineering
              teams during major platform migrations, from Drupal7 to a
              Spring/React environment, and spearheaded the design and development of a
              Storybook component library.
            </p>
          <p>
            I joined MentorcliQ as the first UI/UX Designer and established our
            UX design processes, and implemented a React.js/Storybook design
            system alongside our engineering team.
            <p>
              <b>My proudest accomplishments include:</b>
            </p>
            <ol>
              <li>
                Supported engineering teams during major platform migrations,
                from Drupal7 to a Spring/React environment, and spearheaded
                the design and development of a Storybook component library.
              </li>
              <li>
                Established foundational design processes, from user research
                and usability testing to the development of a robust design
                system utilizing Framer, React.js, and Storybook.
              </li>
              <li>
                Led the redesign of the CommunityCliQ (formerly Diverst)
                platform post-acquisition, working closely with engineering
                teams in Canada and Armenia to seamlessly integrate our design
                system into a legacy product.
              </li>
            </ol>
          </p>
          <hr />
          <h2>MentorcliQ & CommunityCliQ</h2>
          <p>
            <img
              src={MentorcliQ3}
              alt="Screenshots of the MentorcliQ product on laptop, tablet and mobile app."
              className="mq-small-image"
            />
            MentorcliQ's mentoring software solution that helps organizations
            launch, support, and grow high-impact employee mentoring programs.
            Our approach drives employee participation and satisfaction through
            an engaging user experience and supporting training resources.
            MentorcliQ makes it easy to manage multiple mentoring and talent
            development programs from a single place.
            <br />
            CommunityCliQ is employee community software that helps
            organizations support their networks and ERGs to connect global
            workforces and track impact on engagement, retention and belonging.
          </p>
          <hr />
          <h2>Design System</h2>
          <img
            src={MentorcliQ1}
            alt="Various UI elements and components, branding guidelines, color pallette and icon examples for the MentorcliQ Design System"
          />
          <p>
            Using a combination of design software (Adobe, Figma, Framer) and
            React.js, I had a hand in designing every component of the design
            system. Follwing Brad Frost's Atomic Design principles in my work,
            each component exists as its own element alongside robust
            documentation on how each atom comes together to create molecules,
            such as forms, tables, and your typical SaaS product dashboard
            elements.
          </p>
          <img
            src={MentorcliQ2}
            alt="Various screenshots of the MentorcliQ Product - including the participant and admin dashboards, tables, timelines, videos, rich text editors, progress loader bars, and more."
          />
          <p>
            From complex admin dashboards and reports to simple user-facing
            surveys, forms, and to-do lists, MentorcliQ's design system
            encompasses UI elements and design decisions used across both
            MentorcliQ and CommunityCliQ to create a cohesive sofware family for
            company's mentoring programs and employee resource group community
            building.
          </p>
          <img
            className="mq-small-image"
            src={Pres}
            alt="Tessa is standing in front of a projected screen talking through a slide presentation about Design Systems at MentorcliQ Armenia."
          />
        </div>
      </div>
    </section>
  );
};

export default MentorcliQ;
