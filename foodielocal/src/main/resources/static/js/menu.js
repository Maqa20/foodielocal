// Menyu səhifəsi üçün JavaScript - main.js və detail.js-dən referans alaraq

document.addEventListener('DOMContentLoaded', function() {
    const DEFAULT_LANG = localStorage.getItem('foodielocalDil') || 'az';

    // Tərcümə lüğəti - main.js-dən referans
    const translations = {
        az: {
            navHome: 'Əsas',
            navRestaurants: 'Restoranlar',
            navReservation: 'Rezervasiya',
            navReviews: 'Rəylər',
            navLanguage: 'Dil',
            menuBadge: 'Menyu',
            menuTitle: 'Menyu',
            menuSubtitle: 'Dadlı yeməklərimizi kəşf edin',
            menuBackButton: 'Restorana qayıt',
            menuEmptyTitle: 'Menyu məlumatı yoxdur',
            menuEmptyDescription: 'Menyu məlumatı hələ əlavə olunmayıb.',
            menuFooter: '© 2025 FoodieLocal. Bütün hüquqlar qorunur.',
            menuPopular: 'Məşhur',
            menuCategoryAll: 'Hamısı',
            menuCategoryMainDishes: 'İsti Yeməklər',
            menuCategoryStarters: 'Qəlyanaltılar',
            menuCategoryDrinks: 'İçkilər',
            menuCategoryDesserts: 'Şirniyyatlar',
            menuCategorySnacks: 'Qəlyanaltılar (Snacks)',
            menuCategoryPopular: 'Məşhur',
            menuNoItemsTitle: 'Bu kateqoriyada yemək yoxdur',
            menuNoItemsDescription: 'Başqa kateqoriya seçin.'
        },
        en: {
            navHome: 'Home',
            navRestaurants: 'Restaurants',
            navReservation: 'Reservation',
            navReviews: 'Reviews',
            navLanguage: 'Language',
            menuBadge: 'Menu',
            menuTitle: 'Menu',
            menuSubtitle: 'Discover our delicious dishes',
            menuBackButton: 'Back to restaurant',
            menuEmptyTitle: 'Menu not available',
            menuEmptyDescription: 'Menu information has not been added yet.',
            menuFooter: '© 2025 FoodieLocal. All rights reserved.',
            menuPopular: 'Popular',
            menuCategoryAll: 'All',
            menuCategoryMainDishes: 'Main Dishes',
            menuCategoryStarters: 'Starters',
            menuCategoryDrinks: 'Drinks',
            menuCategoryDesserts: 'Desserts',
            menuCategorySnacks: 'Snacks',
            menuCategoryPopular: 'Popular',
            menuNoItemsTitle: 'No items in this category',
            menuNoItemsDescription: 'Please select another category.'
        },
        ru: {
            navHome: 'Главная',
            navRestaurants: 'Рестораны',
            navReservation: 'Бронирование',
            navReviews: 'Отзывы',
            navLanguage: 'Язык',
            menuBadge: 'Меню',
            menuTitle: 'Меню',
            menuSubtitle: 'Откройте для себя наши вкусные блюда',
            menuBackButton: 'Вернуться в ресторан',
            menuEmptyTitle: 'Меню недоступно',
            menuEmptyDescription: 'Информация о меню еще не добавлена.',
            menuFooter: '© 2025 FoodieLocal. Все права защищены.',
            menuPopular: 'Популярное',
            menuCategoryAll: 'Все',
            menuCategoryMainDishes: 'Горячие блюда',
            menuCategoryStarters: 'Закуски',
            menuCategoryDrinks: 'Напитки',
            menuCategoryDesserts: 'Десерты',
            menuCategorySnacks: 'Закуски (Снеки)',
            menuCategoryPopular: 'Популярное',
            menuNoItemsTitle: 'В этой категории нет блюд',
            menuNoItemsDescription: 'Пожалуйста, выберите другую категорию.'
        }
    };

    // Menu item tərcümələri - DB-dən gələn məlumatlar HTML-də data attribute-lar kimi verilir
    const menuTranslations = {};

    // Menu item description tərcümələri - DB-dən gələn məlumatlar HTML-də data attribute-lar kimi verilir
    const menuDescriptionTranslations = {};

    // Avtomatik tərcümə funksiyası - EN mətni AZ və RU-ya tərcümə edir
    async function autoTranslate(text, targetLang) {
        if (!text || targetLang === 'en') return text;

        // Əgər tərcümə cache-də varsa, onu qaytar
        const cacheKey = `${text}_${targetLang}`;
        if (window.translationCache && window.translationCache[cacheKey]) {
            return window.translationCache[cacheKey];
        }

        try {
            // Google Translate API istifadə et (pulsuz versiya)
            const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`);
            const data = await response.json();

            if (data && data[0] && data[0][0] && data[0][0][0]) {
                const translated = data[0][0][0];

                // Cache-ə yaz
                if (!window.translationCache) window.translationCache = {};
                window.translationCache[cacheKey] = translated;

                return translated;
            }
        } catch (error) {
            console.warn('Translation error:', error);
        }

        // Əgər tərcümə uğursuz olarsa, orijinal mətni qaytar
        return text;
    }

    // Dil dəyişdirmə funksiyası - detail.js-dən referans
    function applyLanguage(lang) {
        const dict = translations[lang] || translations['az'];

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (key && dict[key]) {
                if (el.tagName === 'INPUT' && el.type === 'submit') {
                    el.value = dict[key];
                } else if (el.hasAttribute('placeholder')) {
                    el.setAttribute('placeholder', dict[key]);
                } else {
                    el.textContent = dict[key];
                }
            }
        });

        // Menu item name və description tərcümələri - avtomatik tərcümə
        document.querySelectorAll('.menu-item-name-text').forEach(async el => {
            // Əvvəlcə data attribute-lardan tərcümələri yoxla (backend-dən gəlir)
            const nameAz = el.getAttribute('data-name-az');
            const nameEn = el.getAttribute('data-name-en');
            const nameRu = el.getAttribute('data-name-ru');

            if (nameAz || nameEn || nameRu) {
                // Backend-dən tərcümələr gəlir
                if (lang === 'az' && nameAz) {
                    el.textContent = nameAz;
                } else if (lang === 'en' && nameEn) {
                    el.textContent = nameEn;
                } else if (lang === 'ru' && nameRu) {
                    el.textContent = nameRu;
                } else {
                    // Fallback: mövcud dildə tərcümə yoxdursa, EN istifadə et
                    el.textContent = nameEn || el.getAttribute('data-original-name') || el.textContent.trim();
                }
            } else {
                // Əgər data attribute-lar yoxdursa, avtomatik tərcümə et
                const originalName = el.getAttribute('data-original-name') || el.textContent.trim();
                if (originalName) {
                    if (menuTranslations[originalName]) {
                        el.textContent = menuTranslations[originalName][lang] || menuTranslations[originalName]['en'] || originalName;
                    } else if (lang !== 'en') {
                        // Avtomatik tərcümə et
                        const translated = await autoTranslate(originalName, lang);
                        el.textContent = translated;
                    } else {
                        el.textContent = originalName;
                    }
                }
            }
        });

        document.querySelectorAll('.menu-item-description-text').forEach(async el => {
            // Əvvəlcə data attribute-lardan tərcümələri yoxla (backend-dən gəlir)
            const descAz = el.getAttribute('data-desc-az');
            const descEn = el.getAttribute('data-desc-en');
            const descRu = el.getAttribute('data-desc-ru');

            if (descAz || descEn || descRu) {
                // Backend-dən tərcümələr gəlir
                if (lang === 'az' && descAz) {
                    el.textContent = descAz;
                } else if (lang === 'en' && descEn) {
                    el.textContent = descEn;
                } else if (lang === 'ru' && descRu) {
                    el.textContent = descRu;
                } else {
                    // Fallback: mövcud dildə tərcümə yoxdursa, EN istifadə et
                    el.textContent = descEn || el.getAttribute('data-original-description') || el.textContent.trim();
                }
            } else {
                // Əgər data attribute-lar yoxdursa, avtomatik tərcümə et
                const originalDesc = el.getAttribute('data-original-description') || el.textContent.trim();
                if (originalDesc) {
                    if (menuDescriptionTranslations[originalDesc]) {
                        el.textContent = menuDescriptionTranslations[originalDesc][lang] || menuDescriptionTranslations[originalDesc]['en'] || originalDesc;
                    } else if (lang !== 'en') {
                        // Avtomatik tərcümə et
                        const translated = await autoTranslate(originalDesc, lang);
                        el.textContent = translated;
                    } else {
                        el.textContent = originalDesc;
                    }
                }
            }
        });

        localStorage.setItem('foodielocalDil', lang);
        document.documentElement.setAttribute('lang', lang);

        // Aktiv düymə vəziyyətini yenilə
        document.querySelectorAll('.dil-secimi').forEach(function(btn) {
            btn.classList.remove('active');
            if (btn.getAttribute('data-dil') === lang) {
                btn.classList.add('active');
            }
        });
    }

    // Dil seçici düymələri - main.js-dən referans
    document.querySelectorAll('.dil-secimi').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-dil') || 'az';
            applyLanguage(lang);
        });
    });

    // İlkin dil tətbiq et
    window.addEventListener('load', () => {
        applyLanguage(DEFAULT_LANG);
    });

    setTimeout(() => {
        applyLanguage(DEFAULT_LANG);
    }, 500);

    // Şəkil fallback - detail.js-dən referans
    const PLACEHOLDER = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80';
    document.querySelectorAll('.menu-item-image').forEach(img => {
        img.addEventListener('error', function() {
            if (this.src !== PLACEHOLDER) {
                this.src = PLACEHOLDER;
            }
        });
    });

    // Smooth scroll animasiyası - index.html-dən referans
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Kart animasiyaları - index.css-dən referans
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.menu-item-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Category Filter Functionality
    function filterByCategory(category) {
        const menuItems = document.querySelectorAll('.menu-item-wrapper');
        const categorySections = document.querySelectorAll('.menu-category-section');
        const noItemsMessage = document.getElementById('noItemsMessage');
        let visibleCount = 0;
        let visibleSections = 0;

        // Filter items
        menuItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            const isPopular = item.getAttribute('data-is-popular') === 'true';

            let shouldShow = false;

            if (category === 'all') {
                shouldShow = true;
            } else if (category === 'popular') {
                shouldShow = isPopular;
            } else {
                shouldShow = itemCategory === category;
            }

            if (shouldShow) {
                item.style.display = 'block';
                visibleCount++;
                // Re-animate visible items
                const card = item.querySelector('.menu-item-card');
                if (card) {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px)';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                }
            } else {
                item.style.display = 'none';
            }
        });

        // Show/hide category sections based on visible items
        categorySections.forEach(section => {
            const sectionCategory = section.getAttribute('data-category-section');
            const sectionItems = section.querySelectorAll('.menu-item-wrapper');
            let hasVisibleItems = false;

            if (category === 'all') {
                hasVisibleItems = sectionItems.length > 0;
            } else if (category === 'popular') {
                sectionItems.forEach(item => {
                    if (item.getAttribute('data-is-popular') === 'true' && item.style.display !== 'none') {
                        hasVisibleItems = true;
                    }
                });
            } else {
                hasVisibleItems = sectionCategory === category;
            }

            if (hasVisibleItems) {
                section.style.display = 'block';
                visibleSections++;
            } else {
                section.style.display = 'none';
            }
        });

        // Show/hide no items message
        if (visibleCount === 0) {
            noItemsMessage.style.display = 'block';
        } else {
            noItemsMessage.style.display = 'none';
        }

        // Update active button
        document.querySelectorAll('.category-filter-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-category') === category) {
                btn.classList.add('active');
            }
        });
    }

    // Category filter button event listeners
    document.querySelectorAll('.category-filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            filterByCategory(category);
        });
    });
});

