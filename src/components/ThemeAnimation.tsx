import { useEffect } from "react";

const scenes: Record<string, { title: string; caption: string; body: React.ReactNode }> = {
  stablecoin: {
    title: "USDT 銀行存摺",
    caption: "每發行 1 顆 USDT，銀行存摺裡就有 1 美元儲備 💵",
    body: (
      <div className="ta-scene">
        <div className="ta-passbook">
          <div className="ta-passbook-spine" />
          <div className="ta-passbook-lines">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="ta-passbook-balance">$1.00</div>
        </div>
        <div className="ta-coin-row">
          <span className="ta-coin" style={{ animationDelay: "0.2s" }}>₮</span>
          <span className="ta-coin" style={{ animationDelay: "0.6s" }}>₮</span>
          <span className="ta-coin" style={{ animationDelay: "1s" }}>₮</span>
        </div>
        <div className="ta-peg-line" />
      </div>
    ),
  },
  regulation: {
    title: "合規盾牌認證",
    caption: "GENIUS Act 與 MiCA 為穩定幣蓋上合規認證章 🛡️",
    body: (
      <div className="ta-scene">
        <div className="ta-shield">🛡️</div>
        <div className="ta-stamp">GENIUS ✓</div>
        <div className="ta-stamp ta-stamp-2">MiCA ✓</div>
        <div className="ta-doc">📜</div>
      </div>
    ),
  },
  rwa: {
    title: "資產鏈上化",
    caption: "房子、美債變成鏈上代幣，24 小時都能交易 🏠➡️🪙",
    body: (
      <div className="ta-scene">
        <div className="ta-house">🏠</div>
        <div className="ta-arrow-flow">
          <span style={{ animationDelay: "0s" }}>●</span>
          <span style={{ animationDelay: "0.3s" }}>●</span>
          <span style={{ animationDelay: "0.6s" }}>●</span>
        </div>
        <div className="ta-blocks">
          <div className="ta-block" style={{ animationDelay: "0.1s" }}>🪙</div>
          <div className="ta-block" style={{ animationDelay: "0.4s" }}>🪙</div>
          <div className="ta-block" style={{ animationDelay: "0.7s" }}>🪙</div>
        </div>
      </div>
    ),
  },
  future: {
    title: "AI Agent 自動付款",
    caption: "AI 代理人透過 x402 協議，用穩定幣自己完成支付 🤖⚡",
    body: (
      <div className="ta-scene">
        <div className="ta-bot">🤖</div>
        <div className="ta-pay-trail">
          <span className="ta-pay-coin" style={{ animationDelay: "0.5s" }}>₮</span>
        </div>
        <div className="ta-terminal">
          <span className="ta-code ta-code-1">HTTP 402</span>
          <span className="ta-code ta-code-2">Payment ✓</span>
        </div>
      </div>
    ),
  },
};

export function ThemeAnimation({ topicId, onClose }: { topicId: string; onClose: () => void }) {
  const scene = scenes[topicId];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!scene) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={scene.title}
      onClick={onClose}
    >
      <style>{`
        .ta-scene { position: relative; width: 100%; height: 240px; display: flex; align-items: center; justify-content: center; gap: 32px; }
        /* 穩定幣：存摺 + 落下硬幣 */
        .ta-passbook { position: relative; width: 110px; height: 140px; background: linear-gradient(135deg, oklch(0.52 0.19 268), oklch(0.4 0.15 265)); border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,.35); animation: ta-breathe 2.4s ease-in-out infinite; }
        .ta-passbook-spine { position: absolute; left: 10px; top: 0; bottom: 0; width: 4px; background: rgba(255,255,255,.25); border-radius: 2px; }
        .ta-passbook-lines { position: absolute; left: 26px; right: 12px; top: 20px; display: flex; flex-direction: column; gap: 10px; }
        .ta-passbook-lines span { height: 5px; border-radius: 3px; background: rgba(255,255,255,.35); }
        .ta-passbook-balance { position: absolute; bottom: 14px; left: 26px; font-weight: 800; font-size: 18px; color: oklch(0.85 0.18 152); animation: ta-count 2.4s ease-in-out infinite; }
        .ta-coin-row { display: flex; gap: 10px; }
        .ta-coin { display: inline-flex; align-items: center; justify-content: center; width: 52px; height: 52px; border-radius: 9999px; background: linear-gradient(135deg, oklch(0.78 0.2 152), oklch(0.6 0.17 155)); color: #06281a; font-weight: 900; font-size: 26px; box-shadow: 0 6px 16px rgba(0,0,0,.3); animation: ta-drop 1.6s cubic-bezier(.34,1.56,.64,1) infinite; }
        .ta-peg-line { position: absolute; bottom: 40px; left: 15%; right: 15%; height: 3px; border-radius: 2px; background: repeating-linear-gradient(90deg, oklch(0.78 0.2 152) 0 10px, transparent 10px 20px); opacity: .6; animation: ta-dash 1.2s linear infinite; }
        /* 法規：盾牌 + 蓋章 */
        .ta-shield { font-size: 84px; animation: ta-breathe 2.4s ease-in-out infinite; }
        .ta-doc { position: absolute; right: 12%; top: 30px; font-size: 44px; opacity: .8; animation: ta-sway 3s ease-in-out infinite; }
        .ta-stamp { position: absolute; left: 8%; top: 44px; padding: 6px 14px; border: 3px solid oklch(0.78 0.2 152); border-radius: 8px; color: oklch(0.78 0.2 152); font-weight: 900; font-size: 16px; transform: rotate(-12deg); animation: ta-stamp 2.6s ease-in-out infinite; }
        .ta-stamp-2 { left: auto; right: 6%; top: auto; bottom: 36px; transform: rotate(8deg); animation-delay: 1.3s; }
        /* RWA：房子流向代幣 */
        .ta-house { font-size: 72px; animation: ta-sway 3s ease-in-out infinite; }
        .ta-arrow-flow { display: flex; gap: 8px; }
        .ta-arrow-flow span { color: oklch(0.78 0.2 152); font-size: 20px; animation: ta-pulse-dot 1.2s ease-in-out infinite; }
        .ta-blocks { display: flex; flex-direction: column; gap: 8px; }
        .ta-block { font-size: 40px; animation: ta-pop 1.8s cubic-bezier(.34,1.56,.64,1) infinite; }
        /* AI：機器人付款 */
        .ta-bot { font-size: 76px; animation: ta-breathe 2.2s ease-in-out infinite; }
        .ta-pay-trail { position: relative; width: 90px; height: 60px; }
        .ta-pay-coin { position: absolute; left: 0; top: 14px; display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 9999px; background: linear-gradient(135deg, oklch(0.78 0.2 152), oklch(0.6 0.17 155)); color: #06281a; font-weight: 900; font-size: 18px; animation: ta-fly 1.8s ease-in-out infinite; }
        .ta-terminal { display: flex; flex-direction: column; gap: 8px; padding: 14px 18px; border-radius: 10px; background: #0c1428; border: 1px solid rgba(255,255,255,.15); }
        .ta-code { font-family: ui-monospace, monospace; font-size: 14px; font-weight: 700; }
        .ta-code-1 { color: #8ea2ff; animation: ta-blink 1.4s step-end infinite; }
        .ta-code-2 { color: oklch(0.78 0.2 152); animation: ta-blink 1.4s step-end infinite; animation-delay: .7s; }
        @keyframes ta-breathe { 0%,100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-8px) scale(1.04); } }
        @keyframes ta-drop { 0% { transform: translateY(-40px); opacity: 0; } 35% { opacity: 1; } 60% { transform: translateY(0); } 80% { transform: translateY(-8px); } 100% { transform: translateY(0); opacity: 1; } }
        @keyframes ta-dash { to { background-position: 20px 0; } }
        @keyframes ta-count { 0%,100% { opacity: 1; } 50% { opacity: .55; } }
        @keyframes ta-stamp { 0%, 55% { transform: rotate(-12deg) scale(2.2); opacity: 0; } 65% { transform: rotate(-12deg) scale(.92); opacity: 1; } 75%, 100% { transform: rotate(-12deg) scale(1); opacity: 1; } }
        @keyframes ta-sway { 0%,100% { transform: rotate(-4deg); } 50% { transform: rotate(4deg); } }
        @keyframes ta-pulse-dot { 0%,100% { opacity: .25; transform: scale(.8); } 50% { opacity: 1; transform: scale(1.25); } }
        @keyframes ta-pop { 0% { transform: scale(0); opacity: 0; } 40% { transform: scale(1.15); opacity: 1; } 60%,100% { transform: scale(1); opacity: 1; } }
        @keyframes ta-fly { 0% { transform: translateX(0) translateY(0); opacity: 0; } 20% { opacity: 1; } 80% { transform: translateX(52px) translateY(-6px); opacity: 1; } 100% { transform: translateX(60px) translateY(-6px); opacity: 0; } }
        @keyframes ta-blink { 0%,100% { opacity: 1; } 50% { opacity: .3; } }
      `}</style>
      <div
        className="animate-enter w-full max-w-md rounded-3xl surface-card p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">{scene.title}</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="關閉動畫"
            className="rounded-full bg-muted px-3 py-1.5 text-sm font-bold text-muted-foreground transition-transform hover:scale-105"
          >
            ✕
          </button>
        </div>
        <div className="mt-4 overflow-hidden rounded-2xl bg-muted/50">{scene.body}</div>
        <p className="mt-4 text-center text-sm leading-relaxed text-muted-foreground">{scene.caption}</p>
      </div>
    </div>
  );
}
