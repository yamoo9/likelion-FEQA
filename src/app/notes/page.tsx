import Link from 'next/link';

function Page() {
  return (
    <div id="notes">
      <h1>마이 노트 리스트</h1>
      <ul>
        <li>
          <Link href="/notes/aoa11y">마이 노트 AOA11Y</Link>
        </li>
      </ul>
    </div>
  );
}

export default Page;
