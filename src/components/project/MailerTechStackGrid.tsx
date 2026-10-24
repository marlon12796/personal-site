import React from "react";
import {
  ProjectTechStackGrid,
  MAILER_TECH_CATEGORIES,
} from "./ProjectTechStackGrid";

export const MailerTechStackGrid: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <ProjectTechStackGrid
      categories={MAILER_TECH_CATEGORIES}
      accentColor="amber"
      className={className}
    />
  );
};
