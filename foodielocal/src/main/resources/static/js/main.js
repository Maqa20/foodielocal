// Dil dəyişdirmə və yumşaq scroll funksionallığını idarə edən skript
document.addEventListener('DOMContentLoaded', function () {
    // Tərcümə lüğəti
    const tercumeSozluk = {
        az: {
            navHome: 'Əsas',
            navRestaurants: 'Restoranlar',
            navReservation: 'Rezervasiya',
            navReviews: 'Rəylər',
            navLanguage: 'Dil',
            navLogin: 'Daxil ol',
            navRegister: 'Qeydiyyat',
            navLogout: 'Çıxış',
            heroBadge: 'Hər məhəllədə dad',
            heroTitle: 'Yerli dadları kəşf et',
            heroSubtitle: 'Şəhərdəki ən yaxşı restoranları kəşf et və ya rəyini paylaş',
            heroCTA: 'Dadlı ünvanları kəşf et',
            heroSecondary: 'Rəy yazmağa başla',
            heroCardBasliq: 'Bu günün məkanları',
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
            detailsButton: 'Detallar',
            // FoodieLocal Haqqında
            aboutTitle: 'FoodieLocal Haqqında',
            aboutSubtitle: 'Yerli restoranları kəşf edin və dadlı təcrübələr yaşayın',
            aboutContactTitle: 'Əlaqə Məlumatları',
            aboutEmailLabel: 'Email:',
            aboutPhoneLabel: 'Telefon:',
            aboutRestaurantOwnerTitle: 'Restoran Sahibləri Üçün',
            aboutRestaurantOwnerText: 'Restoranınızı FoodieLocal platformasına əlavə etmək istəyirsiniz? Bizimlə əlaqə saxlayın!',
            aboutAddRestaurant: 'Restoran əlavə etmək',
            aboutAddMenu: 'Menyu əlavə etmək',
            aboutManageReservations: 'Rezervasiyaları idarə etmək',
            aboutContactButton: 'Bizimlə Əlaqə',
            aboutWhatsAppLabel: 'WhatsApp:',
            aboutSocialMediaTitle: 'Sosial Media'
        },
        en: {
            navHome: 'Home',
            navRestaurants: 'Restaurants',
            navReservation: 'Reservation',
            navReviews: 'Reviews',
            navLanguage: 'Language',
            navLogin: 'Login',
            navRegister: 'Register',
            navLogout: 'Logout',
            heroBadge: 'Flavor in every neighborhood',
            heroTitle: 'Discover Local Flavors',
            heroSubtitle: 'Discover the best restaurants in the city or share your review',
            heroCTA: 'Explore top spots',
            heroSecondary: 'Start sharing reviews',
            heroCardBasliq: 'Today’s picks',
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
            restaurantsHeaderSubtitle: 'Discover the city\'s best dining spots curated just for you.',
            detailsButton: 'View details',
            // About FoodieLocal
            aboutTitle: 'About FoodieLocal',
            aboutSubtitle: 'Discover local restaurants and enjoy delicious experiences',
            aboutContactTitle: 'Contact Information',
            aboutEmailLabel: 'Email:',
            aboutPhoneLabel: 'Phone:',
            aboutRestaurantOwnerTitle: 'For Restaurant Owners',
            aboutRestaurantOwnerText: 'Want to add your restaurant to FoodieLocal platform? Contact us!',
            aboutAddRestaurant: 'Add restaurant',
            aboutAddMenu: 'Add menu',
            aboutManageReservations: 'Manage reservations',
            aboutContactButton: 'Contact Us',
            aboutWhatsAppLabel: 'WhatsApp:',
            aboutSocialMediaTitle: 'Social Media'
        },
        ru: {
            navHome: 'Главная',
            navRestaurants: 'Рестораны',
            navReservation: 'Бронирование',
            navReviews: 'Отзывы',
            navLanguage: 'Язык',
            navLogin: 'Войти',
            navRegister: 'Регистрация',
            navLogout: 'Выйти',
            heroBadge: 'Вкус в каждом районе',
            heroTitle: 'Откройте местные вкусы',
            heroSubtitle: 'Откройте лучшие рестораны в городе или поделитесь своим отзывом',
            heroCTA: 'Исследуйте лучшие места',
            heroSecondary: 'Начните делиться отзывами',
            heroCardBasliq: 'Выбор на сегодня',
            restoranlarBasliq: 'Рекомендуемые рестораны',
            restoranlarAciqlama: 'Исследуйте любимые места сообщества, предлагающие гастрономию как премиальный опыт.',
            restoranlarHamisi: 'Посмотреть все заведения',
            kafe1Basliq: 'Элегантный городской бистро',
            kafe1Aciqlama: 'Панорамные виды, фирменные коктейли и сезонные меню для особенных вечеров.',
            kafe2Basliq: 'Морская кухня "Синяя волна"',
            kafe2Aciqlama: 'Морепродукты, отобранные шеф-поваром, в сочетании с рекомендациями сомелье.',
            kafe3Basliq: 'Дом гриля "Уголь"',
            kafe3Aciqlama: 'Выдержанные мясные нарезки, домашние соусы и вечера живой музыки для гурманов.',
            kafe4Basliq: 'Кондитерская "Сладкие часы"',
            kafe4Aciqlama: 'Французские десерты, шоколад ручной работы и кофейные смеси на заказ для изысканных вкусов.',
            kafeDetallar: 'Подробнее',
            reservationBadge: 'Частный ужин',
            reservationTitle: 'Забронируйте свой стол',
            reservationSubtitle: 'Насладитесь кураторским дегустационным меню, созданным для каждого празднования.',
            reservationFirstName: 'Имя',
            reservationLastName: 'Фамилия',
            reservationPhone: 'Номер телефона',
            reservationPhonePlaceholder: '+7 999 123 45 67',
            reservationDate: 'Дата',
            reservationTime: 'Время',
            reservationGuests: 'Количество гостей',
            reservationRequests: 'Особые пожелания / Аллергии',
            reservationRequestsPlaceholder: 'Укажите аллергии или особые пожелания',
            reservationButton: 'Отправить бронирование',
            footerMotto: 'FoodieLocal – давайте вместе открывать местные вкусы.',
            footerCopyright: '© 2025 FoodieLocal. Все права защищены.',
            // Restaurants page
            pageTitle: 'Исследуйте все рестораны',
            restaurantsHeaderTitle: 'Исследуйте все рестораны',
            restaurantsHeaderSubtitle: 'Откройте лучшие рестораны города, подобранные специально для вас.',
            detailsButton: 'Подробнее',
            // О FoodieLocal
            aboutTitle: 'О FoodieLocal',
            aboutSubtitle: 'Откройте местные рестораны и насладитесь вкусными впечатлениями',
            aboutContactTitle: 'Контактная информация',
            aboutEmailLabel: 'Email:',
            aboutPhoneLabel: 'Телефон:',
            aboutRestaurantOwnerTitle: 'Для владельцев ресторанов',
            aboutRestaurantOwnerText: 'Хотите добавить свой ресторан на платформу FoodieLocal? Свяжитесь с нами!',
            aboutAddRestaurant: 'Добавить ресторан',
            aboutAddMenu: 'Добавить меню',
            aboutManageReservations: 'Управлять бронированиями',
            aboutContactButton: 'Связаться с нами',
            aboutWhatsAppLabel: 'WhatsApp:',
            aboutSocialMediaTitle: 'Социальные сети'
        }
    };

    const dilDugmeleri = document.querySelectorAll('.dil-secimi');
    const tercumeliElementler = document.querySelectorAll('[data-i18n]');
    const placeholderElementler = document.querySelectorAll('[data-i18n-placeholder]');

    const applyActiveClass = (dilKodu) => {
        dilDugmeleri.forEach(btn => {
            btn.classList.remove('active');
            const code = btn.getAttribute('data-dil');
            if (code === dilKodu) {
                btn.classList.add('active');
            }
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
                // Əgər elementin span uşağı varsa (məsələn, navbar-də), span-i tərcümə et
                const span = element.querySelector('span');
                if (span) {
                    span.textContent = tercumeler[acar];
                } else if (element.children.length > 0) {
                    // Icon və ya digər uşaqlar varsa, yalnız mətn node-larını tərcümə et
                    let hasTextNode = false;
                    Array.from(element.childNodes).forEach(function(node) {
                        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
                            node.textContent = tercumeler[acar];
                            hasTextNode = true;
                        }
                    });
                    // Əgər mətn node yoxdursa, uşaqlardan sonra əlavə et
                    if (!hasTextNode && element.lastChild) {
                        const textNode = document.createTextNode(' ' + tercumeler[acar]);
                        element.appendChild(textNode);
                    }
                } else {
                    // Əks halda, elementin özünü tərcümə et
                    element.textContent = tercumeler[acar];
                }
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
    const saxlanilanDil = localStorage.getItem('foodielocalDil') || 'az';
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