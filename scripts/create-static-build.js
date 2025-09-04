import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

// Create a completely static HTML file
const staticHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Raju</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        background: black;
        color: #00ff00;
        font-family: 'Courier New', monospace;
        min-height: 100vh;
        overflow-x: hidden;
      }
      
      /* 90s Grid Background */
      body::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: 
          linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px);
        background-size: 50px 50px;
        opacity: 0.2;
        z-index: -1;
      }
      
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
      }
      
      .header {
        text-align: center;
        margin-bottom: 3rem;
        padding: 2rem;
        border: 2px solid #00ff00;
        background: rgba(0, 0, 0, 0.8);
      }
      
      h1 {
        font-size: 3rem;
        color: #00ff00;
        text-shadow: 0 0 10px #00ff00;
        margin-bottom: 1rem;
        animation: glow 2s ease-in-out infinite alternate;
      }
      
      @keyframes glow {
        from { text-shadow: 0 0 10px #00ff00; }
        to { text-shadow: 0 0 20px #00ff00, 0 0 30px #00ff00; }
      }
      
      .subtitle {
        color: #00ffff;
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
      
      .description {
        color: #00ff00;
        font-size: 1rem;
        line-height: 1.6;
      }
      
      .section {
        margin: 3rem 0;
        padding: 2rem;
        border: 2px solid #00ffff;
        background: rgba(0, 0, 0, 0.8);
      }
      
      .section h2 {
        color: #00ffff;
        font-size: 2rem;
        margin-bottom: 1rem;
        text-align: center;
      }
      
      .skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin-top: 2rem;
      }
      
      .skill-item {
        padding: 1rem;
        border: 1px solid #00ff00;
        background: rgba(0, 255, 0, 0.1);
        text-align: center;
        transition: all 0.3s ease;
      }
      
      .skill-item:hover {
        background: rgba(0, 255, 0, 0.2);
        transform: scale(1.05);
      }
      
      .contact-info {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
        margin-top: 2rem;
      }
      
      .contact-item {
        padding: 1rem;
        border: 1px solid #ffff00;
        background: rgba(255, 255, 0, 0.1);
        text-align: center;
      }
      
      .contact-item a {
        color: #ffff00;
        text-decoration: none;
      }
      
      .contact-item a:hover {
        color: #00ff00;
        text-shadow: 0 0 5px #00ff00;
      }
      
      .floating-btn {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 60px;
        height: 60px;
        background: #00ff00;
        border: 2px solid #00ff00;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;
        font-size: 1.5rem;
        cursor: pointer;
        animation: pulse 2s infinite;
        z-index: 1000;
      }
      
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }
      
      .floating-btn:hover {
        background: black;
        color: #00ff00;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <header class="header">
        <h1>RAJU.exe</h1>
        <div class="subtitle">Flutter Developer & Mobile App Specialist</div>
        <div class="description">
          Enthusiastic and skilled Flutter developer with more than 2 years of experience in creating cross-platform mobile applications. 
          Proficient in leveraging Flutter's capabilities to build beautiful and performant apps for both Android and iOS.
        </div>
      </header>
      
      <section class="section">
        <h2>SKILLS.DAT</h2>
        <div class="skills-grid">
          <div class="skill-item">
            <h3>Flutter</h3>
            <p>Cross-platform mobile development</p>
          </div>
          <div class="skill-item">
            <h3>Dart</h3>
            <p>Programming language</p>
          </div>
          <div class="skill-item">
            <h3>Firebase</h3>
            <p>Backend services</p>
          </div>
          <div class="skill-item">
            <h3>BLOC</h3>
            <p>State management</p>
          </div>
          <div class="skill-item">
            <h3>SQLite</h3>
            <p>Local database</p>
          </div>
          <div class="skill-item">
            <h3>REST API</h3>
            <p>API integration</p>
          </div>
        </div>
      </section>
      
      <section class="section">
        <h2>PROJECTS.EXE</h2>
        <div class="skills-grid">
          <div class="skill-item">
            <h3>Micro-Finance MPassbook</h3>
            <p>Mobile app for microfinance member operations</p>
          </div>
          <div class="skill-item">
            <h3>Digital Field Assistance</h3>
            <p>App for microfinance staff in the field</p>
          </div>
          <div class="skill-item">
            <h3>Human Resource Management</h3>
            <p>Staff attendance and leave management</p>
          </div>
        </div>
      </section>
      
      <section class="section">
        <h2>CONTACT.TXT</h2>
        <div class="contact-info">
          <div class="contact-item">
            <h3>Email</h3>
            <a href="mailto:rajushah2287@gmail.com">rajushah2287@gmail.com</a>
          </div>
          <div class="contact-item">
            <h3>Phone</h3>
            <a href="tel:+9779842417553">+977-9842417553</a>
          </div>
          <div class="contact-item">
            <h3>Location</h3>
            <p>Kathmandu, Nepal</p>
          </div>
          <div class="contact-item">
            <h3>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/raju-shah0" target="_blank">raju-shah0</a>
          </div>
          <div class="contact-item">
            <h3>GitHub</h3>
            <a href="https://github.com/rajushah404" target="_blank">rajushah404</a>
          </div>
        </div>
      </section>
    </div>
    
    <div class="floating-btn" onclick="scrollToTop()">
      ↑
    </div>
    
    <script>
      function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      
      // Add some interactive effects
      document.addEventListener('DOMContentLoaded', function() {
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach(item => {
          item.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 20px #00ff00';
          });
          item.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
          });
        });
        
        console.log('Static portfolio loaded successfully!');
      });
    </script>
  </body>
</html>`

// Write the static HTML file
writeFileSync('dist/index.html', staticHtml)
console.log('✅ Created static HTML build')
