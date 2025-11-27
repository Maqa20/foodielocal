// Dil dəyişdirmə və yumşaq scroll funksionallığını idarə edən skript
document.addEventListener('DOMContentLoaded', function () {
    // Tərcümə lüğəti
    const tercumeSozluk = {
        az: {
            navHome: 'Əsas',
            navRestaurants: 'Restoranlar',
            navReservation: 'Rezervasiya',
            navReviews: 'Rəylər',
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
            reservationBadge: 'Özəl masalar',
            reservationTitle: 'Masanızı reserv edin',
            reservationSubtitle: 'Hər zəfər üçün düşünülmüş dequstasiya menyusunu indi sifariş edin.',
            reservationFirstName: 'Ad',
            reservationLastName: 'Soyad',
            reservationPhone: 'Telefon nömrəsi',
            reservationPhonePlaceholder: '+994 50 123 45 67',
            reservationDate: 'Tarix',
            reservationTime: 'Saat',
            reservationGuests: 'Qonaq sayı',
            reservationRequests: 'Xüsusi istəklər / Allergiyalar',
            reservationRequestsPlaceholder: 'Allergiyalarınızı və istəklərinizi qeyd edin',
            reservationButton: 'Rezervasiyanı göndər',
            footerMotto: 'FoodieLocal – yerli dadları birlikdə kəşf edək.',
            footerCopyright: '© 2025 FoodieLocal. Bütün hüquqlar qorunur.',
            // Restoranlar səhifəsi
            pageTitle: 'Bütün Restoranları Kəşf et',
            restaurantsHeaderTitle: 'Bütün Restoranları Kəşf edin',
            restaurantsHeaderSubtitle: 'Sizin üçün seçilmiş şəhərin ən yaxşı restoranlarını tapın.',
            detailsButton: 'Detallar'
        },
        en: {
            navHome: 'Home',
            navRestaurants: 'Restaurants',
            navReservation: 'Reservation',
            navReviews: 'Reviews',
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
            reservationBadge: 'Private dining',
            reservationTitle: 'Reserve your table',
            reservationSubtitle: 'Indulge in a curated tasting menu tailored to every celebration.',
            reservationFirstName: 'First Name',
            reservationLastName: 'Last Name',
            reservationPhone: 'Phone Number',
            reservationPhonePlaceholder: '+1 555 123 4567',
            reservationDate: 'Date',
            reservationTime: 'Time',
            reservationGuests: 'Number of Guests',
            reservationRequests: 'Special Requests / Allergies',
            reservationRequestsPlaceholder: 'Share allergies or bespoke touches',
            reservationButton: 'Submit Reservation',
            footerMotto: 'FoodieLocal – let\'s discover local flavors together.',
            footerCopyright: '© 2025 FoodieLocal. All rights reserved.',
            // Restaurants page
            pageTitle: 'Explore All Restaurants',
            restaurantsHeaderTitle: 'Explore All Restaurants',
            restaurantsHeaderSubtitle: 'Discover the city’s best dining spots curated just for you.',
            detailsButton: 'View details'
        }
    };

    const dilDugmeleri = document.querySelectorAll('.dil-secimi');
    const tercumeliElementler = document.querySelectorAll('[data-i18n]');
    const placeholderElementler = document.querySelectorAll('[data-i18n-placeholder]');

    const applyActiveClass = (dilKodu) => {
        dilDugmeleri.forEach(btn => {
            const code = btn.getAttribute('data-dil');
            btn.classList.toggle('active', code === dilKodu);
        });
    };

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

        placeholderElementler.forEach(function (element) {
            const acar = element.getAttribute('data-i18n-placeholder');
            if (acar && tercumeler[acar]) {
                element.setAttribute('placeholder', tercumeler[acar]);
            }
        });

        document.documentElement.setAttribute('lang', dilKodu);
        localStorage.setItem('foodielocalDil', dilKodu);
        applyActiveClass(dilKodu);
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
