/**
 * Email Verification Page JavaScript
 * Email Təsdiqləmə Səhifəsi JavaScript
 *
 * Handles email verification functionality with translation support
 */

(function() {
    'use strict';

    // DOM Elements
    let emailInput, messageArea, hiddenEmail, resendEmailBtn;

    // Translation dictionary
    const translations = {
        az: {
            verifyInfoPageTitle: 'Email Təsdiqləmə Məlumatı - FoodieLocal',
            verifyResultPageTitle: 'Email Təsdiqləmə Nəticəsi - FoodieLocal',
            verifyInfoBadge: 'Email Təsdiqləmə',
            verifyInfoTitle: 'Təsdiq Emaili Göndərildi',
            verifyInfoSubtitle: 'Rezervasiyanızı təsdiqləmək üçün email ünvanınıza təsdiq linki göndərildi.',
            verifyInfoInstruction: 'Email ünvanınızı yoxlayın və təsdiq linkinə klik edin.',
            verifyInfoButton: 'Rezervasiyaya Qayıt',
            verifyResultBadge: 'Təsdiqləmə Nəticəsi',
            verifyResultTitle: 'Email Təsdiqləmə Nəticəsi',
            verifyResultMessage: 'Təsdiqləmə prosesi tamamlandı.',
            verifyResultBackButton: 'Yeni Rezervasiya',
            verifyResultHomeButton: 'Əsas Səhifə',
            verifyEmailLabel: 'Email',
            verifyEmailPlaceholder: 'email@example.com',
            verifyResendButton: 'Email Yenidən Göndər',
            verifyTitle: 'Email Təsdiqləmə',
            verifyLoading: 'Gözləyin...',
            verifySuccessSend: 'Təsdiq emaili uğurla göndərildi.',
            verifySuccessConfirm: 'Email uğurla təsdiqləndi!',
            verifyErrorEmail: 'Zəhmət olmasa email ünvanını daxil edin.',
            verifyErrorEmailInvalid: 'Zəhmət olmasa düzgün email ünvanı daxil edin.',
            verifyErrorSend: 'Email göndərilmədi. Zəhmət olmasa yenidən cəhd edin.',
            verifyErrorConfirm: 'Email təsdiqlənmədi. Zəhmət olmasa yenidən cəhd edin.',
            verifyErrorGeneral: 'Xəta baş verdi',
            verifyErrorReservationNotFound: 'Təsdiqlənəcək rezervasiya tapılmadı.',
            navHome: 'Əsas',
            navRestaurants: 'Restoranlar',
            navReservation: 'Rezervasiya',
            navReviews: 'Rəylər',
            navLanguage: 'Dil',
            footerMotto: 'FoodieLocal – yerli dadları birlikdə kəşf edək.',
            footerCopyright: function() { return '© ' + new Date().getFullYear() + ' FoodieLocal. Bütün hüquqlar qorunur.'; }
        },
        en: {
            verifyInfoPageTitle: 'Email Verification Info - FoodieLocal',
            verifyResultPageTitle: 'Email Verification Result - FoodieLocal',
            verifyInfoBadge: 'Email Verification',
            verifyInfoTitle: 'Confirmation Email Sent',
            verifyInfoSubtitle: 'A confirmation link has been sent to your email address to verify your reservation.',
            verifyInfoInstruction: 'Please check your email and click on the confirmation link.',
            verifyInfoButton: 'Back to Reservation',
            verifyResultBadge: 'Verification Result',
            verifyResultTitle: 'Email Verification Result',
            verifyResultMessage: 'Verification process completed.',
            verifyResultBackButton: 'New Reservation',
            verifyResultHomeButton: 'Home Page',
            verifyEmailLabel: 'Email',
            verifyEmailPlaceholder: 'email@example.com',
            verifyResendButton: 'Resend Email',
            verifyTitle: 'Email Verification',
            verifyLoading: 'Please wait...',
            verifySuccessSend: 'Confirmation email sent successfully.',
            verifySuccessConfirm: 'Email verified successfully!',
            verifyErrorEmail: 'Please enter your email address.',
            verifyErrorEmailInvalid: 'Please enter a valid email address.',
            verifyErrorSend: 'Failed to send email. Please try again.',
            verifyErrorConfirm: 'Email verification failed. Please try again.',
            verifyErrorGeneral: 'An error occurred',
            verifyErrorReservationNotFound: 'Reservation to be verified not found.',
            navHome: 'Home',
            navRestaurants: 'Restaurants',
            navReservation: 'Reservation',
            navReviews: 'Reviews',
            navLanguage: 'Language',
            footerMotto: 'FoodieLocal – let\'s discover local flavors together.',
            footerCopyright: function() { return '© ' + new Date().getFullYear() + ' FoodieLocal. All rights reserved.'; }
        },
        ru: {
            verifyInfoPageTitle: 'Информация о подтверждении Email - FoodieLocal',
            verifyResultPageTitle: 'Результат подтверждения Email - FoodieLocal',
            verifyInfoBadge: 'Подтверждение Email',
            verifyInfoTitle: 'Письмо подтверждения отправлено',
            verifyInfoSubtitle: 'Ссылка для подтверждения была отправлена на ваш адрес электронной почты для подтверждения бронирования.',
            verifyInfoInstruction: 'Пожалуйста, проверьте свою электронную почту и нажмите на ссылку подтверждения.',
            verifyInfoButton: 'Вернуться к бронированию',
            verifyResultBadge: 'Результат подтверждения',
            verifyResultTitle: 'Результат подтверждения Email',
            verifyResultMessage: 'Процесс подтверждения завершен.',
            verifyResultBackButton: 'Новое бронирование',
            verifyResultHomeButton: 'Главная страница',
            verifyEmailLabel: 'Email',
            verifyEmailPlaceholder: 'email@example.com',
            verifyResendButton: 'Отправить Email повторно',
            verifyTitle: 'Подтверждение Email',
            verifyLoading: 'Пожалуйста, подождите...',
            verifySuccessSend: 'Письмо подтверждения успешно отправлено.',
            verifySuccessConfirm: 'Email успешно подтвержден!',
            verifyErrorEmail: 'Пожалуйста, введите ваш адрес электронной почты.',
            verifyErrorEmailInvalid: 'Пожалуйста, введите действительный адрес электронной почты.',
            verifyErrorSend: 'Не удалось отправить email. Пожалуйста, попробуйте снова.',
            verifyErrorConfirm: 'Подтверждение email не удалось. Пожалуйста, попробуйте снова.',
            verifyErrorGeneral: 'Произошла ошибка',
            verifyErrorReservationNotFound: 'Бронирование для подтверждения не найдено.',
            navHome: 'Главная',
            navRestaurants: 'Рестораны',
            navReservation: 'Бронирование',
            navReviews: 'Отзывы',
            navLanguage: 'Язык',
            footerMotto: 'FoodieLocal – давайте вместе открывать местные вкусы.',
            footerCopyright: function() { return '© ' + new Date().getFullYear() + ' FoodieLocal. Все права защищены.'; }
        }
    };

    /**
     * Get current language from localStorage
     * @returns {string} Language code ('az' or 'en')
     */
    function getCurrentLanguage() {
        return localStorage.getItem('foodielocalDil') || 'az';
    }

    /**
     * Get translation for a key
     * @param {string} key - Translation key
     * @returns {string} Translated text
     */
    function getTranslation(key) {
        const lang = getCurrentLanguage();
        return translations[lang]?.[key] || key;
    }

    /**
     * Show message in message area
     * @param {string} text - Message text
     * @param {string} type - Message type ('success' or 'error')
     */
    function showMessage(text, type) {
        if (!messageArea || !text) return;

        messageArea.innerHTML = '';
        const alertClass = type === 'success' ? 'alert-success' : 'alert-danger';
        const alert = document.createElement('div');
        alert.className = `alert ${alertClass}`;
        alert.setAttribute('role', 'alert');
        alert.innerHTML = '<i class="bi ' + (type === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-triangle-fill') + ' me-2"></i>' +
                         '<span>' + text + '</span>';
        messageArea.appendChild(alert);

        // Auto-hide after 5 seconds
        setTimeout(() => {
            if (alert.parentNode) {
                alert.style.transition = 'opacity 0.3s ease';
                alert.style.opacity = '0';
                setTimeout(() => {
                    if (alert.parentNode) {
                        alert.remove();
                    }
                }, 300);
            }
        }, 5000);
    }

    /**
     * Set loading state for a button
     * @param {HTMLElement} button - Button element
     * @param {boolean} isLoading - Loading state
     * @param {string} originalText - Original button text
     */
    function setLoading(button, isLoading, originalText) {
        if (!button) return;

        if (isLoading) {
            button.disabled = true;
            button.dataset.originalText = button.textContent || originalText || getTranslation('verifyResendButton');
            button.textContent = getTranslation('verifyLoading');
            button.style.cursor = 'not-allowed';
        } else {
            button.disabled = false;
            button.textContent = originalText || button.dataset.originalText || getTranslation('verifyResendButton');
            button.style.cursor = 'pointer';
        }
    }

    /**
     * Validate email address format
     * @param {string} email - Email address to validate
     * @returns {boolean} True if valid
     */
    function isValidEmail(email) {
        if (!email || typeof email !== 'string') return false;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email.trim());
    }

    /**
     * Validate email input
     * @returns {boolean} True if valid
     */
    function validateEmail() {
        if (!emailInput) {
            showMessage(getTranslation('verifyErrorEmail'), 'error');
            return false;
        }

        const email = emailInput.value.trim();
        if (!email) {
            showMessage(getTranslation('verifyErrorEmail'), 'error');
            emailInput.focus();
            return false;
        }

        if (!isValidEmail(email)) {
            showMessage(getTranslation('verifyErrorEmailInvalid'), 'error');
            emailInput.focus();
            return false;
        }

        return true;
    }

    /**
     * Get CSRF token if available
     * @returns {string|null} CSRF token
     */
    function getCsrfToken() {
        const tokenMeta = document.querySelector('meta[name="_csrf"]');
        return tokenMeta ? tokenMeta.content : null;
    }

    /**
     * Get CSRF header name if available
     * @returns {string} CSRF header name
     */
    function getCsrfHeader() {
        const headerMeta = document.querySelector('meta[name="_csrf_header"]');
        return headerMeta ? headerMeta.content : 'X-CSRF-TOKEN';
    }

    /**
     * Resend confirmation email
     */
    async function resendEmail() {
        // Get email from input or hidden field
        let email = '';
        if (emailInput && emailInput.value.trim()) {
            email = emailInput.value.trim();
        } else if (hiddenEmail && hiddenEmail.value) {
            email = hiddenEmail.value.trim();
        }

        // Validate email
        if (!email) {
            if (!validateEmail()) return;
            email = emailInput.value.trim();
        } else if (!isValidEmail(email)) {
            showMessage(getTranslation('verifyErrorEmailInvalid'), 'error');
            if (emailInput) {
                emailInput.focus();
            }
            return;
        }

        const originalText = resendEmailBtn ? resendEmailBtn.textContent : '';
        setLoading(resendEmailBtn, true, originalText);

        try {
            const formData = new FormData();
            formData.append('email', email);

            const headers = {
                'Accept': 'application/json'
            };

            const csrfToken = getCsrfToken();
            if (csrfToken) {
                headers[getCsrfHeader()] = csrfToken;
            }

            const response = await fetch('/reservation/resend-email', {
                method: 'POST',
                headers: headers,
                body: formData
            });

            // Check if response is successful
            const isSuccess = response.ok || (response.status >= 200 && response.status < 300);

            // Get response text
            let responseText = '';
            let result = null;

            try {
                responseText = await response.text();

                // Try to parse as JSON if response is not empty
                if (responseText && responseText.trim()) {
                    try {
                        result = JSON.parse(responseText);
                    } catch (e) {
                        // Not JSON, treat as plain text
                        result = { message: responseText.trim() };
                    }
                }
            } catch (e) {
                console.error('Error reading response:', e);
            }

            // Show appropriate message
            if (isSuccess) {
                // Success - use message from response or default success message
                const message = result?.message ||
                               result?.success ||
                               (typeof result === 'string' ? result : null) ||
                               (responseText && responseText.trim() ? responseText.trim() : null) ||
                               getTranslation('verifySuccessSend');
                showMessage(message, 'success');
            } else {
                // Error - use error message from response or default error message
                const message = result?.message ||
                               result?.error ||
                               (typeof result === 'string' ? result : null) ||
                               (responseText && responseText.trim() ? responseText.trim() : null) ||
                               response.statusText ||
                               getTranslation('verifyErrorSend');
                showMessage(message, 'error');
            }
        } catch (error) {
            console.error('Error resending email:', error);
            // Network error or other exception
            showMessage(getTranslation('verifyErrorGeneral') + ': ' + (error.message || getTranslation('verifyErrorSend')), 'error');
        } finally {
            setLoading(resendEmailBtn, false, originalText);
        }
    }

    /**
     * Apply translations to all verify page elements
     */
    function applyVerifyTranslations() {
        const lang = getCurrentLanguage();
        const dict = translations[lang] || translations.az;

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(function(element) {
            const key = element.getAttribute('data-i18n');
            if (key && dict[key]) {
                // Handle function values (like footerCopyright with dynamic year)
                let value = dict[key];
                if (typeof value === 'function') {
                    value = value();
                }

                // For nav links with icons, find the span and update it
                const span = element.querySelector('span[data-i18n="' + key + '"]') || element.querySelector('span');
                if (span && element.children.length > 0) {
                    span.textContent = value;
                } else if (element.children.length > 0) {
                    // Clear text nodes and keep children
                    Array.from(element.childNodes).forEach(node => {
                        if (node.nodeType === Node.TEXT_NODE) {
                            node.remove();
                        }
                    });
                    // Add text after last child
                    if (element.lastChild) {
                        element.insertAdjacentText('beforeend', value);
                    } else {
                        element.textContent = value;
                    }
                } else {
                    // Simple text update for elements without children
                    element.textContent = value;
                }
            }
        });

        // Update page title - check which page we're on
        const pageTitleEl = document.querySelector('title');
        if (pageTitleEl) {
            // Check if we're on verify-info or verify-result page
            const isInfoPage = document.querySelector('[data-i18n="verifyInfoTitle"]');
            const isResultPage = document.querySelector('[data-i18n="verifyResultTitle"]');

            if (isInfoPage && dict.verifyInfoPageTitle) {
                pageTitleEl.textContent = dict.verifyInfoPageTitle;
            } else if (isResultPage && dict.verifyResultPageTitle) {
                pageTitleEl.textContent = dict.verifyResultPageTitle;
            }
        }

        // Update email placeholder
        if (emailInput) {
            emailInput.placeholder = dict.verifyEmailPlaceholder;
        }

        // Update resend button (only if not in loading state)
        if (resendEmailBtn) {
            if (!resendEmailBtn.disabled) {
                resendEmailBtn.textContent = dict.verifyResendButton;
                resendEmailBtn.dataset.originalText = dict.verifyResendButton;
            } else {
                resendEmailBtn.dataset.originalText = dict.verifyResendButton;
            }
        }

        // Update document language
        document.documentElement.setAttribute('lang', lang);

        // Translate backend messages in alert divs
        const alertMessages = document.querySelectorAll('.alert span, .alert');
        alertMessages.forEach(function(alert) {
            const text = alert.textContent.trim();
            // Check for messages in all languages and translate
            if (text === 'Təsdiqlənəcək rezervasiya tapılmadı.' ||
                text === 'Reservation to be verified not found.' ||
                text === 'Бронирование для подтверждения не найдено.') {
                // Preserve icon if exists
                const icon = alert.querySelector('i');
                const translatedText = dict.verifyErrorReservationNotFound || text;
                if (icon) {
                    alert.innerHTML = icon.outerHTML + ' ' + translatedText;
                } else {
                    alert.textContent = translatedText;
                }
            }
        });
    }

    /**
     * Initialize the verify page
     */
    function init() {
        // Get DOM elements
        emailInput = document.getElementById('emailAddress') || document.getElementById('email');
        messageArea = document.getElementById('messageArea');
        hiddenEmail = document.getElementById('hiddenEmail');
        resendEmailBtn = document.getElementById('resendEmailBtn');

        // Prefill email if available from session
        if (hiddenEmail && hiddenEmail.value) {
            const emailValue = hiddenEmail.value.trim();
            if (emailValue && emailInput) {
                emailInput.value = emailValue;
            }
        }

        // Apply translations on page load
        applyVerifyTranslations();

        // Event listeners for resend button
        if (resendEmailBtn) {
            resendEmailBtn.addEventListener('click', function(e) {
                e.preventDefault();
                resendEmail();
            });
        }

        // Allow Enter key to trigger resend (if email input is focused)
        if (emailInput) {
            emailInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    if (resendEmailBtn && !resendEmailBtn.disabled) {
                        resendEmail();
                    }
                }
            });
        }

        // Handle language switching - listen to dil-secimi button clicks
        const languageButtons = document.querySelectorAll('.dil-secimi');
        languageButtons.forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const selectedLang = btn.getAttribute('data-dil');
                if (selectedLang && (selectedLang === 'az' || selectedLang === 'en' || selectedLang === 'ru')) {
                    localStorage.setItem('foodielocalDil', selectedLang);
                    applyVerifyTranslations();

                    // Update active class on buttons
                    document.querySelectorAll('.dil-secimi').forEach(function(b) {
                        b.classList.toggle('active', b.getAttribute('data-dil') === selectedLang);
                    });
                }
            });
        });

        // Listen for storage events (when language changes in another tab)
        window.addEventListener('storage', function(e) {
            if (e.key === 'foodielocalDil') {
                applyVerifyTranslations();
            }
        });

        // Set initial active button state
        const currentLang = getCurrentLanguage();
        document.querySelectorAll('.dil-secimi').forEach(function(btn) {
            btn.classList.toggle('active', btn.getAttribute('data-dil') === currentLang);
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        // DOM already loaded
        setTimeout(init, 0);
    }
})();
