import React, {useState, useContext} from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SoftwareSkill() {
  const {isDark} = useContext(StyleContext);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getSkillClass = (skills, index) => {
    const baseClass = (skills.fontAwesomeClassname || skills.icon || "")
      .replace(" colored", "");
    const isHovered = hoveredIndex === index;

    const needsWhiteInDark =
      skills.skillName === "Unity" || skills.skillName === "GitHub";

    if (isHovered) {
      if (skills.lightColor && skills.darkColor) {
        return `${baseClass} custom-colored`;
      }

      if (isDark && needsWhiteInDark) {
        return `${baseClass} white-colored`;
      }

      return `${baseClass} colored`;
    }

    return baseClass;
  };

  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {(skillsSection.softwareSkills || []).map((skills, i) => {
            const customColors =
              skills.lightColor && skills.darkColor
                ? {
                    "--skill-light-color": skills.lightColor,
                    "--skill-dark-color": skills.darkColor
                  }
                : undefined;

            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={customColors}
              >
                <i className={getSkillClass(skills, i)}>
                  <p>{skills.skillName}</p>
                </i>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
