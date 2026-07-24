import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col selection:bg-primary-container selection:text-on-primary-container">
      <Header />
      <main className="flex-1 pt-24 pb-12">{children}</main>
      <Footer />
    </div>
  );
}
