/**
 * RU: Контекст выбранного языка — en / ru / tr. Переключение по клику на кнопку языка.
 * EN: Current locale context — en / ru / tr. Toggle on language button click.
 */

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Locale } from "./translations";

const LOCALES: Locale[] = ["en", "ru", "tr"];

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  /** RU: Следующий язык по кругу: en → ru → tr → en / EN: Next locale in cycle */
  cycleLocale: () => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const cycleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const i = LOCALES.indexOf(prev);
      return LOCALES[(i + 1) % LOCALES.length];
    });
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, cycleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
