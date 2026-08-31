import React from "react";
import "./TagFilters.scss";
import TagChip from "../../components/tagChip/TagChip";

export default function TagFilters({
  filters,
  activeFilters,
  onChange,
  onClearTags,
  isDark
}) {
  const hasActiveFilters = Object.values(activeFilters).some(
    (value) => value !== "All"
  );

  const filterGroups = [
    {key: "issuers", filterName: "issuer", label: "Accrediting company"},
    {key: "services", filterName: "service", label: "Service"},
    {key: "focus", filterName: "focus", label: "Focus"}
  ];

  return (
    <div className={isDark ? "dark-mode tag-filters-div" : "tag-filters-div"}>
      <div className="tag-filters-header">
        <div>
          <p className="tag-filters-label">Filter certifications</p>
          <p className="tag-filters-help">
            Combine the filters to narrow the timeline.
          </p>
        </div>
        {hasActiveFilters ? (
          <button
            type="button"
            className="tag-filters-clear"
            onClick={onClearTags}
          >
            Clear filters
          </button>
        ) : null}
      </div>

      <div className="tag-filter-groups">
        {filterGroups.map(({key, filterName, label}) => (
          <div className="tag-filter-group" key={key}>
            <p className="tag-filter-group-label">{label}</p>
            <div className="tag-filters-chips">
              {filters[key].map((filter) => (
                <TagChip
                  key={filter}
                  label={filter}
                  selected={activeFilters[filterName] === filter}
                  onClick={() =>
                    onChange(filterName, filter)
                  }
                  isDark={isDark}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
