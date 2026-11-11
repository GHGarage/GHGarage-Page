if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

document.getElementById('year').textContent = new Date().getFullYear();

const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const closeMenu = () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Отвори менюто');
};

navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Затвори менюто' : 'Отвори менюто');
});

navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
});

document.addEventListener('click', (event) => {
    if (!navLinks.classList.contains('open')) return;
    if (nav.contains(event.target)) return;
    closeMenu();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMenu();
});

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (!entry.isIntersecting) return;
            entry.target.style.transitionDelay = (index % 4) * 70 + 'ms';
            entry.target.classList.add('in');
            io.unobserve(entry.target);
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealItems.forEach((el) => io.observe(el));
} else {
    revealItems.forEach((el) => el.classList.add('in'));
}

const loadMap = document.getElementById('loadMap');
if (loadMap) {
    loadMap.addEventListener('click', () => {
        const shell = document.getElementById('mapShell');
        const placeholder = document.getElementById('mapPlaceholder');
        const iframe = document.createElement('iframe');
        iframe.src = loadMap.dataset.mapSrc;
        iframe.title = 'Карта до GH Garage';
        iframe.loading = 'lazy';
        iframe.referrerPolicy = 'no-referrer-when-downgrade';
        iframe.allowFullscreen = true;
        shell.appendChild(iframe);
        placeholder.remove();
    });
}

let snapped = false;
window.addEventListener('scroll', () => {
    if (snapped) return;
    if (window.scrollY > 4) snapped = true;
}, { once: true, passive: true });

window.setTimeout(() => {
    if (!snapped && window.scrollY > 4) {
        window.scrollTo(0, 0);
    }
    snapped = true;
}, 5000);

const hero = document.querySelector('.hero');
const mobileBar = document.querySelector('.mobile-bar');

const updateMobileBar = () => {
    if (!hero || !mobileBar) return;
    mobileBar.classList.toggle('visible', hero.getBoundingClientRect().bottom < 80);
};

window.addEventListener('scroll', updateMobileBar, { passive: true });
updateMobileBar();
