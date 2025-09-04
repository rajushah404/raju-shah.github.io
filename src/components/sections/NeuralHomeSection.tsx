import { useState, useEffect } from 'react'
import { personalInfo } from '../../assets/data'

const NeuralHomeSection: React.FC = () => {
  const [aiAnalysis, setAiAnalysis] = useState('')
  const [neuralActivity, setNeuralActivity] = useState(0)
  const [isScanning, setIsScanning] = useState(false)

  // AI Analysis simulation
  useEffect(() => {
    const analyses = [
      'Neural patterns detected: High creativity levels',
      'AI Analysis: Strong problem-solving capabilities',
      'Machine Learning: Exceptional technical skills',
      'Neural Network: Innovative thinking patterns',
      'Deep Learning: Advanced coding abilities',
      'AI Prediction: Future tech leader'
    ]
    
    const interval = setInterval(() => {
      const randomAnalysis = analyses[Math.floor(Math.random() * analyses.length)]
      setAiAnalysis(randomAnalysis)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // Neural activity simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setNeuralActivity(Math.random() * 100)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  const startScan = () => {
    setIsScanning(true)
    setTimeout(() => setIsScanning(false), 3000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative">
      {/* Neural Network Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400 rounded-full animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }}></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 border border-green-400 rounded-full animate-spin" style={{ animationDuration: '12s' }}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-pink-400 rounded-full animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - AI Avatar */}
        <div className="relative">
          {/* Holographic Avatar */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              {/* Outer Ring */}
              <div className="absolute inset-0 border-4 border-cyan-400 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-4 border-2 border-purple-400 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
              <div className="absolute inset-8 border border-green-400 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
              
              {/* Avatar */}
              <div className="absolute inset-12 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4">
                    <span className="text-4xl font-bold text-white">
                      {personalInfo.name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-cyan-400 font-bold text-lg">AI-Powered</div>
                  <div className="text-white font-semibold">Developer</div>
                </div>
              </div>

              {/* Neural Activity Indicators */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-4 h-4 bg-green-300 rounded-full animate-ping"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-3 h-3 bg-purple-300 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>

          {/* AI Analysis Panel */}
          <div className="mt-8 bg-black/30 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium">AI Analysis Active</span>
            </div>
            <div className="text-cyan-300 text-sm mb-4">{aiAnalysis}</div>
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-gray-700/30 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${neuralActivity}%` }}
                ></div>
              </div>
              <span className="text-cyan-400 text-xs">{Math.round(neuralActivity)}%</span>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 font-light">
              <span className="text-cyan-400">AI-Enhanced</span> {personalInfo.title}
            </div>
          </div>

          {/* Bio with AI Enhancement */}
          <div className="space-y-4">
            <p className="text-lg text-gray-300 leading-relaxed">
              {personalInfo.bio}
            </p>
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-500/20">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-purple-400">🤖</span>
                <span className="text-purple-400 font-medium">AI Enhancement</span>
              </div>
              <p className="text-gray-300 text-sm">
                Powered by neural networks and machine learning algorithms to deliver 
                cutting-edge solutions and innovative digital experiences.
              </p>
            </div>
          </div>

          {/* Interactive Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={startScan}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 relative overflow-hidden"
            >
              {isScanning ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Scanning...</span>
                </div>
              ) : (
                '🧠 Neural Scan'
              )}
            </button>
            
            <button className="px-8 py-4 border-2 border-purple-500/50 text-purple-300 font-semibold rounded-xl hover:bg-purple-500/10 transition-all duration-300 backdrop-blur-sm">
              🔮 AI Predict
            </button>
          </div>

          {/* Neural Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                5+
              </div>
              <div className="text-gray-400 text-sm">Neural Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-gray-400 text-sm">AI Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-gray-400 text-sm">Neural Efficiency</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scanning Effect */}
      {isScanning && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
        </div>
      )}
    </div>
  )
}

export default NeuralHomeSection
