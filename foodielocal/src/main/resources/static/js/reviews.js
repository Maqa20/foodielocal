document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        az: {
            navHome: 'Əsas',
            navRestaurants: 'Restoranlar',
            navReservation: 'Rezervasiya',
            navReviews: 'Rəylər',
            navLanguage: 'Dil',
            reviewsPageTitle: 'Rəylər – Təcrübənizi bölüşün',
            reviewsBadge: 'Cəmiyyət səsi',
            reviewsHeroTitle: 'Yemək təcrübənizi bölüşün',
            reviewsHeroSubtitle: 'Gizli məkanları tövsiyə edin, unudulmaz anları qeyd edin və digər dad həvəskarlarına yol göstərin.',
            reviewsPerk1: 'Minlərlə yerli foodie-yə ilham verin',
            reviewsPerk2: 'Əla servis və dadları vurğulayın',
            reviewsPerk3: 'Layiq olan restoranlara dəstək olun',
            reviewsFirstNameLabel: 'Adınız',
            reviewsFirstNamePlaceholder: 'Adınızı daxil edin',
            reviewsLastNameLabel: 'Soyadınız',
            reviewsLastNamePlaceholder: 'Soyadınızı daxil edin',
            reviewRestaurantLabel: 'Restoran adı',
            reviewRestaurantPlaceholder: 'Restoran seçin',
            reviewRatingLabel: 'Reyting',
            reviewRatingPlaceholder: 'Reyting seçin',
            reviewCommentLabel: 'Rəyiniz',
            reviewCommentPlaceholder: 'Təcrübənizi paylaşın...',
            reviewButton: 'Rəyi göndər',
            reviewSuccess: 'Rəyiniz uğurla göndərildi!',
            reviewError: 'Zəhmət olmasa bütün xanaları doldurun.',
            reviewsFooterNote: 'Seçilmiş hekayələri həftəlik bülletenimizdə bölüşürük – töhfənizə görə təşəkkürlər!',
            footerMotto: 'FoodieLocal – yerli dadları birlikdə kəşf edək.',
            footerCopyright: '© 2025 FoodieLocal. Bütün hüquqlar qorunur.'
        },
        en: {
            navHome: 'Home',
            navRestaurants: 'Restaurants',
            navReservation: 'Reservation',
            navReviews: 'Reviews',
            navLanguage: 'Language',
            reviewsPageTitle: 'Reviews – Share Your Experience',
            reviewsBadge: 'Community voices',
            reviewsHeroTitle: 'Share Your Dining Story',
            reviewsHeroSubtitle: 'Recommend hidden gems, celebrate unforgettable moments, and guide fellow food lovers.',
            reviewsPerk1: 'Inspire thousands of local foodies',
            reviewsPerk2: 'Highlight standout service & flavors',
            reviewsPerk3: 'Support restaurants that deserve the spotlight',
            reviewsFirstNameLabel: 'First Name',
            reviewsFirstNamePlaceholder: 'Enter your first name',
            reviewsLastNameLabel: 'Last Name',
            reviewsLastNamePlaceholder: 'Enter your last name',
            reviewRestaurantLabel: 'Restaurant Name',
            reviewRestaurantPlaceholder: 'Select a restaurant',
            reviewRatingLabel: 'Rating',
            reviewRatingPlaceholder: 'Select rating',
            reviewCommentLabel: 'Your Review',
            reviewCommentPlaceholder: 'Share your experience, thoughts, and recommendations...',
            reviewButton: 'Submit Review',
            reviewSuccess: 'Your review has been submitted successfully!',
            reviewError: 'Please fill in all required fields before submitting.',
            reviewsFooterNote: 'We spotlight standout stories in our weekly newsletter—thanks for contributing!',
            footerMotto: 'FoodieLocal – let\'s discover local flavors together.',
            footerCopyright: '© 2025 FoodieLocal. All rights reserved.'
        },
        ru: {
            navHome: 'Главная',
            navRestaurants: 'Рестораны',
            navReservation: 'Бронирование',
            navReviews: 'Отзывы',
            navLanguage: 'Язык',
            reviewsPageTitle: 'Отзывы – Поделитесь своим опытом',
            reviewsBadge: 'Голос сообщества',
            reviewsHeroTitle: 'Поделитесь своей историей',
            reviewsHeroSubtitle: 'Рекомендуйте скрытые жемчужины, делитесь незабываемыми моментами и направляйте других любителей еды.',
            reviewsPerk1: 'Вдохновляйте тысячи местных гурманов',
            reviewsPerk2: 'Выделяйте выдающийся сервис и вкусы',
            reviewsPerk3: 'Поддерживайте рестораны, заслуживающие внимания',
            reviewsFirstNameLabel: 'Имя',
            reviewsFirstNamePlaceholder: 'Введите ваше имя',
            reviewsLastNameLabel: 'Фамилия',
            reviewsLastNamePlaceholder: 'Введите вашу фамилию',
            reviewRestaurantLabel: 'Название ресторана',
            reviewRestaurantPlaceholder: 'Выберите ресторан',
            reviewRatingLabel: 'Рейтинг',
            reviewRatingPlaceholder: 'Выберите рейтинг',
            reviewCommentLabel: 'Ваш отзыв',
            reviewCommentPlaceholder: 'Поделитесь своим опытом, мыслями и рекомендациями...',
            reviewButton: 'Отправить отзыв',
            reviewSuccess: 'Ваш отзыв успешно отправлен!',
            reviewError: 'Пожалуйста, заполните все обязательные поля перед отправкой.',
            reviewsFooterNote: 'Мы выделяем выдающиеся истории в нашем еженедельном информационном бюллетене — спасибо за вклад!',
            footerMotto: 'FoodieLocal – давайте вместе открывать местные вкусы.',
            footerCopyright: '© 2025 FoodieLocal. Все права защищены.'
        }
    };

    const elements = {
        languageButtons: document.querySelectorAll('.dil-secimi'),
        translatables: document.querySelectorAll('[data-i18n]'),
        placeholders: document.querySelectorAll('[data-i18n-placeholder]'),
        pageTitle: document.querySelector('title[data-i18n]'),
        form: document.querySelector('.reviews-form'),
        successAlert: document.querySelector('[data-role="review-success"]'),
        errorAlert: document.querySelector('[data-role="review-error"]'),
        fields: {
            firstName: document.querySelector('#reviewerFirstName'),
            lastName: document.querySelector('#reviewerLastName'),
            restaurant: document.querySelector('#reviewRestaurantId'),
            rating: document.querySelector('#reviewRating'),
            comment: document.querySelector('#reviewComment')
        }
    };

    const state = {
        language: localStorage.getItem('foodielocalDil') || 'en'
    };

    const getLocale = () => translations[state.language] || translations.en;

    const applyTranslations = () => {
        const locale = getLocale();
        elements.translatables.forEach((node) => {
            const key = node.getAttribute('data-i18n');
            if (key && locale[key]) {
                node.textContent = locale[key];
            }
        });
        elements.placeholders.forEach((node) => {
            const key = node.getAttribute('data-i18n-placeholder');
            if (key && locale[key]) {
                node.setAttribute('placeholder', locale[key]);
            }
        });
        if (elements.pageTitle) {
            const titleKey = elements.pageTitle.getAttribute('data-i18n');
            if (titleKey && locale[titleKey]) {
                elements.pageTitle.textContent = locale[titleKey];
            }
        }
    };

    const setLanguage = (code) => {
        if (!translations[code]) {
            return;
        }
        state.language = code;
        document.documentElement.setAttribute('lang', code);
        localStorage.setItem('foodielocalDil', code);

        // Update active button state
        elements.languageButtons.forEach((btn) => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-dil') === code) {
                btn.classList.add('active');
            }
        });

        applyTranslations();
    };

    const initLanguageSwitcher = () => {
        elements.languageButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const selected = button.getAttribute('data-dil');
                if (selected && selected !== state.language) {
                    setLanguage(selected);
                }
            });
        });
        setLanguage(state.language);
    };

    const toggleAlert = (node, visible) => {
        if (!node) {
            return;
        }
        node.classList.toggle('d-none', !visible);
    };

    const handleSubmit = (event) => {
        if (!elements.form) {
            return;
        }

        const requiredFields = [
            elements.fields.firstName,
            elements.fields.lastName,
            elements.fields.restaurant,
            elements.fields.rating,
            elements.fields.comment
        ];

        const isValid = requiredFields.every((field) => field && field.value.trim() !== '');

        if (!isValid) {
            event.preventDefault();
            toggleAlert(elements.errorAlert, true);
            toggleAlert(elements.successAlert, false);
            return;
        }

        toggleAlert(elements.errorAlert, false);
        toggleAlert(elements.successAlert, true);
    };

    const initForm = () => {
        if (!elements.form) {
            return;
        }
        elements.form.addEventListener('submit', handleSubmit);
    };

    initLanguageSwitcher();
    initForm();
});

