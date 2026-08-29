import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const FEATURES = [
  {
    icon: <FlameIcon />,
    title: "甲種防火認證",
    desc: "全系列防火門取得 CNS 6382 甲種一小時防火時效認證，通過各縣市消防單位查驗，公設與逃生通道皆可合法安裝。",
  },
  {
    icon: <RulerIcon />,
    title: "現場丈量訂製",
    desc: "每一戶玄關的樑柱、地坪、開門方向都不同，我們先到府丈量再開版，避免修改樑柱或門框縫隙過大的問題。",
  },
  {
    icon: <LayersIcon />,
    title: "氣密隔音結構",
    desc: "門片內填岩棉並搭配三段式氣密膠條，實測可降低外部噪音與冷氣外洩，冬天也不會有明顯的穿堂風。",
  },
  {
    icon: <WrenchIcon />,
    title: "到府安裝驗收",
    desc: "從丈量、生產到安裝由同一組師傅跟案，完工後現場測試開闔角度與五金鬆緊，當場排除問題才算完工。",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "到府丈量",
    desc: "專人到場確認樑柱尺寸、地坪高低差與開門方向，同步討論風格與預算範圍。",
  },
  {
    step: "02",
    title: "設計定案",
    desc: "提供門片材質、色板與五金選項，確認圖面尺寸與防火規格後才排入生產。",
  },
  {
    step: "03",
    title: "工廠製造",
    desc: "門框與門片於工廠加工組裝，防火門同步進行認證批號建檔，方便日後消防申報。",
  },
  {
    step: "04",
    title: "安裝驗收",
    desc: "師傅到府組裝門框、調整水平垂直，並當場測試開闔順暢度與氣密效果。",
  },
];

const CERTS = [
  "CNS 6382 甲種認證",
  "ISO 9001 品質管理",
  "消防署列管工廠",
  "建材履歷可追溯",
];

export default function Home() {
  return (
    <div className="flex flex-col bg-stone-50 text-zinc-900">
      <Header />
      <Hero />
      <Features />
      <Products />
      <Process />
      <CertStrip />
      <Contact />
      <Footer />
    </div>
  );
}

function Features() {
  return (
    <section id="why" className="border-t border-zinc-200 bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="text-xs tracking-[0.3em] text-amber-700">WHY JOE FU</p>
          <h2 className="mt-4 font-serif text-3xl text-zinc-950 sm:text-4xl">
            我們在意的細節，你看得出來
          </h2>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex flex-col gap-4 bg-white p-8">
              <span className="text-amber-700">{f.icon}</span>
              <h3 className="font-medium text-zinc-950">{f.title}</h3>
              <p className="text-sm leading-7 text-zinc-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="bg-zinc-950 px-6 py-24 text-stone-50 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.3em] text-amber-500">PRODUCTS</p>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl">兩大產品系列</h2>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <ProductCard
            title="玄關門"
            desc="以住宅氣密與質感為出發，門片可搭配木紋、鋼刷或岩板材質，五金鎖點依樓層需求調整。"
            points={["多層膠合鋼板結構", "三段式氣密膠條", "可搭配貓眼、電子鎖預留孔"]}
          />
          <ProductCard
            title="防火門"
            desc="適用集合住宅逃生通道、管道間與公設空間，出貨附認證標示與批號，方便物業消防申報。"
            points={["CNS 6382 甲種一小時認證", "防火填充岩棉隔板", "自動閉門器與門縫止煙條"]}
          />
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  title,
  desc,
  points,
}: {
  title: string;
  desc: string;
  points: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
      <h3 className="font-serif text-2xl">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-zinc-400">{desc}</p>
      <ul className="mt-6 space-y-3">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm text-zinc-300">
            <CheckIcon />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Process() {
  return (
    <section id="process" className="bg-stone-50 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.3em] text-amber-700">PROCESS</p>
        <h2 className="mt-4 font-serif text-3xl text-zinc-950 sm:text-4xl">
          從丈量到驗收，四個步驟
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((item, i) => (
            <div key={item.step} className="relative pl-2">
              <span className="font-serif text-4xl text-zinc-200">{item.step}</span>
              <h3 className="mt-3 font-medium text-zinc-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600">{item.desc}</p>
              {i < PROCESS.length - 1 && (
                <span className="absolute right-[-1.25rem] top-4 hidden h-px w-8 bg-zinc-300 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertStrip() {
  return (
    <div className="border-y border-zinc-200 bg-white px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3">
        {CERTS.map((c) => (
          <span key={c} className="text-xs tracking-[0.15em] text-zinc-500">
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-zinc-900 px-6 py-24 text-stone-50 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
        <div>
          <p className="text-xs tracking-[0.3em] text-amber-500">CONTACT</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
            讓我們替你的玄關，
            <br />
            做出對的決定
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-400">
            提供地址與樓層資訊，我們會安排丈量人員與你聯繫確認時間，丈量與估價皆不收費。
          </p>

          <ul className="mt-10 space-y-5 text-sm text-zinc-300">
            <li className="flex items-center gap-3">
              <PhoneIcon />
              02-2345-6789
            </li>
            <li className="flex items-center gap-3">
              <MapPinIcon />
              新北市土城區中央路二段 88 號
            </li>
            <li className="flex items-center gap-3">
              <ClockIcon />
              週一至週六 09:00–18:00
            </li>
          </ul>
        </div>

        <form className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <div>
            <label className="text-xs tracking-[0.15em] text-zinc-400">姓名</label>
            <input
              type="text"
              className="mt-2 w-full border-b border-white/20 bg-transparent py-2 text-sm outline-none focus:border-amber-500"
              placeholder="王小明"
            />
          </div>
          <div>
            <label className="text-xs tracking-[0.15em] text-zinc-400">聯絡電話</label>
            <input
              type="tel"
              className="mt-2 w-full border-b border-white/20 bg-transparent py-2 text-sm outline-none focus:border-amber-500"
              placeholder="09xx-xxx-xxx"
            />
          </div>
          <div>
            <label className="text-xs tracking-[0.15em] text-zinc-400">需求說明</label>
            <textarea
              rows={3}
              className="mt-2 w-full border-b border-white/20 bg-transparent py-2 text-sm outline-none focus:border-amber-500"
              placeholder="想更換玄關門 / 社區逃生門汰換..."
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-amber-600 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-amber-500"
          >
            送出諮詢
          </button>
        </form>
      </div>
    </section>
  );
}

function FlameIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3c1 3-3 4-3 8a3 3 0 0 0 6 0c0-1-.5-2-1-2 1 3-1 3-1 5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 14a3 3 0 1 0 6 0c0-2-1-3-1-3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RulerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="8" width="18" height="8" rx="1" />
      <path d="M7 8v3M11 8v3M15 8v3" strokeLinecap="round" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3 3 8l9 5 9-5-9-5Z" strokeLinejoin="round" />
      <path d="m3 12 9 5 9-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-1 shrink-0 text-amber-500">
      <path d="m5 12 5 5 9-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-amber-500">
      <path d="M6 3h3l2 5-2 1a10 10 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-amber-500">
      <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-amber-500">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
