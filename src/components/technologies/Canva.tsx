export default function Canva() {
  return (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="canvaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C4CC" />
          <stop offset="100%" stopColor="#7B2FF7" />
        </linearGradient>
      </defs>

      <circle cx="64" cy="64" r="64" fill="url(#canvaGradient)" />

      <path
        fill="#FFFFFF"
        d="M83 40c-6-6-15-9-25-9-18 0-31 13-31 33s13 33 31 33c10 0 19-3 25-9l-7-7c-4 4-10 6-17 6-12 0-21-9-21-23s9-23 21-23c7 0 13 2 17 6l7-7z"
      />
    </svg>
  );
}
