import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

// Read the built index.html
const indexPath = 'dist/index.html'
const html = readFileSync(indexPath, 'utf8')

// Replace the module script with a regular script
const fixedHtml = html.replace(
  '<script type="module" crossorigin src="/raju-shah.github.io/assets/index.js"></script>',
  '<script src="/raju-shah.github.io/assets/index.js"></script>'
)

// Write the fixed HTML
writeFileSync(indexPath, fixedHtml)
console.log('✅ Fixed HTML to remove module type')
