// ========== LENIS SMOOTH SCROLL ==========
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  touchMultiplier: 2,
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// ========== NAVIGATION SCROLL EFFECT ==========
const nav = document.getElementById('nav');
let lastScrollY = 0;

lenis.on('scroll', ({ scroll }) => {
  if (scroll > 80) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
  lastScrollY = scroll;
});

// ========== MOBILE MENU ==========
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
let menuOpen = false;

menuToggle.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('open', menuOpen);
  menuToggle.innerHTML = menuOpen
    ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
    : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    menuOpen = false;
    mobileMenu.classList.remove('open');
    menuToggle.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
  });
});

// ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      lenis.scrollTo(target);
    }
  });
});

// ========== CAIRO TIME ==========
function updateCairoTime() {
  const now = new Date();
  const cairoTime = now.toLocaleTimeString('en-US', {
    timeZone: 'Africa/Cairo',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  const el = document.getElementById('cairo-time');
  if (el) el.textContent = cairoTime + ' EET';
}

updateCairoTime();
setInterval(updateCairoTime, 30000);

// ========== HERO PARALLAX ==========
const heroSection = document.querySelector('.hero');
const heroName = document.getElementById('hero-name');
const heroCard = document.getElementById('hero-card');
const leftText = document.getElementById('left-text');
const rightText = document.getElementById('right-text');

if (heroSection && heroName) {
  gsap.to(heroName, {
    x: '-40%',
    ease: 'none',
    scrollTrigger: {
      trigger: heroSection,
      start: 'top top',
      end: 'bottom top',
      scrub: 0.8,
    },
  });
}

if (heroSection && heroCard) {
  gsap.to(heroCard, {
    y: -60,
    scale: 0.96,
    ease: 'none',
    scrollTrigger: {
      trigger: heroSection,
      start: 'top top',
      end: 'bottom top',
      scrub: 0.5,
    },
  });
}

if (heroSection && leftText) {
  gsap.to(leftText, {
    x: -120,
    ease: 'none',
    scrollTrigger: {
      trigger: heroSection,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  });
}

if (heroSection && rightText) {
  gsap.to(rightText, {
    x: 120,
    ease: 'none',
    scrollTrigger: {
      trigger: heroSection,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  });
}

// ========== PURPOSEFUL DESIGN LINE REVEAL ==========
const purposefulLines = document.querySelectorAll('.line-reveal');

purposefulLines.forEach((line) => {
  gsap.fromTo(line,
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: line,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
});

// ========== FEATURED WORKS REVEAL ==========
const workCards = document.querySelectorAll('.work-card');

workCards.forEach((card, index) => {
  gsap.fromTo(card,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay: index * 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
});

// ========== KINETIC WORKS LIST ==========
const archiveItems = document.querySelectorAll('.archive-item');

function updateKineticList() {
  const viewportCenter = window.innerHeight / 2;

  archiveItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const itemCenter = rect.top + rect.height / 2;
    const distance = Math.abs(viewportCenter - itemCenter);
    const maxDistance = window.innerHeight * 0.55;
    const progress = Math.min(distance / maxDistance, 1);

    const scale = 1 - progress * 0.12;
    const opacity = 1 - progress * 0.65;
    const blur = progress * 1.5;

    item.style.transform = `scale(${scale})`;
    item.style.opacity = `${opacity}`;
    item.style.filter = blur > 0.5 ? `blur(${blur}px)` : 'none';
  });
}

let kineticRaf = 0;
function onKineticScroll() {
  if (kineticRaf) cancelAnimationFrame(kineticRaf);
  kineticRaf = requestAnimationFrame(updateKineticList);
}

// Only run kinetic effect on desktop
if (window.innerWidth >= 768) {
  updateKineticList();
  window.addEventListener('scroll', onKineticScroll, { passive: true });
}

// Also reveal archive items
archiveItems.forEach((item, index) => {
  gsap.fromTo(item,
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      delay: index * 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    }
  );
});

// ========== ABOUT REVEAL ==========
const aboutLeft = document.querySelector('.about-left');
const aboutRight = document.querySelector('.about-right');

if (aboutLeft) {
  gsap.fromTo(aboutLeft,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: aboutLeft,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
}

if (aboutRight) {
  gsap.fromTo(aboutRight,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: aboutRight,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
}

// Stats counter animation
const statNumbers = document.querySelectorAll('.stat-number');

statNumbers.forEach((stat) => {
  gsap.fromTo(stat,
    { y: 20, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: stat,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    }
  );
});

// ========== CONTACT REVEAL ==========
const contactLeft = document.querySelector('.contact-left');
const contactRight = document.querySelector('.contact-right');

if (contactLeft) {
  gsap.fromTo(contactLeft,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: contactLeft,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
}

if (contactRight) {
  gsap.fromTo(contactRight,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: contactRight,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
}

// ========== CONTACT FORM ==========
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('.btn');
    const originalText = btn.textContent;
    btn.textContent = 'Message Sent!';
    btn.style.background = 'var(--brown)';
    btn.style.borderColor = 'var(--brown)';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.style.borderColor = '';
      contactForm.reset();
    }, 3000);
  });
}

// ========== SECTION HEADER REVEALS ==========
const sectionHeaders = document.querySelectorAll('.section-header');

sectionHeaders.forEach((header) => {
  gsap.fromTo(header,
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: header,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
});

// ========== PURPOSEFUL BODY REVEAL ==========
const purposefulBody = document.querySelector('.purposeful-body');

if (purposefulBody) {
  gsap.fromTo(purposefulBody,
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay: 0.4,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: purposefulBody,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
}
