export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-zinc-950 px-6 py-10 text-zinc-500 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm md:flex-row">
        <span className="font-serif tracking-widest text-zinc-300">喬福門業 JOE FU DOORS</span>
        <span>© {new Date().getFullYear()} Joe Fu Doors. All rights reserved.</span>
      </div>
    </footer>
  );
}
