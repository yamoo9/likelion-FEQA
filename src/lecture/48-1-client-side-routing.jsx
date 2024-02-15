import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import router from '@/routes';

// 1. QueryClient 인스턴스 생성
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 1000 * 25,
    },
  },
});

// 2. QueryClientProvider queryClient -> client 공급
function Exercise() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col space-y-1">
          <h2 className="text-2xl">클라이언트 사이드 라우팅(CSR)</h2>
          <p className="text-xs">
            클라이언트 환경에서 라우팅되는 싱글 페이지 애플리케이션(SPA) 구성
          </p>
        </div>
        <RouterProvider router={router} />
        <ReactQueryDevtools buttonPosition="bottom-left" />
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default Exercise;
