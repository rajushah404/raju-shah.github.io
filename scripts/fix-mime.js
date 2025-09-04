import { readFileSync, writeFileSync, copyFileSync } from 'fs'
import { join } from 'path'

// Read the built index.html
const indexPath = 'dist/index.html'
const html = readFileSync(indexPath, 'utf8')

// Replace any module script with a regular script
const fixedHtml = html.replace(
  /<script type="module"[^>]*src="([^"]*)"[^>]*><\/script>/g,
  '<script src="$1"></script>'
)

// Write the fixed HTML
writeFileSync(indexPath, fixedHtml)

// Copy _headers file to dist
try {
  copyFileSync('public/_headers', 'dist/_headers')
  console.log('✅ _headers file copied to dist')
} catch (error) {
  console.log('⚠️  _headers file not found, skipping...')
}

console.log('✅ Fixed HTML to remove module type and copied headers')
