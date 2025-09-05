import { readFileSync, writeFileSync, copyFileSync } from 'fs'
import { join } from 'path'

// Read the built index.html
const indexPath = 'dist/index.html'
const html = readFileSync(indexPath, 'utf8')

// Replace any module script with a regular script and also handle any remaining module references
let fixedHtml = html.replace(
  /<script type="module"[^>]*src="([^"]*)"[^>]*><\/script>/g,
  '<script src="$1"></script>'
)

// Also remove any crossorigin attributes that might cause issues
fixedHtml = fixedHtml.replace(
  /<script[^>]*crossorigin[^>]*>/g,
  (match) => match.replace(/\s*crossorigin[^>]*/, '')
)

// Add favicon link to the HTML
const htmlWithFavicon = fixedHtml.replace(
  '<title>Raju</title>',
  '<title>Raju</title>\n    <link rel="icon" type="image/x-icon" href="/favicon.ico">'
)

// Write the fixed HTML
writeFileSync(indexPath, htmlWithFavicon)

// Copy favicon from public directory
try {
  copyFileSync('public/favicon.ico', 'dist/favicon.ico')
  console.log('✅ favicon.ico copied to dist')
} catch (error) {
  // Create a simple favicon.ico file if not found
  writeFileSync('dist/favicon.ico', '')
  console.log('✅ Created empty favicon.ico')
}

// Copy .htaccess file to dist
try {
  copyFileSync('public/.htaccess', 'dist/.htaccess')
  console.log('✅ .htaccess file copied to dist')
} catch (error) {
  console.log('⚠️  .htaccess file not found, skipping...')
}

console.log('✅ Fixed HTML to remove module type and added favicon')
