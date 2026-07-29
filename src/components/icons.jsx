/*
  Inline SVG icons (Lucide-style geometry).
  Checklist item: never use emoji as icons.
*/

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function ArrowUpRight({ size = 16, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export function Check({ size = 16, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function Copy({ size = 16, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

export function MapPin({ size = 16, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function Mail({ size = 16, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function Phone({ size = 16, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export function GraduationCap({ size = 16, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" />
    </svg>
  );
}

export function Award({ size = 16, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.48 13.37 17 22l-5-3-5 3 1.52-8.63" />
    </svg>
  );
}

export function Menu({ size = 20, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function X({ size = 20, className }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
