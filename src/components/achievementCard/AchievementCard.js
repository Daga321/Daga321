import React from "react";
import {useHistory} from "react-router-dom";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  const history = useHistory();

  function openUrl(url, name, newTab = false) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }

    if (url.startsWith("/")) {
      history.push(url);
      return;
    }

    if (newTab) {
      const win = window.open(url, "_blank", "noopener,noreferrer");
      if (win) {
        win.focus();
      }
      return;
    }

    window.location.assign(url);
  }

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="card-image"
        ></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <span
              key={i}
              className={
                isDark ? "dark-mode certificate-tag" : "certificate-tag"
              }
              onClick={() => openUrl(v.url, v.name, v.newTab)}
            >
              {v.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
