import classes from './Graph.module.css';
import { range } from '../../utils';

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

export default Graph;
