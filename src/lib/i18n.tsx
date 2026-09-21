import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "zh" | "en";

type UI = {
  brand: string;
  progressLabel: string;
  toggleDark: string;
  toggleLang: string;
  heroBadge: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroDesc: string;
  heroCta: string;
  cardsTitle: string;
  cardsDesc: string;
  quizTitle: string;
  quizDesc: string;
  footer: string;
  // FlipCard
  flipHint: string;
  tapToFlip: string;
  iconHint: string;
  iconAria: (title: string) => string;
  cardAria: (title: string) => string;
  backHint: string;
  classroom: string;
  further: string;
  furtherAria: (label: string) => string;
  closeAnim: string;
  // Quiz
  englishOriginal: string;
  chineseTranslation: string;
  correct: string;
  wrong: (letter: string) => string;
  remaining: (n: number) => string;
  submit: string;
  reportTitle: string;
  scoreOf: (score: number) => string;
  retry: string;
};

const zh: UI = {
  brand: "⛓️ 區塊鏈小學堂",
  progressLabel: "學習進度",
  toggleDark: "切換深色模式",
  toggleLang: "切換語言",
  heroBadge: "互動學習 ・ 4 張知識卡 ・ 5 題測驗",
  heroTitle: "區塊鏈小學堂",
  heroTitleAccent: "穩定幣・RWA・AI 支付",
  heroDesc:
    "從價格避風港到合規儲備、從美債上鏈到 AI 代理人自動付款，用翻轉卡片與小測驗，一頁讀懂鏈上金融的關鍵知識。",
  heroCta: "開始學習 ↓",
  cardsTitle: "四大主題互動學習卡",
  cardsDesc: "點擊卡片翻面，看重點整理、金句與學習教室名詞解釋",
  quizTitle: "挑戰區塊鏈小學堂 🏆",
  quizDesc: "5 題單選，作答後立即顯示對錯與解析；全部完成即可查看你的評級",
  footer: "⛓️ 區塊鏈小學堂 ・ 本頁內容僅供教育學習，不構成投資建議",
  flipHint: "翻開看四大重點與學習教室",
  tapToFlip: "點擊翻轉",
  iconHint: "👆 點圖示看動畫",
  iconAria: (t) => `播放「${t}」主題動畫`,
  cardAria: (t) => `${t}｜點擊翻轉卡片`,
  backHint: "點擊卡片翻回正面",
  classroom: "💡 學習教室",
  further: "延伸閱讀",
  furtherAria: (l) => `延伸閱讀：${l}（開新分頁）`,
  closeAnim: "關閉動畫",
  englishOriginal: "英文原句",
  chineseTranslation: "中文翻譯",
  correct: "✅ 答對了！",
  wrong: (l) => `❌ 答錯了，正解是 (${l})`,
  remaining: (n) => `還有 ${n} 題未作答`,
  submit: "提交並查看我的評級 🏆",
  reportTitle: "結算成績單",
  scoreOf: (s) => `/ 100 分 ・ 答對 ${s} / 5 題`,
  retry: "重新挑戰 🔁",
};

const en: UI = {
  brand: "⛓️ Blockchain School",
  progressLabel: "Learning progress",
  toggleDark: "Toggle dark mode",
  toggleLang: "Switch language",
  heroBadge: "Interactive ・ 4 flip cards ・ 5 questions",
  heroTitle: "Blockchain School",
  heroTitleAccent: "Stablecoins ・ RWA ・ AI Payments",
  heroDesc:
    "From price safe havens to compliant reserves, from tokenized treasuries to AI agents paying on their own — learn the essentials of on-chain finance with flip cards and a short quiz.",
  heroCta: "Start learning ↓",
  cardsTitle: "Four interactive topic cards",
  cardsDesc: "Tap a card to flip it for key points, quotes and a mini glossary",
  quizTitle: "Take the Blockchain School quiz 🏆",
  quizDesc:
    "5 multiple-choice questions with instant feedback; finish all of them to see your rank",
  footer: "⛓️ Blockchain School ・ For education only, not investment advice",
  flipHint: "Flip for 4 key points & glossary",
  tapToFlip: "Tap to flip",
  iconHint: "👆 Tap the icon for an animation",
  iconAria: (t) => `Play the "${t}" topic animation`,
  cardAria: (t) => `${t} — tap to flip the card`,
  backHint: "Tap the card to flip back",
  classroom: "💡 Mini glossary",
  further: "Further reading",
  furtherAria: (l) => `Further reading: ${l} (opens in a new tab)`,
  closeAnim: "Close animation",
  englishOriginal: "English original",
  chineseTranslation: "Chinese translation",
  correct: "✅ Correct!",
  wrong: (l) => `❌ Not quite — the answer is (${l})`,
  remaining: (n) => `${n} question${n > 1 ? "s" : ""} left`,
  submit: "Submit and see my rank 🏆",
  reportTitle: "YOUR REPORT CARD",
  scoreOf: (s) => `/ 100 points ・ ${s} / 5 correct`,
  retry: "Try again 🔁",
};

export const uiStrings: Record<Lang, UI> = { zh, en };

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: UI }>({
  lang: "zh",
  setLang: () => {},
  t: zh,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh");

  useEffect(() => {
    const saved = localStorage.getItem("bc-lang");
    if (saved === "en" || saved === "zh") setLang(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("bc-lang", lang);
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: uiStrings[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
