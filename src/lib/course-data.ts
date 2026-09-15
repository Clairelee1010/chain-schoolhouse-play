export type Point = { title: string; desc: string; quote: string };
export type Topic = {
  id: string;
  icon: string;
  index: string;
  title: string;
  front: string;
  points: Point[];
  glossary: { term: string; desc: string }[];
};

export const topics: Topic[] = [
  {
    id: "stablecoin",
    icon: "⚖️",
    index: "01",
    title: "穩定幣入門與種類解密",
    front: "價格天天像坐雲霄飛車？教你用穩定幣打造數位資產的避風港！",
    points: [
      {
        title: "法幣抵押型穩定幣",
        desc: "由美元或短期美債等法定貨幣資產 1:1 100% 儲備發行（如 USDT、USDC）。",
        quote: "每一顆穩定幣背後，都有真正的美元在撐腰！",
      },
      {
        title: "加密資產抵押型穩定幣",
        desc: "通常採用超額抵押機制來維持價格穩定（如 USDS、DAI）。",
        quote: "用更多的鏈上資產做擋箭牌，抗跌耐震更安心！",
      },
      {
        title: "合成美元／對衝型穩定幣",
        desc: "透過現貨資產與衍生品對衝策略來降低波動（如 USDe）。",
        quote: "靠對衝策略擋住風浪，不放現貨也能維持平穩！",
      },
      {
        title: "演算法穩定幣",
        desc: "純粹透過演算法調節市場供需（如 Luna/UST）。",
        quote: "沒有資產儲備只靠代碼演算法，市場恐慌時極易面臨脫鉤考驗！",
      },
    ],
    glossary: [
      { term: "穩定幣 (Stablecoin)", desc: "價格錨定法定貨幣的加密貨幣。" },
      { term: "錨定 (Peg)", desc: "將數位資產與另一項資產按固定比例連動。" },
      { term: "脫鉤 (Depeg)", desc: "穩定幣價格明顯偏離原本錨定的價格。" },
    ],
  },
  {
    id: "regulation",
    icon: "📜",
    index: "02",
    title: "監管法規與儲備安全防線",
    front: "發行商口袋到底有沒有錢？帶你一眼看懂監管法規與儲備真相！",
    points: [
      {
        title: "國際監管法規 (GENIUS Act / MiCA)",
        desc: "美國與歐盟出台的穩定幣專法。",
        quote: "有了專法嚴格把關，野蠻生長的時代正式終結！",
      },
      {
        title: "100% 足額儲備 (Full Reserve)",
        desc: "每發行 1 元穩定幣，必須有等值的現金或高品質流動資產作儲備。",
        quote: "實打實的資產備查，隨時兌現不卡關！",
      },
      {
        title: "禁止重複抵押 (No Rehypothecation)",
        desc: "嚴禁將客戶的抵押資產再次轉借或二次抵押。",
        quote: "你的錢就是你的錢，絕不許被私下挪用！",
      },
      {
        title: "儲備證明與第三方審計",
        desc: "透過獨立會計師核驗與完整審計，確認資產真偽。",
        quote: "公開透明的帳本，才是信任的最強基石！",
      },
    ],
    glossary: [
      { term: "GENIUS Act", desc: "美國 2025 年簽署的聯邦層級支付型穩定幣專法。" },
      {
        term: "儲備簽證報告 (Attestation Report)",
        desc: "外部會計師針對特定日期儲備資料進行核驗的報告。",
      },
      { term: "重複抵押 (Rehypothecation)", desc: "把客戶的抵押品拿去二次抵押或借貸的行為。" },
    ],
  },
  {
    id: "rwa",
    icon: "🌐",
    index: "03",
    title: "RWA 與傳統資產鏈上化",
    front: "美債、股票也能在區塊鏈上買賣？一文看懂真實世界資產 (RWA) 代幣化！",
    points: [
      {
        title: "真實世界資產 (RWA)",
        desc: "將股票、美債、房地產等傳統金融資產「代幣化」搬上區塊鏈。",
        quote: "實體資產躍上區塊鏈，全天候交易零時差！",
      },
      {
        title: "代幣化美債 (Tokenized Treasury)",
        desc: "例如 BlackRock 發行的 BUIDL，持有即享美債收益。",
        quote: "手上握有代幣，就能坐收傳統國債的利息！",
      },
      {
        title: "預言機 (Oracle)",
        desc: "安全傳遞鏈外真實世界價格與資料至區塊鏈上。",
        quote: "區塊鏈穿透現實的眼睛，即時傳遞真實價格！",
      },
      {
        title: "清算與結算 (Liquidation & Settlement)",
        desc: "透過智能合約實現自動化與高效率交割。",
        quote: "鏈上自動結算，大幅省去傳統繁複的人工手續！",
      },
    ],
    glossary: [
      {
        term: "RWA (Real World Assets)",
        desc: "把股票、債券等實體資產代幣化搬到區塊鏈上。",
      },
      { term: "代幣化 (Tokenization)", desc: "將實體資產的所有權或價值轉換成鏈上數位代幣。" },
      { term: "預言機 (Oracle)", desc: "將現實世界數據安全導入區塊鏈智能合約的橋樑。" },
    ],
  },
  {
    id: "future",
    icon: "🤖",
    index: "04",
    title: "可程式化金融、AI Agent 與前沿技術",
    front: "AI 也懂得自己刷卡買東西？解密未來可程式化金融與鏈上支付！",
    points: [
      {
        title: "可程式化金融",
        desc: "將金融服務拆成模組，利用智能合約實現自動化支付。",
        quote: "讓資金會自己思考，按條件自動扣款無須人工干預！",
      },
      {
        title: "AI Agent 鏈上支付",
        desc: "AI 代理人自主執行任務，並透過微支付協議（如 x402）以穩定幣直接結算。",
        quote: "AI 代理人的專屬錢包，開啟微支付自動化新時代！",
      },
      {
        title: "零知識證明 (Zero-Knowledge Proof)",
        desc: "在不洩漏具體隱私資料的情況下，證明某件事為真。",
        quote: "隱私不洩漏，驗證依然真！",
      },
      {
        title: "Code is Law (程式碼即法律)",
        desc: "DeFi 的核心精神，合約程式碼如何撰寫即如何執行。",
        quote: "靠合約邏輯代替人情運作，自動執行最公正！",
      },
    ],
    glossary: [
      { term: "AI Agent (AI 代理人)", desc: "能自主拆解任務、執行與判斷的 AI 程式。" },
      {
        term: "x402 協議",
        desc: "基於 HTTP 402 狀態碼，讓 AI 直接用穩定幣付費的標準協議。",
      },
      { term: "零知識證明", desc: "在不暴露背後具體數據的情況下，證明某項陳述確實為真。" },
    ],
  },
];

export type Question = {
  id: string;
  q: string;
  options: string[];
  answer: number;
  explain: string;
};

export const questions: Question[] = [
  {
    id: "q1",
    q: "哪一種穩定幣是以現金或短期美債作為 1:1 儲備資產？",
    options: ["演算法穩定幣", "法幣抵押型穩定幣", "合成美元穩定幣", "槓桿型穩定幣"],
    answer: 1,
    explain:
      "法幣抵押型穩定幣（如 USDT、USDC）以現金或短期美債等高品質流動資產 1:1 足額儲備發行。",
  },
  {
    id: "q2",
    q: "什麼是穩定幣的「脫鉤 (Depeg)」？",
    options: [
      "穩定幣交易速度變慢",
      "穩定幣價格偏離原本錨定的價格",
      "手續費大幅上升",
      "交易所暫停出入金",
    ],
    answer: 1,
    explain: "脫鉤指穩定幣價格明顯偏離原本錨定的目標價（例如 1 美元），代表錨定機制失效。",
  },
  {
    id: "q3",
    q: "美國通過的支付型穩定幣聯邦專法名稱為何？",
    options: ["MiCA", "CLARITY Act", "GENIUS Act", "Dodd-Frank Act"],
    answer: 2,
    explain: "GENIUS Act 是美國 2025 年簽署的聯邦層級支付型穩定幣專法；MiCA 則是歐盟的法規。",
  },
  {
    id: "q4",
    q: "什麼是 RWA（真實世界資產）？",
    options: [
      "僅存於虛擬世界中的遊戲道具",
      "將股票、債券等傳統資產代幣化搬上區塊鏈",
      "一種新的演算法穩定幣",
      "區塊鏈的硬體設備",
    ],
    answer: 1,
    explain: "RWA 是把股票、美債、房地產等真實世界資產代幣化，讓它們能在鏈上全天候交易與結算。",
  },
  {
    id: "q5",
    q: "專門讓 AI Agent 透過 HTTP 請求直接以穩定幣完成付費的標準協議為何？",
    options: ["x402 協議", "MP3 協議", "SMTP 協議", "IPFS 協議"],
    answer: 0,
    explain: "x402 協議基於 HTTP 402 狀態碼，讓 AI 代理人可直接使用穩定幣完成微支付。",
  },
];

export type Grade = {
  title: string;
  comment: string;
  medal: string;
  radar: { label: string; value: number }[];
};

export function getGrade(score: number): Grade {
  if (score === 5)
    return {
      medal: "🏅",
      title: "【中本聰傳人 ⚡ 區塊鏈終極大師】",
      comment:
        "太強了！你對穩定幣機制、合規法規（GENIUS Act）、RWA 以及最前沿的 AI Agent x402 協議瞭如指掌，完全是鏈上世界的頂級專家！",
      radar: [],
    };
  if (score >= 3)
    return {
      medal: "🥈",
      title: "【資深鏈上原住民 🪙】",
      comment:
        "表現很棒！你已經具備紮實的穩定幣基礎，也搞懂了法幣抵押與真實資產鏈上化。只要再補足一些前沿 AI 支付的知識，就能晉升大師！",
      radar: [],
    };
  if (score >= 1)
    return {
      medal: "🥉",
      title: "【區塊鏈萌新韭菜 🌱】",
      comment:
        "加油！你已經踏出認識數位美元的第一步。記得多看幾次上面的知識卡片，搞懂什麼是「脫鉤風險」和「足額儲備」，你很快就能順利畢業！",
      radar: [],
    };
  return {
    medal: "❌",
    title: "【圈外麻瓜 🧙‍♂️】",
    comment:
      "別灰心！區塊鏈的世界對你來說還很新。建議重頭翻轉卡片認真閱讀，再挑戰一次，絕對能拿到好成績！",
    radar: [],
  };
}

export const skillLabels = ["穩定幣機制", "合規儲備", "RWA 代幣化", "AI 支付", "風險意識"];
