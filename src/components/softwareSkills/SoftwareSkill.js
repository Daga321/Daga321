import React, {useState, useContext} from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SoftwareSkill() {
  const {isDark} = useContext(StyleContext);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const getSkillClass = (skills, index) => {
    const baseClass = skills.fontAwesomeClassname.replace(" colored", "");
    const isHovered = hoveredIndex === index;
    
    // Skills that need white color in dark mode for better contrast
    const needsWhiteInDark = skills.skillName === "Unity" || skills.skillName === "GitHub";
    
    if (isHovered) {
      if (isDark && needsWhiteInDark) {
        return baseClass + " white-colored";
      } else {
        return baseClass + " colored";
      }
    }
    
    return baseClass;
  };
  
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <i
                  className={getSkillClass(skills, i)}
                >
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
