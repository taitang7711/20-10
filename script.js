// Advanced JavaScript for romantic website
class RomanticWebsite {
    constructor() {
        this.audioContext = null;
        this.analyzer = null;
        this.isInitialized = false;
        this.subtitles = [];
        this.currentSubtitle = 0;
        this.init();
    }

    async init() {
        await this.loadSubtitles();
        this.setupAudioVisualization();
        this.setupAdvancedAnimations();
        this.setupInteractions();
        this.startSubtitleDisplay();
        this.isInitialized = true;
    }

    async loadSubtitles() {
        try {
            const response = await fetch('music/sub.srt');
            const srtText = await response.text();
            this.subtitles = this.parseSRT(srtText);
        } catch (error) {
            console.error('Could not load subtitles:', error);
        }
    }

    parseSRT(srtText) {
        const blocks = srtText.trim().split('\n\n');
        return blocks.map(block => {
            const lines = block.split('\n');
            if (lines.length >= 3) {
                const timeMatch = lines[1].match(/(\d{2}):(\d{2}):(\d{2}),(\d{3}) --> (\d{2}):(\d{2}):(\d{2}),(\d{3})/);
                if (timeMatch) {
                    const startTime = this.timeToSeconds(timeMatch[1], timeMatch[2], timeMatch[3], timeMatch[4]);
                    const endTime = this.timeToSeconds(timeMatch[5], timeMatch[6], timeMatch[7], timeMatch[8]);
                    const text = lines.slice(2).join(' ').replace(/\[.*?\]/g, '').trim();
                    
                    if (text && !text.includes('Nhạc') && text !== 'Là...') {
                        return { startTime, endTime, text };
                    }
                }
            }
            return null;
        }).filter(subtitle => subtitle !== null);
    }

    timeToSeconds(hours, minutes, seconds, milliseconds) {
        return parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds) + parseInt(milliseconds) / 1000;
    }

    setupAudioVisualization() {
        const bgMusic = document.getElementById('backgroundMusic');
        
        bgMusic.addEventListener('loadeddata', () => {
            if (!this.audioContext) {
                this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const source = this.audioContext.createMediaElementSource(bgMusic);
                this.analyzer = this.audioContext.createAnalyser();
                source.connect(this.analyzer);
                this.analyzer.connect(this.audioContext.destination);
                this.analyzer.fftSize = 256;
            }
        });
    }

    startSubtitleDisplay() {
        const bgMusic = document.getElementById('backgroundMusic');
        const subtitleContainer = this.createSubtitleContainer();
        
        const updateSubtitles = () => {
            if (this.subtitles.length > 0 && !bgMusic.paused) {
                const currentTime = bgMusic.currentTime;
                const currentSub = this.subtitles.find(sub => 
                    currentTime >= sub.startTime && currentTime <= sub.endTime
                );
                
                if (currentSub && currentSub.text) {
                    this.displaySubtitle(subtitleContainer, currentSub.text);
                } else {
                    subtitleContainer.style.opacity = '0';
                }
            }
            requestAnimationFrame(updateSubtitles);
        };
        
        bgMusic.addEventListener('play', updateSubtitles);
    }

    createSubtitleContainer() {
        const container = document.createElement('div');
        container.id = 'subtitle-container';
        container.className = 'fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-6 py-3 rounded-lg text-center max-w-md transition-opacity duration-500 z-40 dancing-script';
        container.style.opacity = '0';
        document.body.appendChild(container);
        return container;
    }

    displaySubtitle(container, text) {
        if (container.textContent !== text) {
            container.textContent = text;
            container.style.opacity = '1';
            
            // Add gentle animation
            gsap.fromTo(container, 
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
            );
        }
    }

    removeSubtitle(container) {
        if (container) {
            // Animate out the subtitle
            gsap.to(container, {
                y: -20,
                opacity: 0,
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => {
                    container.textContent = '';
                    container.style.opacity = '0';
                }
            });
        }
    }
    

    setupAdvancedAnimations() {
        // Create animated background particles
        this.createBackgroundParticles();
        
        // Setup scroll-triggered animations
        this.setupScrollAnimations();
        
        // Setup interactive elements
        this.setupInteractiveElements();
    }

    createBackgroundParticles() {
        const particleContainer = document.createElement('div');
        particleContainer.className = 'fixed inset-0 pointer-events-none z-0';
        document.body.appendChild(particleContainer);

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'absolute w-2 h-2 bg-pink-300 rounded-full opacity-30';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            particleContainer.appendChild(particle);
            
            gsap.to(particle, {
                y: -window.innerHeight,
                duration: 10 + Math.random() * 10,
                repeat: -1,
                ease: "none",
                delay: Math.random() * 10
            });
        }
    }

    setupScrollAnimations() {
        // Advanced parallax for background elements
        gsap.utils.toArray('.floating-hearts').forEach(heart => {
            gsap.to(heart, {
                y: -100,
                scrollTrigger: {
                    trigger: heart,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        });

        // Text animations with stagger
        gsap.utils.toArray('.story-content p').forEach((paragraph, index) => {
            gsap.fromTo(paragraph, {
                x: index % 2 === 0 ? -100 : 100,
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: paragraph,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        });
    }

    setupInteractiveElements() {
        // Enhanced flower interactions
        document.querySelectorAll('.flower').forEach(flower => {
            flower.addEventListener('mouseenter', () => {
                gsap.to(flower, {
                    scale: 1.3,
                    rotation: 15,
                    duration: 0.3,
                    ease: "back.out(1.7)"
                });
                this.createSparkles(flower);
            });

            flower.addEventListener('mouseleave', () => {
                gsap.to(flower, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.3,
                    ease: "back.out(1.7)"
                });
            });
        });

        // Enhanced heart button
        const heartBtn = document.getElementById('heartBtn');
        if (heartBtn) {
            heartBtn.addEventListener('click', () => {
                this.createHeartExplosion(heartBtn);
                this.playHeartSound();
            });
        }
    }

    createSparkles(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 5; i++) {
            const sparkle = document.createElement('div');
            sparkle.textContent = '✨';
            sparkle.style.position = 'fixed';
            sparkle.style.left = centerX + 'px';
            sparkle.style.top = centerY + 'px';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '1000';
            sparkle.style.fontSize = '0.8rem';
            
            document.body.appendChild(sparkle);
            
            gsap.to(sparkle, {
                x: (Math.random() - 0.5) * 100,
                y: (Math.random() - 0.5) * 100,
                scale: 0,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                onComplete: () => sparkle.remove()
            });
        }
    }

    createHeartExplosion(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.textContent = '💙';
            heart.style.position = 'fixed';
            heart.style.left = centerX + 'px';
            heart.style.top = centerY + 'px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '1000';
            heart.style.fontSize = '1.5rem';
            
            document.body.appendChild(heart);
            
            const angle = (i / 15) * Math.PI * 2;
            const distance = 150 + Math.random() * 100;
            
            gsap.to(heart, {
                x: Math.cos(angle) * distance,
                y: Math.sin(angle) * distance,
                scale: 0,
                opacity: 0,
                rotation: Math.random() * 360,
                duration: 2,
                ease: "power2.out",
                onComplete: () => heart.remove()
            });
        }
    }

    playHeartSound() {
        // Create a simple heart beat sound using Web Audio API
        if (this.audioContext) {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.3);
            
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.3);
        }
    }

    setupInteractions() {
        // Setup touch interactions for mobile
        this.setupTouchInteractions();
        
        // Setup keyboard shortcuts
        this.setupKeyboardShortcuts();
        
        // Setup mouse trail effect
        this.setupMouseTrail();
    }

    setupTouchInteractions() {
        document.addEventListener('touchstart', (e) => {
            const touch = e.touches[0];
            this.createTouchRipple(touch.clientX, touch.clientY);
        });
    }

    createTouchRipple(x, y) {
        const ripple = document.createElement('div');
        ripple.style.position = 'fixed';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 193, 204, 0.6)';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.pointerEvents = 'none';
        ripple.style.zIndex = '1000';
        
        document.body.appendChild(ripple);
        
        gsap.to(ripple, {
            scale: 10,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            onComplete: () => ripple.remove()
        });
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case ' ':
                    e.preventDefault();
                    this.toggleMusic();
                    break;
                case 'ArrowDown':
                    this.scrollToNextSection();
                    break;
                case 'ArrowUp':
                    this.scrollToPrevSection();
                    break;
            }
        });
    }

    toggleMusic() {
        const bgMusic = document.getElementById('backgroundMusic');
        const musicToggle = document.getElementById('musicToggle');
        
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.textContent = '⏸️';
        } else {
            bgMusic.pause();
            musicToggle.textContent = '🎵';
        }
    }

    scrollToNextSection() {
        const sections = document.querySelectorAll('section');
        const currentScroll = window.scrollY;
        
        for (let section of sections) {
            if (section.offsetTop > currentScroll + 100) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: section,
                    ease: "power2.inOut"
                });
                break;
            }
        }
    }

    scrollToPrevSection() {
        const sections = Array.from(document.querySelectorAll('section')).reverse();
        const currentScroll = window.scrollY;
        
        for (let section of sections) {
            if (section.offsetTop < currentScroll - 100) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: section,
                    ease: "power2.inOut"
                });
                break;
            }
        }
    }

    setupMouseTrail() {
        const trail = [];
        const trailLength = 10;

        document.addEventListener('mousemove', (e) => {
            trail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
            
            if (trail.length > trailLength) {
                trail.shift();
            }
            
            this.updateMouseTrail(trail);
        });
    }

    updateMouseTrail(trail) {
        trail.forEach((point, index) => {
            if (!point.element) {
                point.element = document.createElement('div');
                point.element.style.position = 'fixed';
                point.element.style.width = '8px';
                point.element.style.height = '8px';
                point.element.style.borderRadius = '50%';
                point.element.style.background = 'rgba(255, 193, 204, 0.8)';
                point.element.style.pointerEvents = 'none';
                point.element.style.zIndex = '999';
                point.element.style.transform = 'translate(-50%, -50%)';
                document.body.appendChild(point.element);
            }
            
            const opacity = (index + 1) / trail.length;
            const scale = opacity;
            
            gsap.set(point.element, {
                left: point.x,
                top: point.y,
                opacity: opacity,
                scale: scale
            });
        });
    }
}

// Initialize the romantic website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const website = new RomanticWebsite();
    
    // Add loading screen
    const loadingScreen = document.createElement('div');
    // Blue heart + blue background
    loadingScreen.innerHTML = '<div class="loading-heart">💙</div>';
    loadingScreen.style.cssText = 'position: fixed; inset: 0; background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 50%, #90CAF9 100%); z-index: 9999; display: flex; align-items: center; justify-content: center;';
    document.body.appendChild(loadingScreen);
    
    // Remove loading screen after initialization
    setTimeout(() => {
        gsap.to(loadingScreen, {
            opacity: 0,
            duration: 1,
            onComplete: () => loadingScreen.remove()
        });
    }, 2000);
});