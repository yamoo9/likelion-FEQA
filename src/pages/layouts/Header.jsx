import tiger from '@/assets/animate-tiger.gif';
import { Link } from 'react-router-dom';
import CountDisplay from '@/pages/components/counter/CountDisplay';

function Header() {
  return (
    <header>
      <h1>
        <Link href="/" className="relative">
          <img
            src={tiger}
            alt="어흥~! 범 내려온다~"
            className="h-12 -scale-x-100"
          />
          <CountDisplay className="absolute top-1 -right-7 shadow bg-white w-5 h-5 rounded-full grid place-content-center text-[10px] font-extrabold">
            0
          </CountDisplay>
        </Link>
      </h1>
    </header>
  );
}

export default Header;
