/**
 * RU: Экспорт i18n — переводы и контекст языка. Добавляйте новые ключи в translations.ts.
 * EN: i18n exports — translations and locale context. Add new keys in translations.ts.
 */

export { translations } from "./translations";
export type { Locale } from "./translations";
export { LocaleProvider, useLocale } from "./LocaleContext";
