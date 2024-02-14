import { Navigate } from 'react-router-dom';
import { bool, string, node } from 'prop-types';

function ProtectRoute({ isAllowed = false, redirectPath = '/', children }) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
}

export default ProtectRoute;

ProtectRoute.propTypes = {
  isAllowed: bool,
  redirectPath: string,
  children: node,
};
