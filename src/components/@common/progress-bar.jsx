import { Image } from '@nextui-org/react';

export const CircularProgressBar = ({ strokeWidth = 8, sqSize = 160, percentage, color, src, sizeImg }) => {
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * (percentage || 0)) / 100;

  return (
    <div className="relative">
      <svg width={sqSize} height={sqSize} viewBox={viewBox}>
        <circle
          className="fill-none stroke-gray-200"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />
        <circle
          className={`fill-none transition-all ease-in delay-200 ${color}`}
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeLinecap="round"
          strokeWidth={`${strokeWidth}px`}
          transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        />
      </svg>
      <div className="absolute left-0 bottom-0 right-0 w-full h-full flex justify-center items-end">
        <Image
          src={src}
          alt=""
          width={sizeImg ?? 50}
          isBlurred
          className="translate-y-7 h-[50px] object-cover object-center"
        />
      </div>

      <h1 className="absolute top-0 left-0 right-0 bottom-0 text-center flex justify-center items-center text-2xl source-code-pro">
        {percentage}%
      </h1>
    </div>
  );
};
