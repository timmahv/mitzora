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
  return (
    <header className="fixed top-0 z-50 w-full border-b border-outline-variant bg-surface/80 backdrop-blur-md">
      <div className="container-max mx-auto flex h-16 items-center justify-between px-gutter">
        <NavLink to="/" className="flex items-center gap-2">
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
        <NavLink
          to="/contact"
          className="rounded-md bg-primary-container px-4 py-2 text-body-sm font-bold text-on-primary transition-opacity hover:opacity-90"
        >
          Talk to Us
        </NavLink>
      </div>
    </header>
  );
}
