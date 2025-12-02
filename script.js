// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('glitch-title');
    const text = title.textContent;
    
    // Array of glitch characters (like the CodePen example)
    const glitches = '`¡™£¢∞§¶•ªº–≠åß∂ƒ©˙∆˚¬…æ≈ç√∫˜µ≤≥÷/?░▒▓<>/@#$%^&*()'.split('');
    
    // ============================================
    // TOGGLE THIS: Set to true to repeat effect every 5 seconds, false for one-time only
    const REPEAT_ANIMATION = true;
    // ============================================
    
    function applyGlitchEffect() {
        // Clear the title
        title.textContent = '';
        
        // Split text into individual characters and wrap each in a span
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.className = 'char';
            span.textContent = char;
            span.setAttribute('data-char', char);
            
            // Add staggered animation delay
            const delay = index * 0.08;
            span.style.setProperty('--delay', `${delay}s`);
            
            // Set 10 random glitch characters for this character
            for (let i = 0; i < 10; i++) {
                const randomGlitch = glitches[Math.floor(Math.random() * glitches.length)];
                span.style.setProperty(`--g${i}`, `"${randomGlitch}"`);
            }
            
            title.appendChild(span);
        });
    }
    
    // Run the effect initially
    applyGlitchEffect();
    
    // If REPEAT_ANIMATION is true, repeat every 4 seconds
    if (REPEAT_ANIMATION) {
        setInterval(applyGlitchEffect, 4000);
    }
    
    // ============================================
    // EMAIL COPY FUNCTIONALITY
    // ============================================
    const emailLink = document.getElementById('email-link');
    const originalText = emailLink.textContent;
    
    emailLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Copy email to clipboard
        navigator.clipboard.writeText('hello@gambia.com').then(function() {
            // Change text temporarily
            emailLink.textContent = 'email copied! share your ideas';
            
            // Revert back after 2 seconds
            setTimeout(function() {
                emailLink.textContent = originalText;
            }, 2000);
        }).catch(function(err) {
            console.error('Failed to copy email: ', err);
        });
    });
});