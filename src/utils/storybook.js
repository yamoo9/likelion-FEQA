export const setRangeControl = ({ min = 0, max = 10, step = 1 } = {}) => ({
  control: {
    type: 'range',
    min,
    max,
    step,
  },
});
