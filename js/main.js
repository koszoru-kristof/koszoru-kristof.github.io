// Easter egg: click profile image multiple times
(function() {
    const img = document.querySelector('.profile-img');
    if (!img) return;
    
    let clicks = 0;
    let timer = null;
    const threshold = 7; // clicks needed
    const resetTime = 2000; // reset after 2 seconds of no clicks
    
    const messages = [
        "Collecting bugs on the highway and in the code.",
        "I debug at 100+ km/h.",
        "Loud pipes saves lives."
    ];
    
    img.addEventListener('click', function(e) {
        clicks++;
        
        // Reset timer
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => { clicks = 0; }, resetTime);
        
        if (clicks >= threshold) {
            // Pick a random message
            const msg = messages[Math.floor(Math.random() * messages.length)];
            
            // Create popup
            const popup = document.createElement('div');
            popup.className = 'easter-egg-popup';
            popup.textContent = msg;
            document.body.appendChild(popup);
            
            // Position near the image
            const rect = img.getBoundingClientRect();
            popup.style.top = (rect.bottom + window.scrollY + 10) + 'px';
            popup.style.left = (rect.left + rect.width / 2) + 'px';
            
            // Animate in
            setTimeout(() => popup.classList.add('show'), 10);
            
            // Remove after 3 seconds
            setTimeout(() => {
                popup.classList.remove('show');
                setTimeout(() => popup.remove(), 300);
            }, 3000);
            
            clicks = 0;
        }
    });
})();
