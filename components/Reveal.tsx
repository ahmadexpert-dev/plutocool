/**
 * Fades and lifts its children in as they scroll into view.
 * Pure CSS (see `.reveal` in globals.css): content is always visible when the
 * browser lacks scroll-driven animations or the user prefers reduced motion.
 */
export default function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}
