type LogoProps = {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
};

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={5}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M50 20 L50 6" />
      <path d="M22.3 68 L10 84" />
      <path d="M77.7 68 L90 84" />
      <polygon points="50,20 77.7,36 77.7,68 50,84 22.3,68 22.3,36" />
      <circle cx="50" cy="52" r="7" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Logo({ className = "", markClassName = "h-8 w-8", wordmarkClassName = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 text-primary-fixed-dim ${className}`}>
      <LogoMark className={markClassName} />
      <span className={`font-headline text-headline-lg font-bold tracking-tight text-on-surface ${wordmarkClassName}`}>
        Mitzora
      </span>
    </span>
  );
}
