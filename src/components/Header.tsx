import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/solutions", label: "Solutions" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function navLinkClasses(isActive: boolean) {
  return isActive
    ? "border-b-2 border-primary-fixed font-bold text-primary-fixed"
    : "text-on-surface-variant transition-colors duration-200 hover:text-primary-container";
}

export function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-outline-variant bg-surface/80 backdrop-blur-md">
        <div className="container-max mx-auto flex h-16 items-center justify-between px-gutter">
          <NavLink to="/" className="flex items-center gap-2" onClick={() => setDrawerOpen(false)}>
            <Logo />
          </NavLink>
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) => navLinkClasses(isActive)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <NavLink
              to="/contact"
              className="hidden rounded-md bg-primary-container px-4 py-2 text-body-sm font-bold text-on-primary transition-opacity hover:opacity-90 md:inline-block"
            >
              Talk to Us
            </NavLink>
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={drawerOpen}
              className="material-symbols-outlined text-on-surface-variant md:hidden"
              onClick={() => setDrawerOpen((open) => !open)}
            >
              {drawerOpen ? "close" : "menu"}
            </button>
          </div>
        </div>
      </header>

      {/* Rendered outside <header> deliberately: the header's backdrop-blur
          establishes a containing block for fixed descendants, which would
          shrink this drawer's `fixed inset-0` down to the header's own box. */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <button
            type="button"
            aria-label="Close navigation menu"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
          />
          <aside className="fixed inset-y-0 left-0 flex w-80 max-w-[85vw] flex-col bg-surface-container p-4 shadow-xl">
            <div className="mb-8 flex items-center justify-between px-4 pt-2">
              <Logo />
              <button
                type="button"
                aria-label="Close navigation menu"
                className="material-symbols-outlined text-on-surface-variant"
                onClick={() => setDrawerOpen(false)}
              >
                close
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setDrawerOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-4 rounded-full px-4 py-3 text-body-md transition-transform active:scale-95 ${
                      isActive
                        ? "bg-secondary-container text-on-secondary-container"
                        : "text-on-surface-variant hover:bg-surface-variant"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
