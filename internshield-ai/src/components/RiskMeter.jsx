function RiskMeter({ score }) {
  const radius = 60;
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const progress = circumference - (score / 100) * circumference;

  const color =
    score >= 70
      ? "#ef4444"
      : score >= 40
      ? "#f59e0b"
      : "#22c55e";

  return (
    <div className="flex flex-col items-center">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`}
        />

        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fontSize="22"
          fontWeight="bold"
          fill={color}
        >
          {score}
        </text>
      </svg>

      <p className="mt-2 text-gray-600 font-medium">Risk Score</p>
    </div>
  );
}

export default RiskMeter;