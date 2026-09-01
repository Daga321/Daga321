import React from "react";
import "./FilePreviewer.scss";

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
  const dimensions = {width, height};

  if (type === "pdf") {
    return (
      <iframe
        className="file-previewer file-previewer-pdf"
        src={`${src}#toolbar=0&navpanes=0&view=FitH`}
        title={alt}
        style={dimensions}
        loading="lazy"
      />
    );
  }

  if (["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(type)) {
    return (
      <img
        className="file-previewer file-previewer-image"
        src={src}
        alt={alt}
        style={dimensions}
        loading="lazy"
      />
    );
  }

  return (
    <a className="file-previewer-fallback" href={src} target="_blank" rel="noreferrer">
      Open file preview
    </a>
  );
}
