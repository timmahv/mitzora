import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <section className="container-max mx-auto flex flex-col items-center px-gutter py-24 text-center">
      <span className="font-mono text-label-md uppercase tracking-widest text-primary-fixed">404</span>
      <h1 className="mt-4 font-headline text-headline-lg font-semibold text-on-surface">Page not found</h1>
      <p className="mt-4 max-w-md text-body-md text-on-surface-variant">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-lg bg-primary-container px-8 py-3 font-bold text-on-primary transition-opacity hover:opacity-90"
      >
        Back to Home
      </Link>
    </section>
  );
}
