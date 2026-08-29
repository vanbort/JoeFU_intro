const STATS = [
  { value: "18", suffix: "年", label: "門業製造經驗" },
  { value: "3,200", suffix: "+", label: "完工案例" },
  { value: "CNS", suffix: "", label: "防火時效認證" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-20 lg:px-8 lg:pt-28">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 top-10 select-none font-serif text-[16rem] leading-none text-zinc-900/[0.03]"
      >
        門
      </span>

      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative">
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

        <div className="mx-auto flex justify-center gap-6">
          <DoorGraphic variant="entrance" label="玄關門" />
          <DoorGraphic variant="fire" label="防火門" />
        </div>
      </div>
    </section>
  );
}

function DoorGraphic({ variant, label }: { variant: "entrance" | "fire"; label: string }) {
  const isFire = variant === "fire";
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className={`relative h-[300px] w-[150px] overflow-hidden rounded-t-[80px] border shadow-xl sm:h-[360px] sm:w-[180px] ${
          isFire
            ? "border-zinc-700 bg-gradient-to-b from-zinc-700 to-zinc-800"
            : "border-zinc-800 bg-gradient-to-b from-zinc-800 to-zinc-950"
        }`}
      >
        {isFire ? (
          <div className="absolute inset-3 grid grid-cols-4 gap-2 sm:grid-cols-5">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className="h-1 w-1 rounded-full bg-white/10" />
            ))}
          </div>
        ) : (
          <>
            <span className="absolute left-1/2 top-8 h-[75%] w-px -translate-x-1/2 bg-white/10 sm:top-10" />
            <span className="absolute inset-x-6 top-10 h-24 rounded-sm bg-white/[0.06] sm:top-14 sm:h-32" />
          </>
        )}
        <span
          className={`absolute right-4 top-1/2 h-8 w-1.5 -translate-y-1/2 rounded-full ${
            isFire ? "bg-red-500/70" : "bg-amber-500"
          }`}
        />
        {isFire && (
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-sm bg-red-500/90 px-2 py-0.5 text-[9px] font-medium tracking-wide text-white">
            FIRE DOOR 60min
          </span>
        )}
      </div>
      <span className="text-xs tracking-[0.2em] text-zinc-500">{label}</span>
    </div>
  );
}
