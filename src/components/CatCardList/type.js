import { string, arrayOf, shape, exact } from 'prop-types';

export const CatType = exact({
  /** 고양이 식별자 */
  id: string.isRequired,
  imageSrc: string.isRequired,
  imageAlt: string.isRequired,
  name: string.isRequired,
  birthday: string.isRequired,
  badges: arrayOf(
    shape({
      slug: string,
      label: string,
    })
  ),
});

export const CatListType = arrayOf(CatType);
