/* ===== RAHIQ BIO - JavaScript ===== */

// Products Data
const products = {
  'amlou-cacao': {
    id: 'amlou-cacao',
    nameAr: 'أملو كاكاو',
    nameFr: 'Amlou Cacahuète Au Miel De Citron',
    category: 'أملو',
    price: 180,
    image: 'assets/images/amlou-cacao.jpg',
    shortDesc: 'مزيج مغربي أصيل: كاكاو + عسل الليمون + زيت زيتون + زرازع',
    fullDesc: 'أملو الكاكاو — تحفة مغربية أصيلة تجمع بين الكاكاو المطحون ناعماً وعسل الليمون الطبيعي وزيت الزيتون البكر وحبات الزرازع المنتقاة. غني بالبروتينات والدهون الصحية والمعادن الأساسية. طعمه لذيذ ومميز يذوب في الفم.',
    benefits: ['غني بالبروتينات والدهون الصحية','مصدر ممتاز للطاقة الطبيعية','يحتوي على مضادات الأكسدة','بلا سكر مضاف، بلا حافظات'],
    ingredients: 'كاكاو، عسل الليمون الطبيعي، زيت الزيتون البكر، زرازع',
    badge: 'طبيعي 100%',
    sizes: [{ label: '500 غرام', price: 99 }, { label: '1 كيلوغرام', price: 180 }]
  },
  'energie-royale': {
    id: 'energie-royale',
    nameAr: 'مريج ملكي Mix',
    nameFr: 'Énergie Royale Mix',
    category: 'مريج ملكي',
    price: 325,
    image: 'assets/images/energie-royale-7.jpg',
    gallery: [
      'assets/images/energie-royale-7.jpg',
      'assets/images/energie-royale-6.jpg',
      'assets/images/energie-royale-5.jpg',
      'assets/images/energie-royale-8.jpg',
    ],
    shortDesc: 'مزيج طبيعي فاخر من عسل الحر بالليمون مع المكسرات والبذور المختارة — طاقة متوازنة ونكهة غنية في كل ملعقة',
    fullDesc: 'مزيج طبيعي فاخر يجمع بين عسل الحر بالليمون والمكسرات المختارة بعناية ليمنحك طاقة متوازنة ونكهة غنية في كل ملعقة. يتكوّن من اللوز، الكركاع، الكاجو، إلى جانب بذور السمسم، الكتان، دوار الشمس وزريعة القرع، ليقدّم تركيبة متكاملة تجمع بين الطعم اللذيذ والفائدة الطبيعية. تم تحميص المكونات بشكل خفيف للحفاظ على قرمشتها ونكهتها، ثم يُضاف إليها العسل في المرحلة الأخيرة ليحافظ على جودته وقيمته الغذائية — منتج طبيعي 100% بدون إضافات صناعية.',
    benefits: [
      'يعزز الطاقة والحيوية طوال اليوم بشكل طبيعي',
      'مصدر ممتاز للبروتين والدهون الصحية',
      'يدعم جهاز المناعة بفضل العسل الطبيعي',
      'مثالي للرياضيين وكل من يبحث عن طاقة صحية',
    ],
    ingredients: 'عسل الحر بالليمون، لوز، كركاع، كاجو، بذور السمسم، بذور الكتان، دوار الشمس، زريعة القرع',
    usage: 'ملعقة إلى ملعقتين يوميًا حسب الحاجة — مناسب للإفطار أو كوجبة خفيفة خلال اليوم',
    storage: 'يحفظ في مكان بارد وجاف بعيدًا عن أشعة الشمس',
    nutrition: { calories: '490–510', protein: '11–18غ', fat: '26–30غ', carbs: '40–53غ', sugar: '34–38غ', fiber: '6–7غ' },
    badge: 'الأكثر مبيعاً',
    sizes: [{ label: '500 غرام', price: 170 }, { label: '1 كيلوغرام', price: 325 }]
  },
  'daghmous': {
    id: 'daghmous',
    nameAr: 'عسل الدغموس',
    nameFr: 'Miel de Daghmous',
    category: 'عسل',
    price: 349,
    image: 'assets/images/daghmous-2.jpg',
    shortDesc: 'عسل الصبار الصحراوي النادر، غني بالمعادن والفيتامينات',
    fullDesc: 'عسل الدغموس — من أنادر أصناف العسل المغربي، يُجمع من نباتات الصبار الصحراوية (الدغموس) في المناطق الجنوبية من المغرب. لونه داكن عميق وطعمه قوي مميز، معروف بخصائصه الشفائية الاستثنائية.',
    benefits: ['غني بالمعادن النادرة والفيتامينات','يعزز جهاز المناعة','مضاد طبيعي للالتهابات','يساعد على تنظيم السكر في الدم'],
    ingredients: 'عسل الصبار الصحراوي (دغموس) 100% طبيعي',
    badge: 'نادر',
    sizes: [{ label: '500 غرام', price: 185 }, { label: '1 كيلوغرام', price: 349 }]
  },
  'shilajit': {
    id: 'shilajit',
    nameAr: 'شيلاجيت',
    nameFr: 'Shilajit',
    category: 'مكملات طبيعية',
    price: 199,
    image: 'assets/images/shilajit.jpg',
    shortDesc: 'مستخرج من صخور جبال الهيمالايا — معدن الطاقة والحيوية',
    fullDesc: 'الشيلاجيت — يُسمى "مدمر الجبال" في الطب الأيورفيدي. مادة طبيعية نادرة تتشكل على مدى آلاف السنين في صخور جبال الهيمالايا، غنية بأكثر من 85 معدناً ومركب حامض الفولفيك. يُعدّ من أقوى المكملات الطبيعية للطاقة والحيوية.',
    benefits: ['يرفع مستوى الطاقة والحيوية','يحسن الأداء الجنسي والخصوبة','يدعم وظائف المخ والتركيز','يحتوي على 85+ معدن طبيعي','مضاد قوي للتعب والإرهاق'],
    ingredients: 'شيلاجيت خام نقي 100% من جبال الهيمالايا',
    badge: 'نادر',
    sizes: [{ label: '30 غرام', price: 120 }, { label: '50 غرام', price: 199 }]
  },
  'eucalyptus': {
    id: 'eucalyptus',
    nameAr: 'عسل الكاليبتوس',
    nameFr: "Miel d'Eucalyptus",
    category: 'عسل',
    price: 199,
    image: 'assets/images/eucalyptus.jpg',
    shortDesc: 'عسل الكاليبتوس الطبيعي — شفاء للجهاز التنفسي',
    fullDesc: 'عسل الكاليبتوس — يُستخرج من رحيق أزهار شجر الكاليبتوس (الأوكاليبتوس) في غابات المغرب. لونه عسلي ذهبي ورائحته منعشة مميزة. مشهور بتأثيره الشافي على الجهاز التنفسي والتهابات الحلق.',
    benefits: ['يشفي التهابات الحلق والجهاز التنفسي','مضاد طبيعي للبكتيريا والفيروسات','يخفف السعال والرشح','منعش ومقوٍّ للجهاز المناعي'],
    ingredients: 'عسل الكاليبتوس الطبيعي 100%',
    badge: 'طبيعي 100%',
    sizes: [{ label: '500 غرام', price: 109 }, { label: '1 كيلوغرام', price: 199 }]
  },
  'mardiria': {
    id: 'mardiria',
    nameAr: 'عسل مارديسيا',
    nameFr: 'Miel de Mardiria',
    category: 'عسل',
    price: 449,
    image: 'assets/images/mardiria.jpg',
    shortDesc: 'عسل الماردية الكريمي النادر — طعم زهري رفيع لا يُضاهى',
    fullDesc: 'عسل مارديسيا — من أرقى أصناف العسل المغربي، يُستخرج من رحيق نبتة الماردية (الأسبيك) ذات الأزهار البنفسجية الجميلة. قوامه كريمي ناعم ولونه أبيض مائل للكريمي، طعمه زهري رفيع لا يُضاهى.',
    benefits: ['غني بالفلافونويد ومضادات الأكسدة','يهدئ الأعصاب ويحسن النوم','مضاد طبيعي للالتهابات والعدوى','يشفي أمراض الجلد والحساسية'],
    ingredients: 'عسل الماردية (الأسبيك/اللافندر) الطبيعي 100%',
    badge: 'فاخر',
    sizes: [{ label: '500 غرام', price: 240 }, { label: '1 كيلوغرام', price: 449 }]
  },
  'sidr': {
    id: 'sidr',
    nameAr: 'عسل السدر',
    nameFr: 'Miel de Jujubier',
    category: 'عسل ملكي',
    price: 899,
    image: 'assets/images/sidr.jpg',
    shortDesc: 'ملك العسل العربي — مذكور في السنة النبوية، شفاء وطاقة',
    fullDesc: 'عسل السدر — ملك العسل الأصيل، يُستخرج حصرياً من رحيق أزهار شجرة السدر (الكنار) المباركة. مذكور في الحديث النبوي الشريف، معروف منذ آلاف السنين بقدرته الشفائية الاستثنائية. نادر، ثمين، لا غنى عنه في كل بيت مسلم.',
    benefits: ['مذكور في السنة النبوية الشريفة','يقوي جهاز المناعة بشكل استثنائي','يشفي أمراض الكبد والمعدة','يعالج الأنيميا وفقر الدم','مضاد قوي للسحر والعين','يزيد الطاقة والحيوية'],
    ingredients: 'عسل السدر (الكنار) 100% طبيعي غير مسخن',
    badge: 'ملكي',
    sizes: [{ label: '500 غرام', price: 480 }, { label: '1 كيلوغرام', price: 899 }]
  },
  'limon': {
    id: 'limon',
    nameAr: 'عسل الليمون',
    nameFr: 'Miel de Citronnier',
    category: 'عسل',
    price: 179,
    image: 'assets/images/limon.jpg',
    shortDesc: 'عسل أزهار الليمون المنعش — غني بمضادات الأكسدة',
    fullDesc: 'عسل الليمون — يُستخرج من رحيق أزهار أشجار الليمون المتفتحة في حدائق المغرب. لونه عنبري ذهبي شفاف، طعمه خفيف ومنعش مع لمسة حمضية رقيقة. من أجمل أصناف العسل المغربي وأخفّها على الذوق.',
    benefits: ['منعش ومقوٍّ للطاقة','غني بفيتامين C ومضادات الأكسدة','يدعم صحة الجهاز الهضمي','مثالي للأطفال والكبار'],
    ingredients: 'عسل أزهار الليمون الطبيعي 100%',
    badge: 'طبيعي 100%',
    sizes: [{ label: '500 غرام', price: 99 }, { label: '1 كيلوغرام', price: 179 }]
  },
  'argan': {
    id: 'argan',
    nameAr: 'زيت أركان غذائي',
    nameFr: "Huile d'Argan Alimentaire",
    category: 'زيوت طبيعية',
    price: 99,
    image: 'assets/images/argan-front.jpg',
    shortDesc: 'الذهب السائل المغربي — معصور بارداً، عالي الجودة',
    fullDesc: 'زيت أركان غذائي — "الذهب السائل" من قلب المغرب. يُعصر بارداً من بذور شجرة الأركان المعمّرة، الموجودة حصرياً في المغرب. غني بفيتامين E والأحماض الدهنية غير المشبعة الصحية. طعمه لذيذ مع عطر الزيتون المحمص.',
    benefits: ['غني جداً بفيتامين E','يصح القلب والأوعية الدموية','يخفض الكوليسترول الضار','مضاد قوي للأكسدة والشيخوخة'],
    ingredients: 'زيت أركان بكر 100% معصور بارداً، عضوي طبيعي',
    badge: 'عضوي',
    sizes: [{ label: '100 مل', price: 99 }, { label: '200 مل', price: 185 }]
  }
};

const moroccanCities = [
  'الدار البيضاء','الرباط','مراكش','فاس','طنجة','أكادير','مكناس','وجدة','القنيطرة','تطوان',
  'سلا','بني ملال','الحسيمة','الجديدة','آسفي','الناظور','خريبكة','سطات','خنيفرة','تازة',
  'الداخلة','العيون','كلميم','ورززات','الرشيدية','إفران','شفشاون','الفقيه بن صالح','برشيد','سيدي سليمان'
];

// ===== NAVBAR =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

navToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link, .mobile-cta').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ===== SELECTED SIZES STATE =====
const selectedSizes = {};

function selectSize(productId, sizeIdx) {
  const p = products[productId];
  selectedSizes[productId] = sizeIdx;
  document.querySelectorAll(`[data-pid="${productId}"]`).forEach((btn, i) => {
    btn.classList.toggle('active', i === sizeIdx);
  });
  const priceEl = document.getElementById(`lp-price-${productId}`);
  if (priceEl) priceEl.textContent = p.sizes[sizeIdx].price.toLocaleString('ar-MA');
  const qty = parseInt(document.getElementById(`qty_${productId}`)?.value) || 1;
  updateTotal(p.sizes[sizeIdx].price, qty, productId);
}

function getCurrentPrice(productId) {
  const p = products[productId];
  const idx = selectedSizes[productId] ?? (p.sizes.length - 1);
  return p.sizes[idx].price;
}

function getCurrentSizeLabel(productId) {
  const p = products[productId];
  const idx = selectedSizes[productId] ?? (p.sizes.length - 1);
  return p.sizes[idx].label;
}

// ===== PRODUCT MODAL =====
function switchGalleryImg(pid, src, btn) {
  const mainImg = document.getElementById(`lp-main-img-${pid}`);
  if (mainImg) {
    mainImg.style.opacity = '0';
    setTimeout(() => { mainImg.src = src; mainImg.style.opacity = '1'; }, 180);
  }
  btn.closest('.lp-thumbs-strip').querySelectorAll('.lp-thumb-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function openProduct(productId) {
  const p = products[productId];
  if (!p) return;

  selectedSizes[productId] = p.sizes.length - 1; // default: largest size

  const modal = document.getElementById('productModal');
  const modalInner = document.getElementById('modalInner');
  modalInner.innerHTML = buildProductLanding(p);
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  updateTotal(getCurrentPrice(productId), 1, productId);
  // Scroll modal to top
  document.getElementById('modalContent')?.scrollTo(0, 0);
}

function closeProduct() {
  const modal = document.getElementById('productModal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeProduct(); closeSuccess(); }
});

function buildProductLanding(p) {
  const cityOptions = moroccanCities.map(c => `<option value="${c}">${c}</option>`).join('');
  const defaultIdx  = p.sizes.length - 1;
  const defaultPrice = p.sizes[defaultIdx].price;
  const images = p.gallery || [p.image];

  const WA_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;
  const CHK = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`;
  const STAR = `<svg width="16" height="16" viewBox="0 0 24 24" fill="#FED617"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;

  // Image Gallery
  const thumbsHtml = images.map((img, i) => `
    <button type="button" class="lp-thumb-btn ${i === 0 ? 'active' : ''}" onclick="switchGalleryImg('${p.id}', '${img}', this)">
      <img src="${img}" alt="">
    </button>`).join('');

  const sizePicker = p.sizes.map((s, i) => `
    <button type="button" class="lp-size-opt${i === defaultIdx ? ' active' : ''}"
      data-pid="${p.id}" data-idx="${i}" onclick="selectSize('${p.id}', ${i})">
      <span class="lp-size-name">${s.label}</span>
      <span class="lp-size-price">${s.price} درهم</span>
    </button>`).join('');

  const benefitIcons = [
    `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
    `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  ];

  const benefitCards = p.benefits.map((b, i) => `
    <div class="lp-ben-card">
      <div class="lp-ben-icon">${benefitIcons[i % 4]}</div>
      <p>${b}</p>
    </div>`).join('');

  const ingChips = p.ingredients.split('،').map(ing =>
    `<span class="lp-ing-chip">${ing.trim()}</span>`).join('');

  // Nutrition section (only if product has it)
  const nutritionSection = p.nutrition ? `
    <div class="lp-nutrition-section">
      <div class="lp-section-header-wrap">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>
        <h3 class="lp-sec-title-sm">القيمة الغذائية <small>لكل 100غ</small></h3>
      </div>
      <div class="lp-nut-grid">
        <div class="lp-nut-card"><span class="lp-nut-val">${p.nutrition.calories}</span><span class="lp-nut-label">سعرات حرارية</span></div>
        <div class="lp-nut-card"><span class="lp-nut-val">${p.nutrition.protein}</span><span class="lp-nut-label">بروتين</span></div>
        <div class="lp-nut-card"><span class="lp-nut-val">${p.nutrition.fat}</span><span class="lp-nut-label">دهون</span></div>
        <div class="lp-nut-card"><span class="lp-nut-val">${p.nutrition.carbs}</span><span class="lp-nut-label">كربوهيدرات</span></div>
        <div class="lp-nut-card"><span class="lp-nut-val">${p.nutrition.sugar}</span><span class="lp-nut-label">سكريات</span></div>
        <div class="lp-nut-card"><span class="lp-nut-val">${p.nutrition.fiber}</span><span class="lp-nut-label">ألياف</span></div>
      </div>
    </div>` : '';

  // Usage & Storage section
  const usageSection = p.usage ? `
    <div class="lp-usage-wrap">
      <div class="lp-usage-card">
        <div class="lp-usage-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/><path d="M12 8v4l3 3"/></svg></div>
        <div><h4>طريقة الاستخدام</h4><p>${p.usage}</p></div>
      </div>
      ${p.storage ? `<div class="lp-usage-card">
        <div class="lp-usage-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div>
        <div><h4>طريقة الحفظ</h4><p>${p.storage}</p></div>
      </div>` : ''}
    </div>` : '';

  return `
  <div class="product-landing">

    <!-- STICKY PAGE HEADER -->
    <div class="lp-page-header">
      <button onclick="closeProduct()" class="lp-back-btn" aria-label="رجوع">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
        رجوع
      </button>
      <span class="lp-page-name">${p.nameAr}</span>
      <span class="lp-page-badge">${p.badge}</span>
    </div>

    <!-- ① HERO: GALLERY + INFO -->
    <div class="lp-hero">

      <div class="lp-img-col">
        <div class="lp-gallery-wrap">
          <div class="lp-main-img-wrap">
            <img src="${images[0]}" alt="${p.nameAr}" class="lp-main-img" id="lp-main-img-${p.id}">
            <div class="lp-img-badge">${p.badge}</div>
          </div>
          ${images.length > 1 ? `<div class="lp-thumbs-strip">${thumbsHtml}</div>` : ''}
        </div>
      </div>

      <div class="lp-info-col">
        <span class="lp-cat-tag">${p.category}</span>
        <h1 class="lp-title">${p.nameAr}</h1>
        <p class="lp-subtitle">${p.nameFr}</p>

        <div class="lp-rating">
          ${STAR}${STAR}${STAR}${STAR}${STAR}
          <span class="lp-rating-text">4.9 — <strong>+127 تقييم</strong></span>
        </div>

        <p class="lp-tagline-text">${p.shortDesc}</p>

        <ul class="lp-bullets">
          ${p.benefits.map(b => `<li>${CHK}<span>${b}</span></li>`).join('')}
        </ul>

        <div class="lp-size-box">
          <p class="lp-size-label">اختر الوزن / الحجم</p>
          <div class="lp-size-picker">${sizePicker}</div>
        </div>

        <div class="lp-price-row">
          <div class="lp-price-block">
            <span class="lp-price-num" id="lp-price-${p.id}">${defaultPrice}</span>
            <span class="lp-price-cur">درهم</span>
          </div>
          <span class="lp-cod-tag">الدفع عند الاستلام</span>
        </div>

        <button class="lp-main-cta" onclick="document.getElementById('lp-order-${p.id}').scrollIntoView({behavior:'smooth'})">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
          اطلب الآن — توصيل مضمون
        </button>

        <div class="lp-trust-pills">
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> جودة مضمونة</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 4v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> توصيل سريع</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg> دفع عند الاستلام</span>
          <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> طبيعي 100%</span>
        </div>
      </div>
    </div>

    <!-- ② DESCRIPTION -->
    <div class="lp-story-section">
      <div class="lp-story-inner">
        <div class="lp-story-icon">
          <svg width="32" height="32" viewBox="0 0 60 60" fill="none"><ellipse cx="30" cy="35" rx="14" ry="10" fill="#FED617"/><ellipse cx="30" cy="26" rx="8" ry="7" fill="#2A4937"/><ellipse cx="20" cy="28" rx="8" ry="4" fill="white" opacity="0.7" transform="rotate(-20 20 28)"/><ellipse cx="40" cy="28" rx="8" ry="4" fill="white" opacity="0.7" transform="rotate(20 40 28)"/></svg>
        </div>
        <h2 class="lp-story-title">ما هو ${p.nameAr}؟</h2>
        <p class="lp-story-text">${p.fullDesc}</p>
      </div>
    </div>

    <!-- ③ BENEFITS -->
    <div class="lp-bens-section">
      <h2 class="lp-sec-title">لماذا تختار <span>${p.nameAr}</span>؟</h2>
      <div class="lp-bens-grid">${benefitCards}</div>
    </div>

    <!-- ④ INGREDIENTS + NUTRITION + USAGE -->
    <div class="lp-details-section">
      <div class="lp-ingredients-section">
        <div class="lp-ing-header">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>
          المكونات الطبيعية
        </div>
        <div class="lp-ing-chips">${ingChips}</div>
      </div>
      ${nutritionSection}
      ${usageSection}
    </div>

    <!-- ⑤ ORDER FORM -->
    <div class="lp-order-section" id="lp-order-${p.id}">
      <div class="lp-order-header">
        <h2 class="lp-order-title">اطلب الآن</h2>
        <p class="lp-order-sub">التوصيل لجميع مدن المغرب — الدفع عند الاستلام</p>
      </div>

      <div class="lp-order-body">
        <div class="lp-size-section-form">
          <p class="lp-size-label">اختر الحجم</p>
          <div class="lp-size-picker">${p.sizes.map((s, i) => `
            <button type="button" class="lp-size-opt${i === defaultIdx ? ' active' : ''}"
              data-pid="${p.id}" data-idx="${i}" onclick="selectSize('${p.id}', ${i})">
              <span class="lp-size-name">${s.label}</span>
              <span class="lp-size-price">${s.price} درهم</span>
            </button>`).join('')}
          </div>
        </div>

        <form class="order-form" onsubmit="submitOrder(event, '${p.id}')">
          <div class="form-row">
            <div class="form-group">
              <label>الاسم الكامل *</label>
              <input type="text" name="name" placeholder="أدخل اسمك الكامل" required>
            </div>
            <div class="form-group">
              <label>رقم الهاتف *</label>
              <input type="tel" name="phone" placeholder="0600000000" required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>المدينة *</label>
              <select name="city" required>
                <option value="">اختر مدينتك</option>
                ${cityOptions}
              </select>
            </div>
            <div class="form-group">
              <label>الكمية</label>
              <div class="qty-control">
                <button type="button" class="qty-btn" onclick="changeModalQty('${p.id}', -1)">−</button>
                <input type="number" class="qty-display" id="qty_${p.id}" value="1" min="1" max="99" readonly>
                <button type="button" class="qty-btn" onclick="changeModalQty('${p.id}', 1)">+</button>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label>العنوان التفصيلي *</label>
            <input type="text" name="address" placeholder="الحي، الشارع، رقم الدار..." required>
          </div>
          <div class="form-group">
            <label>ملاحظات إضافية</label>
            <textarea name="notes" rows="3" placeholder="أي تفاصيل أو ملاحظات..."></textarea>
          </div>

          <div class="total-display">
            <span class="total-label">المجموع الكلي</span>
            <span class="total-amount" id="totalAmount_${p.id}">${defaultPrice} درهم</span>
          </div>

          <button type="submit" class="btn-submit-order" id="submitBtn_${p.id}">
            ${WA_SVG} تأكيد الطلب عبر واتساب
          </button>
          <div class="order-divider">أو تواصل مباشرة</div>
          <a href="#" id="waOrderBtn_${p.id}" class="btn-whatsapp-order" target="_blank">
            ${WA_SVG} واتساب مباشر
          </a>
        </form>
      </div>
    </div>

  </div>`;
}

function changeModalQty(productId, delta) {
  const input = document.getElementById(`qty_${productId}`);
  let val = parseInt(input.value) + delta;
  if (val < 1) val = 1;
  if (val > 99) val = 99;
  input.value = val;
  updateTotal(getCurrentPrice(productId), val, productId);
}

function updateTotal(price, qty, productId) {
  const total = price * qty;
  const totalEl = document.getElementById(`totalAmount_${productId}`);
  if (totalEl) totalEl.textContent = total.toLocaleString('ar-MA') + ' درهم';

  // Update WhatsApp link
  const waBtn = document.getElementById(`waOrderBtn_${productId}`);
  if (waBtn) {
    const p = products[productId];
    const msg = `مرحباً، أريد طلب:\n\n🛒 *${p.nameAr}* (${p.nameFr})\n📦 الكمية: ${qty}\n💰 السعر الإجمالي: ${total} درهم\n\nأرجو التواصل معي لتأكيد الطلب.`;
    waBtn.href = `https://wa.me/212713793867?text=${encodeURIComponent(msg)}`;
  }
}

function submitOrder(e, productId) {
  e.preventDefault();
  const form = e.target;
  const p = products[productId];
  const btn = document.getElementById(`submitBtn_${productId}`);

  const name = form.querySelector('[name="name"]').value.trim();
  const phone = form.querySelector('[name="phone"]').value.trim();
  const city = form.querySelector('[name="city"]').value;
  const address = form.querySelector('[name="address"]').value.trim();
  const notes = form.querySelector('[name="notes"]').value.trim();
  const qty   = parseInt(document.getElementById(`qty_${productId}`).value);
  const price = getCurrentPrice(productId);
  const size  = getCurrentSizeLabel(productId);
  const total = price * qty;

  if (!name || !phone || !city || !address) return;

  btn.disabled = true;
  btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation:spin 1s linear infinite"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity=".3"/><path d="M21 12a9 9 0 01-9 9"/></svg> جارٍ الإرسال...`;

  const msg = `🌿 *طلب جديد - Rahiq Bio*\n\n👤 *الاسم:* ${name}\n📞 *الهاتف:* ${phone}\n🏙️ *المدينة:* ${city}\n📍 *العنوان:* ${address}\n\n🛒 *المنتج:* ${p.nameAr} (${p.nameFr})\n📏 *الحجم:* ${size}\n📦 *الكمية:* ${qty}\n💰 *المجموع:* ${total} درهم${notes ? '\n\n📝 *ملاحظات:* ' + notes : ''}`;

  setTimeout(() => {
    window.open(`https://wa.me/212713793867?text=${encodeURIComponent(msg)}`, '_blank');
    closeProduct();
    showSuccess();
    btn.disabled = false;
    btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> تأكيد الطلب عبر واتساب`;
  }, 800);
}

function showSuccess() {
  const modal = document.getElementById('successModal');
  modal.classList.add('open');
}

function closeSuccess() {
  const modal = document.getElementById('successModal');
  modal.classList.remove('open');
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      mobileMenu.classList.remove('open');
    }
  });
});

// ===== HERO SOUND TOGGLE =====
function toggleHeroSound() {
  const video = document.getElementById('heroVideo');
  if (!video) return;
  video.muted = !video.muted;
  const isMuted = video.muted;
  document.getElementById('iconMuted').style.display = isMuted ? 'block' : 'none';
  document.getElementById('iconSound').style.display  = isMuted ? 'none'  : 'block';
  document.getElementById('soundLabel').textContent    = isMuted ? 'تشغيل الصوت' : 'كتم الصوت';
  // Ensure video is playing when user turns on sound
  if (!isMuted && video.paused) video.play().catch(() => {});
}

// ===== CSS SPIN ANIMATION =====
const style = document.createElement('style');
style.textContent = `@keyframes spin { to { transform: rotate(360deg); } }`;
document.head.appendChild(style);

// ===== FREE-FLYING BEE ENGINE =====
class FreeBee {
  constructor(el, size, speed, phase) {
    this.el  = el;
    this.img = el.querySelector('.free-bee-img');
    this.img.style.width = size + 'px';

    this.W = window.innerWidth;
    this.H = window.innerHeight;

    // Start position — spawn from a random edge
    const edge = Math.floor(Math.random() * 4);
    if (edge === 0) { this.x = Math.random() * this.W; this.y = -size; }
    else if (edge === 1) { this.x = this.W + size; this.y = Math.random() * this.H; }
    else if (edge === 2) { this.x = Math.random() * this.W; this.y = this.H + size; }
    else { this.x = -size; this.y = Math.random() * this.H; }

    this.vx = 0;
    this.vy = 0;
    this.speed   = speed;           // max px/frame
    this.size    = size;
    this.angle   = 0;               // current heading in radians
    this.smoothAngle = 0;

    // Bob cycle offset so two bees don't bob in sync
    this.bobPhase  = phase;
    this.bobAmp    = 3;             // px
    this.bobFreq   = 0.04;         // radians/frame

    this.frame = 0;

    // Pick first waypoint
    this.tx = 0; this.ty = 0;
    this._newTarget();
  }

  _newTarget() {
    // Mix of interior points and just-outside-edge points
    const r = Math.random();
    if (r < 0.75) {
      // inside viewport (stay visible most of the time)
      this.tx = this.size * 2 + Math.random() * (this.W - this.size * 4);
      this.ty = this.size * 2 + Math.random() * (this.H - this.size * 4);
    } else {
      // outside edge — enter/exit effect
      const edge = Math.floor(Math.random() * 4);
      if (edge === 0) { this.tx = Math.random() * this.W; this.ty = -this.size * 1.5; }
      else if (edge === 1) { this.tx = this.W + this.size; this.ty = Math.random() * this.H; }
      else if (edge === 2) { this.tx = Math.random() * this.W; this.ty = this.H + this.size; }
      else { this.tx = -this.size; this.ty = Math.random() * this.H; }
    }
    // Min distance to prevent zero-length targets
    const d = Math.hypot(this.tx - this.x, this.ty - this.y);
    if (d < 80) this._newTarget();
  }

  update() {
    this.frame++;
    this.W = window.innerWidth;
    this.H = window.innerHeight;

    // Vector toward target
    const dx = this.tx - this.x;
    const dy = this.ty - this.y;
    const dist = Math.hypot(dx, dy);

    // New target when close enough
    if (dist < 60) this._newTarget();

    // Desired velocity (normalised × speed)
    const desVx = (dx / dist) * this.speed;
    const desVy = (dy / dist) * this.speed;

    // Smooth steering (inertia — feels like a real insect)
    this.vx += (desVx - this.vx) * 0.025;
    this.vy += (desVy - this.vy) * 0.025;

    // Bob perpendicular to travel direction
    const travelAngle = Math.atan2(this.vy, this.vx);
    const bob = Math.sin(this.frame * this.bobFreq + this.bobPhase) * this.bobAmp;
    const perpX = -Math.sin(travelAngle) * bob;
    const perpY =  Math.cos(travelAngle) * bob;

    this.x += this.vx + perpX;
    this.y += this.vy + perpY;

    // Heading angle: atan2 + 90° because bee image head points UP (0°=up)
    const targetAngle = Math.atan2(this.vy, this.vx) + Math.PI / 2;

    // Smooth angle interpolation (handle wrap-around)
    let da = targetAngle - this.smoothAngle;
    while (da >  Math.PI) da -= 2 * Math.PI;
    while (da < -Math.PI) da += 2 * Math.PI;
    this.smoothAngle += da * 0.06;

    // Apply transform: position + rotation
    this.el.style.transform =
      `translate(${this.x}px, ${this.y}px) rotate(${this.smoothAngle}rad)`;
  }
}

// Create two bees — disabled on mobile to save battery/CPU
const beeEl1 = document.getElementById('bee1');
const beeEl2 = document.getElementById('bee2');
const isMobile = window.innerWidth < 768;

let bee1, bee2;

if (beeEl1 && beeEl2 && !isMobile) {
  bee1 = new FreeBee(beeEl1, 72, 2.4, 0);
  bee2 = new FreeBee(beeEl2, 55, 1.9, Math.PI);

  let lastBeeFrame = 0;
  function animateBees(ts) {
    if (ts - lastBeeFrame >= 33) { // ~30fps instead of 60fps
      bee1.update();
      bee2.update();
      lastBeeFrame = ts;
    }
    requestAnimationFrame(animateBees);
  }
  requestAnimationFrame(animateBees);

  // Update viewport size on resize
  window.addEventListener('resize', () => {
    if (bee1) { bee1.W = window.innerWidth; bee1.H = window.innerHeight; }
    if (bee2) { bee2.W = window.innerWidth; bee2.H = window.innerHeight; }
  });
}

// ===== REELS PLAYER =====
const reelVideos = document.querySelectorAll('.reel-video');
const reelState = {}; // { index: { playing, muted } }

// Init all reels
reelVideos.forEach((video, i) => {
  reelState[i] = { playing: false, muted: true };

  // Update progress bar while playing
  video.addEventListener('timeupdate', () => {
    if (!video.duration) return;
    const pct = (video.currentTime / video.duration) * 100;
    const bar = document.getElementById(`progress-${i}`);
    if (bar) bar.style.width = pct + '%';
  });

  // Intersection Observer — auto-play when scrolled into view, pause when out
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.play().catch(() => {});
        document.getElementById(`reel-${i}`).classList.add('playing');
        reelState[i].playing = true;
        updatePlayIcon(i, true);
      } else {
        video.pause();
        document.getElementById(`reel-${i}`).classList.remove('playing');
        reelState[i].playing = false;
        updatePlayIcon(i, false);
      }
    });
  }, { threshold: 0.5 });

  io.observe(video);
});

function toggleReel(index) {
  const video = document.querySelector(`.reel-video[data-index="${index}"]`);
  const card = document.getElementById(`reel-${index}`);
  if (!video) return;

  if (reelState[index].playing) {
    video.pause();
    card.classList.remove('playing');
    reelState[index].playing = false;
    updatePlayIcon(index, false);
  } else {
    video.play().catch(() => {});
    card.classList.add('playing');
    reelState[index].playing = true;
    updatePlayIcon(index, true);
  }
}

function toggleSound(index) {
  const video = document.querySelector(`.reel-video[data-index="${index}"]`);
  if (!video) return;

  const muted = !video.muted;
  video.muted = muted;
  reelState[index].muted = muted;

  // Mute all other videos
  if (!muted) {
    reelVideos.forEach((v, i) => {
      if (i !== index) { v.muted = true; reelState[i].muted = true; updateSoundIcon(i, true); }
    });
  }

  updateSoundIcon(index, muted);
}

function updatePlayIcon(index, playing) {
  const btn = document.getElementById(`playBtn-${index}`);
  if (!btn) return;
  btn.innerHTML = playing
    ? `<svg viewBox="0 0 24 24" fill="white"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`
    : `<svg viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21"/></svg>`;
}

function updateSoundIcon(index, muted) {
  const icon = document.getElementById(`soundIcon-${index}`);
  const btn = document.getElementById(`soundBtn-${index}`);
  if (!icon || !btn) return;

  if (muted) {
    icon.innerHTML = `
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="white" opacity="0.5"/>
      <line x1="23" y1="9" x2="17" y2="15" stroke="white" stroke-width="2" opacity="0.5"/>
      <line x1="17" y1="9" x2="23" y2="15" stroke="white" stroke-width="2" opacity="0.5"/>
    `;
    btn.classList.add('muted');
  } else {
    icon.innerHTML = `
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
    `;
    btn.classList.remove('muted');
  }
}

// ===== CART SYSTEM =====
const cart = [];

function addToCart(productId, btn) {
  const card = document.querySelector(`[data-product="${productId}"]`);
  const activeVariant = card.querySelector('.variant-btn.active');
  const priceEl = card.querySelector('.price-val');
  const nameEl = card.querySelector('.product-name-ar');
  const p = products[productId];

  const name = nameEl.textContent.trim();
  const price = parseInt(priceEl.textContent);
  const weight = activeVariant ? activeVariant.textContent.split('—')[0].trim() : '';
  const img = p ? p.image : '';

  const key = productId + '|' + weight;
  const existing = cart.find(i => i.key === key);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ key, id: productId, name, price, weight, img, qty: 1 });
  }

  // Animate button
  btn.classList.add('added');
  btn.textContent = '✓ أضيف!';
  setTimeout(() => {
    btn.classList.remove('added');
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg> أضف للسلة`;
  }, 1500);

  updateCartUI();
}

function changeQty(key, delta) {
  const idx = cart.findIndex(i => i.key === key);
  if (idx === -1) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateCartUI();
}

function removeFromCart(key) {
  const idx = cart.findIndex(i => i.key === key);
  if (idx !== -1) cart.splice(idx, 1);
  updateCartUI();
}

function toggleCart() {
  document.getElementById('cartDrawer').classList.toggle('open');
}

function checkoutWhatsapp() {
  if (cart.length === 0) return;
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  let msg = 'السلام عليكم، أريد أن أطلب:\n\n';
  cart.forEach(i => {
    msg += `• ${i.name} (${i.weight}) × ${i.qty} = ${i.price * i.qty} درهم\n`;
  });
  msg += `\nالمجموع الكلي: ${total} درهم`;
  window.open(`https://wa.me/212713793867?text=${encodeURIComponent(msg)}`, '_blank');
}

// ===== GOOGLE SHEETS URL — أضف رابطك هنا بعد إعداد Apps Script =====
const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxYl94ywHQlf-afAcowhY_m2bgB21zVYz7ATxwZ6YQzJY5U9hNQ4w9lS-UkyLqDdYmCJQ/exec';

// ===== CHECKOUT MODAL =====
function openCheckout() {
  if (cart.length === 0) return;

  // Build items summary
  const summaryEl = document.getElementById('chkSummary');
  if (summaryEl) {
    summaryEl.innerHTML = cart.map(item => `
      <div class="chk-sum-item">
        <img src="${item.img}" alt="${item.name}" class="chk-sum-img" onerror="this.style.background='#f0f4f1';this.style.display='none'">
        <div class="chk-sum-info">
          <div class="chk-sum-name">${item.name}</div>
          <div class="chk-sum-variant">
            ${item.weight}
            <span class="chk-sum-qty">× ${item.qty}</span>
          </div>
        </div>
        <span class="chk-sum-price">${(item.price * item.qty).toLocaleString('ar-MA')} درهم</span>
      </div>`).join('');
  }

  // Update header subtitle
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const headerSub = document.getElementById('chkHeaderSub');
  if (headerSub) headerSub.textContent = `${totalItems} منتج في طلبك`;

  // Calculate totals
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  _updateCheckoutTotals(subtotal);

  // Show modal, close cart
  document.getElementById('cartDrawer').classList.remove('open');
  const modal = document.getElementById('checkoutModal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  document.getElementById('checkoutModal').classList.remove('open');
  document.body.style.overflow = '';
}

function _updateCheckoutTotals(subtotal) {
  const cityEl = document.getElementById('chkCity');
  const city = cityEl ? cityEl.value : '';
  const isTanger = city === 'طنجة';
  const shipping = subtotal >= 350 ? 0 : (isTanger ? 0 : 35);
  const grand = subtotal + shipping;

  const sub = document.getElementById('chkSubtotal');
  const shp = document.getElementById('chkShipping');
  const grd = document.getElementById('chkGrand');
  if (sub) sub.textContent = subtotal + ' درهم';
  if (shp) {
    shp.textContent = shipping === 0 ? 'مجاني' : shipping + ' درهم';
    shp.style.color = shipping === 0 ? '#25D366' : 'inherit';
  }
  if (grd) grd.textContent = grand + ' درهم';
}

function submitCartOrder(e) {
  e.preventDefault();
  if (cart.length === 0) return;

  const nameEl    = document.getElementById('chkName');
  const phoneEl   = document.getElementById('chkPhone');
  const cityEl    = document.getElementById('chkCity');
  const addressEl = document.getElementById('chkAddress');
  const notesEl   = document.getElementById('chkNotes');
  const btn       = document.getElementById('chkSubmitBtn');

  // Validate required fields
  let valid = true;
  [nameEl, phoneEl, cityEl, addressEl].forEach(el => {
    if (!el || !el.value.trim()) { if(el) el.classList.add('invalid'); valid = false; }
    else el.classList.remove('invalid');
  });
  if (!valid) {
    const firstInvalid = document.querySelector('.chk-field .invalid');
    if (firstInvalid) firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  const name    = nameEl.value.trim();
  const phone   = phoneEl.value.trim();
  const city    = cityEl.value;
  const address = addressEl.value.trim();
  const notes   = notesEl ? notesEl.value.trim() : '';

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const isTanger = city === 'طنجة';
  const shipping = subtotal >= 350 ? 0 : (isTanger ? 0 : 35);
  const grand    = subtotal + shipping;

  const productsText = cart.map(i =>
    `${i.name} (${i.weight}) × ${i.qty} = ${i.price * i.qty} درهم`
  ).join('\n');

  // Build WhatsApp message
  let msg = `🌿 *طلب جديد - Rahiq Bio*\n\n`;
  msg += `👤 *الاسم:* ${name}\n`;
  msg += `📞 *الهاتف:* ${phone}\n`;
  msg += `🏙️ *المدينة:* ${city}\n`;
  msg += `📍 *العنوان:* ${address}\n\n`;
  msg += `🛒 *المنتجات:*\n`;
  cart.forEach(i => {
    const lineTotal = i.price * i.qty;
    const qty = i.qty > 1 ? `×${i.qty}  ` : ``;
    msg += `  • ${qty}${i.name} (${i.weight}) — ${lineTotal} درهم\n`;
  });
  msg += `\n💰 *المجموع:* ${subtotal} درهم`;
  msg += `\n🚚 *التوصيل:* ${shipping === 0 ? 'مجاني' : shipping + ' درهم'}`;
  msg += `\n✅ *الإجمالي:* ${grand} درهم`;
  if (notes) msg += `\n\n📝 *ملاحظات:* ${notes}`;

  // Loading state
  btn.disabled = true;
  const originalHTML = btn.innerHTML;
  btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation:spin 0.8s linear infinite"><path d="M21 12a9 9 0 11-4-7.5" stroke-linecap="round"/></svg> جارٍ تسجيل الطلب...`;

  // ─── Send to Google Sheets ───
  function finalize() {
    window.open(`https://wa.me/212713793867?text=${encodeURIComponent(msg)}`, '_blank');
    cart.length = 0;
    updateCartUI();
    closeCheckout();
    showSuccess();
    btn.disabled = false;
    btn.innerHTML = originalHTML;
  }

  if (SHEETS_URL) {
    const now = new Date();
    const orderDate = now.toLocaleDateString('ar-MA', { timeZone: 'Africa/Casablanca' })
      + ' ' + now.toLocaleTimeString('ar-MA', { timeZone: 'Africa/Casablanca', hour: '2-digit', minute: '2-digit' });

    const items = cart.map(i => ({
      name:  `${i.name} (${i.weight})`,
      price: `${i.price} درهم`,
      qty:   i.qty
    }));

    const payload = { date: orderDate, name, phone, city, address, items };

    // إرسال عبر form مخفي → iframe مخفي (يتجاوز مشكلة CORS مع Apps Script)
    let iframe = document.getElementById('_sheetsIframe');
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.id = '_sheetsIframe';
      iframe.name = '_sheetsIframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
    }
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = SHEETS_URL;
    form.target = '_sheetsIframe';
    const inp = document.createElement('input');
    inp.type = 'hidden';
    inp.name = 'payload';
    inp.value = JSON.stringify(payload);
    form.appendChild(inp);
    document.body.appendChild(form);
    form.submit();
    setTimeout(() => { if (form.parentNode) form.parentNode.removeChild(form); }, 2000);
    setTimeout(finalize, 800);
  } else {
    setTimeout(finalize, 500);
  }
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);

  const badge = document.getElementById('cartBadge');
  if (badge) { badge.textContent = count > 0 ? count : ''; }

  const totalEl = document.getElementById('cartTotal');
  if (totalEl) totalEl.textContent = total + ' درهم';

  const footer = document.getElementById('cartFooter');
  if (footer) footer.style.display = cart.length > 0 ? 'block' : 'none';

  const itemsEl = document.getElementById('cartItems');
  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = `<div class="cart-empty-state">
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#c5ccc8" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
      <p>السلة فارغة</p></div>`;
    return;
  }

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name}">
      <div class="cart-item-info">
        <strong>${item.name}</strong>
        <span class="item-variant">${item.weight}</span>
        <span class="item-price">${item.price * item.qty} درهم</span>
      </div>
      <div class="cart-item-qty">
        <button onclick="changeQty('${item.key}', -1)">−</button>
        <span>${item.qty}</span>
        <button onclick="changeQty('${item.key}', 1)">+</button>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.key}')">✕</button>
    </div>
  `).join('');
}

// Update shipping when city changes in checkout
document.addEventListener('change', function(e) {
  if (e.target && e.target.id === 'chkCity') {
    const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
    _updateCheckoutTotals(subtotal);
  }
});

// ===== TICKER: pixel-perfect seamless loop =====
function initTicker() {
  const track = document.getElementById('tickerTrack');
  const half  = document.getElementById('tickerHalf');
  if (!track || !half) return;

  // Clone the half once — track = [half][clone]
  const clone = half.cloneNode(true);
  track.appendChild(clone);

  // Measure after layout is stable
  const halfW = half.getBoundingClientRect().width || half.scrollWidth;

  // Set animation to move exactly one half-width in pixels (seamless reset)
  const speed = 60; // px per second
  const dur   = halfW / speed;
  track.style.setProperty('--ticker-move', `-${halfW}px`);
  track.style.setProperty('--ticker-duration', `${dur.toFixed(1)}s`);
  track.classList.add('ticker-ready');
}

// Run after fonts & images are loaded for accurate measurement
if (document.readyState === 'complete') {
  initTicker();
} else {
  window.addEventListener('load', initTicker);
}

// Variant price switching
document.addEventListener('click', function(e) {
  const btn = e.target.closest('.variant-btn');
  if (!btn) return;
  const container = btn.closest('.product-variants');
  container.querySelectorAll('.variant-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const card = container.closest('.product-card');
  const priceEl = card.querySelector('.price-val');
  if (priceEl) {
    priceEl.style.transform = 'scale(1.15)';
    priceEl.textContent = btn.dataset.price;
    setTimeout(() => { priceEl.style.transform = ''; }, 200);
  }
});


// ===== MAINTENANCE MODE — تعطيل المنتجات مؤقتاً =====
(function applyMaintenance() {
  document.querySelectorAll('.product-card').forEach(card => {
    card.classList.add('maintenance');
  });
  // تعطيل زر السلة العائم
  const cartFloat = document.getElementById('cartFloat');
  if (cartFloat) cartFloat.style.display = 'none';
})();
