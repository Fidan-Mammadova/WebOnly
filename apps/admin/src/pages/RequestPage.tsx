import { Link } from "react-router-dom";

// RU: Страница формы заявки для админ-панели.
// EN: Request form page for the admin panel.

export function RequestPage() {
  return (
    <div className="min-h-screen bg-[#f8f3ec] text-slate-900 dark:bg-neutral-950 dark:text-slate-100">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <Link
          to="/"
          className="text-xl font-semibold tracking-tight hover:underline"
        >
          Webonly Admin
        </Link>
        <Link
          to="/"
          className="rounded-full border border-slate-200/60 bg-white/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow md:px-5 dark:border-white/10 dark:bg-white/10"
        >
          ← На главную
        </Link>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-16">
        <section className="rounded-2xl border border-slate-200/60 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
          <h1 className="text-3xl font-semibold tracking-tight">
            Request / Заявка
          </h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            RU: форма для отправки заявки (поля добавим по макету). EN: form to
            submit a request (fields to be added per design).
          </p>
          {/* RU: Заглушка формы — позже заменим на реальные поля. */}
          {/* EN: Form placeholder — will be replaced with real fields. */}
          <form className="mt-6 space-y-4 max-w-md">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Имя / Name
              </label>
              <input
                id="name"
                type="text"
                className="mt-1 block w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
                placeholder="Ваше имя"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 block w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
                placeholder="email@example.com"
              />
            </div>
            <button
              type="submit"
              className="rounded-full border border-slate-200/60 bg-white px-5 py-2.5 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow dark:border-white/10 dark:bg-white/10"
            >
              Отправить заявку
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
