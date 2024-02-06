import { useTilt } from '@/hooks';

const BOX_COUNT = 9;
const BOX_OPTIONS = {
  reverse: true,
  glare: true,
  'max-glare': 0.7,
};

function Exercise() {
  return (
    <div className="flex gap-2">
      {Array(BOX_COUNT)
        .fill(null)
        .map((_, i) => (
          <TiltBox key={i} options={BOX_OPTIONS}>
            {i + 1}
          </TiltBox>
        ))}
    </div>
  );
}

function TiltBox({ children, onTilt = null, options = {}, ...restProps }) {
  const boxRef = useTilt({
    onTilt,
    options,
  });

  return (
    <div
      ref={boxRef}
      className="flex justify-center items-center w-[200px] h-[200px] bg-gray-900 text-gray-50 rounded-lg"
      {...restProps}
    >
      {children}
    </div>
  );
}

export default Exercise;
