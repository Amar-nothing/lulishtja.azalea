// ========== AZALEA FLOWERSHOP - FIXED VERSION ==========
// Kjo zgjidh TË GJITHA problemet: Hamburger + Language Switcher

document.addEventListener('DOMContentLoaded', function() {
    console.log('Azalea Flowershop - Loading fixed version...');
    
    // ========== 1. HAMBURGER MENU - 100% WORKING ==========
    const hamburger = document.getElementById('hamburger');
    const staticNav = document.getElementById('staticNav');
    const navOverlay = document.getElementById('navOverlay');
    
    if (hamburger && staticNav) {
        console.log('Hamburger elements found, setting up...');
        
        hamburger.addEventListener('click', function(e) {
            console.log('Hamburger clicked!');
            e.stopPropagation();
            
            // Toggle classes
            staticNav.classList.toggle('active');
            hamburger.classList.toggle('active');
            
            if (navOverlay) {
                navOverlay.classList.toggle('active');
            }
            
            // Toggle body scroll
            if (staticNav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking overlay
        if (navOverlay) {
            navOverlay.addEventListener('click', function(e) {
                console.log('Overlay clicked, closing menu');
                staticNav.classList.remove('active');
                hamburger.classList.remove('active');
                navOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
        
        // Close menu when clicking a link
        document.querySelectorAll('.static-nav-link').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    console.log('Nav link clicked on mobile, closing menu');
                    staticNav.classList.remove('active');
                    hamburger.classList.remove('active');
                    if (navOverlay) navOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
        
        // Close menu on window resize (desktop)
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                staticNav.classList.remove('active');
                hamburger.classList.remove('active');
                if (navOverlay) navOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        console.log('Hamburger menu setup complete!');
    } else {
        console.error('Hamburger or nav elements not found!');
    }
    
    // ========== 2. LANGUAGE SWITCHER - 100% WORKING ==========
    const langToggle = document.getElementById('langToggle');
    
    if (langToggle) {
        console.log('Language switcher found, setting up...');
        
        // Simple translations object
        const translations = {
            sq: {
                nav_home: "Kryefaqja",
                nav_blog: "Blogu",
                nav_gallery: "Galeria",
                nav_community: "Komuniteti",
                nav_about: "Rreth nesh",
                nav_contact: "Kontakti",
                hero_title: "Lule të bukura për çdo moment të veçantë",
                hero_subtitle: "Për 6 vjet kemi sjellë ngjyra dhe lumturi në shtëpitë e Pejës.",
                hero_btn_instagram: "Na ndiqni në Instagram",
                hero_btn_contact: "Na kontaktoni",
                hero_scroll: "Vazhdoni më poshtë për të mësuar më shumë"
            },
            en: {
                nav_home: "Home",
                nav_blog: "Blog",
                nav_gallery: "Gallery",
                nav_community: "Community",
                nav_about: "About Us",
                nav_contact: "Contact",
                hero_title: "Beautiful flowers for every special moment",
                hero_subtitle: "For 6 years we've brought colors and happiness to homes in Peja.",
                hero_btn_instagram: "Follow us on Instagram",
                hero_btn_contact: "Contact us",
                hero_scroll: "Continue below to learn more"
            }
        };
        
        // Current language (default Albanian)
        let currentLang = 'sq';
        
        // Load saved language
        const savedLang = localStorage.getItem('azalea-lang');
        if (savedLang === 'sq' || savedLang === 'en') {
            currentLang = savedLang;
        }
        
        // Update language display
        function updateLanguageDisplay() {
            document.querySelectorAll('.lang-code').forEach(code => {
                code.classList.remove('active');
                if (code.getAttribute('data-lang') === currentLang) {
                    code.classList.add('active');
                }
            });
        }
        
        // Translate the page
        function translatePage() {
            document.querySelectorAll('[data-key]').forEach(element => {
                const key = element.getAttribute('data-key');
                if (translations[currentLang] && translations[currentLang][key]) {
                    const text = translations[currentLang][key];
                    
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.placeholder = text;
                    } else {
                        element.textContent = text;
                    }
                }
            });
        }
        
        // Toggle language function
        function toggleLanguage() {
            currentLang = currentLang === 'sq' ? 'en' : 'sq';
            localStorage.setItem('azalea-lang', currentLang);
            updateLanguageDisplay();
            translatePage();
            console.log('Language changed to:', currentLang);
        }
        
        // Set up click events
        langToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleLanguage();
        });
        
        // Also click on individual codes
        document.querySelectorAll('.lang-code').forEach(code => {
            code.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const lang = this.getAttribute('data-lang');
                if (lang === 'sq' || lang === 'en') {
                    currentLang = lang;
                    localStorage.setItem('azalea-lang', lang);
                    updateLanguageDisplay();
                    translatePage();
                    console.log('Language changed to:', lang);
                }
            });
        });
        
        // Initial setup
        updateLanguageDisplay();
        translatePage();
        
        console.log('Language switcher setup complete! Current language:', currentLang);
    }
    
    // ========== 3. SMOOTH SCROLL ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || !href) return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = document.querySelector('.static-header')?.offsetHeight || 80;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL
                history.pushState(null, null, href);
                
                // Update active nav link
                document.querySelectorAll('.static-nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    
    // ========== 4. HERO IMAGE LOADING ==========
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        const heroImage = new Image();
        heroImage.src = 'foto_homepage_website.jpg';
        
        heroImage.onload = function() {
            heroSection.classList.remove('loading');
            heroSection.classList.add('loaded');
            heroSection.style.backgroundImage = `url('${heroImage.src}')`;
            console.log('Hero image loaded successfully');
        };
        
        heroImage.onerror = function() {
            heroSection.classList.remove('loading');
            heroSection.classList.add('loaded');
            heroSection.style.backgroundImage = 'linear-gradient(135deg, #F7EFE5, #E1F0DA, #C8DFC8)';
            console.log('Hero image failed, using gradient fallback');
        };
    }
    
    console.log('=== Azalea Flowershop - ALL SYSTEMS READY ===');
});
