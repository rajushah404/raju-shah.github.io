import { readFileSync, writeFileSync, copyFileSync } from 'fs'
import { join } from 'path'

// Read the built index.html
const indexPath = 'dist/index.html'
const html = readFileSync(indexPath, 'utf8')

// Create a completely compatible HTML file
const compatibleHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Raju</title>
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <script>
      // Inline the entire application to avoid module loading issues
      (function() {
        // This will be replaced with the actual bundled JavaScript content
        console.log('Loading React application...');
        
        // Create a script element to load the bundled JS
        const script = document.createElement('script');
        script.src = '/assets/index.js';
        script.async = false;
        script.defer = false;
        document.head.appendChild(script);
      })();
    </script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`

// Write the compatible HTML
writeFileSync(indexPath, compatibleHtml)

// Copy favicon from public directory
try {
  copyFileSync('public/favicon.ico', 'dist/favicon.ico')
  console.log('✅ favicon.ico copied to dist')
} catch (error) {
  // Create a simple favicon.ico file if not found
  writeFileSync('dist/favicon.ico', '')
  console.log('✅ Created empty favicon.ico')
}

console.log('✅ Created GitHub Pages compatible build')
