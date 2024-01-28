import { userEvent, within } from '@storybook/testing-library';
import delay from '../../utils/delay';
import SearchBar from './SearchBar';

const storyMeta = {
  title: 'components/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '사용자가 검색어를 입력하는 검색창',
      },
    },
  },
  argTypes: {},
};

export default storyMeta;

export const Default = {};
Default.storyName = '검색어 입력 전';

export const Inputed = {
  // https://storybook.js.org/docs/writing-tests/interaction-testing
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const searchInput = canvas.getByPlaceholderText('검색어를 입력해주세요.');

    await userEvent.type(searchInput, '아토믹 디자인', {
      delay: 100,
    });

    await delay(500);

    await userEvent.clear(searchInput);

    await userEvent.type(searchInput, '컴포넌트 주도 설계', {
      delay: 100,
    });

    await delay(500);

    await userEvent.clear(searchInput);

    await userEvent.type(searchInput, '최강 8기, 화이팅! 😃', {
      delay: 100,
    });
  },
};
Inputed.storyName = '검색어 입력';
