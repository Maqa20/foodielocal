document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-button, .dil-secimi');
    const translatable = document.querySelectorAll('[data-i18n]');

    const translations = {
        az: {
            pageTitle: 'Bütün Restoranları Kəşf et',
            restaurantsHeaderTitle: 'Bütün Restoranları Kəşf edin',
            restaurantsHeaderSubtitle: 'Sizin üçün seçilmiş şəhərin ən yaxşı restoranlarını tapın.',
            detailsButton: 'Detallar',
            card1Name: 'City Bistro',
            card1Description: 'Mövsümi menyular və xüsusi kokteyllər təqdim edən müasir məkan.',
            card2Name: 'Blue Wave Seafood',
            card2Description: 'Dəniz ruhlu interyerdə təzə sahilyanı dadlardan həzz alın.',
            card3Name: 'Ember Grill',
            card3Description: 'Odla bişən steyklər və seçilmiş şərab siyahısı ilə intim atmosfer.',
            card4Name: 'Garden Terrace',
            card4Description: 'Yaşıl məkan və təbii işıqla əhatələnmiş farmdan-masaya mətbəx.',
            card5Name: 'Sweet Hours Pâtisserie',
            card5Description: 'Fransız desertləri, sənətkar qəhvəsi və rahat salon ab-havası.',
            card6Name: 'North Avenue Sushi',
            card6Description: 'Omakase təcrübəsi və təzə balıqları ilə minimalist suşi barı.',
            card7Name: 'Şirvansah',
            card7Description: 'Ənənəvi Azərbaycan mətbəxi ilə zərif mühitdə həqiqi yerli dadlar.',
            card8Name: 'Sumakh',
            card8Description: 'Klassik yeməklərə innovativ yanaşma təqdim edən müasir Azərbaycan restoranı.',
            card9Name: 'Chinar',
            card9Description: 'Ənənəvi plov, kabab və Azərbaycan xüsusi yeməkləri təqdim edən rahat restoran.',
            card10Name: 'Nargiz',
            card10Description: 'Ləzzətli dolma və qutabı ilə tanınan ailəvi restoran.',
            card11Name: 'Mangal Steak House',
            card11Description: 'Qril ət və Azərbaycan barbeqyu xüsusi yeməkləri ilə premium steyk evi.',
            card12Name: 'Dolma House',
            card12Description: 'Ənənəvi dolma, kabab və həqiqi Azərbaycan ev yeməkləri ilə məşhur.',
            card13Name: 'Karvansaray',
            card13Description: 'Canlı musiqi ilə ənənəvi Azərbaycan mətbəxi olan tarixi atmosfer.',
            card14Name: 'Firuze',
            card14Description: 'Zərif Azərbaycan və beynəlxalq mətbəx ilə zərif yemək təcrübəsi.',
            card15Name: 'Sahil',
            card15Description: 'Təzə dəniz məhsulları və ənənəvi Xəzər yeməkləri təqdim edən sahil restoranı.',
            card16Name: 'Qala',
            card16Description: 'Köhnə Şəhərin mərkəzində həqiqi reseptlərlə ənənəvi Azərbaycan restoranı.',
            card17Name: 'Mugham Club',
            card17Description: 'Canlı muğam ifaları və incə Azərbaycan mətbəxi ilə yüksək keyfiyyətli yemək.',
            card18Name: 'Naxçıvan Restoranı',
            card18Description: 'Naxçıvandan unikal dadlar və ənənəvi bişirmə üsulları ilə regional yeməklər.',
            card19Name: 'Bakı Sarayı',
            card19Description: 'Zəngin mühitdə kral Azərbaycan mətbəxi təqdim edən lüks restoran.',
            card20Name: 'Köhnə Bakı',
            card20Description: 'Klassik Azərbaycan rahat yeməkləri ilə tarixi mühitdə cazibədar restoran.',
            card21Name: 'Qafqaz',
            card21Description: 'Ənənəvi Azərbaycan və regional xüsusi yeməkləri ilə Qafqaz mətbəxi restoranı.',
            card22Name: 'Şah',
            card22Description: 'Kral yeməkləri və zərif təqdimat ilə premium Azərbaycan restoranı.',
            card23Name: 'Art Club',
            card23Description: 'Azərbaycan mətbəxini müasir incəsənət və dizaynla birləşdirən müasir restoran.',
            card24Name: 'Şirvanşah',
            card24Description: 'Şirvanşahların adını daşıyan tarixi restoran, həqiqi Azərbaycan irsi mətbəxi təqdim edir.',
            card25Name: 'Şirvan',
            card25Description: 'Şirvan regionunun unikal mətbəx ənənələri ilə məşğul olan ənənəvi restoran.',
            card26Name: 'Azərbaycan Evi',
            card26Description: 'Ailə reseptləri və isti qonaqpərvərlik ilə ev üslubunda Azərbaycan yeməkləri.'
        },
        en: {
            pageTitle: 'Explore All Restaurants',
            restaurantsHeaderTitle: 'Explore All Restaurants',
            restaurantsHeaderSubtitle: 'Discover the city’s best dining spots curated just for you.',
            detailsButton: 'View details',
            card1Name: 'City Bistro',
            card1Description: 'A contemporary dining room featuring seasonal menus and craft cocktails.',
            card2Name: 'Blue Wave Seafood',
            card2Description: 'Fresh coastal-inspired plates served in a breezy, nautically designed space.',
            card3Name: 'Ember Grill',
            card3Description: 'Wood-fired steaks and a curated wine list in an intimate ambience.',
            card4Name: 'Garden Terrace',
            card4Description: 'Farm-to-table cuisine surrounded by lush greenery and natural light.',
            card5Name: 'Sweet Hours Pâtisserie',
            card5Description: 'French-inspired desserts, artisan coffee, and a cozy lounge atmosphere.',
            card6Name: 'North Avenue Sushi',
            card6Description: 'Minimalist sushi bar known for its omakase experience and fresh catches.',
            card7Name: 'Şirvansah',
            card7Description: 'Traditional Azerbaijani cuisine in an elegant setting with authentic local flavors.',
            card8Name: 'Sumakh',
            card8Description: 'Modern Azerbaijani restaurant offering innovative takes on classic dishes.',
            card9Name: 'Chinar',
            card9Description: 'Cozy restaurant serving traditional plov, kebabs, and Azerbaijani specialties.',
            card10Name: 'Nargiz',
            card10Description: 'Family-friendly restaurant known for its delicious dolma and qutab.',
            card11Name: 'Mangal Steak House',
            card11Description: 'Premium steakhouse featuring grilled meats and Azerbaijani barbecue specialties.',
            card12Name: 'Dolma House',
            card12Description: 'Specializing in traditional dolma, kababs, and authentic Azerbaijani home cooking.',
            card13Name: 'Karvansaray',
            card13Description: 'Historic atmosphere with traditional Azerbaijani cuisine and live music.',
            card14Name: 'Firuze',
            card14Description: 'Elegant dining experience with refined Azerbaijani and international cuisine.',
            card15Name: 'Sahil',
            card15Description: 'Seaside restaurant offering fresh seafood and traditional Caspian dishes.',
            card16Name: 'Qala',
            card16Description: 'Traditional Azerbaijani restaurant in the heart of Old City with authentic recipes.',
            card17Name: 'Mugham Club',
            card17Description: 'Fine dining with live mugham performances and exquisite Azerbaijani cuisine.',
            card18Name: 'Nakhchivan Restaurant',
            card18Description: 'Regional specialties from Nakhchivan with unique flavors and traditional cooking methods.',
            card19Name: 'Baku Palace',
            card19Description: 'Luxurious restaurant serving royal Azerbaijani cuisine in an opulent setting.',
            card20Name: 'Old Baku',
            card20Description: 'Charming restaurant in historic setting featuring classic Azerbaijani comfort food.',
            card21Name: 'Qafqaz',
            card21Description: 'Caucasian cuisine restaurant with traditional Azerbaijani and regional specialties.',
            card22Name: 'Şah',
            card22Description: 'Premium Azerbaijani restaurant with royal dishes and elegant presentation.',
            card23Name: 'Art Club',
            card23Description: 'Modern restaurant combining Azerbaijani cuisine with contemporary art and design.',
            card24Name: 'Şirvanşah',
            card24Description: 'Historic restaurant named after the Shirvanshahs, serving authentic Azerbaijani heritage cuisine.',
            card25Name: 'Şirvan',
            card25Description: 'Traditional restaurant specializing in Shirvan region\'s unique culinary traditions.',
            card26Name: 'Azərbaycan Evi',
            card26Description: 'Home-style Azerbaijani cooking with family recipes and warm hospitality.'
        }
    };

    const STORAGE_KEY = 'foodielocalDil';
    let currentLanguage = localStorage.getItem(STORAGE_KEY) || 'az';

    const applyTranslations = (lang) => {
        const dictionary = translations[lang];
        if (!dictionary) {
            return;
        }

        document.documentElement.lang = lang;
        localStorage.setItem(STORAGE_KEY, lang);

        if (dictionary.pageTitle) {
            document.title = dictionary.pageTitle;
        }

        translatable.forEach(element => {
            const key = element.dataset.i18n;
            if (!key || typeof dictionary[key] === 'undefined') {
                return;
            }
            element.textContent = dictionary[key];
        });

        document.querySelectorAll('.lang-button').forEach(button => {
            const isActive = button.dataset.lang === lang;
            button.classList.toggle('active', isActive);
        });
    };

    const observeCards = () => {
        const cards = document.querySelectorAll('.restaurant-card');
        if (!('IntersectionObserver' in window) || cards.length === 0) {
            cards.forEach(card => card.classList.add('visible'));
            return;
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {threshold: 0.15});

        cards.forEach(card => observer.observe(card));
    };

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selected = button.dataset.lang || button.dataset.dil;
            if (!selected || selected === currentLanguage) {
                return;
            }
            currentLanguage = selected;
            applyTranslations(selected);
        });
    });

    applyTranslations(currentLanguage);
    observeCards();

    // Navigate to restaurant detail page when "Detallar" button is clicked
    document.querySelectorAll('.details-button[data-restaurant-id]').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-restaurant-id');
            if (!id) return;
            window.location.href = `/restaurants/${id}`;
        });
    });
});

