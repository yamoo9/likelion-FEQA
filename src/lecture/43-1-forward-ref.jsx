import { range } from '@/utils';
import { useEffect, useRef, forwardRef } from 'react';

const BOX_OPTIONS = {
  reverse: true,
  glare: true,
  'max-glare': 0.7,
  scale: 0.94,
};

function Exercise() {
  const cardRef = useRef(null);

  useEffect(() => {
    console.log(cardRef.current);
  }, []);

  return (
    <>
      <TiltBox ref={cardRef} options={BOX_OPTIONS}>
        ref 전달하기
      </TiltBox>
    </>
  );
}

const TiltBox = forwardRef(function TiltBox(
  /* props */
  { children, ...restProps },
  /* ref */
  ref
) {
  return (
    <div
      ref={ref}
      className="flex justify-center items-center w-[200px] h-[200px] bg-gray-900 text-gray-50 rounded-lg"
      {...restProps}
    >
      {children}
    </div>
  );
});

export default Exercise;
