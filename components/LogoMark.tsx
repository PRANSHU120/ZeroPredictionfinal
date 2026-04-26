export default function LogoMark({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Zeroprediction logo">
      <rect x="4" y="4" width="88" height="88" rx="26" fill="#063D2E" />
      <circle cx="48" cy="48" r="29" stroke="#DDFBEA" strokeWidth="7" />
      <path d="M32 29h34L31 67h35" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
