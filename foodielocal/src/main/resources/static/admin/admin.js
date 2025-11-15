/**
 * Admin Panel JavaScript
 * Admin Paneli JavaScript
 * 
 * Handles tab switching, sidebar toggle, language switching, and UI animations
 * Tab dəyişdirmə, yan panel açma/bağlama, dil dəyişdirmə və UI animasiyalarını idarə edir
 */

document.addEventListener('DOMContentLoaded', function () {
    // Translation dictionary / Tərcümə lüğəti
    const translationDictionary = {
        az: {
            // Page title / Səhifə başlığı
            pageTitle: 'Admin Paneli - Coursora',
            adminTitle: 'Coursora Admin',
            dashboardTitle: 'İdarə Paneli',
            logoutButton: 'Çıxış',
            
            // Menu items / Menyu elementləri
            menuUsers: 'İstifadəçilər',
            menuMovies: 'Filmlər',
            menuCategories: 'Kateqoriyalar',
            menuReviews: 'Rəylər',
            
            // Section titles / Bölmə başlıqları
            usersTitle: 'İstifadəçi İdarəetməsi',
            moviesTitle: 'Film İdarəetməsi',
            categoriesTitle: 'Kateqoriya İdarəetməsi',
            reviewsTitle: 'Rəy İdarəetməsi',
            
            // Buttons / Düymələr
            addUserButton: 'İstifadəçi Əlavə Et',
            addMovieButton: 'Film Əlavə Et',
            addCategoryButton: 'Kateqoriya Əlavə Et',
            addReviewButton: 'Rəy Əlavə Et',
            editButton: 'Redaktə Et',
            deleteButton: 'Sil',
            saveButton: 'Saxla',
            cancelButton: 'Ləğv Et',
            
            // Table headers / Cədvəl başlıqları
            tableId: 'ID',
            tableName: 'Ad',
            tableEmail: 'E-poçt',
            tableRole: 'Rol',
            tableStatus: 'Status',
            tableActions: 'Əməliyyatlar',
            tableTitle: 'Başlıq',
            tableCategory: 'Kateqoriya',
            tableYear: 'İl',
            tableRating: 'Reytinq',
            tableDescription: 'Təsvir',
            tableMovieCount: 'Film Sayı',
            tableUser: 'İstifadəçi',
            tableMovie: 'Film',
            tableComment: 'Şərh',
            
            // Modal titles / Modal başlıqları
            addUserModalTitle: 'Yeni İstifadəçi Əlavə Et',
            addMovieModalTitle: 'Yeni Film Əlavə Et',
            addCategoryModalTitle: 'Yeni Kateqoriya Əlavə Et',
            addReviewModalTitle: 'Yeni Rəy Əlavə Et',
            
            // Roles / Rollar
            roleUser: 'İstifadəçi',
            roleAdmin: 'Admin'
        },
        en: {
            // Page title / Səhifə başlığı
            pageTitle: 'Admin Panel - Coursora',
            adminTitle: 'Coursora Admin',
            dashboardTitle: 'Dashboard',
            logoutButton: 'Logout',
            
            // Menu items / Menyu elementləri
            menuUsers: 'Users',
            menuMovies: 'Movies',
            menuCategories: 'Categories',
            menuReviews: 'Reviews',
            
            // Section titles / Bölmə başlıqları
            usersTitle: 'User Management',
            moviesTitle: 'Movie Management',
            categoriesTitle: 'Category Management',
            reviewsTitle: 'Review Management',
            
            // Buttons / Düymələr
            addUserButton: 'Add User',
            addMovieButton: 'Add Movie',
            addCategoryButton: 'Add Category',
            addReviewButton: 'Add Review',
            editButton: 'Edit',
            deleteButton: 'Delete',
            saveButton: 'Save',
            cancelButton: 'Cancel',
            
            // Table headers / Cədvəl başlıqları
            tableId: 'ID',
            tableName: 'Name',
            tableEmail: 'Email',
            tableRole: 'Role',
            tableStatus: 'Status',
            tableActions: 'Actions',
            tableTitle: 'Title',
            tableCategory: 'Category',
            tableYear: 'Year',
            tableRating: 'Rating',
            tableDescription: 'Description',
            tableMovieCount: 'Movie Count',
            tableUser: 'User',
            tableMovie: 'Movie',
            tableComment: 'Comment',
            
            // Modal titles / Modal başlıqları
            addUserModalTitle: 'Add New User',
            addMovieModalTitle: 'Add New Movie',
            addCategoryModalTitle: 'Add New Category',
            addReviewModalTitle: 'Add New Review',
            
            // Roles / Rollar
            roleUser: 'User',
            roleAdmin: 'Admin'
        }
    };

    // Get language buttons and translatable elements / Dil düymələrini və tərcümə olunan elementləri əldə et
    const languageButtons = document.querySelectorAll('.dil-secimi');
    const translatableElements = document.querySelectorAll('[data-i18n]');

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
                // Fade out / Solma
                element.style.opacity = '0';
                element.style.transform = 'translateY(-3px)';
                
                setTimeout(function () {
                    element.textContent = translations[key];
                    // Fade in / Görünmə
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, 150);
            }
        });

        // Update page title / Səhifə başlığını yenilə
        if (translations.pageTitle) {
            document.title = translations.pageTitle;
        }

        // Update document language attribute / Sənəd dil atributunu yenilə
        document.documentElement.setAttribute('lang', languageCode);
        
        // Save language preference / Dil seçimini saxla
        localStorage.setItem('coursoraLanguage', languageCode);

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
    const savedLanguage = localStorage.getItem('coursoraLanguage') || 'en';
    applyLanguage(savedLanguage);

    /**
     * Sidebar toggle functionality
     * Yan panel açma/bağlama funksionallığı
     */
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarToggleMobile = document.getElementById('sidebarToggleMobile');
    const mainContent = document.getElementById('mainContent');

    // Desktop sidebar toggle / Desktop yan panel açma/bağlama
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function () {
            sidebar.classList.toggle('active');
        });
    }

    // Mobile sidebar toggle / Mobil yan panel açma/bağlama
    if (sidebarToggleMobile) {
        sidebarToggleMobile.addEventListener('click', function () {
            sidebar.classList.toggle('active');
        });
    }

    // Close sidebar when clicking outside on mobile / Mobil cihazlarda xaricə kliklədikdə yan paneli bağla
    if (mainContent) {
        mainContent.addEventListener('click', function (event) {
            if (window.innerWidth <= 768 && sidebar.classList.contains('active')) {
                if (!event.target.closest('.sidebar')) {
                    sidebar.classList.remove('active');
                }
            }
        });
    }

    /**
     * Tab switching functionality
     * Tab dəyişdirmə funksionallığı
     */
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const contentSections = document.querySelectorAll('.content-section');

    sidebarLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all links and sections / Bütün linklərdən və bölmələrdən aktiv sinifi sil
            sidebarLinks.forEach(function (l) {
                l.classList.remove('active');
            });
            contentSections.forEach(function (section) {
                section.classList.remove('active');
            });
            
            // Add active class to clicked link / Kliklənmiş linkə aktiv sinifi əlavə et
            this.classList.add('active');
            
            // Show corresponding section with animation / Uyğun bölməni animasiya ilə göstər
            const targetSection = document.getElementById(targetTab + 'Section');
            if (targetSection) {
                targetSection.classList.add('active');
            }
            
            // Close sidebar on mobile after selection / Seçimdən sonra mobil cihazlarda yan paneli bağla
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });

    /**
     * Smooth scroll for anchor links
     * Anchor linklər üçün yumşaq scroll
     */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (event) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                event.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    /**
     * Modal animation enhancement
     * Modal animasiya təkmilləşdirməsi
     */
    const modals = document.querySelectorAll('.modal');
    modals.forEach(function (modal) {
        modal.addEventListener('show.bs.modal', function () {
            this.querySelector('.modal-content').style.opacity = '0';
            this.querySelector('.modal-content').style.transform = 'translateY(-20px)';
        });
        
        modal.addEventListener('shown.bs.modal', function () {
            const content = this.querySelector('.modal-content');
            setTimeout(function () {
                content.style.transition = 'all 0.3s ease';
                content.style.opacity = '1';
                content.style.transform = 'translateY(0)';
            }, 10);
        });
    });

    /**
     * Table row hover effects
     * Cədvəl sətir hover effektləri
     */
    const tableRows = document.querySelectorAll('.table-dark tbody tr');
    tableRows.forEach(function (row) {
        row.addEventListener('mouseenter', function () {
            this.style.transition = 'all 0.3s ease';
        });
    });

    /**
     * Responsive sidebar handling
     * Responsiv yan panel idarəetməsi
     */
    function handleResize() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check / İlkin yoxlama
});

