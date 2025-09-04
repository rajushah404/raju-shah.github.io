import { contactInfo } from '../assets/data'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden border-t-2 border-cyan-400">
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
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center mb-16">
          <div className="text-cyan-400 text-sm font-mono tracking-wider mb-2">
            &gt; LOADING CONTACT.DAT...
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-cyan-400 font-mono mb-6">
            CONTACT.exe
          </h2>
          <p className="text-lg text-cyan-300 max-w-2xl mx-auto font-mono">
            &gt; Ready to start your next project? Let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-black border-2 border-cyan-400 p-8 font-mono">
            <div className="text-cyan-400 text-sm mb-2">&gt; MESSAGE_FORM.exe</div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6 font-mono">SEND_MESSAGE.DAT</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-cyan-400 text-sm font-medium mb-2 font-mono">NAME:</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-black border-2 border-cyan-400 rounded text-cyan-300 placeholder-cyan-500 focus:outline-none focus:border-yellow-400 font-mono"
                    placeholder="YOUR_NAME"
                  />
                </div>
                <div>
                  <label className="block text-cyan-400 text-sm font-medium mb-2 font-mono">EMAIL:</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-black border-2 border-cyan-400 rounded text-cyan-300 placeholder-cyan-500 focus:outline-none focus:border-yellow-400 font-mono"
                    placeholder="YOUR@EMAIL.COM"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-cyan-400 text-sm font-medium mb-2 font-mono">SUBJECT:</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-black border-2 border-cyan-400 rounded text-cyan-300 placeholder-cyan-500 focus:outline-none focus:border-yellow-400 font-mono"
                  placeholder="PROJECT_INQUIRY"
                />
              </div>
              
              <div>
                <label className="block text-cyan-400 text-sm font-medium mb-2 font-mono">MESSAGE:</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 bg-black border-2 border-cyan-400 rounded text-cyan-300 placeholder-cyan-500 focus:outline-none focus:border-yellow-400 resize-none font-mono"
                  placeholder="TELL_ME_ABOUT_YOUR_PROJECT..."
                />
              </div>
              
              <button 
                type="submit"
                className="w-full px-6 py-3 bg-cyan-400 text-black font-bold font-mono border-2 border-cyan-400 hover:bg-black hover:text-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-400/50"
              >
                [SEND_MESSAGE.exe]
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-black border-2 border-cyan-400 p-6 font-mono">
              <div className="text-cyan-400 text-sm mb-2">&gt; CONTACT_INFO.TXT</div>
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6 font-mono">CONTACT_INFORMATION.exe</h3>
              <p className="text-cyan-300 mb-8 text-sm">
                I'm always interested in hearing about new opportunities and exciting mobile projects. 
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-black border-2 border-cyan-400 hover:border-yellow-400 transition-all duration-300 group">
                <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center group-hover:bg-yellow-400 transition-colors">
                  <span className="text-black text-xl group-hover:animate-bounce">📧</span>
                </div>
                <div className="font-mono">
                  <h4 className="text-cyan-400 font-medium text-sm group-hover:text-yellow-400 transition-colors">EMAIL</h4>
                  <p className="text-cyan-300 text-sm group-hover:text-yellow-300 transition-colors">{contactInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-black border-2 border-green-400 hover:border-purple-400 transition-all duration-300 group">
                <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center group-hover:bg-purple-400 transition-colors">
                  <span className="text-black text-xl group-hover:animate-bounce">📱</span>
                </div>
                <div className="font-mono">
                  <h4 className="text-green-400 font-medium text-sm group-hover:text-purple-400 transition-colors">PHONE</h4>
                  <p className="text-green-300 text-sm group-hover:text-purple-300 transition-colors">{contactInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-black border-2 border-yellow-400 hover:border-green-400 transition-all duration-300 group">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center group-hover:bg-green-400 transition-colors">
                  <span className="text-black text-xl group-hover:animate-bounce">📍</span>
                </div>
                <div className="font-mono">
                  <h4 className="text-yellow-400 font-medium text-sm group-hover:text-green-400 transition-colors">LOCATION</h4>
                  <p className="text-yellow-300 text-sm group-hover:text-green-300 transition-colors">{contactInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-black border-2 border-cyan-400 p-6 font-mono">
              <div className="text-cyan-400 text-sm mb-2">&gt; SOCIAL_LINKS.DAT</div>
              <h4 className="text-cyan-400 font-medium mb-4 font-mono">FOLLOW_ME.exe</h4>
              <div className="flex space-x-4">
                <a 
                  href={contactInfo.linkedin}
                  className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center hover:bg-yellow-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                <a 
                  href={contactInfo.github}
                  className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center hover:bg-purple-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>

                {contactInfo.twitter && (
                  <a 
                    href={contactInfo.twitter}
                    className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center hover:bg-cyan-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-black border-2 border-green-400 p-4 font-mono">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium font-mono">STATUS: AVAILABLE FOR NEW PROJECTS</span>
              </div>
              <p className="text-green-300 text-sm mt-2">
                I'm currently accepting new mobile projects and would love to hear about your ideas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
