/**
 * Altony Portfolio - Main Application Logic
 * Creator: Omar Ramadan Altony (عمر رمضان التوني)
 * Features:
 * - Preloader Glow Ring Dismissal
 * - Twinkling Stars Micro-Animation
 * - Cosmic Particles Engine
 * - Dynamic Page Routing (Home, Creators, About, Contact, Terms)
 * - Arabic / English Internationalization
 * - Creators Showcase Hub (Maysem, Ali Gelany, Youssef Magdy, Hossam, Scenes Street, Helmy)
 * - Interactive Testimonials with Real Client Photos
 * - Direct WhatsApp Business & Instagram Integration
 * - Terms of Service & Working Ethics
 * - Robust YouTube Players with Direct Fallback Links
 */

const translations = {
    ar: {
        pageTitle: "التوني | مونتير وموشن جرافيك ديزاينر | Omar Altony",
        logoText: "التوني",
        navHome: "الرئيسية",
        navContact: "تواصل معي",
        navTerms: "شروط العمل",
        navAbout: "عن التوني",
        
        preloaderTagline: "جاري إعداد التجربة البصرية...",

        heroTitlePart1: "وسّع ",
        heroTwinkleWord: "نطاقك",
        heroTitlePart2: " مع التوني",
        heroSubtitle: "video editor & motion graphic",
        btnBrowse: "استكشف أعمالي",
        btnContactHero: "تواصل معي",
        btnAboutMe: "عن التوني",
        btnTermsHero: "شروط العمل",

        showreelPill: "SHOWREEL",
        showreelQuality: "",

        stat1Num: "+4",
        stat1Label: "سنوات خبرة",
        stat2Num: "+3",
        stat2Label: "سنوات في Carrots",
        stat3Num: "+400M",
        stat3Label: "مشاهدة حصدتها المشاريع",

        trustedTag: "نجاح وشراكات مع كبرى العلامات التجارية",

        selectedWorksTag: "معرض الأعمال والتصنيفات",
        categoriesTitle: "المشاريع والتخصصات الإبداعية",

        filterAll: "الكل (6 تخصصات)",
        filterTopCreators: "👑 الأكثر مشاريع (صناع المحتوى)",
        filterDoctors: "🔥 الأكثر طلباً (الأطباء)",
        filterBrandedAds: "⭐ الأكثر شهرة (البراندات)",
        filterMediaPost: "📊 الأكثر جذباً للعملاء (الميديا)",
        filterShortFilm: "💜 الأكثر حباً لي (أفلام ووثائقية)",
        filterUAESpecial: "💎 الأكثر فخامة (الإمارات)",
        filterMotion: "✨ موشن جرافيك",

        badgeMostProjects: "أكبر عدد مشاريع",
        catTopCreators: '<span class="bento-title-main">كبار صناع المحتوى</span>',
        catTopCreatorsDesc: "كبار صناع المحتوي لكل منهم اسلوب مونتاج خاص بيه والوان مستخدمة خاص بيه.",
        btnViewCreatorHub: "استعراض المشاريع",
        bentoExplore: "استعرض المشاريع",

        badgeDoctors: "الأكثر طلباً",
        catDoctors: '<span class="bento-title-main">الأطباء والمجال الطبي</span>',
        catDoctorsDesc: "ريلز وفيديوهات تثقيفية طبية احترافية للمراكز والعيادات تبرز رزانة الطبيب ووضوح المعلومة.",

        badgeBranded: "الأكثر شهرة",
        catBrandedAds: '<span class="bento-title-main">إعلانات العلامات التجارية</span>',
        catBrandedAdsDesc: "إعلانات ترويجية لشركات كبرى مثل Yango Play و Samsung و PUBG Mobile بإبداع ومؤثرات ترفع المبيعات.",

        badgeMediaPost: "الأكثر جذباً للعملاء",
        catMediaPost: '<span class="bento-title-main">ميديا وبوست برودكشن</span>',
        catMediaPostDesc: "إدارة ستوديوهات وإنتاج متكامل، هندسة صوتية وتدريج لوني بجودة سينمائية فائقة.",

        badgeShortFilms: "الأكثر حباً لي",
        catShortFilms: '<span class="bento-title-main">أفلام وثائقية ومونتاج سينمائي</span>',
        catShortFilmsDesc: "أفلام وثائقية ومونتاج درامي احترافي بأسلوب سردي سينمائي مشوق ومشاعر عميقة.",

        badgeUAE: "الأكثر فخامة",
        catUAESpecial: '<span class="bento-title-main">المحتوى الخاص بالإمارات</span>',
        catUAESpecialDesc: "تغطيات عقارية وسياحية فاخرة لفنادق وفعاليات دولة الإمارات بأسلوب بصري فريد.",

        badgeMotion: "✨ 2D & 3D كينيتك جرافيك",
        catMotionGraphic: "موشن جرافيك (Motion Graphic)",
        catMotionGraphicDesc: "انفوجرافيك متحرك، كينيتك تايبوجرافي، وشروحات علمية تفاعلية لشارع العلوم تضمن نسب استبقاء مشاهدين (Retention) تفوق 75%.",
        
        modalDeliverablesTitle: "أبرز المخرجات والخدمات المقدمة:",
        modalClientsTitle: "أبرز الشركاء والمشاريع المنجزة:",
        modalRequestBtn: "طلب مشروع في هذا التخصص عبر واتساب",
        modalCloseBtn: "إغلاق",
        backToProjectsBtn: "← العودة إلى الرئيسية وكافة المشاريع",
        modalBackBtn: "← العودة للمشاريع",
        modalTermsHeading: "شروط وضوابط العمل",
        modalContactTitle: "جاهز لبدء مشروعك القادم؟",
        modalContactDesc: "تواصل معي مباشرة لمناقشة التفاصيل وبدء التنفيذ فوراً.",
        mediaPostHeading: "فيديوهات ومشاريع الميديا والبوست برودكشن",
        brandedAdsHeading: "إعلانات تجارية لأكبر البراندات والشركات العالمية",
        uaeVideosHeading: "كافة مشاريع وفيديوهات الإمارات",
        uaeBadgePill: "مشاريع دولة الإمارات العربية المتحدة",
        uaeMainTitle: "أعمال وإبداع بروح إماراتية فاخرة",
        uaeQuote: "إن بناء الإنسان هو الأساس، ومن لا يعرف ماضيه لا يمكن أن يعيش حاضره ومستقبله.",
        uaeQuoteAuthor: "— الشيخ زايد بن سلطان آل نهيان، طيب الله ثراه",
        uaeIntroDesc: "مونتاج وإخراج بصري فائق الدقة لأرقى مشاريع دبي وأبوظبي.",
        creatorsModalBadge: "👑 نخبة صناع المحتوى | Elite Content Creators",
        creatorsModalTitle: "سرد قصصي ومونتاج يحقق ملايين المشاهدات",
        creatorsModalQuote: "صناعة محتوى متقن يضمن أعلى معدلات البقاء والتفاعل.",
        creatorsModalAuthor: "— عمر التوني | مونتير محترف",
        creatorsModalDesc: "نماذج وبصمات مونتاجية لأبرز صناع المحتوى في العالم العربي.",
        watchOnYouTube: "مشاهدة على YouTube",
        watchDirectYouTube: "مشاهدة مباشرة على YouTube",
        miniWindow: "نافذة مصغرة",
        openOriginal: "فتح الرابط الأصلي",
        playInCinema: "تشغيل في المشغل السينمائي",
        openFullPlaylist: "فتح قائمة التشغيل كاملة",
        reelsCount: "فيديوهات ريلز",
        videoCount: "فيديو",
        watchInternal: "▶ تشغيل داخلي في الموقع",
        closeModal: "إغلاق",
        fullscreenModal: "فتح الصفحة كاملة",
        exitFullscreen: "تصغير للنافذة",
        backToProjects: "← العودة للمشاريع",
        creatorsPhilosophy: "فلسفة وستايل المونتاج الخاص",
        shortFilmHeroTag: "🎬 شغفي الأكبر | السينما والوثائقيات",
        shortFilmHeroTitle: "سرد درامي وثائقي ومونتاج سينمائي متقن",
        shortFilmQuote: "",
        shortFilmQuoteAuthor: "",
        shortFilmIntroDesc: "استعراض لأهم المشاريع السينمائية والوثائقية وكواليس الإنتاج الحصرية داخل الموقع.",
        exploreOtherBadge: "✨ استكشف باقي التخصصات",
        exploreOtherTitle: "تصفح باقي المشاريع والأعمال الإبداعية",
        palestineCatPill: "🇵🇸 وثائقي تاريخي وسينمائي",
        palestineMetaPill: "مشروع التربية العسكرية",
        palestineTitle: "الفيلم المجهول لفلسطين",
        palestineSubtitle: "The Unknown Film of Palestine — سيمفونية وثائقية عن قضية أمة ونضال تاريخي",
        palestineNoticeTitle: "توضيح مهم حول العرض وحقوق الملكية:",
        palestineNoticeDesc: "الفيلم الكامل مدته <strong>ساعة إلا ثلث (40 دقيقة)</strong>، ولكن المعروض هنا مقطتفات حصرية فقط لأن حقوق النشر والملكية الكاملة تعود لـ <strong>العقيد هيثم</strong> وسيتم نشره رسمياً في وقت لاحق، ولهذا سُمي بـ <strong>\"الفيلم المجهول لفلسطين\"</strong>.",
        palestineStoryTitle: "قصة العمل والرؤية الإخراجية:",
        palestineStoryP1: "هذان جزئين من هذا الفيلم الذي قمنا بعمله أنا وأشخاص رائعين، متميزين ومحبين لعملهم في مشروع التربية العسكرية بطلب من العقيد هيثم (القصة الكاملة سأشاركها معكم لاحقاً).",
        palestineStoryP2: "في قصة فلسطين كان هناك فصل مخصص عن <strong>حرب أكتوبر والنكسة</strong>، ولكن لم نتبحر فيه لأن في الأساس القصة عن فلسطين، وحرب أكتوبر هي قصة وبطولة عن مصر، وهذا كان رأي الأخ العزيز والزميل المبدع <strong>حازم إبراهيم (<a href=\"https://www.instagram.com/103_hazemibrahim/\" target=\"_blank\" rel=\"noopener noreferrer\">@103_hazemibrahim</a>)</strong> بأن يتم وضع قصة نصر أكتوبر كجزء صغير ومركز لأن القصة الأساسية هي عن فلسطين.",
        palestineQuoteHighlight: "✨ <strong>شهر أكتوبر:</strong> الشهر الذي يذكرنا بفلسطين (7 أكتوبر) وبنصر العزة والكرامة لجيش مصر العظيم (6 أكتوبر).",
        palestineExcerptsHeading: "مقتطفات الفيديو الحصرية (شاهد مباشرة في المشغل السينمائي الداخلي):",
        palestineVid1Title: "الجزء الأول: مقتطف حرب أكتوبر 1973",
        palestineVid1Desc: "معالجة بصرية وسرد درامي وثائقي يربط بين أكتوبر فلسطين ونصر أكتوبر العظيم ومرحلة النكسة.",
        palestineVid2Title: "الفصل الثالث (النسخة الأولية غير النهائية - Draft Cut)",
        palestineVid2Desc: "مقتطف سينمائي حصري من الفصل الثالث كنسخة مونتاج أولية توضح تدفق المشاهد وبناء الإيقاع.",
        palestineCreditsHeading: "صناع الفيلم وطاقم العمل (Credits):",
        palestineBtsHeading: "كواليس الصناعة والمونتاج والعتاد (اضغط للتكبير في المشغل):",
        ctrlZCatPill: "⚡ فيلم روائي قصير وخيال علمي",
        ctrlZMetaPill: "✨ دور ثلاثي محوري للتوني",
        ctrlZTitle: "فيلم Ctrl Z",
        ctrlZSubtitle: "مشروع صغير اشتغلنا عليه وجيه الوقت نشارككم بيه... !What if Ctrl+Z work in real life",
        ctrlZRoleHeading: "المونتاج والتدريج اللوني والمؤثرات البصرية:",
        ctrlZRoleTag: "بصمة فنية ثلاثية 🌟",
        ctrlZFullTitle: "شاهد فيلم Ctrl Z كاملاً",
        ctrlZFullDesc: "قصة شاب يحاول التراجع عن أخطاء وقرارات الماضي الحقيقية بضغطة زر، بإيقاع درامي متصاعد وتدريج لوني يجسد تقلبات المزاج النفسي.",
        ctrlZCreditsHeading: "صناع فيلم Ctrl Z (Credits):",
        ctrlZGradingHeading: "كواليس التدريج اللوني (DaVinci Resolve Studio Color Grading):",
        ctrlZGradingTitle: "شاشة التلوين وشجرة العقد (Node Tree) في DaVinci Resolve Studio — اضغط للتكبير",
        egygabCatPill: "🏛️ مونتاج سينمائي وتوثيق عقاري",
        egygabMetaPill: "شركة egygab للتطوير العقاري",
        egygabTitle: "egygab — مونتاج سينمائي وتوثيق مشاريع",
        egygabSubtitle: "سرد بصري وثائقي يعكس جودة وفخامة المشاريع المعمارية بإيقاع هادئ وتدريج لوني فخم",
        egygabFullTitle: "egygab — المونتاج السينمائي الكامل",
        egygabFullDesc: "توثيق سينمائي لمعالم ومشاريع إيجي جاب بأسلوب إعلاني وثائقي راقٍ، ضبط درجات الألوان لتبرز جمال المعمار، مع هندسة صوتية موسيقية محيطية.",

        clientsTag: "ثقة ونتائج واقعية",
        testimonialsTitle: "آراء شركاء النجاح",
        test1Name: "علي جيلاني",
        test1Role: "صانع محتوى وبودكاست الكبسولة",
        test1Msg: "لو قولتلك أنت عالمي.. قليلة عليك والله 😀",
        
        test2Name: "يوسف مجدي",
        test2Role: "صانع محتوى (Voral Media)",
        test2Msg: "شكراً جداً لـ عمر التوني، تحفة تحفة تحفة.",

        test3Name: "حلمي حازم",
        test3Role: "صانع محتوى وريلز",
        test3Msg: "جامد جداً يا توني يا اللي مزغلل عيني بشغلك ✨",

        test4Name: "العقيد هيثم",
        test4Role: "مؤسس محتوى وقائد مشاريع",
        test4Msg: "تسلم إيديكوا يا شباب، عاملين عظمة حقيقية تستحق كل التقدير.",

        test5Name: "egygab",
        test5Role: "شركة تطوير عقاري كبرى",
        test5Msg: "حلو أوي أوي ومتقن لأقصى درجة، شرفتونا.",

        test6Name: "مشروع الإمارات (UAE)",
        test6Role: "حملة إعلانية دولية",
        test6Msg: "يا ياسمين (الأكونت مانجر) شو هذا! ما اتوقعت يطلع حلو لها الدرجة.",

        test7Name: "Harry",
        test7Role: "CEO - LifeEdition",
        test7Msg: "you edited exactly the way i expected",

        test8Name: "فريق المتدربين",
        test8Role: "خريجو ورش المونتاج",
        test8Msg: "ما كناش هنتطور بالسرعة دي لولا ربنا ثم متابعتك وشرحك الصادق يا توني.",

        /* Creators Hub Page */
        creatorsHubTag: "نخبة صناع المحتوى",
        creatorsHubTitle: "أعمال وتجارب كبار الكريتورز",
        
        maysemTitle: "مايسم — صانعة محتوى فيرال (الحشورة)",
        maysemRole: "صانعة محتوى (الحشورة)",
        maysemStyleDesc: `
            <h4 style="color: var(--accent-purple-light); margin-bottom: 10px;">طبيعة السرد الفيرال:</h4>
            <p>إيقاع سريع مشوق، زوومات حركية ومؤثرات صوتية مرحة، وتدريج لوني مشبع يعزز حس الدعابة ويزيد من معدل انتشار الريلز (Viral Content).</p>
        `,

        youssefTitle: "يوسف مجدي — صانع محتوى (Voral Media)",
        youssefRole: "صانع محتوى",
        youssefStyleDesc: `
            <div style="line-height: 1.8;">
                <h4 style="color: var(--accent-purple-light); margin-bottom: 10px;">الفكرة العامة وسيكولوجية الألوان:</h4>
                <p>خلفية رمادي فحمي هادئة + عناصر بيضاء متوهجة + لمسة صفراء وحيدة = هوية فخمة، منظمة، وغير مشتتة.</p>
                <ul style="list-style: none; padding: 0; margin-top: 10px;">
                    <li style="margin-bottom: 6px;"><strong style="color: #F4E85F;">الأصفر الليموني:</strong> يجذب الانتباه فوراً، يعطي طاقة وتفاؤل، ويصنع هوية بصرية لا تُنسى.</li>
                    <li style="margin-bottom: 6px;"><strong style="color: #fff;">الأبيض المتوهج:</strong> أعلى تباين ممكن لقراءة مريحة مع توهج ناعم وأنيق.</li>
                    <li><strong style="color: #94a3b8;">الفحمي الداكن:</strong> يعطي إحساس الفخامة (Premium) وعمق بصري مريح للعينين.</li>
                </ul>
            </div>
        `,

        gelanyTitle: "علي جيلاني — برنامج الكبسولة ومنصة Carrots",
        gelanyRole: "صانع محتوى ومدير Carrots",
        gelanyStyleDesc: `
            <h4 style="color: var(--accent-purple-light); margin-bottom: 10px;">إيقاع السرد والحوار:</h4>
            <p>مونتاج حواري تفاعلي عالي التركيز، تقطيع ذكي يواكب انفعالات المتحدثين، مؤثرات صوتية مدروسة مع تدريج لوني دافئ مريح للعين في الحلقات الطويلة والكبسولات السريعة.</p>
        `,

        scenesTitle: "شارع العلوم & حسام الإمام & حلمي حازم",
        scenesRole: "صناع محتوى تعليمي وترفيهي",
        scenesStyleDesc: `
            <h4 style="color: var(--accent-purple-light); margin-bottom: 10px;">موشن جرافيك علمي وتجريبي:</h4>
            <p>تبسيط النظريات والتجارب عبر انفوجرافيك وموشن 2D/3D ديناميكي يحافظ على نسب المشاهدة (Retention Rate) فوق 75% على يوتيوب ومنصات التواصل.</p>
        `,

        /* About Page */
        aboutTag: "✨ عن صانع الإبداع",
        aboutTitle: "عمر رمضان التوني",
        fullNameDisplay: "Senior Video Editor & Motion Designer",
        aboutIntroLead: "أنا <strong>عمر رمضان التوني</strong>، مونتير وموشن جرافيك ديزاينر بخبرة <strong>4 سنوات</strong> في صناعة المحتوى الإبداعي، منها <strong>3 سنوات كاملة في شركة Carrots</strong> (حتى أكتوبر 2026).",
        aboutH1Title: "إعلانات تجارية كبرى",
        aboutH2Title: "كبار صناع المحتوى",
        aboutH3Title: "أفلام وثائقية وسينمائية",
        aboutH4Title: "المجال العقاري والتسويقي",
        aboutMentorTitle: "Senior Editor ومدرّب (Mentor)",
        aboutMentorText: "أعمل حالياً كـ Senior Editor ومدرّب للمتدربين الجدد لنقل خبرات المونتاج الاحترافي وصناعة الإيقاع البصري، إلى جانب إدارة مشاريع الفريلانس لكبرى الشركات وصناع المحتوى. جاهز دائماً لصناعة الفارق في مشروعك القادم!",
        aboutText: `أنا <strong>عمر رمضان التوني</strong>، مونتير وموشن جرافيك ديزاينر بخبرة 4 سنوات في صناعة المحتوى الإبداعي.`,

        statusAvailable: "هيّا نعمل معاً",
        statExp: "سنوات خبرة",
        statCarrots: "سنوات في Carrots",
        statViews: "مشاهدة حصدتها المشاريع",
        
        contactBtn: "تواصل معي الآن",
        btnTermsNav: "ميثاق وشروط العمل",

        /* Contact Page */
        contactTag: "قنوات التواصل الرسمية",
        contactTitle: "لنبدأ العمل على مشروعك القادم",
        contactDesc: "تواصل معي مباشرة عبر القنوات الرسمية التالية لمناقشة أفكارك وتحويلها لعمل بصري يبهر جمهورك.",
        
        whatsappCardTitle: "واتساب بيزنس",
        whatsappBadge: "رد سريع ومباشر",
        whatsappCardDesc: "تواصل معي بنقرة واحدة لفتح محادثة واتساب شات فورية ومباشرة بدون الحاجة لتسجيل الرقم مسبقاً.",
        btnOpenWhatsApp: "فتح شات واتساب فوري",
        copyNumberBtn: "نسخ الرقم",
        copiedTooltip: "تم النسخ بنجاح!",

        instagramCardTitle: "حساب الإنستجرام",
        instagramBadge: "الأعمال واليوميات",
        instagramCardDesc: "تابع جديد مشاريعي، ووراء الكواليس، وتواصل معي عبر الرسائل المباشرة في أي وقت.",
        btnOpenInstagram: "زيارة حسابي على إنستجرام",

        emailCardTitle: "البريد الإلكتروني (Email)",
        emailBadge: "العقود والمشاريع الرسمية",
        emailCardDesc: "أرسل تفاصيل مشروعك أو طلبات عروض الأسعار والتعاقدات الرسمية، وسيتم الرد خلال ساعات.",
        btnOpenEmail: "إرسال إيميل",
        copyEmailBtn: "نسخ الإيميل",

        inquiryTitle: "جاهز لبدء مشروع نوعي ومختلف؟",
        inquiryDesc: "سواء كان مشروعك إعلاناً تجارياً، ريلز لفيديو فيرال، أو إنتاج وثائقي متكامل، أنا هنا لضمان أعلى مستوى إخراجي.",

        /* Terms Page */
        termsTag: "محددات وضوابط العمل ⚖️",
        termsTitle: "شروط وميثاق العمل المهني",
        termsIntro: "من مبادئي الراسخة أن الإتقان الحقيقي يقترن بالقيم والأخلاق. هذه الضوابط ثابتة ولا تقبل الاستثناء لضمان البركة والاحترافية الكاملة:",

        term1Title: "1. ضابط الحجاب والاحتشام",
        term1Desc: "أعتذر بشكل قاطع عن العمل على أي محتوى تظهر فيه فتيات غير محجبات. يُشترط في أي ظهور نسائي في المحتوى أن يكون بالحجاب الكامل والاحتشام التام دون تبرج.",

        term2Title: "2. الحفلات والمهرجانات الغنائية",
        term2Desc: "لا أعمل على تصوير أو تغطية أو مونتاج الحفلات الغنائية أو المهرجانات الموسيقية أو أي فعاليات صاخبة ومماثلة.",

        term3Title: "3. الخمور والمراهنات والمحرمات",
        term3Desc: "أرفض تماماً العمل مع أو الترويج لمنتجات الكحوليات، المشروبات الروحية، منصات الرهانات والقمار، أو أي منتجات محرمة أو غير مشروعة.",

        termGuarantee: "هذه الشروط وُضعت عن قناعة تامة ومبدأ ثابت، وهي ما تضمن أعلى جودة وتكريس كامل للجهد في المشاريع الهادفة والراقية.",

        exploreOtherBadge: "استكشف باقي التخصصات",
        exploreOtherTitle: "تصفح باقي المشاريع والأعمال الإبداعية",

        backBtn: "الرجوع للرئيسية",
        footerText: "© 2026 التوني (Omar Ramadan Altony). جميع الحقوق محفوظة."
    },
    en: {
        pageTitle: "Altony | Video Editor & Motion Graphics Designer | Omar Altony",
        logoText: "Altony",
        navHome: "Home",
        navContact: "Contact",
        navTerms: "Terms",
        navAbout: "About Me",

        preloaderTagline: "Preparing visual experience...",

        heroTitlePart1: "SCALE ",
        heroTwinkleWord: "YOUR BUSINESS",
        heroTitlePart2: " WITH ALTONY",
        heroSubtitle: "Video Editor & Motion Graphics Designer",
        btnBrowse: "Explore My Work",
        btnContactHero: "Get in Touch",
        btnAboutMe: "About Altony",
        btnTermsHero: "Working Terms",

        showreelPill: "SHOWREEL",
        showreelQuality: "",

        stat1Num: "+4",
        stat1Label: "Years of Experience",
        stat2Num: "+3",
        stat2Label: "Years at Carrots",
        stat3Num: "+400M",
        stat3Label: "Project Views Generated",

        trustedTag: "Trusted by Industry Leaders & Global Brands",

        selectedWorksTag: "FEATURED WORK & SPECIALIZATIONS",
        categoriesTitle: "Creative Disciplines & Portfolio",

        filterAll: "All (6 Disciplines)",
        filterTopCreators: "👑 Top Creators",
        filterDoctors: "🔥 Healthcare & Doctors",
        filterBrandedAds: "⭐ Branded Commercials",
        filterMediaPost: "📊 Media & Post-Production",
        filterShortFilm: "💜 Cinema & Documentaries",
        filterUAESpecial: "💎 UAE Luxury Content",
        filterMotion: "✨ Motion Graphics",

        badgeMostProjects: "Most Projects",
        catTopCreators: '<span class="bento-title-main">Top Content Creators</span>',
        catTopCreatorsDesc: "Ali Gelany, Hossam El-Emam, Youssef Magdy, Sharea El-Oloum, Maysem (El 7ashoura), and more. Crafting customized visual identities, dynamic pacing, and tailored color grading for each creator to achieve record engagement.",
        btnViewCreatorHub: "Explore Projects",
        bentoExplore: "Explore Projects",

        badgeDoctors: "Most In-Demand",
        catDoctors: '<span class="bento-title-main">Doctors & Healthcare</span>',
        catDoctorsDesc: "Professional medical reels and clinic educational campaigns blending authority with high viewer retention.",

        badgeBranded: "Most Renowned",
        catBrandedAds: '<span class="bento-title-main">Branded Commercials</span>',
        catBrandedAdsDesc: "Commercial campaigns for international brands including Samsung, PUBG Mobile, and Yango Play.",

        badgeMediaPost: "Highest Client Conversion",
        catMediaPost: '<span class="bento-title-main">Media & Post-Production</span>',
        catMediaPostDesc: "Full studio management, broadcast post-production, sound engineering, and cinematic color grading.",

        badgeShortFilms: "Personal Favorite",
        catShortFilms: '<span class="bento-title-main">Documentaries & Cinematic Editing</span>',
        catShortFilmsDesc: "Documentary post-production, dramatic pacing, and cinematic storytelling delivering high emotional impact.",

        badgeUAE: "Most Luxurious",
        catUAESpecial: '<span class="bento-title-main">UAE Special Content</span>',
        catUAESpecialDesc: "Prestigious marketing campaigns and luxury real estate showcases tailored for the United Arab Emirates.",

        badgeMotion: "✨ 2D & 3D Motion",
        catMotionGraphic: "Motion Graphics",
        catMotionGraphicDesc: "Kinetic typography, 2D/3D explainer motion graphics, and scientific visualizations for Scenes Street maintaining 75%+ audience retention.",

        modalDeliverablesTitle: "Key Deliverables & Services:",
        modalClientsTitle: "Key Partners & Delivered Projects:",
        modalRequestBtn: "Request Project in this Specialty via WhatsApp",
        modalCloseBtn: "Close",
        backToProjectsBtn: "← Back to All Projects",
        modalBackBtn: "← Back to Projects",
        modalTermsHeading: "Work Guidelines & Ethical Standards",
        modalContactTitle: "Ready to Launch Your Next Project?",
        modalContactDesc: "Connect directly to discuss scope and kick off production immediately.",
        mediaPostHeading: "Media & Post-Production Projects",
        brandedAdsHeading: "Commercial Campaigns for Global & Regional Brands",
        uaeVideosHeading: "All UAE Projects & Commercials",
        uaeBadgePill: "United Arab Emirates Showcase",
        uaeMainTitle: "High-End Creations with Emirati Luxury",
        uaeQuote: "The real asset of any nation is in its youth, and he who does not know his past cannot live in his present and future.",
        uaeQuoteAuthor: "— Sheikh Zayed bin Sultan Al Nahyan",
        uaeIntroDesc: "Ultra-HD post-production capturing prestigious real estate, tourism, and sovereign innovation in Dubai & Abu Dhabi.",
        creatorsModalBadge: "👑 Top Creators | Elite Showcase",
        creatorsModalTitle: "Dynamic Storytelling Driving Millions of Views",
        creatorsModalQuote: "Crafting high-retention narrative edits that build lasting visual identity.",
        creatorsModalAuthor: "— Omar Altony | Senior Video Editor",
        creatorsModalDesc: "Curated showcase of high-performing creator collaborations and signature editing styles.",
        watchOnYouTube: "Watch on YouTube",
        watchDirectYouTube: "Watch directly on YouTube",
        miniWindow: "Mini Window",
        openOriginal: "Open Original Link",
        playInCinema: "Play in Cinema Lightbox",
        openFullPlaylist: "Open Full Playlist",
        reelsCount: "Reels",
        videoCount: "videos",
        watchInternal: "▶ Play in Site Player",
        closeModal: "Close",
        fullscreenModal: "Fullscreen",
        exitFullscreen: "Exit Fullscreen",
        backToProjects: "← Back to Projects",
        creatorsPhilosophy: "Signature Editing Style & Philosophy",
        shortFilmHeroTag: "🎬 My Greatest Passion | Cinema & Documentaries",
        shortFilmHeroTitle: "Dramatic Documentary Storytelling & Cinematic Editing",
        shortFilmQuote: "",
        shortFilmQuoteAuthor: "",
        shortFilmIntroDesc: "Explore premier cinematic and documentary works with exclusive behind-the-scenes material.",
        exploreOtherBadge: "✨ Explore Other Specialties",
        exploreOtherTitle: "Browse More Creative Projects & Categories",
        palestineCatPill: "🇵🇸 Historical Cinematic Documentary",
        palestineMetaPill: "Military Education Commission",
        palestineTitle: "The Unknown Film of Palestine",
        palestineSubtitle: "The Unknown Film of Palestine — A documentary symphony of historic resilience",
        palestineNoticeTitle: "Important Note on Screening & Rights:",
        palestineNoticeDesc: "The complete film runs <strong>40 minutes</strong>, but only select excerpts are featured here as full rights belong to <strong>Colonel Haitham</strong> for official release—hence titled <strong>\"The Unknown Film of Palestine\"</strong>.",
        palestineStoryTitle: "Behind the Story & Editorial Vision:",
        palestineStoryP1: "These are two excerpts from this film created alongside wonderful, passionate collaborators for the Military Education project commissioned by Colonel Haitham.",
        palestineStoryP2: "A dedicated chapter addressed the <strong>October War & the Naksa</strong>, crafted concisely as advised by colleague <strong>Hazem Ibrahim (@103_hazemibrahim)</strong> to keep the central focus firmly on Palestine.",
        palestineQuoteHighlight: "✨ <strong>The Month of October:</strong> A reminder of Palestine (Oct 7) and Egypt's historic pride and triumph (Oct 6).",
        palestineExcerptsHeading: "Exclusive Video Excerpts (Watch in site player):",
        palestineVid1Title: "Part 1: October 1973 War Excerpt",
        palestineVid1Desc: "Dramatic documentary treatment connecting the narrative of Palestine, the triumph of October, and historical perseverance.",
        palestineVid2Title: "Chapter Three (Initial Draft Cut)",
        palestineVid2Desc: "Exclusive rough-cut excerpt demonstrating scene pacing, rhythm construction, and visual flow.",
        palestineCreditsHeading: "Film Credits & Production Team:",
        palestineBtsHeading: "Production & Color Grading Gear (Click to enlarge):",
        ctrlZCatPill: "⚡ Sci-Fi & Psychological Drama",
        ctrlZMetaPill: "✨ Triple Core Role by Altony",
        ctrlZTitle: "Sci-Fi Short Film: Ctrl Z",
        ctrlZSubtitle: "A passion project we crafted together... What if Ctrl+Z worked in real life?",
        ctrlZRoleHeading: "Editing, Color Grading & Visual Effects:",
        ctrlZRoleTag: "Triple Creative Imprint 🌟",
        ctrlZFullTitle: "Watch Full Ctrl Z Short Film",
        ctrlZFullDesc: "The story of a young man attempting to reverse real-life past mistakes with a single keystroke, paced with mounting dramatic tension and psychological color grading.",
        ctrlZCreditsHeading: "Ctrl Z Cast & Crew (Credits):",
        ctrlZGradingHeading: "Color Grading Breakdown (DaVinci Resolve Studio):",
        ctrlZGradingTitle: "DaVinci Resolve Studio Node Tree & Color Pipeline — Click to enlarge",
        egygabCatPill: "🏛️ Architectural Documentary & Film",
        egygabMetaPill: "egygab Developments",
        egygabTitle: "egygab — Architectural Showcase & Film",
        egygabSubtitle: "Prestigious documentary storytelling showcasing architectural luxury with calm pacing and rich grading",
        egygabFullTitle: "egygab — Full Cinematic Feature",
        egygabFullDesc: "Cinematic documentation capturing modern architecture with warm luxury grading and ambient spatial audio.",

        clientsTag: "CLIENT REVIEWS & TESTIMONIALS",
        testimonialsTitle: "What Industry Partners Say",
        test1Name: "Ali Gelany",
        test1Role: "Content Creator & Host of El Kabsoula",
        test1Msg: "Calling you world-class is an understatement! 😀",
        
        test2Name: "Youssef Magdy",
        test2Role: "Content Creator (Voral Media)",
        test2Msg: "Thank you so much Omar Altony, truly a masterpiece, masterpiece, masterpiece! ✨",

        test3Name: "Helmy Hazem",
        test3Role: "Content Creator & Reels",
        test3Msg: "Awesome work Tony, you truly twinkle my eyes ✨",

        test4Name: "Colonel Haitham",
        test4Role: "Content Creator & Project Lead",
        test4Msg: "Bless your hands guys, you made a true masterpiece worth every praise.",

        test5Name: "egygab",
        test5Role: "Leading Real Estate Developer",
        test5Msg: "Extremely beautiful and executed with precision.",

        test6Name: "UAE Project",
        test6Role: "International Campaign",
        test6Msg: "Yasmeen (Account Manager), what is this? I never expected it to come out this stunning.",

        test7Name: "Harry",
        test7Role: "CEO - LifeEdition",
        test7Msg: "You edited exactly the way I expected!",

        test8Name: "Trainees Cohort",
        test8Role: "Editing Masterclass Trainees",
        test8Msg: "We wouldn't have grown this fast without God first, then your constant guidance Tony.",

        /* Creators Hub Page */
        creatorsHubTag: "CREATOR COLLABORATIONS",
        creatorsHubTitle: "Top Creators Case Studies",
        
        maysemTitle: "Maysem — Viral Content Creator (El 7ashoura)",
        maysemRole: "Content Creator (El 7ashoura)",
        maysemStyleDesc: `
            <h4 style="color: var(--accent-purple-light); margin-bottom: 10px;">Viral Narrative & Visual Comedy:</h4>
            <p>High-energy visual pacing, dynamic punch zooms, comical sound design, and vibrant color grading engineered for record viral reach and audience retention.</p>
        `,

        youssefTitle: "Youssef Magdy — Content Creator (Voral Media)",
        youssefRole: "Content Creator",
        youssefStyleDesc: `
            <div style="line-height: 1.8;">
                <h4 style="color: var(--accent-purple-light); margin-bottom: 10px;">Visual Strategy & Color Psychology:</h4>
                <p>Calm charcoal gray background + glowing white elements + single lemon yellow accent = clean, prestigious identity.</p>
                <ul style="list-style: none; padding: 0; margin-top: 10px;">
                    <li style="margin-bottom: 6px;"><strong style="color: #F4E85F;">Lemon Yellow:</strong> Grabs immediate attention, radiates optimistic energy, and anchors branding.</li>
                    <li style="margin-bottom: 6px;"><strong style="color: #fff;">Glowing White:</strong> Offers maximum readability with a modern neon edge.</li>
                    <li><strong style="color: #94a3b8;">Dark Charcoal:</strong> Delivers high-end luxury feel without visual fatigue.</li>
                </ul>
            </div>
        `,

        gelanyTitle: "Ali Gelany — El Kabsoula & Carrots",
        gelanyRole: "Content Creator & Host of El Kabsoula",
        gelanyStyleDesc: `
            <h4 style="color: var(--accent-purple-light); margin-bottom: 10px;">Narrative Pacing & Dialogue:</h4>
            <p>Snappy, highly engaging dialogue cutting, dynamic multi-cam transitions, sound design that accentuates key insights, and warm cinematic color grading for high watch-time.</p>
        `,

        scenesTitle: "Scenes Street & Hossam El Imam & Helmy",
        scenesRole: "Educational & Viral Creators",
        scenesStyleDesc: `
            <h4 style="color: var(--accent-purple-light); margin-bottom: 10px;">Scientific & Experimental Motion:</h4>
            <p>Simplifying complex experiments with tailored 2D/3D motion graphics and kinetic typography that consistently achieves 75%+ audience retention.</p>
        `,

        /* About Page */
        aboutTag: "✨ ABOUT THE CREATOR",
        aboutTitle: "Omar Ramadan Altony",
        fullNameDisplay: "Senior Video Editor & Motion Designer",
        aboutIntroLead: "I am <strong>Omar Ramadan Altony</strong>, a Senior Video Editor and Motion Graphics Designer with <strong>4+ years of industry experience</strong>, including <strong>3 years at Carrots Agency</strong> (as of October 2026).",
        aboutH1Title: "Global Commercials",
        aboutH2Title: "Top Content Creators",
        aboutH3Title: "Documentaries & Cinema",
        aboutH4Title: "Corporate & Real Estate",
        aboutMentorTitle: "Senior Editor & Mentor",
        aboutMentorText: "Currently mentoring upcoming video editors to master rhythm, pacing, and visual storytelling, alongside spearheading high-impact freelance projects for premier brands and creators.",
        aboutText: `I am <strong>Omar Ramadan Altony</strong>, a Senior Video Editor and Motion Graphics Designer.`,

        statusAvailable: "Let's Work Together",
        statExp: "Years Experience",
        statCarrots: "Years at Carrots",
        statViews: "Views Generated",
        
        contactBtn: "Let's Work Together",
        btnTermsNav: "Terms & Ethics",

        /* Contact Page */
        contactTag: "OFFICIAL CHANNELS",
        contactTitle: "Let's Build Something Exceptional",
        contactDesc: "Reach out directly via WhatsApp, Instagram, or Email to discuss your project requirements and start immediately.",

        whatsappCardTitle: "WhatsApp Business",
        whatsappBadge: "Fastest Direct Response",
        whatsappCardDesc: "Click below to immediately initiate a WhatsApp chat without needing to save the contact number first.",
        btnOpenWhatsApp: "Start Instant Chat",
        copyNumberBtn: "Copy Number",
        copiedTooltip: "Copied successfully!",

        instagramCardTitle: "Instagram Profile",
        instagramBadge: "Showcase & Stories",
        instagramCardDesc: "Check out current projects, behind-the-scenes breakdowns, and shoot me a DM directly on Instagram.",
        btnOpenInstagram: "Visit @the.altony",

        emailCardTitle: "Official Email",
        emailBadge: "Briefs & Inquiries",
        emailCardDesc: "Send comprehensive project briefs, contracts, or RFP requests directly to my official mailbox.",
        btnOpenEmail: "Send Email",
        copyEmailBtn: "Copy Email",

        inquiryTitle: "Ready for High-Retention Creative Work?",
        inquiryDesc: "Whether it's a high-impact brand commercial, viral YouTube shorts, or a full documentary, I ensure top-tier cinematic quality.",

        /* Terms Page */
        termsTag: "STANDARDS & ETHICS ⚖️",
        termsTitle: "Professional Working Terms & Ethics",
        termsIntro: "Craftsmanship thrives when aligned with core values. The following non-negotiable standards govern all my creative collaborations:",

        term1Title: "1. Modesty & Hijab Policy",
        term1Desc: "I do not work on any content featuring non-hijabi women. Any female presence in the produced media must strictly observe complete hijab and modesty.",

        term2Title: "2. No Parties or Festivals",
        term2Desc: "I decline editing or media coverage for music concerts, nightlife parties, festivals, or similar loud entertainment events.",

        term3Title: "3. Strict Prohibition on Alcohol & Gambling",
        term3Desc: "I strictly refuse promoting alcoholic beverages, liquor brands, sports betting, gambling apps, or any unlawful products.",

        termGuarantee: "These principles are held with sincere conviction, guaranteeing that 100% of my dedication is focused on dignified, high-value projects.",

        exploreOtherBadge: "Explore More Disciplines",
        exploreOtherTitle: "Browse Other Creative Projects & Disciplines",

        backBtn: "Back to Home",
        footerText: "© 2026 Altony (Omar Ramadan Altony). All Rights Reserved."
    }
};

let currentLang = 'ar'; // Defaulting to Arabic as requested by user

/* ========================================================
   HIGH-PERFORMANCE COSMIC PARTICLES & CURSOR ENGINE
   ======================================================== */
class CosmicParticles {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
                this.trailParticles = [];
        this.particleCount = 70; // Soft and calm, strictly in background
        this.mouse = { x: -1000, y: -1000, prevX: -1000, prevY: -1000, radius: 150, active: false };
        this.scrollVelocity = 0;
        this.targetScrollVelocity = 0;
        this.lastScrollY = window.scrollY || window.pageYOffset || 0;
        this.colors = [
            'rgba(192, 132, 252, ',  // Luminous Lavender / Purple (Reference Poster)
            'rgba(168, 85, 247, ',   // Cosmic Violet
            'rgba(124, 58, 237, ',   // Deep Electric Purple
            'rgba(255, 255, 255, ',  // Pure Shimmer White
            'rgba(245, 158, 11, '    // Warm Gold Stardust Spark
        ];

        this.init();
    }

    init() {
                this.resize();
        window.addEventListener('resize', () => this.resize());

        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY || window.pageYOffset || 0;
            const deltaY = currentScrollY - this.lastScrollY;
            this.lastScrollY = currentScrollY;
            this.targetScrollVelocity = Math.max(-14, Math.min(14, deltaY * 0.16));
        }, { passive: true });

        window.addEventListener('mousemove', (e) => {
            this.mouse.prevX = this.mouse.x;
            this.mouse.prevY = this.mouse.y;
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
            this.mouse.active = true;

            // Spawn gentle purple stardust trail
            const moveDist = Math.hypot(this.mouse.x - this.mouse.prevX, this.mouse.y - this.mouse.prevY);
            if (moveDist > 8 && this.trailParticles.length < 25) {
                this.spawnTrailParticle(this.mouse.x, this.mouse.y);
            }
        });

        document.addEventListener('mouseleave', () => {
            this.mouse.active = false;
            this.mouse.x = -1000;
            this.mouse.y = -1000;
        });

        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push(this.createParticle());
        }

        this.animate();
    }

    resize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
    }

    createParticle() {
        const colorBase = this.colors[Math.floor(Math.random() * this.colors.length)];
        const size = 0.9 + Math.random() * 2.0;
        const baseAlpha = 0.25 + Math.random() * 0.5;

        return {
            x: Math.random() * this.width,
            y: Math.random() * this.height,
            vx: (Math.random() - 0.5) * 0.22,
            vy: (Math.random() - 0.5) * 0.22 - 0.04,
            size: size,
            baseAlpha: baseAlpha,
            currentAlpha: baseAlpha,
            pulseSpeed: 0.01 + Math.random() * 0.02,
            pulsePhase: Math.random() * Math.PI * 2,
            colorBase: colorBase,
            isGlowing: size > 1.8
        };
    }

    spawnTrailParticle(x, y) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.4 + Math.random() * 1.2;
        this.trailParticles.push({
            x: x + (Math.random() - 0.5) * 14,
            y: y + (Math.random() - 0.5) * 14,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 0.2,
            size: 1.2 + Math.random() * 1.8,
            alpha: 0.85,
            decay: 0.02 + Math.random() * 0.025,
            color: Math.random() > 0.4 ? 'rgba(56, 189, 248,' : 'rgba(255, 255, 255,'
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        // 1. Draw Trail Particles
        for (let i = this.trailParticles.length - 1; i >= 0; i--) {
            const tp = this.trailParticles[i];
            tp.x += tp.vx;
            tp.y += tp.vy;
            tp.alpha -= tp.decay;

            if (tp.alpha <= 0) {
                this.trailParticles.splice(i, 1);
                continue;
            }

            this.ctx.beginPath();
            this.ctx.arc(tp.x, tp.y, tp.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 255, 255, ${tp.alpha})`;
            this.ctx.shadowBlur = 8;
            this.ctx.shadowColor = '#ffffff';
            this.ctx.fill();
        }

                // Interpolate scroll velocity smoothly
        this.scrollVelocity += (this.targetScrollVelocity - this.scrollVelocity) * 0.14;
        this.targetScrollVelocity *= 0.92;

        // 2. Update & Draw Main Cosmic Dust Particles
        const now = Date.now();
        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];

            p.x += p.vx;
            p.y += p.vy - (this.scrollVelocity * 0.48);

            // Shimmering alpha pulse
            const pulse = Math.sin(now * p.pulseSpeed * 0.05 + p.pulsePhase);
            const alpha = Math.max(0.15, Math.min(0.95, p.baseAlpha + pulse * 0.22));

            // Cursor magnetic / fluid interaction
            if (this.mouse.active) {
                const dx = this.mouse.x - p.x;
                const dy = this.mouse.y - p.y;
                const dist = Math.hypot(dx, dy);

                if (dist < this.mouse.radius) {
                    const force = (this.mouse.radius - dist) / this.mouse.radius;
                    // Gentle elastic repulsion with slight tangential spin
                    const angle = Math.atan2(dy, dx);
                    p.x -= Math.cos(angle) * force * 2.2;
                    p.y -= Math.sin(angle) * force * 2.2;
                }
            }

            // Boundary wrapping
            if (p.x < 0) p.x = this.width;
            if (p.x > this.width) p.x = 0;
            if (p.y < 0) p.y = this.height;
            if (p.y > this.height) p.y = 0;

            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `${p.colorBase}${alpha})`;

            if (p.isGlowing) {
                this.ctx.shadowBlur = 10;
                this.ctx.shadowColor = '#38bdf8';
            } else {
                this.ctx.shadowBlur = 3;
                this.ctx.shadowColor = 'rgba(168, 85, 247, 0.4)';
            }
            this.ctx.fill();

            // Subtle connection threads near cursor
            if (this.mouse.active) {
                const distToMouse = Math.hypot(this.mouse.x - p.x, this.mouse.y - p.y);
                if (distToMouse < 160) {
                    for (let j = i + 1; j < this.particles.length; j++) {
                        const p2 = this.particles[j];
                        const pDist = Math.hypot(p.x - p2.x, p.y - p2.y);
                        if (pDist < 80) {
                            const lineAlpha = (1 - pDist / 80) * (1 - distToMouse / 160) * 0.25;
                            this.ctx.beginPath();
                            this.ctx.moveTo(p.x, p.y);
                            this.ctx.lineTo(p2.x, p2.y);
                            this.ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
                            this.ctx.lineWidth = 0.6;
                            this.ctx.shadowBlur = 0;
                            this.ctx.stroke();
                        }
                    }
                }
            }
        }

        requestAnimationFrame(() => this.animate());
    }
}

/* Smooth Background Cursor Glow Spotlight */
function initCursorGlowFollower() {
    const follower = document.getElementById('cursorGlowFollower');
    if (!follower) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let isVisible = false;

    window.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
        if (!isVisible) {
            isVisible = true;
            follower.style.opacity = '1';
        }
    });

    document.addEventListener('mouseleave', () => {
        isVisible = false;
        follower.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        isVisible = true;
        follower.style.opacity = '1';
    });

    function loop() {
        // Silky smooth lerp easing
        currentX += (targetX - currentX) * 0.075;
        currentY += (targetY - currentY) * 0.075;

        follower.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
        requestAnimationFrame(loop);
    }
    loop();
}

/* ========================================================
   DOM READY & INITIALIZATION
   ======================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Dismiss Preloader
    initPreloader();

        // 2. Initialize Particles, Background Cursor Glow & Animated Scroll Engine
    new CosmicParticles('particles-canvas');
    initCursorGlowFollower();
    initCosmicBackgroundScrollAnimation();

    // 3. Initialize Language & Set initial direction
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    const langBtn = document.getElementById('langToggle');
    if (langBtn) langBtn.textContent = currentLang === 'ar' ? 'EN' : 'AR';
    updateLanguage(currentLang);

    // 4. Language Switch Handler
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            document.documentElement.lang = currentLang;
            document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
            langBtn.textContent = currentLang === 'ar' ? 'EN' : 'AR';
            updateLanguage(currentLang);
        });
    }

    // 5. Page Navigation & Routing
    initNavigation();

    // 6. Creators Showcase Tabs (Maysem, Gelany, Youssef, etc.)
    renderCreatorsSection();
    initCreatorsAnchorNav();

    // 7. Interactive Cursor (Disabled as requested by user to keep natural OS cursor)
    // initCustomCursor();

    // 8. Testimonials Drag Slider
    initTestimonialsSlider();

    // 8.1 Brands Marquee Left / Right Controls
    initBrandsSliderControls();

    // 9. Copy Actions for WhatsApp & Email
    initCopyButtons();

    // 10. Animated Statistics Counters
    initAnimatedCounters();

    // 11. Category Details Modal
    initCategoryModals();
    renderCreatorsModalSection();
    renderShortFilmsSection();

    // 12. Scroll Reveals
    observeReveals();

    // 13. Deep linking to category modals via URL params (e.g. ?modal=short-film)
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const autoModal = urlParams.get('modal');
        if (autoModal) {
            setTimeout(() => {
                const card = document.querySelector(`[data-category-modal="${autoModal}"]`);
                if (card) {
                    card.click();
                    if (urlParams.get('openFirstImage')) {
                        setTimeout(() => {
                            const bts = document.querySelector('.film-bts-card');
                            if (bts) bts.click();
                        }, 400);
                    }
                    if (urlParams.get('openSecondVideo')) {
                        setTimeout(() => {
                            const vids = document.querySelectorAll('.film-video-card');
                            if (vids.length > 1) vids[1].click();
                        }, 400);
                    }
                    if (urlParams.get('openFirstVideo')) {
                        setTimeout(() => {
                            const firstVid = document.querySelector('.film-video-card');
                            if (firstVid) firstVid.click();
                        }, 400);
                    }
                }
            }, 350);
        }
    } catch (e) {
        console.error(e);
    }
});

/* ========================================================
   PRELOADER
   ======================================================== */
function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('fade-out');
        }, 450);
    });

    // Fallback in case window load event fired early
    setTimeout(() => {
        if (!preloader.classList.contains('fade-out')) {
            preloader.classList.add('fade-out');
        }
    }, 1200);
}

/* ========================================================
   NAVIGATION & PAGE SWITCHING
   ======================================================== */
function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.page-section');

    function updateNavIndicator() {
        const activeLink = document.querySelector('.nav-links .nav-btn.active');
        const indicator = document.getElementById('navIndicatorPill');
        const navLinks = document.querySelector('.nav-links');
        if (!activeLink || !indicator || !navLinks) return;

        const activeRect = activeLink.getBoundingClientRect();
        const parentRect = navLinks.getBoundingClientRect();

        const leftOffset = activeRect.left - parentRect.left;
        const topOffset = activeRect.top - parentRect.top;

        indicator.style.width = `${activeRect.width}px`;
        indicator.style.height = `${activeRect.height}px`;
        indicator.style.transform = `translate(${leftOffset}px, ${topOffset}px)`;
        indicator.style.opacity = '1';
    }
    window.updateNavIndicator = updateNavIndicator;

    function navigateTo(targetPage) {
        if (!targetPage) return;

        const targetSection = document.getElementById(`${targetPage}-section`);
        if (!targetSection) {
            console.warn(`Target section #${targetPage}-section not found, keeping current page active.`);
            return;
        }

        // Update active nav links
        document.querySelectorAll('.nav-links .nav-btn').forEach(link => {
            link.classList.toggle('active', link.getAttribute('data-page') === targetPage);
        });

        // Update sliding nav indicator pill with smooth transition
        updateNavIndicator();

        // Switch active section immediately
        sections.forEach(sec => {
            if (sec.id === `${targetPage}-section`) {
                sec.classList.add('active');
            } else {
                sec.classList.remove('active');
            }
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
        observeReveals();

        if (targetPage === 'home') {
            runCountersAnimation();
        }
    }
    window.navigateTo = navigateTo;

    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetPage = btn.getAttribute('data-page');
            if (targetPage) {
                e.preventDefault();
                navigateTo(targetPage);
            }
        });
    });

    window.addEventListener('resize', () => {
        requestAnimationFrame(updateNavIndicator);
    });

    // Initial positioning of the nav indicator pill
    setTimeout(updateNavIndicator, 100);
    setTimeout(updateNavIndicator, 400);

    // Explore work button scroll action
    const exploreBtn = document.getElementById('exploreWorkBtn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo('home');
            setTimeout(() => {
                const workSec = document.getElementById('work-section');
                if (workSec) {
                    workSec.scrollIntoView({ behavior: 'smooth' });
                }
            }, 60);
        });
    }

    // Logo Click returns to Home
    const logoEl = document.querySelector('.logo');
    if (logoEl) {
        logoEl.addEventListener('click', () => navigateTo('home'));
    }
}

/* ========================================================
   ANIMATED STATS COUNTER
   ======================================================== */
function initAnimatedCounters() {
    const counterElements = document.querySelectorAll('.stat-box-number[data-target]');
    if (!counterElements.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSingleCounter(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    counterElements.forEach(el => observer.observe(el));
}

function runCountersAnimation() {
    const counterElements = document.querySelectorAll('.stat-box-number[data-target]');
    counterElements.forEach(el => animateSingleCounter(el));
}

function animateSingleCounter(el) {
    const targetVal = parseFloat(el.getAttribute('data-target'));
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    const duration = 2000;
    const start = performance.now();

    el.classList.add('counting');

    function frame(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutExpo
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentVal = ease * targetVal;
        const formatted = decimals > 0 ? currentVal.toFixed(decimals) : Math.floor(currentVal);
        el.textContent = `${prefix}${formatted}${suffix}`;

        if (progress < 1) {
            requestAnimationFrame(frame);
        } else {
            const finalVal = decimals > 0 ? targetVal.toFixed(decimals) : targetVal;
            el.textContent = `${prefix}${finalVal}${suffix}`;
            el.classList.remove('counting');
            el.classList.add('counted');
        }
    }

    requestAnimationFrame(frame);
}

/* ========================================================
   CATEGORY DETAILS MODAL
   ======================================================== */
const categoryDetailsData = {
    doctors: {
        badgeAr: "🔥 الأكثر طلباً",
        badgeEn: "🔥 Most In-Demand",
        titleAr: "الأطباء والمجال الطبي",
        titleEn: "Doctors & Healthcare Content",
        descAr: "صناعة ريلز وفيديوهات تثقيفية طبية احترافية للمراكز والعيادات تبرز مكانة الطبيب ورزانة المحتوى الطبي، مع تعزيز ثقة المريض وضمان وصول المعلومة بأعلى دقة وجاذبية بصرية.",
        descEn: "Crafting authoritative, high-retention medical reels and educational campaigns for specialized clinics and doctors that build trust, authority, and patient engagement.",
        deliverablesAr: [
            "ريلز وفيديوهات تيك توك تثقيفية وسريعة بأسلوب تفاعلي",
            "موشن جرافيك توضيحي لتبسيط العمليات الجراحية والمفاهيم الطبية",
            "تصميم هوية بصرية كاملة لحسابات الأطباء والعيادات",
            "تدريج لوني سينمائي وإضاءة نظيفة تعكس الأمان والاحترافية"
        ],
        deliverablesEn: [
            "High-retention medical reels and TikTok educational snippets",
            "2D/3D explainer motion graphics simplifying medical procedures",
            "Complete personal branding identity for doctors and clinics",
            "Cinematic clean color grading reflecting trust and hygiene"
        ],
        partners: ["عيادات كبرى", "أطباء استشاريون", "مراكز تجميل وجراحة", "بودكاست طبي"],
        whatsappMsgAr: "مرحباً عمر، أود مناقشة مشروع محتوى طبي (ريلز وفيديوهات عيادة)",
        whatsappMsgEn: "Hello Omar, I would like to discuss a medical video project"
    },
    'uae-special': {
        badgeAr: "💎 الأكثر فخامة",
        badgeEn: "💎 Most Luxurious",
        titleAr: "المحتوى الخاص بالإمارات",
        titleEn: "UAE Luxury & Real Estate Content",
        descAr: "إنتاج وإخراج تغطيات عقارية وسياحية وتجارية فاخرة لفنادق ومنتجعات وفعاليات دولة الإمارات العربية المتحدة، بتدريج لوني غني وسرد بصري يواكب تطلعات السوق الخليجي الراقي.",
        descEn: "Prestigious real estate, hospitality, and event campaigns tailored for Dubai, Abu Dhabi, and the UAE luxury market with high-production aesthetic.",
        deliverablesAr: [
            "فيديوهات تسويق عقاري للفلل والقصور والأبراج الفاخرة (4K)",
            "تغطيات بصرية للفعاليات الدولية والمؤتمرات الكبرى في دبي وأبوظبي",
            "إعلانات موجهة للجمهور الخليجي بنسب مشاهدة وتفاعل قياسية",
            "مؤثرات بصرية وتعديل صوتي سينمائي فاخر"
        ],
        deliverablesEn: [
            "4K Ultra-HD luxury villa and penthouse real estate films",
            "High-profile event and international conference coverage in UAE",
            "Targeted social media commercials for GCC audiences",
            "Cinematic sound design and dynamic speed ramps"
        ],
        partners: ["أدنوك ADNOC", "شركات عقارية بدبي", "فنادق ومنتجعات فاخرة", "حملات سياحية"],
        whatsappMsgAr: "مرحباً عمر، أود مناقشة مشروع محتوى فاخر خاص بالإمارات والخليج",
        whatsappMsgEn: "Hello Omar, I'd like to discuss a UAE luxury content project"
    },
    'branded-ads': {
        badgeAr: "⭐ الأكثر شهرة",
        badgeEn: "⭐ Most Renowned",
        titleAr: "إعلانات العلامات التجارية",
        titleEn: "Branded Commercials & Campaigns",
        descAr: "حملات إعلانية إبداعية ترفع من قيمة البراند ومعدلات التحويل (Conversions). تعاونت مع علامات عالمية وإقليمية مثل Samsung و PUBG Mobile و Yango Play لتحقيق ملايين المشاهدات.",
        descEn: "High-conversion commercials and product films for leading international and regional brands including Samsung, PUBG Mobile, and Yango Play.",
        deliverablesAr: [
            "إعلانات رقمية وتلفزيونية سريعة الإيقاع وجاذبة",
            "موشن جرافيك ثلاثي الأبعاد وإعلانات منتجات هاردوير وتطبيقات",
            "تصميم استراتيجية البوست برودكشن لرفع نسبة الاستبقاء (Retention)",
            "هندسة صوتية وتوليف مؤثرات تضمن تأثيراً لا يُنسى"
        ],
        deliverablesEn: [
            "Fast-paced digital media and commercial broadcast ads",
            "3D motion graphics and product launch visualizations",
            "Post-production strategies maximizing retention and watch-time",
            "High-impact audio engineering and custom sound design"
        ],
        partners: ["Samsung", "Yango Play", "PUBG Mobile", "Carrots Agency", "Voral Media"],
        whatsappMsgAr: "مرحباً عمر، أود طلب إعلان تجاري لعلامة تجارية",
        whatsappMsgEn: "Hello Omar, I would like to request a branded commercial"
    },
    'short-film': {
        badgeAr: "💜 الأكثر حباً لي",
        badgeEn: "💜 Personal Favorite",
        titleAr: "أفلام وثائقية ومونتاج سينمائي",
        titleEn: "Documentaries & Cinematic Editing",
        descAr: "الشغف السينمائي الحقيقي في بناء السرد الدرامي (Pacing & Storytelling)، إثارة المشاعر عبر تقطيع متناغم مع الموسيقى والمؤثرات، وتدريج لوني يمنح كل كادر هوية فنية فريدة.",
        descEn: "Deep passion for narrative pacing, dramatic tension, emotional storytelling, Foley sound design, and atmospheric cinematic color grading.",
        deliverablesAr: [
            "مونتاج أفلام روائية قصيرة وخيال علمي (فيلم Ctrl Z)",
            "إدارة فريق البوست برودكشن والمونتاج (فيلم فلسطين الوثائقي)",
            "تدريج لوني سينمائي احترافي عبر DaVinci Resolve",
            "تصميم شريط صوتي متكامل وسرد درامي مشوق"
        ],
        deliverablesEn: [
            "Sci-Fi & dramatic narrative editing (Ctrl Z short film)",
            "Documentary lead post-production management (Palestine Documentary)",
            "Professional color grading in DaVinci Resolve",
            "Cinematic sound design and dramatic tension building"
        ],
        partners: ["فيلم فلسطين الوثائقي", "فيلم Ctrl Z", "أفلام سينمائية قصيرة"],
        whatsappMsgAr: "مرحباً عمر، أود مناقشة مشروع فيلم سينمائي / وثائقي",
        whatsappMsgEn: "Hello Omar, I want to discuss a cinematic / documentary project"
    },
    'media-post': {
        badgeAr: "📊 الأكثر جذباً للعملاء",
        badgeEn: "📊 Highest Client Conversion",
        titleAr: "ميديا وبوست برودكشن",
        titleEn: "Media & Post-Production Studio",
        descAr: "إدارة وإنتاج العمليات الفنية بعد التصوير للمنصات الرقمية وستوديوهات الإنتاج، مع معايير جودة صارمة وسرعة تسليم تلبي جداول النشر المكثفة بدون أي تهاون في الجودة.",
        descEn: "End-to-end post-production pipeline for studios and media networks, delivering rapid turnarounds with rigorous broadcast-quality standards.",
        deliverablesAr: [
            "إدارة سلاسل محتوى يوتيوب كاملة من التقطيع وحتى النشر (egygab)",
            "مونتاج الحوارات والبودكاست متعدد الكاميرات (Multi-cam Editing)",
            "تصحيح عيوب الإضاءة والصوت وتنقية الحوارات بنسبة 100%",
            "تسليم ملفات ماستر بأعلى كوديكات البث وجودة الألوان"
        ],
        deliverablesEn: [
            "Full YouTube documentary channel production (egygab series)",
            "Multi-camera podcast cutting and live-switch workflows",
            "Advanced audio noise reduction and dialogue enhancement",
            "Master delivery optimized for web, social, and broadcast"
        ],
        partners: ["egygab", "بودكاست الكبسولة", "Voral Media", "LifeEdition"],
        whatsappMsgAr: "مرحباً عمر، أود مناقشة خدمات الميديا والبوست برودكشن",
        whatsappMsgEn: "Hello Omar, I'd like to discuss media and post-production services"
    },
    'creators': {
        badgeAr: "👑 نخبة صناع المحتوى • Elite YouTubers",
        badgeEn: "👑 TOP CONTENT CREATORS",
        titleAr: "أعمال وتجارب كبار صناع المحتوى",
        titleEn: "Top Content Creators Portfolio",
        descAr: "سرد قصصي ومونتاج إيقاعي ساهم في صدارة التريند وتحقيق ملايين المشاهدات للعديد من رواد صناعة المحتوى في العالم العربي.",
        descEn: "Dynamic visual storytelling and high-retention pacing behind viral hits and millions of views.",
        whatsappMsgAr: "مرحباً عمر، أود الاستفسار عن باقات مونتاج فيديوهات صناع المحتوى واليوتيوب.",
        whatsappMsgEn: "Hi Omar, I would like to inquire about video editing services for content creators and YouTube."
    },
    'top-creators': {
        badgeAr: "👑 نخبة صناع المحتوى • Elite YouTubers",
        badgeEn: "👑 TOP CONTENT CREATORS",
        titleAr: "أعمال وتجارب كبار صناع المحتوى",
        titleEn: "Top Content Creators Portfolio",
        descAr: "سرد قصصي ومونتاج إيقاعي ساهم في صدارة التريند وتحقيق ملايين المشاهدات للعديد من رواد صناعة المحتوى في العالم العربي.",
        descEn: "Dynamic visual storytelling and high-retention pacing behind viral hits and millions of views.",
        whatsappMsgAr: "مرحباً عمر، أود الاستفسار عن باقات مونتاج فيديوهات صناع المحتوى واليوتيوب.",
        whatsappMsgEn: "Hi Omar, I would like to inquire about video editing services for content creators and YouTube."
    }
};
/* Branded Ads Data (Clean Titles & Descriptions - All Ad/Reel/Insta clutter removed) */
const brandedAdsData = [
    {
        brand: "Yango Play",
        logo: "images and videos/yango-clean.png",
        logoAlt: "Yango Play",
        title: "Yango Play 01",
        titleAr: "Yango Play 01",
        titleEn: "Yango Play 01",
        url: "https://www.instagram.com/reel/DImZEJyCZqP/",
        platform: "instagram",
        thumb: "images and videos/thumb_yango_ig.png",
        desc: "حملة ترويجية سينمائية",
        descAr: "حملة ترويجية سينمائية",
        descEn: "Cinematic Promotional Campaign"
    },
    {
        brand: "Yango Play",
        logo: "images and videos/yango-clean.png",
        logoAlt: "Yango Play",
        title: "Yango Play 02",
        titleAr: "Yango Play 02",
        titleEn: "Yango Play 02",
        url: "https://www.tiktok.com/@dswilliam96/video/7446786952491437358",
        platform: "tiktok",
        thumb: "images and videos/thumb_yango_tiktok.png",
        desc: "محتوى ترفيهي إيقاعي سريع",
        descAr: "محتوى ترفيهي إيقاعي سريع",
        descEn: "Fast-Paced Entertainment Feature"
    },
    {
        brand: "PUBG Mobile",
        logo: "images and videos/pubg-clean.png",
        logoAlt: "PUBG Mobile",
        title: "PUBG Mobile",
        titleAr: "PUBG Mobile",
        titleEn: "PUBG Mobile",
        url: "https://www.instagram.com/reel/DGQxEcnI1Fa/",
        platform: "instagram",
        thumb: "images and videos/thumb_pubg_ig.png",
        desc: "حملة PUBG Mobile الحماسية",
        descAr: "حملة PUBG Mobile الحماسية",
        descEn: "Action-Packed PUBG Mobile Launch"
    },
    {
        brand: "Samsung × Insomnia",
        logo: "images and videos/insomnia-logo.svg",
        logoAlt: "Insomnia Egypt",
        logoSecondary: "images and videos/samsung-clean.png",
        title: "Samsung × Insomnia",
        titleAr: "Samsung × Insomnia",
        titleEn: "Samsung × Insomnia",
        url: "https://www.tiktok.com/@hossam_elemam/video/7629027788883758357",
        platform: "tiktok",
        thumb: "images and videos/thumb_samsung_tiktok.png",
        desc: "تعاون Samsung Galaxy × Insomnia Egypt",
        descAr: "تعاون Samsung Galaxy × Insomnia Egypt",
        descEn: "Samsung Galaxy × Insomnia Egypt Collaboration"
    },
    {
        brand: "NVIDIA",
        logo: "images and videos/nvidia-logo.svg",
        logoAlt: "NVIDIA",
        title: "NVIDIA",
        titleAr: "NVIDIA",
        titleEn: "NVIDIA",
        url: "https://youtube.com/shorts/zqcW9pc9OVw",
        platform: "youtube",
        youtubeId: "zqcW9pc9OVw",
        thumb: "https://img.youtube.com/vi/zqcW9pc9OVw/maxresdefault.jpg",
        desc: "حملة NVIDIA الرسمية",
        descAr: "حملة NVIDIA الرسمية",
        descEn: "Official NVIDIA Hardware Showcase"
    }
];

/* Real Doctors Playlists Data with Exact Video IDs Extracted from YouTube */
const doctorsPlaylistsData = [
    {
        id: "highlighted",
        isHighlighted: true,
        name: "المشاريع الطبية المميزة",
        nameAr: "المشاريع الطبية المميزة",
        nameEn: "Highlighted Medical Projects",
        subtitle: "أبرز مشاريع نخبة الأطباء والمراكز الطبية",
        subtitleAr: "أبرز مشاريع نخبة الأطباء والمراكز الطبية",
        subtitleEn: "Premier Healthcare & Medical Showcase",
        icon: "⭐",
        playlistId: "PLBlUUxOUN6Gk",
        playlistUrl: "https://www.youtube.com/playlist?list=PLBlUUxOUN6Gk",
        desc: "أقوى المشاريع المختارة لنخبة الأطباء التي حققت أعلى نسب استبقاء وتفاعل ونمو في الحجوزات الطبية.",
        descAr: "أقوى المشاريع المختارة لنخبة الأطباء التي حققت أعلى نسب استبقاء وتفاعل ونمو في الحجوزات الطبية.",
        descEn: "Curated showcase of high-retention, high-converting medical projects for top doctors and health institutions.",
        videos: [
            { id: "tgn06qvk6_k", title: "قصة dr abdullah" },
            { id: "cSjQy2nt4rA", title: "الخلايا السرطانيه alwsj" },
            { id: "FOYx6-fyl9Y", title: "امثله لا انساها cure arena part 1" },
            { id: "-Np9fMDXJMQ", title: "هشاشة العظام ultra" }
        ]
    },
    {
        id: "dr-rania",
        name: "د. رانيا | Dr. Rania",
        subtitle: "صحة المرأة والنساء والتوليد",
        icon: "🩺",
        playlistId: "PLY2py0SXZqcE",
        playlistUrl: "https://www.youtube.com/playlist?list=PLY2py0SXZqcE",
        desc: "محتوى طبي تثقيفي عالي الرزانة والدقة في صحة المرأة ومتابعة الحمل والولادة بأسلوب مريح وجذاب.",
        videos: [
            { id: "OlGqts0PVLw", title: "الهرمونات التعويضية" },
            { id: "vwM4NsVRwuc", title: "أشعة الصبغة" },
            { id: "xqVdz6-MCzs", title: "مثبتات الحمل" },
            { id: "F_WjfiYpDZY", title: "الطلق الكاذب" },
            { id: "hRuJSUtEZY4", title: "إبرة الظهر" },
            { id: "YfzodWyqK18", title: "الهرمونات التعويضية - الجزء الأول" }
        ]
    },
    {
        id: "dr-abdallah",
        name: "د. عبد الله | Dr. Abdallah",
        subtitle: "الأورام والتثقيف الصحي الدقيق",
        icon: "🔬",
        playlistId: "PLDRbJqVLssAI",
        playlistUrl: "https://www.youtube.com/playlist?list=PLDRbJqVLssAI",
        desc: "تبسيط أدق المفاهيم الطبية والوقائية بمونتاج هادئ وواضح يمنح المشاهد الأمل والمعرفة العلمية الموثوقة.",
        videos: [
            { id: "aNKwCAq0UKs", title: "كيف تضمن ما تنصاب بالسرطان" },
            { id: "kePrPH7PKHA", title: "5 علامات لسرطان الرحم" },
            { id: "hlRGwnovjEg", title: "كارتسيل" },
            { id: "cyOA4j_41cg", title: "مراحل سرطان الثدي" }
        ]
    },
    {
        id: "dr-nancy",
        name: "د. نانسي | Dr. Nancy",
        subtitle: "التغذية العلاجية والصحة العامة",
        icon: "🥗",
        playlistId: "PLbFmwKicbSLw",
        playlistUrl: "https://www.youtube.com/playlist?list=PLbFmwKicbSLw",
        desc: "ريلز سريعة الإيقاع بألوان زاهية وخطوط كينيتك تايبوجرافي مبهرة تشرح العادات الغذائية الصحية.",
        videos: [
            { id: "a6Lb7-jb7dg", title: "الكربوهيدرات" },
            { id: "xSyhYe12Q10", title: "السكر" },
            { id: "0zwzqcvCoh4", title: "المالح" }
        ]
    },
    {
        id: "dr-manar",
        name: "د. منار | Dr. Manar",
        subtitle: "صحة الأم والجنين",
        icon: "💜",
        playlistId: "PLRZ-yaA9QGdw",
        playlistUrl: "https://www.youtube.com/playlist?list=PLRZ-yaA9QGdw",
        desc: "شروحات طبية متخصصة ومبسطة تركز على صحة الأم ومتابعة أعراض الحمل المختلفة دون قلق.",
        videos: [
            { id: "qfMD4LaNOdY", title: "تكيس المبايض" },
            { id: "mxJF5VmuSLQ", title: "مثبت الحمل" },
            { id: "jgw0lj5nU1s", title: "المسكنات أثناء الحمل" },
            { id: "Ee_8M48JdVU", title: "الطلق الكاذب والحقيقي" }
        ]
    },
    {
        id: "dr-hend",
        name: "د. هند | Dr. Hend",
        subtitle: "طب وتجميل الأسنان",
        icon: "✨",
        playlistId: "PLY8iXJD5hPFs",
        playlistUrl: "https://www.youtube.com/playlist?list=PLY8iXJD5hPFs",
        desc: "نصائح طب الأسنان وتجارب المرضى في إطار بصري أنيق يعزز ثقة المراجع في العيادة.",
        videos: [
            { id: "LRoVSFkxXu0", title: "العناية والأشياء الخطيرة" },
            { id: "wSJz5Ja-mzw", title: "بعت البريز" },
            { id: "QRagavZGo1w", title: "رأي بيشنت" },
            { id: "QrVF61duSjg", title: "العلكة" }
        ]
    },
    {
        id: "dr-shimaa",
        name: "د. شيماء | Dr. Shimaa",
        subtitle: "الاستشارات والرعاية الطبية",
        icon: "🩺",
        playlistId: "PLRXFDjCTUnro",
        playlistUrl: "https://www.youtube.com/playlist?list=PLRXFDjCTUnro",
        desc: "محتوى توعوي بأسلوب حواري عفوي وسلس يقرب الطبيب من الجمهور المستهدف.",
        videos: [
            { id: "eij7R98_guo", title: "حلقة د. شيماء 01" },
            { id: "2fgA_8CuzO0", title: "حلقة د. شيماء 02" },
            { id: "UHyVxhwOn9k", title: "حلقة د. شيماء 03" }
        ]
    },
    {
        id: "revira",
        name: "Revira | عيادات ريفيرا",
        subtitle: "مراكز طبية وتجميلية متكاملة",
        icon: "🏥",
        playlistId: "PLZEbn8ZSNIvg",
        playlistUrl: "https://www.youtube.com/playlist?list=PLZEbn8ZSNIvg",
        desc: "فيديوهات تعريفية ونماذج طبية للمراكز الطبية بتدريج لوني نقي وهوية بصرية فخمة.",
        videos: [
            { id: "om4Rbs0yEYk", title: "المشروبات الغازية" },
            { id: "HeXNiOom4Jo", title: "غسيل الأسنان" },
            { id: "8qXZ7etPWyg", title: "نصائح ريفيرا" }
        ]
    }
];

const uaeVideosData = [
    { id: "Vj_E9Fvy0qQ", title: "صناع الأمل (عيال زايد 18)", titleAr: "صناع الأمل (عيال زايد 18)", titleEn: "Hope Makers (Eyal Zayed 18)" },
    { id: "puvxOyqik1s", title: "عيال زايد 17 | فخر الاتحاد", titleAr: "عيال زايد 17 | فخر الاتحاد", titleEn: "Eyal Zayed 17 | Union Pride" },
    { id: "DQifG0HCmX0", title: "عيال زايد 16 | قيادة وإنجاز", titleAr: "عيال زايد 16 | قيادة وإنجاز", titleEn: "Eyal Zayed 16 | Leadership & Vision" },
    { id: "xAuABpf48DY", title: "عيال زايد 13 | أصالة ومجد", titleAr: "عيال زايد 13 | أصالة ومجد", titleEn: "Eyal Zayed 13 | Heritage & Glory" },
    { id: "tJTo9xRmn9k", title: "عيال زايد 1 | روح الاتحاد", titleAr: "عيال زايد 1 | روح الاتحاد", titleEn: "Eyal Zayed 1 | Spirit of the Union" },
    { id: "O63yKzihfug", title: "عيال زايد 2 | مسيرة العزم", titleAr: "عيال زايد 2 | مسيرة العزم", titleEn: "Eyal Zayed 2 | Journey of Resolve" },
    { id: "Wys51gKP36c", title: "عيال زايد 2 (v4) | رؤية المستقبل", titleAr: "عيال زايد 2 (v4) | رؤية المستقبل", titleEn: "Eyal Zayed 2 (v4) | Future Vision" },
    { id: "s8HmtLL_hX8", title: "عيال زايد 14 | شموخ الوطن", titleAr: "عيال زايد 14 | شموخ الوطن", titleEn: "Eyal Zayed 14 | National Loftiness" },
    { id: "76LwVxt_pyA", title: "عيال زايد 6 | بصمة الإبداع", titleAr: "عيال زايد 6 | بصمة الإبداع", titleEn: "Eyal Zayed 6 | Creative Imprint" }
];

const mediaPostVideosData = [
    { id: "JeGKTwaI_xw", title: "إعلان تجاري لخدمات الإنتاج 01", titleAr: "إعلان تجاري لخدمات الإنتاج 01", titleEn: "Commercial Production Showcase 01" },
    { id: "sXAt8N1q0ro", title: "بوست برودكشن وسينماتيك لوك 02", titleAr: "بوست برودكشن وسينماتيك لوك 02", titleEn: "Post-Production Cinematic Grade 02" },
    { id: "cZhAONy5HBY", title: "إعلان ترويجي لشركة ميديا 03", titleAr: "إعلان ترويجي لشركة ميديا 03", titleEn: "Media Agency Promo Campaign 03" },
    { id: "0B7Yb4_NlLM", title: "مونتاج إعلاني سريع الإيقاع 04", titleAr: "مونتاج إعلاني سريع الإيقاع 04", titleEn: "Dynamic Rhythmic Editing 04" },
    { id: "d50w7HiPBMU", title: "ريلز تسويقي لخدمات الاستوديو 05", titleAr: "ريلز تسويقي لخدمات الاستوديو 05", titleEn: "Studio Services Commercial Reel 05" },
    { id: "zuRG36Gh4wk", title: "تدريج لوني وهندسة صوتية 06", titleAr: "تدريج لوني وهندسة صوتية 06", titleEn: "Color Grading & Sound Design 06" },
    { id: "fYjK5zhiSEk", title: "إعلان حملة تسويقية متكاملة 07", titleAr: "إعلان حملة تسويقية متكاملة 07", titleEn: "Full Marketing Campaign Ad 07" },
    { id: "lFu9YbQd_XQ", title: "مونتاج تجاري فخم 08", titleAr: "مونتاج تجاري فخم 08", titleEn: "Luxury Commercial Post 08" },
    { id: "uK8ndAd2CbE", title: "عرض خدمات البوست برودكشن 09", titleAr: "عرض خدمات البوست برودكشن 09", titleEn: "Studio Workflow Presentation 09" },
    { id: "p8c-iRvLfas", title: "ريلز إعلاني لشركات الميديا 10", titleAr: "ريلز إعلاني لشركات الميديا 10", titleEn: "Media Agency Video Reel 10" }
];

const creatorsData = [
    {
        id: "annanscience",
        name: "شارع العلوم (عبدالله عنان)",
        subtitle: "محتوى التجارب والعلوم التفاعلي",
        icon: "🔬",
        avatar: "images and videos/science-street.jpg",
        fallbackAvatar: "https://unavatar.io/instagram/annanscience",
        socials: [
            { type: "tiktok", label: "تيك توك", url: "https://www.tiktok.com/@annanscience" },
            { type: "instagram", label: "إنستجرام", url: "https://www.instagram.com/annanscience/" },
            { type: "youtube", label: "يوتيوب", url: "https://www.youtube.com/@annanscience" }
        ],
        philosophy: "تبسيط التجارب العلمية المعقدة عبر موشن جرافيك 2D/3D ديناميكي، كينيتك تايبوجرافي فائق الوضوح، وريتم سردي مشوق يحافظ على نسب استبقاء المشاهدين (Retention Rate) فوق 75% مع مؤثرات صوتية تحاكي لحظة الانفجار والتفاعل العلمي.",
        videos: [
            { id: "PBOFaVJXoyM", title: "شارع العلوم | تجربة كيميائية وانفوجرافيك 01" },
            { id: "TOe9t4Dfyyk", title: "شارع العلوم | شروحات علمية وموشن 02" },
            { id: "LS3YBhys0O4", title: "شارع العلوم | تبسيط النظريات بالتحريك 03" },
            { id: "qc3My1QNnxQ", title: "شارع العلوم | إثارة علمية وكينيتك 04" },
            { id: "9LKV8UACX9I", title: "شارع العلوم | تجارب ومؤثرات صوتية 05" }
        ]
    },
    {
        id: "youssefmagdy",
        name: "يوسف مجدي (Voral Media)",
        subtitle: "صانع محتوى وبودكاست (زي ما بقولك كده)",
        icon: "⚡",
        avatar: "images and videos/youssef-magdy.jpg",
        fallbackAvatar: "https://unavatar.io/instagram/youssefmagdii",
        socials: [
            { type: "tiktok", label: "تيك توك", url: "https://www.tiktok.com/@zambaolak_keda" },
            { type: "instagram", label: "إنستجرام", url: "https://www.instagram.com/youssefmagdii/" }
        ],
        philosophy: "سيكولوجية التباين الفخم: خلفية رمادية فحمية هادئة تعطي وزناً ورزانة للكادر، عناصر بيضاء متوهجة لقراءة مريحة بدون تشتيت، ولمسة صفراء ليمونية بارزة تضفي طاقة وتفاؤل وترسخ هوية لا تُنسى في ذهن المشاهد.",
        videos: [
            { id: "N8bCDzAX7GM", title: "يوسف مجدي | زي ما بقولك كده 01" },
            { id: "wh-iSGxUV-o", title: "يوسف مجدي | قصة نجاح وريلز تباين 02" },
            { id: "zHlX0TuJEds", title: "يوسف مجدي | بودكاست وسرد تفاعلي 03" },
            { id: "24Qtbu7h9wk", title: "يوسف مجدي | ريلز أصفر ليموني مميز 04" },
            { id: "P5mvE3PxdWE", title: "يوسف مجدي | Voral Media ريلز سريع 05" }
        ]
    },
            {
        id: "aligelany",
        name: "علي جيلاني (برنامج الكبسولة)",
        subtitle: "محتوى ريادة الأعمال وحوارات الكبسولة",
        icon: "🎙️",
        avatar: "images and videos/ali-gelany-notes.jpg",
        fallbackAvatar: "images and videos/ali-gelany-notes.jpg",
        socials: [
            { type: "tiktok", label: "تيك توك", url: "https://www.tiktok.com/@the.capsule" },
            { type: "instagram", label: "إنستجرام", url: "https://www.instagram.com/the.capsule.official/" }
        ],
        philosophy: "مونتاج حواري تفاعلي عالي التركيز، تقطيع ذكي متعدد الزوايا يواكب ذروة انفعالات المتحدثين، هندسة صوتية وتدريج لوني دافئ مريح للعينين في الحلقات الطويلة والكبسولات السريعة.",
        videos: [
            { id: "O2iAYiPRdao", title: "علي جيلاني | الكبسولة حوار أعمال 01" },
            { id: "dwOehpuKi64", title: "علي جيلاني | لقاء أعمال واستراتيجيات 02" },
            { id: "9aXhpdF_cxg", title: "علي جيلاني | كبسولة سريعة ومونتاج دقيق 03" },
            { id: "hKQrqpMO040", title: "علي جيلاني | تقطيع متعدد الكاميرات 04" },
            { id: "_yVjR93bKb8", title: "علي جيلاني | تدريج لوني دافئ مريح 05" },
            { id: "rdlq3Bz2mgQ", title: "علي جيلاني | إيقاع السرد والتفاعل 06" },
            { id: "09NxwHCeXZ0", title: "علي جيلاني | كبسولة حوارية مميزة 07" }
        ]
    },
    {
        id: "el7ashoura",
        name: "مايسم (الحشورة)",
        subtitle: "محتوى ترفيهي وسرد قصصي سريع الانتشار (Viral Content)",
        icon: "🔥",
        avatar: "images and videos/maysem-avatar.jpg",
        fallbackAvatar: "images and videos/maysem-avatar.jpg",
        socials: [
            { type: "tiktok", label: "تيك توك", url: "https://www.tiktok.com/@el7ashoura" },
            { type: "instagram", label: "إنستجرام", url: "https://www.instagram.com/el7ashoura/" }
        ],
        philosophy: "إيقاع فيرال فائق السرعة، زوومات وانتقالات ديناميكية مشوقة، مؤثرات بصرية مبهجة وألوان مشبعة تعزز روح الدعابة وتجعل المشاهد يتابع الريلز حتى آخر ثانية.",
        videos: [
            { id: "JnXwuJNHpfs", title: "مايسم الحشورة | ريلز فيرال سريع 01" },
            { id: "gV4jZbXNba0", title: "مايسم الحشورة | كوميديا وسرد قصصي 02" },
            { id: "mFYRS1rAXbQ", title: "مايسم الحشورة | زوومات حركية ومؤثرات 03" },
            { id: "S1q6f3hGjjE", title: "مايسم الحشورة | سكتش وسرد ترفيهي 04" },
            { id: "cJqdl66z7X8", title: "مايسم الحشورة | ريلز عالي الانتشار 05" },
            { id: "zxe4dOTJ7mk", title: "مايسم الحشورة | مؤثرات صوتية وبصرية 06" }
        ]
    },
    {
        id: "hossam",
        name: "حسام الإمام",
        subtitle: "صانع محتوى وسرد شبابي تفاعلي",
        icon: "🎬",
        avatar: "images and videos/hossam-elemam.jpg",
        fallbackAvatar: "images and videos/hossam-elemam.jpg",
        socials: [
            { type: "instagram", label: "إنستجرام", url: "https://www.instagram.com/hossam.el_emam/" },
            { type: "tiktok", label: "تيك توك", url: "https://www.tiktok.com/@hossam_elemam" }
        ],
        philosophy: "مونتاج درامي واقعي بألوان طبيعية متوازنة، تقطيع ناعم يخدم بناء الفكرة، وانتقالات بصرية متقنة تدعم أسلوب الإلقاء المميز وتجعل المحتوى قريباً من الجمهور.",
        videos: [
            { id: "EWNSQS-hOEw", title: "حسام الإمام | سرد قصصي وتصوير واقعي 01" },
            { id: "0ke0LBKbK5k", title: "حسام الإمام | ريلز شبابي مشوق 02" },
            { id: "AIJYmgsmiaw", title: "حسام الإمام | مونتاج درامي وإلقاء 03" },
            { id: "BxKl7-Ia5Bg", title: "حسام الإمام | إيقاع متزن وسلاسة بصرية 04" }
        ]
    },
    {
        id: "helmy",
        name: "حلمي حازم",
        subtitle: "ريلز وسكتشات فكاهية خلاقة",
        icon: "✨",
        avatar: "images and videos/helmy-hazem.jpg",
        fallbackAvatar: "https://unavatar.io/instagram/helmyyhazem",
        socials: [
            { type: "instagram", label: "إنستجرام", url: "https://www.instagram.com/helmyyhazem/" },
            { type: "tiktok", label: "تيك توك", url: "https://www.tiktok.com/@helmyhazem" }
        ],
        philosophy: "توقيت فكاهي استثنائي (Punchline Timing)، تقطيع مفاجئ يدعم الإيفيهات، مؤثرات صوتية مدروسة، وموشن خفيف يصنع تفاعلاً مضحكاً ومشاركات قياسية على منصات التواصل.",
        videos: [
            { id: "XSF4JxDOGaI", title: "حلمي حازم | سكتش فكاهي ومونتاج ذكي 01" },
            { id: "Fpax4pCqREs", title: "حلمي حازم | توقيت كوميدي دقيق 02" },
            { id: "a0NbJtWhp7U", title: "حلمي حازم | ريلز تفاعلي ومؤثرات 03" }
        ]
    },
    {
        id: "uaeproject",
        name: "مشروع الإمارات (UAE Project)",
        subtitle: "حملات إعلانية وتغطيات وطنية فاخرة",
        icon: "🇦🇪",
        avatar: "images and videos/uae-project.jpg",
        fallbackAvatar: "images and videos/bento-art-uae.png",
        socials: [
            { type: "instagram", label: "إنستجرام", url: "https://www.instagram.com/uaeproject/" },
            { type: "tiktok", label: "تيك توك", url: "https://www.tiktok.com/@uaeproject" }
        ],
        philosophy: "كادر كلين مينيمال بألوان ملكية داكنة (Deep Luxury Grading)، نصوص فيد ناعم بتوهج أخضر إماراتي فخم، لقطات سينمائية ملحمية وبيرولز ذكاء اصطناعي تجسد روح الاتحاد الخالدة.",
        videos: [
            { id: "dHBXB8yIVJg", title: "مرسى العقبة | ahmed dubai v1" },
            { id: "42OMUceJfUc", title: "تكايا | ahmed v2" },
            { id: "sL8XH1Zmubw", title: "يجوز | ahmed dubai yjoz v4" },
            { id: "1fS-KskiROo", title: "الجائزة | ahmed v4" },
            { id: "ptRrepL0zDs", title: "تايجر | ahmed tiger v3" },
            { id: "QUh90wWIkns", title: "هيئة الطرق والمواصلات | ahmed rta v2" },
            { id: "Xy7a2W5Y2lw", title: "أوه نانان | ahmed ohnanan" },
            { id: "y-dkpeBFM5c", title: "بن غاطي دبي | ahmed dubai binghatti" },
            { id: "RsedWj6DVJ0", title: "الطي | ahmed altay v2" }
        ]
    },
    {
        id: "motion",
        name: "موشن ديزاين (Motion Graphics)",
        subtitle: "أعمال 2D & 3D وانفوجرافيك متحرك لكبرى الشركات وعملاء مختلفين",
        icon: "🎨",
        avatar: "images and videos/after-effects-logo.png",
        fallbackAvatar: "images and videos/bento-art-films.png",
        socials: [],
        philosophy: "تحريك رسومي وفيزيائي انسيابي عالي الدقة (Smooth Easing & Curves)، تجسيد الأفكار المجردة في عناصر ثلاثية الأبعاد بصرية تبرز احترافية العلامة التجارية وترسخ رسالتها التسويقية.",
        videos: [
            { id: "vgzknOOI5FA", title: "موشن ديزاين | إنفوجرافيك ثلاثي الأبعاد 01" },
            { id: "KRNaXLYY_E4", title: "موشن ديزاين | تحريك كينيتك للهوية التجارية 02" },
            { id: "3_Fdwi8jTcA", title: "موشن ديزاين | شروحات ورسوم متحركة 03" },
            { id: "m_cpXF_l3Hk", title: "موشن ديزاين | مؤثرات بصرية وانتقالات 04" },
            { id: "vdm_TSanFy0", title: "موشن ديزاين | إعلان موشن تجاري 05" }
        ]
    }
];

/* Universal Cinema Lightbox */
function openCinema(vid, title, platform = 'youtube', directUrl = '') {
    const cinemaModal = document.getElementById('uaeCinemaModal');
    const cinemaDialog = cinemaModal ? cinemaModal.querySelector('.uae-cinema-dialog') : null;
    const cinemaPlayerWrap = document.getElementById('uaeCinemaPlayerWrap');
    const cinemaVideoTitle = document.getElementById('uaeCinemaVideoTitle');
    const cinemaYtBtn = document.getElementById('uaeCinemaYtBtn');

    if (!cinemaModal || !cinemaPlayerWrap) return;
    if (cinemaVideoTitle) cinemaVideoTitle.textContent = title || 'عرض سينمائي';

    const cinemaPill = cinemaModal.querySelector('.uae-cinema-pill');
    if (cinemaPill) {
        if (platform === 'instagram') {
            cinemaPill.textContent = 'Instagram Reel 📸';
        } else if (platform === 'tiktok') {
            cinemaPill.textContent = 'TikTok Video 🎵';
        } else if (platform === 'playlist') {
            cinemaPill.textContent = 'YouTube Playlist 📺';
        } else if (platform === 'drive' || platform === 'gdrive') {
            cinemaPill.textContent = 'Google Drive Preview 📁';
        } else if (platform === 'image') {
            cinemaPill.textContent = 'معاينة كواليس 🔍';
        } else {
            cinemaPill.textContent = 'عرض سينمائي 🎬';
        }
    }

    if (cinemaYtBtn) {
        if (platform === 'drive' || platform === 'gdrive') {
            cinemaYtBtn.href = directUrl || `https://drive.google.com/file/d/${vid}/view`;
        } else if (platform === 'youtube') {
            cinemaYtBtn.href = directUrl || `https://www.youtube.com/watch?v=${vid}`;
        } else {
            cinemaYtBtn.href = directUrl || '#';
        }
        const span = cinemaYtBtn.querySelector('span');
        if (span) {
            if (platform === 'instagram') span.textContent = 'فتح في Instagram';
            else if (platform === 'tiktok') span.textContent = 'فتح في TikTok';
            else if (platform === 'playlist') span.textContent = 'فتح القائمة في YouTube';
            else if (platform === 'drive' || platform === 'gdrive') span.textContent = 'فتح في Google Drive';
            else if (platform === 'image') span.textContent = 'عرض الصورة الأصلية';
            else span.textContent = 'فتح في YouTube';
        }
    }

    if (cinemaDialog) {
        if (platform === 'playlist' || platform === 'horizontal' || platform === 'youtube' || platform === 'drive' || platform === 'gdrive') {
            cinemaDialog.classList.add('is-horizontal');
            cinemaDialog.classList.remove('is-image-mode');
        } else if (platform === 'image') {
            cinemaDialog.classList.remove('is-horizontal');
            cinemaDialog.classList.add('is-image-mode');
        } else {
            cinemaDialog.classList.remove('is-horizontal');
            cinemaDialog.classList.remove('is-image-mode');
        }
    }

    if (platform === 'instagram') {
        const cleanUrl = directUrl.endsWith('/') ? directUrl : directUrl + '/';
        cinemaPlayerWrap.innerHTML = `
            <iframe class="uae-cinema-iframe"
                src="${cleanUrl}embed/"
                frameborder="0"
                scrolling="no"
                allowtransparency="true"
                allowfullscreen>
            </iframe>
        `;
    } else if (platform === 'drive' || platform === 'gdrive') {
        cinemaPlayerWrap.innerHTML = `
            <iframe class="uae-cinema-iframe"
                src="https://drive.google.com/file/d/${vid}/preview"
                frameborder="0"
                allow="autoplay; encrypted-media; fullscreen"
                allowfullscreen>
            </iframe>
        `;
    } else if (platform === 'image') {
        cinemaPlayerWrap.innerHTML = `
            <div class="cinema-image-wrapper">
                <img src="${directUrl || vid}" alt="${title}" class="cinema-lightbox-img" />
            </div>
        `;
    } else if (platform === 'tiktok') {
        const match = directUrl.match(/video\/(\d+)/);
        const tiktokId = vid || (match ? match[1] : '');
        cinemaPlayerWrap.innerHTML = `
            <iframe class="uae-cinema-iframe"
                src="https://www.tiktok.com/embed/v2/${tiktokId}"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        `;
    } else if (platform === 'playlist') {
        cinemaPlayerWrap.innerHTML = `
            <iframe class="uae-cinema-iframe"
                src="https://www.youtube-nocookie.com/embed/videoseries?list=${vid}&autoplay=1&rel=0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
            </iframe>
        `;
    } else {
        cinemaPlayerWrap.innerHTML = `
            <iframe class="uae-cinema-iframe"
                src="https://www.youtube-nocookie.com/embed/${vid}?autoplay=1&rel=0&playsinline=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
            </iframe>
        `;
    }

    cinemaModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCinema() {
    const cinemaModal = document.getElementById('uaeCinemaModal');
    const cinemaDialog = cinemaModal ? cinemaModal.querySelector('.uae-cinema-dialog') : null;
    const cinemaPlayerWrap = document.getElementById('uaeCinemaPlayerWrap');
    if (!cinemaModal || !cinemaPlayerWrap) return;
    cinemaModal.classList.remove('active');
    cinemaPlayerWrap.innerHTML = '';
    if (cinemaDialog) {
        cinemaDialog.classList.remove('is-horizontal');
        cinemaDialog.classList.remove('is-image-mode');
    }

    // Only restore body scroll if category modal is not open
    const catModal = document.getElementById('categoryModal');
    if (!catModal || !catModal.classList.contains('active')) {
        document.body.style.overflow = '';
    }
}


/* Render All 8 Creators Stacked in Creators Hub */
function renderCreatorsSection() {
    const container = document.getElementById('creatorsStackedContainer');
    if (!container) return;

    const isEn = currentLang === 'en';
    const watchDirectLabel = isEn ? 'Watch on YouTube' : 'مشاهدة مباشرة على YouTube';
    const playTip = isEn ? 'Play in Cinema Lightbox' : 'تشغيل في المشغل السينمائي';
    const philosophyHeading = isEn ? 'Signature Editing Style & Philosophy' : 'فلسفة وستايل المونتاج الخاص';

    container.innerHTML = creatorsData.map(creator => {
        const creatorName = isEn && creator.nameEn ? creator.nameEn : (creator.nameAr || creator.name);
        const creatorSub = isEn && creator.subtitleEn ? creator.subtitleEn : (creator.subtitleAr || creator.subtitle);
        const creatorPhil = isEn && creator.philosophyEn ? creator.philosophyEn : (creator.philosophyAr || creator.philosophy);

        const socialButtonsHtml = creator.socials && creator.socials.length > 0 ? `
            <div class="creator-social-links">
                ${creator.socials.map(s => {
                    let iconSvg = '';
                    let btnClass = '';
                    if (s.type === 'tiktok') {
                        btnClass = 'btn-tiktok';
                        iconSvg = '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12.53.02C13.84 0 15.14 0 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>';
                    } else if (s.type === 'instagram') {
                        btnClass = 'btn-instagram';
                        iconSvg = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>';
                    } else if (s.type === 'youtube') {
                        btnClass = 'btn-youtube';
                        iconSvg = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>';
                    }
                    return `
                        <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="creator-social-btn ${btnClass}">
                            ${iconSvg}
                            <span>${s.label}</span>
                        </a>
                    `;
                }).join('')}
            </div>
        ` : `
            <div class="creator-social-links">
                <span class="creator-social-btn" style="border-color: rgba(56,189,248,0.3); color: #38bdf8;">
                    <span>${isEn ? '✨ Selected Works & Brand Collabs' : '✨ نماذج لأبرز العملاء والشركات'}</span>
                </span>
            </div>
        `;

        const videosCardsHtml = creator.videos.map(v => {
            const vTitle = isEn && v.titleEn ? v.titleEn : (v.titleAr || v.title);
            return `
            <div class="uae-video-card" data-vid="${v.id}" data-title="${vTitle}">
                <img class="uae-video-thumb" src="https://img.youtube.com/vi/${v.id}/maxresdefault.jpg" onerror="this.onerror=null;this.src='https://img.youtube.com/vi/${v.id}/hqdefault.jpg'" alt="${vTitle}" loading="lazy">
                <div class="uae-play-overlay">
                    <div class="uae-play-btn" title="${playTip}">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
                    </div>
                </div>
                <div class="uae-video-card-actions">
                    <span class="uae-video-tag">${vTitle}</span>
                    <a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener noreferrer" class="uae-direct-link-btn" onclick="event.stopPropagation()">
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        <span>${watchDirectLabel}</span> ↗
                    </a>
                </div>
            </div>
        `;
        }).join('');

        return `
            <div class="creator-stacked-block reveal" id="creator-${creator.id}">
                <div class="creator-block-header">
                    <div class="creator-block-meta">
                        <div class="creator-block-icon">
                            <img class="creator-avatar-img" src="${creator.avatar}" alt="${creatorName}" onerror="this.onerror=null;this.src='${creator.fallbackAvatar || 'images and videos/profile.png'}'">
                        </div>
                        <div class="creator-block-title-wrap">
                            <h3>${creatorName}</h3>
                            <p>${creatorSub}</p>
                        </div>
                    </div>
                    ${socialButtonsHtml}
                </div>

                <!-- Philosophy & Style Card -->
                <div class="creator-philosophy-card">
                    <div class="creator-philosophy-header">
                        <span class="pulse-dot-green"></span>
                        <span>${philosophyHeading}</span>
                    </div>
                    <p>${creatorPhil}</p>
                </div>

                <!-- Video Showcase Grid -->
                <div class="uae-videos-section" style="margin-top: 1rem;">
                    <div class="uae-triplets-grid">
                        ${videosCardsHtml}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Wire clicks to open cinema
    container.querySelectorAll('.uae-video-card').forEach(card => {
        card.addEventListener('click', () => {
            const vid = card.getAttribute('data-vid');
            const title = card.getAttribute('data-title');
            if (vid) {
                openCinema(vid, title);
            }
        });
    });
}

/* Sticky Anchor Navigation Bar Behavior */
function initCreatorsAnchorNav() {
    const pills = document.querySelectorAll('.creator-anchor-pill');
    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            const targetId = pill.getAttribute('data-target');
            if (!targetId) return;

            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                pills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');

                targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Update active pill on scroll
    window.addEventListener('scroll', () => {
        const blocks = document.querySelectorAll('.creator-stacked-block');
        let currentActiveId = '';
        blocks.forEach(block => {
            const rect = block.getBoundingClientRect();
            if (rect.top <= 240 && rect.bottom >= 200) {
                currentActiveId = block.id;
            }
        });

        if (currentActiveId) {
            pills.forEach(pill => {
                pill.classList.toggle('active', pill.getAttribute('data-target') === currentActiveId);
            });
        }
    }, { passive: true });
}

/* Render Creators inside Category Modal (Stacked Creators Hub) */
function renderCreatorsModalSection() {
    const container = document.getElementById('modalCreatorsStackedContainer') || document.getElementById('creatorsStackedContainer');
    const anchorNav = document.getElementById('modalCreatorsAnchorNav');
    if (!container) return;

    const isEn = currentLang === 'en';
    const watchDirectLabel = isEn ? 'Watch on YouTube' : 'مشاهدة مباشرة على YouTube';
    const playTip = isEn ? 'Play in Cinema Lightbox' : 'تشغيل في المشغل السينمائي';
    const philosophyHeading = isEn ? 'Signature Editing Style & Philosophy' : 'فلسفة وستايل المونتاج الخاص';

    if (anchorNav) {
        anchorNav.innerHTML = creatorsData.map((c, i) => {
            const creatorName = isEn && c.nameEn ? c.nameEn : (c.nameAr || c.name);
            return `
            <button class="creator-anchor-pill ${i === 0 ? 'active' : ''}" data-target="modal-creator-${c.id}" type="button" title="${creatorName}">
                <img class="pill-avatar-img" src="${c.avatar}" alt="${creatorName}" onerror="this.onerror=null;this.src='${c.fallbackAvatar || 'images and videos/profile.png'}'">
                <span>${creatorName.split(' ')[0]}</span>
            </button>
        `;
        }).join('');

        let isProgrammaticScroll = false;
        let programmaticTimer = null;

        anchorNav.querySelectorAll('.creator-anchor-pill').forEach(pill => {
            pill.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = pill.getAttribute('data-target');
                const targetEl = document.getElementById(targetId);
                const scrollBody = document.getElementById('modalScrollBody');
                if (targetEl && scrollBody) {
                    isProgrammaticScroll = true;
                    anchorNav.querySelectorAll('.creator-anchor-pill').forEach(p => p.classList.remove('active'));
                    pill.classList.add('active');

                    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

                    clearTimeout(programmaticTimer);
                    programmaticTimer = setTimeout(() => {
                        isProgrammaticScroll = false;
                    }, 800);
                }
            });
        });

        // Auto-update active pill on scroll (Scrollspy)
        const scrollBody = document.getElementById('modalScrollBody');
        if (scrollBody && !scrollBody._creatorsSpyBound) {
            scrollBody._creatorsSpyBound = true;

            const onModalScroll = () => {
                if (isProgrammaticScroll) return;

                const creatorsContent = document.getElementById('modalCreatorsContent');
                if (!creatorsContent || creatorsContent.style.display === 'none') return;

                const blocks = Array.from(container.querySelectorAll('.creator-stacked-block'));
                if (blocks.length === 0) return;

                const scrollRect = scrollBody.getBoundingClientRect();
                const triggerPoint = scrollRect.top + Math.min(260, scrollRect.height * 0.4);

                let currentId = blocks[0].id;

                const isBottom = (scrollBody.scrollHeight - scrollBody.scrollTop - scrollBody.clientHeight) < 60;
                if (isBottom) {
                    currentId = blocks[blocks.length - 1].id;
                } else {
                    for (let i = 0; i < blocks.length; i++) {
                        const bRect = blocks[i].getBoundingClientRect();
                        if (bRect.top <= triggerPoint) {
                            currentId = blocks[i].id;
                        }
                    }
                }

                const pills = anchorNav.querySelectorAll('.creator-anchor-pill');
                let newlyActive = null;
                pills.forEach(p => {
                    if (p.getAttribute('data-target') === currentId) {
                        if (!p.classList.contains('active')) {
                            p.classList.add('active');
                        }
                        newlyActive = p;
                    } else {
                        p.classList.remove('active');
                    }
                });

                if (newlyActive) {
                    const navRect = anchorNav.getBoundingClientRect();
                    const pillRect = newlyActive.getBoundingClientRect();
                    if (pillRect.left < navRect.left || pillRect.right > navRect.right) {
                        newlyActive.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                    }
                }
            };

            scrollBody.addEventListener('scroll', onModalScroll, { passive: true });
        }
    }

    container.innerHTML = creatorsData.map(creator => {
        const creatorName = isEn && creator.nameEn ? creator.nameEn : (creator.nameAr || creator.name);
        const creatorSub = isEn && creator.subtitleEn ? creator.subtitleEn : (creator.subtitleAr || creator.subtitle);
        const creatorPhil = isEn && creator.philosophyEn ? creator.philosophyEn : (creator.philosophyAr || creator.philosophy);

        const socialButtonsHtml = creator.socials && creator.socials.length > 0 ? `
            <div class="creator-social-links">
                ${creator.socials.map(s => {
                    let iconSvg = '';
                    let btnClass = '';
                    if (s.type === 'tiktok') {
                        btnClass = 'btn-tiktok';
                        iconSvg = '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12.53.02C13.84 0 15.14 0 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>';
                    } else if (s.type === 'instagram') {
                        btnClass = 'btn-instagram';
                        iconSvg = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>';
                    } else if (s.type === 'youtube') {
                        btnClass = 'btn-youtube';
                        iconSvg = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>';
                    }
                    return `
                        <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="creator-social-btn ${btnClass}">
                            ${iconSvg}
                            <span>${s.label}</span>
                        </a>
                    `;
                }).join('')}
            </div>
        ` : '';

        const videosCardsHtml = creator.videos.map(v => {
            const vTitle = isEn && v.titleEn ? v.titleEn : (v.titleAr || v.title);
            return `
            <div class="uae-video-card" data-vid="${v.id}" data-title="${vTitle}">
                <img class="uae-video-thumb" src="https://img.youtube.com/vi/${v.id}/maxresdefault.jpg" onerror="this.onerror=null;this.src='https://img.youtube.com/vi/${v.id}/hqdefault.jpg'" alt="${vTitle}" loading="lazy">
                <div class="uae-play-overlay">
                    <div class="uae-play-btn" title="${playTip}">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
                    </div>
                </div>
                <div class="uae-video-card-actions">
                    <span class="uae-video-tag">${vTitle}</span>
                    <a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener noreferrer" class="uae-direct-link-btn" onclick="event.stopPropagation()">
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        <span>${watchDirectLabel}</span> ↗
                    </a>
                </div>
            </div>
        `;
        }).join('');

        return `
            <div class="creator-stacked-block" id="modal-creator-${creator.id}">
                <div class="creator-block-header">
                    <div class="creator-block-meta">
                        <div class="creator-block-icon">
                            <img class="creator-avatar-img" src="${creator.avatar}" alt="${creatorName}" onerror="this.onerror=null;this.src='${creator.fallbackAvatar || 'images and videos/profile.png'}'">
                        </div>
                        <div class="creator-block-title-wrap">
                            <h3>${creatorName}</h3>
                            <p>${creatorSub}</p>
                        </div>
                    </div>
                    ${socialButtonsHtml}
                </div>

                <div class="creator-philosophy-card">
                    <div class="creator-philosophy-header">
                        <span class="pulse-dot-green"></span>
                        <span>${philosophyHeading}</span>
                    </div>
                    <p>${creatorPhil}</p>
                </div>

                <div class="uae-videos-section" style="margin-top: 1rem;">
                    <div class="uae-triplets-grid">
                        ${videosCardsHtml}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    container.querySelectorAll('.uae-video-card').forEach(card => {
        card.addEventListener('click', () => {
            const vid = card.getAttribute('data-vid');
            const title = card.getAttribute('data-title');
            if (vid) openCinema(vid, title);
        });
    });
}

/* Branded Ads Grid Rendering */
function renderBrandedAdsGrid() {
    const grid = document.getElementById('brandedAdsGrid');
    if (!grid) return;

    const isEn = currentLang === 'en';

    grid.innerHTML = brandedAdsData.map((item, idx) => {
        let platformLabel = 'Instagram 📸';
        let platformClass = 'platform-instagram';
        if (item.platform === 'tiktok') {
            platformLabel = 'TikTok 🎵';
            platformClass = 'platform-tiktok';
        } else if (item.platform === 'youtube') {
            platformLabel = 'YouTube Shorts 🎬';
            platformClass = 'platform-youtube';
        }

        const secondaryLogoHtml = item.logoSecondary ? `
            <div class="brand-logo-img-wrapper" title="${item.brand}">
                <img src="${item.logoSecondary}" alt="${item.brand}" class="brand-card-logo-img">
            </div>
        ` : '';

        const cardTitle = isEn && item.titleEn ? item.titleEn : (item.titleAr || item.title);
        const cardDesc = isEn && item.descEn ? item.descEn : (item.descAr || item.desc);
        const miniLabel = isEn ? 'Mini Window' : 'نافذة مصغرة';
        const openOrigLabel = isEn ? 'Open Original' : 'فتح الرابط الأصلي';
        const playTip = isEn ? 'Play in Mini Lightbox' : 'تشغيل في نافذة مصغرة';

        return `
            <div class="branded-ad-card" data-idx="${idx}">
                <div class="branded-ad-topbar">
                    <div class="brand-logos-container">
                        <div class="brand-logo-img-wrapper" title="${item.brand}">
                            <img src="${item.logo}" alt="${item.brand}" class="brand-card-logo-img">
                        </div>
                        ${secondaryLogoHtml}
                    </div>
                    <span class="brand-ad-platform-badge ${platformClass}">${platformLabel}</span>
                </div>

                <div class="branded-ad-preview-wrap">
                    <img src="${item.thumb}" alt="${cardTitle}" class="branded-ad-thumb-img" onerror="this.onerror=null;this.src='images and videos/bento-art-brands.png'" loading="lazy">
                    <div class="uae-play-overlay">
                        <div class="uae-play-btn" title="${playTip}">
                            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
                        </div>
                    </div>
                    <div class="branded-thumb-bottom-gradient"></div>
                </div>

                <div class="branded-ad-info">
                    <h4 class="branded-ad-title">${cardTitle}</h4>
                    <p class="branded-ad-desc">${cardDesc}</p>
                    <div class="branded-ad-actions">
                        <button class="branded-mini-window-btn" data-idx="${idx}" type="button">
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
                            <span>${miniLabel}</span>
                        </button>
                        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="branded-external-link" onclick="event.stopPropagation()">
                            <span>${openOrigLabel}</span> ↗
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    grid.querySelectorAll('.branded-ad-card').forEach(card => {
        card.addEventListener('click', () => {
            const idx = parseInt(card.getAttribute('data-idx'), 10);
            const item = brandedAdsData[idx];
            if (!item) return;
            const vid = item.youtubeId || (item.url.match(/video\/(\d+)/) ? item.url.match(/video\/(\d+)/)[1] : '');
            openCinema(vid, item.title, item.platform, item.url);
        });
    });
}

/* Doctors Playlists Section Rendering */
/* Doctors Stacked Section Rendering with Real Playlists & Vertical 9:16 Video Cards */
function renderDoctorsPlaylistsSection() {
    const container = document.getElementById('doctorsStackedContainer');
    if (!container) return;

    const isEn = currentLang === 'en';

    function getCleanDocTitle(d, isEnglish) {
        if (d.isHighlighted) {
            return isEnglish ? (d.nameEn || "Highlighted Projects") : (d.nameAr || d.name || "المشاريع الطبية المميزة");
        }
        if (isEnglish && d.nameEn) return d.nameEn;
        if (!isEnglish && d.nameAr) return d.nameAr;
        if (d.name && d.name.includes(' | ')) {
            const parts = d.name.split(' | ');
            const isFirstArabic = /[\u0600-\u06FF]/.test(parts[0]);
            if (isEnglish) {
                return isFirstArabic ? (parts[1] || parts[0]) : parts[0];
            } else {
                return isFirstArabic ? parts[0] : (parts[1] || parts[0]);
            }
        }
        return d.name;
    }

    const anchorNav = document.getElementById('modalDoctorsAnchorNav');
    if (anchorNav) {
        anchorNav.innerHTML = doctorsPlaylistsData.map((d, i) => {
            const docName = getCleanDocTitle(d, isEn);
            const shortName = d.isHighlighted ? (isEn ? "Featured" : "المميزة") : docName;
            return `
                <button class="creator-anchor-pill ${i === 0 ? 'active' : ''}" data-target="doc-block-${d.id}" type="button" title="${docName}">
                    <span style="font-size: 1.15rem; line-height: 1; margin-left: 5px;">${d.icon}</span>
                    <span>${shortName}</span>
                </button>
            `;
        }).join('');

        let isDocScroll = false;
        let docTimer = null;

        anchorNav.querySelectorAll('.creator-anchor-pill').forEach(pill => {
            pill.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = pill.getAttribute('data-target');
                const targetEl = document.getElementById(targetId);
                const scrollBody = document.getElementById('modalScrollBody');
                if (targetEl && scrollBody) {
                    isDocScroll = true;
                    anchorNav.querySelectorAll('.creator-anchor-pill').forEach(p => p.classList.remove('active'));
                    pill.classList.add('active');

                    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

                    clearTimeout(docTimer);
                    docTimer = setTimeout(() => {
                        isDocScroll = false;
                    }, 800);
                }
            });
        });

        const scrollBody = document.getElementById('modalScrollBody');
        if (scrollBody && !scrollBody._docSpyBound) {
            scrollBody._docSpyBound = true;
            scrollBody.addEventListener('scroll', () => {
                if (isDocScroll) return;
                const doctorsContent = document.getElementById('modalDoctorsContent');
                if (!doctorsContent || doctorsContent.style.display === 'none') return;

                const blocks = Array.from(container.querySelectorAll('.doctor-stacked-block'));
                if (blocks.length === 0) return;

                const scrollRect = scrollBody.getBoundingClientRect();
                const triggerPoint = scrollRect.top + Math.min(260, scrollRect.height * 0.35);

                let currentId = blocks[0].id;
                for (let i = 0; i < blocks.length; i++) {
                    const bRect = blocks[i].getBoundingClientRect();
                    if (bRect.top <= triggerPoint) {
                        currentId = blocks[i].id;
                    }
                }

                anchorNav.querySelectorAll('.creator-anchor-pill').forEach(p => {
                    p.classList.toggle('active', p.getAttribute('data-target') === currentId);
                });
            }, { passive: true });
        }
    }
    container.innerHTML = doctorsPlaylistsData.map(doc => {
        const highlightClass = doc.isHighlighted ? 'is-highlighted' : '';
        const docName = getCleanDocTitle(doc, isEn);
        const docSub = isEn && doc.subtitleEn ? doc.subtitleEn : (doc.subtitleAr || doc.subtitle);
        const docDesc = isEn && doc.descEn ? doc.descEn : (doc.descAr || doc.desc);
        const watchLabel = isEn ? 'Watch on YouTube' : 'مشاهدة على YouTube';
        const playTip = isEn ? 'Play in Cinema Lightbox' : 'تشغيل في المشغل السينمائي';
        const reelsText = `${doc.videos.length} ${isEn ? 'Reels' : 'فيديوهات ريلز'}`;
        const playlistBtnText = `${isEn ? 'Open Full Playlist' : 'قائمة التشغيل كاملة'} (${doc.videos.length} ${isEn ? 'videos' : 'فيديو'})`;

        const badgeHtml = doc.isHighlighted ? `
            <div class="doctor-badge-wrap">
                <span class="doctor-gold-badge">⭐ ${isEn ? 'Highlighted Projects • Most In-Demand' : 'المشاريع المميزة • الأكثر طلباً'}</span>
            </div>
        ` : '';

        const videosHtml = doc.videos.map(v => {
            const vTitle = isEn && v.titleEn ? v.titleEn : (v.titleAr || v.title);
            return `
            <div class="doctor-video-card" data-vid="${v.id}" data-title="${vTitle}">
                <img class="doctor-video-thumb" src="https://img.youtube.com/vi/${v.id}/maxresdefault.jpg" onerror="this.onerror=null;this.src='https://img.youtube.com/vi/${v.id}/hqdefault.jpg'" alt="${vTitle}" loading="lazy">
                <div class="uae-play-overlay">
                    <div class="uae-play-btn" title="${playTip}">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
                    </div>
                </div>
                <div class="doctor-video-actions">
                    <span class="doctor-video-tag" title="${vTitle}">${vTitle}</span>
                    <a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener noreferrer" class="doctor-direct-link-btn" onclick="event.stopPropagation()">
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        <span>${watchLabel}</span> ↗
                    </a>
                </div>
            </div>
        `;
        }).join('');

        return `
            <div class="doctor-stacked-block ${highlightClass}" id="doc-block-${doc.id}">
                ${badgeHtml}
                <div class="doctor-block-header">
                    <div class="doctor-block-meta">
                        <div class="doctor-avatar-circle">
                            <span>${doc.icon}</span>
                        </div>
                        <div class="doctor-block-title-wrap">
                            <h3>${docName}</h3>
                            <p>${docSub} • <span class="doc-video-count">${reelsText}</span></p>
                        </div>
                    </div>
                    <a href="${doc.playlistUrl}" target="_blank" rel="noopener noreferrer" class="doctor-playlist-btn">
                        <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M19 9H2V7h17v2zm0-4H2V3h17v2zm-7 8H2v-2h10v2zm5-2v6l5-3-5-3z"/></svg>
                        <span>${playlistBtnText}</span> ↗
                    </a>
                </div>

                <div class="doctor-desc-box">
                    <p style="margin: 0;">${docDesc}</p>
                </div>

                <div class="doctor-videos-grid">
                    ${videosHtml}
                </div>
            </div>
        `;
    }).join('');

    // Wire clicks to open in vertical cinema lightbox
    container.querySelectorAll('.doctor-video-card').forEach(card => {
        card.addEventListener('click', () => {
            const vid = card.getAttribute('data-vid');
            const title = card.getAttribute('data-title');
            if (vid) {
                openCinema(vid, title, 'youtube', `https://www.youtube.com/watch?v=${vid}`);
            }
        });
    });
}

/* Category Modals (UAE, Media-Post, Branded-Ads, Doctors, and Standard) */
/* ========================================================
   SMOOTH 60FPS LIVING COSMIC BACKGROUND SCROLL ENGINE (REFERENCE POSTER THEME)
   ======================================================== */
function initCosmicBackgroundScrollAnimation() {
    let ticking = false;

    function updateScrollVars() {
        const scrollY = window.scrollY || window.pageYOffset || 0;
        const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        const progress = Math.min(1, Math.max(0, scrollY / maxScroll));

        document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);
        document.documentElement.style.setProperty('--scroll-progress', progress.toFixed(4));

        // Parallax continuous flow for Reference Poster overlay, aurora ribbons & speed lines (moving continuously with scroll)
        const posterBg = document.querySelector('.ambient-reference-poster');
        const auroraTop = document.querySelector('.aurora-top-right');
        const auroraMid = document.querySelector('.aurora-center-flow');
        const auroraBottom = document.querySelector('.aurora-bottom-left');
        const speedLines = document.querySelector('.ambient-speed-lines');
        const streaks = document.querySelectorAll('.glow-streak');
        const orbs = document.querySelectorAll('.orb');

        if (posterBg) {
            posterBg.style.transform = `translate3d(${-scrollY * 0.02}px, ${scrollY * 0.08}px, 0) scale(${1 + progress * 0.03})`;
            posterBg.style.opacity = `${0.18 + Math.sin(progress * Math.PI) * 0.06}`;
        }
        if (auroraTop) {
            auroraTop.style.transform = `translate3d(${-scrollY * 0.06}px, ${scrollY * 0.22}px, 0)`;
        }
        if (auroraMid) {
            auroraMid.style.transform = `translate3d(${scrollY * 0.08}px, ${scrollY * 0.15}px, 0)`;
        }
        if (auroraBottom) {
            auroraBottom.style.transform = `translate3d(0, ${-scrollY * 0.16}px, 0)`;
        }
        if (speedLines) {
            speedLines.style.transform = `translate3d(${scrollY * 0.08}px, ${scrollY * 0.22}px, 0)`;
        }
        if (streaks && streaks.length > 0) {
            streaks.forEach((st, idx) => {
                const spd = 0.18 + idx * 0.08;
                st.style.transform = `translate3d(${scrollY * spd * (idx % 2 === 0 ? 1 : -1)}px, 0, 0)`;
            });
        }
        if (orbs && orbs.length > 0) {
            orbs.forEach((orb, i) => {
                const speed = 0.08 + (i % 3) * 0.05;
                const dir = (i % 2 === 0) ? 1 : -1;
                orb.style.transform = `translate3d(0, ${scrollY * speed * dir}px, 0)`;
            });
        }

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateScrollVars);
            ticking = true;
        }
    }, { passive: true });

    // Initial update
    updateScrollVars();
}

function initCategoryModals() {
    const modal = document.getElementById('categoryModal');
    const dialog = document.getElementById('categoryModalDialog');
    const closeBtn = document.getElementById('categoryModalClose');
    const backdrop = document.getElementById('categoryModalBackdrop');
    const expandBtn = document.getElementById('categoryModalExpand');
    const backBtn = document.getElementById('categoryModalBack');
    const backFooterBtn = document.getElementById('modalBackFooterBtn');
    const scrollTopBtn = document.getElementById('categoryModalScrollTop');
    const scrollBody = document.getElementById('modalScrollBody');

    const standardContent = document.getElementById('modalStandardContent');
    const uaeContent = document.getElementById('modalUAEContent');
    const mediaPostContent = document.getElementById('modalMediaPostContent');
    const brandedContent = document.getElementById('modalBrandedContent');
    const doctorsContent = document.getElementById('modalDoctorsContent');
    const creatorsContent = document.getElementById('modalCreatorsContent');
    const shortFilmContent = document.getElementById('modalShortFilmContent');
    const uaeVideosGrid = document.getElementById('uaeVideosGrid');
    const mediaPostVideosGrid = document.getElementById('mediaPostVideosGrid');
    const mediapostFeaturedCard = document.getElementById('mediapostFeaturedCard');

    const modalBadge = document.getElementById('modalBadge');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const deliverablesList = document.getElementById('modalDeliverablesList');
    const partnersTags = document.getElementById('modalPartnersTags');
    const waBtn = document.getElementById('modalWhatsAppBtn');

    if (!modal) return;

    // Cinema lightbox listeners
    const cinemaBackdrop = document.getElementById('uaeCinemaBackdrop');
    const cinemaClose = document.getElementById('uaeCinemaClose');
    if (cinemaBackdrop) cinemaBackdrop.addEventListener('click', closeCinema);
    if (cinemaClose) cinemaClose.addEventListener('click', closeCinema);

    // Standalone Renderers for UAE and MediaPost Video Grids with Full Bilingual Support
    function renderUAEVideosSection() {
        const grid = document.getElementById('uaeVideosGrid');
        if (!grid) return;
        const isEn = currentLang === 'en';
        const watchDirectLabel = isEn ? 'Watch directly on YouTube' : 'مشاهدة مباشرة على YouTube';
        const playTip = isEn ? 'Play in Cinema Lightbox' : 'تشغيل في المشغل السينمائي';

        grid.innerHTML = uaeVideosData.map(v => {
            const vTitle = isEn && v.titleEn ? v.titleEn : (v.titleAr || v.title);
            return `
            <div class="uae-video-card" data-vid="${v.id}" data-title="${vTitle}">
                <img class="uae-video-thumb" src="https://img.youtube.com/vi/${v.id}/maxresdefault.jpg" onerror="this.onerror=null;this.src='https://img.youtube.com/vi/${v.id}/hqdefault.jpg'" alt="${vTitle}" loading="lazy">
                <div class="uae-play-overlay">
                    <div class="uae-play-btn" title="${playTip}">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
                    </div>
                </div>
                <div class="uae-video-card-actions">
                    <span class="uae-video-tag">${vTitle}</span>
                    <a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener noreferrer" class="uae-direct-link-btn" onclick="event.stopPropagation()">
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        <span>${watchDirectLabel}</span> ↗
                    </a>
                </div>
            </div>
        `;
        }).join('');

        grid.querySelectorAll('.uae-video-card').forEach(card => {
            card.addEventListener('click', () => {
                const vid = card.getAttribute('data-vid');
                const title = card.getAttribute('data-title');
                if (vid) openCinema(vid, title);
            });
        });
    }

    function renderMediaPostVideosSection() {
        const grid = document.getElementById('mediaPostVideosGrid');
        if (!grid) return;
        const isEn = currentLang === 'en';
        const watchDirectLabel = isEn ? 'Watch directly on YouTube' : 'مشاهدة مباشرة على YouTube';
        const playTip = isEn ? 'Play in Cinema Lightbox' : 'تشغيل في المشغل السينمائي';

        grid.innerHTML = mediaPostVideosData.map(v => {
            const vTitle = isEn && v.titleEn ? v.titleEn : (v.titleAr || v.title);
            return `
            <div class="uae-video-card" data-vid="${v.id}" data-title="${vTitle}">
                <img class="uae-video-thumb" src="https://img.youtube.com/vi/${v.id}/maxresdefault.jpg" onerror="this.onerror=null;this.src='https://img.youtube.com/vi/${v.id}/hqdefault.jpg'" alt="${vTitle}" loading="lazy">
                <div class="uae-play-overlay">
                    <div class="uae-play-btn" title="${playTip}">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
                    </div>
                </div>
                <div class="uae-video-card-actions">
                    <span class="uae-video-tag">${vTitle}</span>
                    <a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener noreferrer" class="uae-direct-link-btn" onclick="event.stopPropagation()">
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        <span>${watchDirectLabel}</span> ↗
                    </a>
                </div>
            </div>
        `;
        }).join('');

        grid.querySelectorAll('.uae-video-card').forEach(card => {
            card.addEventListener('click', () => {
                const vid = card.getAttribute('data-vid');
                const title = card.getAttribute('data-title');
                if (vid) openCinema(vid, title);
            });
        });
    }

    window.renderUAEVideosSection = renderUAEVideosSection;
    window.renderMediaPostVideosSection = renderMediaPostVideosSection;

    // Initial render
    renderUAEVideosSection();
    renderMediaPostVideosSection();

    // Wire Featured Card (Ali & Magdy collab)
    if (mediapostFeaturedCard) {
        mediapostFeaturedCard.addEventListener('click', () => {
            const vid = mediapostFeaturedCard.getAttribute('data-vid');
            const title = mediapostFeaturedCard.getAttribute('data-title');
            if (vid) openCinema(vid, title);
        });
    }

    function openModal(catKey) {
        modal.setAttribute('data-active-cat', catKey);
        const data = categoryDetailsData[catKey];
        if (!data) return;

        const isAr = currentLang === 'ar';
        if (modalBadge) modalBadge.textContent = isAr ? data.badgeAr : data.badgeEn;
        if (modalTitle) modalTitle.textContent = isAr ? data.titleAr : data.titleEn;
        if (modalDesc) modalDesc.textContent = isAr ? data.descAr : data.descEn;

        // Always populate deliverables and partner tags so details are never lost
        if (deliverablesList && data.deliverablesAr) {
            const items = isAr ? data.deliverablesAr : data.deliverablesEn;
            deliverablesList.innerHTML = items.map(item => `<li><span class="check-icon">✓</span> ${item}</li>`).join('');
        }
        if (partnersTags && data.partners) {
            partnersTags.innerHTML = data.partners.map(p => `<span class="partner-tag">${p}</span>`).join('');
        }

        const genericHeader = document.getElementById('modalGenericHeader');

        // Manage visibility per category
        if (catKey === 'short-film') {
            if (genericHeader) genericHeader.style.display = 'none';
            if (standardContent) standardContent.style.display = 'none';
            if (uaeContent) uaeContent.style.display = 'none';
            if (mediaPostContent) mediaPostContent.style.display = 'none';
            if (brandedContent) brandedContent.style.display = 'none';
            if (doctorsContent) doctorsContent.style.display = 'none';
            if (creatorsContent) creatorsContent.style.display = 'none';
            if (shortFilmContent) shortFilmContent.style.display = 'block';
            renderShortFilmsSection();
        } else if (catKey === 'uae-special') {
            if (genericHeader) genericHeader.style.display = 'none';
            if (standardContent) standardContent.style.display = 'none';
            if (uaeContent) uaeContent.style.display = 'block';
            if (mediaPostContent) mediaPostContent.style.display = 'none';
            if (brandedContent) brandedContent.style.display = 'none';
            if (doctorsContent) doctorsContent.style.display = 'none';
            if (creatorsContent) creatorsContent.style.display = 'none';
            if (shortFilmContent) shortFilmContent.style.display = 'none';
            renderUAEVideosSection();
        } else if (catKey === 'media-post') {
            if (genericHeader) genericHeader.style.display = 'block';
            if (standardContent) standardContent.style.display = 'none';
            if (uaeContent) uaeContent.style.display = 'none';
            if (mediaPostContent) mediaPostContent.style.display = 'block';
            if (brandedContent) brandedContent.style.display = 'none';
            if (doctorsContent) doctorsContent.style.display = 'none';
            if (creatorsContent) creatorsContent.style.display = 'none';
            if (shortFilmContent) shortFilmContent.style.display = 'none';
            renderMediaPostVideosSection();
            if (brandedContent) brandedContent.style.display = 'none';
            if (doctorsContent) doctorsContent.style.display = 'none';
            if (creatorsContent) creatorsContent.style.display = 'none';
            if (shortFilmContent) shortFilmContent.style.display = 'none';
        } else if (catKey === 'branded-ads') {
            if (genericHeader) genericHeader.style.display = 'block';
            if (standardContent) standardContent.style.display = 'none';
            if (uaeContent) uaeContent.style.display = 'none';
            if (mediaPostContent) mediaPostContent.style.display = 'none';
            if (brandedContent) brandedContent.style.display = 'block';
            if (doctorsContent) doctorsContent.style.display = 'none';
            if (creatorsContent) creatorsContent.style.display = 'none';
            if (shortFilmContent) shortFilmContent.style.display = 'none';
            renderBrandedAdsGrid();
        } else if (catKey === 'doctors') {
            if (genericHeader) genericHeader.style.display = 'block';
            if (standardContent) standardContent.style.display = 'none';
            if (uaeContent) uaeContent.style.display = 'none';
            if (mediaPostContent) mediaPostContent.style.display = 'none';
            if (brandedContent) brandedContent.style.display = 'none';
            if (doctorsContent) doctorsContent.style.display = 'block';
            if (creatorsContent) creatorsContent.style.display = 'none';
            if (shortFilmContent) shortFilmContent.style.display = 'none';
            renderDoctorsPlaylistsSection();
        } else if (catKey === 'creators' || catKey === 'top-creators') {
            if (genericHeader) genericHeader.style.display = 'none';
            if (standardContent) standardContent.style.display = 'none';
            if (uaeContent) uaeContent.style.display = 'none';
            if (mediaPostContent) mediaPostContent.style.display = 'none';
            if (brandedContent) brandedContent.style.display = 'none';
            if (doctorsContent) doctorsContent.style.display = 'none';
            if (creatorsContent) creatorsContent.style.display = 'block';
            if (shortFilmContent) shortFilmContent.style.display = 'none';
            renderCreatorsModalSection();
        } else {
            if (genericHeader) genericHeader.style.display = 'block';
            if (standardContent) standardContent.style.display = 'none';
            if (uaeContent) uaeContent.style.display = 'none';
            if (mediaPostContent) mediaPostContent.style.display = 'none';
            if (brandedContent) brandedContent.style.display = 'none';
            if (doctorsContent) doctorsContent.style.display = 'none';
            if (creatorsContent) creatorsContent.style.display = 'none';
            if (shortFilmContent) shortFilmContent.style.display = 'none';
        }

        if (waBtn) {
            const rawMsg = isAr ? data.whatsappMsgAr : data.whatsappMsgEn;
            waBtn.href = `https://wa.me/201147003530?text=${encodeURIComponent(rawMsg)}`;
        }

        const scrollParam = (new URLSearchParams(window.location.search)).get('scroll');
        if (scrollBody) {
            scrollBody.scrollTop = scrollParam ? parseInt(scrollParam, 10) : 0;
            setTimeout(() => {
                scrollBody.dispatchEvent(new Event('scroll'));
            }, 300);
        }
        if (dialog) dialog.classList.remove('is-fullscreen');
        updateExpandButtonText(false);

        modal.classList.add('active');
        renderModalDynamicThemeBg(catKey);
        updateModalOtherProjectsState(catKey);
        document.body.style.overflow = 'hidden';
    }

    function updateModalOtherProjectsState(activeCat) {
        let normalizedKey = activeCat;
        if (activeCat === 'creators') normalizedKey = 'top-creators';
        if (activeCat === 'cinema') normalizedKey = 'short-film';
        if (activeCat === 'uae') normalizedKey = 'uae-special';
        if (activeCat === 'commercials') normalizedKey = 'branded-ads';
        if (activeCat === 'post') normalizedKey = 'media-post';

        const isArLang = (typeof currentLang !== 'undefined' ? currentLang : 'ar') === 'ar';

        document.querySelectorAll('.other-project-card[data-switch-cat]').forEach(card => {
            const cardCat = card.getAttribute('data-switch-cat');
            const isCurrent = (cardCat === normalizedKey);

            card.classList.toggle('is-current', isCurrent);
            card.disabled = isCurrent;
            card.setAttribute('aria-disabled', isCurrent ? 'true' : 'false');

            const statusTag = card.querySelector('.op-status-tag');
            if (statusTag) {
                statusTag.style.display = isCurrent ? 'inline-block' : 'none';
                statusTag.textContent = isArLang ? 'القسم الحالي' : 'Current Section';
            }

            const actionLabel = card.querySelector('.op-action-label');
            if (actionLabel) {
                if (isCurrent) {
                    actionLabel.textContent = isArLang ? 'أنت تتصفح هذا التخصص الآن' : 'Currently Viewing';
                } else {
                    actionLabel.textContent = isArLang ? 'استعراض التخصص' : 'Explore Category';
                }
            }
        });
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        if (dialog) dialog.classList.remove('is-fullscreen');
        stopModalWavesAnimation();
    }

    function toggleFullscreen() {
        if (!dialog) return;
        const isFull = dialog.classList.toggle('is-fullscreen');
        updateExpandButtonText(isFull);
    }

    function updateExpandButtonText(isFull) {
        if (!expandBtn) return;
        const textSpan = expandBtn.querySelector('.expand-text');
        if (textSpan) {
            textSpan.textContent = isFull ? 'تصغير للنافذة' : 'فتح الصفحة كاملة';
        }
    }

    if (expandBtn) expandBtn.addEventListener('click', toggleFullscreen);
    if (backBtn) backBtn.addEventListener('click', closeModal);
    if (backFooterBtn) backFooterBtn.addEventListener('click', closeModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    const jumpTermsBtn = document.getElementById('modalJumpTermsBtn');
    if (jumpTermsBtn) {
        jumpTermsBtn.addEventListener('click', () => {
            closeModal();
            if (typeof window.navigateTo === 'function') {
                window.navigateTo('terms');
            }
        });
    }

    document.querySelectorAll('.other-project-card[data-switch-cat]').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            if (card.disabled || card.classList.contains('is-current')) return;
            const targetCat = card.getAttribute('data-switch-cat');
            if (targetCat) {
                openModal(targetCat);
                if (scrollBody) scrollBody.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

        if (scrollTopBtn && scrollBody) {
        scrollTopBtn.addEventListener('click', () => {
            scrollBody.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Modal Scroll-driven reactive background effect
    if (scrollBody && dialog) {
        let modalScrollTicking = false;
        scrollBody.addEventListener('scroll', () => {
            if (!modalScrollTicking) {
                window.requestAnimationFrame(() => {
                    const sTop = scrollBody.scrollTop;
                    const sMax = Math.max(1, scrollBody.scrollHeight - scrollBody.clientHeight);
                    const mProg = Math.min(1, Math.max(0, sTop / sMax));
                    dialog.style.setProperty('--modal-scroll-y', `${sTop}px`);
                    dialog.style.setProperty('--modal-scroll-progress', mProg.toFixed(4));

                    const floatingItems = dialog.querySelectorAll('.theme-floating-item');
                    floatingItems.forEach((item, idx) => {
                        const speed = 0.05 + (idx % 3) * 0.04;
                        item.style.transform = `translate3d(0, ${-sTop * speed}px, 0)`;
                    });

                    modalScrollTicking = false;
                });
                modalScrollTicking = true;
            }
        }, { passive: true });
    }

    document.querySelectorAll('[data-category-modal]').forEach(card => {
        card.addEventListener('click', () => {
            const cat = card.getAttribute('data-category-modal');
            openModal(cat);
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const cinemaModal = document.getElementById('uaeCinemaModal');
            if (cinemaModal && cinemaModal.classList.contains('active')) {
                closeCinema();
            } else if (modal && modal.classList.contains('active')) {
                closeModal();
            }
        }
    });
}
/* ========================================================
   COPY ACTIONS WITH TOOLTIPS
   ======================================================== */
function initCopyButtons() {
    const copyBtns = document.querySelectorAll('[data-copy-target]');
    copyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const textToCopy = btn.getAttribute('data-copy-target');
            if (!textToCopy) return;

            navigator.clipboard.writeText(textToCopy).then(() => {
                const originalText = btn.innerHTML;
                const feedbackText = currentLang === 'ar' ? 'تم النسخ ✓' : 'Copied ✓';
                btn.innerHTML = feedbackText;
                btn.style.borderColor = 'var(--accent-cyan-light)';

                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.borderColor = '';
                }, 1800);
            });
        });
    });
}

/* ========================================================
   CUSTOM CURSOR
   ======================================================== */
function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const follower = document.querySelector('.custom-cursor-follower');
    if (!cursor || !follower) return;

    let posX = 0, posY = 0;
    let mouseX = 0, mouseY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    function renderFollower() {
        posX += (mouseX - posX) * 0.2;
        posY += (mouseY - posY) * 0.2;
        follower.style.transform = `translate(${posX}px, ${posY}px)`;
        requestAnimationFrame(renderFollower);
    }
    renderFollower();

    function bindHoverables() {
        const hoverables = document.querySelectorAll('a, button, .card, .chat-bubble, iframe, .stat-box, .about-avatar-card, .creator-tab-btn, .contact-card, .term-card');
        hoverables.forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
        });
    }
    bindHoverables();
}

/* ========================================================
   TESTIMONIALS INFINITE SMOOTH AUTO-SLIDER & DRAG
   ======================================================== */
function initTestimonialsSlider() {
    const slider = document.getElementById('testimonialsSlider');
    const track = document.getElementById('testimonialsTrack');
    if (!slider || !track) return;

    let isDown = false;
    let isHovered = false;
    let startX = 0;
    let scrollStart = 0;
    const baseSpeed = 0.85;
    let currentSpeed = baseSpeed;
    let targetSpeed = baseSpeed;

    slider.addEventListener('mouseenter', () => {
        isHovered = true;
        targetSpeed = 0;
    });
    slider.addEventListener('mouseleave', () => {
        isHovered = false;
        isDown = false;
        targetSpeed = baseSpeed;
    });
    slider.addEventListener('touchstart', () => {
        isHovered = true;
        targetSpeed = 0;
    }, { passive: true });
    slider.addEventListener('touchend', () => {
        isHovered = false;
        targetSpeed = baseSpeed;
    });

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        targetSpeed = 0;
        currentSpeed = 0;
        slider.style.cursor = 'grabbing';
        startX = e.pageX - slider.offsetLeft;
        scrollStart = slider.scrollLeft;
    });

    window.addEventListener('mouseup', () => {
        if (isDown) {
            isDown = false;
            targetSpeed = isHovered ? 0 : baseSpeed;
            slider.style.cursor = 'grab';
        }
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.6;
        slider.scrollLeft = scrollStart - walk;
    });

    function ticker() {
        if (!isDown) {
            // Smooth gradual inertia: decelerates gradually to 0 on hover, accelerates on leave
            currentSpeed += (targetSpeed - currentSpeed) * 0.06;
            if (Math.abs(currentSpeed) > 0.005) {
                slider.scrollLeft += currentSpeed;
                const half = track.scrollWidth / 2;
                if (half > 0) {
                    if (slider.scrollLeft >= half) {
                        slider.scrollLeft -= half;
                    } else if (slider.scrollLeft <= 0) {
                        slider.scrollLeft += half;
                    }
                }
            }
        }
        requestAnimationFrame(ticker);
    }
    requestAnimationFrame(ticker);
}

/* ========================================================
   BRANDS MARQUEE AUTO-SLIDER & INFINITE SMOOTH SCROLL (LIKE TESTIMONIALS)
   ======================================================== */
function initBrandsSliderControls() {
    const container = document.getElementById('brandsMarqueeContainer');
    const track = document.getElementById('brandsTrack');
    const prevBtn = document.getElementById('brandsPrevBtn');
    const nextBtn = document.getElementById('brandsNextBtn');
    if (!container || !track) return;

    let isDown = false;
    let isHovered = false;
    let startX = 0;
    let scrollStart = 0;
    const baseSpeed = 0.85; // exactly matching testimonials speed
    let currentSpeed = baseSpeed;
    let targetSpeed = baseSpeed;

    container.style.cursor = 'grab';

    container.addEventListener('mouseenter', () => {
        isHovered = true;
        targetSpeed = 0;
    });
    container.addEventListener('mouseleave', () => {
        isHovered = false;
        isDown = false;
        targetSpeed = baseSpeed;
    });
    container.addEventListener('touchstart', () => {
        isHovered = true;
        targetSpeed = 0;
    }, { passive: true });
    container.addEventListener('touchend', () => {
        isHovered = false;
        targetSpeed = baseSpeed;
    });

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        targetSpeed = 0;
        currentSpeed = 0;
        container.style.cursor = 'grabbing';
        startX = e.pageX - container.offsetLeft;
        scrollStart = container.scrollLeft;
    });

    window.addEventListener('mouseup', () => {
        if (isDown) {
            isDown = false;
            targetSpeed = isHovered ? 0 : baseSpeed;
            container.style.cursor = 'grab';
        }
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 1.5;
        container.scrollLeft = scrollStart - walk;
    });

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const half = track.scrollWidth / 2;
            if (container.scrollLeft <= 50 && half > 0) {
                container.scrollLeft += half;
            }
            container.scrollBy({ left: -280, behavior: 'smooth' });
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const half = track.scrollWidth / 2;
            if (half > 0 && container.scrollLeft >= half) {
                container.scrollLeft -= half;
            }
            container.scrollBy({ left: 280, behavior: 'smooth' });
        });
    }

    function brandsTicker() {
        if (!isDown) {
            // Smooth gradual inertia: decelerates gradually to 0 on hover, accelerates on leave
            currentSpeed += (targetSpeed - currentSpeed) * 0.06;
            if (Math.abs(currentSpeed) > 0.005) {
                container.scrollLeft += currentSpeed;
                const half = track.scrollWidth / 2;
                if (half > 0) {
                    if (container.scrollLeft >= half) {
                        container.scrollLeft -= half;
                    } else if (container.scrollLeft <= 0) {
                        container.scrollLeft += half;
                    }
                }
            }
        }
        requestAnimationFrame(brandsTicker);
    }
    requestAnimationFrame(brandsTicker);
}

/* ========================================================
   SCROLL REVEALS
   ======================================================== */
function observeReveals() {
    const activeSectionReveals = document.querySelectorAll('.page-section.active .reveal');
    activeSectionReveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 80) {
            el.classList.add('active');
        }
    });

    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.05 });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
}

/* ========================================================
   LANGUAGE TRANSLATION
   ======================================================== */
function updateLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.title = dict.pageTitle;
    const mainWrap = document.querySelector('main') || document.querySelector('.container') || document.body;
    if (mainWrap) {
        mainWrap.classList.remove('lang-switch-anim');
        void mainWrap.offsetWidth;
        mainWrap.classList.add('lang-switch-anim');
        setTimeout(() => mainWrap.classList.remove('lang-switch-anim'), 500);
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            if (dict[key].includes('<') || el.id === 'bioText' || el.classList.contains('rich-content')) {
                el.innerHTML = dict[key];
            } else {
                el.textContent = dict[key];
            }
        }
    });

    // Re-render all project grids & modals with updated language
    if (typeof renderCreatorsSection === 'function') renderCreatorsSection();
    if (typeof renderCreatorsModalSection === 'function') renderCreatorsModalSection();
    if (typeof renderBrandedAdsGrid === 'function') renderBrandedAdsGrid();
    if (typeof renderDoctorsPlaylistsSection === 'function') renderDoctorsPlaylistsSection();
    if (typeof renderUAEVideosSection === 'function') renderUAEVideosSection();
    if (typeof renderMediaPostVideosSection === 'function') renderMediaPostVideosSection();
    if (typeof renderShortFilmsSection === 'function') renderShortFilmsSection();

    // If category modal is active, refresh its dynamic contents
    const catModal = document.getElementById('categoryModal');
    if (catModal && catModal.classList.contains('active') && typeof window.openCategoryModalById === 'function') {
        const activeCat = catModal.getAttribute('data-active-cat') || 'doctors';
        window.openCategoryModalById(activeCat);
    }

    // Re-bind hoverables for newly rendered content
    const hoverables = document.querySelectorAll('a, button, .card, .chat-bubble, iframe, .stat-box, .about-avatar-card, .creator-tab-btn, .contact-card, .term-card');
    hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });

    if (typeof window.updateNavIndicator === 'function') {
        setTimeout(window.updateNavIndicator, 60);
        setTimeout(window.updateNavIndicator, 300);
    }
}


let modalWavesAnimationId = null;

function stopModalWavesAnimation() {
    if (modalWavesAnimationId) {
        cancelAnimationFrame(modalWavesAnimationId);
        modalWavesAnimationId = null;
    }
}

function renderModalDynamicThemeBg(catKey) {
    const bgContainer = document.getElementById('modalThemeDynamicBg');
    if (!bgContainer) return;

    let canvas = document.getElementById('modalDynamicWavesCanvas');
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.id = 'modalDynamicWavesCanvas';
        canvas.className = 'modal-dynamic-waves-canvas';
        bgContainer.innerHTML = '';
        bgContainer.appendChild(canvas);
    }

    startModalWavesAnimation(canvas);
}

function startModalWavesAnimation(canvas) {
    stopModalWavesAnimation();
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;

    function resize() {
        const rect = canvas.parentElement ? canvas.parentElement.getBoundingClientRect() : null;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        width = rect && rect.width ? rect.width : window.innerWidth;
        height = rect && rect.height ? rect.height : window.innerHeight;
        canvas.width = Math.max(300, Math.floor(width * dpr));
        canvas.height = Math.max(300, Math.floor(height * dpr));
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
    }
    resize();

    let step = 0;

    // Luxurious Royal Purple & Violet Atmospheric Aurora ribbons (Radiant & Bright)
    const ribbons = [
        { baseAlpha: 0.16, glowAlpha: 0.35, width: 85, speed: 0.007, color1: '#7c3aed', color2: '#a855f7', offset: 0, amp: 42 },
        { baseAlpha: 0.18, glowAlpha: 0.38, width: 65, speed: 0.009, color1: '#9333ea', color2: '#c084fc', offset: 1.8, amp: 52 },
        { baseAlpha: 0.15, glowAlpha: 0.32, width: 50, speed: 0.006, color1: '#a855f7', color2: '#d946ef', offset: 3.2, amp: 58 },
        { baseAlpha: 0.14, glowAlpha: 0.28, width: 32, speed: 0.011, color1: '#c084fc', color2: '#e879f9', offset: 4.5, amp: 38 },
        { baseAlpha: 0.12, glowAlpha: 0.25, width: 110, speed: 0.005, color1: '#581c87', color2: '#7c3aed', offset: 2.4, amp: 70 }
    ];

    function draw() {
        const modal = document.getElementById('categoryModal');
        if (!modal || !modal.classList.contains('active')) {
            modalWavesAnimationId = null;
            return;
        }

        ctx.clearRect(0, 0, width, height);

        // Deep subtle atmospheric veil (Keeps background comfortably dim while moving ribbons pop)
        const bgGrad = ctx.createLinearGradient(width, 0, 0, height);
        bgGrad.addColorStop(0, 'rgba(32, 8, 59, 0.22)');
        bgGrad.addColorStop(0.5, 'rgba(21, 4, 38, 0.14)');
        bgGrad.addColorStop(1, 'rgba(13, 2, 23, 0.08)');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, width, height);

        step += 1;

        // Draw each flowing aurora wave ribbon
        ribbons.forEach((ribbon) => {
            ctx.save();
            ctx.beginPath();

            const t = step * ribbon.speed + ribbon.offset;
            const points = [];
            const numPoints = 12;

            for (let i = 0; i <= numPoints; i++) {
                const progress = i / numPoints;
                const startX = width * 1.05;
                const startY = -40;
                const endX = -width * 0.1;
                const endY = height * 0.95;

                const baseX = startX + (endX - startX) * progress;
                const baseY = startY + (endY - startY) * Math.pow(progress, 0.85);

                const waveOffset = Math.sin(progress * 4.5 + t) * ribbon.amp +
                                   Math.cos(progress * 2.8 - t * 0.8) * (ribbon.amp * 0.45);

                const px = baseX - waveOffset * 0.6;
                const py = baseY + waveOffset * 0.8;
                points.push({ x: px, y: py });
            }

            ctx.moveTo(points[0].x, points[0].y);
            for (let i = 1; i < points.length - 2; i++) {
                const xc = (points[i].x + points[i + 1].x) / 2;
                const yc = (points[i].y + points[i + 1].y) / 2;
                ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
            }
            ctx.quadraticCurveTo(
                points[points.length - 2].x,
                points[points.length - 2].y,
                points[points.length - 1].x,
                points[points.length - 1].y
            );

            const grad = ctx.createLinearGradient(width, 0, 0, height * 0.8);
            grad.addColorStop(0, ribbon.color2);
            grad.addColorStop(0.5, ribbon.color1);
            grad.addColorStop(1, 'rgba(88, 28, 135, 0)');

            ctx.strokeStyle = grad;
            ctx.lineWidth = ribbon.width;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.globalAlpha = ribbon.baseAlpha;
            ctx.shadowColor = ribbon.color1;
            ctx.shadowBlur = 24;
            ctx.stroke();

            ctx.lineWidth = Math.max(1.5, ribbon.width * 0.12);
            ctx.globalAlpha = ribbon.glowAlpha;
            ctx.shadowBlur = 15;
            ctx.shadowColor = '#f5d0fe';
            ctx.strokeStyle = '#f5d0fe';
            ctx.stroke();

            ctx.restore();
        });

        modalWavesAnimationId = requestAnimationFrame(draw);
    }

    modalWavesAnimationId = requestAnimationFrame(draw);

    if (!canvas._hasResizeListener) {
        window.addEventListener('resize', () => {
            if (modalWavesAnimationId) resize();
        });
        canvas._hasResizeListener = true;
    }
}

/* Render and wire Short Films & Documentaries Section */
function renderShortFilmsSection() {
    const container = document.getElementById('modalShortFilmContent');
    if (!container) return;

    // Wire sticky anchor navigation pills for films
    const anchorNav = document.getElementById('modalFilmsAnchorNav');
    const scrollBody = document.getElementById('modalScrollBody');
    if (anchorNav && scrollBody) {
        let isFilmScroll = false;
        let filmTimer = null;

        anchorNav.querySelectorAll('.creator-anchor-pill').forEach(pill => {
            pill.onclick = (e) => {
                e.preventDefault();
                const targetId = pill.getAttribute('data-target');
                const targetEl = document.getElementById(targetId);
                if (targetEl) {
                    isFilmScroll = true;
                    anchorNav.querySelectorAll('.creator-anchor-pill').forEach(p => p.classList.remove('active'));
                    pill.classList.add('active');
                    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

                    clearTimeout(filmTimer);
                    filmTimer = setTimeout(() => {
                        isFilmScroll = false;
                    }, 800);
                }
            };
        });

        if (!scrollBody._filmSpyBound) {
            scrollBody._filmSpyBound = true;
            scrollBody.addEventListener('scroll', () => {
                if (isFilmScroll) return;
                const shortFilmContent = document.getElementById('modalShortFilmContent');
                if (!shortFilmContent || shortFilmContent.style.display === 'none') return;

                const cards = Array.from(shortFilmContent.querySelectorAll('.film-project-card'));
                if (cards.length === 0) return;

                const scrollRect = scrollBody.getBoundingClientRect();
                const triggerPoint = scrollRect.top + Math.min(260, scrollRect.height * 0.35);

                let currentId = cards[0].id;
                for (let i = 0; i < cards.length; i++) {
                    const bRect = cards[i].getBoundingClientRect();
                    if (bRect.top <= triggerPoint) {
                        currentId = cards[i].id;
                    }
                }

                anchorNav.querySelectorAll('.creator-anchor-pill').forEach(p => {
                    p.classList.toggle('active', p.getAttribute('data-target') === currentId);
                });
            }, { passive: true });
        }
    }

    // Attach click handlers to all video cards
    container.querySelectorAll('.film-video-card').forEach(card => {
        card.onclick = (e) => {
            const vid = card.getAttribute('data-film-vid');
            const type = card.getAttribute('data-film-type') || 'youtube';
            const url = card.getAttribute('data-film-url') || '';
            const title = card.getAttribute('data-film-title') || 'فيلم سينمائي';
            if (vid || url) {
                openCinema(vid, title, type, url);
            }
        };
    });

    // Attach click handlers to all behind-the-scenes gallery cards
    container.querySelectorAll('.film-bts-card').forEach(card => {
        card.onclick = (e) => {
            const imgSrc = card.getAttribute('data-img-src');
            const title = card.getAttribute('data-img-title') || 'كواليس العمل السينمائي';
            if (imgSrc) {
                openCinema(imgSrc, title, 'image', imgSrc);
            }
        };
    });
}
