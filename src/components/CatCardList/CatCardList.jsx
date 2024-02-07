import CatCardItem from './CatCardItem';
import classes from './CatCardList.module.css';

// 데이터 가져오기
import catsData from '../../data/cats.json';
import { CatListType } from './type';

function CatCardList({ catList }) {
  // 데이터 순환하여 리스트 렌더링
  const renderCatsList =
    catList ??
    catsData.map((cat) => {
      // console.log(cat);
      return <CatCardItem key={cat.id} cat={cat} />;
    });

  return (
    <section className={classes.component} aria-label="사랑스런 고양이 가족">
      {renderCatsList}
    </section>
  );
}

CatCardList.propTypes = {
  catList: CatListType,
};

export default CatCardList;
