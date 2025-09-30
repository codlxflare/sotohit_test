const fs = require('fs');
const path = require('path');

// Read the index.html file
const indexPath = path.join(__dirname, 'frontend', 'build', 'index.html');
let content = fs.readFileSync(indexPath, 'utf8');

// Fix all absolute paths to relative paths
content = content.replace(/src="\//g, 'src="./');
content = content.replace(/href="\//g, 'href="./');

// Write the fixed content back
fs.writeFileSync(indexPath, content);

console.log('✅ Fixed paths in index.html for GitHub Pages');
