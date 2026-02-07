import { useState } from "react";
import { Link } from "react-router-dom";
import pageData from "../content/about.json";
import { DraggableWindow } from "../components/DraggableWindow";
import headshot from "../assets/tessa-newbacher-headshot.jpg";
import hello from "../assets/hello.png";

const About = () => {
  const [pages, setPages] = useState(pageData);

  return (
    <div className="window-container">
      {pages &&
        pages.map((page) => (
          <DraggableWindow
            isOpen={page.visible}
            key={page.id}
            id={page.id}
            title={page.title}>
            <p>
              <div className="headshot-container">
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
              Tessa Newbacher is a Senior UI/UX Designer with over 10 years of
              expertise in designing and building websites, software, and mobile
              applications. Known for her strategic approach to design and her
              ability to implement robust design systems, Tessa has been
              instrumental in driving user experience enhancements in
              high-growth companies. As the first in-house UX Designer at
              MentorcliQ, she introduced essential design processes and best
              practices, collaborating with international engineering teams to
              create impactful user experiences in the mentoring/HR space for
              corporations worldwide.
            </p>
            <p>
              Before joining MentorcliQ, Tessa made significant contributions at
              Union Home Mortgage, where she transitioned from a marketing
              specialist to the company's inaugural front-end developer and UX
              designer. Her work included creating a design system that
              accelerated web development projects by 50% and consistently
              delivering high-quality, brand-aligned websites and software
              solutions. Tessa's freelance consultancy has further showcased her
              versatility and dedication, serving a diverse clientele, including
              Women in Analytics and the DataConnect Conference. With a Bachelor
              of Arts in Digital Media & Design, Summa Cum Laude, from Baldwin
              Wallace University, Tessa combines technical acumen with a keen
              eye for design, continuously pushing the boundaries of user
              experience and digital innovation.
            </p>
            <p>
              When I'm not working, you can find me doing DIY projects around
              the house, playing rugby, arts & crafts, gardening, or
              volunteering with LGBTQ+ youth.
            </p>
            <div className="row">
              <Link to="/work" className="details">
                View My Work
              </Link>
              <Link to="/help" className="details">
                Book Consultation
              </Link>
            </div>
          </DraggableWindow>
        ))}
    </div>
  );
};

export default About;
