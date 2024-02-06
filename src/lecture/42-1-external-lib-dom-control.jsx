import { useTilt } from '@/hooks';
import { range } from '@/utils';

const BOX_OPTIONS = {
  reverse: true,
  glare: true,
  'max-glare': 0.7,
  scale: 0.94,
};

function Exercise() {
  return (
    <>
      <div className="flex gap-2">
        {range(10, 160, 2).map((n) => (
          <TiltBox key={n} options={BOX_OPTIONS}>
            {n}
          </TiltBox>
        ))}
      </div>
    </>
  );
}

export function TiltBox({
  children,
  onTilt = null,
  options = {},
  ...restProps
}) {
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
