// Subtle SVG lab decor — beakers, atoms, cocoa beans
export function LabDecor({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <svg className="absolute top-10 left-6 w-16 h-16 text-primary/15 animate-float-slow" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M26 8v14L14 48a4 4 0 003.6 6h28.8a4 4 0 003.6-6L38 22V8" />
        <path d="M22 8h20" />
        <circle cx="28" cy="42" r="1.5" fill="currentColor" />
        <circle cx="36" cy="38" r="1" fill="currentColor" />
      </svg>
      <svg className="absolute top-1/3 right-10 w-20 h-20 text-[var(--gold)]/25 animate-float-slow" style={{ animationDelay: "2s" }} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="32" cy="32" rx="28" ry="10" />
        <ellipse cx="32" cy="32" rx="28" ry="10" transform="rotate(60 32 32)" />
        <ellipse cx="32" cy="32" rx="28" ry="10" transform="rotate(-60 32 32)" />
        <circle cx="32" cy="32" r="3" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-20 left-1/4 w-12 h-12 text-[var(--cocoa)]/20 animate-float-slow" style={{ animationDelay: "4s" }} viewBox="0 0 64 64" fill="currentColor">
        <ellipse cx="32" cy="32" rx="14" ry="22" />
        <path d="M32 12 Q34 32 32 52" stroke="white" strokeWidth="1.5" fill="none" opacity="0.4" />
      </svg>
      <svg className="absolute bottom-1/3 right-1/4 w-14 h-14 text-primary/10 animate-float-slow" style={{ animationDelay: "1s" }} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 8v10L12 40a4 4 0 003.6 6h32.8a4 4 0 003.6-6L42 18V8" />
      </svg>
    </div>
  );
}
