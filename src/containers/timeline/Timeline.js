import React from "react";
import "./Timeline.scss";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import TimelineDot from "../../components/timelineDot/TimelineDot";

export default function Timeline({certifications, isDark, onSelectCertification}) {
  if (!certifications.length) {
    return (
      <div className={isDark ? "dark-mode timeline-empty" : "timeline-empty"}>
        No certifications match the selected filters.
      </div>
    );
  }

  return (
    <div className="timeline-div">
      {certifications.map((certification, index) => {
        const isLast = index === certifications.length - 1;

        return (
          <div className="timeline-item" key={`${certification.title}-${index}`}>
            <div className="timeline-marker">
              <TimelineDot isDark={isDark} isLast={isLast} />
            </div>
            <div className="timeline-content">
              <CertificationCard
                certification={certification}
                isDark={isDark}
                onSelectCertification={onSelectCertification}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
