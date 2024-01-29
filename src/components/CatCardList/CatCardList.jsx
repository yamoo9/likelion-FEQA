import CatCardItem from './CatCardItem';
import classes from './CatCardList.module.css';

function CatCardList() {
  return (
    <section className={classes.component} aria-label="사랑스런 고양이 가족">
      <CatCardItem></CatCardItem>
    </section>
  );
}

export default CatCardList;
