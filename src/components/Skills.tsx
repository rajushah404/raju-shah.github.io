import { skills } from '../assets/data'

const Skills: React.FC = () => {
  const skillCategories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools'),
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend': return '⚛️'
      case 'backend': return '🟢'
      case 'tools': return '🛠️'
      case 'design': return '🎨'
      default: return '💻'
    }
  }

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'frontend': return 'Frontend'
      case 'backend': return 'Backend'
      case 'tools': return 'Tools & DevOps'
      case 'design': return 'Design'
      default: return 'Other'
    }
  }

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden border-t-2 border-yellow-400">
      {/* 90s Matrix-style background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center mb-16">
          <div className="text-yellow-400 text-sm font-mono tracking-wider mb-2">
            &gt; LOADING SKILLS.DAT...
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-yellow-400 font-mono mb-6">
            SKILLS.exe
          </h2>
          <p className="text-lg text-yellow-300 max-w-2xl mx-auto font-mono">
            &gt; A comprehensive overview of the technologies and tools I work with to create amazing mobile experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([category, categorySkills]) => (
            <div key={category} className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-2xl">{getCategoryIcon(category)}</span>
                <h3 className="text-2xl font-semibold text-yellow-400 font-mono">{getCategoryTitle(category).toUpperCase()}.DAT</h3>
              </div>
              
              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="bg-black border-2 border-yellow-400 p-4 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl group-hover:animate-bounce">{skill.icon}</span>
                        <div>
                          <h4 className="text-yellow-400 font-bold font-mono text-lg group-hover:text-cyan-400 transition-colors">{skill.name.toUpperCase()}</h4>
                          <p className="text-yellow-300 text-sm font-mono group-hover:text-cyan-300 transition-colors">MOBILE DEVELOPMENT</p>
                        </div>
                      </div>
                      <div className="mt-2 w-full bg-black border border-yellow-400 h-1">
                        <div className="h-full bg-yellow-400 animate-pulse" style={{width: '85%'}}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-black border-2 border-yellow-400 p-8 font-mono">
            <div className="text-yellow-400 text-sm mb-2">&gt; LEARNING_STATUS.TXT</div>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4 font-mono">ALWAYS_LEARNING.exe</h3>
            <p className="text-yellow-300 max-w-2xl mx-auto text-sm">
              Technology evolves rapidly, and I'm committed to staying at the forefront. 
              I regularly explore new frameworks, tools, and methodologies to deliver the best mobile solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <span className="px-4 py-2 bg-yellow-400 text-black rounded font-mono text-sm font-bold">CONTINUOUS_LEARNING</span>
              <span className="px-4 py-2 bg-cyan-400 text-black rounded font-mono text-sm font-bold">BEST_PRACTICES</span>
              <span className="px-4 py-2 bg-green-400 text-black rounded font-mono text-sm font-bold">PERFORMANCE_FOCUS</span>
              <span className="px-4 py-2 bg-purple-400 text-black rounded font-mono text-sm font-bold">USER_EXPERIENCE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
