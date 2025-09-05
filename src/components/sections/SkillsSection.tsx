import { skills } from '../../assets/data'

const SkillsSection: React.FC = () => {
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
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with to create amazing digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([category, categorySkills]) => (
            <div key={category} className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-2xl">{getCategoryIcon(category)}</span>
                <h3 className="text-2xl font-semibold text-white">{getCategoryTitle(category)}</h3>
              </div>
              
              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700/30 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-blue-500/25"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-4">Always Learning</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to staying at the forefront. 
              I regularly explore new frameworks, tools, and methodologies to deliver the best solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm">Continuous Learning</span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm">Best Practices</span>
              <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm">Performance Focus</span>
              <span className="px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">User Experience</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsSection
