import type { Project, Skill, Experience, ContactInfo, NavigationItem } from '../types'

export const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'about', label: 'About', icon: '👨‍💻' },
  { id: 'skills', label: 'Skills', icon: '⚡' },
  { id: 'projects', label: 'Projects', icon: '🚀' },
  { id: 'experience', label: 'Experience', icon: '💼' },
  { id: 'contact', label: 'Contact', icon: '📧' }
]

export const skills: Skill[] = [
  // Mobile Development
  { name: 'Flutter', level: 95, category: 'frontend', icon: '📱' },
  { name: 'Dart', level: 92, category: 'frontend', icon: '🎯' },
  { name: 'Android', level: 88, category: 'frontend', icon: '🤖' },
  { name: 'iOS', level: 85, category: 'frontend', icon: '🍎' },
  { name: 'React Native', level: 75, category: 'frontend', icon: '⚛️' },
  { name: 'Kotlin', level: 70, category: 'frontend', icon: '🟣' },
  
  // Backend & Database
  { name: '.NET API', level: 80, category: 'backend', icon: '🔷' },
  { name: 'SQL', level: 85, category: 'backend', icon: '🗄️' },
  { name: 'SQLite', level: 90, category: 'backend', icon: '💾' },
  { name: 'REST API', level: 88, category: 'backend', icon: '🌐' },
  
  // Tools & Services
  { name: 'Firebase', level: 90, category: 'tools', icon: '🔥' },
  { name: 'Git', level: 85, category: 'tools', icon: '📚' },
  { name: 'Google Maps API', level: 80, category: 'tools', icon: '🗺️' },
  { name: 'Play Store', level: 85, category: 'tools', icon: '📦' },
  
]

export const projects: Project[] = [
  {
    id: '1',
    title: 'Microfinance Digital Field Assistance',
    description: 'Mobile app designed to empower microfinance staff in the field and streamline interaction between staff and microfinance clients. Features offline capabilities, data synchronization, and user-friendly interface.',
    technologies: ['Flutter', 'Dart', 'BLOC', 'SQLite', 'Firebase', 'Google Maps API'],
    image: '/api/placeholder/600/400',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.uranusapp.swbblDFA',
    githubUrl: '#',
    featured: true
  },
  {
    id: '2',
    title: 'Micro-Finance MPassbook',
    description: 'Comprehensive microfinance member management app that streamlines operations by managing account records, meeting schedules, loan info, savings, and other services in one place.',
    technologies: ['Flutter', 'Dart', 'BLOC', 'SQLite', 'REST API', 'Firebase'],
    image: '/api/placeholder/600/400',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.uranusapp.swbblMpassbook',
    githubUrl: '#',
    featured: true
  },
  {
    id: '3',
    title: 'Human Resource Management',
    description: 'HR management application for microfinance staff to mark attendance, apply for leave, and track work progress conveniently. Ensures data security and user-friendly interface.',
    technologies: ['Flutter', 'Dart', 'BLOC', 'SQLite', 'Firebase', 'REST API'],
    image: '/api/placeholder/600/400',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: '4',
    title: 'Travel & Journey App',
    description: 'Travel application developed during internship with Firebase authentication, REST API integration, and collaborative requirement discussions with the team.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST API', 'State Management'],
    image: '/api/placeholder/600/400',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  }
]

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Uranus Tech Nepal',
    position: 'Associate Flutter Developer',
    duration: '2022 - Present',
    description: 'Developing cross-platform mobile applications for microfinance sector. Specialized in Flutter development with BLOC state management, SQLite database integration, and Firebase services. Successfully deployed multiple apps to Google Play Store.',
    technologies: ['Flutter', 'Dart', 'BLOC', 'SQLite', 'Firebase', 'Google Maps API', 'REST API']
  },
  {
    id: '2',
    company: 'Okay Journey Nepal',
    position: 'Internship / Trainee',
    duration: '2021 - 2022',
    description: 'Developed mobile applications based on provided designs and integrated REST APIs. Implemented Firebase authentication and collaborated on requirement discussions with the team.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST API', 'State Management']
  }
]

export const contactInfo: ContactInfo = {
  email: 'rajushah2287@gmail.com',
  phone: '+977-9842417553',
  location: 'Kathmandu, Nepal',
  linkedin: 'https://www.linkedin.com/in/raju-shah0',
  github: 'https://github.com/rajushah404',
}

export const personalInfo = {
  name: 'Raju Shah',
  title: 'Flutter Developer & Mobile App Specialist',
  bio: 'Enthusiastic and skilled Flutter developer with more than 2 years of experience in creating cross-platform mobile applications. Proficient in leveraging Flutter\'s capabilities to build beautiful and performant apps for both Android and iOS. Adept at collaborating with cross-functional teams to deliver high-quality software solutions.',
  avatar: '/api/placeholder/300/300'
}
