const NAV_LINKS = [
  { href: "#products", label: "產品系列" },
  { href: "#why", label: "品牌優勢" },
  { href: "#process", label: "施工流程" },
  { href: "#contact", label: "聯絡我們" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-stone-50/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-baseline gap-2">
          <span className="font-serif text-xl tracking-widest text-zinc-900">喬福門業</span>
          <span className="hidden text-[11px] tracking-[0.2em] text-zinc-400 sm:inline">
            JOE FU DOORS
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-zinc-600 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-zinc-950">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-stone-50 transition-colors hover:bg-amber-600"
        >
          免費丈量報價
        </a>
      </div>
    </header>
  );
}
