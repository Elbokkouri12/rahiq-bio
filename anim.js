/* ===== RAHIQ BIO — Animation Engine v3 ===== */

(function () {
  'use strict';

  // ── Guard ────────────────────────────────────────────────────────────────
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('anim.js: GSAP or ScrollTrigger not loaded');
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  // ── 1. THREE.JS FLOATING HONEY DROPS — replaced with CSS, skip ─────────
  (function initHoneyBg() {
    const canvas = document.getElementById('honeyBg');
    if (!canvas) return;
    try {
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(canvas.offsetWidth || window.innerWidth, canvas.offsetHeight || window.innerHeight);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        60,
        (canvas.offsetWidth || window.innerWidth) / (canvas.offsetHeight || window.innerHeight),
        0.1, 100
      );
      camera.position.z = 8;

      scene.add(new THREE.PointLight(0xffffff, 2, 30)).position.set(4, 6, 8);
      scene.add(new THREE.AmbientLight(0xffeebb, 0.6));

      const honeyColors = [0xFED617, 0xD4851A, 0xF5A623, 0xC2D838, 0xFFC200];
      const drops = [];
      for (let i = 0; i < 13; i++) {
        const r = 0.08 + Math.random() * 0.22;
        const mat = new THREE.MeshPhongMaterial({
          color: honeyColors[i % 5], transparent: true,
          opacity: 0.55 + Math.random() * 0.3, shininess: 120,
          specular: new THREE.Color(0xffffff),
        });
        const mesh = new THREE.Mesh(new THREE.SphereGeometry(r, 20, 20), mat);
        mesh.position.set((Math.random() - 0.5) * 14, 4 + Math.random() * 6, (Math.random() - 0.5) * 3);
        scene.add(mesh);
        drops.push({
          mesh,
          speed: 0.008 + Math.random() * 0.016,
          swayAmp: 0.3 + Math.random() * 0.5,
          swayFreq: 0.4 + Math.random() * 0.6,
          phase: Math.random() * Math.PI * 2,
          resetY: 4 + Math.random() * 6,
        });
      }

      let clock = 0;
      (function animate() {
        requestAnimationFrame(animate);
        clock += 0.016;
        drops.forEach(d => {
          d.mesh.position.y -= d.speed;
          d.mesh.position.x += Math.sin(clock * d.swayFreq + d.phase) * 0.003 * d.swayAmp;
          d.mesh.rotation.x += 0.005;
          d.mesh.rotation.z += 0.003;
          if (d.mesh.position.y < -5) {
            d.mesh.position.y = d.resetY;
            d.mesh.position.x = (Math.random() - 0.5) * 14;
          }
        });
        renderer.render(scene, camera);
      })();

      window.addEventListener('resize', () => {
        const w = canvas.offsetWidth || window.innerWidth;
        const h = canvas.offsetHeight || window.innerHeight;
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      });
    } catch (e) {
      console.warn('Three.js failed:', e);
      canvas.style.display = 'none';
    }
  })();

  // ── 2. HERO ENTRANCE TIMELINE ────────────────────────────────────────────
  (function initHeroTimeline() {
    function splitWords(el) {
      if (!el) return;
      el.innerHTML = el.textContent.trim().split(/\s+/).map(w =>
        `<span class="word-wrap"><span class="word">${w}</span></span>`
      ).join(' ');
    }
    splitWords(document.querySelector('.hero-title-ar'));
    splitWords(document.querySelector('.hero-title-highlight'));

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.hero-badge-ticker', { opacity: 0, scale: 0.8, y: -20, duration: 0.6, ease: 'back.out(1.4)', clearProps: 'all' }, 0.2);
    tl.from('.hero-title .word', { opacity: 0, y: 80, duration: 0.75, stagger: 0.08, clearProps: 'all' }, 0.5);
    tl.from('.hero-subtitle',    { opacity: 0, y: 30, duration: 0.6, clearProps: 'all' }, 1.0);
    tl.from('.hero-actions .btn-primary, .hero-actions .btn-ghost',
            { opacity: 0, y: 24, scale: 0.9, duration: 0.55, stagger: 0.12, ease: 'back.out(1.4)', clearProps: 'all' }, 1.3);
    tl.from('.hero-stats',       { opacity: 0, y: 20, duration: 0.5, clearProps: 'all', onComplete: startCountUp }, 1.6);
    tl.from('.hero-sound-btn, .scroll-indicator',
            { opacity: 0, y: 16, duration: 0.45, stagger: 0.1, clearProps: 'all' }, 1.8);

    gsap.to('.hero-content', {
      y: -120, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.2 },
    });
  })();

  // ── 3. STATS COUNTUP ─────────────────────────────────────────────────────
  function startCountUp() {
    [
      { el: document.querySelector('.hero-stats .stat:nth-child(1) .stat-num'), end: 100, suffix: '%', prefix: '' },
      { el: document.querySelector('.hero-stats .stat:nth-child(3) .stat-num'), end: 500, suffix: '',  prefix: '+' },
      { el: document.querySelector('.hero-stats .stat:nth-child(5) .stat-num'), end: 9,   suffix: '+', prefix: '' },
    ].forEach(s => {
      if (!s.el) return;
      const t0 = performance.now();
      (function tick(now) {
        const p = Math.min((now - t0) / 1400, 1);
        s.el.textContent = s.prefix + Math.round((1 - Math.pow(1 - p, 3)) * s.end) + s.suffix;
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }

  // ── 4. NAVBAR SMART SCROLL ───────────────────────────────────────────────
  (function initNavbar() {
    const nav = document.getElementById('navbar');
    if (!nav) return;
    let lastY = 0;
    ScrollTrigger.create({
      start: 'top -80',
      onUpdate: () => {
        const y = window.scrollY;
        if (y > lastY + 5 && y > 200) gsap.to(nav, { yPercent: -100, duration: 0.35, ease: 'power2.in' });
        else if (y < lastY - 5)       gsap.to(nav, { yPercent: 0,    duration: 0.35, ease: 'power2.out' });
        lastY = y;
      },
    });
  })();

  // ── 5. SCROLL REVEAL — IntersectionObserver (100% fiable) ───────────────
  (function initScrollReveal() {

    // Définir les groupes d'éléments à révéler
    const groups = [
      { sel: '.trust-item',                                                     stagger: 80 },
      { sel: '.products-section .section-tag',                                  stagger: 0 },
      { sel: '.products-section .section-title',                                stagger: 0, delay: 100 },
      { sel: '.products-section .section-subtitle',                             stagger: 0, delay: 200 },
      { sel: '.product-card',                                                   stagger: 70, cls: 'scale-reveal' },
      { sel: '.story-in-why',                                                   stagger: 0 },
      { sel: '.why-section .section-tag',                                       stagger: 0 },
      { sel: '.why-section .section-title',                                     stagger: 0, delay: 100 },
      { sel: '.why-card',                                                       stagger: 80 },
      { sel: '.reels-section .section-tag',                                     stagger: 0 },
      { sel: '.reels-section .section-title',                                   stagger: 0, delay: 80 },
      { sel: '.reels-section .section-subtitle',                                stagger: 0, delay: 160 },
      { sel: '.reel-card',                                                      stagger: 80 },
      { sel: '.testimonials-section .section-tag',                              stagger: 0 },
      { sel: '.testimonials-section .section-title',                            stagger: 0, delay: 100 },
      { sel: '.testimonial-card',                                               stagger: 120, cls: 'scale-reveal' },
      { sel: '.cta-section h2',                                                 stagger: 0 },
      { sel: '.cta-section p',                                                  stagger: 0, delay: 120 },
      { sel: '.cta-actions > *',                                                stagger: 120, delay: 200 },
      { sel: '.footer-brand, .footer-links-col, .footer-contact-col',          stagger: 80 },
    ];

    groups.forEach(({ sel, stagger = 0, delay = 0, cls = '' }) => {
      document.querySelectorAll(sel).forEach((el, i) => {
        el.classList.add('reveal-item');
        if (cls) el.classList.add(cls);
        el.style.transitionDelay = `${delay + i * stagger}ms`;
      });
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add('revealed');
        io.unobserve(el);
        // Clean up after animation so hover/transitions return to normal
        const totalDelay = parseFloat(el.style.transitionDelay || '0') + 700;
        setTimeout(() => {
          el.style.transitionDelay = '';
          el.classList.remove('reveal-item', 'from-left', 'from-right', 'scale-reveal', 'revealed');
        }, totalDelay);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

    document.querySelectorAll('.reveal-item').forEach(el => io.observe(el));
  })();

  // ── 6. NAV ACTIVE HIGHLIGHT ──────────────────────────────────────────────
  (function initNavHighlight() {
    const navLinks = document.querySelectorAll('.nav-link');
    function setActive(id) {
      navLinks.forEach(l => l.classList.toggle('nav-active', l.getAttribute('href') === '#' + id));
    }
    ['hero', 'products', 'why-us', 'contact'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      ScrollTrigger.create({
        trigger: el, start: 'top 60%', end: 'bottom 60%',
        onEnter: () => setActive(id), onEnterBack: () => setActive(id),
      });
    });
  })();

})();

// ── Hero video autoplay fallback (auto-patched by Claude) ──
(function initVideoAutoplay() {
  function playHeroVideo() {
    var v = document.getElementById('heroVideo') || document.querySelector('video.hero-video');
    if (!v) return;
    v.muted = true;
    var p = v.play();
    if (p && p.catch) {
      p.catch(function() {
        // If blocked: hide video, show background color fallback
        if (v.readyState === 0) v.style.opacity = '0';
      });
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', playHeroVideo);
  } else {
    playHeroVideo();
  }
  // Retry on first interaction (mobile browsers)
  ['touchstart','click','scroll'].forEach(function(ev) {
    document.addEventListener(ev, playHeroVideo, { once: true, passive: true });
  });
})();
