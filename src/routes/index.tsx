import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { Moon, Sun, Languages } from "lucide-react";
import { getTopics, getQuestions } from "@/lib/course-data";
import { FlipCard } from "@/components/FlipCard";
import { Quiz } from "@/components/Quiz";
import { LanguageProvider, useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "區塊鏈小學堂｜穩定幣・RWA・AI 支付互動學習" },
      {
        name: "description",
        content:
          "四張 3D 翻轉知識卡加 5 題測驗，快速看懂穩定幣種類、GENIUS Act 儲備法規、RWA 代幣化與 AI Agent x402 鏈上支付。中英雙語切換。",
      },
      { property: "og:title", content: "區塊鏈小學堂｜穩定幣・RWA・AI 支付互動學習" },
      {
        property: "og:description",
        content: "互動翻卡＋測驗評級，一頁搞懂穩定幣、監管儲備、RWA 與 AI Agent 鏈上支付。",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  );
}

function Page() {
  const { lang, setLang, t } = useLang();
  const [dark, setDark] = useState(false);
  const [read, setRead] = useState<string[]>([]);
  const [answered, setAnswered] = useState(0);

  const topics = getTopics(lang);
  const questions = getQuestions(lang);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const markRead = useCallback((id: string) => {
    setRead((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  const total = topics.length + questions.length;
  const done = read.length + answered;
  const progress = Math.round((done / total) * 100);

  return (
    <main className="min-h-screen bg-background">
      {/* 進度條 */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-5 py-3">
          <span className="font-display text-sm font-bold">{t.brand}</span>
          <div className="flex flex-1 items-center gap-3">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-700 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="w-12 text-right font-display text-xs font-bold text-muted-foreground">
              {progress}%
            </span>
          </div>
          <button
            onClick={() => setLang(lang === "zh" ? "en" : "zh")}
            aria-label={t.toggleLang}
            className="flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-bold transition-colors hover:bg-muted"
          >
            <Languages className="h-4 w-4" />
            {lang === "zh" ? "EN" : "中文"}
          </button>
          <button
            onClick={() => setDark((d) => !d)}
            aria-label={t.toggleDark}
            className="rounded-full border border-border p-2 transition-colors hover:bg-muted"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="gradient-hero grid-glow relative overflow-hidden px-5 py-24 text-deep-foreground">
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">
            {t.heroBadge}
          </span>
          <h1 className="mt-6 text-4xl font-black leading-tight sm:text-6xl">
            {t.heroTitle}
            <br />
            <span className="text-accent">{t.heroTitleAccent}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-deep-foreground/80">
            {t.heroDesc}
          </p>
          <a
            href="#cards"
            className="mt-9 inline-flex rounded-full bg-accent px-7 py-3.5 font-bold text-accent-foreground transition-transform hover:scale-105"
          >
            {t.heroCta}
          </a>
        </div>
      </section>

      {/* 翻轉卡 */}
      <section id="cards" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
        <h2 className="text-center text-3xl font-bold">{t.cardsTitle}</h2>
        <p className="mt-3 text-center text-muted-foreground">{t.cardsDesc}</p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {topics.map((tp) => (
            <FlipCard key={tp.id} topic={tp} onRead={markRead} />
          ))}
        </div>
      </section>

      {/* 測驗 */}
      <section className="border-t border-border bg-muted/40 px-5 py-20">
        <h2 className="text-center text-3xl font-bold">{t.quizTitle}</h2>
        <p className="mt-3 text-center text-muted-foreground">{t.quizDesc}</p>
        <div className="mt-12">
          <Quiz onAnsweredChange={setAnswered} />
        </div>
      </section>

      <footer className="border-t border-border px-5 py-10 text-center text-sm text-muted-foreground">
        {t.footer}
      </footer>
    </main>
  );
}
