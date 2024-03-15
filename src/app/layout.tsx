import type { Metadata } from 'next';

type RootLayoutProps = {
  children: React.ReactNode;
};

// 글로벌 메타데이터
export const metadata: Metadata = {
  title: '최강 8기!! 오늘 수료한다~~~',
  description: '최강 8기가 역대 최고닷! (현재까지는)',
};

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko-KR">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
