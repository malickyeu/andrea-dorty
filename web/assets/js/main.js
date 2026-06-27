/* Dorty od Andreji — shared chrome + page interactivity (no build step) */

const NAV = [
  { href: 'index.html',          label: 'Úvod' },
  { href: 'galerie.html',        label: 'Galerie' },
  { href: 'dortfigurator.html',  label: 'Dortfigurátor' },
  { href: 'catering.html',       label: 'Catering' },
  { href: 'o-nas.html',          label: 'O nás' },
  { href: 'kontakt.html',        label: 'Kontakt' },
];

function headerHTML(active) {
  const links = NAV.map(n =>
    `<a href="${n.href}" class="nav-link text-sm font-medium tracking-wide uppercase ${n.href === active ? 'active' : 'text-ink/80'}">${n.label}</a>`
  ).join('');
  const mlinks = NAV.map(n =>
    `<a href="${n.href}" class="block px-2 py-3 border-b border-blush-100 text-ink/80 ${n.href === active ? 'text-wine font-semibold' : ''}">${n.label}</a>`
  ).join('');
  return `
  <div class="bg-wine text-white text-xs">
    <div class="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-2 text-center">
      <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
      <span>S láskou pečené &middot; ručně zdobené &middot; čerstvé suroviny od lokálních dodavatelů</span>
    </div>
  </div>
  <header class="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-blush-100">
    <div class="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
      <a href="index.html" class="shrink-0"><img src="assets/img/logo-header.png" alt="Dorty od Andreji" class="h-11 sm:h-[4.25rem] w-auto"></a>
      <nav class="hidden lg:flex items-center gap-8">${links}</nav>
      <div class="flex items-center gap-1.5">
        <button class="p-2 rounded-full hover:bg-blush-50 text-ink/70" aria-label="Hledat"><i data-lucide="search" class="w-5 h-5"></i></button>
        <button class="p-2 rounded-full hover:bg-blush-50 text-ink/70 hidden sm:block" aria-label="Účet"><i data-lucide="user" class="w-5 h-5"></i></button>
        <button class="p-2 rounded-full hover:bg-blush-50 text-ink/70 hidden sm:block" aria-label="Oblíbené"><i data-lucide="heart" class="w-5 h-5"></i></button>
        <button class="relative p-2 rounded-full hover:bg-blush-50 text-ink/70" aria-label="Košík">
          <i data-lucide="shopping-bag" class="w-5 h-5"></i>
          <span class="absolute -top-0.5 -right-0.5 bg-wine text-white text-[10px] leading-none w-4 h-4 grid place-items-center rounded-full">2</span>
        </button>
        <button id="navToggle" class="p-2 rounded-full hover:bg-blush-50 text-ink/70 lg:hidden" aria-label="Menu"><i data-lucide="menu" class="w-6 h-6"></i></button>
      </div>
    </div>
    <div id="mobileNav" class="hidden lg:hidden border-t border-blush-100 bg-white px-4 pb-4">${mlinks}
      <a href="dortfigurator.html" class="btn btn-wine w-full justify-center mt-4 py-3">Navrhnout dort</a>
    </div>
  </header>`;
}

// Brand/social icons inline (lucide dropped brand glyphs, so we ship our own)
const SOCIALS = [
  { label: 'Instagram', href: '#', svg: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>` },
  { label: 'Facebook', href: '#', svg: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8H6v4h3v8h4v-8h3l1-4h-4V6.5c0-.6.4-1 1-1h2V2h-3c-2.2 0-4 1.8-4 4v2z"/></svg>` },
  { label: 'E-mail', href: 'mailto:andrea@majerik.cz', svg: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>` },
];

function footerHTML() {
  const col = (title, items) =>
    `<div><h4 class="text-xs uppercase tracking-widest text-wine font-semibold mb-4">${title}</h4>
      <ul class="space-y-2.5 text-sm text-ink/70">${items.map(i => `<li><a href="${i[1]}" class="hover:text-wine transition">${i[0]}</a></li>`).join('')}</ul></div>`;
  return `
  <footer class="bg-petal border-t border-blush-100 mt-4">
    <div class="max-w-7xl mx-auto px-4 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
      <div class="lg:col-span-2 max-w-md">
        <div class="flex gap-5 items-start">
          <img src="assets/img/logo-footer.png" alt="Dorty od Andreji" class="h-32 sm:h-36 w-auto shrink-0">
          <div>
            <p class="text-sm text-ink/70 leading-relaxed">Zakázková cukrářská výroba dortů, sladkostí a sweet cateringu. Každý dort je dělaný s láskou a z čerstvých surovin.</p>
            <div class="flex gap-3 mt-5">
              ${SOCIALS.map(s => `<a href="${s.href}" aria-label="${s.label}" class="w-9 h-9 grid place-items-center rounded-full bg-white border border-blush-200 text-wine hover:bg-wine hover:text-white transition">${s.svg}</a>`).join('')}
            </div>
          </div>
        </div>
      </div>
      ${col('Rychlé odkazy', [['Galerie','galerie.html'],['Dortfigurátor','dortfigurator.html'],['Sweet catering','catering.html'],['O nás','o-nas.html']])}
      ${col('Informace', [['Doprava a platba','doprava-a-platba.html'],['Obchodní podmínky','obchodni-podminky.html'],['Ochrana údajů (GDPR)','gdpr.html'],['Alergeny','alergeny.html'],['Časté dotazy (FAQ)','faq.html']])}
      <div>
        <h4 class="text-xs uppercase tracking-widest text-wine font-semibold mb-4">Kontakt</h4>
        <ul class="space-y-3 text-sm text-ink/70">
          <li class="flex items-center gap-2"><i data-lucide="phone" class="w-4 h-4 text-wine"></i> +420 777 XXX XXX</li>
          <li class="flex items-center gap-2"><i data-lucide="mail" class="w-4 h-4 text-wine"></i> andrea@majerik.cz</li>
          <li class="flex items-center gap-2"><i data-lucide="map-pin" class="w-4 h-4 text-wine"></i> Pardubice a okolí</li>
        </ul>
      </div>
    </div>
    <div class="border-t border-blush-100">
      <div class="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-xs text-ink/50">© 2026 Dorty od Andreji. Všechna práva vyhrazena.</p>
        <div class="flex items-center gap-2 text-ink/40">
          ${['Visa','Mastercard','Apple&nbsp;Pay','G&nbsp;Pay','QR'].map(p => `<span class="text-[11px] font-semibold px-2 py-1 rounded border border-blush-200 bg-white">${p}</span>`).join('')}
        </div>
      </div>
    </div>
  </footer>`;
}

function mountChrome() {
  const active = document.body.dataset.page || 'index.html';
  const h = document.getElementById('site-header');
  const f = document.getElementById('site-footer');
  if (h) h.innerHTML = headerHTML(active);
  if (f) f.innerHTML = footerHTML();

  const toggle = document.getElementById('navToggle');
  const mobile = document.getElementById('mobileNav');
  if (toggle && mobile) toggle.addEventListener('click', () => mobile.classList.toggle('hidden'));

  if (window.lucide) lucide.createIcons();
}

/* Scroll reveal */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !els.length) { els.forEach(e => e.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(e => io.observe(e));
}

/* Gallery filter — combined select filtering (visual demo) */
function initGalleryFilter() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  const selects = Array.from(document.querySelectorAll('select[data-filter]'));
  const countEl = document.getElementById('galleryCount');
  const emptyEl = document.getElementById('galleryEmpty');

  function apply() {
    const active = selects
      .map(s => ({ key: s.dataset.filter, val: s.value }))
      .filter(f => f.val && f.val !== 'all');
    let visible = 0;
    grid.querySelectorAll('[data-cake]').forEach(card => {
      const ok = active.every(f => (card.dataset[f.key] || '') === f.val);
      card.style.display = ok ? '' : 'none';
      if (ok) visible++;
    });
    if (countEl) countEl.textContent = visible;
    if (emptyEl) emptyEl.classList.toggle('hidden', visible !== 0);
  }
  selects.forEach(s => s.addEventListener('change', apply));
  apply();
}

/* FAQ accordion */
function initFaq() {
  const items = document.querySelectorAll('.faq-item');
  if (!items.length) return;
  items.forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // close others (single-open accordion)
      items.forEach(other => {
        other.classList.remove('open');
        const oa = other.querySelector('.faq-a');
        if (oa) oa.style.maxHeight = null;
      });
      if (!isOpen) { item.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; }
    });
  });
}

/* Configurator */
function initConfigurator() {
  const root = document.getElementById('configurator');
  if (!root) return;

  const PRICES = { base: 1650, perServing: 90, tiers: { '1': 0, '2': 900, '3': 1800, 'více': 2800 } };
  const state = { occasion: 'Narozeniny', servings: 20, shape: 'Kulatý', tiers: '1' };

  // option tiles
  root.querySelectorAll('[data-opt]').forEach(tile => {
    tile.addEventListener('click', () => {
      const key = tile.dataset.opt;
      root.querySelectorAll(`[data-opt="${key}"]`).forEach(t => t.classList.remove('selected'));
      tile.classList.add('selected');
      state[key] = tile.dataset.val;
      render();
    });
  });

  // slider
  const range = document.getElementById('servings');
  const out = document.getElementById('servingsOut');
  if (range) {
    const sync = () => {
      state.servings = +range.value;
      const pct = (range.value - range.min) / (range.max - range.min) * 100;
      range.style.setProperty('--p', pct + '%');
      if (out) out.textContent = range.value + ' porcí';
      render();
    };
    range.addEventListener('input', sync); sync();
  }

  function price() {
    return PRICES.base + state.servings * PRICES.perServing + (PRICES.tiers[state.tiers] || 0);
  }
  function render() {
    const fmt = n => n.toLocaleString('cs-CZ') + ' Kč';
    const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    set('previewPrice', fmt(price()));
    set('previewServings', state.servings + ' porcí');
    set('previewWeight', (state.servings * 0.22).toFixed(1).replace('.', ',') + ' kg');
    set('sumOccasion', state.occasion);
    set('sumShape', state.shape);
    set('sumTiers', state.tiers === 'více' ? 'Více pater' : state.tiers + (state.tiers === '1' ? ' patro' : ' patra'));
  }
  render();
}

document.addEventListener('DOMContentLoaded', () => {
  mountChrome();
  initReveal();
  initGalleryFilter();
  initConfigurator();
  initFaq();
});
