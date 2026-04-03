import { COLORS } from "../constants";

export default function GradCap() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      {/* Cap board (diamond shape) */}
      <polygon
        points="20,5 38,14 20,23 2,14"
        fill={COLORS.gold}
      />
      {/* Cap body underneath */}
      <path
        d="M10,17 L10,27 Q20,33 30,27 L30,17 L20,23 Z"
        fill={COLORS.goldLight}
        opacity="0.9"
      />
      {/* Tassel string */}
      <line x1="36" y1="14" x2="36" y2="26" stroke={COLORS.gold} strokeWidth="1.5" strokeLinecap="round" />
      {/* Tassel ball */}
      <circle cx="36" cy="27" r="2" fill={COLORS.gold} />
    </svg>
  );
}