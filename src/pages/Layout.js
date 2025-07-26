import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Marquee } from "../components/Marquee.js";
import "../styles/header.scss";
import "../styles/navigation.scss";

const Layout = () => {
  // Zoom in and Out
  const [scale, setScale] = useState(1);

  const zoomIn = () => {
    setScale(scale + 0.1);
  };

  const zoomOut = () => {
    if (scale > 0.1) {
      setScale(scale - 0.1);
    }
  };

  // Back/Forward (Undo/Redo) Buttons
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goForward = () => {
    navigate(1);
  };

  // Set Time
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Refresh
  const handleRefresh = () => {
    window.location.reload();
  };

  // Mobile Menu Button
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="container">
      <header class="App-header">
        <nav aria-label="Main Navigation">
          <a className="visually-hidden" href="#main">
            Skip to content
          </a>
          <Link to="/" class="logo-link" onClick={() => setShowMenu(!showMenu)}>
            <img
              src={logo}
              class="logo"
              alt="Tessa Newbacher: UI/UX Designer"
            />
          </Link>
          <button class="mobile-menu" onClick={() => setShowMenu(!showMenu)}>
            Menu
          </button>
          <ul className={`menu__items ${showMenu ? "menu__items--open" : ""}`}>
            <li class="dropdown">
              {/* <!-- aria-expanded needs managed with Javascript --> */}
              <button
                type="button"
                className="dropdown__title"
                aria-expanded="false"
                aria-controls="file-dropdown">
                File
              </button>
              <ul className="dropdown__menu" id="file-dropdown">
                <li>
                  <Link to="/about" onClick={() => setShowMenu(!showMenu)}>About</Link>
                </li>
                <li>
                  <Link to="/work" onClick={() => setShowMenu(!showMenu)}>Work</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              {/* <!-- aria-expanded needs managed with Javascript --> */}
              <button
                type="button"
                className="dropdown__title"
                aria-expanded="false"
                aria-controls="edit-dropdown">
                Edit
              </button>
              <ul className="dropdown__menu mobile__hidden" id="edit-dropdown">
                <li>
                  <button onClick={goBack}>Undo</button>
                </li>
                <li>
                  <button onClick={goForward}>Redo</button>
                </li>
                <hr />
                <li>
                  <Link to="delete">Delete</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              {/* <!-- aria-expanded needs managed with Javascript --> */}
              <button
                type="button"
                className="dropdown__title"
                aria-expanded="false"
                aria-controls="view-dropdown">
                View
              </button>
              <ul className="dropdown__menu  mobile__hidden" id="view-dropdown">
                <li>
                  <button onClick={handleRefresh}>Refresh</button>
                </li>
                <li>
                  <button onClick={zoomIn}>Zoom In</button>
                </li>
                <li>
                  <button onClick={zoomOut}>Zoom Out</button>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              {/* <!-- aria-expanded needs managed with Javascript --> */}
              <button
                type="button"
                className="dropdown__title"
                aria-expanded="false"
                aria-controls="view-dropdown">
                Bookmarks
              </button>
              <ul className="dropdown__menu" id="view-dropdown">
                <li>
                  <a
                    href="https://www.linkedin.com/in/tessanewbacher/"
                    target="_blank"
                    rel="noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/tessacharis"
                    target="_blank"
                    rel="noreferrer">
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://dribbble.com/tessacharis"
                    target="_blank"
                    rel="noreferrer">
                    Dribbble
                  </a>
                </li>
                <li>
                  <a href="mailto:tessacharis@gmail.com">Email me</a>
                </li>
                <li>
                  <a
                    href="https://docs.google.com/document/d/1_RfKnm8lrnD8b5Lv_TLUTQVdnuNulmeh0BOTKuHygxo/edit?tab=t.0"
                    target="_blank"
                    rel="noreferrer">
                    Resume
                  </a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="/help" onClick={() => setShowMenu(!showMenu)}>Help</a>
            </li>
          </ul>
        </nav>
        <div className="time">
          <p>{currentTime.toLocaleTimeString()}</p>
        </div>
      </header>
      <Marquee />
      <main className="main" id="main" style={{ fontSize: `${scale}em` }}>
        <Outlet />
      </main>
      <footer>&copy; Tessa Newbacher 2025</footer>
    </div>
  );
};

export default Layout;
