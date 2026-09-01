import Image from "next/image";
import logo from "../../public/logo-jf.png";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-zinc-950 px-6 py-10 text-zinc-500 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm md:flex-row">
        <span className="flex items-center gap-2">
          <Image src={logo} alt="喬福門業 Logo" className="h-7 w-auto" />
          <span className="font-serif tracking-widest text-zinc-300">喬福門業 JOE FU DOORS</span>
        </span>
        <span>© {new Date().getFullYear()} Joe Fu Doors. All rights reserved.</span>
      </div>
    </footer>
  );
}
