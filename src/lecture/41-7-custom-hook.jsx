import { Stack } from '@/components';
import { useInOnScreen } from '@/hooks';

const colorBoxes = ['black', 'indigo', 'orange', 'emerald'];

function Exercise() {
  return (
    <section className="w-full my-5">
      {/* <header className="fixed bottom-0 left-0 w-full bg-white/70 text-indigo-900 backdrop-blur-sm p-5">
        <p>
          INTERSECTION →{' '}
          <b className="font-extrabold">{isOnScreen ? 'IN' : 'OUT'}</b>
        </p>
      </header> */}
      <h2 className="my-5">
        Intersection Observer{' '}
        <abbr title="Application Programming Interface">API</abbr>
      </h2>

      <Stack vertical gap={16}>
        {colorBoxes.map((color) => {
          return (
            <Box key={color} color={color}>
              {color.toUpperCase()}
            </Box>
          );
        })}
      </Stack>
    </section>
  );
}

function Box({ color, children }) {
  const [inOnScreen, elementRef] = useInOnScreen();

  console.log(`${color} 박스 상태: ${inOnScreen ? 'in' : 'out'}`.toUpperCase());

  let bgColor = '';

  switch (color) {
    case 'orange':
      bgColor = 'bg-orange-800';
      break;
    case 'emerald':
      bgColor = 'bg-emerald-800';
      break;
    case 'indigo':
      bgColor = 'bg-indigo-800';
      break;
    default:
      bgColor = 'bg-black';
  }

  return (
    <article
      ref={elementRef}
      className={`h-[90vh] w-[100%] p-5 ${bgColor} text-white rounded-lg`}
    >
      <h3 className="uppercase text-2xl">{children}</h3>
    </article>
  );
}

export default Exercise;
