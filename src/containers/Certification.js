import React, {useContext, useMemo, useState} from "react";
import "./Certification.scss";
import {Fade} from "react-reveal";
import StyleContext from "../contexts/StyleContext";
import {certificationSection} from "../certifications";
import TagFilters from "./tagFilters/TagFilters";
import Timeline from "./timeline/Timeline";
import ScrollToTopButton from "./topbutton/Top";
import CertificationDetails from "../components/certificationDetails/CertificationDetails";

export default function Certification() {
  const {isDark} = useContext(StyleContext);
  const [activeFilters, setActiveFilters] = useState({
    issuer: "All",
    service: "All",
    focus: "All"
  });
  const [selectedCertification, setSelectedCertification] = useState(null);

  const categorizedCertifications = useMemo(() => {
    return certificationSection.certifications.map((certification) => {
      const tags = certification.tags || [];
      const service = tags.includes("Customer Service")
        ? "Customer Service"
        : "IT";
      const focus = tags.filter(
        (tag) => tag !== "Customer Service" && tag !== "IT"
      );

      return {...certification, service, focus};
    });
  }, []);

  const filterOptions = useMemo(() => {
    const serviceCertifications = categorizedCertifications.filter(
      (certification) =>
        activeFilters.service === "All" ||
        certification.service === activeFilters.service
    );
    const withAllFirst = (values) => [
      "All",
      ...[...new Set(values)].sort((a, b) => a.localeCompare(b))
    ];

    return {
      issuers: withAllFirst(
        categorizedCertifications.map((certification) => certification.issuer)
      ),
      services: [
        "All",
        ...new Set(
          categorizedCertifications.map((certification) => certification.service)
        )
      ],
      focus: withAllFirst(
        serviceCertifications.flatMap((certification) => certification.focus)
      )
    };
  }, [activeFilters.service, categorizedCertifications]);

  const filteredCertifications = useMemo(() => {
    return categorizedCertifications.filter((certification) => {
      const matchesIssuer =
        activeFilters.issuer === "All" ||
        certification.issuer === activeFilters.issuer;
      const matchesService =
        activeFilters.service === "All" ||
        certification.service === activeFilters.service;
      const matchesFocus =
        activeFilters.focus === "All" ||
        certification.focus.includes(activeFilters.focus);

      return matchesIssuer && matchesService && matchesFocus;
    });
  }, [activeFilters, categorizedCertifications]);

  const updateFilter = (filterName, value) => {
    setActiveFilters((currentFilters) => ({
      ...currentFilters,
      [filterName]: value,
      ...(filterName === "service" ? {focus: "All"} : {})
    }));
  };

  const clearTags = () => {
    setActiveFilters({issuer: "All", service: "All", focus: "All"});
  };

  if (!certificationSection.display) {
    return null;
  }

  return (
    <>
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
              filters={filterOptions}
              activeFilters={activeFilters}
              onChange={updateFilter}
              onClearTags={clearTags}
              isDark={isDark}
            />

            <Timeline
              certifications={filteredCertifications}
              isDark={isDark}
              onSelectCertification={setSelectedCertification}
            />
          </div>
        </div>
      </Fade>
      {selectedCertification ? (
        <CertificationDetails
          certification={selectedCertification}
          isDark={isDark}
          onClose={() => setSelectedCertification(null)}
        />
      ) : null}
      <ScrollToTopButton />
    </>
  );
}
