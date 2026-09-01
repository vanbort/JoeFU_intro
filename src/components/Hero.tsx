import Image from "next/image";
import heroPhoto from "../../public/photos/door-entrance-01.jpg";

const STATS = [
  { value: "18", suffix: "年", label: "門業製造經驗" },
  { value: "3,200", suffix: "+", label: "完工案例" },
  { value: "CNS", suffix: "", label: "防火時效認證" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-20 lg:px-8 lg:pt-28">
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div className="max-w-xl">
          <p className="mb-6 flex items-center gap-3 text-xs tracking-[0.3em] text-amber-700">
            <span className="h-px w-8 bg-amber-600" />
            玄關門・防火門 專業訂製
          </p>
          <h1 className="font-serif text-4xl leading-tight text-zinc-950 sm:text-5xl lg:text-6xl">
            為每一道門，
            <br />
            賦予恰如其分的重量。
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-8 text-zinc-600">
            喬福門業專精住宅玄關門與法規防火門，從現場丈量、圖面確認到工廠生產、到府安裝，
            由同一組團隊全程跟案，兼顧外觀質感與消防合規。
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-zinc-900 px-7 py-3 text-sm font-medium text-stone-50 transition-colors hover:bg-amber-600"
            >
              預約到府丈量
            </a>
            <a
              href="#products"
              className="rounded-full border border-zinc-300 px-7 py-3 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-900"
            >
              查看產品系列
            </a>
          </div>

          <dl className="mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-zinc-200 pt-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="font-serif text-2xl text-zinc-950">
                  {stat.value}
                  <span className="text-base text-amber-700">{stat.suffix}</span>
                </dt>
                <dd className="mt-1 text-xs leading-5 text-zinc-500">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-zinc-900/25 sm:max-w-xl lg:max-w-none">
          <Image
            src={heroPhoto}
            alt="喬福門業實際完工案例：胡桃木玄關門"
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 92vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
