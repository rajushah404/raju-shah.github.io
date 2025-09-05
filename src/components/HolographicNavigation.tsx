import { useState, useEffect } from 'react'
import type { Section } from '../types'
import { navigationItems } from '../assets/data'

interface HolographicNavigationProps {
  currentSection: Section
  onSectionChange: (section: Section) => void
}

const HolographicNavigation: React.FC<HolographicNavigationProps> = ({ currentSection, onSectionChange }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<Section | null>(null)
  const [aiPrediction, setAiPrediction] = useState<string>('')

  // AI prediction simulation
  useEffect(() => {
    const predictions = [
      'Analyzing user behavior...',
      'Predicting next section...',
      'Neural network processing...',
      'AI recommendation: Skills section',
      'Pattern detected: User interested in projects',
      'Machine learning suggests: Contact section'
    ]
    
    const interval = setInterval(() => {
      const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)]
      setAiPrediction(randomPrediction)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const getSectionColor = (section: Section) => {
    const colors = {
      home: 'from-cyan-400 to-blue-500',
      about: 'from-green-400 to-emerald-500',
      skills: 'from-purple-400 to-violet-500',
      projects: 'from-orange-400 to-red-500',
      experience: 'from-pink-400 to-rose-500',
      contact: 'from-yellow-400 to-amber-500'
    }
    return colors[section]
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Navigation Bar */}
        <div className="flex items-center justify-between">
          {/* Holographic Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur-lg opacity-50 animate-pulse"></div>
            </div>
            <div>
              <span className="text-white font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Neural Portfolio
              </span>
              <div className="text-xs text-cyan-400">AI-Powered Experience</div>
            </div>
          </div>

          {/* AI Status Indicator */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 border border-cyan-500/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 text-sm font-medium">AI Active</span>
            </div>
            
            {aiPrediction && (
              <div className="bg-black/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-purple-500/30">
                <span className="text-purple-400 text-xs">{aiPrediction}</span>
              </div>
            )}
          </div>

          {/* Holographic Menu Toggle */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="relative p-3 bg-black/20 backdrop-blur-sm rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-cyan-400 transition-all duration-300 ${isExpanded ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-full h-0.5 bg-cyan-400 transition-all duration-300 ${isExpanded ? 'opacity-0' : ''}`}></div>
              <div className={`w-full h-0.5 bg-cyan-400 transition-all duration-300 ${isExpanded ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Holographic Navigation Panel */}
        <div className={`mt-6 transition-all duration-500 overflow-hidden ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-black/30 backdrop-blur-xl rounded-2xl border border-cyan-500/30 p-6">
            {/* AI Brain Visualization */}
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="w-16 h-16 border-2 border-cyan-400 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-cyan-400 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-cyan-400 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
              </div>
            </div>

            {/* Navigation Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id)
                    setIsExpanded(false)
                  }}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`relative group p-4 rounded-xl transition-all duration-300 ${
                    currentSection === item.id
                      ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-400/50'
                      : 'bg-white/5 border border-white/10 hover:border-cyan-400/30'
                  }`}
                >
                  {/* Holographic Effect */}
                  <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
                    hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${getSectionColor(item.id)} rounded-xl blur-lg opacity-30`}></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-white font-medium text-sm">{item.label}</div>
                    
                    {/* AI Prediction Indicator */}
                    {hoveredItem === item.id && (
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse">
                        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
                      </div>
                    )}
                  </div>

                  {/* Connection Lines */}
                  {currentSection === item.id && (
                    <div className="absolute inset-0 rounded-xl border-2 border-cyan-400 animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>

            {/* AI Controls */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-3 justify-center">
                <button className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-lg border border-purple-500/30 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300">
                  🧠 AI Analysis
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 rounded-lg border border-green-500/30 hover:from-green-500/30 hover:to-emerald-500/30 transition-all duration-300">
                  🎯 Auto-Navigate
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-lg border border-blue-500/30 hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300">
                  🔮 Predict Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default HolographicNavigation
