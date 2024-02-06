import { range } from '@/utils';
import { Tilt } from 'react-tilt';

const BOX_OPTIONS = {
  reverse: true,
  glare: true,
  'max-glare': 0.7,
  scale: 0.94,
};

function Exercise() {
  return (
    <>
      <div className="flex gap-2 mb-10">
        {range(40, 90, 7).map((n) => (
          <Tilt
            key={n}
            className="bg-black"
            style={{ height: 250, width: 250 }}
            options={BOX_OPTIONS}
            onMouseEnter={(e) => {
              console.log(e);
            }}
          >
            <span>👽 alien</span>
          </Tilt>
        ))}
      </div>
    </>
  );
}

export default Exercise;
