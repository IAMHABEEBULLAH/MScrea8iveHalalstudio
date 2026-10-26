// Concentric rings: a quiet echo of the circle in the logo.
export default function Rings({ color = "#FFFFFF", className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 400"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {[180, 130, 80].map((r) => (
        <circle
          key={r}
          cx="200"
          cy="200"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="3"
        />
      ))}
    </svg>
  );
}
