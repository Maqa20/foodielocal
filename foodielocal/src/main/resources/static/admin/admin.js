/**
 * Admin Panel JavaScript
 * MVC/Thymeleaf based - No API calls, uses form submissions
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Admin panel script loaded');

    // ==================== Translation Management ====================

    const translations = {
        az: {
            adminTitle: 'Admin Panel - FoodieLocal',
            adminBrand: 'FoodieLocal Admin',
            navHome: 'Əsas',
            navLogout: 'Çıxış',
            adminHeroBadge: 'Admin Panel',
            adminHeroTitle: 'İdarəetmə Paneli',
            adminHeroSubtitle: 'İstifadəçiləri, rolları, restoranları və rezervasiyaları bir mərkəzdən idarə edin',
            tabUsers: 'İstifadəçilər',
            tabRoles: 'Rollar',
            tabRestaurants: 'Restoranlar',
            tabMenus: 'Menyular',
            tabReservations: 'Rezervasiyalar',
            tabReviews: 'Rəylər',
            usersTitle: 'İstifadəçilərin İdarəetməsi',
            rolesTitle: 'Rolların İdarəetməsi',
            restaurantsTitle: 'Restoranların İdarəetməsi',
            menusTitle: 'Menyu İdarəetməsi',
            reservationsTitle: 'Rezervasiyaların İdarəetməsi',
            reviewsTitle: 'Rəylərin İdarəetməsi',
            btnAdd: 'Əlavə et',
            btnEdit: 'Redaktə et',
            btnDelete: 'Sil',
            btnApprove: 'Təsdiqlə',
            btnReject: 'Rədd et',
            btnSave: 'Yadda saxla',
            btnCancel: 'Ləğv et',
            // Table headers
            tableId: 'ID',
            tableName: 'Ad',
            tableEmail: 'E-poçt',
            tableRole: 'Rol',
            tableStatus: 'Status',
            tableActions: 'Əməliyyatlar',
            tableRoleName: 'Rol Adı',
            tableDescription: 'Təsvir',
            tableImage: 'Şəkil',
            tableLocation: 'Ünvan',
            tableRating: 'Reytinq',
            tableRestaurant: 'Restoran',
            tableMenuName: 'Menyu Adı',
            tablePrice: 'Qiymət',
            tableCategory: 'Kateqoriya',
            tableCustomer: 'Müştəri',
            tableDate: 'Tarix',
            tableTime: 'Saat',
            tableGuests: 'Qonaq sayı',
            tableReviewer: 'Rəy bildirən',
            tableComment: 'Şərh',
            reservationStatusPending: 'Gözləyir',
            reservationStatusApproved: 'Təsdiqlənib',
            reservationStatusRejected: 'Rədd edilib',
            modalAddUser: 'Yeni İstifadəçi Əlavə et',
            modalEditUser: 'İstifadəçini Redaktə et',
            modalAddRole: 'Yeni Rol Əlavə et',
            modalEditRole: 'Rolu Redaktə et',
            modalAddRestaurant: 'Yeni Restoran Əlavə et',
            modalEditRestaurant: 'Restoranı Redaktə et',
            modalAddReservation: 'Yeni Rezervasiya Əlavə et',
            modalEditReservation: 'Rezervasiyanı Redaktə et',
            modalAddReview: 'Yeni Rəy Əlavə et',
            modalEditReview: 'Rəyi Redaktə et',
            modalDeleteConfirm: 'Silməni Təsdiq Et',
            formName: 'Ad',
            formEmail: 'E-poçt',
            formPassword: 'Şifrə',
            formRole: 'Rol',
            formRoleName: 'Rol Adı',
            formDescription: 'Təsvir',
            formLocation: 'Ünvan',
            formImageUrl: 'Şəkil URL',
            formCustomer: 'Müştəri',
            formRestaurant: 'Restoran',
            formDate: 'Tarix',
            formTime: 'Saat',
            formGuests: 'Qonaq Sayı',
            formReviewerFirstName: 'Ad',
            formReviewerLastName: 'Soyad',
            formRating: 'Reytinq',
            formComment: 'Rəy',
            formActive: 'Status (Aktiv/Deaktiv)',
            deleteConfirm: 'Silmək istədiyinizə əminsiniz?',
            successMessage: 'Əməliyyat uğurla tamamlandı',
            errorMessage: 'Xəta baş verdi',
            noData: 'Məlumat yoxdur',
            formEnabled: 'Aktiv',
            selectRole: 'Rol seçin',
            passwordOptional: '(boş buraxsanız cari şifrə saxlanılacaq)',
            btnActivate: 'Aktivləşdir',
            btnDeactivate: 'Deaktivləşdir',
            selectRestaurant: 'Restoran seçin',
            selectRating: 'Reytinq seçin',
            formPriceRange: 'Qiymət Aralığı',
            selectPriceRange: 'Qiymət aralığı seçin',
            'priceRange10-30': '10-30 AZN',
            'priceRange30-50': '30-50 AZN',
            'priceRange50-80': '50-80 AZN',
            'priceRange80-120': '80-120 AZN',
            'priceRange120-200': '120-200 AZN',
            'priceRange200+': '200+ AZN',
            formCuisine: 'Mətbəx',
            formOpeningHours: 'İş Saatları',
            formPhone: 'Telefon',
            formMenuName: 'Menyu Adı',
            formMenuDescription: 'Təsvir',
            formMenuPrice: 'Qiymət (₼)',
            formMenuCategory: 'Kateqoriya',
            formIsPopular: 'Məşhur yemək',
            selectCategory: 'Kateqoriya seçin',
            categoryStarter: 'Qəlyanaltılar',
            categoryMain: 'Əsas yeməklər',
            categoryDessert: 'Şirniyyatlar',
            categoryDrink: 'İçkilər',
            modalAddMenu: 'Yeni Menyu Əlavə et',
            modalEditMenu: 'Menyunu Redaktə et'
        },
        en: {
            adminTitle: 'Admin Panel - FoodieLocal',
            adminBrand: 'FoodieLocal Admin',
            navHome: 'Home',
            navLogout: 'Logout',
            adminHeroBadge: 'Admin Panel',
            adminHeroTitle: 'Administration Dashboard',
            adminHeroSubtitle: 'Manage users, roles, restaurants, and reservations from one central location',
            tabUsers: 'Users',
            tabRoles: 'Roles',
            tabRestaurants: 'Restaurants',
            tabMenus: 'Menus',
            tabReservations: 'Reservations',
            tabReviews: 'Reviews',
            usersTitle: 'Users Management',
            rolesTitle: 'Roles Management',
            restaurantsTitle: 'Restaurants Management',
            menusTitle: 'Menus Management',
            reservationsTitle: 'Reservations Management',
            reviewsTitle: 'Reviews Management',
            btnAdd: 'Add',
            btnEdit: 'Edit',
            btnDelete: 'Delete',
            btnApprove: 'Approve',
            btnReject: 'Reject',
            btnSave: 'Save',
            btnCancel: 'Cancel',
            // Table headers
            tableId: 'ID',
            tableName: 'Name',
            tableEmail: 'Email',
            tableRole: 'Role',
            tableStatus: 'Status',
            tableActions: 'Actions',
            tableRoleName: 'Role Name',
            tableDescription: 'Description',
            tableImage: 'Image',
            tableLocation: 'Location',
            tableRating: 'Rating',
            tableRestaurant: 'Restaurant',
            tableMenuName: 'Menu Name',
            tablePrice: 'Price',
            tableCategory: 'Category',
            tableCustomer: 'Customer',
            tableDate: 'Date',
            tableTime: 'Time',
            tableGuests: 'Guests',
            tableReviewer: 'Reviewer',
            tableComment: 'Comment',
            reservationStatusPending: 'Pending',
            reservationStatusApproved: 'Approved',
            reservationStatusRejected: 'Rejected',
            modalAddUser: 'Add New User',
            modalEditUser: 'Edit User',
            modalAddRole: 'Add New Role',
            modalEditRole: 'Edit Role',
            modalAddRestaurant: 'Add New Restaurant',
            modalEditRestaurant: 'Edit Restaurant',
            modalAddReservation: 'Add New Reservation',
            modalEditReservation: 'Edit Reservation',
            modalAddReview: 'Add New Review',
            modalEditReview: 'Edit Review',
            modalDeleteConfirm: 'Confirm Delete',
            formName: 'Name',
            formEmail: 'Email',
            formPassword: 'Password',
            formRole: 'Role',
            formRoleName: 'Role Name',
            formDescription: 'Description',
            formLocation: 'Location',
            formImageUrl: 'Image URL',
            formCustomer: 'Customer',
            formRestaurant: 'Restaurant',
            formDate: 'Date',
            formTime: 'Time',
            formGuests: 'Number of Guests',
            formReviewerFirstName: 'First Name',
            formReviewerLastName: 'Last Name',
            formRating: 'Rating',
            formComment: 'Comment',
            formMenuName: 'Menu Name',
            formMenuDescription: 'Description',
            formMenuPrice: 'Price (₼)',
            formMenuCategory: 'Category',
            formActive: 'Status (Active/Inactive)',
            deleteConfirm: 'Are you sure you want to delete?',
            successMessage: 'Operation completed successfully',
            errorMessage: 'An error occurred',
            noData: 'No data available',
            formEnabled: 'Enabled',
            selectRole: 'Select Role',
            passwordOptional: '(leave blank to keep current password)',
            btnActivate: 'Activate',
            btnDeactivate: 'Deactivate',
            selectRestaurant: 'Select Restaurant',
            selectRating: 'Select Rating',
            formPriceRange: 'Price Range',
            selectPriceRange: 'Select Price Range',
            'priceRange10-30': '10-30 AZN',
            'priceRange30-50': '30-50 AZN',
            'priceRange50-80': '50-80 AZN',
            'priceRange80-120': '80-120 AZN',
            'priceRange120-200': '120-200 AZN',
            'priceRange200+': '200+ AZN',
            formCuisine: 'Cuisine',
            formOpeningHours: 'Opening Hours',
            formPhone: 'Phone',
            formMenuName: 'Menu Name',
            formMenuDescription: 'Description',
            formMenuPrice: 'Price (₼)',
            formMenuCategory: 'Category',
            formIsPopular: 'Popular dish',
            selectCategory: 'Select Category',
            categoryStarter: 'Starter',
            categoryMain: 'Main Dish',
            categoryDessert: 'Dessert',
            categoryDrink: 'Drink',
            modalAddMenu: 'Add New Menu',
            modalEditMenu: 'Edit Menu'
        },
        ru: {
            adminTitle: 'Панель администратора - FoodieLocal',
            adminBrand: 'FoodieLocal Админ',
            navHome: 'Главная',
            navLogout: 'Выйти',
            adminHeroBadge: 'Панель администратора',
            adminHeroTitle: 'Панель управления',
            adminHeroSubtitle: 'Управляйте пользователями, ролями, ресторанами и бронированиями из одного центра',
            tabUsers: 'Пользователи',
            tabRoles: 'Роли',
            tabRestaurants: 'Рестораны',
            tabMenus: 'Меню',
            tabReservations: 'Бронирования',
            tabReviews: 'Отзывы',
            usersTitle: 'Управление пользователями',
            rolesTitle: 'Управление ролями',
            restaurantsTitle: 'Управление ресторанами',
            menusTitle: 'Управление меню',
            reservationsTitle: 'Управление бронированиями',
            reviewsTitle: 'Управление отзывами',
            btnAdd: 'Добавить',
            btnEdit: 'Редактировать',
            btnDelete: 'Удалить',
            btnApprove: 'Подтвердить',
            btnReject: 'Отклонить',
            btnSave: 'Сохранить',
            btnCancel: 'Отмена',
            // Table headers
            tableId: 'ID',
            tableName: 'Имя',
            tableEmail: 'Email',
            tableRole: 'Роль',
            tableStatus: 'Статус',
            tableActions: 'Действия',
            tableRoleName: 'Название роли',
            tableDescription: 'Описание',
            tableImage: 'Изображение',
            tableLocation: 'Адрес',
            tableRating: 'Рейтинг',
            tableRestaurant: 'Ресторан',
            tableMenuName: 'Название меню',
            tablePrice: 'Цена',
            tableCategory: 'Категория',
            tableCustomer: 'Клиент',
            tableDate: 'Дата',
            tableTime: 'Время',
            tableGuests: 'Гостей',
            tableReviewer: 'Автор отзыва',
            tableComment: 'Комментарий',
            reservationStatusPending: 'Ожидает',
            reservationStatusApproved: 'Одобрено',
            reservationStatusRejected: 'Отклонено',
            modalAddUser: 'Добавить нового пользователя',
            modalEditUser: 'Редактировать пользователя',
            modalAddRole: 'Добавить новую роль',
            modalEditRole: 'Редактировать роль',
            modalAddRestaurant: 'Добавить новый ресторан',
            modalEditRestaurant: 'Редактировать ресторан',
            modalAddReservation: 'Добавить новое бронирование',
            modalEditReservation: 'Редактировать бронирование',
            modalAddReview: 'Добавить новый отзыв',
            modalEditReview: 'Редактировать отзыв',
            modalDeleteConfirm: 'Подтвердить удаление',
            formName: 'Имя',
            formEmail: 'Email',
            formPassword: 'Пароль',
            formRole: 'Роль',
            formRoleName: 'Название роли',
            formDescription: 'Описание',
            formLocation: 'Адрес',
            formImageUrl: 'URL изображения',
            formCustomer: 'Клиент',
            formRestaurant: 'Ресторан',
            formDate: 'Дата',
            formTime: 'Время',
            formGuests: 'Количество гостей',
            formReviewerFirstName: 'Имя',
            formReviewerLastName: 'Фамилия',
            formRating: 'Рейтинг',
            formComment: 'Отзыв',
            formMenuName: 'Название меню',
            formMenuDescription: 'Описание',
            formMenuPrice: 'Цена (₼)',
            formMenuCategory: 'Категория',
            formActive: 'Статус (Активен/Неактивен)',
            deleteConfirm: 'Вы уверены, что хотите удалить?',
            successMessage: 'Операция успешно завершена',
            errorMessage: 'Произошла ошибка',
            noData: 'Нет данных',
            formEnabled: 'Включено',
            selectRole: 'Выберите роль',
            passwordOptional: '(оставьте пустым, чтобы сохранить текущий пароль)',
            btnActivate: 'Активировать',
            btnDeactivate: 'Деактивировать',
            selectRestaurant: 'Выберите ресторан',
            selectRating: 'Выберите рейтинг',
            formPriceRange: 'Ценовой диапазон',
            selectPriceRange: 'Выберите ценовой диапазон',
            'priceRange10-30': '10-30 AZN',
            'priceRange30-50': '30-50 AZN',
            'priceRange50-80': '50-80 AZN',
            'priceRange80-120': '80-120 AZN',
            'priceRange120-200': '120-200 AZN',
            'priceRange200+': '200+ AZN',
            formCuisine: 'Кухня',
            formOpeningHours: 'Часы работы',
            formPhone: 'Телефон',
            formMenuName: 'Название меню',
            formMenuDescription: 'Описание',
            formMenuPrice: 'Цена (₼)',
            formMenuCategory: 'Категория',
            formIsPopular: 'Популярное блюдо',
            selectCategory: 'Выберите категорию',
            categoryStarter: 'Закуски',
            categoryMain: 'Основные блюда',
            categoryDessert: 'Десерты',
            categoryDrink: 'Напитки',
            modalAddMenu: 'Добавить меню',
            modalEditMenu: 'Редактировать меню'
        }
    };

    // Cache for dynamic content translations (menus etc.)
    if (!window.translationCache) {
        window.translationCache = {};
    }

    let currentLanguage = localStorage.getItem('foodielocalDil') || 'en';
    const languageButtons = document.querySelectorAll('.dil-secimi');
    const translatableElements = document.querySelectorAll('[data-i18n]');

    /**
     * Apply active language class to buttons
     */
    function applyActiveLanguageClass(langCode) {
        languageButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-dil') === langCode) {
                btn.classList.add('active');
            }
        });
    }

    /**
     * Animate language transition
     */
    function animateLanguageTransition(callback) {
        document.body.classList.add('language-switching');

        translatableElements.forEach(element => {
            element.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            element.style.opacity = '0.3';
            element.style.transform = 'translateY(-10px)';
        });

        setTimeout(() => {
            callback();

            setTimeout(() => {
                translatableElements.forEach(element => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                });

                setTimeout(() => {
                    document.body.classList.remove('language-switching');
                }, 300);
            }, 50);
        }, 300);
    }

    /**
     * Update translation for a single element
     */
    function updateElementTranslation(element) {
        if (!element) return;
        const key = element.getAttribute('data-i18n');
        if (!key) return;
        const translation = translations[currentLanguage];
        if (translation && translation[key]) {
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translation[key];
            } else if (element.hasAttribute('placeholder')) {
                element.setAttribute('placeholder', translation[key]);
            } else if (element.tagName === 'OPTION') {
                element.textContent = translation[key];
            } else {
                element.textContent = translation[key];
            }
        }
    }

    /**
     * Apply translations to all elements with data-i18n attribute
     */
    function applyTranslations(langCode) {
        const translation = translations[langCode];
        if (!translation) {
            console.warn(`Translation not found for language: ${langCode}`);
            return;
        }

        animateLanguageTransition(() => {
            // Update all translatable elements including those in modals
            const allTranslatableElements = document.querySelectorAll('[data-i18n]');
            allTranslatableElements.forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (key && translation[key]) {
                    if (element.tagName === 'INPUT' && element.type === 'submit') {
                        element.value = translation[key];
                    } else if (element.hasAttribute('placeholder')) {
                        element.setAttribute('placeholder', translation[key]);
                    } else if (element.tagName === 'OPTION') {
                        element.textContent = translation[key];
                    } else {
                        element.textContent = translation[key];
                    }
                }
            });

            document.documentElement.setAttribute('lang', langCode);
            document.title = translation.adminTitle || document.title;

            currentLanguage = langCode;
            localStorage.setItem('foodielocalDil', langCode);
            applyActiveLanguageClass(langCode);

            // Also update dynamic admin content (e.g., menus names/descriptions)
            updateAdminMenuTranslations(langCode);
        });
    }

    /**
     * Get translation by key
     */
    function t(key) {
        return translations[currentLanguage]?.[key] || key;
    }

    /**
     * Auto translate helper for dynamic content (uses Google Translate free endpoint)
     */
    async function autoTranslateDynamic(text, targetLang) {
        if (!text || !targetLang) return text;

        // Əgər hədəf dil EN-dirsə, mənbənin artıq ingiliscə olduğunu qəbul edirik
        // və əlavə tərcümə etmirik
        if (targetLang === 'en') {
            return text;
        }

        // Əgər hədəf dil AZ-dirsə və mətn artıq azərbaycan hərfləri ehtiva edirsə,
        // orijinal mətni saxlayırıq (tərcümə etmirik)
        if (targetLang === 'az') {
            // Azərbaycan hərfləri: ə, ı, ö, ü, ş, ç, ğ
            const azRegex = /[əıöüşçğƏIÖÜŞÇĞ]/;
            if (azRegex.test(text)) {
                return text; // Artıq AZ-dədir, tərcümə etmə
            }
            // Əgər azərbaycan hərfləri yoxdursa, EN-dən AZ-yə tərcümə et
        }

        const cacheKey = `${text}__${targetLang}`;
        if (window.translationCache && window.translationCache[cacheKey]) {
            return window.translationCache[cacheKey];
        }

        try {
            // Mənbə dili avtomatik tanınsın, hədəf dilə tərcümə et
            const response = await fetch(
                `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`
            );
            const data = await response.json();
            const translated = data?.[0]?.[0]?.[0];
            if (translated) {
                if (!window.translationCache) {
                    window.translationCache = {};
                }
                window.translationCache[cacheKey] = translated;
                return translated;
            }
        } catch (e) {
            console.warn('Dynamic translation error:', e);
        }

        return text;
    }

    /**
     * Update admin menus table texts (name + description) according to current language
     */
    async function updateAdminMenuTranslations(langCode) {
        try {
            const nameCells = Array.from(document.querySelectorAll('.admin-menu-name'));
            const descCells = Array.from(document.querySelectorAll('.admin-menu-description'));

            // Parallel translate all names
            const namePromises = nameCells.map(async (cell) => {
                const original = cell.getAttribute('data-original-name') || cell.textContent.trim();
                if (!original) return null;
                const translated = await autoTranslateDynamic(original, langCode);
                return { cell, translated };
            });

            // Parallel translate all descriptions
            const descPromises = descCells.map(async (cell) => {
                const original = cell.getAttribute('data-original-description') || cell.textContent.trim();
                if (!original) return null;
                const translated = await autoTranslateDynamic(original, langCode);
                return { cell, translated };
            });

            const nameResults = await Promise.all(namePromises);
            nameResults.forEach(result => {
                if (result && result.translated != null) {
                    result.cell.textContent = result.translated;
                }
            });

            const descResults = await Promise.all(descPromises);
            descResults.forEach(result => {
                if (result && result.translated != null) {
                    result.cell.textContent = result.translated;
                }
            });
        } catch (e) {
            console.warn('Failed to update admin menus translations:', e);
        }
    }

    // ==================== Notification System ====================

    /**
     * Show notification to user
     */
    function showNotification(message, type = 'success') {
        // Remove existing notifications first
        const existingNotifications = document.querySelectorAll('.custom-notification');
        existingNotifications.forEach(notif => {
            notif.style.animation = 'slideOutNotification 0.3s ease-out';
            setTimeout(() => {
                if (notif.parentNode) {
                    notif.remove();
                }
            }, 300);
        });

        // Wait a bit before showing new notification
        setTimeout(() => {
            const notification = document.createElement('div');
            notification.className = `custom-notification alert alert-${type === 'success' ? 'success' : 'danger'} alert-dismissible fade show position-fixed`;
            notification.style.cssText = `
                top: 100px;
                right: 20px;
                z-index: 9999;
                min-width: 300px;
                max-width: 500px;
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
                border-radius: 10px;
                animation: slideInNotification 0.3s ease-out;
                padding: 16px 20px;
            `;

            const icon = type === 'success'
                ? '<i class="bi bi-check-circle-fill me-2"></i>'
                : '<i class="bi bi-exclamation-triangle-fill me-2"></i>';

            notification.innerHTML = `
                <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center">
                        ${icon}
                        <span>${escapeHtml(message)}</span>
                    </div>
                    <button type="button" class="btn-close ms-3" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;

            document.body.appendChild(notification);

            // Auto remove after 5 seconds
            const autoRemove = setTimeout(() => {
                if (notification.parentNode) {
                    notification.style.animation = 'slideOutNotification 0.3s ease-out';
                    setTimeout(() => {
                        if (notification.parentNode) {
                            notification.remove();
                        }
                    }, 300);
                }
            }, 5000);

            // Remove on close button click
            const closeBtn = notification.querySelector('.btn-close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    clearTimeout(autoRemove);
                    notification.style.animation = 'slideOutNotification 0.3s ease-out';
                    setTimeout(() => {
                        if (notification.parentNode) {
                            notification.remove();
                        }
                    }, 300);
                });
            }
        }, existingNotifications.length > 0 ? 350 : 0);
    }

    // Add notification animations to CSS dynamically (only once)
    (function() {
        if (!document.getElementById('notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                @keyframes slideInNotification {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                @keyframes slideOutNotification {
                    from {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                }
                .custom-notification {
                    backdrop-filter: blur(10px);
                    font-weight: 500;
                }
                .custom-notification.alert-success {
                    background: linear-gradient(135deg, rgba(16, 185, 129, 0.95), rgba(5, 150, 105, 0.95)) !important;
                    border: 1px solid rgba(16, 185, 129, 0.5) !important;
                    color: white !important;
                }
                .custom-notification.alert-danger {
                    background: linear-gradient(135deg, rgba(239, 68, 68, 0.95), rgba(220, 38, 38, 0.95)) !important;
                    border: 1px solid rgba(239, 68, 68, 0.5) !important;
                    color: white !important;
                }
                .custom-notification .btn-close {
                    filter: brightness(0) invert(1);
                    opacity: 0.9;
                }
                .custom-notification .btn-close:hover {
                    opacity: 1;
                }
                @media (max-width: 576px) {
                    .custom-notification {
                        right: 10px !important;
                        left: 10px !important;
                        min-width: auto !important;
                        max-width: none !important;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    })();

    /**
     * Escape HTML to prevent XSS
     */
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // ==================== CRUD Operations (MVC/Form Based) ====================

    /**
     * Edit item - pre-fill modal and show
     * Data comes from Thymeleaf-rendered HTML attributes
     */
    window.editItem = function(type, id) {
        try {
            // Find the row with the data
            const row = document.querySelector(`tr[data-${type}-id="${id}"]`);
            if (!row) {
                console.warn(`Row not found for ${type} with id ${id}`);
                return;
            }

            const cells = row.querySelectorAll('td');

            if (type === 'users') {
                if (cells.length >= 5) {
                    document.getElementById('userName').value = cells[1].textContent.trim();
                    document.getElementById('userEmail').value = cells[2].textContent.trim();
                    // Role is in badge, extract it
                    const roleBadge = cells[3].querySelector('.badge');
                    if (roleBadge) {
                        const roleText = roleBadge.textContent.trim();
                        const roleSelect = document.getElementById('userRole');
                        if (roleSelect) {
                            // Find option with matching text
                            Array.from(roleSelect.options).forEach(option => {
                                if (option.textContent.trim() === roleText) {
                                    roleSelect.value = option.value;
                                }
                            });
                        }
                    }
                    document.getElementById('userPassword').value = '';
                    document.getElementById('userPassword').required = false;

                    const modal = new bootstrap.Modal(document.getElementById('addUserModal'));
                    document.getElementById('addUserModalLabel').textContent = t('modalEditUser');
                    document.getElementById('saveUserBtn').setAttribute('data-edit-id', id);
                    modal.show();
                }
            } else if (type === 'roles') {
                if (cells.length >= 4) {
                    document.getElementById('roleName').value = cells[1].textContent.trim();
                    document.getElementById('roleDescription').value = cells[2].textContent.trim();
                    const modal = new bootstrap.Modal(document.getElementById('addRoleModal'));
                    document.getElementById('addRoleModalLabel').textContent = t('modalEditRole');
                    document.getElementById('saveRoleBtn').setAttribute('data-edit-id', id);
                    modal.show();
                }
            } else if (type === 'restaurants') {
                if (cells.length >= 5) {
                    document.getElementById('restaurantName').value = cells[1].textContent.trim();
                    document.getElementById('restaurantDescription').value = cells[2].textContent.trim();
                    document.getElementById('restaurantLocation').value = cells[3].textContent.trim();
                    // Image URL might not be in table, leave empty
                    const modal = new bootstrap.Modal(document.getElementById('addRestaurantModal'));
                    document.getElementById('addRestaurantModalLabel').textContent = t('modalEditRestaurant');
                    document.getElementById('saveRestaurantBtn').setAttribute('data-edit-id', id);
                    modal.show();
                }
            } else if (type === 'reservations') {
                if (cells.length >= 7) {
                    // Customer
                    const customerText = cells[1].textContent.trim();
                    const customerSelect = document.getElementById('reservationCustomer');
                    if (customerSelect) {
                        Array.from(customerSelect.options).forEach(option => {
                            if (option.textContent.trim() === customerText) {
                                customerSelect.value = option.value;
                            }
                        });
                    }
                    // Restaurant
                    const restaurantText = cells[2].textContent.trim();
                    const restaurantSelect = document.getElementById('reservationRestaurant');
                    if (restaurantSelect) {
                        Array.from(restaurantSelect.options).forEach(option => {
                            if (option.textContent.trim() === restaurantText) {
                                restaurantSelect.value = option.value;
                            }
                        });
                    }
                    document.getElementById('reservationDate').value = cells[3].textContent.trim();
                    document.getElementById('reservationTime').value = cells[4].textContent.trim();
                    document.getElementById('reservationGuests').value = cells[5].textContent.trim();
                    const modal = new bootstrap.Modal(document.getElementById('addReservationModal'));
                    document.getElementById('addReservationModalLabel').textContent = t('modalEditReservation');
                    document.getElementById('saveReservationBtn').setAttribute('data-edit-id', id);
                    modal.show();
                }
            } else if (type === 'reviews') {
                if (cells.length >= 6) {
                    // Reviewer name (split first and last name)
                    const reviewerName = cells[1].textContent.trim();
                    const nameParts = reviewerName.split(' ');
                    document.getElementById('reviewFirstName').value = nameParts[0] || '';
                    document.getElementById('reviewLastName').value = nameParts.slice(1).join(' ') || '';

                    // Restaurant
                    const restaurantText = cells[2].textContent.trim();
                    const restaurantSelect = document.getElementById('reviewRestaurant');
                    if (restaurantSelect) {
                        Array.from(restaurantSelect.options).forEach(option => {
                            if (option.textContent.trim() === restaurantText) {
                                restaurantSelect.value = option.value;
                            }
                        });
                    }

                    // Rating
                    const ratingText = cells[3].textContent.trim();
                    document.getElementById('reviewRating').value = ratingText;

                    // Comment
                    document.getElementById('reviewComment').value = cells[4].textContent.trim();

                    const modal = new bootstrap.Modal(document.getElementById('addReviewModal'));
                    document.getElementById('addReviewModalLabel').textContent = t('modalEditReview') || 'Rəyi Redaktə et';
                    document.getElementById('saveReviewBtn').setAttribute('data-edit-id', id);
                    modal.show();
                }
            }
        } catch (error) {
            console.error(`Error editing ${type}:`, error);
            showNotification(t('errorMessage') || 'Failed to load data', 'error');
        }
    };

    /**
     * Delete item - Direct deletion without confirmation
     * Deletes item immediately without modal or confirmation
     */
    window.deleteItem = function(type, id) {
        try {
            // Create and submit form directly
            const form = document.createElement('form');
            form.method = 'POST';
            form.action = `/admin/${type}/${id}/delete`;

            // Add CSRF token if available
            const csrfToken = document.querySelector('meta[name="_csrf"]')?.getAttribute('content');
            if (csrfToken) {
                const csrfInput = document.createElement('input');
                csrfInput.type = 'hidden';
                csrfInput.name = '_csrf';
                csrfInput.value = csrfToken;
                form.appendChild(csrfInput);
            }

            document.body.appendChild(form);
            form.submit();
        } catch (error) {
            console.error(`Error deleting ${type}:`, error);
            showNotification(t('errorMessage') || 'Failed to delete item', 'error');
        }
    };

    // ==================== Form Handlers ====================

    /**
     * Save User - Form submission
     */
    document.getElementById('saveUserBtn')?.addEventListener('click', function() {
        const form = document.getElementById('addUserForm');
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const editId = this.getAttribute('data-edit-id');

        // Change form action based on edit or add
        if (editId) {
            form.action = `/admin/users/${editId}/edit`;
            form.method = 'POST';
        } else {
            form.action = '/admin/users/add';
            form.method = 'POST';
        }

        // Submit form
        form.submit();
    });

    /**
     * Save Role - Form submission
     */
    document.getElementById('saveRoleBtn')?.addEventListener('click', function() {
        const form = document.getElementById('addRoleForm');
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const editId = this.getAttribute('data-edit-id');

        if (editId) {
            form.action = `/admin/roles/${editId}/edit`;
            form.method = 'POST';
        } else {
            form.action = '/admin/roles/create';
            form.method = 'POST';
        }

        form.submit();
    });

    /**
     * Save Restaurant - Form submission
     */
    document.getElementById('saveRestaurantBtn')?.addEventListener('click', function() {
        const form = document.getElementById('addRestaurantForm');
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const editId = this.getAttribute('data-edit-id');

        if (editId) {
            form.action = `/admin/restaurants/update/${editId}`;
            form.method = 'POST';
        } else {
            form.action = '/admin/restaurants/create';
            form.method = 'POST';
        }

        form.submit();
    });

    /**
     * Save Reservation - Form submission
     */
    document.getElementById('saveReservationBtn')?.addEventListener('click', function() {
        const form = document.getElementById('addReservationForm');
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const editId = this.getAttribute('data-edit-id');

        if (editId) {
            form.action = `/admin/reservations/${editId}/edit`;
            form.method = 'POST';
        } else {
            form.action = '/admin/reservations/add';
            form.method = 'POST';
        }

        form.submit();
    });

    /**
     * Save Review - Form submission
     */
    document.getElementById('saveReviewBtn')?.addEventListener('click', function() {
        const form = document.getElementById('addReviewForm');
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const editId = this.getAttribute('data-edit-id');

        if (editId) {
            form.action = `/admin/reviews/${editId}/edit`;
            form.method = 'POST';
        } else {
            form.action = '/admin/reviews/add';
            form.method = 'POST';
        }

        form.submit();
    });

    // ==================== Event Listeners ====================

    // Set up language switcher
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedLang = button.getAttribute('data-dil');
            if (selectedLang !== currentLanguage) {
                applyTranslations(selectedLang);
            }
        });
    });

    // Apply initial language
    applyTranslations(currentLanguage);

    // Reset modals on close
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('hidden.bs.modal', function() {
            const form = this.querySelector('form');
            if (form) {
                form.reset();
                // Reset password field requirement for user modal
                if (this.id.includes('User')) {
                    const passwordField = document.getElementById('userPassword');
                    if (passwordField) {
                        passwordField.required = true;
                    }
                }
                // Reset form action
                form.removeAttribute('action');
                const saveBtn = this.querySelector('[id$="Btn"]');
                if (saveBtn) {
                    saveBtn.removeAttribute('data-edit-id');
                }
                // Reset modal titles
                const modalLabel = this.querySelector('[id$="ModalLabel"]');
                if (modalLabel) {
                    const modalId = this.id;
                    if (modalId.includes('User')) {
                        modalLabel.textContent = t('modalAddUser');
                    } else if (modalId.includes('Role')) {
                        modalLabel.textContent = t('modalAddRole');
                    } else if (modalId.includes('Restaurant')) {
                        modalLabel.textContent = t('modalAddRestaurant');
                    } else if (modalId.includes('Reservation')) {
                        modalLabel.textContent = t('modalAddReservation');
                    } else if (modalId.includes('Review')) {
                        modalLabel.textContent = t('modalAddReview');
                    } else if (modalId.includes('Menu')) {
                        modalLabel.textContent = t('modalAddMenu');
                    } else if (modalId.includes('deleteConfirm')) {
                        modalLabel.textContent = t('modalDeleteConfirm');
                    }
                }
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

    // Animate tab switching
    const tabButtons = document.querySelectorAll('#adminTabs button[data-bs-toggle="tab"]');
    tabButtons.forEach(button => {
        button.addEventListener('shown.bs.tab', function (event) {
            const targetPane = document.querySelector(event.target.getAttribute('data-bs-target'));
            if (targetPane) {
                targetPane.style.opacity = '0';
                targetPane.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    targetPane.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                    targetPane.style.opacity = '1';
                    targetPane.style.transform = 'translateY(0)';
                }, 50);
            }
        });
    });

    // Check for success/error messages from backend (Thymeleaf)
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get('success');
    const error = urlParams.get('error');

    if (success) {
        showNotification(decodeURIComponent(success), 'success');
        // Clean URL
        const newUrl = window.location.pathname;
        window.history.replaceState({}, '', newUrl);
    }

    if (error) {
        showNotification(decodeURIComponent(error), 'error');
        // Clean URL
        const newUrl = window.location.pathname;
        window.history.replaceState({}, '', newUrl);
    }

    // ==================== Roles Form Management ====================

    /**
     * Show create role form
     */
    window.showCreateRoleForm = function() {
        const createForm = document.getElementById('createRoleForm');
        const editForm = document.getElementById('editRoleForm');
        if (createForm) {
            createForm.style.display = 'block';
            // Scroll to form
            createForm.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        if (editForm) {
            editForm.style.display = 'none';
        }
        // Reset form
        const form = document.getElementById('createRoleFormElement');
        if (form) {
            form.reset();
        }
    };

    /**
     * Hide create role form
     */
    window.hideCreateRoleForm = function() {
        const createForm = document.getElementById('createRoleForm');
        if (createForm) {
            createForm.style.display = 'none';
        }
        // Reset form
        const form = document.getElementById('createRoleFormElement');
        if (form) {
            form.reset();
        }
    };

    /**
     * Show edit role form with data
     */
    window.showEditRoleForm = function(id, name, description) {
        const createForm = document.getElementById('createRoleForm');
        const editForm = document.getElementById('editRoleForm');
        const editFormElement = document.getElementById('editRoleFormElement');

        if (editForm) {
            editForm.style.display = 'block';
            // Scroll to form
            editForm.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        if (createForm) {
            createForm.style.display = 'none';
        }

        // Fill form with data
        if (editFormElement) {
            // Update form action
            editFormElement.action = `/admin/roles/edit/${id}`;

            // Set role ID
            const roleIdInput = document.getElementById('editRoleId');
            if (roleIdInput) {
                roleIdInput.value = id;
            }

            // Fill fields
            const nameInput = document.getElementById('editName');
            const descInput = document.getElementById('editDescription');
            if (nameInput) {
                nameInput.value = name || '';
            }
            if (descInput) {
                descInput.value = description || '';
            }
        }
    };

    /**
     * Setup edit role button event listeners
     */
    function setupRoleEditButtons() {
        document.querySelectorAll('.edit-role-btn').forEach(button => {
            button.addEventListener('click', function() {
                const row = this.closest('tr');
                if (row) {
                    const roleId = row.getAttribute('data-role-id');
                    const roleName = row.getAttribute('data-role-name') || '';
                    const roleDescription = row.getAttribute('data-role-description') || '';
                    showEditRoleForm(roleId, roleName, roleDescription);
                }
            });
        });
    }

    // Setup edit buttons after DOM is loaded
    setupRoleEditButtons();

    // ==================== User Form Management ====================
    window.showCreateUserForm = function() {
        const createForm = document.getElementById('createUserForm');
        const editForm = document.getElementById('editUserForm');
        if (createForm) {
            createForm.style.display = 'block';
            createForm.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        if (editForm) {
            editForm.style.display = 'none';
        }
        const form = document.getElementById('createUserFormElement');
        if (form) {
            form.reset();
        }
    };

    window.hideCreateUserForm = function() {
        const createForm = document.getElementById('createUserForm');
        if (createForm) {
            createForm.style.display = 'none';
        }
        const form = document.getElementById('createUserFormElement');
        if (form) {
            form.reset();
        }
    };

    // ==================== Restaurant Form Management ====================
    window.showCreateRestaurantForm = function() {
        const createForm = document.getElementById('createRestaurantForm');
        const editForm = document.getElementById('editRestaurantForm');
        if (createForm) {
            createForm.style.display = 'block';
            createForm.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        if (editForm) {
            editForm.style.display = 'none';
        }
        const form = document.getElementById('createRestaurantFormElement');
        if (form) {
            form.reset();
        }
    };

    window.hideCreateRestaurantForm = function() {
        const createForm = document.getElementById('createRestaurantForm');
        if (createForm) {
            createForm.style.display = 'none';
        }
        const form = document.getElementById('createRestaurantFormElement');
        if (form) {
            form.reset();
        }
    };

    // ==================== Reservation Form Management ====================
    window.showCreateReservationForm = function() {
        const createForm = document.getElementById('createReservationForm');
        const editForm = document.getElementById('editReservationForm');
        if (createForm) {
            createForm.style.display = 'block';
            createForm.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        if (editForm) {
            editForm.style.display = 'none';
        }
        const form = document.getElementById('createReservationFormElement');
        if (form) {
            form.reset();
        }
    };

    window.hideCreateReservationForm = function() {
        const createForm = document.getElementById('createReservationForm');
        if (createForm) {
            createForm.style.display = 'none';
        }
        const form = document.getElementById('createReservationFormElement');
        if (form) {
            form.reset();
        }
    };

    // ==================== Review Form Management ====================
    window.showCreateReviewForm = function() {
        const createForm = document.getElementById('createReviewForm');
        const editForm = document.getElementById('editReviewForm');
        if (createForm) {
            createForm.style.display = 'block';
            createForm.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        if (editForm) {
            editForm.style.display = 'none';
        }
        const form = document.getElementById('createReviewFormElement');
        if (form) {
            form.reset();
        }
    };

    window.hideCreateReviewForm = function() {
        const createForm = document.getElementById('createReviewForm');
        if (createForm) {
            createForm.style.display = 'none';
        }
        const form = document.getElementById('createReviewFormElement');
        if (form) {
            form.reset();
        }
    };

    // ==================== Modal Functions ====================

    // User Modal
    window.openUserModal = function(userId) {
        const form = document.getElementById('userForm');
        const userIdInput = document.getElementById('userId');
        const passwordInput = document.getElementById('userPassword');
        const passwordRequired = document.getElementById('passwordRequired');
        const passwordOptional = document.getElementById('passwordOptional');
        const enabledCheckbox = document.getElementById('userEnabled');
        const modalLabel = document.getElementById('userModalLabel');

        if (userId) {
            // Edit mode
            const row = document.querySelector(`tr[data-user-id="${userId}"]`);
            if (row) {
                userIdInput.value = userId;
                document.getElementById('userFullName').value = row.getAttribute('data-user-fullname') || '';
                document.getElementById('userEmail').value = row.getAttribute('data-user-email') || '';
                // Controller expects role name (String), not role ID
                const roleName = row.getAttribute('data-user-role-name') || '';
                document.getElementById('userRole').value = roleName;
                const enabled = row.getAttribute('data-user-enabled') === 'true';
                enabledCheckbox.checked = enabled;
                form.action = `/admin/users/update/${userId}`;
                passwordInput.required = false;
                passwordRequired.style.display = 'none';
                passwordOptional.style.display = 'inline';
                // Update modal title
                if (modalLabel) {
                    modalLabel.setAttribute('data-i18n', 'modalEditUser');
                    updateElementTranslation(modalLabel);
                }
            }
        } else {
            // Create mode
            userIdInput.value = '';
            form.reset();
            enabledCheckbox.checked = true;
            form.action = '/admin/users/create';
            passwordInput.required = true;
            passwordRequired.style.display = 'inline';
            passwordOptional.style.display = 'none';
            // Update modal title
            if (modalLabel) {
                modalLabel.setAttribute('data-i18n', 'modalAddUser');
                updateElementTranslation(modalLabel);
            }
        }
    };

    window.submitUserForm = function() {
        const form = document.getElementById('userForm');
        const userIdInput = document.getElementById('userId');
        const passwordInput = document.getElementById('userPassword');

        // Validate form before submit
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // Ensure form action is set correctly based on ID
        const userId = userIdInput ? userIdInput.value : '';
        if (userId && userId.trim() !== '') {
            // Edit mode - update existing user
            form.action = `/admin/users/update/${userId}`;
        } else {
            // Create mode - add new user
            form.action = '/admin/users/create';
            // Password is required for new users
            if (!passwordInput || !passwordInput.value || passwordInput.value.trim() === '') {
                alert('Password is required for new users');
                passwordInput.focus();
                return;
            }
        }

        // Ensure enabled checkbox value is sent correctly
        // Checkboxes don't send value when unchecked, so we need to handle this
        const enabledCheckbox = document.getElementById('userEnabled');
        if (enabledCheckbox) {
            // Remove any existing hidden input
            const existingHidden = document.getElementById('userEnabledHidden');
            if (existingHidden) {
                existingHidden.remove();
            }

            // Create a hidden input to ensure the value is sent
            const hiddenInput = document.createElement('input');
            hiddenInput.type = 'hidden';
            hiddenInput.id = 'userEnabledHidden';
            hiddenInput.name = 'enabled';
            hiddenInput.value = enabledCheckbox.checked ? 'true' : 'false';
            form.appendChild(hiddenInput);
        }

        // Debug: Log form data before submit
        console.log('Submitting user form:', {
            action: form.action,
            userId: userId,
            fullName: document.getElementById('userFullName').value,
            email: document.getElementById('userEmail').value,
            role: document.getElementById('userRole').value,
            enabled: enabledCheckbox ? enabledCheckbox.checked : false,
            hasPassword: passwordInput ? passwordInput.value.length > 0 : false
        });

        form.submit();
    };

    // Role Modal
    window.openRoleModal = function(roleId) {
        const form = document.getElementById('roleForm');
        const roleIdInput = document.getElementById('roleId');
        const modalLabel = document.getElementById('roleModalLabel');

        if (roleId) {
            // Edit mode
            const row = document.querySelector(`tr[data-role-id="${roleId}"]`);
            if (row) {
                roleIdInput.value = roleId;
                document.getElementById('roleName').value = row.getAttribute('data-role-name') || '';
                document.getElementById('roleDescription').value = row.getAttribute('data-role-description') || '';
                form.action = `/admin/roles/edit/${roleId}`;
                if (modalLabel) {
                    modalLabel.setAttribute('data-i18n', 'modalEditRole');
                    updateElementTranslation(modalLabel);
                }
            }
        } else {
            // Create mode
            roleIdInput.value = '';
            form.reset();
            form.action = '/admin/roles/create';
            if (modalLabel) {
                modalLabel.setAttribute('data-i18n', 'modalAddRole');
                updateElementTranslation(modalLabel);
            }
        }
    };

    window.submitRoleForm = function() {
        document.getElementById('roleForm').submit();
    };

    // Restaurant Modal
    window.openRestaurantModal = function(restaurantId) {
        const form = document.getElementById('restaurantForm');
        const restaurantIdInput = document.getElementById('restaurantId');
        const modalLabel = document.getElementById('restaurantModalLabel');

        if (restaurantId) {
            // Edit mode
            const row = document.querySelector(`tr[data-restaurant-id="${restaurantId}"]`);
            if (row) {
                // Set ID
                restaurantIdInput.value = restaurantId;

                // Populate all form fields from data attributes
                document.getElementById('restaurantName').value = row.getAttribute('data-restaurant-name') || '';
                document.getElementById('restaurantAddress').value = row.getAttribute('data-restaurant-address') || '';
                document.getElementById('restaurantDescription').value = row.getAttribute('data-restaurant-description') || '';
                document.getElementById('restaurantImageUrl').value = row.getAttribute('data-restaurant-image-url') || '';
                document.getElementById('restaurantCuisine').value = row.getAttribute('data-restaurant-cuisine') || '';
                document.getElementById('restaurantPriceRange').value = row.getAttribute('data-restaurant-price-range') || '';
                const rating = row.getAttribute('data-restaurant-rating') || '';
                document.getElementById('restaurantRating').value = rating;
                document.getElementById('restaurantOpeningHours').value = row.getAttribute('data-restaurant-opening-hours') || '';
                document.getElementById('restaurantPhone').value = row.getAttribute('data-restaurant-phone') || '';

                // Set form action for update
                form.action = `/admin/restaurants/update/${restaurantId}`;

                if (modalLabel) {
                    modalLabel.setAttribute('data-i18n', 'modalEditRestaurant');
                    updateElementTranslation(modalLabel);
                }
            }
        } else {
            // Create mode
            restaurantIdInput.value = '';
            form.reset();
            form.action = '/admin/restaurants/create';

            if (modalLabel) {
                modalLabel.setAttribute('data-i18n', 'modalAddRestaurant');
                updateElementTranslation(modalLabel);
            }
        }
    };

    window.submitRestaurantForm = function() {
        const form = document.getElementById('restaurantForm');
        const restaurantIdInput = document.getElementById('restaurantId');

        // Validate form before submit
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // Ensure form action is set correctly based on ID
        const restaurantId = restaurantIdInput ? restaurantIdInput.value : '';
        if (restaurantId && restaurantId.trim() !== '') {
            form.action = `/admin/restaurants/update/${restaurantId}`;
        } else {
            form.action = '/admin/restaurants/create';
        }

        form.submit();
    };

    // Reservation Modal
    window.openReservationModal = function(reservationId) {
        const form = document.getElementById('reservationForm');
        const reservationIdInput = document.getElementById('reservationId');
        const modalLabel = document.getElementById('reservationModalLabel');

        if (reservationId) {
            // Edit mode
            const row = document.querySelector(`tr[data-reservation-id="${reservationId}"]`);
            if (row) {
                reservationIdInput.value = reservationId;
                document.getElementById('reservationFirstName').value = row.getAttribute('data-reservation-firstname') || '';
                document.getElementById('reservationLastName').value = row.getAttribute('data-reservation-lastname') || '';
                document.getElementById('reservationEmail').value = row.getAttribute('data-reservation-email') || '';
                const phoneNumber = row.getAttribute('data-reservation-phone') || '';
                const countryCode = row.getAttribute('data-reservation-country-code') || '+994';
                document.getElementById('reservationCountryCode').value = countryCode;
                document.getElementById('reservationPhone').value = phoneNumber;
                const restaurantId = row.getAttribute('data-reservation-restaurant-id') || '';
                const restaurantChoice = row.getAttribute('data-reservation-restaurant-choice') || '';
                const restaurantSelect = document.getElementById('reservationRestaurant');
                const restaurantChoiceInput = document.getElementById('reservationRestaurantChoice');
                if (restaurantSelect) {
                    restaurantSelect.value = restaurantId;
                    // Set restaurantChoice from selected option or from data attribute
                    if (restaurantChoice) {
                        restaurantChoiceInput.value = restaurantChoice;
                    } else if (restaurantSelect.selectedIndex > 0) {
                        const selectedOption = restaurantSelect.options[restaurantSelect.selectedIndex];
                        const restaurantName = selectedOption.getAttribute('data-restaurant-name') || selectedOption.textContent.trim();
                        restaurantChoiceInput.value = restaurantName;
                    }
                }
                document.getElementById('reservationDate').value = row.getAttribute('data-reservation-date') || '';
                document.getElementById('reservationTime').value = row.getAttribute('data-reservation-time') || '';
                document.getElementById('reservationGuests').value = row.getAttribute('data-reservation-guests') || '';
                document.getElementById('reservationSpecialRequests').value = row.getAttribute('data-reservation-special-requests') || '';
                form.action = `/admin/reservations/update/${reservationId}`;
                if (modalLabel) {
                    modalLabel.setAttribute('data-i18n', 'modalEditReservation');
                    updateElementTranslation(modalLabel);
                }
            }
        } else {
            // Create mode
            reservationIdInput.value = '';
            // Reset form but preserve restaurant dropdown structure
            const restaurantSelect = document.getElementById('reservationRestaurant');
            const restaurantChoiceInput = document.getElementById('reservationRestaurantChoice');
            form.reset();
            // Ensure restaurant dropdown is reset properly
            if (restaurantSelect) {
                restaurantSelect.selectedIndex = 0;
            }
            if (restaurantChoiceInput) {
                restaurantChoiceInput.value = '';
            }
            form.action = '/admin/reservations/create';
            if (modalLabel) {
                modalLabel.setAttribute('data-i18n', 'modalAddReservation');
                updateElementTranslation(modalLabel);
            }
        }
    };

    window.submitReservationForm = function() {
        const form = document.getElementById('reservationForm');
        const restaurantSelect = document.getElementById('reservationRestaurant');
        const restaurantChoiceInput = document.getElementById('reservationRestaurantChoice');

        // Validate restaurant is selected
        if (!restaurantSelect || !restaurantSelect.value || restaurantSelect.value === '') {
            alert('Zəhmət olmasa restoran seçin!');
            if (restaurantSelect) {
                restaurantSelect.focus();
            }
            return;
        }

        // Set restaurantChoice from selected restaurant name
        if (restaurantSelect && restaurantChoiceInput) {
            const selectedOption = restaurantSelect.options[restaurantSelect.selectedIndex];
            if (selectedOption && selectedOption.value) {
                const restaurantName = selectedOption.getAttribute('data-restaurant-name') || selectedOption.textContent.trim();
                restaurantChoiceInput.value = restaurantName;

                // Ensure restaurantId is set and not empty
                const restaurantId = restaurantSelect.value;
                if (!restaurantId || restaurantId === '') {
                    alert('Restoran ID tapılmadı!');
                    restaurantSelect.focus();
                    return;
                }

                // Debug: Log values before submit
                console.log('Submitting reservation form:');
                console.log('restaurantId:', restaurantId);
                console.log('restaurantChoice:', restaurantChoiceInput.value);
            }
        }

        // Validate form before submit
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // Ensure restaurantId is included in form data
        const formData = new FormData(form);
        console.log('Form data restaurantId:', formData.get('restaurantId'));
        console.log('Form data restaurantChoice:', formData.get('restaurantChoice'));

        form.submit();
    };

    // Update restaurantChoice when restaurant is selected
    document.addEventListener('DOMContentLoaded', function() {
        const restaurantSelect = document.getElementById('reservationRestaurant');
        const restaurantChoiceInput = document.getElementById('reservationRestaurantChoice');
        if (restaurantSelect && restaurantChoiceInput) {
            restaurantSelect.addEventListener('change', function() {
                const selectedOption = this.options[this.selectedIndex];
                if (selectedOption && selectedOption.value) {
                    const restaurantName = selectedOption.getAttribute('data-restaurant-name') || selectedOption.textContent.trim();
                    restaurantChoiceInput.value = restaurantName;
                } else {
                    restaurantChoiceInput.value = '';
                }
            });
        }
    });

    // Review Modal
    window.openReviewModal = function(reviewId) {
        const form = document.getElementById('reviewForm');
        const reviewIdInput = document.getElementById('reviewId');
        const modalLabel = document.getElementById('reviewModalLabel');
        const activeCheckbox = document.getElementById('reviewActive');

        if (reviewId) {
            // Edit mode
            const row = document.querySelector(`tr[data-review-id="${reviewId}"]`);
            if (row) {
                reviewIdInput.value = reviewId;
                document.getElementById('reviewFirstName').value = row.getAttribute('data-review-firstname') || '';
                document.getElementById('reviewLastName').value = row.getAttribute('data-review-lastname') || '';
                document.getElementById('reviewRestaurant').value = row.getAttribute('data-review-restaurant-id') || '';
                document.getElementById('reviewRating').value = row.getAttribute('data-review-rating') || '';
                document.getElementById('reviewComment').value = row.getAttribute('data-review-comment') || '';
                // Set active checkbox based on data attribute
                const activeValue = row.getAttribute('data-review-active');
                if (activeCheckbox) {
                    activeCheckbox.checked = activeValue === 'true' || activeValue === null || activeValue === '';
                }
                form.action = `/admin/reviews/update/${reviewId}`;
                if (modalLabel) {
                    modalLabel.setAttribute('data-i18n', 'modalEditReview');
                    updateElementTranslation(modalLabel);
                }
            }
        } else {
            // Create mode
            reviewIdInput.value = '';
            form.reset();
            if (activeCheckbox) {
                activeCheckbox.checked = true;
            }
            form.action = '/admin/reviews/create';
            if (modalLabel) {
                modalLabel.setAttribute('data-i18n', 'modalAddReview');
                updateElementTranslation(modalLabel);
            }
        }
    };

    window.submitReviewForm = function() {
        document.getElementById('reviewForm').submit();
    };

    // Menu Modal
    window.openMenuModal = function(menuId) {
        const form = document.getElementById('menuForm');
        const menuIdInput = document.getElementById('menuId');
        const modalLabel = document.getElementById('menuModalLabel');

        if (menuId) {
            // Edit mode
            const row = document.querySelector(`tr[data-menu-id="${menuId}"]`);
            if (row) {
                menuIdInput.value = menuId;
                document.getElementById('menuName').value = row.getAttribute('data-menu-name') || '';
                document.getElementById('menuDescription').value = row.getAttribute('data-menu-description') || '';
                document.getElementById('menuPrice').value = row.getAttribute('data-menu-price') || '';
                document.getElementById('menuCategory').value = row.getAttribute('data-menu-category') || '';
                document.getElementById('menuImageUrl').value = row.getAttribute('data-menu-image-url') || '';
                const isPopular = row.getAttribute('data-menu-is-popular') === 'true';
                document.getElementById('menuIsPopular').checked = isPopular;
                document.getElementById('menuRestaurant').value = row.getAttribute('data-menu-restaurant-id') || '';
                form.action = `/admin/menus/update/${menuId}`;
                if (modalLabel) {
                    modalLabel.setAttribute('data-i18n', 'modalEditMenu');
                    updateElementTranslation(modalLabel);
                }
            }
        } else {
            // Create mode
            menuIdInput.value = '';
            form.reset();
            document.getElementById('menuIsPopular').checked = false;
            document.getElementById('menuRestaurant').selectedIndex = 0;
            form.action = '/admin/menus/create';
            if (modalLabel) {
                modalLabel.setAttribute('data-i18n', 'modalAddMenu');
                updateElementTranslation(modalLabel);
            }
        }
    };

    window.submitMenuForm = function() {
        const form = document.getElementById('menuForm');
        const menuIdInput = document.getElementById('menuId');

        // Validate form before submit
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // Ensure form action is set correctly based on ID
        const menuId = menuIdInput ? menuIdInput.value : '';
        if (menuId && menuId.trim() !== '') {
            // Edit mode - update existing menu
            form.action = `/admin/menus/update/${menuId}`;
        } else {
            // Create mode - add new menu
            form.action = '/admin/menus/create';
        }

        form.submit();
    };

    // Sort menus table by ID on page load
    function sortMenusTableById() {
        const tbody = document.getElementById('menusTableBody');
        if (!tbody) return;

        const rows = Array.from(tbody.querySelectorAll('tr[data-menu-id]'));
        if (rows.length === 0) return;

        // Sort rows by data-menu-id attribute (ascending)
        rows.sort((a, b) => {
            const idA = parseInt(a.getAttribute('data-menu-id')) || 0;
            const idB = parseInt(b.getAttribute('data-menu-id')) || 0;
            return idA - idB;
        });

        // Remove all rows from tbody
        rows.forEach(row => row.remove());

        // Re-append sorted rows
        rows.forEach(row => tbody.appendChild(row));
    }

    // Sort menus table when page loads and when menus tab is shown
    document.addEventListener('DOMContentLoaded', function() {
        // Wait a bit for Thymeleaf to render the table
        setTimeout(() => {
            sortMenusTableById();
        }, 100);

        // Also sort when menus tab is clicked
        const menusTab = document.getElementById('menus-tab');
        if (menusTab) {
            menusTab.addEventListener('shown.bs.tab', function() {
                setTimeout(() => {
                    sortMenusTableById();
                }, 50);
            });
        }
    });

});
