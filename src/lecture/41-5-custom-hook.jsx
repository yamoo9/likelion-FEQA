import { A11yHidden } from '@/components';
import { useFetch } from '@/hooks';

// const API = import.meta.env.VITE_PB_API;
// const ENDPOINT = `${API}/api/collections/products/records?page=1&perPage=5`;

function Exercise() {
  const { data } = useFetch(
    `${
      import.meta.env.VITE_PB_API
    }/api/collections/products/records?page=1&perPage=5`
  );

  if (!data) {
    return <div role="alert">데이터 로딩 중...</div>;
  }

  const tableContents = data.items;
  const tableContentsLegnth = tableContents.length;

  return (
    <div>
      <h2 className="text-2xl text-indigo-500 mt-7">Exercise</h2>
      <DataTable contents={tableContents} />
      <DataTableItemCount count={tableContentsLegnth} />
    </div>
  );
}

function DataTable({ contents }) {
  const tableStyle = 'mt-2 border-2 border-solid border-indigo-600';
  const borderStyle = 'p-2 border border-solid border-indigo-300';

  return (
    <table className={tableStyle}>
      <A11yHidden as="caption">표 제목</A11yHidden>
      <colgroup>
        <col width="160" />
        <col width="240" />
        <col width="100" />
      </colgroup>
      <thead>
        <tr>
          <th scope="col" className={borderStyle}>
            ID
          </th>
          <th scope="col" className={borderStyle}>
            TITLE
          </th>
          <th scope="col" className={borderStyle}>
            COLOR
          </th>
        </tr>
      </thead>
      <tbody>
        {contents?.map((content) => (
          <tr key={content.id}>
            <td className={borderStyle}>{content.id}</td>
            <td className={borderStyle}>{content.title}</td>
            <td className={borderStyle}>{content.color}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function DataTableItemCount({ count }) {
  return (
    <output className="mt-2 block py-1 px-2 rounded border border-solid border-sky-600">
      {count}
    </output>
  );
}

export default Exercise;
