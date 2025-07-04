

import React, { useState } from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            // Remove 'colored' class if present in the classname
            const baseClass = skills.fontAwesomeClassname.replace(' colored', '');
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <i className={baseClass + (hoveredIndex === i ? ' colored' : '')}>
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
