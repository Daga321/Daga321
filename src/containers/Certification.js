import React, {useContext, useMemo, useState} from "react";
import {useEffect} from "react";
import {useHistory, useLocation} from "react-router-dom";
import "./Certification.scss";
import {Fade} from "react-reveal";
import StyleContext from "../contexts/StyleContext";
import {certificationSection} from "../certifications";
import TagFilters from "./tagFilters/TagFilters";
import Timeline from "./timeline/Timeline";
import ScrollToTopButton from "./topbutton/Top";
import CertificationDetails from "../components/certificationDetails/CertificationDetails";

function readCertificationQuery(search) {
  const params = new URLSearchParams(search);

  return {
    issuer: params.get("issuer") || "All",
    service: params.get("service") || "All",
    focus: params.get("focus") || "All",
    certification: params.get("certification") || ""
  };
}

function updateCertificationQuery(history, search, values) {
  const params = new URLSearchParams(search);

  Object.entries(values).forEach(([key, value]) => {
    if (!value || value === "All") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
  });

  const query = params.toString();
  history.replace({
    pathname: "/certifications",
    search: query ? `?${query}` : ""
  });
}

export default function Certification() {
  const {isDark} = useContext(StyleContext);
  const history = useHistory();
  const location = useLocation();
  const initialQuery = readCertificationQuery(location.search);
  const [activeFilters, setActiveFilters] = useState({
    issuer: initialQuery.issuer,
    service: initialQuery.service,
    focus: initialQuery.focus
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

  useEffect(() => {
    const query = readCertificationQuery(location.search);
    const validServices = new Set(
      categorizedCertifications.map((certification) => certification.service)
    );
    const service = validServices.has(query.service) ? query.service : "All";
    const validIssuers = new Set(
      categorizedCertifications.map((certification) => certification.issuer)
    );
    const issuer = validIssuers.has(query.issuer) ? query.issuer : "All";
    const validFocus = new Set(
      categorizedCertifications
        .filter(
          (certification) => service === "All" || certification.service === service
        )
        .flatMap((certification) => certification.focus)
    );
    const focus = validFocus.has(query.focus) ? query.focus : "All";

    setActiveFilters({issuer, service, focus});

    const certification = categorizedCertifications.find(
      (item) => item.title === query.certification
    );
    setSelectedCertification(certification || null);
  }, [categorizedCertifications, location.search]);

  const updateFilter = (filterName, value) => {
    setActiveFilters((currentFilters) => {
      const nextFilters = {
        ...currentFilters,
        [filterName]: value,
        ...(filterName === "service" ? {focus: "All"} : {})
      };
      updateCertificationQuery(history, location.search, nextFilters);
      return nextFilters;
    });
  };

  const clearTags = () => {
    setActiveFilters({issuer: "All", service: "All", focus: "All"});
    updateCertificationQuery(history, location.search, {
      issuer: "All",
      service: "All",
      focus: "All"
    });
  };

  const selectCertification = (certification) => {
    setSelectedCertification(certification);
    updateCertificationQuery(history, location.search, {
      certification: certification.title
    });
  };

  const closeCertificationDetails = () => {
    setSelectedCertification(null);
    updateCertificationQuery(history, location.search, {certification: ""});
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
              onSelectCertification={selectCertification}
            />
          </div>
        </div>
      </Fade>
      {selectedCertification ? (
        <CertificationDetails
          certification={selectedCertification}
          isDark={isDark}
          onClose={closeCertificationDetails}
        />
      ) : null}
      <ScrollToTopButton />
    </>
  );
}
