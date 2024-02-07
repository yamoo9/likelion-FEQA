import classes from './Avatar.module.css';
import { string, boolean } from '@/utils/CustomPropTypes';

function Avatar({ photo, name = '', isOnline = false }) {
  const status = isOnline ? '온라인' : '오프라인';

  return (
    <figure className={classes.Avatar}>
      <img src={photo} alt={name} />
      <figcaption
        className={isOnline ? classes.online : ''}
        aria-label={status}
        title={status}
      />
    </figure>
  );
}

Avatar.propTypes = {
  photo: string,
  name: string,
  isOnline: boolean,
};

export default Avatar;
