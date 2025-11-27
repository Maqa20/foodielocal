// Enhanced detail page JS
document.addEventListener('DOMContentLoaded', () => {
    const DEFAULT_LANG = localStorage.getItem('fl_lang') || 'az';
const translations = {
  az: {
    navHome: 'Əsas',
    navRestaurants: 'Restoranlar',
    navReservation: 'Rezervasiya',
    navReviews: 'Rəylər',
    navLanguage: 'Dil',
    detailReserveButton: 'Rezervasiya et',
    detailBackButton: 'Restoranlara dön',
    detailAboutTitle: 'Restoran haqqında',
    detailAboutEmpty: 'Restoran haqqında məlumat tezliklə əlavə olunacaq.',
    detailAboutLongEmpty: 'Restoran haqqında geniş məlumat burada göstəriləcək.',
    detailMenuTitle: 'Menyu',
    detailMenuEmpty: 'Menyu məlumatı hələ əlavə olunmayıb.',
    detailSignatureTitle: 'Məşhur yeməklər',
    detailSignatureEmpty: 'Məşhur yeməklər tezliklə əlavə olunacaq.',
    detailInfoTitle: 'Əlaqə məlumatı',
    detailReserveButtonSecondary: 'Masa rezerv et',
    detailBackButtonSecondary: 'Restoran siyahısına qayıt',
    detailOpeningHours: 'Hər gün 10:00 - 23:00',
    detailReviewsTitle: 'Rəylər',
    detailReviewsEmpty: 'Hələ rəy yoxdur.',
    detailActionsTitle: 'Sürətli keçidlər',
    detailCuisine: 'Mətbəx'
  },
  en: {
    navHome: 'Home',
    navRestaurants: 'Restaurants',
    navReservation: 'Reservation',
    navReviews: 'Reviews',
    navLanguage: 'Language',
    detailReserveButton: 'Reserve',
    detailBackButton: 'Back to restaurants',
    detailAboutTitle: 'About the restaurant',
    detailAboutEmpty: 'Restaurant information will be added soon.',
    detailAboutLongEmpty: 'Detailed restaurant information will be shown here.',
    detailMenuTitle: 'Menu',
    detailMenuEmpty: 'Menu is not available yet.',
    detailSignatureTitle: 'Signature dishes',
    detailSignatureEmpty: 'Signature dishes will be added soon.',
    detailInfoTitle: 'Contact info',
    detailReserveButtonSecondary: 'Book a table',
    detailBackButtonSecondary: 'Return to list',
    detailOpeningHours: 'Every day 10:00 AM - 11:00 PM',
    detailReviewsTitle: 'Reviews',
    detailReviewsEmpty: 'No reviews yet.',
    detailActionsTitle: 'Quick links',
    detailCuisine: 'Cuisine'
  }
};


    function applyLanguage(lang) {
        const dict = translations[lang] || translations['az'];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (key && dict[key]) {
                el.textContent = dict[key];
            }
        });
        localStorage.setItem('fl_lang', lang);
    }

    document.querySelectorAll('.dil-secimi').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-dil') || 'az';
            applyLanguage(lang);
        });
    });

    applyLanguage(DEFAULT_LANG);

    const PLACEHOLDER = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80';
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', () => {
            if (img.src !== PLACEHOLDER) img.src = PLACEHOLDER;
        });
    });

    function showToast(message) {
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.position = 'fixed';
        toast.style.right = '20px';
        toast.style.bottom = '20px';
        toast.style.padding = '10px 14px';
        toast.style.background = 'rgba(0,0,0,0.75)';
        toast.style.color = '#fff';
        toast.style.borderRadius = '6px';
        toast.style.zIndex = 9999;
        toast.style.fontSize = '14px';
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 1800);
    }

    document.querySelectorAll('.detail-info-list li span').forEach(span => {
        span.style.cursor = 'pointer';
        span.title = 'Click to copy';
        span.addEventListener('click', async () => {
            const text = span.textContent.trim();
            try {
                await navigator.clipboard.writeText(text);
                showToast('Kopyalandı: ' + text);
            } catch (e) {
                showToast('Kopyalama mümkün olmadı.');
            }
        });
        span.setAttribute('tabindex', '0');
        span.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                span.click();
            }
        });
    });
});