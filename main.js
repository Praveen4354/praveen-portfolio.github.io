document.addEventListener('DOMContentLoaded', () => {
    // Typed.js for Hero Section
    new Typed('.typed-text', {
        strings: ['an AI Engineer', 'a Data Scientist', 'a Problem Solver'],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1000,
        loop: true
    });

    // Custom Cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');

    document.addEventListener('mousemove', (e) => {
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
        cursorRing.style.left = `${e.clientX - 12}px`;
        cursorRing.style.top = `${e.clientY - 12}px`;
    });

    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('a, button, .project-card, .achievement-card, .activity-card')) {
            cursorRing.style.transform = 'scale(1.5)';
            cursorRing.style.borderColor = 'var(--accent-color)';
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('a, button, .project-card, .achievement-card, .activity-card')) {
            cursorRing.style.transform = 'scale(1)';
            cursorRing.style.borderColor = 'var(--primary-color)';
        }
    });

    // Navigation
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            navLinks.classList.remove('active');
        });
    });

    // Scroll Spy
    const sections = document.querySelectorAll('.section-padding');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });

    // Image Hover Effect for Project Cards (Zoom Only)
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const image = card.querySelector('img');
        card.addEventListener('mouseover', () => {
            image.classList.add('img-hovered');
        });
        card.addEventListener('mouseout', () => {
            image.classList.remove('img-hovered');
        });
    });

    // Scroll Animations
    const animateElements = document.querySelectorAll('.animate-in, .skill');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    if (entry.target.classList.contains('skill')) {
                        const progress = entry.target.querySelector('.progress');
                        if (progress) {
                            progress.style.width = `${progress.dataset.progress}%`;
                        }
                    }
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    animateElements.forEach(element => observer.observe(element));

    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
    const progressCircle = document.querySelector('.progress-circle');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            backToTop.style.display = 'block';
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            const offset = 283 - (scrollPercent / 100) * 283;
            progressCircle.style.strokeDashoffset = offset;
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Form Handling
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted! Your email client should open with a pre-filled message.');
        form.submit();
        form.reset();
    });
});
