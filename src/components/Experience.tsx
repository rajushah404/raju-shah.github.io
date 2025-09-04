import { experience } from '../assets/data'

const Experience: React.FC = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden border-t-2 border-green-400">
      {/* 90s Matrix-style background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-green-400/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center mb-16">
          <div className="text-green-400 text-sm font-mono tracking-wider mb-2">
            &gt; LOADING EXPERIENCE.DAT...
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-green-400 font-mono mb-6">
            EXPERIENCE.exe
          </h2>
          <p className="text-lg text-green-300 max-w-2xl mx-auto font-mono">
            &gt; My professional journey and the experiences that have shaped my expertise in mobile development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-cyan-400"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((exp) => (
              <div key={exp.id} className="relative flex items-start">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-green-400 rounded-full border-4 border-black z-10 animate-pulse"></div>

                {/* Content */}
                <div className="ml-16 bg-black border-2 border-green-400 p-6 hover:border-cyan-400 transition-all duration-300 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-green-400 mb-1 font-mono">{exp.position.toUpperCase()}</h3>
                      <p className="text-cyan-400 font-medium font-mono">{exp.company.toUpperCase()}</p>
                    </div>
                    <span className="text-green-300 text-sm mt-2 md:mt-0 font-mono">{exp.duration}</span>
                  </div>

                  <div className="bg-black border border-green-400 p-4 mb-4 font-mono">
                    <div className="text-green-400 text-sm mb-2">&gt; JOB_DESCRIPTION.TXT</div>
                    <p className="text-green-300 text-sm leading-relaxed">{exp.description}</p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <div className="text-green-400 text-sm font-mono mb-2">&gt; TECHNOLOGIES.DAT</div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-green-400 text-black text-sm font-mono font-bold"
                        >
                          {tech.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-black border-2 border-green-400 p-8 font-mono">
            <div className="text-green-400 text-sm mb-2">&gt; COLLABORATION_REQUEST.TXT</div>
            <h3 className="text-2xl font-semibold text-green-400 mb-4 font-mono">READY_TO_WORK_TOGETHER.exe</h3>
            <p className="text-green-300 mb-6 max-w-2xl mx-auto text-sm">
              With years of experience in Flutter mobile development, I'm ready to bring your mobile app ideas to life.
            </p>
            <button className="px-8 py-3 bg-green-400 text-black font-bold font-mono border-2 border-green-400 hover:bg-black hover:text-green-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-400/50">
              [LET'S_CONNECT.exe]
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
