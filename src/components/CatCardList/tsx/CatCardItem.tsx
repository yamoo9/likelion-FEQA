import classes from './CatCardItem.module.css';
import { getStaticImage, convertDayFormat } from '@/utils';
import type { CatCardItem } from './types';

type CatCardItemProps = {
  cat: CatCardItem;
};

function CatCardItem({
  cat: { imageAlt, imageSrc, name, badges, birthday },
}: CatCardItemProps): JSX.Element {
  let renderBadges = null;
  const badgeCount = badges?.length ?? 0;

  // if 문
  if (badges && badgeCount > 0) {
    // for 문
    const renderBadgeList = [];
    for (let i = 0, l = badges?.length; i < l; ++i) {
      const badge = badges[i];

      renderBadgeList.push(<li key={badge.slug}>{badge.label}</li>);
    }

    // 또는 map 함수 활용

    renderBadges = (
      <ul
        className={`${classes.badgeList} ${
          badgeCount > 2 ? classes.golden : ''
        }`.trim()}
      >
        {renderBadgeList}
      </ul>
    );
  }

  return (
    <article className={classes.CatCard}>
      <header>
        <img src={getStaticImage(imageSrc)} alt={imageAlt} />
        <h2>{name}</h2>
        <p className={classes.birthday}>
          태어난 날: {convertDayFormat(birthday)}
        </p>
      </header>
      {renderBadges}
    </article>
  );
}

export default CatCardItem;
