import Image from "next/image";
import logo from "../../public/logo-jf.png";

const NAV_LINKS = [
  { href: "#", label: "關於我們" },
  { href: "#products", label: "產品型錄" },
  { href: "#why", label: "品牌優勢" },
  { href: "#products", label: "工程實績" },
  { href: "#certs", label: "技術認證" },
  { href: "#contact", label: "聯絡我們" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-stone-50/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <Image src={logo} alt="喬福有限公司 Logo" className="h-9 w-auto" priority />
          <span className="flex items-baseline gap-2">
            <span className="font-serif text-xl tracking-widest text-zinc-900">喬福有限公司</span>
            <span className="hidden text-[11px] tracking-[0.2em] text-zinc-400 sm:inline">
              JOE FU CO., LTD.
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-zinc-600 lg:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-zinc-950">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-orange-600 px-5 py-2 text-sm font-medium text-white shadow-sm shadow-orange-600/30 transition-colors hover:bg-orange-500"
        >
          專案報價
        </a>
      </div>
    </header>
  );
}
