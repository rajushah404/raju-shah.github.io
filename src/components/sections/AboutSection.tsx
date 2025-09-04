import { personalInfo } from '../../assets/data'

const AboutSection: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Visual */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-3xl">👨‍💻</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">About Me</h3>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm passionate about creating innovative solutions that combine cutting-edge technology with beautiful design. 
                My journey in web development has led me to specialize in 3D web experiences and modern frontend frameworks.
              </p>
            </div>

            {/* Skills Preview */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">What I Do</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400">⚛️</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Frontend Development</h4>
                    <p className="text-gray-400 text-sm">React, Vue, TypeScript</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-purple-400">🎮</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">3D Web Experiences</h4>
                    <p className="text-gray-400 text-sm">Three.js, WebGL</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-green-400">🟢</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Backend Development</h4>
                    <p className="text-gray-400 text-sm">Node.js, Python</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-yellow-400">🎨</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">UI/UX Design</h4>
                    <p className="text-gray-400 text-sm">Figma, Design Systems</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Download CV Button */}
            <div className="pt-4">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
