import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { topics, questions } from "@/lib/course-data";
import { FlipCard } from "@/components/FlipCard";
import { Quiz } from "@/components/Quiz";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "區塊鏈小學堂｜穩定幣・RWA・AI 支付互動學習" },
      {
        name: "description",
        content:
          "四張 3D 翻轉知識卡加 5 題測驗，快速看懂穩定幣種類、GENIUS Act 儲備法規、RWA 代幣化與 AI Agent x402 鏈上支付。",
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
  const [dark, setDark] = useState(false);
  const [read, setRead] = useState<string[]>([]);
  const [answered, setAnswered] = useState(0);

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
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3">
          <span className="font-display text-sm font-bold">⛓️ 區塊鏈小學堂</span>
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
            onClick={() => setDark((d) => !d)}
            aria-label="切換深色模式"
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
            互動學習 ・ 4 張知識卡 ・ 5 題測驗
          </span>
          <h1 className="mt-6 text-4xl font-black leading-tight sm:text-6xl">
            區塊鏈小學堂
            <br />
            <span className="text-accent">穩定幣・RWA・AI 支付</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-deep-foreground/80">
            從價格避風港到合規儲備、從美債上鏈到 AI
            代理人自動付款，用翻轉卡片與小測驗，一頁讀懂鏈上金融的關鍵知識。
          </p>
          <a
            href="#cards"
            className="mt-9 inline-flex rounded-full bg-accent px-7 py-3.5 font-bold text-accent-foreground transition-transform hover:scale-105"
          >
            開始學習 ↓
          </a>
        </div>
      </section>

      {/* 翻轉卡 */}
      <section id="cards" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
        <h2 className="text-center text-3xl font-bold">四大主題互動學習卡</h2>
        <p className="mt-3 text-center text-muted-foreground">
          點擊卡片翻面，看重點整理、金句與學習教室名詞解釋
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {topics.map((t) => (
            <FlipCard key={t.id} topic={t} onRead={markRead} />
          ))}
        </div>
      </section>

      {/* 測驗 */}
      <section className="border-t border-border bg-muted/40 px-5 py-20">
        <h2 className="text-center text-3xl font-bold">挑戰區塊鏈小學堂 🏆</h2>
        <p className="mt-3 text-center text-muted-foreground">
          5 題單選，作答後立即顯示對錯與解析；全部完成即可查看你的評級
        </p>
        <div className="mt-12">
          <Quiz onAnsweredChange={setAnswered} />
        </div>
      </section>

      <footer className="border-t border-border px-5 py-10 text-center text-sm text-muted-foreground">
        ⛓️ 區塊鏈小學堂 ・ 本頁內容僅供教育學習，不構成投資建議
      </footer>
    </main>
  );
}
