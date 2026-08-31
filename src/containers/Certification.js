import React, {useContext, useMemo, useState} from "react";
import "./Certification.scss";
import {Fade} from "react-reveal";
import StyleContext from "../contexts/StyleContext";
import {certificationSection} from "../certifications";
import TagFilters from "./tagFilters/TagFilters";
import Timeline from "./timeline/Timeline";
import ScrollToTopButton from "./topbutton/Top";

export default function Certification() {
  const {isDark} = useContext(StyleContext);
  const [activeTags, setActiveTags] = useState([]);

  const certificationTags = useMemo(() => {
    const tags = certificationSection.certifications.reduce(
      (accumulator, certification) =>
        accumulator.concat(certification.tags || []),
      []
    );
    return [...new Set(tags)].sort((a, b) => a.localeCompare(b));
  }, []);

  const filteredCertifications = useMemo(() => {
    if (activeTags.length === 0) {
      return certificationSection.certifications;
    }

    return certificationSection.certifications.filter((certification) =>
      (certification.tags || []).some((tag) => activeTags.includes(tag))
    );
  }, [activeTags]);

  const toggleTag = (tag) => {
    setActiveTags((currentTags) => {
      if (tag === "All") {
        return [];
      }

      if (currentTags.includes(tag)) {
        return currentTags.filter((currentTag) => currentTag !== tag);
      }

      return [...currentTags, tag];
    });
  };

  const clearTags = () => {
    setActiveTags([]);
  };

  if (!certificationSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main">
        <div className="certification-main-div">
          <div className="certification-header">
            <h1
              id="certifications"
              className={
                isDark
                  ? "dark-mode heading certification-heading section-anchor"
                  : "heading certification-heading section-anchor"
              }
            >
              {certificationSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle certification-subtitle"
                  : "subTitle certification-subtitle"
              }
            >
              {certificationSection.subtitle}
            </p>
          </div>

          <TagFilters
            tags={certificationTags}
            activeTags={activeTags}
            onToggleTag={toggleTag}
            onClearTags={clearTags}
            isDark={isDark}
          />

          <Timeline certifications={filteredCertifications} isDark={isDark} />
        </div>
        <ScrollToTopButton />
      </div>
    </Fade>
  );
}
