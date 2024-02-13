import { bool, node, string } from 'prop-types';

const baseClassNames = 'px-2 py-1';

function TabButton({
  children,
  isActive = false,
  className = '',
  ...restProps
}) {
  if (isActive) {
    const activeClassNames =
      `${baseClassNames} font-bold bg-slate-100 rounded shadow-inner ${className}`.trim();

    return (
      <b className={activeClassNames} {...restProps}>
        {children}
      </b>
    );
  }

  return (
    <button
      type="button"
      className={`${baseClassNames} ${className}`.trim()}
      {...restProps}
    >
      {children}
    </button>
  );
}

TabButton.propTypes = {
  children: node.isRequired,
  isActive: bool,
  className: string,
};

export default TabButton;
