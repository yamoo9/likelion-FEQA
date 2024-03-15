import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '진짜다! 진짜가 나타났다~!',
  description: '진짜는 8기닷!',
};

function Home() {
  return (
    <div id="home">
      <h1>안녕!! Next.js</h1>
    </div>
  );
}

export default Home;
