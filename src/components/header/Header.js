import React, {useContext} from "react";
import Headroom from "react-headroom";
import {Link} from "react-router-dom";
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
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  const closeMenu = () => {
    const menuButton = document.getElementById("menu-btn");
    if (menuButton) {
      menuButton.checked = false;
    }
  };

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="grey-color"> &lt;</span>
          <span className={isDark ? "logo-name dark-logo" : "logo-name"}>
            {greeting.username}
          </span>
          <span className="grey-color">/&gt;</span>
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <Link to="/skills" onClick={closeMenu}>
                Skills
              </Link>
            </li>
          )}
          {viewExperience && (
            <li>
              <Link to="/experience" onClick={closeMenu}>
                Work Experiences
              </Link>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <Link to="/opensource" onClick={closeMenu}>
                Open Source
              </Link>
            </li>
          )}
          {viewAchievement && (
            <li>
              <Link to="/achievements" onClick={closeMenu}>
                Achievements
              </Link>
            </li>
          )}
          {viewBlog && (
            <li>
              <Link to="/blogs" onClick={closeMenu}>
                Blogs
              </Link>
            </li>
          )}
          {viewTalks && (
            <li>
              <Link to="/talks" onClick={closeMenu}>
                Talks
              </Link>
            </li>
          )}
          {viewResume && (
            <li>
              <Link to="/resume" onClick={closeMenu}>
                Resume
              </Link>
            </li>
          )}
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact Me
            </Link>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
