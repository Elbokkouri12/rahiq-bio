const SITE = 'https://rahiqbio.com';

const PRODUCTS = {
  zaytoun: { nameAr: 'زيتون طبيعي', nameFr: 'Olives Naturelles de Béni Mellal', price: '25', desc: 'زيتون طبيعي 100% من منطقة بني ملال. Olives naturelles de Béni Mellal, à partir de 25 dh. توصيل لجميع مدن المغرب.' },
  'amlou-louz': { nameAr: 'أملو اللوز', nameFr: 'Amlou Amande Au Miel De Citron', price: '220', desc: 'أملو اللوز الطبيعي بعسل الليمون. Amlou Amande au miel de citron, 100% naturel. à partir de 60 dh.' },
  'amlou-cacao': { nameAr: 'أملو كاكاو', nameFr: 'Amlou Cacahuète Au Miel De Citron', price: '90', desc: 'أملو كاكاو بالفول السوداني وعسل الليمون. Amlou cacahuète au miel de citron, à partir de 50 dh.' },
  'energie-royale': { nameAr: 'مزيج ملكي بالعسل والمكسرات', nameFr: 'Énergie Royale Mix', price: '170', desc: 'مزيج ملكي بالعسل والمكسرات، الأكثر مبيعاً. Énergie Royale Mix, 450g à partir de 90 dh.' },
  shilajit: { nameAr: 'شيلاجيت', nameFr: 'Shilajit Pur', price: '170', desc: 'شيلاجيت نقي 100% طبيعي. Shilajit pur 100% naturel, 50g à 170 dh.' },
  eucalyptus: { nameAr: 'عسل الكاليبتوس', nameFr: "Miel d'Eucalyptus", price: '200', desc: "عسل الكاليبتوس الطبيعي 100%. Miel d'Eucalyptus naturel, 500g à 110 dh, 1 kg à 200 dh." },
  sidr: { nameAr: 'عسل السدر', nameFr: 'Miel de Jujubier', price: '250', desc: 'عسل السدر الطبيعي 100%. Miel de Jujubier naturel, 500g à 135 dh, 1 kg à 250 dh.' },
  zaatar: { nameAr: 'عسل الزعتر', nameFr: 'Miel de Thym', price: '300', desc: 'عسل الزعتر الطبيعي 100%. Miel de Thym naturel, 500g à 160 dh, 1 kg à 300 dh.' },
  limon: { nameAr: 'عسل الليمون', nameFr: 'Miel de Citronnier', price: '130', desc: 'عسل الليمون الطبيعي 100%. Miel de Citronnier naturel, 500g à 70 dh, 1 kg à 130 dh.' },
  aachab: { nameAr: 'عسل الأعشاب', nameFr: 'Miel Multi Fleurs', price: '280', desc: 'عسل الأعشاب متعدد الأزهار الطبيعي 100%. Miel Multi Fleurs naturel, 500g à 150 dh, 1 kg à 280 dh.' },
  olive: { nameAr: 'زيت الزيتون الطبيعي', nameFr: "Huile d'Olive", price: '235', desc: "زيت الزيتون الطبيعي 100%. Huile d'Olive naturelle, 1L à 50 dh, 5L à 235 dh." },
  jarjir: { nameAr: 'عسل الجرجير', nameFr: 'Miel de Roquette', price: '320', desc: 'عسل الجرجير الطبيعي 100%. Miel de Roquette naturel, 500g à 179 dh, 1 kg à 320 dh.' },
  daghmous: { nameAr: 'عسل الدغموس', nameFr: 'Miel de Daghmous', price: '300', desc: 'عسل الدغموس الطبيعي 100%. Miel de Daghmous naturel, 500g à 160 dh, 1 kg à 300 dh.' },
  granola: { nameAr: 'جرانولا بالمكسرات', nameFr: 'Granola Nuts Mix', price: '90', desc: 'جرانولا بالمكسرات الطبيعية. Granola Nuts Mix naturel, 220g à 50 dh, 500g à 90 dh.' },
  'bundle-sante': { nameAr: 'باقة الصحة والطبيعة', nameFr: 'Santé & Nature', price: '299', desc: 'باقة الصحة والطبيعة من رهيق بيو، وفر 100 درهم. Pack Santé & Nature complet à 299 dh.' },
  'bundle-breakfast': { nameAr: 'باقة الفطور', nameFr: 'Breakfast Pack', price: '220', desc: 'باقة الفطور الطبيعية من رهيق بيو. Breakfast Pack naturel, à partir de 220 dh.' },
  'bee-pollen': { nameAr: 'حبوب اللقاح', nameFr: 'Bee Pollen', price: '50', desc: 'حبوب اللقاح الطبيعية 100%. Bee Pollen naturel, 100g à 50 dh.' },
  psyllium: { nameAr: 'نخالة القاطونة', nameFr: 'Psyllium Husk', price: '65', desc: 'نخالة القاطونة الطبيعية 100%. Psyllium Husk naturel, 200g à 65 dh.' },
  kharroub: { nameAr: 'عسل الخروب', nameFr: 'Miel de Caroubier', price: '230', desc: 'عسل الخروب الطبيعي 100%. Miel de Caroubier naturel, 500g à 120 dh, 1 kg à 230 dh.' },
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const slug = url.pathname.replace(/^\//, '').split('/')[0];

    if (slug && PRODUCTS[slug]) {
      const p = PRODUCTS[slug];
      const canonical = SITE + '/' + slug;
      const title = p.nameAr + ' – ' + p.nameFr + ' | رهيق بيو';

      // Fetch homepage HTML from static assets
      const homeUrl = new URL(url);
      homeUrl.pathname = '/';
      homeUrl.search = '';
      const homeRes = await env.ASSETS.fetch(new Request(homeUrl.toString(), { method: 'GET', headers: { Accept: 'text/html' } }));
      let html = await homeRes.text();

      const jsonLd = JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Product',
        name: p.nameAr + ' – ' + p.nameFr,
        description: p.desc,
        url: canonical,
        brand: { '@type': 'Brand', name: 'رهيق بيو' },
        offers: { '@type': 'Offer', price: p.price, priceCurrency: 'MAD', availability: 'https://schema.org/InStock', url: canonical }
      });

      html = html
        .replace(/<title>[^<]*<\/title>/, '<title>' + title + '</title>')
        .replace(/<link rel="canonical"[^>]*>/, '<link rel="canonical" href="' + canonical + '">')
        .replace(/<meta name="description"[^>]*>/, '<meta name="description" content="' + p.desc.replace(/"/g, '&quot;') + '">')
        .replace(/<meta property="og:url"[^>]*>/, '<meta property="og:url" content="' + canonical + '">')
        .replace(/<meta property="og:title"[^>]*>/, '<meta property="og:title" content="' + title.replace(/"/g, '&quot;') + '">')
        .replace(/<meta property="og:description"[^>]*>/, '<meta property="og:description" content="' + p.desc.replace(/"/g, '&quot;') + '">')
        .replace('<\/head>', '<script type="application/ld+json">' + jsonLd + '</script>\n</head>');

      return new Response(html, {
        status: 200,
        headers: {
          'Content-Type': 'text/html;charset=UTF-8',
          'Cache-Control': 'public, max-age=3600',
        }
      });
    }

    // SPA fallback: serve index.html for any unknown non-file path
    const assetsRes = await env.ASSETS.fetch(request);
    if (assetsRes.status === 404 && !url.pathname.includes('.')) {
      const homeUrl = new URL(url);
      homeUrl.pathname = '/';
      return env.ASSETS.fetch(new Request(homeUrl.toString(), { method: 'GET' }));
    }
    return assetsRes;
  }
};