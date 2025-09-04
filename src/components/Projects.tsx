import { projects } from '../assets/data'

const Projects: React.FC = () => {
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden border-t-2 border-purple-400">
      {/* 90s Matrix-style background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-400/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center mb-16">
          <div className="text-purple-400 text-sm font-mono tracking-wider mb-2">
            &gt; LOADING PROJECTS.DAT...
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-purple-400 font-mono mb-6">
            PROJECTS.exe
          </h2>
          <p className="text-lg text-purple-300 max-w-2xl mx-auto font-mono">
            &gt; A showcase of my recent work, highlighting innovative mobile solutions and creative problem-solving.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <div key={project.id} className="group">
              <div className="bg-black border-2 border-purple-400 overflow-hidden hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20">
                {/* Project Header */}
                <div className="bg-purple-400 p-4 group-hover:bg-cyan-400 transition-colors duration-300">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl group-hover:animate-bounce">📱</span>
                    <h3 className="text-xl font-bold text-black font-mono group-hover:animate-pulse">{project.title.toUpperCase()}</h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="bg-black border border-purple-400 p-4 mb-4 font-mono">
                    <div className="text-purple-400 text-sm mb-2">&gt; PROJECT_INFO.TXT</div>
                    <p className="text-purple-300 text-sm leading-relaxed">{project.description}</p>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="text-purple-400 text-sm font-mono mb-2 group-hover:text-cyan-400 transition-colors">&gt; TECHNOLOGIES.DAT</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-purple-400 text-black text-sm font-mono font-bold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-110"
                        >
                          {tech.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-purple-400 mb-8 text-center font-mono">OTHER_PROJECTS.DAT</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div key={project.id} className="group">
                  <div className="bg-black border-2 border-purple-400 overflow-hidden hover:border-yellow-400 transition-all duration-300">
                    <div className="bg-purple-400 p-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">💻</span>
                        <h4 className="text-black font-bold font-mono text-sm">{project.title.toUpperCase()}</h4>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="bg-black border border-purple-400 p-3 mb-3 font-mono">
                        <div className="text-purple-400 text-xs mb-1">&gt; DESCRIPTION.TXT</div>
                        <p className="text-purple-300 text-xs leading-relaxed">{project.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-purple-400 text-black text-xs font-mono font-bold">
                            {tech.toUpperCase()}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-purple-400 text-black text-xs font-mono font-bold">
                            +{project.technologies.length - 3}
                          </span>
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
        <div className="text-center mt-16">
          <div className="bg-black border-2 border-purple-400 p-8 font-mono">
            <div className="text-purple-400 text-sm mb-2">&gt; COLLABORATION_REQUEST.TXT</div>
            <h3 className="text-2xl font-semibold text-purple-400 mb-4 font-mono">INTERESTED_IN_WORKING_TOGETHER.exe</h3>
            <p className="text-purple-300 mb-6 max-w-2xl mx-auto text-sm">
              I'm always excited to take on new challenges and create amazing mobile experiences. 
              Let's discuss your next project!
            </p>
            <button className="px-8 py-3 bg-purple-400 text-black font-bold font-mono border-2 border-purple-400 hover:bg-black hover:text-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-400/50">
              [START_PROJECT.exe]
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
