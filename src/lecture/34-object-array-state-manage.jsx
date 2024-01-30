// [학습 주제] 프리미티브 상태 vs. 객체형(배열, 객체) 상태

import { useState } from 'react';
import catsData from '../data/cats.json';
import { getStaticImage } from '../utils';

// function callBook() {
//   console.log('call book')
// }

// function run() {
//   callBook(); // 바로 실행??? 이벤트 의해 실행
//   globalThis.addEventListener('click', callBook); // 바로 실행? 이벤트에 의해 실행
//   globalThis.addEventListener('click', callBook()); // 바로 실행? 이벤트에 의해 실행
//   globalThis.addEventListener('click', () => callBook()); // 바로 실행? 이벤트에 의해 실행
// }

// run();

function CatsList() {
  // 어떤 상태 ?
  // 고양이 집합(catsData) : Array
  const [cats, setCats] = useState(catsData);

  const handleDeleteCat = (deleteCatId) => {
    // console.log(deleteCatId);

    // [1] 새로운 값 설정
    // setCats(cats.filter((cat) => cat.id !== deleteCatId));

    // [2] 콜백 함수: 이전 값을 연산해서 반환한 값 설정
    setCats((cats) => cats.filter((cat) => cat.id !== deleteCatId));
  };

  return (
    <ul
      style={{
        listStyle: 'none',
        paddingInlineStart: 0,
        marginBlock: 0,
      }}
    >
      {cats.map((cat) => (
        <li key={cat.id}>
          <img
            height={100}
            src={getStaticImage(cat.imageSrc)}
            alt={cat.imageAlt}
          />
          <button
            type="button"
            aria-label="삭제"
            title="삭제"
            // onClick={handleDeleteCat(cat.id)}
            onClick={() => handleDeleteCat(cat.id)}
          >
            ⅹ
          </button>
        </li>
      ))}
    </ul>
  );
}

export default function Exercise() {
  return (
    <div>
      <h2>객체형 상태 관리</h2>
      <CatsList></CatsList>
    </div>
  );
}
