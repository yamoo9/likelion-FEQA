import { useEffect, useState } from 'react';

const API = import.meta.env.VITE_PB_API;

async function fetchProducts(options) {
  try {
    const response = await fetch(
      `${API}/api/collections/products/records?page=2&perPage=2`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    if (!(error instanceof DOMException)) {
      throw new Error(error);
    }
  }
}

function Exercise() {
  const [tableContents] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetchProducts({ signal: controller.signal }).then((data) =>
      console.log(data)
    );

    // 신호를 통해 중복된 요청일 경우 웹 요청을 취소(abort)
    // 클린업
    return () => {
      // 네트워크 요청 취소
      controller.abort();
    };
  });

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
  return (
    <table className="border-2 border-solid border-indigo-600">
      <caption>표 제목</caption>
      <thead>
        <tr>
          <th scope="col">셀 제목 1</th>
          <th scope="col">셀 제목 2</th>
          <th scope="col">셀 제목 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>셀 내용 1</td>
          <td>셀 내용 2</td>
          <td>셀 내용 3</td>
        </tr>
      </tbody>
    </table>
  );
}

function DataTableItemCount({ count }) {
  return (
    <output className="mt-4 block p-4 border border-solid border-sky-600">
      {count}
    </output>
  );
}

export default Exercise;
