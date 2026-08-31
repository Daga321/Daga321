import React, {useContext, useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const location = useLocation();
  const isCertificationPage = location.pathname === "/certifications";
  const isPortfolioPage = location.pathname === "/";
  const [activeHash, setActiveHash] = useState(window.location.hash || "");
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash || "");
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, [location.pathname]);

  const closeMenu = () => {
    const menuButton = document.getElementById("menu-btn");
    if (menuButton) {
      menuButton.checked = false;
    }
  };

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <div className={isDark ? "dark-menu menu" : "menu"}>
          <div className="header-brand-row">
            <Link to="/" className="logo" onClick={closeMenu}>
              <span className="grey-color"> &lt;</span>
              <span className={isDark ? "logo-name dark-logo" : "logo-name"}>
                {greeting.username}
              </span>
              <span className="grey-color">/&gt;</span>
            </Link>
            <div className="header-top-actions">
              <div className="header-page-links">
                <Link
                  to="/"
                  className={
                    isPortfolioPage
                      ? "header-page-link active-page-link"
                      : "header-page-link"
                  }
                  onClick={closeMenu}
                >
                  Portfolio
                </Link>
                <Link
                  to="/certifications"
                  className={
                    isCertificationPage
                      ? "header-page-link active-page-link"
                      : "header-page-link"
                  }
                  onClick={closeMenu}
                >
                  Certifications
                </Link>
              </div>
              <div className="header-toggle-row">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>
                  <ToggleSwitch />
                </a>
              </div>
            </div>
          </div>
          {isPortfolioPage && (
            <ul className="header-section-links">
              {viewSkills && (
                <li>
                  <a
                    href="#skills"
                    className={
                      activeHash === "#skills"
                        ? "header-section-link active-section-link"
                        : "header-section-link"
                    }
                    onClick={closeMenu}
                  >
                    Skills
                  </a>
                </li>
              )}
              {viewExperience && (
                <li>
                  <a
                    href="#experience"
                    className={
                      activeHash === "#experience"
                        ? "header-section-link active-section-link"
                        : "header-section-link"
                    }
                    onClick={closeMenu}
                  >
                    Work Experiences
                  </a>
                </li>
              )}
              {viewOpenSource && (
                <li>
                  <a
                    href="#opensource"
                    className={
                      activeHash === "#opensource"
                        ? "header-section-link active-section-link"
                        : "header-section-link"
                    }
                    onClick={closeMenu}
                  >
                    Open Source
                  </a>
                </li>
              )}
              {viewAchievement && (
                <li>
                  <a
                    href="#achievements"
                    className={
                      activeHash === "#achievements"
                        ? "header-section-link active-section-link"
                        : "header-section-link"
                    }
                    onClick={closeMenu}
                  >
                    Achievements
                  </a>
                </li>
              )}
              {viewBlog && (
                <li>
                  <a
                    href="#blogs"
                    className={
                      activeHash === "#blogs"
                        ? "header-section-link active-section-link"
                        : "header-section-link"
                    }
                    onClick={closeMenu}
                  >
                    Blogs
                  </a>
                </li>
              )}
              {viewTalks && (
                <li>
                  <a
                    href="#talks"
                    className={
                      activeHash === "#talks"
                        ? "header-section-link active-section-link"
                        : "header-section-link"
                    }
                    onClick={closeMenu}
                  >
                    Talks
                  </a>
                </li>
              )}
              {viewResume && (
                <li>
                  <a
                    href="#resume"
                    className={
                      activeHash === "#resume"
                        ? "header-section-link active-section-link"
                        : "header-section-link"
                    }
                    onClick={closeMenu}
                  >
                    Resume
                  </a>
                </li>
              )}
              <li>
                <a
                  href="#contact"
                  className={
                    activeHash === "#contact"
                      ? "header-section-link active-section-link"
                      : "header-section-link"
                  }
                  onClick={closeMenu}
                >
                  Contact Me
                </a>
              </li>
            </ul>
          )}
        </div>
      </header>
    </Headroom>
  );
}
export default Header;
