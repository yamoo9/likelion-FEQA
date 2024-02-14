import { useCallback } from 'react';
import { func, string } from 'prop-types';
import { A11yHidden } from '@/components';

function SkipToContent({ href, onClick, ...restProps }) {
  const handleSmoothScroll = useCallback(
    (e) => {
      e.preventDefault();

      const targetElement = document.getElementById(href.replace(/#/, ''));

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });

        onClick?.(e);
      }
    },
    [href, onClick]
  );

  return (
    <A11yHidden
      as="a"
      focusable
      href={href}
      onClick={handleSmoothScroll}
      {...restProps}
    />
  );
}

SkipToContent.propTypes = {
  href: string.isRequired,
  onClick: func,
};

// function SkipToContent({ href, children, ...restProps }) {
//   const { pathname } = useLocation();

//   return (
//     <Link to={`${pathname}${href}`} {...restProps}>
//       {children}
//     </Link>
//   );
// }

// const PathType = exact({
//   pathname: string,
//   search: string,
//   hash: string,
// });

// SkipToContent.propTypes = {
//   href: oneOfType([string, PathType]),
//   children: node.isRequired,
// };

export default SkipToContent;
