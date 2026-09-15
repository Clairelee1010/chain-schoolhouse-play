import { useState } from "react";
import type { Topic } from "@/lib/course-data";

export function FlipCard({ topic, onRead }: { topic: Topic; onRead: (id: string) => void }) {
  const [flipped, setFlipped] = useState(false);

  const toggle = () => {
    const next = !flipped;
    setFlipped(next);
    if (next) onRead(topic.id);
  };

  return (
    <div className="flip-scene h-[520px] sm:h-[500px]">
      <div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        className={`flip-inner cursor-pointer rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
          flipped ? "is-flipped" : ""
        }`}
      >
        {/* 正面 */}
        <div className="flip-face gradient-hero grid-glow glow flex flex-col justify-between rounded-3xl p-8 text-deep-foreground">
          <div className="flex items-center justify-between">
            <span className="font-display text-sm tracking-[0.3em] text-deep-foreground/60">
              {topic.index}
            </span>
            <span className="rounded-full bg-background/10 px-3 py-1 text-xs font-medium text-deep-foreground/80 backdrop-blur">
              點擊翻轉
            </span>
          </div>
          <div>
            <div className="animate-float text-6xl">{topic.icon}</div>
            <h3 className="mt-6 text-2xl font-bold leading-snug">{topic.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-deep-foreground/80">{topic.front}</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-accent">
            <span className="h-2 w-2 rounded-full bg-accent" />
            翻開看四大重點與學習教室
          </div>
        </div>

        {/* 背面 */}
        <div className="flip-face flip-back surface-card rounded-3xl p-6">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-2xl">{topic.icon}</span>
            <h3 className="text-lg font-bold">{topic.title}</h3>
          </div>
          <ul className="space-y-3">
            {topic.points.map((p) => (
              <li key={p.title} className="rounded-2xl bg-muted/60 p-4">
                <p className="text-sm font-bold text-primary">{p.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <p className="mt-2 border-l-2 border-accent pl-3 text-sm font-medium text-accent-foreground dark:text-accent">
                  「{p.quote}」
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-4 rounded-2xl border border-accent/40 bg-accent/10 p-4">
            <p className="text-sm font-bold">💡 學習教室</p>
            <dl className="mt-2 space-y-2">
              {topic.glossary.map((g) => (
                <div key={g.term} className="text-sm">
                  <dt className="font-semibold">{g.term}</dt>
                  <dd className="text-muted-foreground">{g.desc}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">點擊卡片翻回正面</p>
        </div>
      </div>
    </div>
  );
}
