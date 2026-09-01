import React, {useEffect, useRef, useState} from "react";
import "./FilePreviewer.scss";
import DisplayLottie from "../displayLottie/DisplayLottie";
import {splashScreen} from "../../portfolio";

function getFileType(src, fileType) {
  if (fileType) {
    return fileType.toLowerCase();
  }

  const cleanSrc = src.split(/[?#]/)[0];
  const extension = cleanSrc.split(".").pop();
  return extension ? extension.toLowerCase() : "";
}

export default function FilePreviewer({
  src,
  alt = "File preview",
  fileType,
  width = "100%",
  height = "100%"
}) {
  const type = getFileType(src, fileType);
  const previewRef = useRef(null);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const dimensions = {width, height};

  useEffect(() => {
    const preview = previewRef.current;

    if (!preview || !("IntersectionObserver" in window)) {
      setIsNearViewport(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      {rootMargin: "200px 0px"}
    );

    observer.observe(preview);
    return () => observer.disconnect();
  }, []);

  const handleLoaded = () => setIsLoaded(true);
  const showLoading = !isNearViewport || !isLoaded;

  const loadingPreview = showLoading ? (
    <div className="file-previewer-loading" aria-label="Loading file preview">
      <div className="file-previewer-loading-animation">
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
    </div>
  ) : null;

  if (type === "pdf") {
    return (
      <div ref={previewRef} className="file-previewer-frame" style={dimensions}>
        {loadingPreview}
        {isNearViewport ? (
          <iframe
            className="file-previewer file-previewer-pdf"
            src={`${src}#toolbar=0&navpanes=0&view=Fit`}
            title={alt}
            onLoad={handleLoaded}
            scrolling="no"
          />
        ) : null}
      </div>
    );
  }

  if (["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(type)) {
    return (
      <div ref={previewRef} className="file-previewer-frame" style={dimensions}>
        {loadingPreview}
        {isNearViewport ? (
          <img
            className="file-previewer file-previewer-image"
            src={src}
            alt={alt}
            onLoad={handleLoaded}
            loading="lazy"
          />
        ) : null}
      </div>
    );
  }

  return (
    <a
      className="file-previewer-fallback"
      href={src}
      target="_blank"
      rel="noreferrer"
    >
      Open file preview
    </a>
  );
}
