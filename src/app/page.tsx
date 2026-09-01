import Image, { type StaticImageData } from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import doorEntrance02 from "../../public/photos/door-entrance-02.jpg";
import doorFire01 from "../../public/photos/door-fire-01.jpg";
import doorEscape01 from "../../public/photos/door-escape-01.jpg";
import doorFloodgate01 from "../../public/photos/door-floodgate-01.jpg";

const FEATURES = [
  {
    icon: <FlameIcon />,
    title: "60A防火認證",
    desc: "全系列防火門取得 11227-1 一小時防火時效認證，通過各縣市消防單位查驗，從玄關門.公設與逃生通道皆可合法安裝。",
  },
  {
    icon: <RulerIcon />,
    title: "現場丈量訂製",
    desc: "每一戶玄關的樑柱、地坪、開門方向都不同，我們先到府丈量再開版，避免修改樑柱或門框縫隙過大的問題。",
  },
  {
    icon: <LayersIcon />,
    title: "氣密隔音結構",
    desc: "門片內填防火消音板材並搭配防火膠條，可降低噪音與冷氣外洩。",
  },
  {
    icon: <WrenchIcon />,
    title: "到府安裝驗收",
    desc: "從丈量、生產到安裝一條龍服務，完工後現場測試開闔角度與五金鬆緊，當場排除問題驗收才算完工。",
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
  "CNS 11227-1 防火門測試規範 成大防火實驗室權威認證",
  "CNS 15038 建築用門遮煙性試驗法",
  "TABC台灣建築中心 防火門檢測認證",
];

export default function Home() {
  return (
    <div className="flex flex-col text-zinc-900">
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
    <section id="why" className="border-t border-zinc-200 bg-white/70 px-6 py-24 backdrop-blur-sm lg:px-8">
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
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl">產品系列</h2>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <ProductCard
            image={doorEntrance02}
            title="玄關門"
            desc="以住宅氣密與質感為出發，門片可搭配木紋、鋼刷或岩板材質，五金鎖點依樓層需求調整。"
            points={["多層膠合鋼板結構", "三段式氣密膠條", "可搭配貓眼、電子鎖預留孔"]}
          />
          <ProductCard
            image={doorFire01}
            title="防火門"
            desc="適用集合住宅逃生通道、管道間與公設空間，出貨附認證標示與批號，方便物業消防申報。"
            points={["CNS 6382 甲種一小時認證", "防火填充岩棉隔板", "自動閉門器與門縫止煙條"]}
          />
          <ProductCard
            image={doorEscape01}
            title="逃生梯門"
            desc="設置於社區安全梯間、屋頂出入口，維持逃生動線暢通並阻絕火煙擴散，符合建築逃生設施規範。"
            points={["常時關閉式認證", "緊急逃生閂把手", "耐燃鋼板結構"]}
          />
          <ProductCard
            image={doorFloodgate01}
            title="防水閘門"
            desc="安裝於地下室車道、機房入口，颱風豪雨時可快速關閉，阻擋雨水灌入地下空間。"
            points={["不鏽鋼板材防鏽耐候", "橡膠止水條氣密設計", "可搭配手動或電動啟閉"]}
          />
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  image,
  title,
  desc,
  points,
}: {
  image: StaticImageData;
  title: string;
  desc: string;
  points: string[];
}) {
  return (
    <div className="group relative h-[440px] overflow-hidden rounded-2xl border border-white/10">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/10" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="font-serif text-xl">{title}</h3>
        <p className="mt-2.5 text-xs leading-6 text-zinc-300">{desc}</p>
        <ul className="mt-4 space-y-2">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2 text-xs text-zinc-200">
              <CheckIcon />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Process() {
  return (
    <section id="process" className="bg-stone-50/60 px-6 py-24 backdrop-blur-sm lg:px-8">
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
    <div id="certs" className="border-y border-zinc-200 bg-white/70 px-6 py-8 backdrop-blur-sm">
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
              07-7325562
            </li>
            <li className="flex items-center gap-3">
              <MapPinIcon />
              高雄市鳥松區北平路51巷20-7號
            </li>
            <li className="flex items-center gap-3">
              <ClockIcon />
              週一至週五 09:00–18:00
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
