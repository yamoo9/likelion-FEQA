import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { Link, useRouteError } from 'react-router-dom';

function NotFound() {
  const error = useRouteError();

  const errorMessage = `
    당신이 찾고 있는 페이지는 이름이 바뀌거나, 제거되었거나, 
    이 행성에 존재하지 않을 수도 있습니다.<br />

    <b>${error.data}</b>
  `;

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('페이지 못 찾음')}</title>
        <meta
          name="description"
          content="요청한 페이지를 찾을 수 없습니다! 🥹"
        />
      </Helmet>
      <div className="flex flex-col gap-5">
        <h2 className="text-3xl">찾을 수 없음 404</h2>
        <p
          className="text-xs"
          dangerouslySetInnerHTML={{
            __html: errorMessage,
          }}
        ></p>
        <Link to="/">홈 페이지로! GO!!</Link>
      </div>
    </>
  );
}

export default NotFound;
