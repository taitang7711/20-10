const fs = require('fs');

// Read file
let content = fs.readFileSync('index.html', 'utf8');

// Replace all broken emoji characters
const replacements = [
    // Background elements
    [/(<div class="floating-element absolute top-20 right-20 text-5xl opacity-40 animate-pulse">)[^<]+(<\/div>)/g, '$1💎$2'],
    [/(<div class="floating-element absolute bottom-20 left-20 text-4xl opacity-35 animate-bounce"\s+style="animation-delay: 1s;">)[^<]+(<\/div>)/g, '$1🌊$2'],
    [/(<div class="floating-element absolute bottom-10 right-10 text-5xl opacity-30 animate-pulse"\s+style="animation-delay: 2s;">)[^<]+(<\/div>)/g, '$1💙$2'],
    
    // Heart overlays
    [/(<div class="absolute -top-4 -right-4 text-4xl animate-bounce intro-heart">)[^<]+(<\/div>)/g, '$1💙$2'],
    [/(<div class="absolute -bottom-4 -left-4 text-3xl animate-pulse intro-heart"\s+style="animation-delay: 0\.5s;">)[^<]+(<\/div>)/g, '$1💎$2'],
    
    // Button text
    [/(Bắt đầu nhé )[^<\n]+/g, '$1💙'],
    
    // Floating message
    [/([💝�])\s*Em kéo xuống nhé !!\s*[💝�]/g, '💙 Em kéo xuống nhé !! 💙'],
    
    // Petals
    [/(<div class="petal absolute text-blue-400 text-lg animate-float"\s+style="left: 40%; animation-delay: 2s; animation-duration: 10s;">)[^<]+(<\/div>)/g, '$1🌊$2'],
    
    // Flower interaction
    [/(<div class="flower text-6xl" data-message="Anh không bao giờ quên em">)[^<]+(<\/div>)/g, '$1🌊$2'],
    
    // Heart prompt
    [/([💙�])\s*Nhấn vào trái tim nhé\s*[💙�]/g, '💙 Nhấn vào trái tim nhé 💙'],
    
    // Final button
    [/(Cảm ơn anh\s*)[^<\n]+(<\/button>)/g, '$1💙$2']
];

// Apply all replacements
replacements.forEach(([pattern, replacement]) => {
    content = content.replace(pattern, replacement);
});

// Write file back with UTF-8
fs.writeFileSync('index.html', content, 'utf8');

console.log('✅ Fixed all emoji encoding issues!');
