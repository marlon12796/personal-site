import { technologiesList } from '../app/data/Thecnologies'
export type Project = {
  id: number
  title: string
  desc: string
  img: string
  link?: string
  github?: string
  tags: string[]
}

export type TechnologyData = {
  color: string
  bgColor: string
  icon?: React.ReactNode
}

export type Technology = (typeof technologiesList)[number]

export type PersonalProject = {
  name: string
  mainPath: string
  description: string
  stack: Technology[]
  images: string[]
  isCover: boolean
  githubLink?: string
  previewLink?: string
}
