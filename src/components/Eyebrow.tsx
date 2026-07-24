export function Eyebrow({ children }: { children: string }) {
  return (
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-outline-variant bg-secondary-container/30 px-3 py-1">
      <span className="h-2 w-2 rounded-full bg-primary-container" />
      <span className="font-mono text-label-md uppercase tracking-widest text-primary-fixed">{children}</span>
    </div>
  );
}
