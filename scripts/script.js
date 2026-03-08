
        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Animate skill bars
                    if (entry.target.querySelector('.skill-fill')) {
                        entry.target.querySelectorAll('.skill-fill').forEach(bar => {
                            bar.style.width = bar.getAttribute('data-width');
                        });
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.style.padding = '0.5rem 0';
                header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            } else {
                header.style.padding = '1rem 0';
                header.style.boxShadow = 'none';
            }
        });

        // Mobile menu toggle
        function toggleMenu() {
            const nav = document.querySelector('.nav-links');
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
            nav.style.position = 'absolute';
            nav.style.top = '100%';
            nav.style.left = '0';
            nav.style.right = '0';
            nav.style.background = 'white';
            nav.style.flexDirection = 'column';
            nav.style.padding = '2rem';
            nav.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        }



        function toggleDarkMode(){
    const body = document.body;
    const btn = document.getElementById("darkModeBtn");

    body.classList.toggle("dark-mode");

    if(body.classList.contains("dark-mode")){
        btn.textContent = "☀ Light Mode";
        localStorage.setItem("theme","dark");
    } else {
        btn.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme","light");
    }
}

// Remember user preference
window.addEventListener("load", ()=>{
    if(localStorage.getItem("theme") === "dark"){
        document.body.classList.add("dark-mode");
        document.getElementById("darkModeBtn").textContent = "☀ Light Mode";
    }
});
