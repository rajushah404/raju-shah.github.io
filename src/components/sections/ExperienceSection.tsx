import { experience } from '../../assets/data'

const ExperienceSection: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my expertise in web development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((exp) => (
              <div key={exp.id} className="relative flex items-start">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-black/20 z-10"></div>

                {/* Content */}
                <div className="ml-16 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{exp.position}</h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.duration}</span>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-white/10 text-white text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Education</h3>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h4 className="text-xl font-semibold text-white mb-1">Bachelor of Computer Science</h4>
                <p className="text-blue-400 font-medium">University of Technology</p>
                <p className="text-gray-300 mt-2">Specialized in Software Engineering and Web Development</p>
              </div>
              <span className="text-gray-400 text-sm mt-4 md:mt-0">2015 - 2019</span>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400">🏆</span>
                </div>
                <h4 className="text-white font-semibold">AWS Certified Developer</h4>
              </div>
              <p className="text-gray-300 text-sm">Amazon Web Services</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-green-400">📜</span>
                </div>
                <h4 className="text-white font-semibold">React Professional</h4>
              </div>
              <p className="text-gray-300 text-sm">Meta (Facebook)</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-4">Ready to Work Together?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              With years of experience in modern web technologies, I'm ready to bring your ideas to life.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceSection
