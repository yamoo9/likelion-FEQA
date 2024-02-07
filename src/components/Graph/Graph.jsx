import classes from './Graph.module.css';
import { number } from 'prop-types';
import { range } from '@/utils';

function Graph({ start, end, step = 1 }) {
  if (start >= end) {
    throw new Error('start 값이 end 값보다 크거나 같습니다.');
  }

  return (
    <figure className={classes.Graph}>
      {range(start, end, step).map((value) => (
        <span key={value} className={classes.peg}>
          {value}
        </span>
      ))}
    </figure>
  );
}

Graph.propTypes = {
  /** 그래프의 시작점 */
  start: number.isRequired,
  /** 그래프의 끝점 */
  end: number.isRequired,
  /** 그래프의 각 점의 간격 */
  step: number,
};

export default Graph;
