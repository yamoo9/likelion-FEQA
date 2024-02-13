// ------------------------------------------------------------------------
// [주의]
// ------------------------------------------------------------------------
// 이 함수는 리액트에 새롭게 도입될 use 훅 함수를 모방한 것입니다.
// use 훅 함수는 아직 불안정하며, 공식적으로 공개되면 사용해야 합니다.
// ------------------------------------------------------------------------

export default function use(promise) {
  if (promise.status === 'fulfilled') {
    return promise.value;
  } else if (promise.status === 'rejected') {
    throw promise.reason;
  } else if (promise.status === 'pending') {
    throw promise;
  } else {
    promise.status = 'pending';
    promise.then(
      (result) => {
        promise.status = 'fulfilled';
        promise.value = result;
      },
      (reason) => {
        promise.status = 'rejected';
        promise.reason = reason;
      }
    );
    throw promise;
  }
}
