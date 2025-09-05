export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  image: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'tools'
  icon: string
}

export interface Experience {
  id: string
  company: string
  position: string
  duration: string
  description: string
  technologies: string[]
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
  linkedin: string
  github: string
}

export type Section = 'home' | 'about' | 'skills' | 'projects' | 'experience' | 'contact'

export interface NavigationItem {
  id: Section
  label: string
  icon: string
}
