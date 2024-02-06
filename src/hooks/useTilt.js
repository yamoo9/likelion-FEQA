import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

function useTilt({ onTilt = null, options = {} } = {}) {
  const tiltBoxRef = useRef(null);

  useEffect(() => {
    const { current: element } = tiltBoxRef;

    if (element) {
      // 플러그인 연결
      VanillaTilt.init(element, {
        ...DEFAULT_OPTIONS,
        ...options,
      });

      // 틸트 이벤트 연결
      if (onTilt) {
        element.addEventListener('tiltChange', onTilt);
      }
    }

    return () => {
      element?.vanillaTilt.destroy();
    };
  }, [options, onTilt]);

  return tiltBoxRef;
}

export default useTilt;

const DEFAULT_OPTIONS = {
  reverse: false, // 기울이는 방향을 반대로 바꿔라
  max: 35, // 최대 기울기 회전(도)
  startX: 0, // X축의 시작 기울기(도)입니다.
  startY: 0, // Y축의 시작 기울기(도)입니다.
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 300, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be enabled. Can be "x" or "y"
  reset: true, // If the tilt effect has to be reset on exit.
  'reset-to-start': true, // Whether the exit reset will go to [0,0] (default) or [startX, startY]
  easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
  glare: false, // if it should have a "glare" effect
  'max-glare': 1, // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
  'glare-prerender': false, // false = VanillaTilt creates the glare elements for you, otherwise
  // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
  'mouse-event-element': null, // css-selector or link to HTML-element what will be listen mouse events
  gyroscope: true, // Boolean to enable/disable device orientation detection,
  gyroscopeMinAngleX: -45, // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
  gyroscopeMaxAngleX: 45, // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
  gyroscopeMinAngleY: -45, // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
  gyroscopeMaxAngleY: 45, // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;
};
