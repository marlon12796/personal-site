import React from 'react'
import { MAILER_TECH_CATEGORIES, ProjectTechStackGrid } from './ProjectTechStackGrid'

export const MailerTechStackGrid: React.FC<{ className?: string }> = ({ className = '' }) => {
  return <ProjectTechStackGrid categories={MAILER_TECH_CATEGORIES} accentColor='amber' className={className} />
}
