import type { Topic, Question, Grade } from "./course-data";

export const topicsEn: Topic[] = [
  {
    id: "stablecoin",
    icon: "⚖️",
    index: "01",
    title: "Stablecoins 101: the main types",
    front: "Prices swinging like a rollercoaster? Stablecoins are the safe harbour for digital money.",
    points: [
      {
        title: "Fiat-backed stablecoins",
        desc: "Issued 1:1 against dollars or short-term Treasuries held in full reserve (USDT, USDC).",
        quote: "Every coin is backed by a real dollar sitting in reserve!",
      },
      {
        title: "Crypto-collateralised stablecoins",
        desc: "Kept stable by over-collateralising on-chain assets (USDS, DAI).",
        quote: "Extra on-chain collateral acts as a shock absorber!",
      },
      {
        title: "Synthetic dollar / hedged stablecoins",
        desc: "Volatility is neutralised by pairing spot assets with derivatives hedges (USDe).",
        quote: "Hedging holds the line, no vault of cash required!",
      },
      {
        title: "Algorithmic stablecoins",
        desc: "Supply and demand are balanced purely by code (Luna/UST).",
        quote: "No reserves, only code — one panic and the peg can break!",
      },
    ],
    glossary: [
      { term: "Stablecoin", desc: "A crypto token whose price is pegged to a fiat currency." },
      { term: "Peg", desc: "Linking a digital asset to another asset at a fixed ratio." },
      { term: "Depeg", desc: "When a stablecoin's price drifts clearly away from its peg." },
    ],
    furtherReading: {
      label: "White House fact sheet on the GENIUS Act",
      url: "https://www.whitehouse.gov/fact-sheets/2025/07/fact-sheet-president-donald-j-trump-signs-genius-act-into-law/",
    },
  },
  {
    id: "regulation",
    icon: "📜",
    index: "02",
    title: "Regulation and the reserve safety net",
    front: "Does the issuer really hold the money? Here's how the rules and reserves work.",
    points: [
      {
        title: "Global rules (GENIUS Act / MiCA)",
        desc: "Dedicated stablecoin laws in the United States and the European Union.",
        quote: "With real laws in place, the wild-west era is over!",
      },
      {
        title: "100% full reserve",
        desc: "Every token issued must be matched by cash or high-quality liquid assets.",
        quote: "Real assets on file mean redemption always works!",
      },
      {
        title: "No rehypothecation",
        desc: "Customer collateral may never be lent out or pledged a second time.",
        quote: "Your money stays your money — no quiet reuse allowed!",
      },
      {
        title: "Attestations and third-party audits",
        desc: "Independent accountants verify that the reserves genuinely exist.",
        quote: "An open ledger is the strongest foundation for trust!",
      },
    ],
    glossary: [
      { term: "GENIUS Act", desc: "The US federal payment stablecoin law signed in 2025." },
      {
        term: "Attestation report",
        desc: "An external accountant's verification of reserves on a given date.",
      },
      { term: "Rehypothecation", desc: "Re-pledging or lending out a customer's collateral." },
    ],
    furtherReading: {
      label: "ESMA's official MiCA overview",
      url: "https://www.esma.europa.eu/esmas-activities/digital-finance-and-innovation/markets-crypto-assets-regulation-mica",
    },
  },
  {
    id: "rwa",
    icon: "🌐",
    index: "03",
    title: "RWA: traditional assets on-chain",
    front: "Treasuries and stocks traded on a blockchain? Meet real world asset tokenisation.",
    points: [
      {
        title: "Real world assets (RWA)",
        desc: "Stocks, Treasuries and property are tokenised and moved onto a blockchain.",
        quote: "Physical assets go on-chain and trade around the clock!",
      },
      {
        title: "Tokenised Treasuries",
        desc: "BlackRock's BUIDL, for example, pays Treasury yield straight to holders.",
        quote: "Hold the token, collect the government bond yield!",
      },
      {
        title: "Oracles",
        desc: "They deliver real-world prices and data onto the blockchain securely.",
        quote: "The chain's eyes on reality, streaming live prices!",
      },
      {
        title: "Liquidation and settlement",
        desc: "Smart contracts settle trades automatically and efficiently.",
        quote: "On-chain settlement skips the paperwork entirely!",
      },
    ],
    glossary: [
      {
        term: "RWA (Real World Assets)",
        desc: "Tokenising stocks, bonds and other physical assets on-chain.",
      },
      { term: "Tokenisation", desc: "Turning ownership of a real asset into a digital token." },
      { term: "Oracle", desc: "The bridge feeding real-world data into smart contracts." },
    ],
    furtherReading: {
      label: "A deep dive into RWA tokenisation",
      url: "https://www.learningcrypto.com/resources/real-world-assets",
    },
  },
  {
    id: "future",
    icon: "🤖",
    index: "04",
    title: "Programmable finance, AI agents and what's next",
    front: "Can an AI pay for things by itself? Inside programmable finance and on-chain payments.",
    points: [
      {
        title: "Programmable finance",
        desc: "Financial services split into modules that smart contracts run automatically.",
        quote: "Money that thinks for itself and pays on cue!",
      },
      {
        title: "AI agent payments",
        desc: "Agents settle micropayments directly in stablecoins via protocols like x402.",
        quote: "Wallets for AI agents open the micropayment era!",
      },
      {
        title: "Zero-knowledge proofs",
        desc: "Prove something is true without revealing the private data behind it.",
        quote: "Privacy intact, proof still valid!",
      },
      {
        title: "Code is law",
        desc: "In DeFi, the contract executes exactly as it is written.",
        quote: "Contract logic replaces favours — execution is impartial!",
      },
    ],
    glossary: [
      { term: "AI agent", desc: "Software that plans, decides and carries out tasks on its own." },
      {
        term: "x402 protocol",
        desc: "A standard built on HTTP 402 letting AI pay directly in stablecoins.",
      },
      { term: "Zero-knowledge proof", desc: "Proving a statement true without exposing the data." },
    ],
    furtherReading: {
      label: "How x402 brings crypto payments to the web (Alchemy)",
      url: "https://www.alchemy.com/blog/how-x402-brings-real-time-crypto-payments-to-the-web",
    },
  },
];

export const questionsEn: Question[] = [
  {
    id: "q1",
    q: "Which stablecoin type is backed 1:1 by cash or short-term Treasuries?",
    options: [
      "Algorithmic stablecoins",
      "Fiat-backed stablecoins",
      "Synthetic dollar stablecoins",
      "Leveraged stablecoins",
    ],
    answer: 1,
    explain:
      "Fiat-backed stablecoins such as USDT and USDC are issued against a full reserve of cash or short-term Treasuries.",
  },
  {
    id: "q2",
    q: "What does it mean when a stablecoin \"depegs\"?",
    options: [
      "Transactions become slower",
      "Its price drifts away from the pegged value",
      "Fees rise sharply",
      "The exchange halts withdrawals",
    ],
    answer: 1,
    explain:
      "A depeg means the price moves clearly away from its target (e.g. $1), showing the peg mechanism has failed.",
  },
  {
    id: "q3",
    q: "What is the name of the US federal law for payment stablecoins?",
    options: ["MiCA", "CLARITY Act", "GENIUS Act", "Dodd-Frank Act"],
    answer: 2,
    explain:
      "The GENIUS Act is the US federal payment stablecoin law signed in 2025; MiCA is the European Union's framework.",
  },
  {
    id: "q4",
    q: "What are real world assets (RWA)?",
    options: [
      "Virtual game items only",
      "Traditional assets like stocks and bonds tokenised on a blockchain",
      "A new kind of algorithmic stablecoin",
      "Blockchain mining hardware",
    ],
    answer: 1,
    explain:
      "RWA means tokenising stocks, Treasuries or property so they can be traded and settled on-chain around the clock.",
  },
  {
    id: "q5",
    q: "Which protocol lets AI agents pay in stablecoins directly over HTTP?",
    options: ["x402 protocol", "MP3 protocol", "SMTP protocol", "IPFS protocol"],
    answer: 0,
    explain:
      "The x402 protocol builds on the HTTP 402 status code so AI agents can settle micropayments in stablecoins.",
  },
];

export function getGradeEn(score: number): Grade {
  if (score === 5)
    return {
      medal: "🏅",
      title: "[Satoshi's Heir ⚡ Blockchain Grandmaster]",
      comment:
        "Outstanding! You know stablecoin mechanics, the GENIUS Act, RWA tokenisation and the cutting-edge x402 agent payments inside out — a true on-chain expert.",
      radar: [],
    };
  if (score >= 3)
    return {
      medal: "🥈",
      title: "[Seasoned On-chain Native 🪙]",
      comment:
        "Great work! You have solid stablecoin fundamentals and understand fiat backing and tokenised assets. Brush up on AI payments and grandmaster status is yours.",
      radar: [],
    };
  if (score >= 1)
    return {
      medal: "🥉",
      title: "[Fresh Sprout 🌱]",
      comment:
        "Nice start! You've taken your first step into digital dollars. Review the cards on depeg risk and full reserves and you'll graduate in no time.",
      radar: [],
    };
  return {
    medal: "❌",
    title: "[Crypto Muggle 🧙‍♂️]",
    comment:
      "Don't worry — this world is brand new to you. Flip through the cards carefully, then try the quiz again for a much better score.",
    radar: [],
  };
}

export const skillLabelsEn = [
  "Stablecoins",
  "Compliance",
  "RWA",
  "AI payments",
  "Risk awareness",
];
