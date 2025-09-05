import { personalInfo } from '../assets/data'

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden border-t-2 border-green-400">
      {/* 90s Matrix-style background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="text-cyan-400 text-xs md:text-sm font-mono tracking-wider mb-2">
            &gt; LOADING ABOUT.DAT...
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-cyan-400 font-mono mb-4 md:mb-6">
            ABOUT_ME.exe
          </h2>
          <p className="text-base md:text-lg text-cyan-300 max-w-3xl mx-auto font-mono px-4">
            &gt; Get to know more about my journey, passion, and what drives me to create exceptional mobile experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - 90s Terminal */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10">
              <div className="w-full h-80 md:h-96 bg-black border-2 border-cyan-400 p-3 md:p-4 font-mono">
                <div className="text-cyan-400 text-xs md:text-sm mb-3 md:mb-4">
                  &gt; SYSTEM_INFO.exe - DEVELOPER_PROFILE
                </div>
                <div className="space-y-1 md:space-y-2 text-cyan-300 text-xs md:text-sm">
                  <div>&gt; NAME: {personalInfo.name}</div>
                  <div>&gt; ROLE: {personalInfo.title}</div>
                  <div>&gt; LOCATION: KATHMANDU, NEPAL</div>
                  <div>&gt; EXPERIENCE: 2+ YEARS</div>
                  <div>&gt; SPECIALTY: FLUTTER DEVELOPMENT</div>
                  <div className="mt-3 md:mt-4">
                    <div className="text-yellow-400">&gt; LOADING PROFILE...</div>
                    <div className="w-full bg-black border border-cyan-400 h-2 mt-2">
                      <div className="h-full bg-cyan-400 animate-pulse" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 text-cyan-400 animate-pulse">
                  &gt; _
                </div>
              </div>
            </div>
            
            {/* 90s Glitch Effect */}
            <div className="absolute -top-2 -right-2 w-3 md:w-4 h-3 md:h-4 bg-cyan-400 animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-4 md:w-6 h-4 md:h-6 bg-yellow-400 animate-pulse"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            <div className="bg-black border-2 border-cyan-400 p-3 md:p-4 font-mono text-cyan-300">
              <div className="text-cyan-400 text-xs md:text-sm mb-2">&gt; BIO.TXT</div>
              <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                {personalInfo.bio}
              </p>
              <p className="text-xs md:text-sm leading-relaxed">
                I'm passionate about creating innovative mobile solutions that combine cutting-edge Flutter technology with beautiful design. 
                My journey in mobile development has led me to specialize in cross-platform apps and creating user-centered experiences.
              </p>
            </div>

            {/* What I Do */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold text-cyan-400 font-mono">WHAT_I_DO.DAT</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="flex items-center space-x-2 md:space-x-3 p-3 md:p-4 bg-black border-2 border-cyan-400">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-cyan-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-sm md:text-base">📱</span>
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-medium font-mono text-sm md:text-base">FLUTTER.EXE</h4>
                    <p className="text-cyan-300 text-xs md:text-sm font-mono">[CROSS-PLATFORM APPS]</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 md:space-x-3 p-3 md:p-4 bg-black border-2 border-yellow-400">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-sm md:text-base">🎯</span>
                  </div>
                  <div>
                    <h4 className="text-yellow-400 font-medium font-mono text-sm md:text-base">DART.DAT</h4>
                    <p className="text-yellow-300 text-xs md:text-sm font-mono">[PROGRAMMING LANGUAGE]</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 md:space-x-3 p-3 md:p-4 bg-black border-2 border-green-400">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-green-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-sm md:text-base">🔥</span>
                  </div>
                  <div>
                    <h4 className="text-green-400 font-medium font-mono text-sm md:text-base">FIREBASE.EXE</h4>
                    <p className="text-green-300 text-xs md:text-sm font-mono">[BACKEND SERVICES]</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 md:space-x-3 p-3 md:p-4 bg-black border-2 border-purple-400">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-sm md:text-base">🧩</span>
                  </div>
                  <div>
                    <h4 className="text-purple-400 font-medium font-mono text-sm md:text-base">BLOC.DAT</h4>
                    <p className="text-purple-300 text-xs md:text-sm font-mono">[STATE MANAGEMENT]</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
