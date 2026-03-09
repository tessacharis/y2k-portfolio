import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import logo from "../assets/logo.svg";
import "../styles/header.scss";
import "../styles/navigation.scss";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  // Set Time
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

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
              alt="Tessa Newbacher | Designer, Developer & Digital Strategist"
            />
          </Link>
          <button class="mobile-menu" onClick={() => setShowMenu(!showMenu)}>
            Menu
          </button>
          <ul className={`menu__items ${showMenu ? "menu__items--open" : ""}`}>
            <li>
              <a href="/about" onClick={() => setShowMenu(!showMenu)}>About</a>
            </li>
            <li>
              <a href="/work" onClick={() => setShowMenu(!showMenu)}>Work</a>
            </li>
            <li>
              <a href="/blog" onClick={() => setShowMenu(!showMenu)}>Blog</a>
            </li>
            <li>
              <a href="/help" onClick={() => setShowMenu(!showMenu)}>Help</a>
            </li>
            <li className="dropdown">
              {/* <!-- aria-expanded needs managed with Javascript --> */}
              <button
                type="button"
                className="dropdown__title"
                aria-expanded="false"
                aria-controls="view-dropdown">
                Follow Me
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
          </ul>
        </nav>
        <div className="time">
          <p>{currentTime.toLocaleTimeString()}</p>
        </div>
      </header>
      <main className="main" id="main">
        <Outlet />
      </main>
      <footer>
        <div className="footer-content">
          <Link to="/" class="logo-link">
            <img
              src={logo}
              class="logo footer-logo"
              alt="Tessa Newbacher | Designer, Developer & Digital Strategist"
            />
          </Link>
          <ul className="footer-links">
            <li>
              <a href="https://www.linkedin.com/in/tessanewbacher/" target="_blank" rel="noreferrer">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/tessacharis" target="_blank" rel="noreferrer">Github</a>
            </li>
            <li>
              <a href="mailto:tessacharis@gmail.com">Email</a>
            </li>
            <li>
              <Link to="/help">Contact Me</Link>
            </li>
            <li>
              <a href="https://docs.google.com/document/d/1_RfKnm8lrnD8b5Lv_TLUTQVdnuNulmeh0BOTKuHygxo/edit?tab=t.0" target="_blank" rel="noreferrer">Resume</a>
            </li>
          </ul>
          <div className="footer-bottom">
            <p className="footer-copyright">&copy; {new Date().getFullYear()} Tessa Newbacher</p>
            <Link to="/privacy" className="footer-privacy-tag">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
