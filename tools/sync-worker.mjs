// Regenerates the data worker.js copies from script.js (PRODUCTS, SEO_OVERRIDES, RELATED, productAlt, productFaq).
// Run from the repo root after editing products/SEO in script.js:  node tools/sync-worker.mjs write
import fs from 'fs';
const src = fs.readFileSync('script.js','utf8');
const grab = (re) => { const m = src.match(re); if (!m) throw new Error('not found: '+re); return m; };
const products = eval('(' + grab(/const products = (\{[\s\S]*?\n\});/)[1] + ')');
const w0 = fs.readFileSync('worker.js','utf8');
const OLD = JSON.parse(w0.match(/const PRODUCTS = (\{[\s\S]*?\n\});/)[1]);
const out = {};
for (const [id,p] of Object.entries(products)) {
  const prices = p.sizes.map(s=>s.price);
  out[id] = { nameAr:p.nameAr, nameFr:p.nameFr, category:p.category, image:p.image, shortDesc:p.shortDesc, fullDesc:p.fullDesc||'',
    benefits:p.benefits||[], ingredients:p.ingredients||'', usage:p.usage||'', sizes:p.sizes.map(s=>({label:s.label,price:s.price})),
    low:Math.min(...prices), high:Math.max(...prices), soldOut:!!p.soldOut,
    desc: (OLD[id] && OLD[id].desc) || p.shortDesc + ' — ' + p.nameFr + ' (' + p.sizes.map(s=>s.label+' : '+s.price+' DH').join('، ') + '). توصيل لجميع مدن المغرب، الدفع عند الاستلام.' };
  if (p.onssa) out[id].onssa = p.onssa;
  if (p.contains) out[id].contains = p.contains;
}
const SEO_PAGES = eval('(' + grab(/const SEO_PAGES = (\{[\s\S]*?\n\});/)[1] + ')');
const relatedMap = eval('(' + grab(/const relatedMap = (\{[\s\S]*?\n\});/)[1] + ')');
const helpers = grab(/\/\/ Image alt text[\s\S]*?\nfunction productFaq\(p\) \{[\s\S]*?\n\}\n/)[0];
const seoBlock = '// <generated:seo> — copied from script.js (SEO_PAGES, relatedMap, productAlt, productFaq). Edit there, then regenerate.\n'
  + 'const SEO_OVERRIDES = ' + JSON.stringify(SEO_PAGES, null, 1) + ';\n'
  + 'const RELATED = ' + JSON.stringify(relatedMap) + ';\n'
  + helpers + '// </generated:seo>\n';
let w = w0.replace(/const PRODUCTS = \{[\s\S]*?\n\};/, () => 'const PRODUCTS = ' + JSON.stringify(out, null, 1) + ';');
w = w.replace(/\/\/ <generated:seo>[\s\S]*?\/\/ <\/generated:seo>\n/, () => seoBlock);
if (process.argv[2]==='write') { fs.writeFileSync('worker.js', w); console.log('written'); } else console.log(w===w0 ? 'UP TO DATE' : 'STALE');
