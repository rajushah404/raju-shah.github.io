import { useState, useEffect } from 'react'
import { skills } from '../../assets/data'

const NeuralSkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [aiRecommendation, setAiRecommendation] = useState('')
  const [neuralPatterns, setNeuralPatterns] = useState<{[key: string]: number}>({})

  // AI recommendation system
  useEffect(() => {
    const recommendations = [
      'AI Analysis: Frontend skills show exceptional growth potential',
      'Neural Network: Backend expertise aligns with market trends',
      'Machine Learning: 3D development skills are highly sought after',
      'Deep Learning: Full-stack capabilities detected',
      'AI Prediction: Consider specializing in AI/ML integration',
      'Neural Analysis: Strong foundation in modern web technologies'
    ]
    
    const interval = setInterval(() => {
      const randomRec = recommendations[Math.floor(Math.random() * recommendations.length)]
      setAiRecommendation(randomRec)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Neural pattern simulation
  useEffect(() => {
    const patterns: {[key: string]: number} = {}
    skills.forEach(skill => {
      patterns[skill.name] = Math.random() * 100
    })
    setNeuralPatterns(patterns)
  }, [])

  const skillCategories = {
    all: skills,
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
      default: return '🧠'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend': return 'from-cyan-400 to-blue-500'
      case 'backend': return 'from-green-400 to-emerald-500'
      case 'tools': return 'from-purple-400 to-violet-500'
      case 'design': return 'from-pink-400 to-rose-500'
      default: return 'from-cyan-400 to-purple-500'
    }
  }

  const displaySkills = selectedCategory === 'all' ? skills : skillCategories[selectedCategory as keyof typeof skillCategories]

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Neural Skills
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            AI-powered analysis of technical capabilities and neural learning patterns.
          </p>
          
          {/* AI Recommendation */}
          {aiRecommendation && (
            <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-4 border border-purple-500/30 max-w-3xl mx-auto">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-purple-400 font-medium">AI Recommendation</span>
              </div>
              <p className="text-cyan-300 text-sm">{aiRecommendation}</p>
            </div>
          )}
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([category, categorySkills]) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? `bg-gradient-to-r ${getCategoryColor(category)} text-white shadow-lg`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
              }`}
            >
              <span className="mr-2">{getCategoryIcon(category)}</span>
              {category.charAt(0).toUpperCase() + category.slice(1)}
              <span className="ml-2 text-xs opacity-75">({categorySkills.length})</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {displaySkills.map((skill) => (
            <div key={skill.name} className="group">
              <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 transform hover:scale-105">
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">{skill.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{skill.name}</h3>
                      <p className="text-gray-400 text-sm capitalize">{skill.category}</p>
                    </div>
                  </div>
                  
                  {/* Neural Activity Indicator */}
                  <div className="relative">
                    <div className="w-8 h-8 border-2 border-cyan-400 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="absolute inset-0 border-2 border-cyan-400 rounded-full animate-ping opacity-30"></div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-cyan-400 text-sm font-medium">Neural Level</span>
                    <span className="text-white text-sm">{skill.level}%</span>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full bg-gray-700/30 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-1000 ease-out relative"
                        style={{ width: `${skill.level}%` }}
                      >
                        {/* Animated shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Neural Pattern Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-xs text-white/50 font-mono">
                        {neuralPatterns[skill.name] ? Math.round(neuralPatterns[skill.name]) : skill.level}%
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Analysis */}
                <div className="mt-4 p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-purple-400 text-xs">🤖</span>
                    <span className="text-purple-400 text-xs font-medium">AI Analysis</span>
                  </div>
                  <p className="text-gray-300 text-xs">
                    {skill.level > 80 ? 'Exceptional proficiency detected' :
                     skill.level > 60 ? 'Strong competency confirmed' :
                     skill.level > 40 ? 'Developing expertise' : 'Learning in progress'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Neural Network Visualization */}
        <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/30">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-white mb-2">Neural Learning Patterns</h3>
            <p className="text-gray-300">Real-time analysis of skill development and learning trajectories</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 border-2 border-cyan-400 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-cyan-400 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
              </div>
              <h4 className="text-cyan-400 font-semibold mb-2">Continuous Learning</h4>
              <p className="text-gray-300 text-sm">AI-powered skill enhancement</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 border-2 border-purple-400 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-purple-400 rounded-full animate-pulse"></div>
              </div>
              <h4 className="text-purple-400 font-semibold mb-2">Pattern Recognition</h4>
              <p className="text-gray-300 text-sm">Neural network optimization</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 border-2 border-green-400 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-green-400 rounded-full animate-bounce"></div>
              </div>
              <h4 className="text-green-400 font-semibold mb-2">Adaptive Growth</h4>
              <p className="text-gray-300 text-sm">Dynamic skill evolution</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NeuralSkillsSection
