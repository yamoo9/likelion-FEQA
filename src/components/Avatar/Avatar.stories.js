import Avatar from './Avatar';
import { getStaticImage } from '../../utils/getStaticAsset';

const storyMeta = {
  title: 'components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  // https://storybook.js.org/docs/api/doc-block-description
  parameters: {
    docs: {
      description: {
        component: '사용자 프로필 이미지 (온/오프라인 상태 표시)',
      },
    },
  },
  args: {
    photo: getStaticImage('faces/woman-02.jpg'),
    name: '이소영',
    isOnline: false,
  },
  argTypes: {
    photo: {
      description: '아바타 포토 URL',
      control: 'select',
      options: [
        getStaticImage('faces/man-01.jpg'),
        getStaticImage('faces/man-02.jpg'),
        getStaticImage('faces/man-03.jpg'),
        getStaticImage('faces/man-04.jpg'),
        getStaticImage('faces/woman-01.jpg'),
        getStaticImage('faces/woman-02.jpg'),
        getStaticImage('faces/woman-03.jpg'),
        getStaticImage('faces/woman-04.jpg'),
      ],
    },
    name: {
      description: '사용자 이름/닉네임',
      type: 'string',
    },
    isOnline: {
      description: '온라인 접속 여부',
    },
  },
};

export default storyMeta;

export const Offline = {};
Offline.storyName = '오프라인 상태';

export const Online = {
  args: {
    isOnline: true,
  },
};
Online.storyName = '온라인 상태';
