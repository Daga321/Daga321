import React from "react";
import "./TimelineDot.scss";

export default function TimelineDot({isDark, isLast}) {
  return (
    <div className={isDark ? "dark-mode timeline-dot-wrap" : "timeline-dot-wrap"}>
      <span className="timeline-dot" aria-hidden="true" />
      {!isLast ? <span className="timeline-line" aria-hidden="true" /> : null}
    </div>
  );
}
