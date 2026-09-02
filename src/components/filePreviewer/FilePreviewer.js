import React, {useEffect, useRef, useState} from "react";
import "./FilePreviewer.scss";
import DisplayLottie from "../displayLottie/DisplayLottie";
import {splashScreen} from "../../portfolio";

const PREVIEW_TIMEOUT = 8000;

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
  const [isFileValid, setIsFileValid] = useState(null);
  const [hasTimedOut, setHasTimedOut] = useState(false);
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

  useEffect(() => {
    const supportedTypes = [
      "pdf",
      "jpg",
      "jpeg",
      "png",
      "gif",
      "webp",
      "svg"
    ];

    if (!isNearViewport || !supportedTypes.includes(type)) {
      return undefined;
    }

    let cancelled = false;

    const validateFile = async () => {
      try {
        const response = await fetch(src, {method: "HEAD", cache: "no-store"});
        const contentType = response.headers.get("content-type") || "";
        const isHtmlResponse = contentType.includes("text/html");
        const isExpectedType =
          type === "pdf"
            ? contentType.includes("application/pdf") ||
              contentType.includes("application/octet-stream") ||
              contentType === ""
            : contentType.startsWith("image/") || contentType === "";

        if (!cancelled) {
          setIsFileValid(response.ok && !isHtmlResponse && isExpectedType);
        }
      } catch {
        if (!cancelled) {
          setIsFileValid(false);
        }
      }
    };

    validateFile();

    return () => {
      cancelled = true;
    };
  }, [isNearViewport, src, type]);

  useEffect(() => {
    if (!isNearViewport || isLoaded || hasTimedOut) {
      return undefined;
    }

    const timeout = window.setTimeout(() => {
      setHasTimedOut(true);
    }, PREVIEW_TIMEOUT);

    return () => window.clearTimeout(timeout);
  }, [isNearViewport, isLoaded, hasTimedOut, isFileValid]);

  const handleLoaded = () => setIsLoaded(true);
  const handleLoadError = () => setHasTimedOut(true);
  const showLoading =
    !hasTimedOut && (!isNearViewport || isFileValid !== true || !isLoaded);

  const loadingPreview = showLoading ? (
    <div className="file-previewer-loading" aria-label="Loading file preview">
      <div className="file-previewer-loading-animation">
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
    </div>
  ) : null;
  const failedPreview = hasTimedOut ? (
    <div
      className="file-previewer-failed"
      title="The file preview could not be loaded"
      aria-label="The file preview could not be loaded"
    >
      <i className="fas fa-file-alt" aria-hidden="true"></i>
      <span aria-hidden="true">?</span>
    </div>
  ) : null;

  if (type === "pdf") {
    return (
      <div ref={previewRef} className="file-previewer-frame" style={dimensions}>
        {loadingPreview}
        {failedPreview}
        {isNearViewport && isFileValid === true ? (
          <iframe
            className="file-previewer file-previewer-pdf"
            src={`${src}#toolbar=0&navpanes=0&view=Fit`}
            title={alt}
            onLoad={handleLoaded}
            onError={handleLoadError}
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
        {failedPreview}
        {isNearViewport && isFileValid === true ? (
          <img
            className="file-previewer file-previewer-image"
            src={src}
            alt={alt}
            onLoad={handleLoaded}
            onError={handleLoadError}
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
