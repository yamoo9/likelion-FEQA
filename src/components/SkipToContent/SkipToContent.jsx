import { Link, useLocation } from 'react-router-dom';
import { node, string, oneOfType, exact } from 'prop-types';

function SkipToContent({ href, children, ...restProps }) {
  const { pathname } = useLocation();

  return (
    <Link to={`${pathname}${href}`} {...restProps}>
      {children}
    </Link>
  );
}

const PathType = exact({
  pathname: string,
  search: string,
  hash: string,
});

SkipToContent.propTypes = {
  href: oneOfType([string, PathType]),
  children: node.isRequired,
};

export default SkipToContent;
