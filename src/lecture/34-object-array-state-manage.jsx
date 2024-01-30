import { useState } from 'react';
import catsData from '../data/cats.json';
import { getStaticImage } from '../utils';

const createCatsList = () =>
  catsData.map((cat) => {
    const [year] = cat.birthday.split('-');
    const age = new Date().getFullYear() - year;
    return { ...cat, age };
  });

const newCat = createCatsList()[1];

function CatsList() {
  const [cats, setCats] = useState(/* 초기화 함수 참조 */ createCatsList);

  const handleDeleteCat = (deleteCatId) => {
    setCats(cats.filter((cat) => cat.id !== deleteCatId));
  };

  const handleAddCat = () => {
    const newCatId = crypto.randomUUID();

    setCats([{ ...newCat, id: newCatId }, ...cats]);
  };

  return (
    <>
      <button type="button" onClick={handleAddCat} style={{ marginBlock: 20 }}>
        NEW CAT
      </button>
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
            <div
              role="group"
              style={{
                display: 'flex',
                gap: 4,
                marginBlockEnd: 16,
              }}
            >
              <button type="button" aria-label="고양이 나이 1 증가">
                +
              </button>
              <button type="button" aria-label="고양이 나이 1 감소">
                -
              </button>
              <button
                type="button"
                aria-label="삭제"
                title="삭제"
                onClick={() => handleDeleteCat(cat.id)}
              >
                ⅹ (<span className="age">{cat.age}</span>)
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
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
