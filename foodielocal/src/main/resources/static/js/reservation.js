document.addEventListener('DOMContentLoaded', function () {
    const translations = {
        az: {
            navHome: 'Əsas',
            navRestaurants: 'Restoranlar',
            navReservation: 'Rezervasiya',
            navReviews: 'Rəylər',
            navLanguage: 'Dil',
            reservationPageTitle: 'Rezervasiya – Masanızı indi sifariş edin',
            reservationBadge: 'Özəl masalar',
            reservationTitle: 'Masanızı reserv edin',
            reservationSubtitle: 'Mükəmməl qastronomik təcrübənizi saniyələr içində planlayın.',
            reservationPerk1: 'Şef tərəfindən hazırlanmış mövsümi menyular',
            reservationPerk2: 'Fərdiləşdirilmiş bayram paketləri',
            reservationPerk3: 'Prioritet konsyerj dəstəyi',
            reservationFirstNameLabel: 'Ad',
            reservationFirstNamePlaceholder: 'Adınızı daxil edin',
            reservationLastNameLabel: 'Soyad',
            reservationLastNamePlaceholder: 'Soyadınızı daxil edin',
            reservationEmailLabel: 'Email',
            reservationEmailPlaceholder: 'email@example.com',
            reservationPhoneLabel: 'Telefon',
            reservationPhonePlaceholder: '+994 50 123 45 67',
            reservationRestaurantLabel: 'Restoran seçimi',
            reservationRestaurantPlaceholder: 'Restoran seçin',
            reservationGuestCountLabel: 'Qonaq sayı',
            reservationGuestCountPlaceholder: '1-12',
            reservationDateLabel: 'Tarix',
            reservationTimeLabel: 'Saat',
            reservationSpecialRequestsLabel: 'Xüsusi istəklər',
            reservationSpecialRequestsPlaceholder: 'Xüsusi istəklərinizi buraya yazın (istəyə bağlı)',
            reservationSubmitButton: 'Rezervasiya et',
            reservationSuccess: 'Rezervasiyanız uğurla göndərildi!',
            reservationError: 'Zəhmət olmasa göndərmədən əvvəl bütün tələb olunan xanaları doldurun.',
            reservationFooterNote: 'Rezervasiyanızı təsdiqləmək üçün 24 saat ərzində əlaqə saxlayacağıq.',
            footerMotto: 'FoodieLocal – yerli dadları birlikdə kəşf edək.',
            footerCopyright: '© 2025 FoodieLocal. Bütün hüquqlar qorunur.'
        },
        en: {
            navHome: 'Home',
            navRestaurants: 'Restaurants',
            navReservation: 'Reservation',
            navReviews: 'Reviews',
            navLanguage: 'Language',
            reservationPageTitle: 'Reservation – Book Your Table Now',
            reservationBadge: 'Private dining',
            reservationTitle: 'Reserve Your Table',
            reservationSubtitle: 'Plan your perfect dining experience in seconds.',
            reservationPerk1: 'Chef-curated seasonal menus',
            reservationPerk2: 'Tailored celebration packages',
            reservationPerk3: 'Priority concierge support',
            reservationFirstNameLabel: 'First Name',
            reservationFirstNamePlaceholder: 'Enter your first name',
            reservationLastNameLabel: 'Last Name',
            reservationLastNamePlaceholder: 'Enter your last name',
            reservationEmailLabel: 'Email',
            reservationEmailPlaceholder: 'email@example.com',
            reservationPhoneLabel: 'Phone',
            reservationPhonePlaceholder: '+994 50 123 45 67',
            reservationRestaurantLabel: 'Select Restaurant',
            reservationRestaurantPlaceholder: 'Select a restaurant',
            reservationGuestCountLabel: 'Number of Guests',
            reservationGuestCountPlaceholder: '1-12',
            reservationDateLabel: 'Date',
            reservationTimeLabel: 'Time',
            reservationSpecialRequestsLabel: 'Special Requests',
            reservationSpecialRequestsPlaceholder: 'Enter any special requests (optional)',
            reservationSubmitButton: 'Book Reservation',
            reservationSuccess: 'Your reservation has been successfully submitted!',
            reservationError: 'Please fill in all required fields before submitting.',
            reservationFooterNote: 'We’ll contact you to confirm your reservation within 24 hours.',
            footerMotto: 'FoodieLocal – let’s discover local flavors together.',
            footerCopyright: '© 2025 FoodieLocal. All rights reserved.'
        }
    };

    const languageButtons = document.querySelectorAll('.dil-secimi');
    const translatableElements = document.querySelectorAll('[data-i18n]');
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');

    const applyLanguage = function (code) {
        const locale = translations[code];
        if (!locale) {
            return;
        }

        translatableElements.forEach(function (element) {
            const key = element.getAttribute('data-i18n');
            if (key && locale[key]) {
                element.textContent = locale[key];
            }
        });

        // Select option-larını tərcümə et
        const restaurantSelect = document.querySelector('#restaurantChoice');
        if (restaurantSelect) {
            const placeholderOption = restaurantSelect.querySelector('option[data-i18n]');
            if (placeholderOption) {
                const key = placeholderOption.getAttribute('data-i18n');
                if (key && locale[key]) {
                    placeholderOption.textContent = locale[key];
                }
            }
        }

        placeholderElements.forEach(function (element) {
            const key = element.getAttribute('data-i18n-placeholder');
            if (key && locale[key]) {
                element.setAttribute('placeholder', locale[key]);
            }
        });

        const titleElement = document.querySelector('title[data-i18n]');
        if (titleElement && locale[titleElement.getAttribute('data-i18n')]) {
            titleElement.textContent = locale[titleElement.getAttribute('data-i18n')];
        }

        document.documentElement.setAttribute('lang', code);
        localStorage.setItem('foodielocalDil', code);
    };

    languageButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const selected = button.getAttribute('data-dil');
            applyLanguage(selected);
        });
    });

    const savedLanguage = localStorage.getItem('foodielocalDil') || 'en';
    applyLanguage(savedLanguage);

    const form = document.querySelector('.reservation-form');
    const successAlert = document.querySelector('[data-role="reservation-success"]');
    const errorAlert = document.querySelector('[data-role="reservation-error"]');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const requiredFields = [
                'firstName', 'lastName', 'emailAddress',
                'phoneNumber', 'restaurantChoice',
                'guestCount', 'reservationDate', 'reservationTime'
            ];

            const isValid = requiredFields.every(function (id) {
                const input = document.getElementById(id);
                return input && input.value.trim() !== '';
            });

            if (!isValid) {
                if (errorAlert) errorAlert.classList.remove('d-none');
                if (successAlert) successAlert.classList.add('d-none');
                return;
            }

            // Əgər hər şey düzgünsə → formu göndər
            form.submit();
        });
    }
});

