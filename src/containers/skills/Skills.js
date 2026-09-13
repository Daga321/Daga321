import React, {useContext} from "react";
import "./Skills.scss";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }

  return (
    <div className={isDark ? "dark-mode main" : "main"}>
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={
                  require("../../assets/images/developerActivity.svg").default
                }
              ></img>
            )}
          </div>
        </Fade>

        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              id="skills"
              className={
                isDark
                  ? "dark-mode skills-heading section-anchor"
                  : "skills-heading section-anchor"
              }
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>

            <div className="skill-groups-grid">
              {skillsSection.skillGroups.map((group, index) => (
                <div key={index} className="skill-group">
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <div className="skill-icon-list">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="skill-icon-item"
                        style={{
                          "--skill-light-color": skill.lightColor || "#5b6ee1",
                          "--skill-dark-color": skill.darkColor || "#9ad4ff"
                        }}
                      >
                        <i className={skill.icon} />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Fade>

        <Fade bottom duration={1000}>
          <div className="skills-description-div">
            {skillsSection.skills.map((skills, i) => {
              return (
                <p
                  key={i}
                  className={
                    isDark
                      ? "dark-mode subTitle skills-text"
                      : "subTitle skills-text"
                  }
                >
                  {skills}
                </p>
              );
            })}
          </div>
        </Fade>
      </div>
    </div>
  );
}
