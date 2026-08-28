import React from "react";
import {Link} from "react-router-dom";
import "./Button.scss";

export default function Button({
  text,
  className,
  href,
  to,
  newTab,
  onClick,
  download
}) {
  const content = (
    <>
      {text}
    </>
  );

  if (to) {
    return (
      <div className={className}>
        <Link className="main-button" to={to} onClick={onClick}>
          {content}
        </Link>
      </div>
    );
  }

  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab && "_blank"}
        rel={newTab ? "noreferrer" : undefined}
        onClick={onClick}
        download={download}
      >
        {text}
      </a>
    </div>
  );
}
