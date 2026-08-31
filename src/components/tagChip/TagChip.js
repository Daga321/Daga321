import React from "react";
import "./TagChip.scss";

export default function TagChip({label, selected, onClick, isDark}) {
  return (
    <button
      type="button"
      className={
        selected
          ? isDark
            ? "dark-mode tag-chip tag-chip-selected"
            : "tag-chip tag-chip-selected"
          : isDark
            ? "dark-mode tag-chip"
            : "tag-chip"
      }
      onClick={onClick}
    >
      {label}
    </button>
  );
}
