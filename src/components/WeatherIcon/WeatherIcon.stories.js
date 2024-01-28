import WeatherIcon from './WeatherIcon';

const storyMeta = {
  title: 'components/WeatherIcon',
  component: WeatherIcon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '날씨 아이콘',
      },
    },
    backgrounds: {
      default: 'warmgray',
      values: [
        {
          name: 'warmgray',
          value: '#f6f5f4',
        },
        {
          name: 'white',
          value: '#fff',
        },
      ],
    },
  },
  argTypes: {
    type: {
      description: '날씨 아이콘 모양',
      control: 'radio',
      options: ['fine-dust', 'lightning', 'partly-cloudy', 'rainy', 'sunny'],
    },
  },
};

export default storyMeta;

export const Sunny = {
  args: {
    type: 'sunny',
  },
};
Sunny.storyName = '맑음';

export const PartlyCloudy = {
  args: {
    type: 'partly-cloudy',
  },
};
PartlyCloudy.storyName = '맑고 구름 조금';

export const Rainy = {
  args: {
    type: 'rainy',
  },
};
Rainy.storyName = '비';

export const Lightning = {
  args: {
    type: 'lightning',
  },
};
Lightning.storyName = '천둥';

export const FineDust = {
  args: {
    type: 'fine-dust',
  },
};
FineDust.storyName = '미세먼지';
