import { Link } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import headshot from "../assets/tessa-newbacher-headshot.jpg";
import hello from "../assets/hello.png";
import "../styles/home.scss"; // Reuse homepage styles for consistent layout logic

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
    <div className="home-page-content" ref={container} style={{ paddingBottom: "0px" }}>

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
        <div aria-label="about-me" className="window-container" style={{ marginTop: "40px" }}>
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
                  <h2 style={{ fontSize: "1.8rem", marginBottom: "15px", color: "#320b86" }}>Senior UI/UX Designer & Front-End Developer</h2>
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
        <div style={{ maxWidth: "1400px", margin: "80px auto" }}>
          <div>
            <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "30px", color: "#320b86" }}>
              The Tool Stack
            </h2>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "15px",
              maxWidth: "1000px",
              margin: "0 auto"
            }}>
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
                <span key={index} style={{
                  padding: "10px 20px",
                  border: "3px solid #320b86",
                  boxShadow: "4px 4px 0px #AAEA01",
                  backgroundColor: "#fff",
                  fontWeight: "bold",
                  color: "#320b86",
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section aria-label="success-metrics" className="services-section" style={{ padding: "80px 20px" }}>
        <div className="services-content-wrapper">
          <h2 className="services-heading" style={{ fontSize: "2.5rem" }}>Proven Results & Success Metrics</h2>
          <p style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", fontSize: "1.2rem" }}>
            Design and development are only as good as the impact they generate. Here are some of the measurable outcomes I've delivered for my clients.
          </p>
          <div className="services-grid" style={{ marginTop: "40px" }}>

            <div className="service-card" style={{ padding: "30px", backgroundColor: "#fff", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div className="service-card-header" style={{ borderBottom: "none", paddingBottom: "0px", justifyContent: "flex-start" }}>
                <span style={{ fontSize: "3rem", color: "#FF007F", fontWeight: "900", lineHeight: "1" }}>4x</span>
              </div>
              <div className="service-card-body" style={{ padding: "0px" }}>
                <h3 style={{ fontSize: "1.4rem", color: "#320b86", margin: "10px 0" }}>Revenue Growth at MentorcliQ</h3>
                <p>
                  Contributed to sustainable ARR growth over 5 years by implementing scalable UX processes and design systems that improved software adoptability for global enterprises.
                </p>
              </div>
            </div>

            <div className="service-card" style={{ padding: "30px", backgroundColor: "#fff", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div className="service-card-header" style={{ borderBottom: "none", paddingBottom: "0px", justifyContent: "flex-start" }}>
                <span style={{ fontSize: "3rem", color: "#FF007F", fontWeight: "900", lineHeight: "1" }}>-30%</span>
              </div>
              <div className="service-card-body" style={{ padding: "0px" }}>
                <h3 style={{ fontSize: "1.4rem", color: "#320b86", margin: "10px 0" }}>Bounce Rate for WIA</h3>
                <p>
                  Restructured site architecture and optimized responsive web designs for multiple heavily trafficked conference sites, significantly improving memberships and ticket sales.
                </p>
              </div>
            </div>

            <div className="service-card" style={{ padding: "30px", backgroundColor: "#fff", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div className="service-card-header" style={{ borderBottom: "none", paddingBottom: "0px", justifyContent: "flex-start" }}>
                <span style={{ fontSize: "3rem", color: "#FF007F", fontWeight: "900", lineHeight: "1" }}>+50%</span>
              </div>
              <div className="service-card-body" style={{ padding: "0px" }}>
                <h3 style={{ fontSize: "1.4rem", color: "#320b86", margin: "10px 0" }}>Development Speed at UHM</h3>
                <p>
                  Created and deployed an internal design system that standardized UI components cross-brand, drastically reducing development and QA time on all subsequent projects.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA identical to the Homepage */}
      <section aria-label="call-to-action" className="cta-section" style={{ padding: "80px 20px" }}>
        <div className="cta-content-wrapper" style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ padding: "40px", backgroundColor: "#fff", boxShadow: "5px 5px 0px #000", border: "5px solid #000" }}>
            <div className="layout-split-1-3">
              <div className="col-1" style={{ flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start" }}>
                <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Can we create something beautiful?</h2>
                <p><strong>Senior Consultant & Developer | 10+ Years Experience</strong></p>
                <p>
                  I partner with companies to turn complex problems into elegant, scalable digital solutions. From strategic planning and UX design to full-stack development, I deliver end-to-end impact.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "20px 0" }}>
                  <li style={{ marginBottom: "10px" }}>US-based (EST Time Zone)</li>
                  <li><a href="mailto:tessacharis@gmail.com" style={{ textDecoration: "underline", color: "#320b86" }}>tessacharis@gmail.com</a></li>
                </ul>
                <Link to="/help" className="button-primary" style={{ marginTop: "10px", width: "100%", textAlign: "center", boxSizing: "border-box" }}>
                  Book a Consultation
                </Link>
              </div>

              <div className="col-2">
                <h3 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>Dive Deeper</h3>
                <div className="links-list" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  <Link to="/blog" style={{ padding: "20px", border: "3px solid #AAEA01", textDecoration: "none", color: "#320b86", fontWeight: "bold", backgroundColor: "#f9f9f9", transition: "0.2s ease" }} className="cta-link-item">
                    View All Blog Posts & Resources
                  </Link>
                  <Link to="/work/mentorcliq" style={{ padding: "20px", border: "3px solid #AAEA01", textDecoration: "none", color: "#320b86", fontWeight: "bold", backgroundColor: "#f9f9f9", transition: "0.2s ease" }} className="cta-link-item">
                    MentorcliQ Case Study: Contributed to 4x revenue growth over 5 years
                  </Link>
                  <Link to="/work/wia-dcc" style={{ padding: "20px", border: "3px solid #AAEA01", textDecoration: "none", color: "#320b86", fontWeight: "bold", backgroundColor: "#f9f9f9", transition: "0.2s ease" }} className="cta-link-item">
                    Women in Analytics Case Study: Decreased overall bounce rate by 30%
                  </Link>
                  <Link to="/work/uhm" style={{ padding: "20px", border: "3px solid #AAEA01", textDecoration: "none", color: "#320b86", fontWeight: "bold", backgroundColor: "#f9f9f9", transition: "0.2s ease" }} className="cta-link-item">
                    Union Home Mortgage Case Study: Creating a design system from disjointed websites and products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
