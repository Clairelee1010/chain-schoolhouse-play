import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import { getQuestions, getGradeFor, getSkillLabels } from "@/lib/course-data";
import { useLang } from "@/lib/i18n";
import { RadarChart } from "./RadarChart";

const letters = ["A", "B", "C", "D"];

export function Quiz({ onAnsweredChange }: { onAnsweredChange: (count: number) => void }) {
  const [picked, setPicked] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);
  const { lang, t } = useLang();

  const questions = getQuestions(lang);
  const skillLabels = getSkillLabels(lang);

  const answeredCount = Object.keys(picked).length;
  useEffect(() => onAnsweredChange(answeredCount), [answeredCount, onAnsweredChange]);

  const score = questions.filter((q) => picked[q.id] === q.answer).length;
  const grade = getGradeFor(score, lang);

  const submit = () => {
    setSubmitted(true);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 80);
    if (score === 5) {
      const end = Date.now() + 2500;
      const colors = ["#6c5ce7", "#00e58a", "#4aa8ff", "#ffd166"];
      const frame = () => {
        confetti({ particleCount: 5, angle: 60, spread: 70, origin: { x: 0 }, colors });
        confetti({ particleCount: 5, angle: 120, spread: 70, origin: { x: 1 }, colors });
        if (Date.now() < end) requestAnimationFrame(frame);
      };
      setTimeout(frame, 200);
      setTimeout(
        () => confetti({ particleCount: 160, spread: 100, origin: { y: 0.4 }, colors }),
        300,
      );
    }
  };

  const reset = () => {
    setPicked({});
    setSubmitted(false);
  };

  if (submitted) {
    const radarValues = questions.map((q) => (picked[q.id] === q.answer ? 1 : 0.22));
    return (
      <div ref={resultRef} className="animate-rise surface-card glow mx-auto max-w-2xl rounded-3xl">
        <div className="gradient-hero grid-glow rounded-t-3xl px-8 py-10 text-center text-deep-foreground">
          <p className="text-sm tracking-[0.3em] text-deep-foreground/70">{t.reportTitle}</p>
          <div className="mt-4 text-6xl">{grade.medal}</div>
          <p className="mt-4 font-display text-5xl font-bold">{score * 20}</p>
          <p className="text-sm text-deep-foreground/70">{t.scoreOf(score)}</p>
          <h3 className="mt-4 text-xl font-bold text-accent">{grade.title}</h3>
        </div>

        <div className="px-6 py-8 sm:px-10">
          <RadarChart labels={skillLabels} values={radarValues} />

          <div className="mt-6 space-y-3">
            {questions.map((q, i) => {
              const ok = picked[q.id] === q.answer;
              return (
                <div key={q.id} className="flex items-center gap-3">
                  <span className="w-10 shrink-0 text-xs font-semibold text-muted-foreground">
                    Q{i + 1}
                  </span>
                  <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-muted">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${ok ? "bg-accent" : "bg-destructive/70"}`}
                      style={{ width: ok ? "100%" : "20%" }}
                    />
                  </div>
                  <span className="w-10 text-right text-xs font-bold">{ok ? "20" : "0"}</span>
                </div>
              );
            })}
          </div>

          <p className="mt-6 rounded-2xl bg-muted/70 p-5 text-sm leading-relaxed">
            {grade.comment}
          </p>

          <button
            onClick={reset}
            className="mt-6 w-full rounded-full bg-primary px-6 py-3.5 font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            {t.retry}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {questions.map((q, qi) => {
        const choice = picked[q.id];
        const answered = choice !== undefined;
        return (
          <div key={q.id} className="surface-card rounded-3xl p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <span className="rounded-full bg-primary/10 px-3 py-1 font-display text-sm font-bold text-primary">
                Q{qi + 1}
              </span>
              <h3 className="pt-1 text-lg font-bold leading-snug">{q.q}</h3>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {q.options.map((opt, oi) => {
                const isPicked = choice === oi;
                const isCorrect = oi === q.answer;
                let cls =
                  "border-border bg-background hover:border-primary/60 hover:bg-primary/5";
                if (answered && isCorrect) cls = "border-accent bg-accent/15";
                else if (isPicked) cls = "border-destructive bg-destructive/10";
                else if (answered) cls = "border-border bg-background opacity-60";
                return (
                  <button
                    key={oi}
                    disabled={answered}
                    onClick={() => setPicked((p) => ({ ...p, [q.id]: oi }))}
                    className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm transition-all ${cls}`}
                  >
                    <span className="font-display text-xs font-bold text-muted-foreground">
                      {letters[oi]}
                    </span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>
            {answered && (
              <div className="animate-rise mt-4 rounded-2xl border border-accent/40 bg-accent/10 p-4 text-sm">
                <p className="font-bold text-accent-foreground dark:text-accent">
                  {choice === q.answer ? t.correct : t.wrong(letters[q.answer] ?? "")}
                </p>
                <p className="mt-1 leading-relaxed text-muted-foreground">{q.explain}</p>
              </div>
            )}
          </div>
        );
      })}

      <button
        disabled={answeredCount < questions.length}
        onClick={submit}
        className="w-full rounded-full bg-primary px-6 py-4 font-bold text-primary-foreground transition-transform enabled:hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-40"
      >
        {answeredCount < questions.length
          ? t.remaining(questions.length - answeredCount)
          : t.submit}
      </button>
    </div>
  );
}
