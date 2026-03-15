import { Link } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import headshot from "../assets/tessa-newbacher-headshot.jpg";
import hello from "../assets/hello.png";
import "../styles/home.scss"; // Reuse homepage styles for consistent layout logic
import "../styles/about.scss";

const About = () => {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.set(".glitch-title", { opacity: 1 })
      .to(".glitch-title", { opacity: 1, x: -10, skewX: 10, duration: 0.1, delay: 0.5 })
      .to(".glitch-title", { opacity: 0.2, x: 10, skewX: -10, duration: 0.02 })
      .to(".glitch-title", { opacity: 1, x: -5, skewX: 20, duration: 0.1 })
      .to(".glitch-title", { opacity: 0, x: 5, skewX: -20, duration: 0.05 })
      .to(".glitch-title", { opacity: 1, x: 0, skewX: 0, duration: 0.2 });
  }, { scope: container });

  return (
    <div className="home-page-content about-page-content" ref={container}>

      <section aria-label="hero-title" className="hero hero-about">
        <div className="hero-content-container">
          <h1 id="hero-title" className="glitch-title" data-text="Hi, I'm Tessa!">
            Hi, I'm Tessa!
          </h1>
          <p>
            I've been designing and building digital experiences for over 10 years, and I'd love to help you bring your ideas to life.
          </p>
          <div className="row">
            <Link to="/help" className="button-primary">
              Book Consultation
            </Link>
            <Link to="/work" className="button-secondary">
              View My Work
            </Link>
          </div>
        </div>
        <div aria-label="about-me" className="window-container about-me-window">
          <div className="window-content">
            <div className="window-content-container">

              <div className="layout-split-1-3">
                <div className="col-1 headshot-container">
                  <img
                    className="headshot"
                    src={headshot}
                    alt="Tessa Newbacher's headshot, blonde white woman smiling with a green beaded necklace"
                  />
                  <img
                    className="hello"
                    src={hello}
                    alt="A word bubble with pixellated font that says 'HELLO'"
                  />
                </div>

                <div className="col-2 about-me-content-container">
                  <h2>Senior UI/UX Designer & Front-End Developer</h2>
                  <p>
                    I'm a seasoned designer and developer with over <strong>10 years of expertise crafting digital experiences</strong> that drive real business results. Throughout my career, I've lived at the intersection of design, technology, and strategy, specializing in building products that are beautiful, intuitive, and highly functional.
                  </p>
                  <p>
                    As the first in-house UX Designer at <strong>MentorcliQ</strong>, I introduced essential design processes and scaling strategies, partnering with international engineering teams to shape HR technology used by global enterprises. Before that, at <strong>Union Home Mortgage</strong>, I transitioned from marketing to become their inaugural front-end developer and UX designer—launching a comprehensive design system that accelerated web projects by 50%.
                  </p>
                  <p>
                    When I'm not pushing pixels or writing code, you can find me doing DIY home projects, playing rugby, gardening, or volunteering with LGBTQ+ youth in my community.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Tool Stack Section */}
        <div className="tool-stack-section">
          <div>
            <h2 className="tool-stack-heading">
              The Tool Stack
            </h2>
            <div className="tool-stack-grid">
              {[
                "HTML, CSS, JS",
                "React.js",
                "React Native",
                "Storybook",
                "Umbraco CMS + .NET",
                "Wordpress, Drupal + PHP",
                "Hubspot CMS + HubL",
                "Unbounce",
                "Adobe Creative Suite",
                "Figma",
                "Framer",
                "Webflow",
                "Wix",
                "SVG Animation",
                "Digital Photography",
                "User Research",
                "Usability Testing",
                "Design Systems",
                "Inbound + Digital Marketing",
                "Google Analytics",
                "Client Services",
                "Content Strategy + SEO",
                "Leadership + Mentorship"
              ].map((skill, index) => (
                <span key={index} className="tool-stack-item">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section aria-label="success-metrics" className="services-section success-metrics-section">
        <div className="services-content-wrapper">
          <h2 className="services-heading success-metrics-heading">Proven Results & Success Metrics</h2>
          <p className="success-metrics-description">
            Design and development are only as good as the impact they generate. Here are some of the measurable outcomes I've delivered for my clients.
          </p>
          <div className="services-grid success-metrics-grid">

            <div className="service-card success-metrics-card">
              <div className="service-card-header success-metrics-card-header">
                <span className="success-metrics-number">4x</span>
              </div>
              <div className="service-card-body success-metrics-card-body">
                <h3 className="success-metrics-card-title">Revenue Growth at MentorcliQ</h3>
                <p>
                  Contributed to sustainable ARR growth over 5 years by implementing scalable UX processes and design systems that improved software adoptability for global enterprises.
                </p>
              </div>
              <Link to="/work/mentorcliq" className="button-primary success-metrics-button">
                View Project
              </Link>
            </div>

            <div className="service-card success-metrics-card">
              <div className="service-card-header success-metrics-card-header">
                <span className="success-metrics-number">+30%</span>
              </div>
              <div className="service-card-body success-metrics-card-body">
                <h3 className="success-metrics-card-title">Engagement Rate for WIA</h3>
                <p>
                  Restructured site architecture and optimized responsive web designs for multiple heavily trafficked conference sites, significantly improving memberships and ticket sales.
                </p>
              </div>
              <Link to="/work/wia-dcc" className="button-primary success-metrics-button">
                View Project
              </Link>
            </div>

            <div className="service-card success-metrics-card">
              <div className="service-card-header success-metrics-card-header">
                <span className="success-metrics-number">+50%</span>
              </div>
              <div className="service-card-body success-metrics-card-body">
                <h3 className="success-metrics-card-title">Development Speed at UHM</h3>
                <p>
                  Created and deployed an internal design system that standardized UI components cross-brand, drastically reducing development and QA time on all subsequent projects.
                </p>
              </div>
              <Link to="/work/uhm" className="button-primary success-metrics-button">
                View Project
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
