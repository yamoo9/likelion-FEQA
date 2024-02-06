import { range } from '@/utils';
import { useEffect, useRef } from 'react';
import { TiltBox } from './42-1-external-lib-dom-control';

const BOX_OPTIONS = {
  reverse: true,
  glare: true,
  'max-glare': 0.7,
  scale: 0.94,
};

function Exercise() {
  const cardRef = useRef(null);

  useEffect(() => {
    console.log(cardRef.current /* Tilt { element } */);
  }, []);

  return (
    <>
      <div className="flex gap-2 mb-10">
        {range(10, 100, 10).map((n) => (
          <TiltBox key={n} options={BOX_OPTIONS}>
            {n}
          </TiltBox>
        ))}
      </div>
    </>
  );
}

export default Exercise;
