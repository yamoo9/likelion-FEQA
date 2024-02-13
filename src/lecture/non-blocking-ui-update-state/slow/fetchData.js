// ------------------------------------------------------------------------
// [참고]
// ------------------------------------------------------------------------
// 데이터 가져오기를 수행하는 방법은 Suspense와 함께 사용하는 프레임워크에 따라 다릅니다.
// 일반적으로 캐싱 로직은 프레임워크 내부에 있습니다.
// ------------------------------------------------------------------------

// 데이터 캐싱(caching)
const cache = new Map();

export function fetchData(url) {
  if (!cache.has(url)) {
    // 캐싱되지 않은 경우, url 정보로 데이터 가져오기
    const data = getData(url);
    // 가져온 데이터 캐싱
    cache.set(url, data);
  }

  // 이미 캐싱된 경우, 캐싱된 데이터 즉시 반환
  return cache.get(url);
}

// ------------------------------------------------------------------------

async function getData(url) {
  if (url.startsWith('/portfolios')) {
    return await getPortfolios();
  } else {
    throw new Error('검색에 "portfolios"를 포함해야 합니다.');
  }
}

// ------------------------------------------------------------------------

async function getPortfolios() {
  // 지연 처리 시뮬레이션
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const portfolios = [];
  for (let i = 0; i < 500; ++i) {
    portfolios.push({
      id: i,
      title: `#${i + 1}`,
    });
  }

  return portfolios;
}
