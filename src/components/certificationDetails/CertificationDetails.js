import React from "react";
import "./CertificationDetails.scss";
import FilePreviewer from "../filePreviewer/FilePreviewer";

function formatDate(dateValue) {
  if (!dateValue) {
    return "—";
  }

  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return dateValue;
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(date);
}

export default function CertificationDetails({certification, isDark, onClose}) {
  if (!certification) {
    return null;
  }

  const issueDate = certification.issuedDate || certification.issuedAt;
  const expirationDate = certification.expirationDate || certification.expiresAt;
  const verificationUrl = certification.verificationUrl;
  const detailTags = certification.tags || [];
  const hasVerification = certification.verificationCode || verificationUrl;
  const hasExpirationDate = Boolean(expirationDate);

  return (
    <div className={isDark ? "dark-mode certification-details-overlay" : "certification-details-overlay"}>
      <div className="certification-details-backdrop" onClick={onClose} aria-hidden="true" />
      <div className="certification-details-panel" role="dialog" aria-modal="true" aria-label={`${certification.title} details`}>
        <div className="certification-details-header">
          <div>
            <p className="certification-details-kicker">Detailed certification</p>
            <h2>{certification.title}</h2>
          </div>
          <button
            type="button"
            className="certification-details-close"
            onClick={onClose}
            aria-label="Close certification details"
          >
            Close
          </button>
        </div>

        <div className="certification-details-body">
          <div className="certification-details-preview">
            <FilePreviewer
              src={certification.fileUrl}
              alt={`${certification.title} certificate preview`}
              fileType={certification.fileType}
              width="100%"
              height="100%"
            />
          </div>

          <aside className="certification-details-sidebar">
            <div className="certification-details-meta">
              <span className="certification-details-issuer">{certification.issuer}</span>
            </div>

            {certification.summary ? (
              <p className="certification-details-summary">
                {certification.summary}
              </p>
            ) : null}

            {detailTags.length ? (
              <div className="certification-details-tags">
                {detailTags.map((tag) => (
                  <span key={tag} className="certification-details-tag">
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            <div className="certification-details-facts">
              <div
                className={
                  hasExpirationDate
                    ? "certification-details-dates"
                    : "certification-details-dates certification-details-dates-single"
                }
              >
                <div className="certification-detail-fact">
                  <span className="fact-label">Issue date</span>
                  <strong>{formatDate(issueDate)}</strong>
                </div>
                {hasExpirationDate ? (
                  <div className="certification-detail-fact">
                    <span className="fact-label">Expiration</span>
                    <strong>{formatDate(expirationDate)}</strong>
                  </div>
                ) : null}
              </div>
              {hasVerification ? (
                <div className="certification-detail-fact certification-verification-fact">
                  <span className="fact-label">Verification code</span>
                  <div className="certification-verification-value">
                    <strong>
                      {certification.verificationCode || "Available online"}
                    </strong>
                    {verificationUrl ? (
                      <a
                        href={verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certification-verification-link"
                        aria-label="Open official verification page"
                        title="Open official verification page"
                      >
                        <i
                          className="fas fa-external-link-alt"
                          aria-hidden="true"
                        ></i>
                      </a>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>

            <div className="certification-details-actions">
              <a
                href={certification.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="certification-details-secondary"
              >
                Open PDF
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
