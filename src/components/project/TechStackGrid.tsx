import React from "react";
import {
  ProjectTechStackGrid,
  CAMPUS_TECH_CATEGORIES,
} from "./ProjectTechStackGrid";

export const TechStackGrid: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <ProjectTechStackGrid
      categories={CAMPUS_TECH_CATEGORIES}
      accentColor="teal"
      className={className}
    />
  );
};
