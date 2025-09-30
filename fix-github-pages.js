const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing GitHub Pages deployment...');

// Fix frontend/build/index.html
const buildIndexPath = path.join(__dirname, 'frontend', 'build', 'index.html');
if (fs.existsSync(buildIndexPath)) {
    let content = fs.readFileSync(buildIndexPath, 'utf8');
    
    // Fix all absolute paths to relative paths
    content = content.replace(/src="\/sotohit_test\//g, 'src="./');
    content = content.replace(/href="\/sotohit_test\//g, 'href="./');
    content = content.replace(/src="\//g, 'src="./');
    content = content.replace(/href="\//g, 'href="./');
    
    fs.writeFileSync(buildIndexPath, content);
    console.log('✅ Fixed paths in frontend/build/index.html');
}

// Fix root index.html
const rootIndexPath = path.join(__dirname, 'index.html');
if (fs.existsSync(rootIndexPath)) {
    let content = fs.readFileSync(rootIndexPath, 'utf8');
    
    // Fix all absolute paths to relative paths
    content = content.replace(/src="\/sotohit_test\//g, 'src="./');
    content = content.replace(/href="\/sotohit_test\//g, 'href="./');
    content = content.replace(/src="\//g, 'src="./');
    content = content.replace(/href="\//g, 'href="./');
    
    fs.writeFileSync(rootIndexPath, content);
    console.log('✅ Fixed paths in root index.html');
}

// Copy images to build directory
const buildDir = path.join(__dirname, 'frontend', 'build');
const imageFiles = [
    'airpods.webp', 'airtag.webp', 'apple_mac.webp', 'apple_watch.webp',
    'dyson.webp', 'game.webp', 'img_32.webp', 'ipad_new_2022.webp',
    'iphone_14_colors.webp', 'iphone_15.webp', 'iphone_15_plus.webp',
    'iphone_16_all_color.webp', 'iphone_16_plus.webp', 'iphone_16_pro_max.webp',
    'iphone_16e.webp', 'iphone_17_pro_all_colors.webp', 'iphone_17_pro_max_all_colors.webp',
    'iphone_17_promo.webp', 'iphone_air_promo.webp', 'iphone-13-wallpapers-and-model-colors.webp',
    'remeshki_apple_watch.webp', 'snimok_ekrana_2022-10-02_v_150038.webp', 'usb.webp',
    'logo.png'
];

imageFiles.forEach(file => {
    const srcPath = path.join(__dirname, file);
    const destPath = path.join(buildDir, file);
    
    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`✅ Copied ${file} to build directory`);
    }
});

console.log('🎉 GitHub Pages deployment fixed!');
