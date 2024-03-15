type RootLayoutProps = {
  children: React.ReactNode;
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
