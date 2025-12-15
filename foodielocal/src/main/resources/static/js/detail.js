document.addEventListener('DOMContentLoaded', () => {
    // Simple placeholder for future detail-page specific JS (e.g. dynamic sections, i18n)
    // Currently, data is expected to come from the backend via Thymeleaf.
});

{ 
// Replacement: enhanced detail page JS
document.addEventListener('DOMContentLoaded', () => {
    const DEFAULT_LANG = localStorage.getItem('foodielocalDil') || 'az';

    // Restaurant descriptions based on restaurant name keywords
    const getRestaurantDescription = function(restaurantName, lang) {
        if (!restaurantName) return '';

        const name = restaurantName.toLowerCase();
        const descriptions = {
            az: {
                seafood: 'Təzə balıq və dəniz məhsulları ilə tanınır. Premium xidmət və zərif atmosfer ilə unudulmaz yemək təcrübəsi təqdim edir. Dəniz məhsulları, balıq, qarides, midyə və digər dəniz ləzzətləri ilə zəngin menyu təqdim edir.',
                italian: 'İtalyan mətbəxinin ən yaxşı nümunələrini təqdim edir. Əsl pasta və pizza reseptləri ilə məşhurdur. Klassik İtalyan yeməkləri, təzə makaron, risotto və ənənəvi İtalyan desertləri ilə dadlı bir təcrübə təqdim edir.',
                pizza: 'İtalyan mətbəxinin ən yaxşı nümunələrini təqdim edir. Əsl pasta və pizza reseptləri ilə məşhurdur. Klassik İtalyan yeməkləri, təzə makaron, risotto və ənənəvi İtalyan desertləri ilə dadlı bir təcrübə təqdim edir.',
                pasta: 'İtalyan mətbəxinin ən yaxşı nümunələrini təqdim edir. Əsl pasta və pizza reseptləri ilə məşhurdur. Klassik İtalyan yeməkləri, təzə makaron, risotto və ənənəvi İtalyan desertləri ilə dadlı bir təcrübə təqdim edir.',
                steak: 'Amerikan BBQ və steak mətbəxi. Premium ət keyfiyyəti və açıq ocaqda hazırlanmış yeməklər. Ən yaxşı keyfiyyətli ət kəsimləri, qril yeməkləri və klassik BBQ dadları ilə məşhurdur.',
                grill: 'Amerikan BBQ və steak mətbəxi. Premium ət keyfiyyəti və açıq ocaqda hazırlanmış yeməklər. Ən yaxşı keyfiyyətli ət kəsimləri, qril yeməkləri və klassik BBQ dadları ilə məşhurdur.',
                bbq: 'Amerikan BBQ və steak mətbəxi. Premium ət keyfiyyəti və açıq ocaqda hazırlanmış yeməklər. Ən yaxşı keyfiyyətli ət kəsimləri, qril yeməkləri və klassik BBQ dadları ilə məşhurdur.',
                sushi: 'Yapon mətbəxinin incəlikləri. Sushi və sashimi üçün ən yaxşı keyfiyyətli balıq istifadə olunur. Ənənəvi Yapon texnikaları ilə hazırlanmış təzə balıq, dəniz məhsulları və klassik Yapon yeməkləri.',
                japanese: 'Yapon mətbəxinin incəlikləri. Sushi və sashimi üçün ən yaxşı keyfiyyətli balıq istifadə olunur. Ənənəvi Yapon texnikaları ilə hazırlanmış təzə balıq, dəniz məhsulları və klassik Yapon yeməkləri.',
                french: 'Fransız mətbəxinin klassik nümunələri. Şef tərəfindən hazırlanmış xüsusi menyular və geniş şərab seçimi. Ənənəvi Fransız yeməkləri, zərif souslar və incə desertlər ilə məşhurdur.',
                turkish: 'Türk mətbəxinin ənənəvi dadları. Kebap, döner və digər klassik türk yeməkləri. Ənənəvi reseptlər, təzə ət və zəngin ədviyyatlar ilə hazırlanmış ləzzətli yeməklər.',
                kebab: 'Türk mətbəxinin ənənəvi dadları. Kebap, döner və digər klassik türk yeməkləri. Ənənəvi reseptlər, təzə ət və zəngin ədviyyatlar ilə hazırlanmış ləzzətli yeməklər.',
                vegetarian: 'Vegetarian və vegan yeməkləri üçün ideal məkan. Təbii və orqanik məhsullardan hazırlanmış menyu. Təzə tərəvəzlər, dənli məhsullar və sağlam yemək seçimləri ilə zəngin menyu.',
                vegan: 'Vegetarian və vegan yeməkləri üçün ideal məkan. Təbii və orqanik məhsullardan hazırlanmış menyu. Təzə tərəvəzlər, dənli məhsullar və sağlam yemək seçimləri ilə zəngin menyu.',
                chinese: 'Çin mətbəxinin regional nümunələri. Szechuan, Cantonese və Pekin stilləri. Ənənəvi Çin yeməkləri, dim sum və müxtəlif regional dadlar ilə məşhurdur.',
                mexican: 'Mexican mətbəxinin rəngarəng dadları. Tacos, burritos və əsl salsa reseptləri. Ədviyyatlı yeməklər, təzə tərəvəzlər və klassik Mexican ləzzətləri ilə zəngin menyu.',
                default: 'Premium xidmət və zərif atmosfer ilə unudulmaz yemək təcrübəsi təqdim edir. Təzə məhsullar, peşəkar şeflər və diqqətli hazırlanmış menyu ilə məşhurdur.'
            },
            en: {
                seafood: 'Known for fresh fish and seafood specialties. Offers an unforgettable dining experience with premium service and elegant atmosphere. Rich menu featuring seafood, fish, shrimp, mussels and other ocean delicacies.',
                italian: 'Presents the best examples of Italian cuisine. Famous for authentic pasta and pizza recipes. Classic Italian dishes, fresh pasta, risotto and traditional Italian desserts for a delightful experience.',
                pizza: 'Presents the best examples of Italian cuisine. Famous for authentic pasta and pizza recipes. Classic Italian dishes, fresh pasta, risotto and traditional Italian desserts for a delightful experience.',
                pasta: 'Presents the best examples of Italian cuisine. Famous for authentic pasta and pizza recipes. Classic Italian dishes, fresh pasta, risotto and traditional Italian desserts for a delightful experience.',
                steak: 'American BBQ and steak cuisine. Premium meat quality and dishes prepared on an open fire. Famous for the finest quality meat cuts, grilled dishes and classic BBQ flavors.',
                grill: 'American BBQ and steak cuisine. Premium meat quality and dishes prepared on an open fire. Famous for the finest quality meat cuts, grilled dishes and classic BBQ flavors.',
                bbq: 'American BBQ and steak cuisine. Premium meat quality and dishes prepared on an open fire. Famous for the finest quality meat cuts, grilled dishes and classic BBQ flavors.',
                sushi: 'The delicacies of Japanese cuisine. The highest quality fish is used for sushi and sashimi. Fresh fish, seafood and classic Japanese dishes prepared with traditional Japanese techniques.',
                japanese: 'The delicacies of Japanese cuisine. The highest quality fish is used for sushi and sashimi. Fresh fish, seafood and classic Japanese dishes prepared with traditional Japanese techniques.',
                french: 'Classic examples of French cuisine. Chef-curated special menus and extensive wine selection. Famous for traditional French dishes, delicate sauces and fine desserts.',
                turkish: 'Traditional flavors of Turkish cuisine. Kebab, döner and other classic Turkish dishes. Delicious dishes prepared with traditional recipes, fresh meat and rich spices.',
                kebab: 'Traditional flavors of Turkish cuisine. Kebab, döner and other classic Turkish dishes. Delicious dishes prepared with traditional recipes, fresh meat and rich spices.',
                vegetarian: 'Ideal place for vegetarian and vegan dishes. Menu prepared from natural and organic products. Rich menu with fresh vegetables, grains and healthy food choices.',
                vegan: 'Ideal place for vegetarian and vegan dishes. Menu prepared from natural and organic products. Rich menu with fresh vegetables, grains and healthy food choices.',
                chinese: 'Regional examples of Chinese cuisine. Szechuan, Cantonese and Beijing styles. Famous for traditional Chinese dishes, dim sum and various regional flavors.',
                mexican: 'Colorful flavors of Mexican cuisine. Tacos, burritos and authentic salsa recipes. Rich menu with spiced dishes, fresh vegetables and classic Mexican flavors.',
                default: 'Offers an unforgettable dining experience with premium service and elegant atmosphere. Famous for fresh products, professional chefs and carefully prepared menu.'
            },
            ru: {
                seafood: 'Известен свежими морепродуктами и рыбой. Предлагает незабываемый ужин с премиальным сервисом и элегантной атмосферой. Богатое меню с морепродуктами, рыбой, креветками, мидиями и другими океанскими деликатесами.',
                italian: 'Представляет лучшие образцы итальянской кухни. Известен аутентичными рецептами пасты и пиццы. Классические итальянские блюда, свежая паста, ризотто и традиционные итальянские десерты для восхитительного опыта.',
                pizza: 'Представляет лучшие образцы итальянской кухни. Известен аутентичными рецептами пасты и пиццы. Классические итальянские блюда, свежая паста, ризотто и традиционные итальянские десерты для восхитительного опыта.',
                pasta: 'Представляет лучшие образцы итальянской кухни. Известен аутентичными рецептами пасты и пиццы. Классические итальянские блюда, свежая паста, ризотто и традиционные итальянские десерты для восхитительного опыта.',
                steak: 'Американская кухня BBQ и стейков. Премиальное качество мяса и блюда, приготовленные на открытом огне. Известен лучшими мясными нарезками, блюдами на гриле и классическими ароматами BBQ.',
                grill: 'Американская кухня BBQ и стейков. Премиальное качество мяса и блюда, приготовленные на открытом огне. Известен лучшими мясными нарезками, блюдами на гриле и классическими ароматами BBQ.',
                bbq: 'Американская кухня BBQ и стейков. Премиальное качество мяса и блюда, приготовленные на открытом огне. Известен лучшими мясными нарезками, блюдами на гриле и классическими ароматами BBQ.',
                sushi: 'Деликатесы японской кухни. Для суши и сашими используется рыба высочайшего качества. Свежая рыба, морепродукты и классические японские блюда, приготовленные традиционными японскими техниками.',
                japanese: 'Деликатесы японской кухни. Для суши и сашими используется рыба высочайшего качества. Свежая рыба, морепродукты и классические японские блюда, приготовленные традиционными японскими техниками.',
                french: 'Классические образцы французской кухни. Особые меню от шеф-повара и обширная винная карта. Известен традиционными французскими блюдами, нежными соусами и изысканными десертами.',
                turkish: 'Традиционные вкусы турецкой кухни. Кебаб, дёнер и другие классические турецкие блюда. Вкусные блюда, приготовленные по традиционным рецептам, из свежего мяса и богатых специй.',
                kebab: 'Традиционные вкусы турецкой кухни. Кебаб, дёнер и другие классические турецкие блюда. Вкусные блюда, приготовленные по традиционным рецептам, из свежего мяса и богатых специй.',
                vegetarian: 'Идеальное место для вегетарианских и веганских блюд. Меню из натуральных и органических продуктов. Богатое меню со свежими овощами, зерновыми и здоровыми вариантами питания.',
                vegan: 'Идеальное место для вегетарианских и веганских блюд. Меню из натуральных и органических продуктов. Богатое меню со свежими овощами, зерновыми и здоровыми вариантами питания.',
                chinese: 'Региональные образцы китайской кухни. Сычуаньский, кантонский и пекинский стили. Известен традиционными китайскими блюдами, дим-самом и различными региональными вкусами.',
                mexican: 'Яркие вкусы мексиканской кухни. Тако, буррито и аутентичные рецепты сальсы. Богатое меню с пряными блюдами, свежими овощами и классическими мексиканскими вкусами.',
                default: 'Предлагает незабываемый ужин с премиальным сервисом и элегантной атмосферой. Известен свежими продуктами, профессиональными поварами и тщательно подготовленным меню.'
            }
        };

        // Check for keywords in restaurant name
        if (name.includes('seafood') || name.includes('deniz') || name.includes('wave') || name.includes('blue') || name.includes('ocean') || name.includes('fish')) {
            return descriptions[lang].seafood || descriptions[lang].default;
        } else if (name.includes('italian') || name.includes('pizza') || name.includes('pasta') || name.includes('ristorante')) {
            return descriptions[lang].italian || descriptions[lang].default;
        } else if (name.includes('steak') || name.includes('grill') || name.includes('bbq') || name.includes('meat')) {
            return descriptions[lang].steak || descriptions[lang].default;
        } else if (name.includes('sushi') || name.includes('japanese') || name.includes('tokyo')) {
            return descriptions[lang].sushi || descriptions[lang].default;
        } else if (name.includes('french') || name.includes('bistro') || name.includes('paris')) {
            return descriptions[lang].french || descriptions[lang].default;
        } else if (name.includes('turkish') || name.includes('kebab') || name.includes('döner')) {
            return descriptions[lang].turkish || descriptions[lang].default;
        } else if (name.includes('vegetarian') || name.includes('vegan') || name.includes('green')) {
            return descriptions[lang].vegetarian || descriptions[lang].default;
        } else if (name.includes('chinese') || name.includes('wok') || name.includes('dragon')) {
            return descriptions[lang].chinese || descriptions[lang].default;
        } else if (name.includes('mexican') || name.includes('taco') || name.includes('burrito')) {
            return descriptions[lang].mexican || descriptions[lang].default;
        }

        return descriptions[lang].default || descriptions.az.default;
    };

    // Restaurant descriptions for 26 different restaurants (fallback for ID-based lookup)
    const restaurantDescriptions = {
        1: {
            az: 'Təzə balıq və dəniz məhsulları ilə tanınır. Premium xidmət və zərif atmosfer ilə unudulmaz yemək təcrübəsi təqdim edir.',
            en: 'Known for fresh fish and seafood specialties. Offers an unforgettable dining experience with premium service and elegant atmosphere.',
            ru: 'Известен свежими морепродуктами и рыбой. Предлагает незабываемый ужин с премиальным сервисом и элегантной атмосферой.'
        },
        2: {
            az: 'İtalyan mətbəxinin ən yaxşı nümunələrini təqdim edir. Əsl pasta və pizza reseptləri ilə məşhurdur.',
            en: 'Presents the best examples of Italian cuisine. Famous for authentic pasta and pizza recipes.',
            ru: 'Представляет лучшие образцы итальянской кухни. Известен аутентичными рецептами пасты и пиццы.'
        },
        3: {
            az: 'Şərq mətbəxinin zəngin dadları. Ənənəvi reseptlər və müasir tərzdə hazırlanmış yeməklər.',
            en: 'Rich flavors of Eastern cuisine. Traditional recipes and dishes prepared in a modern style.',
            ru: 'Богатые вкусы восточной кухни. Традиционные рецепты и блюда, приготовленные в современном стиле.'
        },
        4: {
            az: 'Yapon mətbəxinin incəlikləri. Sushi və sashimi üçün ən yaxşı keyfiyyətli balıq istifadə olunur.',
            en: 'The delicacies of Japanese cuisine. The highest quality fish is used for sushi and sashimi.',
            ru: 'Деликатесы японской кухни. Для суши и сашими используется рыба высочайшего качества.'
        },
        5: {
            az: 'Fransız mətbəxinin klassik nümunələri. Şef tərəfindən hazırlanmış xüsusi menyular və geniş şərab seçimi.',
            en: 'Classic examples of French cuisine. Chef-curated special menus and extensive wine selection.',
            ru: 'Классические образцы французской кухни. Особые меню от шеф-повара и обширная винная карта.'
        },
        6: {
            az: 'Amerikan BBQ və steak mətbəxi. Premium ət keyfiyyəti və açıq ocaqda hazırlanmış yeməklər.',
            en: 'American BBQ and steak cuisine. Premium meat quality and dishes prepared on an open fire.',
            ru: 'Американская кухня BBQ и стейков. Премиальное качество мяса и блюда, приготовленные на открытом огне.'
        },
        7: {
            az: 'Türk mətbəxinin ənənəvi dadları. Kebap, döner və digər klassik türk yeməkləri.',
            en: 'Traditional flavors of Turkish cuisine. Kebab, döner and other classic Turkish dishes.',
            ru: 'Традиционные вкусы турецкой кухни. Кебаб, дёнер и другие классические турецкие блюда.'
        },
        8: {
            az: 'Vegetarian və vegan yeməkləri üçün ideal məkan. Təbii və orqanik məhsullardan hazırlanmış menyu.',
            en: 'Ideal place for vegetarian and vegan dishes. Menu prepared from natural and organic products.',
            ru: 'Идеальное место для вегетарианских и веганских блюд. Меню из натуральных и органических продуктов.'
        },
        9: {
            az: 'Çin mətbəxinin regional nümunələri. Szechuan, Cantonese və Pekin stilləri.',
            en: 'Regional examples of Chinese cuisine. Szechuan, Cantonese and Beijing styles.',
            ru: 'Региональные образцы китайской кухни. Сычуаньский, кантонский и пекинский стили.'
        },
        10: {
            az: 'Mexican mətbəxinin rəngarəng dadları. Tacos, burritos və əsl salsa reseptləri.',
            en: 'Colorful flavors of Mexican cuisine. Tacos, burritos and authentic salsa recipes.',
            ru: 'Яркие вкусы мексиканской кухни. Тако, буррито и аутентичные рецепты сальсы.'
        },
        11: {
            az: 'Yunan mətbəxinin təbii dadları. Zeytun yağı, təzə tərəvəzlər və dəniz məhsulları.',
            en: 'Natural flavors of Greek cuisine. Olive oil, fresh vegetables and seafood.',
            ru: 'Натуральные вкусы греческой кухни. Оливковое масло, свежие овощи и морепродукты.'
        },
        12: {
            az: 'Hind mətbəxinin zəngin ədviyyatları. Vegetarian və ət yeməkləri, nan və biryani.',
            en: 'Rich spices of Indian cuisine. Vegetarian and meat dishes, naan and biryani.',
            ru: 'Богатые специи индийской кухни. Вегетарианские и мясные блюда, наан и бирьяни.'
        },
        13: {
            az: 'Koreya mətbəxinin unikal dadları. Kimchi, bulgogi və ənənəvi banchan yeməkləri.',
            en: 'Unique flavors of Korean cuisine. Kimchi, bulgogi and traditional banchan dishes.',
            ru: 'Уникальные вкусы корейской кухни. Кимчи, бульгоги и традиционные блюда банчан.'
        },
        14: {
            az: 'Tailand mətbəxinin kəskin və şirin dadları. Tom yum, pad thai və curry yeməkləri.',
            en: 'Spicy and sweet flavors of Thai cuisine. Tom yum, pad thai and curry dishes.',
            ru: 'Острые и сладкие вкусы тайской кухни. Том ям, пад тай и карри блюда.'
        },
        15: {
            az: 'İspan mətbəxinin tapas və paella ənənələri. Geniş şərab seçimi ilə.',
            en: 'Tapas and paella traditions of Spanish cuisine. With extensive wine selection.',
            ru: 'Традиции тапас и паэльи испанской кухни. С обширной винной картой.'
        },
        16: {
            az: 'Alman mətbəxinin doyurucu yeməkləri. Bratwurst, schnitzel və bier qardaşlığı.',
            en: 'Hearty dishes of German cuisine. Bratwurst, schnitzel and beer camaraderie.',
            ru: 'Сытные блюда немецкой кухни. Братвурст, шницель и пивное товарищество.'
        },
        17: {
            az: 'Rus mətbəxinin klassik nümunələri. Borscht, pelmeni və ənənəvi dessertlər.',
            en: 'Classic examples of Russian cuisine. Borscht, pelmeni and traditional desserts.',
            ru: 'Классические образцы русской кухни. Борщ, пельмени и традиционные десерты.'
        },
        18: {
            az: 'Lebanon mətbəxinin orta şərq dadları. Hummus, falafel və mezze seçimi.',
            en: 'Middle Eastern flavors of Lebanese cuisine. Hummus, falafel and mezze selection.',
            ru: 'Ближневосточные вкусы ливанской кухни. Хумус, фалафель и выбор меззе.'
        },
        19: {
            az: 'Brazil mətbəxinin rəngarəng yeməkləri. Churrasco, feijoada və tropik meyvələr.',
            en: 'Colorful dishes of Brazilian cuisine. Churrasco, feijoada and tropical fruits.',
            ru: 'Яркие блюда бразильской кухни. Чурраско, фейжоада и тропические фрукты.'
        },
        20: {
            az: 'Morocco mətbəxinin ədviyyatlı yeməkləri. Tagine, couscous və mint çayı.',
            en: 'Spiced dishes of Moroccan cuisine. Tagine, couscous and mint tea.',
            ru: 'Пряные блюда марокканской кухни. Тажин, кускус и мятный чай.'
        },
        21: {
            az: 'Vietnam mətbəxinin təbii və təmiz dadları. Pho, spring rolls və fresh herbs.',
            en: 'Natural and clean flavors of Vietnamese cuisine. Pho, spring rolls and fresh herbs.',
            ru: 'Натуральные и чистые вкусы вьетнамской кухни. Фо, спринг-роллы и свежие травы.'
        },
        22: {
            az: 'Peru mətbəxinin unikal kombinasiyaları. Ceviche, lomo saltado və pisco sour.',
            en: 'Unique combinations of Peruvian cuisine. Ceviche, lomo saltado and pisco sour.',
            ru: 'Уникальные сочетания перуанской кухни. Севиче, ломо сольтадо и писко сауэр.'
        },
        23: {
            az: 'Ethiopia mətbəxinin ənənəvi yeməkləri. Injera, wat və ədviyyatlı qarışıqlar.',
            en: 'Traditional dishes of Ethiopian cuisine. Injera, wat and spiced mixtures.',
            ru: 'Традиционные блюда эфиопской кухни. Инджера, ват и пряные смеси.'
        },
        24: {
            az: 'Scandinavian mətbəxinin minimal və təmiz dadları. Smoked fish, pickled vegetables.',
            en: 'Minimal and clean flavors of Scandinavian cuisine. Smoked fish, pickled vegetables.',
            ru: 'Минималистичные и чистые вкусы скандинавской кухни. Копченая рыба, маринованные овощи.'
        },
        25: {
            az: 'Caribbean mətbəxinin tropik dadları. Jerk chicken, rice and peas və coconut dishes.',
            en: 'Tropical flavors of Caribbean cuisine. Jerk chicken, rice and peas and coconut dishes.',
            ru: 'Тропические вкусы карибской кухни. Джерк цыпленок, рис с горохом и кокосовые блюда.'
        },
        26: {
            az: 'Australian mətbəxinin müasir və innovativ yanaşması. Modern Australian fusion.',
            en: 'Modern and innovative approach of Australian cuisine. Modern Australian fusion.',
            ru: 'Современный и инновационный подход австралийской кухни. Современный австралийский фьюжн.'
        }
    };

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
            detailMenuTitle: 'Menyu',
            detailMenuEmpty: 'Menyu məlumatı hələ əlavə olunmayıb.',
            detailMenuPreview: 'Menyunun tam versiyasını görmək üçün düyməyə klikləyin.',
            detailMenuButton: 'Menyuya bax',
            detailSignatureTitle: 'Məşhur yeməklər',
            detailSignatureEmpty: 'Məşhur yeməklər tezliklə əlavə olunacaq.',
            detailInfoTitle: 'Əlaqə məlumatı',
            detailReserveButtonSecondary: 'Masa rezerv et',
            detailBackButtonSecondary: 'Restoran siyahısına qayıt',
            detailReviewsTitle: 'Rəylər',
            detailReviewsEmpty: 'Hələ rəy yoxdur.',
            detailOpeningHours: 'İş saatları',
            detailActionsTitle: 'Sürətli keçidlər'
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
            detailMenuTitle: 'Menu',
            detailMenuEmpty: 'Menu is not available yet.',
            detailMenuPreview: 'Click the button to see the full menu.',
            detailMenuButton: 'View Menu',
            detailSignatureTitle: 'Signature dishes',
            detailSignatureEmpty: 'Signature dishes will be added soon.',
            detailInfoTitle: 'Contact info',
            detailReserveButtonSecondary: 'Book a table',
            detailBackButtonSecondary: 'Return to list',
            detailReviewsTitle: 'Reviews',
            detailReviewsEmpty: 'No reviews yet.',
            detailOpeningHours: 'Opening hours',
            detailActionsTitle: 'Quick links'
        },
        ru: {
            navHome: 'Главная',
            navRestaurants: 'Рестораны',
            navReservation: 'Бронирование',
            navReviews: 'Отзывы',
            navLanguage: 'Язык',
            detailReserveButton: 'Забронировать',
            detailBackButton: 'Вернуться к ресторанам',
            detailAboutTitle: 'О ресторане',
            detailMenuTitle: 'Меню',
            detailMenuEmpty: 'Меню пока недоступно.',
            detailMenuPreview: 'Нажмите кнопку, чтобы увидеть полное меню.',
            detailMenuButton: 'Посмотреть меню',
            detailSignatureTitle: 'Фирменные блюда',
            detailSignatureEmpty: 'Фирменные блюда будут добавлены в ближайшее время.',
            detailInfoTitle: 'Контактная информация',
            detailReserveButtonSecondary: 'Забронировать стол',
            detailBackButtonSecondary: 'Вернуться к списку',
            detailReviewsTitle: 'Отзывы',
            detailReviewsEmpty: 'Отзывов пока нет.',
            detailOpeningHours: 'Часы работы',
            detailActionsTitle: 'Быстрые ссылки'
        }
    };

    // Apply translations to elements with data-i18n
    function applyLanguage(lang) {
        const dict = translations[lang] || translations['az'];

        // Translate standard elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');

            // Handle restaurant description separately (not in dict)
            if (key === 'detailAboutDescription') {
                const restaurantName = el.getAttribute('data-restaurant-name') || '';
                // Use restaurant name to get dynamic description
                const description = getRestaurantDescription(restaurantName, lang);
                if (description) {
                    el.textContent = description;
                } else {
                    // Fallback to ID-based lookup
                    const restaurantId = parseInt(el.getAttribute('data-restaurant-id'));
                    if (restaurantId && restaurantDescriptions[restaurantId]) {
                        el.textContent = restaurantDescriptions[restaurantId][lang] || restaurantDescriptions[restaurantId]['az'];
                    } else {
                        // Final fallback
                        el.textContent = restaurantDescriptions[1][lang] || restaurantDescriptions[1]['az'];
                    }
                }
            } else if (key && dict[key]) {
                // For detailOpeningHours, only update the label, not the database value
                if (key === 'detailOpeningHours') {
                    // Keep the database value (next sibling span) and only update the label
                    if (el.children.length === 0) {
                        el.textContent = dict[key];
                    } else {
                        // Update text nodes only, preserve database value in next sibling
                        const textNodes = Array.from(el.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
                        textNodes.forEach(node => {
                            if (dict[key]) {
                                node.textContent = dict[key];
                            }
                        });
                    }
                } else if (el.children.length === 0) {
                    el.textContent = dict[key];
                } else {
                    // Update text nodes only
                    const textNodes = Array.from(el.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
                    textNodes.forEach(node => {
                        if (dict[key]) {
                            node.textContent = dict[key];
                        }
                    });
                }
            }
        });

        // store selection
        localStorage.setItem('foodielocalDil', lang);
        document.documentElement.setAttribute('lang', lang);

        // Update active button state
        document.querySelectorAll('.dil-secimi').forEach(function (btn) {
            btn.classList.remove('active');
            if (btn.getAttribute('data-dil') === lang) {
                btn.classList.add('active');
            }
        });
    }

    // Language selector buttons
    document.querySelectorAll('.dil-secimi').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-dil') || 'az';
            applyLanguage(lang);
        });
    });

    // Set initial language - wait for DOM to be fully loaded with Thymeleaf data
    // Also apply on window load to ensure Thymeleaf data is available
    window.addEventListener('load', () => {
        applyLanguage(DEFAULT_LANG);
    });
    setTimeout(() => {
        applyLanguage(DEFAULT_LANG);
    }, 500);

    // Image fallback for broken images
    const PLACEHOLDER = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80';
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', () => {
            if (img.src !== PLACEHOLDER) img.src = PLACEHOLDER;
        });
    });

    // Copy-to-clipboard for address/phone (click on the text copies it)
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
    });

    // Accessibility: add focus styles to actionable spans
    document.querySelectorAll('.detail-info-list li span').forEach(s => {
        s.setAttribute('tabindex', '0');
        s.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                s.click();
            }
        });
    });
});
}







