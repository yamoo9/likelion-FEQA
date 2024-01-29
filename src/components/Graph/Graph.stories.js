import Graph from './Graph';

const metaConfig = {
  title: 'components/Graph',
  component: Graph,
  tags: ['autodocs'],
};

export default metaConfig;

// Storybook 도구 사용 방법
export const Base = {
  args: {
    start: 0,
    end: 5,
  },
};
Base.storyName = '1-5까지 그래프';

export const Second = {
  args: {
    start: 5,
    end: 20,
    step: 5,
  },
};
Second.storyName = '5-20(5씩 증가)까지 그래프';
