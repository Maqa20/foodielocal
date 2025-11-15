// Dil dəyişdirmə və yumşaq scroll funksionallığını idarə edən skript
document.addEventListener('DOMContentLoaded', function () {
    // Tərcümə lüğəti
    const tercumeSozluk = {
        az: {
            navHome: 'Əsas',
            navRestaurants: 'Restoranlar',
            navLogin: 'Daxil ol',
            navRegister: 'Qeydiyyat',
            navLanguage: 'Dil',
            heroBadge: 'Hər məhəllədə dad',
            heroTitle: 'Yerli dadları kəşf et',
            heroSubtitle: 'Şəhərindəki ən yaxşı restoranları tap və rəyini paylaş',
            heroCTA: 'Dadlı ünvanları kəşf et',
            heroSecondary: 'Rəy yazmağa başla',
            heroCardBasliq: 'Bu günün məkanları',
            heroCardItem1: 'İsti qəhvəyi kafe',
            heroCardItem2: 'Şəhər mənzərəli restoran',
            heroCardItem3: 'Ailəvi ev yeməkləri',
            restoranlarBasliq: 'Seçilmiş restoranlar',
            restoranlarAciqlama: 'Qastronomiyanı premium təcrübə kimi təqdim edən, icmamızın sevimli məkanlarını kəşf edin.',
            restoranlarHamisi: 'Bütün məkanlara bax',
            kafe1Basliq: 'Zərif Şəhər Bistrosu',
            kafe1Aciqlama: 'Panorama mənzərə, müəllif kokteylləri və sezona uyğun menyu ilə xüsusi axşamlar.',
            kafe2Basliq: 'Mavi Dalğa Dəniz Mətbəxi',
            kafe2Aciqlama: 'Şef tərəfindən seçilən dəniz məhsulları və sommelier uyğunlaşdırması ilə premium dadlar.',
            kafe3Basliq: 'Odlu Qril Evi',
            kafe3Aciqlama: 'Quru yetişdirilmiş ət kəsimləri, imza sousları və xüsusi seçilmiş canlı musiqi gecələri.',
            kafe4Basliq: 'Şirin Saatlar Pastanesi',
            kafe4Aciqlama: 'Fransız desertləri, artizan şokoladlar və xüsusi qarışıq qəhvələr ilə incə zövqlər.',
            kafeDetallar: 'Detallara bax',
            footerMotto: 'FoodieLocal – yerli dadları birlikdə kəşf edək.',
            footerCopyright: '© 2025 FoodieLocal. Bütün hüquqlar qorunur.'
        },
        en: {
            navHome: 'Home',
            navRestaurants: 'Restaurants',
            navLogin: 'Login',
            navRegister: 'Register',
            navLanguage: 'Language',
            heroBadge: 'Flavor in every neighborhood',
            heroTitle: 'Discover Local Flavors',
            heroSubtitle: 'Find and review the best restaurants in your city',
            heroCTA: 'Explore top spots',
            heroSecondary: 'Start sharing reviews',
            heroCardBasliq: 'Today’s picks',
            heroCardItem1: 'Warm coffee lounge',
            heroCardItem2: 'Skyline dining room',
            heroCardItem3: 'Family-style kitchen',
            restoranlarBasliq: 'Featured restaurants',
            restoranlarAciqlama: 'Explore community favorites delivering gastronomy as a premium experience.',
            restoranlarHamisi: 'View all venues',
            kafe1Basliq: 'Elegant City Bistro',
            kafe1Aciqlama: 'Panoramic views, signature cocktails, and seasonal menus for special evenings.',
            kafe2Basliq: 'Blue Wave Seafood',
            kafe2Aciqlama: 'Chef-curated seafood selections paired with sommelier recommendations.',
            kafe3Basliq: 'Ember Grill House',
            kafe3Aciqlama: 'Dry-aged cuts, house sauces, and live music nights tailored for connoisseurs.',
            kafe4Basliq: 'Sweet Hours Pâtisserie',
            kafe4Aciqlama: 'French desserts, artisan chocolates, and bespoke coffee blends for refined tastes.',
            kafeDetallar: 'View Details',
            footerMotto: 'FoodieLocal – let’s discover local flavors together.',
            footerCopyright: '© 2025 FoodieLocal. All rights reserved.'
        }
    };

    const dilDugmeleri = document.querySelectorAll('.dil-secimi');
    const tercumeliElementler = document.querySelectorAll('[data-i18n]');

    // Dil tətbiqi funksiyası
    const diliAktivEt = function (dilKodu) {
        const tercumeler = tercumeSozluk[dilKodu];
        if (!tercumeler) {
            return;
        }

        tercumeliElementler.forEach(function (element) {
            const acar = element.getAttribute('data-i18n');
            if (acar && tercumeler[acar]) {
                element.textContent = tercumeler[acar];
            }
        });

        document.documentElement.setAttribute('lang', dilKodu);
        localStorage.setItem('foodielocalDil', dilKodu);
    };

    // Dil düymələri üçün dinləyici
    dilDugmeleri.forEach(function (button) {
        button.addEventListener('click', function () {
            const secilenDil = button.getAttribute('data-dil');
            diliAktivEt(secilenDil);
        });
    });

    // Saxlanılan və ya ilkin dili təyin et
    const saxlanilanDil = localStorage.getItem('foodielocalDil') || 'en';
    diliAktivEt(saxlanilanDil);

    // Daxili bağlantılar üçün yumşaq scroll effekti
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (event) {
            const hedefId = link.getAttribute('href');
            if (!hedefId || hedefId.length === 1) {
                return;
            }

            const hedefElement = document.querySelector(hedefId);
            if (!hedefElement) {
                return;
            }

            event.preventDefault();
            hedefElement.scrollIntoView({behavior: 'smooth', block: 'start'});
            history.replaceState(null, '', hedefId);
        });
    });
});

