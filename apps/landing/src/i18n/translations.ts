/**
 * RU: Переводы для лендинга — английский, русский, турецкий.
 * EN: Landing translations — English, Russian, Turkish.
 */

export type Locale = "en" | "ru" | "tr";

export const translations = {
  en: {
    nav: {
      solutions: "Solutions",
      features: "Features",
      testimonials: "Testimonials",
      faqs: "FAQ's",
      contact: "Contact",
    },
    logoSubtitle: "Digital Web Studio",
    bookDemo: "Book a Demo",
    heroTitle: "Hotel ERP &\nCRM System",
    languageLabel: "Change language",
    social: {
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      telegram: "Telegram",
    },
    // RU: Заголовок в две строки как на макете / EN: Title in two lines as per design
    solutionsTitle: "All-in-One Solutions\nBuilt for Modern Hotels",
    // RU: Один абзац: \n — перенос строки, *слово* — жирное / EN: Single paragraph: \n = line break, *word* = bold
    solutionsDescription:
      "From front desk operations to restaurant POS\nand inventory control, our unified platform\nconnects *every department* into one powerful,\nreal-time system — reducing costs, saving\ntime, and elevating guest experiences.",
    // RU: Секция «Одна платформа» — вкладки и контент / EN: One Platform section — tabs and content
    onePlatformTitle: "One Platform.\nEvery Hotel Operation.",
    onePlatformTabOperations: "Operations Management",
    onePlatformTabFinance: "Finance & Administration",
    onePlatformTabService: "Service Managements",
    onePlatformTabData: "Data Control",
    onePlatformSubtitleOperations: "Front Office",
    onePlatformDescriptionOperations:
      "Handle reservations, check-ins, room availability, and guest information efficiently from one streamlined interface.",
    // RU: Подменю Operations — 6 пунктов, переключаются точками / EN: Operations sub-menu — 6 items, switched by dots
    opsHomepage: "Homepage (Dashboard)",
    opsFrontOffice: "Front Office",
    opsFrontCash: "Front Cash",
    opsEndOfDay: "End of Day",
    opsHouseKeeping: "House Keeping",
    opsTasks: "Tasks",
    opsDescHomepage: "Central dashboard with key metrics, occupancy, and quick actions for daily operations.",
    opsDescFrontOffice: "Handle reservations, check-ins, room availability, and guest information efficiently.",
    opsDescFrontCash: "Manage cash transactions, receipts, and front desk payment processing.",
    opsDescEndOfDay: "Close daily operations, reconcile accounts, and generate end-of-day reports.",
    opsDescHouseKeeping: "Track room status, cleaning schedules, and housekeeping assignments.",
    opsDescTasks: "Create, assign, and track tasks across departments and staff.",
    onePlatformSubtitleFinance: "Accounting",
    onePlatformDescriptionFinance:
      "Streamline invoicing, payroll, budgets, and financial reporting — all integrated with your hotel operations.",
    // RU: Подменю Finance — 4 пункта, переключаются точками / EN: Finance sub-menu — 4 items, switched by dots
    financeAccounting: "Accounting",
    financePurchasing: "Purchasing",
    financeWarehouse: "Warehouse",
    financeHumanResources: "Human Resources",
    financeDescAccounting:
      "Streamline invoicing, payroll, budgets, and financial reporting — all integrated with your hotel operations.",
    financeDescPurchasing:
      "Manage suppliers, purchase orders, and procurement workflows in one place.",
    financeDescWarehouse:
      "Track inventory, stock levels, and warehouse operations across your property.",
    financeDescHumanResources:
      "Staff scheduling, payroll, attendance, and HR documents in a single system.",
    onePlatformSubtitleService: "Housekeeping & F&B",
    onePlatformDescriptionService:
      "Manage room status, cleaning schedules, restaurant POS, and service workflows from a single dashboard.",
    // RU: Подменю Service Management — 4 пункта / EN: Service sub-menu — 4 items
    serviceRestaurant: "Restaurant",
    serviceKitchen: "Kitchen",
    serviceSpa: "SPA",
    serviceHospital: "Hospital",
    serviceDescRestaurant:
      "Restaurant POS, table management, orders, and F&B reporting in one place.",
    serviceDescKitchen:
      "Kitchen display, order tickets, prep lists, and kitchen workflow management.",
    serviceDescSpa:
      "Spa bookings, treatments, staff schedules, and wellness service management.",
    serviceDescHospital:
      "Hospitality care and guest services coordination for medical and wellness stays.",
    onePlatformSubtitleData: "Analytics & Reports",
    onePlatformDescriptionData:
      "Get real-time insights, custom reports, and data exports to make informed decisions across your property.",
    // RU: Подменю Data & Control — 2 пункта / EN: Data sub-menu — 2 items
    dataDocuments: "Documents",
    dataReports: "Reports",
    dataDescDocuments:
      "Centralized document storage, templates, and compliance — all in one place.",
    dataDescReports:
      "Real-time insights, custom reports, and data exports to make informed decisions.",
    // RU: Секция «Будьте в курсе» — тёмный блок / EN: Stay Updated section — dark block
    stayUpdatedTitle: "Stay Updated. Stay In Control.",
    stayUpdatedStay1: "Stay",
    stayUpdatedItalic1: " Updated. ",
    stayUpdatedStay2: " Stay ",
    stayUpdatedItalic2: " In Control.",
    stayUpdatedDescription:
      "Get product updates, feature releases, and hospitality insights — straight to your inbox.",
    getRequestForm: "Get Request form",
    // RU: Секция отзывов — заголовок, подзаголовок, карточки / EN: Testimonials section — title, subtitle, cards
    testimonialsTitle: "What Our Clients Say",
    testimonialsSubtitle:
      "Trusted by hotels and hospitality teams who rely on efficiency, clarity, and reliable daily operations.",
    testimonial1Name: "Sarah Mitchell",
    testimonial1Role: "Operations Manager, Boutique Hotel",
    testimonial1Quote:
      '"A complete operational upgrade for our hotel." Since switching to this system, our front desk and housekeeping teams work in perfect sync. Daily operations are faster, clearer, and far more reliable.',
    testimonial2Name: "James Chen",
    testimonial2Role: "General Manager, City Hotel",
    testimonial2Quote:
      '"Finally, one system for everything." We used to juggle multiple tools. Now reservations, billing, and housekeeping are in one place. Our team saves hours every week.',
    testimonial3Name: "Elena Rodriguez",
    testimonial3Role: "Operations Manager, Boutique Hotel",
    testimonial3Quote:
      '"Visibility and control we never had before." Real-time reports and clear task assignment have transformed how we run daily operations. Highly recommend.',
  },
  ru: {
    nav: {
      solutions: "Решения",
      features: "Возможности",
      testimonials: "Отзывы",
      faqs: "FAQ",
      contact: "Контакты",
    },
    logoSubtitle: "Digital Web Studio",
    bookDemo: "Записаться на демо",
    heroTitle: "Отель ERP и\nCRM система",
    languageLabel: "Сменить язык",
    social: {
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      telegram: "Telegram",
    },
    solutionsTitle: "Комплексные решения\nдля современных отелей",
    solutionsDescription:
      "От операций на стойке регистрации до POS ресторана\nи контроля запасов — наша платформа объединяет\nкаждый *отдел* в одну мощную систему реального времени,\nсокращая расходы, экономя время\nи улучшая впечатления гостей.",
    onePlatformTitle: "Одна платформа.\nКаждая операция отеля.",
    onePlatformTabOperations: "Управление операциями",
    onePlatformTabFinance: "Финансы и администрирование",
    onePlatformTabService: "Управление услугами",
    onePlatformTabData: "Контроль данных",
    onePlatformSubtitleOperations: "Стойка регистрации",
    onePlatformDescriptionOperations:
      "Эффективно управляйте бронированиями, заездами, доступностью номеров и данными гостей из единого интерфейса.",
    opsHomepage: "Главная (Дашборд)",
    opsFrontOffice: "Стойка регистрации",
    opsFrontCash: "Касса",
    opsEndOfDay: "Конец дня",
    opsHouseKeeping: "Хаускипинг",
    opsTasks: "Задачи",
    opsDescHomepage: "Центральный дашборд с ключевыми метриками, загрузкой и быстрыми действиями.",
    opsDescFrontOffice: "Бронирования, заезды, доступность номеров и данные гостей.",
    opsDescFrontCash: "Кассовые операции, чеки и приём платежей на стойке.",
    opsDescEndOfDay: "Закрытие дня, сверка счетов, отчёты за день.",
    opsDescHouseKeeping: "Статус номеров, графики уборки и назначения.",
    opsDescTasks: "Создание, назначение и учёт задач по отделам и сотрудникам.",
    onePlatformSubtitleFinance: "Бухгалтерия",
    onePlatformDescriptionFinance:
      "Счётчики, зарплата, бюджеты и отчёты — всё в одной системе, интегрированной с операциями отеля.",
    financeAccounting: "Бухгалтерия",
    financePurchasing: "Закупки",
    financeWarehouse: "Склад",
    financeHumanResources: "Кадры",
    financeDescAccounting:
      "Счета, зарплата, бюджеты и отчётность — всё интегрировано с операциями отеля.",
    financeDescPurchasing:
      "Поставщики, заказы на закупку и процесс закупок в одном месте.",
    financeDescWarehouse:
      "Учёт запасов, остатки и складские операции по объекту.",
    financeDescHumanResources:
      "Графики, зарплата, учёт явки и кадровые документы в одной системе.",
    onePlatformSubtitleService: "Хаускипинг и F&B",
    onePlatformDescriptionService:
      "Статус номеров, графики уборки, ресторанный POS и сервисные процессы в единой панели.",
    serviceRestaurant: "Ресторан",
    serviceKitchen: "Кухня",
    serviceSpa: "СПА",
    serviceHospital: "Hospital",
    serviceDescRestaurant:
      "POS ресторана, столики, заказы и отчётность F&B в одном месте.",
    serviceDescKitchen:
      "Дисплей кухни, заказы, списки подготовки и управление процессами кухни.",
    serviceDescSpa:
      "Бронирование СПА, процедуры, графики сотрудников и управление услугами.",
    serviceDescHospital:
      "Гостевое обслуживание и координация для медицинских и оздоровительных программ.",
    onePlatformSubtitleData: "Аналитика и отчёты",
    onePlatformDescriptionData:
      "Актуальная аналитика, свои отчёты и экспорт данных для принятия решений.",
    dataDocuments: "Документы",
    dataReports: "Отчёты",
    dataDescDocuments:
      "Хранение документов, шаблоны и соответствие требованиям в одном месте.",
    dataDescReports:
      "Актуальная аналитика, свои отчёты и экспорт данных для принятия решений.",
    stayUpdatedTitle: "Будьте в курсе. Держите всё под контролем.",
    stayUpdatedStay1: "Будьте",
    stayUpdatedItalic1: " в курсе. ",
    stayUpdatedStay2: " Держите ",
    stayUpdatedItalic2: " всё под контролем.",
    stayUpdatedDescription:
      "Получайте обновления продукта, анонсы функций и материалы об индустрии гостеприимства — прямо на почту.",
    getRequestForm: "Получить форму заявки",
    testimonialsTitle: "Что говорят наши клиенты",
    testimonialsSubtitle:
      "Нам доверяют отели и команды гостеприимства, которые полагаются на эффективность, ясность и надёжные ежедневные операции.",
    testimonial1Name: "Сара Митчелл",
    testimonial1Role: "Менеджер по операциям, бутик-отель",
    testimonial1Quote:
      '"Полный операционный апгрейд для нашего отеля." С тех пор как мы перешли на эту систему, стойка регистрации и хаускипинг работают в идеальной связке. Операции стали быстрее, понятнее и надёжнее.',
    testimonial2Name: "Джеймс Чен",
    testimonial2Role: "Генеральный менеджер, городской отель",
    testimonial2Quote:
      '"Наконец-то одна система для всего." Раньше мы жонглировали несколькими инструментами. Теперь бронирования, счета и хаускипинг в одном месте. Команда экономит часы каждую неделю.',
    testimonial3Name: "Елена Родригес",
    testimonial3Role: "Менеджер по операциям, бутик-отель",
    testimonial3Quote:
      '"Прозрачность и контроль, которых у нас не было." Отчёты в реальном времени и чёткое назначение задач изменили то, как мы ведём ежедневные операции. Очень рекомендуем.',
  },
  tr: {
    nav: {
      solutions: "Çözümler",
      features: "Özellikler",
      testimonials: "Referanslar",
      faqs: "SSS",
      contact: "İletişim",
    },
    logoSubtitle: "Digital Web Studio",
    bookDemo: "Demo Talep Et",
    heroTitle: "Otel ERP &\nCRM Sistemi",
    languageLabel: "Dili değiştir",
    social: {
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      telegram: "Telegram",
    },
    solutionsTitle: "Modern Oteller İçin\nTek Platform Çözümleri",
    solutionsDescription:
      "Resepsiyon operasyonlarından restoran POS\nve envanter yönetimine kadar, birleşik platformumuz\nher *departmanı* güçlü, gerçek zamanlı tek sisteme bağlar —\nmaliyetleri düşürür, zaman kazandırır\nve misafir deneyimini yükseltir.",
    onePlatformTitle: "Tek Platform.\nHer Otel Operasyonu.",
    onePlatformTabOperations: "Operasyon Yönetimi",
    onePlatformTabFinance: "Finans ve İdari İşler",
    onePlatformTabService: "Hizmet Yönetimi",
    onePlatformTabData: "Veri Kontrolü",
    onePlatformSubtitleOperations: "Resepsiyon",
    onePlatformDescriptionOperations:
      "Rezervasyonları, girişleri, oda müsaitliğini ve misafir bilgilerini tek bir arayüzden verimli şekilde yönetin.",
    opsHomepage: "Ana Sayfa (Pano)",
    opsFrontOffice: "Resepsiyon",
    opsFrontCash: "Kasa",
    opsEndOfDay: "Gün Sonu",
    opsHouseKeeping: "Ev Temizliği",
    opsTasks: "Görevler",
    opsDescHomepage: "Günlük operasyonlar için temel metrikler, doluluk ve hızlı aksiyonlar.",
    opsDescFrontOffice: "Rezervasyonlar, girişler, oda müsaitliği ve misafir bilgileri.",
    opsDescFrontCash: "Nakit işlemler, fişler ve ödeme işlemleri.",
    opsDescEndOfDay: "Gün sonu kapanış, hesap mutabakatı ve raporlar.",
    opsDescHouseKeeping: "Oda durumu, temizlik planları ve görev atamaları.",
    opsDescTasks: "Departman ve personel arasında görev oluşturma, atama ve takip.",
    onePlatformSubtitleFinance: "Muhasebe",
    onePlatformDescriptionFinance:
      "Faturalama, bordro, bütçe ve mali raporlar — tümü otel operasyonlarınızla entegre.",
    financeAccounting: "Muhasebe",
    financePurchasing: "Satın Alma",
    financeWarehouse: "Depo",
    financeHumanResources: "İnsan Kaynakları",
    financeDescAccounting:
      "Faturalama, bordro, bütçe ve mali raporlar — otel operasyonlarıyla entegre.",
    financeDescPurchasing:
      "Tedarikçiler, satın alma siparişleri ve tedarik süreçleri tek yerde.",
    financeDescWarehouse:
      "Envanter, stok seviyeleri ve depo operasyonları.",
    financeDescHumanResources:
      "Personel programları, bordro, devam ve İK belgeleri tek sistemde.",
    onePlatformSubtitleService: "Ev Temizliği ve F&B",
    onePlatformDescriptionService:
      "Oda durumu, temizlik planları, restoran POS ve hizmet süreçlerini tek panelden yönetin.",
    serviceRestaurant: "Restoran",
    serviceKitchen: "Mutfak",
    serviceSpa: "SPA",
    serviceHospital: "Hospital",
    serviceDescRestaurant:
      "Restoran POS, masa yönetimi, siparişler ve F&B raporları tek yerde.",
    serviceDescKitchen:
      "Mutfak ekranı, sipariş fişleri, hazırlık listeleri ve mutfak süreçleri.",
    serviceDescSpa:
      "SPA rezervasyonları, tedaviler, personel programları ve hizmet yönetimi.",
    serviceDescHospital:
      "Konuk bakımı ve sağlık/wellness konaklamaları için koordinasyon.",
    onePlatformSubtitleData: "Analitik ve Raporlar",
    onePlatformDescriptionData:
      "Gerçek zamanlı içgörüler, özel raporlar ve veri dışa aktarımı ile bilinçli kararlar alın.",
    dataDocuments: "Belgeler",
    dataReports: "Raporlar",
    dataDescDocuments:
      "Merkezi belge depolama, şablonlar ve uyumluluk tek yerde.",
    dataDescReports:
      "Gerçek zamanlı içgörüler, özel raporlar ve veri dışa aktarımı.",
    stayUpdatedTitle: "Güncel Kalın. Kontrolü Elinizde Tutun.",
    stayUpdatedStay1: "Güncel",
    stayUpdatedItalic1: " Kalın. ",
    stayUpdatedStay2: " Kontrolü ",
    stayUpdatedItalic2: " Elinizde Tutun.",
    stayUpdatedDescription:
      "Ürün güncellemeleri, özellik duyuruları ve konaklama sektörü içgörüleri — doğrudan gelen kutunuza.",
    getRequestForm: "Talep formu al",
    testimonialsTitle: "Müşterilerimiz Ne Diyor",
    testimonialsSubtitle:
      "Verimlilik, netlik ve güvenilir günlük operasyonlara güvenen oteller ve konaklama ekipleri tarafından tercih ediliyoruz.",
    testimonial1Name: "Sarah Mitchell",
    testimonial1Role: "Operasyon Müdürü, Butik Otel",
    testimonial1Quote:
      '"Otelimiz için tam bir operasyonel yükseltme." Bu sisteme geçtiğimizden beri resepsiyon ve ev temizliği ekiplerimiz mükemmel uyum içinde çalışıyor. Günlük operasyonlar daha hızlı, net ve güvenilir.',
    testimonial2Name: "James Chen",
    testimonial2Role: "Genel Müdür, Şehir Oteli",
    testimonial2Quote:
      '"Sonunda her şey için tek sistem." Eskiden birden fazla araç kullanıyorduk. Artık rezervasyonlar, faturalandırma ve ev temizliği tek yerde. Ekibimiz her hafta saatler kazanıyor.',
    testimonial3Name: "Elena Rodriguez",
    testimonial3Role: "Operasyon Müdürü, Butik Otel",
    testimonial3Quote:
      '"Daha önce hiç sahip olmadığımız görünürlük ve kontrol." Gerçek zamanlı raporlar ve net görev ataması günlük operasyonları yürütme şeklimizi dönüştürdü. Şiddetle tavsiye ederiz.',
  },
} as const;

export type TranslationKeys = keyof (typeof translations)["en"];
