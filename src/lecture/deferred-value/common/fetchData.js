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
  if (url.startsWith('/search?q=')) {
    // 사용자가 입력한 쿼리 추출
    const query = url.slice('/search?q='.length);
    // 쿼리 결과 비동기 반환
    return await getSearchResults(query, 0.5);
  } else {
    throw new Error('쿼리는 "/search?q="를 포함해야 합니다.');
  }
}

// ------------------------------------------------------------------------

async function getSearchResults(query, timeout = 1) {
  // 지연 처리 시뮬레이션
  await new Promise((resolve) => {
    setTimeout(resolve, 1000 * timeout);
  });

  const lowerQuery = query.trim().toLowerCase();

  // 앨범 필터링
  const { default: allAlbums } = await import('./albums.json');

  const filteredAlbums = allAlbums.filter((album) => {
    const lowerTitle = album.title.toLowerCase();
    return lowerTitle.includes(lowerQuery);
  });

  return filteredAlbums;
}
