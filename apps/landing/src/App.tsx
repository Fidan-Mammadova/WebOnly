import { useEffect, useRef, useState } from "react";
import { useLocale } from "./i18n/LocaleContext";
import { translations } from "./i18n/translations";
// RU: Логотип хедера 148×48 — ссылка на главную / EN: Header logo 148×48 — link to home
import headerLogo from "./assets/HEADER.svg";
// RU: Иконки соцсетей из assets / EN: Social icons from assets
import socialWhatsApp from "./assets/Group.svg";
import socialInstagram from "./assets/Group (1).svg";
import socialLinkedIn from "./assets/Group (2).svg";
import socialTelegram from "./assets/Group (3).svg";
// RU: Изображение для секции Solutions — справа / EN: Solutions section image — right
import midnightImage from "./assets/Midnight.svg";
// RU: Карточки поверх ноутбука: Payment (сверху слева), Users (снизу справа) / EN: Overlay cards: Payment (top-left), Users (bottom-right)
import framePayment from "./assets/Frame 2147226003.svg";
import frameUsers from "./assets/Frame 2147226004.svg";
// RU: Изображение для секции One Platform (ноутбук с дашбордом) / EN: One Platform section image (laptop with dashboard)
import onePlatformImage from "./assets/Group 1171275879.svg";
// RU: Ноутбук с дашбордом для секции Stay Updated / EN: Laptop dashboard mockup for Stay Updated section
import stayUpdatedMockup from "./assets/Mockup-1.svg";
// RU: Логотип Webonly Digital Web Studio для карточек отзывов / EN: Webonly logo for testimonial cards
import weonlyLogo from "./assets/Frame 2147226059.svg";

const NAV_KEYS = [
  { key: "solutions" as const, href: "#solutions" },
  { key: "features" as const, href: "#features" },
  { key: "testimonials" as const, href: "#testimonials" },
  { key: "faqs" as const, href: "#faqs" },
  { key: "contact" as const, href: "#contact" },
] as const;

// RU: Ключи вкладок и контента секции One Platform / EN: One Platform section tab and content keys
const ONE_PLATFORM_TABS = [
  "onePlatformTabOperations",
  "onePlatformTabFinance",
  "onePlatformTabService",
  "onePlatformTabData",
] as const;

const ONE_PLATFORM_SUBTITLES = [
  "onePlatformSubtitleOperations",
  "onePlatformSubtitleFinance",
  "onePlatformSubtitleService",
  "onePlatformSubtitleData",
] as const;

const ONE_PLATFORM_DESCRIPTIONS = [
  "onePlatformDescriptionOperations",
  "onePlatformDescriptionFinance",
  "onePlatformDescriptionService",
  "onePlatformDescriptionData",
] as const;

// RU: Подменю Operations Management — 6 пунктов, точки переключают / EN: Operations sub-menu — 6 items, dots switch
const OPS_SUB_ITEMS = [
  "opsHomepage",
  "opsFrontOffice",
  "opsFrontCash",
  "opsEndOfDay",
  "opsHouseKeeping",
  "opsTasks",
] as const;

const OPS_DESCRIPTIONS = [
  "opsDescHomepage",
  "opsDescFrontOffice",
  "opsDescFrontCash",
  "opsDescEndOfDay",
  "opsDescHouseKeeping",
  "opsDescTasks",
] as const;

// RU: Подменю Finance & Administration — 4 пункта / EN: Finance sub-menu — 4 items
const FINANCE_SUB_ITEMS = [
  "financeAccounting",
  "financePurchasing",
  "financeWarehouse",
  "financeHumanResources",
] as const;

const FINANCE_DESCRIPTIONS = [
  "financeDescAccounting",
  "financeDescPurchasing",
  "financeDescWarehouse",
  "financeDescHumanResources",
] as const;

// RU: Подменю Service Management — 4 пункта / EN: Service sub-menu — 4 items
const SERVICE_SUB_ITEMS = [
  "serviceRestaurant",
  "serviceKitchen",
  "serviceSpa",
  "serviceHospital",
] as const;

const SERVICE_DESCRIPTIONS = [
  "serviceDescRestaurant",
  "serviceDescKitchen",
  "serviceDescSpa",
  "serviceDescHospital",
] as const;

// RU: Подменю Data & Control — 2 пункта / EN: Data sub-menu — 2 items
const DATA_SUB_ITEMS = ["dataDocuments", "dataReports"] as const;

const DATA_DESCRIPTIONS = ["dataDescDocuments", "dataDescReports"] as const;

// RU: Ключи отзывов для секции Testimonials (name, role, quote) / EN: Testimonial keys for Testimonials section
const TESTIMONIAL_KEYS = [
  {
    name: "testimonial1Name" as const,
    role: "testimonial1Role" as const,
    quote: "testimonial1Quote" as const,
  },
  {
    name: "testimonial2Name" as const,
    role: "testimonial2Role" as const,
    quote: "testimonial2Quote" as const,
  },
  {
    name: "testimonial3Name" as const,
    role: "testimonial3Role" as const,
    quote: "testimonial3Quote" as const,
  },
] as const;

export default function App() {
  const { locale, cycleLocale } = useLocale();
  const t = translations[locale];
  const [activePlatformTab, setActivePlatformTab] = useState(0);
  const [activeOperationsSlide, setActiveOperationsSlide] = useState(0);
  const [activeFinanceSlide, setActiveFinanceSlide] = useState(0);
  const [activeServiceSlide, setActiveServiceSlide] = useState(0);
  const [activeDataSlide, setActiveDataSlide] = useState(0);
  // RU: Ref контейнера карусели отзывов для программного скролла / EN: Ref for testimonials carousel scroll
  const testimonialsCarouselRef = useRef<HTMLDivElement>(null);
  // RU: Индекс центральной карточки отзыва (она крупнее) / EN: Index of centered testimonial card (larger)
  const [testimonialCenterIndex, setTestimonialCenterIndex] = useState(0);

  // RU: При скролле карусели отзывов определяем, какая карточка в центре / EN: On testimonials scroll, detect which card is centered
  useEffect(() => {
    const el = testimonialsCarouselRef.current;
    if (!el) return;
    const updateCenter = () => {
      const containerRect = el.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;
      const inner = el.firstElementChild;
      if (!inner) return;
      const cards = Array.from(inner.children) as HTMLElement[];
      let closestIndex = 0;
      let closestDist = Infinity;
      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const dist = Math.abs(cardCenterX - centerX);
        if (dist < closestDist) {
          closestDist = dist;
          closestIndex = i;
        }
      });
      setTestimonialCenterIndex(closestIndex);
    };
    updateCenter();
    el.addEventListener("scroll", updateCenter);
    window.addEventListener("resize", updateCenter);
    return () => {
      el.removeEventListener("scroll", updateCenter);
      window.removeEventListener("resize", updateCenter);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <main className="bg-white mt-2">
        {/* RU: Hero — хедер и лого поверх изображения на всю высоту, контейнер для absolute / EN: Hero — header and logo, wrapper for absolute positioning */}
        <div className="relative min-h-screen">
          {/* RU: Изображение на всю высоту с самого верха (под хедером) / EN: Image full height from top (header overlays it) */}
          <div className="relative z-0 flex min-h-screen w-full px-2 sm:px-3 md:px-4 lg:px-5">
            <div className="relative h-full w-full min-h-0 flex-1 overflow-hidden">
              <img
                src="/hero-tablet.png"
                alt="Webonly Dashboard Overview — Hotel ERP & CRM"
                className="relative z-0 h-full min-h-screen w-full object-cover object-center"
              />
              <h1
                className="absolute bottom-2 right-2 z-10 max-w-[90%] text-right font-semibold leading-[100%] text-white sm:bottom-3 sm:right-3 md:bottom-5 md:right-4 lg:right-5"
                style={{
                  fontFamily: "Urbanist, sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(2rem, 5vw, 72px)",
                  letterSpacing: "0%",
                }}
              >
                {t.heroTitle.split("\n").map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </h1>
            </div>
          </div>

          {/* RU: Хедер 1196×48 как на макете — лого | меню | кнопки, выраженные промежутки / EN: Header 1196×48 — logo | nav | buttons, clear spacing */}
          <header className="absolute left-0 right-0 top-0 z-10 w-full px-10 pt-7 opacity-100 sm:px-3 md:px-8">
            <div className="relative flex h-12 w-full  items-center ">
              {/* RU: Зона 1 — логотип слева / EN: Zone 1 — logo left */}
              <a
                href="/"
                className="flex h-12 w-[148px] shrink-0 items-center opacity-100 transition hover:opacity-90"
                aria-label="Webonly — Home"
              >
                <img
                  src={headerLogo}
                  alt="Webonly Digital Web Studio"
                  width={148}
                  height={48}
                  className="block h-12 w-[148px] object-contain object-left"
                />
              </a>
              {/* RU: Зона 2 — меню по центру, равные промежутки между пунктами / EN: Zone 2 — nav center, even gap between links */}
              <nav
                className="absolute left-1/2 hidden -translate-x-1/2 items-center md:flex"
                aria-label="Main"
              >
                <div className="flex min-h-[18px] items-center gap-8 opacity-100 lg:gap-10">
                  {NAV_KEYS.map(({ key, href }) => (
                    <a
                      key={key}
                      href={href}
                      className="shrink-0 text-white/90 transition hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                      style={{
                        fontFamily: "Urbanist, sans-serif",
                        fontWeight: 500,
                        fontStyle: "normal",
                        fontSize: 18,
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    >
                      {t.nav[key]}
                    </a>
                  ))}
                </div>
              </nav>
              {/* RU: Зона 3 — кнопки справа (после меню), умеренный зазор между иконкой и Book a Demo / EN: Zone 3 — buttons right, moderate gap between them */}
              <div className="absolute right-0 flex items-center gap-4">
                <button
                  type="button"
                  onClick={cycleLocale}
                  className="flex h-[50px] w-[48px] shrink-0 items-center justify-center rounded-[12px] bg-[#1F1B15] px-2 py-[9px] text-white opacity-100 transition hover:opacity-90"
                  aria-label={t.languageLabel}
                >
                  <LanguageIcon />
                </button>
                <a
                  href="#contact"
                  className="inline-flex h-12 w-[175px] items-center justify-center gap-2.5 rounded-[10px] bg-[#1F1B15] px-2 py-2.5 text-white opacity-100 transition hover:opacity-90"
                  style={{
                    fontFamily: "Urbanist, sans-serif",
                    fontSize: 16,
                    fontWeight: 600,
                    lineHeight: "22px",
                    letterSpacing: 0,
                  }}
                >
                  <BookDemoIcon />
                  {t.bookDemo}
                </a>
              </div>
            </div>
          </header>

          {/* RU: Иконки соцсетей в левом нижнем углу / EN: Social icons bottom-left */}
          <div className="absolute bottom-6 left-2 z-20 flex gap-6 sm:left-3 sm:gap-4 md:bottom-8 md:left-6">
            <SocialLink
              href="https://wa.me/"
              label={t.social.whatsapp}
              icon={<img src={socialWhatsApp} alt="" className="h-16 w-16" />}
            />
            <SocialLink
              href="https://instagram.com/"
              label={t.social.instagram}
              icon={<img src={socialInstagram} alt="" className="h-16 w-16" />}
            />
            <SocialLink
              href="https://linkedin.com/"
              label={t.social.linkedin}
              icon={<img src={socialLinkedIn} alt="" className="h-16 w-16" />}
            />
            <SocialLink
              href="https://t.me/"
              label={t.social.telegram}
              icon={<img src={socialTelegram} alt="" className="h-16 w-16" />}
            />
          </div>
        </div>

        {/* RU: Секция Solutions — слева текст, справа изображение; макет: gap 72px, left 38px, левый блок ~492×354 / EN: Solutions — text left, image right; design: gap 72px, left 38px */}
        <section
          id="solutions"
          className="relative bg-white py-10 md:py-12 lg:py-14"
        >
          <div className="mx-auto max-w-8xl pl-[38px] pr-4 sm:pl-[38px] sm:pr-6 lg:pr-8">
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-[62px]">
              {/* RU: Левая колонка — вертикально: заголовок → описание / EN: Left column — vertical: heading → description */}
              <div className="flex max-w-full flex-col gap-20 text-left">
                <h2
                  style={{
                    fontFamily: "Urbanist, sans-serif",
                    fontWeight: 600,
                    fontStyle: "normal",
                    fontSize: 40,
                    lineHeight: "130%",
                    letterSpacing: "0%",
                    background:
                      "linear-gradient(110.27deg, #FFF9F4 -55.58%, #060010 75.59%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {t.solutionsTitle.split("\n").map((line, index, arr) => (
                    <span key={index}>
                      {line}
                      {index < arr.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </h2>
                {/* RU: Абзац — одна строка перевода с \n и *слово* для жирного / EN: Paragraph — single translation with \n and *word* for bold */}
                <p
                  style={{
                    fontFamily: "Urbanist, sans-serif",
                    fontWeight: 500,
                    fontStyle: "normal",
                    fontSize: 24,
                    lineHeight: "150%",
                    letterSpacing: "0%",
                    color: "#7D777D",
                  }}
                >
                  {t.solutionsDescription
                    .split("\n")
                    .map((line, lineIndex, lines) => (
                      <span key={lineIndex}>
                        {line
                          .split(/(\*[^*]+\*)/g)
                          .map((segment, segIndex) =>
                            segment.startsWith("*") && segment.endsWith("*") ? (
                              <strong key={segIndex}>
                                {segment.slice(1, -1)}
                              </strong>
                            ) : (
                              segment
                            )
                          )}
                        {lineIndex < lines.length - 1 ? <br /> : null}
                      </span>
                    ))}
                </p>
              </div>

              {/* RU: Правая колонка — ноутбук + плавающие карточки Payment и Users / EN: Right column — laptop + floating Payment & Users cards */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-4xl">
                  <img
                    src={midnightImage}
                    alt="Webonly Hotel ERP & CRM Dashboard"
                    className="relative z-0 w-full rounded-lg object-contain"
                  />
                  {/* RU: Карточка Payment 15+ — сверху слева от ноутбука / EN: Payment 15+ card — top-left of laptop */}
                  <img
                    src={framePayment}
                    alt="Payment 15+"
                    className="absolute left-0 top-0 z-20 w-[200px] rounded-xl object-contain drop-shadow-lg sm:left-[-0.5rem] sm:top-[-0.5rem] sm:w-[180px] md:w-[208px]"
                  />
                  {/* RU: Карточка Users 50+ — снизу справа от ноутбука / EN: Users 50+ card — bottom-right of laptop */}
                  <img
                    src={frameUsers}
                    alt="Users 50+"
                    className="absolute bottom-0 right-0 z-20 w-[200px] rounded-xl object-contain drop-shadow-lg sm:bottom-[6rem] sm:right-[4rem] sm:w-[180px] md:w-[208px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RU: Секция One Platform — вкладки, контент, ноутбук справа / EN: One Platform section — tabs, content, laptop right */}
        <section
          id="one-platform"
          className="relative bg-white py-8 md:py-10 lg:py-12"
        >
          <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
            <h2
              className="mb-14 text-center"
              style={{
                fontFamily: "Urbanist, sans-serif",
                fontWeight: 600,
                fontStyle: "normal",
                fontSize: 40,
                lineHeight: "130%",
                letterSpacing: "0%",
                background:
                  "linear-gradient(100.27deg, #FFF9F4 -50.58%, #060010 65.59%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {/* RU: Перенос заголовка по символу \\n / EN: Split title by \\n */}
              {t.onePlatformTitle.split("\n").map((line, index) => (
                <span key={line}>
                  {line}
                  {index === 0 ? <br /> : null}
                </span>
              ))}
            </h2>
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
              {/* RU: Левая колонка — вертикально: вкладки → заголовок → подзаголовок → описание → точки / EN: Left column — vertical: tabs → heading → subtitle → description → dots */}
              <div className="flex flex-col gap-10 text-left">
                <div className="flex flex-wrap gap-2">
                  {ONE_PLATFORM_TABS.map((key, index) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => {
                        setActivePlatformTab(index);
                        if (index !== 0) setActiveOperationsSlide(0);
                        if (index === 1) setActiveFinanceSlide(0);
                        if (index !== 1) setActiveFinanceSlide(0);
                        if (index === 2) setActiveServiceSlide(0);
                        if (index !== 2) setActiveServiceSlide(0);
                        if (index === 3) setActiveDataSlide(0);
                        if (index !== 3) setActiveDataSlide(0);
                      }}
                      className={
                        activePlatformTab === index
                          ? "rounded-full bg-[#060010] px-4 py-2 text-sm font-medium text-white"
                          : "rounded-full bg-white px-4 py-2 text-sm font-medium text-[#060010] ring-1 ring-[#060010]/20 hover:ring-[#060010]/40"
                      }
                      style={{ fontFamily: "Urbanist, sans-serif" }}
                    >
                      {t[key]}
                    </button>
                  ))}
                </div>
                {/* RU: Контент активной вкладки — заголовок, подзаголовок, описание / EN: Active tab content — heading, subtitle, description */}
                <h3
                  style={{
                    fontFamily: "Urbanist, sans-serif",
                    fontWeight: 600,
                    fontStyle: "normal",
                    fontSize: 36,
                    lineHeight: "131%",
                    letterSpacing: "0%",
                    background:
                      "linear-gradient(116.27deg, #FFF9F4 -66.58%, #060010 78.59%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {t[ONE_PLATFORM_TABS[activePlatformTab]]}
                </h3>
                <div className="flex items-center gap-2">
                  <FrontOfficeIcon />
                  <span
                    className="text-lg font-medium text-[#060010]"
                    style={{ fontFamily: "Urbanist, sans-serif" }}
                  >
                    {activePlatformTab === 0
                      ? t[OPS_SUB_ITEMS[activeOperationsSlide]]
                      : activePlatformTab === 1
                      ? t[FINANCE_SUB_ITEMS[activeFinanceSlide]]
                      : activePlatformTab === 2
                      ? t[SERVICE_SUB_ITEMS[activeServiceSlide]]
                      : activePlatformTab === 3
                      ? t[DATA_SUB_ITEMS[activeDataSlide]]
                      : t[ONE_PLATFORM_SUBTITLES[activePlatformTab]]}
                  </span>
                </div>
                <p
                  className="max-w-lg text-[#7D777D]"
                  style={{
                    fontFamily: "Urbanist, sans-serif",
                    fontSize: 16,
                    lineHeight: 1.5,
                  }}
                >
                  {activePlatformTab === 0
                    ? t[OPS_DESCRIPTIONS[activeOperationsSlide]]
                    : activePlatformTab === 1
                    ? t[FINANCE_DESCRIPTIONS[activeFinanceSlide]]
                    : activePlatformTab === 2
                    ? t[SERVICE_DESCRIPTIONS[activeServiceSlide]]
                    : activePlatformTab === 3
                    ? t[DATA_DESCRIPTIONS[activeDataSlide]]
                    : t[ONE_PLATFORM_DESCRIPTIONS[activePlatformTab]]}
                </p>

                {/* RU: Точки — у каждой вкладки своё подменю / EN: Dots — each tab has its own sub-menu */}
                <div className="flex gap-2">
                  {activePlatformTab === 0
                    ? OPS_SUB_ITEMS.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setActiveOperationsSlide(i)}
                          className={`h-2 w-2 rounded-full transition-colors ${
                            activeOperationsSlide === i
                              ? "bg-[#060010]"
                              : "bg-[#D1D5DB] hover:bg-[#9CA3AF]"
                          }`}
                          aria-label={t[OPS_SUB_ITEMS[i]]}
                        />
                      ))
                    : activePlatformTab === 1
                    ? FINANCE_SUB_ITEMS.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setActiveFinanceSlide(i)}
                          className={`h-2 w-2 rounded-full transition-colors ${
                            activeFinanceSlide === i
                              ? "bg-[#060010]"
                              : "bg-[#D1D5DB] hover:bg-[#9CA3AF]"
                          }`}
                          aria-label={t[FINANCE_SUB_ITEMS[i]]}
                        />
                      ))
                    : activePlatformTab === 2
                    ? SERVICE_SUB_ITEMS.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setActiveServiceSlide(i)}
                          className={`h-2 w-2 rounded-full transition-colors ${
                            activeServiceSlide === i
                              ? "bg-[#060010]"
                              : "bg-[#D1D5DB] hover:bg-[#9CA3AF]"
                          }`}
                          aria-label={t[SERVICE_SUB_ITEMS[i]]}
                        />
                      ))
                    : activePlatformTab === 3
                    ? DATA_SUB_ITEMS.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setActiveDataSlide(i)}
                          className={`h-2 w-2 rounded-full transition-colors ${
                            activeDataSlide === i
                              ? "bg-[#060010]"
                              : "bg-[#D1D5DB] hover:bg-[#9CA3AF]"
                          }`}
                          aria-label={t[DATA_SUB_ITEMS[i]]}
                        />
                      ))
                    : null}
                </div>
              </div>
              <div className="relative flex justify-center lg:justify-end">
                <img
                  src={onePlatformImage}
                  alt="Webonly Front Office"
                  className="w-full max-w-2xl rounded-lg object-contain"
                />
                {/* RU: Кнопка навигации (стрелка вправо-вверх) / EN: Nav button (arrow up-right) */}
                <button
                  type="button"
                  className="absolute bottom-8 right-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#060010] text-white shadow-lg hover:bg-[#060010]/90"
                  aria-label="Next"
                >
                  <ArrowUpRightIcon />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* RU: Секция Stay Updated — тёмный фон, заголовок, текст, 2 кнопки, ноутбук справа / EN: Stay Updated — dark bg, heading, text, 2 CTAs, laptop right */}
        <section
          id="stay-updated"
          className="relative bg-[#191611] py-8 md:py-10 lg:py-12 rounded-3xl"
        >
          <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
              {/* RU: Левая колонка — вертикально: заголовок → описание → форма / EN: Left column — vertical: heading → description → form */}
              <div className="flex flex-col gap-12 text-left">
                <h2
                  className="text-white"
                  style={{
                    fontFamily: "Urbanist, sans-serif",
                    fontSize: 40,
                    letterSpacing: "0%",
                  }}
                >
                  {/* RU: Первая строка — свой lineHeight и стили / EN: First line — own lineHeight and styles */}
                  <span
                    className="block"
                    style={{
                      fontWeight: 600,
                      lineHeight: 1.15,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>
                      {t.stayUpdatedStay1}
                    </span>
                    <span style={{ fontWeight: 800, fontStyle: "italic" }}>
                      {t.stayUpdatedItalic1}
                    </span>
                  </span>
                  {/* RU: Вторая строка — отдельные стили шрифта / EN: Second line — distinct font styles */}
                  <span
                    className="block"
                    style={{
                      fontWeight: 600,
                      lineHeight: 1.15,
                      letterSpacing: "-0.01em",
                      marginTop: 2,
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>
                      {t.stayUpdatedStay2}
                    </span>
                    <span style={{ fontWeight: 800, fontStyle: "italic" }}>
                      {t.stayUpdatedItalic2}
                    </span>
                  </span>
                </h2>
                <p
                  className="max-w-lg text-white/80"
                  style={{
                    fontFamily: "Urbanist, sans-serif",
                    fontWeight: 500,
                    fontStyle: "normal",
                    fontSize: 24,
                    lineHeight: "130%",
                    letterSpacing: "0%",
                  }}
                >
                  {t.stayUpdatedDescription}
                </p>
                {/* RU: Форма Get Request form + кнопка Book a Demo / EN: Get Request form + Book a Demo button */}
                <div
                  className="flex items-center justify-between rounded-[36px]"
                  style={{
                    fontFamily: "Urbanist, sans-serif",
                    width: "100%",
                    maxWidth: 460,
                    height: 68,
                    paddingTop: 10,
                    paddingRight: 16,
                    paddingBottom: 10,
                    paddingLeft: 20,
                    backgroundColor: "#FFF9F4",
                  }}
                >
                  <a
                    href="#contact"
                    className="text-lg font-semibold text-[#060010] transition hover:text-[#060010]/90"
                  >
                    {t.getRequestForm}
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-[#211B28] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#211B28]/90"
                  >
                    {t.bookDemo}
                  </a>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img
                  src={stayUpdatedMockup}
                  alt="Webonly Dashboard — reservations, housekeeping, accounting, reports"
                  className="w-full max-w-xl rounded-lg object-contain "
                />
              </div>
            </div>
          </div>
        </section>

        {/* RU: Секция отзывов — заголовок, подзаголовок, горизонтальная карусель карточек, кнопки навигации / EN: Testimonials section — title, subtitle, horizontal carousel, nav buttons */}
        <section
          id="testimonials"
          className=" py-10 md:py-12 lg:py-14 rounded-3xl"
          style={{ fontFamily: "Urbanist, sans-serif" }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* RU: Заголовок и подзаголовок по центру / EN: Centered heading and subtitle */}
            <div className="mb-8 md:mb-10 text-center">
              <h2
                className="text-[#060010] font-semibold mb-3"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                  letterSpacing: "0%",
                }}
              >
                {t.testimonialsTitle}
              </h2>
              <p className="text-[#060010]/80 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                {t.testimonialsSubtitle}
              </p>
            </div>

            {/* RU: Обёртка: карусель сверху, кнопки скролла внизу справа / EN: Wrapper: carousel on top, scroll buttons below right */}
            <div className="flex flex-col gap-4">
              <div
                ref={testimonialsCarouselRef}
                className="w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth scrollbar-thin py-2 -mx-2 px-2"
                style={{ scrollbarWidth: "thin" }}
              >
                <div className="flex gap-5 md:gap-6 min-w-max">
                  {TESTIMONIAL_KEYS.map((keys, index) => {
                    const isCenter = index === testimonialCenterIndex;
                    return (
                      <article
                        key={index}
                        className={`flex-shrink-0 snap-start  bg-[#f7f4ec] p-6 shadow-sm border border-[#060010]/5 border-l-4 border-l-[#EDE3C9] transition-all duration-300 ${
                          isCenter
                            ? "w-[min(100%,580px)] md:w-[580px] min-h-[200px]"
                            : "w-[min(100%,420px)] md:w-[480px]"
                        }`}
                      >
                        <div className="flex flex-col gap-4 h-full">
                          {/* RU: Верхняя строка: аватар слева, логотип Webonly справа (крупнее) / EN: Top row: avatar left, weonly logo right (larger) */}
                          <div className="flex items-center justify-between gap-3">
                            <div className="h-12 w-12 rounded-full bg-[#E5E7EB] flex-shrink-0 flex items-center justify-center text-[#6B7280] text-lg font-semibold">
                              {t[keys.name].charAt(0)}
                            </div>
                            <img
                              src={weonlyLogo}
                              alt="Webonly Digital Web Studio"
                              className="h-10 w-auto object-contain flex-shrink-0"
                            />
                          </div>
                          {/* RU: Титул — должность и отель (напр. General Manager, City Hotel) / EN: Title — role (e.g. General Manager, City Hotel) */}
                          <p className="font-semibold text-[#060010] text-base">
                            {t[keys.role]}
                          </p>
                          {/* RU: Текст отзыва с затуханием к низу (градиент по opacity) / EN: Testimonial quote with fade-out towards bottom */}
                          <div className="relative max-h-20 overflow-hidden flex-1 min-h-0">
                            <p className="text-[#060010]/85 text-base leading-relaxed pr-1">
                              {t[keys.quote]}
                            </p>
                            <div
                              className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none bg-gradient-to-t from-[#F7F3E8] to-transparent"
                              aria-hidden
                            />
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
              {/* RU: Кнопки прокрутки карусели внизу справа (в ряд) / EN: Carousel scroll buttons below, right-aligned (row) */}
              <div className="flex flex-row gap-2 justify-end">
                <button
                  type="button"
                  onClick={() => {
                    const el = testimonialsCarouselRef.current;
                    if (el) el.scrollBy({ left: -340, behavior: "smooth" });
                  }}
                  className="h-10 w-10 rounded-full border border-[#060010]/20 bg-white text-[#060010] flex items-center justify-center hover:bg-[#060010]/5 transition-colors"
                  aria-label={
                    locale === "ru"
                      ? "Предыдущий отзыв"
                      : locale === "tr"
                      ? "Önceki referans"
                      : "Previous testimonial"
                  }
                >
                  <ChevronLeftIcon />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const el = testimonialsCarouselRef.current;
                    if (el) el.scrollBy({ left: 340, behavior: "smooth" });
                  }}
                  className="h-10 w-10 rounded-full border border-[#060010]/20 bg-white text-[#060010] flex items-center justify-center hover:bg-[#060010]/5 transition-colors"
                  aria-label={
                    locale === "ru"
                      ? "Следующий отзыв"
                      : locale === "tr"
                      ? "Sonraki referans"
                      : "Next testimonial"
                  }
                >
                  <ChevronRightIcon />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/** RU: Стрелка влево для карусели отзывов / EN: Chevron left for testimonials carousel */
function ChevronLeftIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

/** RU: Стрелка вправо для карусели отзывов / EN: Chevron right for testimonials carousel */
function ChevronRightIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

/** RU: Иконка Front Office (стойка регистрации / колокольчик) / EN: Front Office icon (reception / bell) */
function FrontOfficeIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#060010"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

/** RU: Стрелка вправо-вверх для кнопки навигации / EN: Arrow up-right for nav button */
function ArrowUpRightIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

/** RU: Иконка выбора языка — flowbite language outline / EN: Language switcher icon — flowbite language outline */
function LanguageIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M13 19L16.5 10L20 19M13.875 17H19.125M3 7H10M10 7H12M10 7C10 8.63 9.207 10.926 7.761 12.655M7.761 12.655C6.79 13.82 5.521 14.725 4 15M7.761 12.655L5 10M7.761 12.655L10.2 15M7.5 6.818V5" />
    </svg>
  );
}

/** RU: Иконка «Book a Demo» (стилизованная A/человечек) / EN: Book a Demo icon */
function BookDemoIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  );
}

/** RU: Ссылка на соцсеть с иконкой / EN: Social link with icon */
function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
