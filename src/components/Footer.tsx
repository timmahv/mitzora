import { Link } from "react-router-dom";
import { LogoMark } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-12 w-full border-t border-outline-variant bg-surface-container-lowest">
      <div className="container-max mx-auto flex flex-col items-center justify-between gap-4 px-gutter py-8 md:flex-row">
        <div className="flex items-center gap-2">
          <LogoMark className="h-5 w-5 text-primary-fixed" />
          <span className="font-mono text-label-md text-primary-fixed">Mitzora</span>
          <span className="text-body-sm text-on-surface-variant">
            © {new Date().getFullYear()} Mitzora. All rights reserved.
          </span>
        </div>
        <nav className="flex gap-6">
          <Link className="text-body-sm text-on-surface-variant underline hover:text-on-surface" to="/about">
            About
          </Link>
          <Link className="text-body-sm text-on-surface-variant underline hover:text-on-surface" to="/solutions">
            Solutions
          </Link>
          <Link className="text-body-sm text-on-surface-variant underline hover:text-on-surface" to="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
