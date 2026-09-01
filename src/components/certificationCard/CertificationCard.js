import React from "react";
import "./CertificationCard.scss";
import FilePreviewer from "../filePreviewer/FilePreviewer";

export default function CertificationCard({certification, isDark}) {
  const openCertificate = () => {
    window.open(encodeURI(certification.fileUrl), "_blank", "noopener,noreferrer");
  };

  return (
    <article
      className={
        isDark ? "dark-mode certification-card" : "certification-card"
      }
    >
      <div className="certification-preview-div">
        <FilePreviewer
          src={certification.fileUrl}
          alt={`${certification.title} certificate preview`}
          fileType={certification.fileType}
          width="100%"
          height="100%"
        />
      </div>

      <div className="certification-content-div">
        <div className="certification-meta">
          <span className="certification-issuer">{certification.issuer}</span>
        </div>
        <h3 className="certification-title">{certification.title}</h3>
        <p className="certification-summary">{certification.summary}</p>

        <div className="certification-tags">
          {(certification.tags || []).map((tag) => (
            <span
              key={tag}
              className={
                isDark
                  ? "dark-mode certification-tag"
                  : "certification-tag"
              }
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          type="button"
          className="certification-action"
          onClick={openCertificate}
        >
          View certificate
        </button>
      </div>
    </article>
  );
}
