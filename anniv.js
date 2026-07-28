/* ============================================================
   RAHIQ BIO — ANNIVERSARY CAMPAIGN
   Active: 1 Aug 2026 00:00 – 2 Aug 2026 23:59 (Morocco UTC+1)
   Auto-disabled after event ends.
   ============================================================ */
(function () {
  'use strict';

  /* ── CONFIG ─────────────────────────────────────────────── */
  const START = new Date('2026-08-01T00:00:00+01:00');
  const END   = new Date('2026-08-02T23:59:59+01:00');

  const DEALS = [
    { id: 'sidr',             name: 'عسل السدر الجبلي',    size: '1 كيلوغرام',    old: 250, now: 210, img: 'assets/images/sidr-new-4.jpg' },
    { id: 'amlou-louz',       name: 'أملو اللوز الطبيعي',  size: '1 كيلوغرام',    old: 220, now: 185, img: 'assets/images/amlou-louz-1.jpg' },
    { id: 'olive',            name: 'زيت الزيتون البلدي',  size: '5 لتر',          old: 235, now: 195, img: 'assets/images/olive-2.jpg' },
    { id: 'shilajit',         name: 'شيلاجيت نقي',         size: '50 غرام',        old: 170, now: 140, img: 'assets/images/shilajit-new.jpg' },
    { id: 'eucalyptus',       name: 'عسل الكاليبتوس',      size: '1 كيلوغرام',    old: 200, now: 165, img: 'assets/images/eucalyptus-3.jpg' },
    { id: 'bundle-breakfast', name: 'باقة الفطور الصحي',   size: 'الباقة الصغيرة', old: 220, now: 185, img: 'assets/images/bundle-breakfast-small.jpg' },
  ];

  const TIMELINE = [
    { d: 'صيف 2024',    e: '💡', t: 'بداية الفكرة',           p: 'انطلقت الفكرة من شغف حقيقي بالمنتجات الطبيعية المغربية وإرادة تقديم الأفضل لكل عميل.' },
    { d: 'أغسطس 2025', e: '🏢', t: 'تأسيس رحيق بيو',          p: 'أصبحت Rahiq Bio شركة مسجلة رسمياً — بدأت رحلة جديدة نحو عالم المنتجات الطبيعية الأصيلة.' },
    { d: 'سبتمبر 2025', e: '🍯', t: 'أول المنتجات',             p: 'وصلت أول جرة عسل سدر لأول عميل — لحظة لا ننساها ما حيينا.' },
    { d: 'نوفمبر 2025', e: '🫒', t: 'إدخال زيت الزيتون',       p: 'أضفنا زيت الزيتون البلدي 100% من منطقة بني ملال — طحن تقليدي بالبارد بالمعصرة الحجرية.' },
    { d: 'يناير 2026',  e: '🏪', t: 'افتتاح المحل',             p: 'افتتحنا أول محل فيزيائي في طنجة — مرحباً بكم في بيتكم الثاني.' },
    { d: 'أبريل 2026',  e: '🎁', t: 'إطلاق باقة الاكتشاف',    p: 'أطلقنا باقة الفطور الصحي — مزيج مثالي من أجود المنتجات في علبة واحدة.' },
    { d: 'أغسطس 2026', e: '🎉', t: 'الذكرى السنوية الأولى',   p: 'عام كامل من الثقة والعطاء — شكراً لكل من كان جزءاً من هذه الرحلة الجميلة!' },
  ];

  const REVIEWS = [
    { n: 'سارة ب.',  c: 'الدار البيضاء', t: 'عسل السدر رائع جداً، أفضل ما ذقته. التوصيل سريع والتغليف جميل 🍯' },
    { n: 'محمد ع.',  c: 'طنجة',           t: 'زيت الزيتون أصلي 100%، يذكرني بزيت جدتي. سأعيد الطلب حتماً.' },
    { n: 'فاطمة ر.', c: 'فاس',            t: 'الأملو كاكاو لذيذ، أطفالي يعشقونه كل صباح. خدمة ممتازة ♥' },
    { n: 'يوسف ح.',  c: 'مراكش',          t: 'شيلاجيت أصلي وفعّال، لاحظت فرقاً واضحاً في الطاقة. شكراً رحيق بيو!' },
    { n: 'نجوى ل.',  c: 'أكادير',         t: 'باقة الفطور هدية مثالية، أرسلتها لأمي وأحبتها كثيراً 🎁' },
    { n: 'كريم د.',  c: 'الرباط',         t: 'عسل الكاليبتوس أنقذني من البرد والزكام — لا يصدق! منتج رائع.' },
    { n: 'إيمان ص.', c: 'وجدة',           t: 'جودة ممتازة وأسعار معقولة. أنصح الجميع بتجربة منتجات رحيق بيو.' },
  ];

  /* ── STATE ──────────────────────────────────────────────── */
  var now    = new Date();
  var before = now < START;
  var during = now >= START && now <= END;
  var after  = now > END;

  if (after) return;

  /* ── ENTRY ──────────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  function boot() {
    document.body.classList.add('anniv-active');
    injectBanner();
    injectSections();
    injectFooter();

    if (!sessionStorage.getItem('rb_av26')) {
      setTimeout(showPopup, 1800);
    }

    if (during) {
      setTimeout(launchConfetti, 900);
      injectCartMsg();
      patchSuccessModal();
    }

    initScrollAnim();
  }

  /* ── BANNER ─────────────────────────────────────────────── */
  function injectBanner() {
    var b = el('div', { id: 'anniv-banner' });
    b.innerHTML =
      '<span class="ab-gold">🎉 الذكرى السنوية الأولى لرحيق بيو</span>' +
      '<span class="ab-sep">|</span>' +
      '<span>🎁 عروض · هدايا · سحب</span>' +
      '<span class="ab-sep">|</span>' +
      '<strong>السبت 1 — الأحد 2 أغسطس 2026</strong>';
    document.body.insertBefore(b, document.body.firstChild);
  }

  /* ── SECTIONS ───────────────────────────────────────────── */
  function injectSections() {
    var wrap = el('div', { id: 'anniv-sections' });
    wrap.innerHTML =
      heroHTML() +
      dealsHTML() +
      giftsHTML() +
      raffleHTML() +
      timelineHTML() +
      videoHTML() +
      charHTML() +
      reviewsHTML();

    var products = document.getElementById('products');
    if (products) {
      products.parentNode.insertBefore(wrap, products);
    } else {
      var nav = document.getElementById('navbar');
      if (nav) nav.insertAdjacentElement('afterend', wrap);
      else document.body.appendChild(wrap);
    }

    startCountdown();
    initReviews();
  }

  /* ── HERO ───────────────────────────────────────────────── */
  function heroHTML() {
    var sparks = '';
    for (var i = 0; i < 22; i++) {
      sparks += '<span class="ah-sp" style="left:' + rnd(100) + '%;top:' + rnd(100) + '%;--sd:' + (2 + Math.random() * 3).toFixed(1) + 's;--sy:' + Math.random().toFixed(1) + 's"></span>';
    }
    var cdLbl = before ? 'يبدأ الاحتفال خلال' : 'ينتهي العرض خلال';
    return (
      '<section id="anniv-hero">' +
        '<div class="ah-sparks">' + sparks + '</div>' +
        '<img src="assets/images/logo.png" alt="رحيق بيو" class="ah-logo">' +
        '<div class="ah-badge">✨ الذكرى السنوية الأولى — 2026</div>' +
        '<h1 class="ah-title">🎉 رحيق بيو<br><em>تكمل عامها الأول</em></h1>' +
        '<p class="ah-sub">شكراً لكل شخص كان جزءاً من رحلتنا خلال سنة كاملة.<br>وبهذه المناسبة يسعدنا أن نحتفل معكم.</p>' +
        '<div class="ah-btns">' +
          '<button class="ah-btn-p" onclick="avScroll(\'anniv-deals\')">تسوق الآن</button>' +
          '<button class="ah-btn-s" onclick="avScroll(\'anniv-gifts\')">اعرف تفاصيل الاحتفال</button>' +
        '</div>' +
        '<div id="anniv-cd">' +
          '<p class="cd-lbl" id="cd-lbl">' + cdLbl + '</p>' +
          '<div class="cd-row">' +
            '<div class="cd-box"><div class="cd-num" id="cd-d">00</div><div class="cd-unit">يوم</div></div>' +
            '<div class="cd-sep">:</div>' +
            '<div class="cd-box"><div class="cd-num" id="cd-h">00</div><div class="cd-unit">ساعة</div></div>' +
            '<div class="cd-sep">:</div>' +
            '<div class="cd-box"><div class="cd-num" id="cd-m">00</div><div class="cd-unit">دقيقة</div></div>' +
            '<div class="cd-sep">:</div>' +
            '<div class="cd-box"><div class="cd-num" id="cd-s">00</div><div class="cd-unit">ثانية</div></div>' +
          '</div>' +
        '</div>' +
      '</section>'
    );
  }

  /* ── DEALS ──────────────────────────────────────────────── */
  function dealsHTML() {
    var cards = DEALS.map(function (d) {
      var save = d.old - d.now;
      return (
        '<div class="d-card" onclick="openProductById(\'' + d.id + '\')">' +
          '<div class="d-fire">🔥 عرض الذكرى</div>' +
          '<div class="d-save">وفّر ' + save + 'د</div>' +
          '<div class="d-img"><img src="' + d.img + '" alt="' + d.name + '" loading="lazy"></div>' +
          '<div class="d-body">' +
            '<p class="d-name">' + d.name + '</p>' +
            '<p class="d-size">' + d.size + '</p>' +
            '<div class="d-prices">' +
              '<span class="d-old">' + d.old + '</span>' +
              '<span class="d-new">' + d.now + '</span>' +
              '<span class="d-cur">درهم</span>' +
            '</div>' +
            '<button class="d-btn">تسوق الآن</button>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    var comingNote = before
      ? '<p class="deals-coming">⏳ الأسعار الخاصة تنطلق يوم السبت 1 أغسطس</p>'
      : '';

    return (
      '<section id="anniv-deals">' +
        '<div class="av-wrap">' +
          '<div class="av-head">' +
            '<span class="av-badge">🔥 عروض حصرية</span>' +
            '<h2 class="av-title">عروض الذكرى السنوية</h2>' +
            '<p class="av-sub">أفضل أسعار في تاريخ رحيق بيو — السبت والأحد فقط</p>' +
          '</div>' +
          '<div class="deals-grid">' + cards + '</div>' +
          comingNote +
        '</div>' +
      '</section>'
    );
  }

  /* ── GIFTS ──────────────────────────────────────────────── */
  function giftsHTML() {
    return (
      '<section id="anniv-gifts">' +
        '<div class="av-wrap">' +
          '<div class="gifts-card">' +
            '<div>' +
              '<span class="gl-icon">🎁</span>' +
              '<h3 class="gl-title">هدايا الذكرى السنوية</h3>' +
              '<p class="gl-txt">بمناسبة مرور سنة على تأسيس رحيق بيو، خصصنا هدايا مميزة لعملائنا الأوفياء. هذه المناسبة الاستثنائية تستحق أن نشاركها معكم بشيء خاص ومميز.</p>' +
            '</div>' +
            '<div class="gifts-right">' +
              '<div class="gr-warn">⚠️ <span>تنبيه مهم جداً</span></div>' +
              '<div class="gr-count">' +
                '<span class="gr-num">100</span>' +
                '<p class="gr-label">زائر فقط يستفيد من الهدية</p>' +
              '</div>' +
              '<p class="gr-note">الهدايا مخصصة لأول <strong>100 زائر للمحل</strong><br>يوم السبت فقط — بعد اكتمال العدد تنتهي تلقائياً.</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>'
    );
  }

  /* ── RAFFLE ─────────────────────────────────────────────── */
  function raffleHTML() {
    var steps = [
      'قم بشراء أي منتج مشارك في الاحتفال',
      'داخل المحل ستجد صندوق السحب الخاص بنا',
      'اكتب اسمك الكامل ورقم هاتفك على ورقة',
      'ضع الورقة داخل الصندوق',
      'انتظر إعلان الفائز على صفحاتنا',
    ];
    var stepsHTML = steps.map(function (s, i) {
      return '<div class="rl-step"><div class="rs-n">' + (i + 1) + '</div><div class="rs-t">' + s + '</div></div>';
    }).join('');

    return (
      '<section id="anniv-raffle">' +
        '<div class="av-wrap">' +
          '<div class="raffle-grid">' +
            '<div>' +
              '<span class="av-badge">🎰 سحب حصري</span>' +
              '<h2 class="av-title">السحب الكبير</h2>' +
              '<p class="av-sub" style="margin-bottom:0">كل عملية شراء خلال فترة الاحتفال تمنحك فرصة المشاركة في السحب على جوائز قيّمة.</p>' +
              '<div class="rl-steps">' + stepsHTML + '</div>' +
            '</div>' +
            '<div class="raffle-right">' +
              '<svg class="rb-svg" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">' +
                '<rect x="15" y="70" width="120" height="72" rx="7" fill="#2A4937" stroke="#FED617" stroke-width="2"/>' +
                '<rect x="8"  y="55" width="134" height="22" rx="5" fill="#1b3026" stroke="#FED617" stroke-width="2"/>' +
                '<rect x="68" y="55" width="14"  height="87" fill="#FED617" opacity=".85"/>' +
                '<rect x="8"  y="61" width="134" height="9"  fill="#FED617" opacity=".85"/>' +
                '<ellipse cx="63" cy="55" rx="22" ry="13" transform="rotate(-22 63 55)" fill="#FED617"/>' +
                '<ellipse cx="87" cy="55" rx="22" ry="13" transform="rotate(22 87 55)"  fill="#FED617"/>' +
                '<circle  cx="75" cy="55" r="9" fill="#FFB300"/>' +
                '<text x="28" y="106" font-size="18">⭐</text>' +
                '<text x="100" y="100" font-size="14">✨</text>' +
                '<text x="48"  y="130" font-size="12">🌟</text>' +
              '</svg>' +
              '<p class="rb-lbl">صندوق السحب</p>' +
              '<p class="rb-sub">متوفر داخل المحل يوم السبت</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>'
    );
  }

  /* ── TIMELINE ───────────────────────────────────────────── */
  function timelineHTML() {
    var items = TIMELINE.map(function (item, i) {
      return (
        /* dot first = rightmost in RTL flex */
        '<div class="tl-item av-anim" style="transition-delay:' + (i * 70) + 'ms">' +
          '<div class="tl-dot">' + item.e + '</div>' +
          '<div class="tl-card">' +
            '<div class="tl-date">' + item.d + '</div>' +
            '<p class="tl-title">' + item.t + '</p>' +
            '<p class="tl-desc">' + item.p + '</p>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    return (
      '<section id="anniv-timeline">' +
        '<div class="av-wrap">' +
          '<div class="av-head">' +
            '<span class="av-badge">📖 قصتنا</span>' +
            '<h2 class="av-title">رحلة عام كامل</h2>' +
            '<p class="av-sub">من فكرة بسيطة إلى علامة تجارية أحبها الآلاف</p>' +
          '</div>' +
          '<div class="tl-wrap">' +
            '<div class="tl-line"></div>' +
            items +
          '</div>' +
        '</div>' +
      '</section>'
    );
  }

  /* ── VIDEO ──────────────────────────────────────────────── */
  function videoHTML() {
    return (
      '<section id="anniv-video">' +
        '<div class="av-wrap">' +
          '<div class="av-head">' +
            '<span class="av-badge">🎬 فيديو الذكرى</span>' +
            '<h2 class="av-title">رحلة سنة كاملة</h2>' +
            '<p class="av-sub">شاهد رحلتنا الجميلة منذ البداية حتى اليوم</p>' +
          '</div>' +
          '<div class="av-vid-box">' +
            '<div class="av-play"><svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg></div>' +
            '<p class="av-vid-txt">فيديو الذكرى السنوية — قريباً</p>' +
          '</div>' +
        '</div>' +
      '</section>'
    );
  }

  /* ── CHARACTER ──────────────────────────────────────────── */
  function charHTML() {
    return (
      '<section id="anniv-char">' +
        '<div class="av-wrap">' +
          '<div class="av-head">' +
            '<span class="av-badge">🌟 شخصيات رحيق بيو</span>' +
            '<h2 class="av-title">الحاج مبروك</h2>' +
          '</div>' +
          '<div class="char-card">' +
            '<div class="ch-top">' +
              '<div class="ch-av">👴</div>' +
              '<div>' +
                '<p class="ch-name">الحاج مبروك</p>' +
                '<p class="ch-role">شخصية رحيق بيو المحبوبة</p>' +
              '</div>' +
            '</div>' +
            '<div class="ch-bd">' +
              '<p class="ch-ep">أحدث الحلقات</p>' +
              '<p class="ch-txt">شاهد أحدث حلقات الحاج مبروك وتابع مغامراته مع المنتجات الطبيعية الأصيلة</p>' +
              '<button class="ch-btn" onclick="event.stopPropagation()">' +
                '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>' +
                'شاهد الآن' +
              '</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>'
    );
  }

  /* ── REVIEWS ────────────────────────────────────────────── */
  function reviewsHTML() {
    var doubled = REVIEWS.concat(REVIEWS);
    var cards = doubled.map(function (r) {
      return (
        '<div class="rv-card">' +
          '<div class="rv-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>' +
          '<p class="rv-txt">"' + r.t + '"</p>' +
          '<div class="rv-auth">' +
            '<div class="rv-av">' + r.n[0] + '</div>' +
            '<div><p class="rv-name">' + r.n + '</p><p class="rv-city">📍 ' + r.c + '</p></div>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    return (
      '<section id="anniv-reviews">' +
        '<div class="av-head" style="padding:0 20px">' +
          '<span class="av-badge">⭐ آراء عملائنا</span>' +
          '<h2 class="av-title">ماذا يقولون عنا؟</h2>' +
          '<p class="av-sub">أكثر من 500 عميل راضٍ يثق في رحيق بيو</p>' +
        '</div>' +
        '<div class="rv-track-wrap">' +
          '<div class="rv-track" id="rv-track">' + cards + '</div>' +
        '</div>' +
      '</section>'
    );
  }

  /* ── FOOTER ─────────────────────────────────────────────── */
  function injectFooter() {
    var footer = document.querySelector('footer');
    if (!footer) return;
    var msg = el('div', { id: 'anniv-footer-msg' });
    msg.innerHTML = '<p class="afm-p">شكراً لكل شخص دعم رحيق بيو خلال هذه السنة</p><p class="afm-s">أنتم سبب استمرارنا ✨</p>';
    footer.insertBefore(msg, footer.firstChild);
  }

  /* ── COUNTDOWN ──────────────────────────────────────────── */
  function startCountdown() {
    var target = during ? END : START;

    function tick() {
      var diff = target - new Date();
      if (diff <= 0) {
        if (before) location.reload();
        return;
      }
      var d = Math.floor(diff / 86400000);
      var h = Math.floor((diff % 86400000) / 3600000);
      var m = Math.floor((diff % 3600000)  / 60000);
      var s = Math.floor((diff % 60000)    / 1000);
      setText('cd-d', pad(d));
      setText('cd-h', pad(h));
      setText('cd-m', pad(m));
      setText('cd-s', pad(s));
    }

    tick();
    setInterval(tick, 1000);
  }

  /* ── CONFETTI ───────────────────────────────────────────── */
  function launchConfetti() {
    var canvas = el('canvas', { id: 'anniv-canvas' });
    document.body.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    var colors = ['#FED617', '#2A4937', '#ffffff', '#FFB300', '#4a7a5a', '#ffe57a'];
    var pieces = [];
    for (var i = 0; i < 110; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: -20 - Math.random() * canvas.height,
        w: 6  + Math.random() * 8,
        h: 3  + Math.random() * 4,
        spd: 1.5 + Math.random() * 2.2,
        ang: Math.random() * Math.PI * 2,
        spin: (Math.random() - .5) * .1,
        drft: (Math.random() - .5) * .7,
        col: colors[Math.floor(Math.random() * colors.length)],
        op: .65 + Math.random() * .35,
      });
    }

    var frame = 0, MAX = 260;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var fade = frame >= MAX ? Math.max(0, 1 - (frame - MAX) / 55) : 1;

      pieces.forEach(function (p) {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.ang);
        ctx.globalAlpha = p.op * fade;
        ctx.fillStyle = p.col;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
        p.y   += p.spd;
        p.x   += p.drft;
        p.ang += p.spin;
        if (p.y > canvas.height + 20 && frame < MAX) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }
      });

      frame++;
      if (fade > 0) requestAnimationFrame(draw);
      else canvas.remove();
    }

    requestAnimationFrame(draw);
    window.addEventListener('resize', function () {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }, { passive: true });
  }

  /* ── POPUP ──────────────────────────────────────────────── */
  function showPopup() {
    var overlay = el('div', { id: 'anniv-overlay' });
    overlay.innerHTML =
      '<div id="anniv-popup">' +
        '<div class="ap-hd">' +
          '<button class="ap-close" onclick="closePopup()">✕</button>' +
          '<span class="ap-emoji">🎉</span>' +
          '<h3 class="ap-title">أهلاً بك في احتفال رحيق بيو</h3>' +
          '<p class="ap-sub">الذكرى السنوية الأولى — السبت والأحد فقط</p>' +
        '</div>' +
        '<div class="ap-bd">' +
          '<ul class="ap-items">' +
            '<li>🔥 <span>عروض خاصة حصرية على أفضل المنتجات</span></li>' +
            '<li>🎁 <span>هدايا مجانية لأول 100 زائر للمحل يوم السبت</span></li>' +
            '<li>🎰 <span>سحب على جوائز قيّمة مع كل عملية شراء</span></li>' +
          '</ul>' +
          '<p class="ap-dates">السبت 1 أغسطس — <strong>الأحد 2 أغسطس 2026</strong></p>' +
          '<button class="ap-cta" onclick="closePopup(); avScroll(\'anniv-deals\')">ابدأ التسوق الآن</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(overlay);
    sessionStorage.setItem('rb_av26', '1');

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closePopup();
    });
  }

  window.closePopup = function () {
    var o = document.getElementById('anniv-overlay');
    if (o) o.remove();
  };

  /* ── CART MESSAGE ───────────────────────────────────────── */
  function injectCartMsg() {
    var footer = document.getElementById('cartFooter');
    if (!footer) return;
    var msg = el('div', { id: 'anniv-cart-msg' });
    msg.innerHTML = '🎉 <strong>تهانينا!</strong> طلبك مؤهل للمشاركة في سحب الذكرى السنوية. لا تنس كتابة اسمك ورقم هاتفك في صندوق السحب عند زيارتك للمحل.';
    footer.insertBefore(msg, footer.firstChild);
  }

  /* ── SUCCESS MODAL ──────────────────────────────────────── */
  function patchSuccessModal() {
    var modal = document.getElementById('successModal');
    if (!modal) return;
    var p = modal.querySelector('p');
    if (p) p.innerHTML = 'شكراً لمشاركتك في احتفال الذكرى السنوية الأولى لرحيق بيو. 🎉<br><span style="color:#2A4937;font-weight:700">نتمنى لك التوفيق في السحب!</span>';
  }

  /* ── SCROLL ANIMATIONS ──────────────────────────────────── */
  function initScrollAnim() {
    if (!window.IntersectionObserver) {
      document.querySelectorAll('.av-anim').forEach(function (n) { n.classList.add('av-vis'); });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('av-vis'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.av-anim').forEach(function (n) { obs.observe(n); });
  }

  /* ── REVIEWS SCROLL ─────────────────────────────────────── */
  function initReviews() {
    /* CSS handles infinite scroll animation; nothing needed here */
  }

  /* ── OPEN PRODUCT HELPER ────────────────────────────────── */
  window.openProductById = function (id) {
    if (typeof openProduct === 'function') openProduct(id);
  };

  /* ── SCROLL HELPER ──────────────────────────────────────── */
  window.avScroll = function (id) {
    var t = document.getElementById(id);
    if (t) t.scrollIntoView({ behavior: 'smooth' });
  };

  /* ── UTILS ──────────────────────────────────────────────── */
  function el(tag, attrs) {
    var node = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { node[k] = attrs[k]; });
    return node;
  }
  function setText(id, val) {
    var n = document.getElementById(id);
    if (n && n.textContent !== val) n.textContent = val;
  }
  function pad(n) { return String(n).padStart(2, '0'); }
  function rnd(max) { return Math.floor(Math.random() * max); }

})();
