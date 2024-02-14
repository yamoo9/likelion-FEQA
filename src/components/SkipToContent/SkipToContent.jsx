import { Link, useLocation } from 'react-router-dom';
import { node, string, oneOfType, exact } from 'prop-types';

function SkipToContent({ href, children, ...restProps }) {
  const location = useLocation();

  console.log(location);

  return (
    <Link to={href} {...restProps}>
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
