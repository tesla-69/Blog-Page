'use client';

export default function PlaceholderImage() {
  return (
    <svg
      className="w-full h-full text-gray-200"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <rect
        width="100"
        height="100"
        fill="currentColor"
      />
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#6B7280"
        fontSize="14"
      >
        Blog Image
      </text>
    </svg>
  );
} 