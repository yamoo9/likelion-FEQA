import Button from './Button';

const storyMeta = {
  title: 'components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '버튼 (로딩 상태 표시)',
      },
    },
  },
  args: {
    loading: false,
    children: '공유',
  },
};

export default storyMeta;

export const Default = {};
Default.storyName = '일반 상태';

export const Loading = {
  args: {
    loading: true,
  },
};
Loading.storyName = '로딩 상태';
