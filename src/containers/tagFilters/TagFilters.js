import React from "react";
import "./TagFilters.scss";
import TagChip from "../../components/tagChip/TagChip";

export default function TagFilters({
  tags,
  activeTags,
  onToggleTag,
  onClearTags,
  isDark
}) {
  const hasActiveTags = activeTags.length > 0;

  return (
    <div className={isDark ? "dark-mode tag-filters-div" : "tag-filters-div"}>
      <div className="tag-filters-header">
        <div>
          <p className="tag-filters-label">Filter by tag</p>
          <p className="tag-filters-help">
            Select one or more tags to narrow the timeline.
          </p>
        </div>
        {hasActiveTags ? (
          <button
            type="button"
            className="tag-filters-clear"
            onClick={onClearTags}
          >
            Clear filters
          </button>
        ) : null}
      </div>

      <div className="tag-filters-chips">
        <TagChip
          label="All"
          selected={!hasActiveTags}
          onClick={() => onToggleTag("All")}
          isDark={isDark}
        />
        {tags.map((tag) => (
          <TagChip
            key={tag}
            label={tag}
            selected={activeTags.includes(tag)}
            onClick={() => onToggleTag(tag)}
            isDark={isDark}
          />
        ))}
      </div>
    </div>
  );
}
