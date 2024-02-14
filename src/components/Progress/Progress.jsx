import { number, string, oneOf, oneOfType, object } from 'prop-types';

export default function Progress({
  size = 100,
  borderColor = '#c4d4df',
  borderWidth = 1.2,
  fillColor = '#d9e7ee',
  style,
  ...restProps
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ margin: 'auto', display: 'block', ...style }}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      aria-hidden={true}
      {...restProps}
    >
      <defs>
        <clipPath
          id="progress-yqxidgiw44o-cp"
          x={0}
          y={0}
          width={100}
          height={100}
        >
          <rect x={0} y={0} width={0} height={100}>
            <animate
              attributeName="width"
              repeatCount="indefinite"
              dur="1.282051282051282s"
              values="0;100;100"
              keyTimes="0;0.5;1"
            />
            <animate
              attributeName="x"
              repeatCount="indefinite"
              dur="1.282051282051282s"
              values="0;0;100"
              keyTimes="0;0.5;1"
            />
          </rect>
        </clipPath>
      </defs>
      <path
        fill="none"
        stroke={borderColor}
        strokeWidth={borderWidth}
        d="M22.5 41.085L77.5 41.085A8.915 8.915 0 0 1 86.41499999999999 50L86.41499999999999 50A8.915 8.915 0 0 1 77.5 58.915L22.5 58.915A8.915 8.915 0 0 1 13.585 50L13.585 50A8.915 8.915 0 0 1 22.5 41.085 Z"
      />
      <path
        fill={fillColor}
        clipPath="url(#progress-yqxidgiw44o-cp)"
        d="M22.5 43.47L77.49999999999999 43.47A6.529999999999999 6.529999999999999 0 0 1 84.02999999999999 50L84.02999999999999 50A6.529999999999999 6.529999999999999 0 0 1 77.49999999999999 56.53L22.5 56.53A6.529999999999999 6.529999999999999 0 0 1 15.97 50L15.97 50A6.529999999999999 6.529999999999999 0 0 1 22.5 43.47 Z"
      />
    </svg>
  );
}

Progress.propTypes = {
  size: number,
  borderColor: string,
  borderWidth: number,
  fillColor: string,
  style: oneOfType([oneOf([null]), object]),
};
