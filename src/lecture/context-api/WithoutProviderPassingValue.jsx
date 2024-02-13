import { Component, createContext, useState } from 'react';

const INITIAL_THEME_CONTEXT_VALUE = {
  mode: 'dark',
  colorScheme: {
    red: {
      100: '#e7cece',
      200: '#cf9c9c',
      300: '#b86b6b',
      400: '#a03939',
      500: '#880808',
      600: '#6d0606',
      700: '#520505',
      800: '#360303',
      900: '#1b0202',
    },
  },
};

const ThemeContext = createContext();

function Exercise() {
  const [themeInfo, setThemeInfo] = useState(INITIAL_THEME_CONTEXT_VALUE);

  const themeValue = {
    themeInfo,
    updateThemeInfo(newThemeInfo) {
      setThemeInfo({
        ...themeInfo,
        ...newThemeInfo,
        colorScheme: {
          ...themeInfo.colorScheme,
          ...newThemeInfo.colorScheme,
        },
      });
    },
  };

  return (
    <ThemeContext.Provider value={themeValue}>
      <h2>컨텍스트 공급자 없이 초기 값을 공급하는 방법</h2>
      <Parent />
    </ThemeContext.Provider>
  );
}

class Parent extends Component {
  render() {
    return (
      <div>
        <h2>Parent</h2>
        <Child />
      </div>
    );
  }
}

class Child extends Component {
  render() {
    return (
      <div>
        <h2>Child</h2>
        <ThemeContext.Consumer>
          {({ updateThemeInfo }) => {
            return (
              <button
                type="button"
                onClick={() => {
                  updateThemeInfo({
                    mode: 'light',
                    colorScheme: {
                      green: {
                        100: '#cde6dc',
                        200: '#9bcdb9',
                        300: '#68b596',
                        400: '#369c73',
                        500: '#048350',
                        600: '#036940',
                        700: '#024f30',
                        800: '#023420',
                        900: '#011a10',
                      },
                    },
                  });
                }}
              >
                테마 변경
              </button>
            );
          }}
        </ThemeContext.Consumer>
        <GrandChild />
      </div>
    );
  }
}

class GrandChild extends Component {
  render() {
    return (
      <div>
        <h2>Grand Child</h2>
        {/* render props 패턴 */}
        <ThemeContext.Consumer>
          {(themeVaue) => {
            console.log(themeVaue /* themeInfo */);
            return (
              <p>
                테마 모드는?{' '}
                {themeVaue.themeInfo.mode.includes('dark') ? '다크' : '라이트'}
                모드
              </p>
            );
          }}
        </ThemeContext.Consumer>
      </div>
    );
  }
}

export default Exercise;
