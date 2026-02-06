import { useState } from "react";
import { Link } from "react-router-dom";

// RU: Домашняя страница — приветствие и кнопка перехода к форме заявки.
// EN: Home page — welcome and button to open the request form.

export function HomePage() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-[#f8f3ec] text-slate-900 transition-colors dark:bg-neutral-950 dark:text-slate-100">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
          <div className="text-xl font-semibold tracking-tight">
            Webonly Admin
          </div>
          <button
            type="button"
            // RU: временный переключатель темы; позже заменим на общий компонент.
            // EN: temporary theme toggle; will swap to shared component later.
            onClick={() => setIsDark((prev) => !prev)}
            className="rounded-full border border-slate-200/60 bg-white/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow md:px-5 dark:border-white/10 dark:bg-white/10"
          >
            {isDark ? "Светлая тема" : "Тёмная тема"}
          </button>
        </header>

        <main className="mx-auto max-w-6xl px-6 pb-16 space-y-8">
          <section className="rounded-2xl border border-slate-200/60 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <h1 className="text-3xl font-semibold tracking-tight">
              Admin (заглушка)
            </h1>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              RU: здесь соберём дашборды, заявки, FAQ и контакты из макета. EN:
              admin shell placeholder — dashboards, requests, FAQ, contacts from
              the provided design will go here.
            </p>
            {/* RU: Кнопка перехода к форме заявки. EN: Button to open request form. */}
            <div className="mt-6">
              <Link
                to="/request"
                className="inline-flex items-center rounded-full border border-slate-200/60 bg-white px-5 py-2.5 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow md:px-6 dark:border-white/10 dark:bg-white/10"
              >
                Request
              </Link>
            </div>
          </section>

          <section className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/60 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
              <h2 className="text-lg font-semibold">Навигация</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
                <li>Dashboard (графики + карта)</li>
                <li>Home (инпуты, карточки, FAQ)</li>
                <li>Features (секции/таблицы)</li>
                <li>Requests / Payments</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200/60 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
              <h2 className="text-lg font-semibold">Следующие шаги</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
                <li>Общий layout с сайдбаром/топбаром</li>
                <li>Таблицы на TanStack Table</li>
                <li>Графики на Recharts</li>
                <li>Моки данных из packages/mock</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200/60 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
              <h2 className="text-lg font-semibold">Тема</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                RU: светлая/тёмная через Tailwind dark mode, токены перенесём в
                packages/theme. EN: light/dark via Tailwind dark mode; will wire
                tokens from packages/theme.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
