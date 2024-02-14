import { node, string } from 'prop-types';
import { Progress } from '@/components';

function Loading({ children = '페이지 로딩 중...', className, ...restProps }) {
  const classNames =
    `flex flex-col gap-0 justify-end items-center m-10 ${className}`.trim();

  return (
    <figure
      role="alert"
      aria-live="polite"
      className={classNames}
      {...restProps}
    >
      <Progress />
      <figcaption className="text-xs text-slate-500/80 -translate-y-8">
        {children}
      </figcaption>
    </figure>
  );
}

Loading.propTypes = {
  children: node,
  className: string,
};

export default Loading;
