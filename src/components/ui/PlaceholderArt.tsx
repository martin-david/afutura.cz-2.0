const VARIANTS: Record<number, { bg: string; line: string }> = {
  1: { bg: "#ede7d8", line: "#b8502e" },
  2: { bg: "#e4e0d3", line: "#4a473e" },
  3: { bg: "#efeae0", line: "#8c887c" },
  4: { bg: "#e6dcc9", line: "#93401f" },
  5: { bg: "#eae6dc", line: "#15140f" },
  6: { bg: "#f0ebdf", line: "#b8502e" },
};

/**
 * Abstract blueprint-style placeholder used in place of real project and
 * portrait photography, which will be supplied in a later iteration.
 */
export default function PlaceholderArt({
  variant = 1,
  label,
  className = "",
}: {
  variant?: number;
  label?: string;
  className?: string;
}) {
  const theme = VARIANTS[((variant - 1) % 6) + 1];
  const seed = variant * 37;
  const patternId = `grid-${variant}`;

  return (
    <div
      className={`relative isolate overflow-hidden ${className}`}
      style={{ backgroundColor: theme.bg }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 400 300"
        aria-hidden="true"
      >
        <defs>
          <pattern id={patternId} width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke={theme.line}
              strokeOpacity="0.12"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="400" height="300" fill={`url(#${patternId})`} />
        <polyline
          points={`0,${260 - (seed % 60)} 90,${180 - (seed % 40)} 180,${220 - (seed % 70)} 260,${120 - (seed % 50)} 400,${170 - (seed % 30)}`}
          fill="none"
          stroke={theme.line}
          strokeWidth="1.5"
          strokeOpacity="0.55"
        />
        <circle
          cx={70 + (seed % 200)}
          cy={90 + (seed % 80)}
          r="34"
          fill="none"
          stroke={theme.line}
          strokeOpacity="0.35"
        />
        <line x1="0" y1="0" x2="400" y2="300" stroke={theme.line} strokeOpacity="0.08" />
        <line x1="400" y1="0" x2="0" y2="300" stroke={theme.line} strokeOpacity="0.08" />
      </svg>
      {label && (
        <span className="absolute bottom-3 left-3 rounded-full bg-paper/85 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-ink-soft">
          {label}
        </span>
      )}
    </div>
  );
}
