// Rysunki wybranych znaków drogowych (SVG, viewBox 0 0 100 100).
// Uproszczone piktogramy — kształty i kolory zgodne z polskim systemem znaków.
(function () {
  const R = '#d32019', Y = '#ffcc00', B = '#1b5fae', W = '#fff', K = '#141414', G = '#9aa0a6';
  const svg = (inner, label) => `<svg viewBox="0 0 100 100" role="img" aria-label="${label || ''}">${inner}</svg>`;

  // Znaki ostrzegawcze (A): żółty trójkąt z czerwonym obramowaniem
  const tri = (p) => `<path d="M50 9 L94 86 L6 86 Z" fill="${Y}" stroke="${R}" stroke-width="8" stroke-linejoin="round"/>${p || ''}`;
  // Znaki zakazu (B): białe koło z czerwoną obwódką
  const ring = (p) => `<circle cx="50" cy="50" r="44" fill="${W}" stroke="${R}" stroke-width="10"/>${p || ''}`;
  // Znaki nakazu (C): niebieskie koło
  const blue = (p) => `<circle cx="50" cy="50" r="46" fill="${B}" stroke="${W}" stroke-width="3"/>${p || ''}`;
  // Znaki informacyjne (D): niebieski kwadrat
  const sq = (p) => `<rect x="5" y="5" width="90" height="90" rx="8" fill="${B}" stroke="${W}" stroke-width="3"/>${p || ''}`;
  const slash = (c, w) => `<line x1="20" y1="20" x2="80" y2="80" stroke="${c || R}" stroke-width="${w || 9}"/>`;
  const arrowUp = (c) => `<path d="M50 18 L70 42 L57 42 L57 82 L43 82 L43 42 L30 42 Z" fill="${c}"/>`;

  const S = {
    'A-1': tri(`<path d="M42 76 L42 56 Q42 44 54 40 L54 33 L66 45 L54 57 L54 50 Q51 51 51 56 L51 76 Z" fill="${K}"/>`),
    'A-2': tri(`<path d="M58 76 L58 56 Q58 44 46 40 L46 33 L34 45 L46 57 L46 50 Q49 51 49 56 L49 76 Z" fill="${K}"/>`),
    'A-5': tri(`<rect x="46" y="34" width="8" height="44" fill="${K}"/><rect x="28" y="54" width="44" height="8" fill="${K}"/>`),
    'A-6a': tri(`<rect x="44" y="32" width="12" height="46" fill="${K}"/><rect x="30" y="56" width="40" height="5" fill="${K}"/>`),
    'A-7': `<path d="M6 14 L94 14 L50 91 Z" fill="${Y}" stroke="${R}" stroke-width="8" stroke-linejoin="round"/>`,
    'A-8': tri(`<g fill="none" stroke="${K}" stroke-width="6"><path d="M38 52 A13 13 0 0 1 56 44"/><path d="M62 54 A13 13 0 0 1 52 70"/><path d="M44 70 A13 13 0 0 1 37 58"/></g><path d="M55 38 L63 46 L52 49 Z M66 60 L56 72 L52 63 Z M31 62 L39 52 L42 63 Z" fill="${K}"/>`),
    'A-11a': tri(`<path d="M24 74 Q50 50 76 74 Z" fill="${K}"/>`),
    'A-20': tri(`<path d="M40 36 L48 48 L43 48 L43 76 L37 76 L37 48 L32 48 Z" fill="${K}"/><path d="M60 76 L52 64 L57 64 L57 36 L63 36 L63 64 L68 64 Z" fill="${K}"/>`),
    'A-29': tri(`<rect x="40" y="32" width="20" height="46" rx="5" fill="${K}"/><circle cx="50" cy="41" r="5" fill="${R}"/><circle cx="50" cy="55" r="5" fill="${Y}"/><circle cx="50" cy="69" r="5" fill="#16a34a"/>`),
    'A-30': tri(`<rect x="45" y="34" width="10" height="28" rx="3" fill="${K}"/><circle cx="50" cy="72" r="5.5" fill="${K}"/>`),

    'B-1': ring(),
    'B-2': `<circle cx="50" cy="50" r="46" fill="${R}"/><rect x="17" y="42" width="66" height="16" fill="${W}"/>`,
    'B-20': `<path d="M31 4 L69 4 L96 31 L96 69 L69 96 L31 96 L4 69 L4 31 Z" fill="${R}"/><path d="M33 9 L67 9 L91 33 L91 67 L67 91 L33 91 L9 67 L9 33 Z" fill="none" stroke="${W}" stroke-width="3"/><text x="50" y="61" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="29" fill="${W}">STOP</text>`,
    'B-21': ring(`<g transform="translate(50 52) scale(.72) translate(-50 -52)"><path d="M60 82 L60 46 Q60 34 48 34 L40 34 L40 24 L22 40 L40 56 L40 46 L46 46 Q48 46 48 48 L48 82 Z" fill="${K}"/></g>${slash()}`),
    'B-22': ring(`<g transform="translate(50 52) scale(.72) translate(-50 -52)"><path d="M40 82 L40 46 Q40 34 52 34 L60 34 L60 24 L78 40 L60 56 L60 46 L54 46 Q52 46 52 48 L52 82 Z" fill="${K}"/></g>${slash()}`),
    'B-23': ring(`<path d="M62 80 L62 42 Q62 28 48 28 Q34 28 34 42 L34 58 L26 58 L38 72 L50 58 L42 58 L42 42 Q42 36 48 36 Q54 36 54 42 L54 80 Z" fill="${K}"/>${slash()}`),
    'B-25': ring(`<g><rect x="24" y="44" width="24" height="18" rx="5" fill="${R}"/><rect x="28" y="38" width="16" height="9" rx="3" fill="${R}"/><rect x="26" y="61" width="6" height="7" fill="${R}"/><rect x="40" y="61" width="6" height="7" fill="${R}"/><rect x="52" y="44" width="24" height="18" rx="5" fill="${K}"/><rect x="56" y="38" width="16" height="9" rx="3" fill="${K}"/><rect x="54" y="61" width="6" height="7" fill="${K}"/><rect x="68" y="61" width="6" height="7" fill="${K}"/></g>`),
    'B-33': ring(`<text x="50" y="62" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="36" fill="${K}">50</text>`),
    'B-34': `<circle cx="50" cy="50" r="45" fill="${W}" stroke="${K}" stroke-width="2"/><text x="50" y="62" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="36" fill="${G}">50</text><g stroke="${K}" stroke-width="3"><line x1="26" y1="18" x2="82" y2="74"/><line x1="18" y1="26" x2="74" y2="82"/><line x1="22" y1="22" x2="78" y2="78"/></g>`,
    'B-35': `<circle cx="50" cy="50" r="44" fill="${B}" stroke="${R}" stroke-width="10"/>${slash()}`,
    'B-36': `<circle cx="50" cy="50" r="44" fill="${B}" stroke="${R}" stroke-width="10"/>${slash()}<line x1="80" y1="20" x2="20" y2="80" stroke="${R}" stroke-width="9"/>`,
    'B-37': `<circle cx="50" cy="50" r="44" fill="${B}" stroke="${R}" stroke-width="10"/>${slash()}<rect x="27" y="56" width="6" height="18" fill="${W}"/>`,
    'B-38': `<circle cx="50" cy="50" r="44" fill="${B}" stroke="${R}" stroke-width="10"/>${slash()}<rect x="22" y="56" width="6" height="18" fill="${W}"/><rect x="32" y="56" width="6" height="18" fill="${W}"/>`,
    'B-42': `<circle cx="50" cy="50" r="45" fill="${W}" stroke="${K}" stroke-width="2"/><g stroke="${K}" stroke-width="3"><line x1="26" y1="18" x2="82" y2="74"/><line x1="18" y1="26" x2="74" y2="82"/><line x1="22" y1="22" x2="78" y2="78"/></g>`,

    'C-2': blue(`<path d="M40 82 L40 46 Q40 34 52 34 L60 34 L60 24 L78 40 L60 56 L60 46 L54 46 Q52 46 52 48 L52 82 Z" fill="${W}"/>`),
    'C-4': blue(`<path d="M60 82 L60 46 Q60 34 48 34 L40 34 L40 24 L22 40 L40 56 L40 46 L46 46 Q48 46 48 48 L48 82 Z" fill="${W}"/>`),
    'C-5': blue(arrowUp(W)),
    'C-9': blue(`<path d="M26 22 L34 14 L66 46 L72 40 L76 76 L40 72 L46 66 Z" fill="${W}"/>`),
    'C-12': blue(`<g fill="none" stroke="${W}" stroke-width="8"><path d="M30 46 A21 21 0 0 1 58 30"/><path d="M70 50 A21 21 0 0 1 56 72"/><path d="M42 72 A21 21 0 0 1 30 56"/></g><path d="M56 21 L68 33 L52 37 Z M78 58 L64 76 L60 61 Z M20 64 L31 47 L37 62 Z" fill="${W}"/>`),

    'D-1': `<path d="M50 4 L96 50 L50 96 L4 50 Z" fill="${W}" stroke="${K}" stroke-width="1.5"/><path d="M50 16 L84 50 L50 84 L16 50 Z" fill="${Y}"/>`,
    'D-2': `<path d="M50 4 L96 50 L50 96 L4 50 Z" fill="${W}" stroke="${K}" stroke-width="1.5"/><path d="M50 16 L84 50 L50 84 L16 50 Z" fill="${Y}"/><g stroke="${K}" stroke-width="3"><line x1="22" y1="30" x2="70" y2="78"/><line x1="30" y1="22" x2="78" y2="70"/><line x1="26" y1="26" x2="74" y2="74"/></g>`,
    'D-3': sq(arrowUp(W)),
    'D-4a': sq(`<rect x="43" y="34" width="14" height="50" fill="${W}"/><rect x="28" y="22" width="44" height="12" fill="${R}"/>`),
    'D-5': sq(`<path d="M62 20 L76 38 L67 38 L67 80 L57 80 L57 38 L48 38 Z" fill="${W}"/><path d="M36 80 L26 66 L33 66 L33 34 L39 34 L39 66 L46 66 Z" fill="${R}"/>`),
    'D-42': `<rect x="3" y="18" width="94" height="64" rx="4" fill="${W}" stroke="${K}" stroke-width="3"/><path d="M12 70 L12 52 L20 52 L20 44 L28 44 L28 56 L36 56 L36 36 L40 30 L44 36 L44 56 L52 56 L52 46 L60 46 L60 54 L66 54 L66 40 L74 40 L74 56 L80 56 L80 48 L88 48 L88 70 Z" fill="${K}"/>`,
    'D-43': `<rect x="3" y="18" width="94" height="64" rx="4" fill="${W}" stroke="${K}" stroke-width="3"/><path d="M12 70 L12 52 L20 52 L20 44 L28 44 L28 56 L36 56 L36 36 L40 30 L44 36 L44 56 L52 56 L52 46 L60 46 L60 54 L66 54 L66 40 L74 40 L74 56 L80 56 L80 48 L88 48 L88 70 Z" fill="${K}"/><line x1="8" y1="78" x2="92" y2="22" stroke="${R}" stroke-width="7"/>`,

    // Znaki poziome (widok z góry na jezdnię)
    'P-1': `<rect x="0" y="0" width="100" height="100" rx="6" fill="#3b3f46"/><g fill="${W}"><rect x="46" y="4" width="8" height="18"/><rect x="46" y="41" width="8" height="18"/><rect x="46" y="78" width="8" height="18"/></g>`,
    'P-2': `<rect x="0" y="0" width="100" height="100" rx="6" fill="#3b3f46"/><rect x="46" y="4" width="8" height="92" fill="${W}"/>`,
    'P-3a': `<rect x="0" y="0" width="100" height="100" rx="6" fill="#3b3f46"/><rect x="40" y="4" width="7" height="92" fill="${W}"/><g fill="${W}"><rect x="53" y="4" width="7" height="18"/><rect x="53" y="41" width="7" height="18"/><rect x="53" y="78" width="7" height="18"/></g>`,
    'P-4': `<rect x="0" y="0" width="100" height="100" rx="6" fill="#3b3f46"/><rect x="40" y="4" width="7" height="92" fill="${W}"/><rect x="53" y="4" width="7" height="92" fill="${W}"/>`,
    'P-13': `<rect x="0" y="0" width="100" height="100" rx="6" fill="#3b3f46"/><g fill="${W}"><path d="M6 36 L22 36 L14 62 Z"/><path d="M30 36 L46 36 L38 62 Z"/><path d="M54 36 L70 36 L62 62 Z"/><path d="M78 36 L94 36 L86 62 Z"/></g>`,
    'P-12': `<rect x="0" y="0" width="100" height="100" rx="6" fill="#3b3f46"/><rect x="6" y="42" width="88" height="14" fill="${W}"/>`,
    'P-10': `<rect x="0" y="0" width="100" height="100" rx="6" fill="#3b3f46"/><g fill="${W}"><rect x="8" y="14" width="12" height="72"/><rect x="30" y="14" width="12" height="72"/><rect x="52" y="14" width="12" height="72"/><rect x="74" y="14" width="12" height="72"/></g>`
  };

  window.ZNAK = function (code, caption) {
    const s = S[code];
    if (!s) return '';
    return `<figure class="sign"><div class="sign-i">${svg(s, code)}</div><figcaption><b>${code}</b>${caption ? ' ' + caption : ''}</figcaption></figure>`;
  };
  window.ZNAK_SVG = function (code) { return S[code] ? svg(S[code], code) : ''; };
  window.ZNAKI_LISTA = Object.keys(S);
})();
