/**
 * Authentication Pages JavaScript
 * Giriş Səhifələri JavaScript
 * 
 * Handles language switching, password visibility toggle, and UI animations
 * Dil dəyişdirmə, şifrə görünürlüyü dəyişdirmə və UI animasiyalarını idarə edir
 */

document.addEventListener('DOMContentLoaded', function () {
    // Translation dictionary / Tərcümə lüğəti
    const translationDictionary = {
        az: {
            // Page title / Səhifə başlığı
            pageTitle: 'Giriş - FoodieLocal',
            registerPageTitle: 'Qeydiyyat - FoodieLocal',

            // Login page / Giriş səhifəsi
            loginTitle: 'Xoş Gəlmisiniz',
            loginSubtitle: 'FoodieLocal hesabınıza daxil olun',
            emailLabel: 'E-poçt Ünvanı',
            emailPlaceholder: 'E-poçtunuzu daxil edin',
            passwordLabel: 'Şifrə',
            passwordPlaceholder: 'Şifrənizi daxil edin',
            rememberMe: 'Məni xatırla',
            forgotPassword: 'Şifrəni unutmusunuz?',
            loginButton: 'Daxil Ol',
            noAccount: 'Hesabınız yoxdur?',
            registerLink: 'Hesab Yarat',

            // Register page / Qeydiyyat səhifəsi
            registerTitle: 'Hesab Yarat',
            registerSubtitle: 'FoodieLocal-ə qoşulun və dadlı səyahətinizə başlayın',
            fullNameLabel: 'Tam Ad',
            fullNamePlaceholder: 'Tam adınızı daxil edin',
            confirmPasswordLabel: 'Şifrəni Təsdiqlə',
            confirmPasswordPlaceholder: 'Şifrənizi təsdiqləyin',
            agreeTerms: 'Razılaşıram',
            termsLink: 'Şərtlər və Qaydalar',
            registerButton: 'Hesab Yarat',
            haveAccount: 'Artıq hesabınız var?',
            loginLink: 'Daxil Ol'
        },
        en: {
            // Page title / Səhifə başlığı
            pageTitle: 'Login - FoodieLocal',
            registerPageTitle: 'Register - FoodieLocal',

            // Login page / Giriş səhifəsi
            loginTitle: 'Welcome Back',
            loginSubtitle: 'Sign in to your FoodieLocal account',
            emailLabel: 'Email Address',
            emailPlaceholder: 'Enter your email',
            passwordLabel: 'Password',
            passwordPlaceholder: 'Enter your password',
            rememberMe: 'Remember me',
            forgotPassword: 'Forgot password?',
            loginButton: 'Sign In',
            noAccount: 'Don\'t have an account?',
            registerLink: 'Create Account',

            // Register page / Qeydiyyat səhifəsi
            registerTitle: 'Create Account',
            registerSubtitle: 'Join FoodieLocal and start your culinary journey',
            fullNameLabel: 'Full Name',
            fullNamePlaceholder: 'Enter your full name',
            confirmPasswordLabel: 'Confirm Password',
            confirmPasswordPlaceholder: 'Confirm your password',
            agreeTerms: 'I agree to the',
            termsLink: 'Terms and Conditions',
            registerButton: 'Create Account',
            haveAccount: 'Already have an account?',
            loginLink: 'Sign In'
        },
        ru: {
            // Page title / Заголовок страницы
            pageTitle: 'Вход - FoodieLocal',
            registerPageTitle: 'Регистрация - FoodieLocal',

            // Login page / Страница входа
            loginTitle: 'Добро пожаловать',
            loginSubtitle: 'Войдите в свой аккаунт FoodieLocal',
            emailLabel: 'Адрес электронной почты',
            emailPlaceholder: 'Введите ваш email',
            passwordLabel: 'Пароль',
            passwordPlaceholder: 'Введите ваш пароль',
            rememberMe: 'Запомнить меня',
            forgotPassword: 'Забыли пароль?',
            loginButton: 'Войти',
            noAccount: 'Нет аккаунта?',
            registerLink: 'Создать аккаунт',

            // Register page / Страница регистрации
            registerTitle: 'Создать аккаунт',
            registerSubtitle: 'Присоединяйтесь к FoodieLocal и начните свое кулинарное путешествие',
            fullNameLabel: 'Полное имя',
            fullNamePlaceholder: 'Введите ваше полное имя',
            confirmPasswordLabel: 'Подтвердите пароль',
            confirmPasswordPlaceholder: 'Подтвердите ваш пароль',
            agreeTerms: 'Я согласен с',
            termsLink: 'Условиями и положениями',
            registerButton: 'Создать аккаунт',
            haveAccount: 'Уже есть аккаунт?',
            loginLink: 'Войти'
        }
    };

    // Get language buttons and translatable elements / Dil düymələrini və tərcümə olunan elementləri əldə et
    const languageButtons = document.querySelectorAll('.dil-secimi');
    const translatableElements = document.querySelectorAll('[data-i18n]');
    const translatablePlaceholders = document.querySelectorAll('[data-i18n-placeholder]');

    /**
     * Apply language translations with smooth animation
     * Yumşaq animasiya ilə dil tərcümələrini tətbiq et
     */
    function applyLanguage(languageCode) {
        const translations = translationDictionary[languageCode];
        if (!translations) {
            return;
        }

        // Add switching class for animation / Animasiya üçün dəyişmə sinifini əlavə et
        document.body.classList.add('language-switching');

        // Update text content with animation / Məzmunu animasiya ilə yenilə
        translatableElements.forEach(function (element) {
            const key = element.getAttribute('data-i18n');
            if (key && translations[key]) {
                // Skip title element - it's handled separately / Title elementini atla - o ayrıca idarə olunur
                if (element.tagName === 'TITLE') {
                    return;
                }

                // Fade out / Solma
                element.style.opacity = '0';
                element.style.transform = 'translateY(-5px)';

                setTimeout(function () {
                    // Save all child elements (icons, spans, etc.) / Bütün uşaq elementləri saxla
                    const childElements = Array.from(element.children);

                    // Remove all text nodes to avoid duplication / Təkrarlanmanın qarşısını almaq üçün bütün mətn node-larını sil
                    const allNodes = Array.from(element.childNodes);
                    allNodes.forEach(function(node) {
                        if (node.nodeType === Node.TEXT_NODE) {
                            node.remove();
                        }
                    });

                    if (childElements.length > 0) {
                        // Has child elements - preserve them and add text / Uşaq elementlər var - onları qoru və mətn əlavə et
                        // Find the last element to add text after it / Mətni ondan sonra əlavə etmək üçün son elementi tap
                        const lastElement = childElements[childElements.length - 1];

                        // Add text after last element / Son elementdən sonra mətn əlavə et
                        if (lastElement.nextSibling) {
                            lastElement.parentNode.insertBefore(
                                document.createTextNode(' ' + translations[key]),
                                lastElement.nextSibling
                            );
                        } else {
                            element.appendChild(document.createTextNode(' ' + translations[key]));
                        }
                    } else {
                        // No child elements, simple text replacement / Uşaq element yoxdur, sadə mətn əvəzləməsi
                        element.textContent = translations[key];
                    }

                    // Fade in / Görünmə
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, 150);
            }
        });

        // Update placeholders with animation / Placeholder-ləri animasiya ilə yenilə
        translatablePlaceholders.forEach(function (element) {
            const key = element.getAttribute('data-i18n-placeholder');
            if (key && translations[key]) {
                // Fade out / Solma
                element.style.opacity = '0';

                setTimeout(function () {
                    element.placeholder = translations[key];
                    // Fade in / Görünmə
                    element.style.opacity = '1';
                }, 150);
            }
        });

        // Update page title / Səhifə başlığını yenilə
        const currentPath = window.location.pathname;
        if (currentPath.includes('/register')) {
            document.title = translations.registerPageTitle || translations.pageTitle;
        } else {
            document.title = translations.pageTitle;
        }

        // Update document language attribute / Sənəd dil atributunu yenilə
        document.documentElement.setAttribute('lang', languageCode);

        // Save language preference / Dil seçimini saxla
        localStorage.setItem('foodielocalDil', languageCode);

        // Update active button state / Aktiv düymə vəziyyətini yenilə
        languageButtons.forEach(function (btn) {
            btn.classList.remove('active');
            if (btn.getAttribute('data-dil') === languageCode) {
                btn.classList.add('active');
            }
        });

        // Remove switching class after animation / Animasiyadan sonra dəyişmə sinifini sil
        setTimeout(function () {
            document.body.classList.remove('language-switching');
        }, 300);
    }

    // Add event listeners to language buttons / Dil düymələrinə hadisə dinləyiciləri əlavə et
    languageButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const selectedLanguage = button.getAttribute('data-dil');
            applyLanguage(selectedLanguage);
        });
    });

    // Load saved language or default to English / Saxlanılmış dili yüklə və ya ingiliscəni standart olaraq təyin et
    const savedLanguage = localStorage.getItem('foodielocalDil') || 'en';
    applyLanguage(savedLanguage);

    /**
     * Password visibility toggle functionality
     * Şifrə görünürlüyü dəyişdirmə funksionallığı
     */
    const togglePassword = document.getElementById('togglePassword');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            const icon = document.getElementById('toggleIcon');
            if (icon) {
                icon.classList.toggle('bi-eye');
                icon.classList.toggle('bi-eye-slash');
            }
        });
    }

    if (toggleConfirmPassword && confirmPasswordInput) {
        toggleConfirmPassword.addEventListener('click', function () {
            const type = confirmPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            confirmPasswordInput.setAttribute('type', type);

            const icon = document.getElementById('toggleConfirmIcon');
            if (icon) {
                icon.classList.toggle('bi-eye');
                icon.classList.toggle('bi-eye-slash');
            }
        });
    }

    /**
     * Form validation animation
     * Form validasiya animasiyası
     */
    const form = document.querySelector('.auth-form');
    if (form) {
        form.addEventListener('submit', function (event) {
            const inputs = form.querySelectorAll('input[required]');
            let isValid = true;

            inputs.forEach(function (input) {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#dc3545';
                    input.style.animation = 'shake 0.5s';

                    setTimeout(function () {
                        input.style.animation = '';
                    }, 500);
                } else {
                    input.style.borderColor = '#e0e0e0';
                }
            });

            if (!isValid) {
                event.preventDefault();
            }
        });

        // Remove error styling on input / Girişdə xəta üslubunu sil
        const inputs = form.querySelectorAll('input');
        inputs.forEach(function (input) {
            input.addEventListener('input', function () {
                if (this.style.borderColor === 'rgb(220, 53, 69)') {
                    this.style.borderColor = '#e0e0e0';
                }
            });
        });
    }
});

// Add shake animation for form validation / Form validasiyası üçün shake animasiyası əlavə et
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);