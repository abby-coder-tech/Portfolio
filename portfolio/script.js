 // Theme Toggle
        function toggleTheme() {
            const body = document.body;
            const themeToggle = document.querySelector('.theme-toggle i');
            
            body.classList.toggle('light-mode');
            
            if (body.classList.contains('light-mode')) {
                themeToggle.className = 'fas fa-moon';
                localStorage.setItem('theme', 'light');
            } else {
                themeToggle.className = 'fas fa-sun';
                localStorage.setItem('theme', 'dark');
            }
        }

        // Load saved theme
        document.addEventListener('DOMContentLoaded', function() {
            const savedTheme = localStorage.getItem('theme');
            const themeToggle = document.querySelector('.theme-toggle i');
            
            if (savedTheme === 'light') {
                document.body.classList.add('light-mode');
                themeToggle.className = 'fas fa-moon';
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(26, 26, 46, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(255, 182, 193, 0.1)';
            } else {
                navbar.style.background = 'rgba(26, 26, 46, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        // Observe all sections for animations
        document.querySelectorAll('.section').forEach(section => {
            section.classList.add('fade-in-up');
            observer.observe(section);
        });

        // Animate skill bars when they come into view
        const skillObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBars = entry.target.querySelectorAll('.skill-progress');
                    skillBars.forEach(bar => {
                        bar.style.animation = 'fillBar 2s ease-out forwards';
                    });
                }
            });
        }, observerOptions);

        document.querySelectorAll('.skill-category').forEach(category => {
            skillObserver.observe(category);
        });

        // Form submission handler
        function handleFormSubmit(event) {
            event.preventDefault();
            
            const submitBtn = event.target.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                submitBtn.style.background = 'linear-gradient(45deg, #28a745, #20c997)';
                
                // Reset form
                event.target.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = 'linear-gradient(45deg, var(--primary-pink), var(--secondary-pink))';
                }, 3000);
            }, 2000);
        }

        // Add typing effect to hero text
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }

        // Initialize typing effect
        window.addEventListener('load', function() {
            const heroTitle = document.querySelector('.hero h1');
            const heroSubtitle = document.querySelector('.hero p');
            
            setTimeout(() => {
                typeWriter(heroTitle, 'Abigail Mathe Mbizana', 50);
            }, 1000);
            
            setTimeout(() => {
                typeWriter(heroSubtitle, 'Passionate Computing Student & Future Tech Innovator', 30);
            }, 3000);
        });

        // Add floating animation to project cards
        document.querySelectorAll('.project-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.2}s`;
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) rotateY(5deg)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) rotateY(0)';
            });
        });

        // Add parallax effect to hero section
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            const rate = scrolled * -0.5;
            
            if (hero) {
                hero.style.transform = `translateY(${rate}px)`;
            }
        });

        // Add glitch effect to logo on hover
        document.querySelector('.logo').addEventListener('mouseenter', function() {
            this.style.animation = 'glitch 0.5s ease-in-out';
        });

        // CSS for glitch effect
        const glitchStyle = document.createElement('style');
        glitchStyle.textContent = `
            @keyframes glitch {
                0% { transform: translate(0); }
                20% { transform: translate(-2px, 2px); }
                40% { transform: translate(-2px, -2px); }
                60% { transform: translate(2px, 2px); }
                80% { transform: translate(2px, -2px); }
                100% { transform: translate(0); }
            }
        `;
        document.head.appendChild(glitchStyle);

        // Add particle effect on mouse move
        document.addEventListener('mousemove', function(e) {
            if (Math.random() > 0.95) {
                createParticle(e.clientX, e.clientY);
            }
        });

        function createParticle(x, y) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.background = 'var(--primary-pink)';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            particle.style.animation = 'particleFade 1s ease-out forwards';
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }

        // Add particle fade animation
        const particleStyle = document.createElement('style');
        particleStyle.textContent = `
            @keyframes particleFade {
                0% {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
                100% {
                    opacity: 0;
                    transform: translateY(-20px) scale(0);
                }
            }
        `;
        document.head.appendChild(particleStyle);