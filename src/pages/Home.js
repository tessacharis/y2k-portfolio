import { Link } from "react-router-dom";
import { DraggableWindow } from "../components/DraggableWindow";
import { Marquee } from "../components/Marquee.js";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ReactGA from "react-ga4";
import { client, urlFor } from "../sanityClient";
import { PortableText } from "@portabletext/react";
import headshot from "../assets/tessa-newbacher-headshot.jpg";
import hello from "../assets/hello.png";
import { RetroLoader } from "../components/RetroLoader.js";
import "../styles/home.scss";

gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({ title, children, isChecked, onToggle }) => {
  const cardId = `service-checkbox-${title.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    onToggle(title, checked);
    ReactGA.event({
      category: "Engagement",
      action: "Service Card Checkbox Toggle",
      label: title,
      value: checked ? 1 : 0
    });
  };

  return (
    <label
      htmlFor={cardId}
      className={`service-card ${isChecked ? "inverted" : ""}`}
    >
      <div className="service-card-header">
        <input
          id={cardId}
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="close-btn"
          aria-label={`Select ${title}`}
        />
        <span className="service-card-title">{title}</span>
      </div>
      <div className="service-card-body">
        {children}
      </div>
    </label>
  );
};

const Home = () => {
  const container = useRef();
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);

  useEffect(() => {
    const getRecentBlogs = async () => {
      try {
        const query = `*[_type == "post"] | order(publishDate desc)[0...2] {
          _id,
          headline,
          slug,
          publishDate,
          image,
          summary
        }`;
        const posts = await client.fetch(query);
        setRecentBlogs(posts);
      } catch (error) {
        console.error("Error fetching recent blogs:", error);
      }
    };
    getRecentBlogs();
  }, []);

  const handleToggleTopic = (title, isChecked) => {
    if (isChecked) {
      setSelectedTopics((prev) => [...prev, title]);
    } else {
      setSelectedTopics((prev) => prev.filter((t) => t !== title));
    }
  };

  const getButtonText = () => {
    if (selectedTopics.length === 0) return "Let's Talk";

    const topics = selectedTopics.map(t => t.trim());

    if (topics.length === 1) return `Let's talk about ${topics[0]}`;
    if (topics.length === 2) return `Let's talk about ${topics[0]} & ${topics[1]}`;
    if (topics.length === 3) return `Let's talk about ${topics[0]}, ${topics[1]} & ${topics[2]}`;

    return `Let's talk about ${topics[0]}, ${topics[1]}, ${topics[2]} +${topics.length - 3} more`;
  };

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.set(".glitch-title", { opacity: 1 })
      .to(".glitch-title", { opacity: 1, x: -10, skewX: 10, duration: 0.1, delay: 0.5 })
      .to(".glitch-title", { opacity: 0.2, x: 10, skewX: -10, duration: 0.02 })
      .to(".glitch-title", { opacity: 1, x: -5, skewX: 20, duration: 0.1 })
      .to(".glitch-title", { opacity: 0, x: 5, skewX: -20, duration: 0.05 })
      .to(".glitch-title", { opacity: 1, x: 0, skewX: 0, duration: 0.2 });
  }, { scope: container, dependencies: [recentBlogs] });

  return (
    <div className="home-page-content" ref={container}>
      <section aria-label="hero-title" className="hero">
        <div class="hero-content-container">
          <h1 id="hero-title" className="glitch-title" data-text="From Idea to Production">
            From Idea to Production
          </h1>
          <h2>Design && Code && Strategy</h2>
          <p>
            Hi, I'm Tessa Newbacher — a rare mix of UI/UX designer, front-end developer, and product strategist. Instead of managing three vendors, you get one expert who thinks holistically across the whole stack and ships work to reach your business goals.
          </p>
          <div class="row">
            <Link to="/help" className="button-primary">
              Book Consultation
            </Link>
            <Link to="/work" className="button-secondary">
              View My Work
            </Link>
          </div>
        </div>
        <div aria-label="what-i-do" className="window-container">
          <div className="window-content">
            <div className="window-content-container">
              <h2 id="what-i-do" style={{ textAlign: "center", marginBottom: "30px" }}>A trusted & strategic partner for your brand's digital experience</h2>
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
                  <p>
                    Often in my career I've been called a unicorn. A UX generalist who can strategically plan the information architecture, conversion funnels, design and brand, while bringing it all to life with code while maintiaining and optimizing it post-production.
                  </p>
                  <p>
                    I've spent over a decade of my career living at the intersection of digital design and computer science since the MySpace days of the early 2000s. At every company I've worked with, my job was to see the bigger picture of our brand and digital experience and put it together piece-by-piece. First in-house UX designer at 3000+ person fintech company. Design system builder. Web developer. Strategist.
                  </p>
                  <p>
                    When you work with me, you get someone who speaks every language in the room: design, development, user psychology, and business outcomes. That means thoughtful decisions, attention-to-detail in every aspect of the work, and a lot less on your shoulders.
                  </p>
                </div>
              </div>

              <div className="row" style={{ marginTop: "40px" }}>
                <Link to="/work" className="button-secondary">
                  Read My Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="services" className="services-section">
        <div className="services-content-wrapper">
          <h2 id="services-heading" className="services-heading">Capabilities & Services</h2>
          <p style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>Select which services you're interested in to see how I can help.</p>
          <div className="services-grid">

            <ServiceCard title="Strategy & UX" isChecked={selectedTopics.includes("Strategy & UX")} onToggle={handleToggleTopic}>
              <p>Turn fuzzy ideas into clear, validated product direction. Competitive research, user flows, wireframes, and experience strategy that gives your team a roadmap to success.</p>
            </ServiceCard>

            <ServiceCard title="UI & Visual Design" isChecked={selectedTopics.includes("UI & Visual Design")} onToggle={handleToggleTopic}>
              <p>Interfaces that look intentional, feel effortless, and hold up at every screen size. Design systems, brand-aligned components, and high-fidelity prototypes built to hand straight to dev (or I build it myself).</p>
            </ServiceCard>

            <ServiceCard title="Front-end Development" isChecked={selectedTopics.includes("Front-end Development")} onToggle={handleToggleTopic}>
              <p>Clean, performant, accessible code that turns designs into real products. React, modern CSS, component libraries — I build the front end I design, which means nothing gets lost in translation.</p>
            </ServiceCard>

            <ServiceCard title="Website Design & Development" isChecked={selectedTopics.includes("Website Design & Development")} onToggle={handleToggleTopic}>
              <p>From landing pages to full CMS-powered sites, I design and build websites end-to-end. SEO-conscious, conversion-focused, and built to represent your brand with clean code and attention to detail.</p>
            </ServiceCard>

            <ServiceCard title="Design Systems" isChecked={selectedTopics.includes("Design Systems")} onToggle={handleToggleTopic}>
              <p>Consistent visual and code standards that scale with your company. Whether you're starting from zero or untangling an inconsistent existing system, I build the foundation your team will <em>love</em> to use.</p>
            </ServiceCard>

            <ServiceCard title="Mentorship or Coaching" isChecked={selectedTopics.includes("Mentorship or Coaching")} onToggle={handleToggleTopic}>
              <p>If you're a student or early in your career, I'm happy to help provide guidance, support and clarity if you're struggling to find your way. Mentors have helped me through every part of my career and I'm grateul to share that knowledge with others.</p>
            </ServiceCard>

          </div>
          <div className="row" style={{ marginTop: "40px" }}>
            <Link to="/help" className="button-primary" style={{ textAlign: "center" }}>
              {getButtonText()}
            </Link>
          </div>
        </div>
      </section>
      <section aria-label="testimonials" className="testimonials-section">
        <div className="testimonials-content-wrapper">
          <h2 id="testimonials-heading" className="testimonials-heading">Testimonials</h2>
          <p style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>I've worked with some really great people.</p>
          <div class="testimonials-grid">
            <blockquote>
              <p>
                "People like Tessa are few and far between. Tessa worked for
                and with me in several capacities over a two-year stretch at
                Union Home Mortgage. Tessa's expansive skillset is
                impressive and consistently evolving. She's an avid learner
                and a determined self-starter. Her skills as a marketer,
                designer and developer combined with her strategic-thinking
                chops make her an asset for any team. Plus, she laughs at
                your jokes ... even the lame ones (especially the lame
                ones). She's a real gem."
              </p>
              <cite>- Gina Simpson, Marketing Manger</cite>
            </blockquote>
            <blockquote>
              <p>
                Tessa is an exceptional front-end developer and designer. She was my mentor as well. She also has great ideas, one of which was a design system for the software development team [at Union Home Mortgage] to use to maintain a consistent branding and style across company applications.
              </p>
              <cite>- Alyssa Melendez, Owner of Cosite</cite>
            </blockquote>
          </div>
        </div>
      </section>
      <section aria-label="blogs" className="blogs-section">
        <div className="blogs-content-wrapper">
          <h2 id="blogs-heading" className="blogs-heading">Blog & Resources</h2>
          <p style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>Take a peek into my brain and take what you like from my tutorials and free downloads. Give me your email to sign up for a newsletter even if anything you see helps you along the way.</p>
          <div className="blogs-grid">
            {recentBlogs && recentBlogs.length > 0 ? (
              recentBlogs.map((post) => (
                <div
                  className="window-content window-content__static blog-list-item"
                  key={post._id}
                >
                  <div className="window-content-container">
                    <div className="window-description-container">
                      <Link to={`/blog/${post.slug.current}`}>
                        {post.image && (
                          <img
                            className="blog-item-image"
                            src={urlFor(post.image).url()}
                            alt={post.headline}
                          />
                        )}
                        <h2>{post.headline}</h2>
                      </Link>
                      <h3>Posted on&nbsp;
                        {post.publishDate && new Intl.DateTimeFormat("en-GB", {
                          month: "long",
                          day: "2-digit",
                          year: "numeric",
                        }).format(new Date(post.publishDate))}
                      </h3>
                      {post.summary && <PortableText value={post.summary} />}
                      <Link to={`/blog/${post.slug.current}`} className="button-primary">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <RetroLoader message="Loading Recent Posts..." />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
