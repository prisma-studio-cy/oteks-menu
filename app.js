(() => {
    'use strict';

    const DATA = [
        { title: "Sofra & Sunum", icon: "🍽️", items: [
            { name: "Porselen Ürünleri", sub: "Premium porselen koleksiyonu", pdf: "pdfs/CompressedPorselen Ürünleri.pdf" },
            { name: "Cam Ürünleri", sub: "Kristal cam çeşitleri", pdf: "pdfs/CompressedCam Ürünleri.pdf" },
            { name: "Çatal-Kaşık-Bıçak Ürünleri", sub: "Profesyonel çatal bıçak setleri", pdf: "pdfs/CompressedÇatal Kaşık Bıçak Ürünleri.pdf" }
        ]},
        { title: "Sunum & Servis Ekipmanları", icon: "🏨", items: [
            { name: "Sunum Ürünleri", sub: "Şık sunum ekipmanları", pdf: "pdfs/CompressedSunum Ürünleri.pdf" },
            { name: "Masaüstü Servis Aksesuarları", sub: "Masa düzeni aksesuarları", pdf: "pdfs/CompressedMasaüstü Servis Aksesuarları.pdf" }
        ]},
        { title: "Bar & İçecek Ekipmanları", icon: "🍸", items: [
            { name: "Bar Ekipmanları", sub: "Profesyonel bar ürünleri", pdf: "pdfs/CompressedBar Aksesuarları.pdf" },
            { name: "İçecek Hazırlama", sub: "İçecek hazırlama ekipmanları", pdf: "pdfs/Compressedİçecek Hazırlama.pdf" }
        ]},
        { title: "Mutfak Hazırlık Ekipmanları", icon: "🔪", items: [
            { name: "Hazırlık Aletleri", sub: "Temel hazırlık gereçleri", pdf: "pdfs/CompressedHazırlık Aletleri.pdf" },
            { name: "Yardımcı Aletler", sub: "Mutfak yardımcı ekipmanları", pdf: "pdfs/CompressedYardımcı Aletler.pdf" },
            { name: "Endüstriyel Hazırlık Cihazları", sub: "Ticari mutfak makineleri", pdf: "pdfs/CompressedEndüstriyel Hazırlık Cihazları.pdf" }
        ]},
        { title: "Pişirme Ekipmanları", icon: "🔥", items: [
            { name: "Pişirme Ürünleri", sub: "Tencere, tava ve pişirme setleri", pdf: "pdfs/CompressedPişirme Ürünleri.pdf" },
            { name: "Endüstriyel Pişirme Cihazları", sub: "Ticari pişirme ekipmanları", pdf: "pdfs/CompressedEndüstriyel Pişirme Cihazları.pdf" }
        ]},
        { title: "Açık Büfe & Teşhir Sistemleri", icon: "✨", items: [
            { name: "Teşhir Ürünleri", sub: "Görsel sunum ve teşhir üniteleri", pdf: "pdfs/CompressedTeşhir Ürünleri.pdf" },
            { name: "Büfe Servis & Aksesuarları", sub: "Büfe ekipmanları", pdf: "pdfs/CompressedBüfe Servis & Aksesuarları.pdf" },
            { name: "Genel Amaçlı Yiyecek Arabaları", sub: "Servis ve taşıma arabaları", pdf: "pdfs/CompressedGenel Amaçlı Yiyecek Arabaları.pdf" }
        ]},
        { title: "Housekeeping", icon: "🧹", items: [
            { name: "Housekeeping Ekipmanları", sub: "Temizlik ve düzen ekipmanları", pdf: "pdfs/CompressedHousekeeping Ekipmanları.pdf" }
        ]},
        { title: "Tekstil Ürünleri", icon: "🛏️", items: [
            { name: "Yatak Tekstili", sub: "Premium yatak ve nevresim ürünleri", pdf: "pdfs/CompressedYatak Tekstil Ürünleri.pdf" },
            { name: "Banyo Tekstili", sub: "Havlu ve bornoz koleksiyonu", pdf: "pdfs/CompressedBanyo Tekstili.pdf" },
            { name: "Restaurant Tekstili", sub: "Masa örtüsü ve peçete çeşitleri", pdf: "pdfs/CompressedRestaurant Tekstili.pdf" }
        ]},
        { title: "Ambiyans Koku Sistemleri", icon: "🌿", items: [
            { name: "Geniş Alan Ambiyans Koku Sistemleri", sub: "Endüstriyel koku sistemleri", pdf: "pdfs/CompressedGeniş Alan Koku Makineleri.pdf" },
            { name: "Dekoratif Ambiyans Koku Sistemleri", sub: "Dekoratif koku çözümleri", pdf: "pdfs/CompressedDekoratif Koku Makineleri.pdf" }
        ]},
        { title: "Reklam & Promosyon", icon: "📢", items: [
            { name: "Promosyon Ürünleri", sub: "Kurumsal promosyon çeşitleri", pdf: "pdfs/CompressedPromosyon Ürünleri.pdf" },
            { name: "Reklam-Yönlendirme", sub: "Tabela ve yönlendirme ürünleri", pdf: "pdfs/CompressedReklam-Yönlendirme.pdf" }
        ]}
    ];

    const SVG_DOC = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/></svg>';
    const SVG_ARROW = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/></svg>';
    const SVG_CHEVRON = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>';

    const menuEl = document.getElementById('menu');
    const emptyEl = document.getElementById('empty');
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    const toTopBtn = document.getElementById('toTop');

    function createSvgContainer(cls, svgMarkup) {
        const el = document.createElement('div');
        el.className = cls;
        el.innerHTML = svgMarkup;
        return el;
    }

    function buildMenu() {
        const frag = document.createDocumentFragment();

        DATA.forEach(function(cat, i) {
            const el = document.createElement('div');
            el.className = 'cat';
            el.dataset.title = cat.title.toLowerCase();
            el.dataset.index = String(i);

            const head = document.createElement('div');
            head.className = 'cat-head';

            const emoji = document.createElement('div');
            emoji.className = 'cat-emoji';
            emoji.textContent = cat.icon;

            const info = document.createElement('div');
            info.className = 'cat-info';

            const catName = document.createElement('div');
            catName.className = 'cat-name';
            catName.textContent = cat.title;

            const catCount = document.createElement('div');
            catCount.className = 'cat-count';
            catCount.textContent = cat.items.length + ' katalog';

            info.appendChild(catName);
            info.appendChild(catCount);

            head.appendChild(emoji);
            head.appendChild(info);
            head.appendChild(createSvgContainer('cat-chevron', SVG_CHEVRON));

            const body = document.createElement('div');
            body.className = 'cat-body';
            const bodyInner = document.createElement('div');
            bodyInner.className = 'cat-body-inner';
            const itemsWrap = document.createElement('div');
            itemsWrap.className = 'cat-items';

            cat.items.forEach(function(item) {
                const a = document.createElement('a');
                a.className = 'item';
                a.href = 'pdfs/' + encodeURIComponent(item.pdf.replace('pdfs/', ''));
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
                a.dataset.name = item.name.toLowerCase();
                a.dataset.sub = item.sub.toLowerCase();

                const title = document.createElement('div');
                title.className = 'item-title';
                title.textContent = item.name;

                const sub = document.createElement('div');
                sub.className = 'item-sub';
                sub.textContent = item.sub;

                const details = document.createElement('div');
                details.className = 'item-details';
                details.appendChild(title);
                details.appendChild(sub);

                a.appendChild(createSvgContainer('item-pdf-icon', SVG_DOC));
                a.appendChild(details);
                a.appendChild(createSvgContainer('item-go', SVG_ARROW));

                itemsWrap.appendChild(a);
            });

            bodyInner.appendChild(itemsWrap);
            body.appendChild(bodyInner);
            el.appendChild(head);
            el.appendChild(body);
            frag.appendChild(el);
        });

        menuEl.appendChild(frag);
    }

    buildMenu();

    function revealCategories() {
        var cats = menuEl.querySelectorAll('.cat');
        cats.forEach(function(cat, i) {
            setTimeout(function() { cat.classList.add('visible'); }, i * 60);
        });
    }

    var openCat = null;
    menuEl.addEventListener('click', function(e) {
        var head = e.target.closest('.cat-head');
        if (!head) return;
        var cat = head.parentElement;
        var isOpen = cat.classList.contains('open');
        if (openCat && openCat !== cat) openCat.classList.remove('open');
        if (isOpen) {
            cat.classList.remove('open');
            openCat = null;
        } else {
            cat.classList.add('open');
            openCat = cat;
            setTimeout(function() {
                cat.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 150);
        }
    });

    var searchTimeout;
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(filterMenu, 80);
        searchClear.classList.toggle('visible', searchInput.value.length > 0);
    });

    searchClear.addEventListener('click', function() {
        searchInput.value = '';
        searchClear.classList.remove('visible');
        filterMenu();
        searchInput.focus();
    });

    function sanitizeQuery(str) {
        return str.toLowerCase().trim().replace(/[<>"'&]/g, '');
    }

    function filterMenu() {
        var q = sanitizeQuery(searchInput.value);
        var cats = menuEl.querySelectorAll('.cat');
        var anyVisible = false;

        if (!q) {
            cats.forEach(function(cat) {
                cat.style.display = '';
                cat.classList.remove('open');
                cat.querySelectorAll('.item').forEach(function(it) { it.style.display = ''; });
            });
            openCat = null;
            emptyEl.classList.remove('show');
            return;
        }

        cats.forEach(function(cat) {
            var titleMatch = cat.dataset.title.includes(q);
            var items = cat.querySelectorAll('.item');
            var itemHits = 0;
            items.forEach(function(item) {
                if (item.dataset.name.includes(q) || item.dataset.sub.includes(q) || titleMatch) {
                    item.style.display = '';
                    itemHits++;
                } else {
                    item.style.display = 'none';
                }
            });
            if (titleMatch || itemHits > 0) {
                cat.style.display = '';
                cat.classList.add('open');
                anyVisible = true;
            } else {
                cat.style.display = 'none';
                cat.classList.remove('open');
            }
        });

        emptyEl.classList.toggle('show', !anyVisible);
    }

    var ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                toTopBtn.classList.toggle('show', window.scrollY > 500);
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    toTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('load', function() {
        setTimeout(function() {
            document.getElementById('loader').classList.add('done');
            revealCategories();
        }, 1000);
    });

    if (document.readyState === 'complete') {
        setTimeout(function() {
            document.getElementById('loader').classList.add('done');
            revealCategories();
        }, 1000);
    }
})();
