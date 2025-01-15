const LoadingSpinner = ({ size = 40, color = "var(--text-7)" }) => {
  return (
    <div className="flex h-full text-[var(--gray-blue)] light:text-[var(--gray-40)] items-center justify-center">
      <svg
        width={size}
        height={size}
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin"
      >
        {/* Create 8 petals */}
        {[...Array(8)].map((_, i) => (
          <g key={i} transform={`rotate(${i * 45} 25 25)`}>
            <ellipse
              cx="25"
              cy="10"
              rx="3"
              ry="8"
              fill={color}
              opacity={0.125 + i * 0.125}
              className="origin-center"
            ></ellipse>
          </g>
        ))}
        {/* Center circle */}
        <circle cx="25" cy="25" r="4" fill={color} />
      </svg>
    </div>
  );
};

export default LoadingSpinner;
