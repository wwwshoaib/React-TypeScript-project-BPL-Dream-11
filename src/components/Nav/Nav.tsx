import { useState } from "react";
import logo from "../../assets/logo.png";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Fixture", href: "/fixture" },
  { label: "Teams", href: "/teams" },
  { label: "Schedules", href: "/schedules" },
];

export default function Nav({coin}: {coin: number}) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-white">
      <nav className="relative mx-auto flex h-24 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <a href="/" aria-label="Cricket home">
          <img
            src= {logo}
            alt="Cricket logo"
            className="h-20 w-auto object-contain"
          />
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-[17px] font-medium text-slate-950 transition-colors hover:text-orange-500"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Balance */}
          <button
            type="button"
            className="flex h-[70px] min-w-[94px] items-center justify-center gap-3 rounded-2xl bg-slate-50 px-4 text-2xl text-slate-900 shadow-sm ring-1 ring-black/5"
          >
            <span className="flex size-8 items-center justify-center rounded-full bg-orange-400 text-xl font-bold">
              $
            </span>
            <span>{coin} million</span>
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="rounded-lg p-2 text-slate-900 hover:bg-slate-100 md:hidden"
          >
            {menuOpen ? (
              <svg
                className="size-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg
                className="size-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <ul className="absolute left-5 right-5 top-24 z-50 rounded-xl bg-white p-4 shadow-lg ring-1 ring-black/5 md:hidden">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 font-medium text-slate-900 hover:bg-orange-50 hover:text-orange-500"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}