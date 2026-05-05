type Props = { size?: number; color?: string };

export default function LotusMark({ size = 28, color = '#f2a968' }: Props) {
  const layout = [
    { cx: 11, cy: 12, scale: 1.05, rot: -20 },
    { cx: 15, cy: 9.5, scale: 1.15, rot: -12 },
    { cx: 19, cy: 11, scale: 1.35, rot: -2 },
    { cx: 19.5, cy: 7.5, scale: 0.95, rot: -4 },
    { cx: 24, cy: 10, scale: 1.1, rot: 10 },
    { cx: 27, cy: 13.5, scale: 0.9, rot: 22 },
    { cx: 14, cy: 16, scale: 0.95, rot: -16 },
    { cx: 21, cy: 16, scale: 0.95, rot: 4 },
    { cx: 25, cy: 16.5, scale: 0.85, rot: 16 },
  ];

  const stemAngle = (-12 * Math.PI) / 180;
  const stemBase: [number, number] = [22, 26];
  const stemLength = 4;
  const stemTop: [number, number] = [
    stemBase[0] + Math.sin(stemAngle) * stemLength,
    stemBase[1] - Math.cos(stemAngle) * stemLength,
  ];
  const midX = (stemBase[0] + stemTop[0]) / 2 + Math.sin(stemAngle) * 0.3;
  const midY = (stemBase[1] + stemTop[1]) / 2;

  const petalPath = (cx: number, cy: number, scale: number) => {
    const w = 2.1 * scale;
    const h = 2.7 * scale;
    return `M ${cx - 0.6} ${cy - h * 0.95}
            Q ${cx} ${cy - h * 1.05} ${cx + 0.6} ${cy - h * 0.95}
            C ${cx + w} ${cy - h * 0.4}, ${cx + w * 0.95} ${cy + h * 0.7}, ${cx} ${cy + h}
            C ${cx - w * 0.95} ${cy + h * 0.7}, ${cx - w} ${cy - h * 0.4}, ${cx - 0.6} ${cy - h * 0.95} Z`;
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="7 4 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={`M${stemBase[0]} ${stemBase[1]} Q${midX} ${midY} ${stemTop[0]} ${stemTop[1]}`}
        stroke={color}
        strokeWidth="0.9"
        strokeLinecap="round"
        fill="none"
      />
      <g
        stroke={color}
        strokeWidth="0.6"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      >
        {layout.map((b, i) => {
          const mx = (stemTop[0] + b.cx) / 2;
          const my = (stemTop[1] + b.cy) / 2 - 1;
          return (
            <path
              key={i}
              d={`M${stemTop[0]} ${stemTop[1]} Q${mx} ${my} ${b.cx} ${b.cy}`}
            />
          );
        })}
      </g>
      {layout.map((b, i) => (
        <g key={i} transform={`rotate(${b.rot} ${b.cx} ${b.cy})`}>
          <path
            d={petalPath(b.cx, b.cy, b.scale)}
            fill={color}
            strokeLinejoin="round"
          />
        </g>
      ))}
    </svg>
  );
}
