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
              Taking inspiration from some of the first websites I experienced
              in the late 90s and early aughts, this project evokes Y2K-era
              computer and internet browsing nostalgia. Start explore by open
              the menu and under file, you can find my professional work, bio or
              click around and discover a few easter eggs I've left for you to
              enjoy!
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
