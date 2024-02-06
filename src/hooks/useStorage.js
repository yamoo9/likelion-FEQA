import { useState } from 'react';

function useStorage(key, initialValue) {
  if (!key) {
    throw new Error('useStorage 훅은 key 값 전달이 요구됩니다.');
  }

  const [state, setState] = useState(() => {
    const storageData = localStorage.getItem(key);
    return !storageData ? initialValue : JSON.parse(storageData);
  });

  const update = (nextValue) => {
    setState(nextValue);
    localStorage.setItem(key, JSON.stringify(nextValue));
  };

  return [state, update];
}

export default useStorage;
