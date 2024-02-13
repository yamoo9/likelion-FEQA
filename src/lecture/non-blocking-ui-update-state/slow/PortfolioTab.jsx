import { memo } from 'react';
import { string } from 'prop-types';
import { fetchData } from './fetchData';
import use from './use';

function PortfolioTab() {
  const portfolios = use(fetchData('/portfolios'));

  return (
    <ul className="overflow-y-auto max-h-[200px] flex flex-col space-y-2">
      {portfolios.map((portfolio) => (
        <PortfolioItem key={portfolio.id} title={portfolio.title} />
      ))}
    </ul>
  );
}

export default memo(PortfolioTab);

/* -------------------------------------------------------------------------- */

function PortfolioItem({ title }) {
  return (
    <li className="text-xs text-slate-600">
      포트폴리오 <b className="font-bold text-indigo-700/90">{title}</b>
    </li>
  );
}

PortfolioItem.propTypes = {
  title: string.isRequired,
};
