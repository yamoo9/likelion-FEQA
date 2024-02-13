import { memo } from 'react';
import { string } from 'prop-types';
import { fetchData } from './fetchData';
import use from './use';

function SearchResults({ query }) {
  if (query === '') {
    return null;
  } else {
    // [참고]
    // 새로운 use 훅 함수는 이전의 훅 함수와 다르게 if 문 안에서도 사용 가능합니다.
    // https://react.dev/reference/react/use
    const albums = use(fetchData(`/search?q=${query}`));

    if (albums.length === 0) {
      return <p>&lsquo;{query}&rsquo;를 포함하는 앨범이 없습니다. 😳</p>;
    }

    return (
      <ul>
        {albums.map((album) => (
          <li key={album.id}>{album.title} - (album.year)</li>
        ))}
      </ul>
    );
  }
}

SearchResults.propTypes = {
  query: string.isRequired,
};

export default memo(SearchResults);
