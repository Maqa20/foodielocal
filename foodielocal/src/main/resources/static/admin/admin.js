/**
 * Admin Panel JavaScript
 * Admin Paneli JavaScript
 * 
 * Handles tab switching, sidebar toggle, language switching, and UI animations
 * Tab dəyişdirmə, yan panel açma/bağlama, dil dəyişdirmə və UI animasiyalarını idarə edir
 */

document.addEventListener('DOMContentLoaded', () => {
    // Sidebar toggle (desktop + mobile)
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarToggleMobile = document.getElementById('sidebarToggleMobile');

    function toggleSidebar() {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('expanded');
    }
    if (sidebarToggle) sidebarToggle.addEventListener('click', toggleSidebar);
    if (sidebarToggleMobile) sidebarToggleMobile.addEventListener('click', toggleSidebar);

    // Tab navigation (hash + sidebar links)
    const links = document.querySelectorAll('.sidebar-link');
    const sections = document.querySelectorAll('.content-section');

    function setActiveTab(tab) {
        sections.forEach(s => s.classList.toggle('active', s.dataset.section === tab));
        links.forEach(l => l.classList.toggle('active', l.dataset.tab === tab));
        const title = document.querySelector('.page-title');
        if (title) {
            const el = document.querySelector(`[data-section-title="${tab}"]`);
            if (el) title.textContent = el.textContent;
        }
        // update hash without scroll
        history.replaceState(null, '', '#' + tab);
    }

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tab = link.getAttribute('data-tab');
            setActiveTab(tab);
        });
    });

    // initial tab from hash or default
    const startTab = (location.hash && location.hash.substring(1)) || 'dashboard';
    setActiveTab(startTab);

    // Confirm actions for delete/cancel buttons
    document.body.addEventListener('click', (e) => {
        const el = e.target.closest('[data-confirm]');
        if (!el) return;
        const msg = el.getAttribute('data-confirm') || 'Are you sure?';
        if (!confirm(msg)) e.preventDefault();
    });

    // Simple stats updater (placeholder for API)
    async function loadStats() {
        try {
            // TODO: replace with real fetch: /api/admin/stats
            // const res = await fetch('/api/admin/stats');
            // const data = await res.json();
            const data = {
                users: 1247,
                reviews: 3892,
                reservations: 456,
                rating: 4.7
            };
            document.querySelectorAll('.stat-card .stat-value').forEach((el, i) => {
                if (!el) return;
                if (i === 0) el.textContent = data.users;
                if (i === 1) el.textContent = data.reviews;
                if (i === 2) el.textContent = data.reservations;
                if (i === 3) el.textContent = data.rating;
            });
        } catch (err) {
            console.warn('Failed to load stats', err);
        }
    }
    loadStats();

    // Basic i18n: wire .dil-secimi to change labels across admin
    const DEFAULT_LANG = localStorage.getItem('fl_lang') || 'az';
    const translations = {
        az: {
            pageTitle: 'Admin Panel - FoodieLocal',
            adminTitle: 'FoodieLocal Admin',
            menuDashboard: 'Panel',
            menuUsers: 'İstifadəçilər',
            menuReviews: 'Rəylər',
            menuReservations: 'Rezervasiyalar',
            menuSettings: 'Parametrlər',
            dashboardTitle: 'Panel',
            welcomeTitle: 'FoodieLocal Admin-ə xoş gəlmisiniz',
            welcomeMessage: 'İstifadəçiləri, rəyləri və rezervasiyaları idarə edin.',
            statUsers: 'Ümumi istifadəçilər',
            statReviews: 'Ümumi rəylər',
            statReservations: 'Rezervasiyalar',
            statRating: 'Orta qiymət',
            recentActivity: 'Son fəaliyyət',
            newReview: 'Yeni rəy',
            newUser: 'Yeni istifadəçi',
            newReservation: 'Yeni rezervasiya',
            reviewUpdate: 'Rəy yeniləndi',
            usersTitle: 'İstifadəçilərin idarəsi',
            addUserButton: 'İstifadəçi əlavə et',
            tableId: 'ID',
            tableName: 'Ad',
            tableEmail: 'Email',
            tableRole: 'Rol',
            tableStatus: 'Status',
            tableActions: 'Əməliyyatlar',
            editButton: 'Redaktə et',
            deleteButton: 'Sil',
            reviewsTitle: 'Rəylərin idarəsi',
            addReviewButton: 'Rəy əlavə et',
            reservationsTitle: 'Rezervasiya idarəçiliyi',
            addReservationButton: 'Rezervasiya əlavə et',
            settingsTitle: 'Parametrlər',
            saveSettings: 'Yadda saxla',
            cancelButton: 'Ləğv et',
            saveButton: 'Yadda saxla',
            roleUser: 'İstifadəçi',
            roleAdmin: 'Admin'
        },
        en: {
            pageTitle: 'Admin Panel - FoodieLocal',
            adminTitle: 'FoodieLocal Admin',
            menuDashboard: 'Dashboard',
            menuUsers: 'Users',
            menuReviews: 'Reviews',
            menuReservations: 'Reservations',
            menuSettings: 'Settings',
            dashboardTitle: 'Dashboard',
            welcomeTitle: 'Welcome to FoodieLocal Admin',
            welcomeMessage: 'Manage users, reviews and reservations with ease.',
            statUsers: 'Total Users',
            statReviews: 'Total Reviews',
            statReservations: 'Reservations',
            statRating: 'Avg. Rating',
            recentActivity: 'Recent Activity',
            newReview: 'New Review',
            newUser: 'New User',
            newReservation: 'New Reservation',
            reviewUpdate: 'Review Updated',
            usersTitle: 'User Management',
            addUserButton: 'Add User',
            tableId: 'ID',
            tableName: 'Name',
            tableEmail: 'Email',
            tableRole: 'Role',
            tableStatus: 'Status',
            tableActions: 'Actions',
            editButton: 'Edit',
            deleteButton: 'Delete',
            reviewsTitle: 'Review Management',
            addReviewButton: 'Add Review',
            reservationsTitle: 'Reservation Management',
            addReservationButton: 'Add Reservation',
            settingsTitle: 'Settings',
            saveSettings: 'Save Settings',
            cancelButton: 'Cancel',
            saveButton: 'Save',
            roleUser: 'User',
            roleAdmin: 'Admin'
        }
    };

    function applyLanguage(lang) {
        const dict = translations[lang] || translations.az;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (!key) return;
            const val = dict[key];
            if (val === undefined) return;
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = val;
            else el.textContent = val;
        });
        // page title attribute if present
        const titleEl = document.querySelector('[data-i18n="pageTitle"]');
        if (titleEl) document.title = dict.pageTitle || document.title;
        document.querySelectorAll('.dil-secimi').forEach(b => b.classList.toggle('active', b.getAttribute('data-dil') === lang));
        localStorage.setItem('fl_lang', lang);
        document.documentElement.lang = (lang === 'en') ? 'en' : 'az';
    }

    document.querySelectorAll('.dil-secimi').forEach(btn => {
        btn.addEventListener('click', () => {
            applyLanguage(btn.getAttribute('data-dil') || 'az');
        });
    });
    applyLanguage(DEFAULT_LANG);

    // Small helpers for modals / actions (placeholders)
    document.body.addEventListener('click', (e) => {
        const el = e.target.closest('.action-approve');
        if (!el) return;
        const id = el.getAttribute('data-id');
        // TODO: call API to approve review
        el.closest('tr')?.classList.add('approved');
        alert('Approved id: ' + id);
    });

    // Accessibility: keyboard navigation for sidebar links
    document.querySelectorAll('.sidebar-link').forEach(link => link.setAttribute('tabindex', '0'));
});

