import { projects } from '../../assets/data'

const ProjectsSection: React.FC = () => {
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Featured <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            A showcase of my recent work, highlighting innovative solutions and creative problem-solving.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {featuredProjects.map((project) => (
            <div key={project.id} className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
                {/* Project Image */}
                <div className="relative h-48 md:h-64 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                  <div className="text-center space-y-3 md:space-y-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-lg md:text-2xl">🚀</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-white px-4 break-words">{project.title}</h3>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm md:text-base"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && project.githubUrl !== '#' && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm md:text-base"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3 break-words">{project.title}</h3>
                  <p className="text-gray-300 mb-3 md:mb-4 leading-relaxed text-sm md:text-base break-words">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 md:px-3 py-1 bg-white/10 text-white text-xs md:text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-center text-sm md:text-base"
                      >
                        View Project
                      </a>
                    )}
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                      >
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 md:mb-8 text-center">Other Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {otherProjects.map((project) => (
                <div key={project.id} className="group">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="h-32 md:h-40 bg-gradient-to-br from-gray-500/20 to-gray-600/20 flex items-center justify-center">
                      <div className="text-center px-2">
                        <div className="w-10 h-10 md:w-12 md:h-12 mx-auto rounded-full bg-gradient-to-r from-gray-500 to-gray-600 flex items-center justify-center mb-2">
                          <span className="text-base md:text-lg">💻</span>
                        </div>
                        <h4 className="text-white font-medium text-sm md:text-base break-words">{project.title}</h4>
                      </div>
                    </div>
                    <div className="p-3 md:p-4">
                      <p className="text-gray-300 text-xs md:text-sm mb-3 line-clamp-2 break-words">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-1 md:px-2 py-1 bg-white/10 text-white text-xs rounded">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-1 md:px-2 py-1 bg-white/10 text-white text-xs rounded">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col gap-1">
                        {project.liveUrl && project.liveUrl !== '#' && (
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs md:text-sm rounded hover:bg-blue-500/30 transition-colors text-center"
                          >
                            Live
                          </a>
                        )}
                        {project.githubUrl && project.githubUrl !== '#' && (
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-3 py-1 bg-gray-500/20 text-gray-300 text-xs md:text-sm rounded hover:bg-gray-500/30 transition-colors text-center"
                          >
                            Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-white/10">
            <h3 className="text-lg md:text-2xl font-semibold text-white mb-3 md:mb-4">Interested in Working Together?</h3>
            <p className="text-gray-300 mb-4 md:mb-6 max-w-2xl mx-auto text-sm md:text-base px-4">
              I'm always excited to take on new challenges and create amazing digital experiences. 
              Let's discuss your next project!
            </p>
            <button className="px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base">
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection
