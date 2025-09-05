import { personalInfo } from '../assets/data'

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <div className="text-green-400 text-xs md:text-sm font-mono tracking-wider mb-2">
                &gt; INITIALIZING SYSTEM...
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-green-400 font-mono">
                FLUTTER_DEV.exe
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-cyan-400 font-mono">
                I'm <span className="text-yellow-400 animate-pulse">{personalInfo.name}</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-green-300 font-mono">
                {personalInfo.title.toUpperCase()}
              </p>
            </div>

            <div className="bg-black border-2 border-green-400 p-3 md:p-4 font-mono text-green-300">
              <div className="text-green-400 text-xs md:text-sm mb-2">&gt; BIO.TXT</div>
              <p className="text-xs md:text-sm leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 md:px-8 py-3 md:py-4 bg-green-400 text-black font-bold font-mono border-2 border-green-400 hover:bg-black hover:text-green-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-400/50 text-sm md:text-base"
              >
                [VIEW_PROJECTS]
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 md:px-8 py-3 md:py-4 border-2 border-cyan-400 text-cyan-400 font-bold font-mono hover:bg-cyan-400 hover:text-black transition-all duration-300 text-sm md:text-base"
              >
                [CONTACT_ME]
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-8 pt-6 md:pt-8">
              <div className="text-center border border-green-400 p-2 md:p-4 bg-black/50 hover:bg-green-400/10 transition-all duration-300 group">
                <div className="text-xl md:text-3xl font-bold text-green-400 font-mono group-hover:animate-pulse">2+</div>
                <div className="text-green-300 text-xs md:text-sm font-mono">YEARS.EXE</div>
                <div className="text-green-400 text-xs font-mono mt-1">EXPERIENCE</div>
              </div>
              <div className="text-center border border-cyan-400 p-2 md:p-4 bg-black/50 hover:bg-cyan-400/10 transition-all duration-300 group">
                <div className="text-xl md:text-3xl font-bold text-cyan-400 font-mono group-hover:animate-pulse">4+</div>
                <div className="text-cyan-300 text-xs md:text-sm font-mono">APPS.DAT</div>
                <div className="text-cyan-400 text-xs font-mono mt-1">DEVELOPED</div>
              </div>
              <div className="text-center border border-yellow-400 p-2 md:p-4 bg-black/50 hover:bg-yellow-400/10 transition-all duration-300 group">
                <div className="text-xl md:text-3xl font-bold text-yellow-400 font-mono group-hover:animate-pulse">2</div>
                <div className="text-yellow-300 text-xs md:text-sm font-mono">PLAY_STORE</div>
                <div className="text-yellow-400 text-xs font-mono mt-1">PUBLISHED</div>
              </div>
            </div>
          </div>

          {/* Right Column - 90s Terminal */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10">
              <div className="w-full h-80 md:h-96 bg-black border-2 border-green-400 p-3 md:p-4 font-mono">
                <div className="text-green-400 text-xs md:text-sm mb-3 md:mb-4">
                  &gt; TERMINAL.EXE - DEVELOPER_PROFILE
                </div>
                <div className="space-y-1 md:space-y-2 text-green-300 text-xs md:text-sm">
                  <div>&gt; NAME: {personalInfo.name}</div>
                  <div>&gt; ROLE: {personalInfo.title}</div>
                  <div>&gt; STATUS: <span className="text-green-400 animate-pulse">ONLINE</span></div>
                  <div>&gt; LOCATION: KATHMANDU, NEPAL</div>
                  <div>&gt; SKILLS: [FLUTTER, DART, BLOC, FIREBASE]</div>
                  <div className="mt-3 md:mt-4">
                    <div className="text-yellow-400">&gt; LOADING FLUTTER APPS...</div>
                    <div className="w-full bg-black border border-green-400 h-2 mt-2">
                      <div className="h-full bg-green-400 animate-pulse" style={{width: '90%'}}></div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 text-green-400 animate-pulse">
                  &gt; _
                </div>
              </div>
            </div>
            
            {/* 90s Glitch Effect */}
            <div className="absolute -top-2 -right-2 w-3 md:w-4 h-3 md:h-4 bg-green-400 animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-4 md:w-6 h-4 md:h-6 bg-cyan-400 animate-pulse"></div>
            <div className="absolute top-1/2 -right-1 w-1 md:w-2 h-1 md:h-2 bg-yellow-400 animate-ping"></div>
            <div className="absolute top-1/4 -left-1 w-2 md:w-3 h-2 md:h-3 bg-purple-400 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
