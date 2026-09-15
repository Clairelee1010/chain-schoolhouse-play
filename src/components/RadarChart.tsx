type Props = { labels: string[]; values: number[] };

export function RadarChart({ labels, values }: Props) {
  const size = 280;
  const c = size / 2;
  const r = 96;
  const n = labels.length;

  const point = (i: number, ratio: number) => {
    const a = (Math.PI * 2 * i) / n - Math.PI / 2;
    return [c + Math.cos(a) * r * ratio, c + Math.sin(a) * r * ratio] as const;
  };

  const rings = [0.25, 0.5, 0.75, 1];
  const poly = (ratio: number) =>
    Array.from({ length: n }, (_, i) => point(i, ratio).join(",")).join(" ");
  const dataPoly = values.map((v, i) => point(i, Math.max(v, 0.08)).join(",")).join(" ");

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="mx-auto h-auto w-full max-w-[300px]">
      <defs>
        <linearGradient id="radarFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--chart-1)" stopOpacity="0.75" />
          <stop offset="100%" stopColor="var(--chart-2)" stopOpacity="0.65" />
        </linearGradient>
      </defs>
      {rings.map((ratio) => (
        <polygon
          key={ratio}
          points={poly(ratio)}
          fill="none"
          stroke="var(--border)"
          strokeWidth="1"
        />
      ))}
      {labels.map((_, i) => {
        const [x, y] = point(i, 1);
        return <line key={i} x1={c} y1={c} x2={x} y2={y} stroke="var(--border)" strokeWidth="1" />;
      })}
      <polygon
        points={dataPoly}
        fill="url(#radarFill)"
        stroke="var(--chart-2)"
        strokeWidth="2"
        className="animate-rise"
      />
      {values.map((v, i) => {
        const [x, y] = point(i, Math.max(v, 0.08));
        return <circle key={i} cx={x} cy={y} r="3.5" fill="var(--chart-2)" />;
      })}
      {labels.map((label, i) => {
        const [x, y] = point(i, 1.26);
        return (
          <text
            key={label}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-muted-foreground text-[10px]"
            style={{ fontSize: 10 }}
          >
            {label}
          </text>
        );
      })}
    </svg>
  );
}
