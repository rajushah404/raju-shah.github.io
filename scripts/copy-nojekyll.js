import { copyFileSync } from 'fs'
import { join } from 'path'

// Copy .nojekyll file to dist folder
try {
  copyFileSync('public/.nojekyll', 'dist/.nojekyll')
  console.log('✅ .nojekyll file copied to dist folder')
} catch (error) {
  console.error('❌ Error copying .nojekyll file:', error.message)
}
