import { Link } from 'react-router-dom';
import tiger from '@/assets/animate-tiger.gif';

function Header() {
  return (
    <header>
      <h1>
        <Link href="/">
          <img
            src={tiger}
            alt="어흥~! 범 내려온다~"
            className="h-12 -scale-x-100"
          />
        </Link>
      </h1>
    </header>
  );
}

export default Header;
