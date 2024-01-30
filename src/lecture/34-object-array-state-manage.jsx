// [학습 주제] 프리미티브 상태 vs. 객체형(배열, 객체) 상태

import { useState } from 'react';
import catsData from '../data/cats.json';
import { getStaticImage } from '../utils';

function CatsList() {
  // 어떤 상태 ?
  // 고양이 집합(catsData) : Array
  const [cats, setCats] = useState(catsData);

  const handleDeleteCat = () => {
    // [1] 새로운 값 설정
    // setCats(cats.filter((cat) => !cat.birthday.includes('1974')));

    // [2] 콜백 함수: 이전 값을 연산해서 반환한 값 설정
    setCats((cats) => cats.filter((cat) => !cat.birthday.includes('1974')));
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
            onClick={handleDeleteCat}
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
