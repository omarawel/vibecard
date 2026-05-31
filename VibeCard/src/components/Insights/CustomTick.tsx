const CustomTick = (props: any) => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={6}
        textAnchor="middle"
        fill="#4B5563" // Change this color as needed
        className="text-xs tracking-wide" // Tailwind classes for additional styling
      >
        {payload.value.slice(0, 3)}
      </text>
    </g>
  );
};

export default CustomTick;
