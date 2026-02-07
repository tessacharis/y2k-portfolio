import { useState } from "react";
import { Link } from "react-router-dom";
import { DraggableWindow } from "../components/DraggableWindow";

import "../styles/home.scss";
import pageData from "../content/home.json";

const Home = () => {
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
              Inspired by the first websites I ever explored in the late 90s +
              early aughts, this space is a little love letter to early web
              nostalgia and creativity.
            </p>
            <p>
              Read my case studies, learn more about me, or reach out if you’re
              hiring, looking for mentorship/coaching, or just want to say hi.
            </p>
            <p>
              Click around and you might just find a few hidden easter eggs here
              for curious explorers
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

export default Home;
