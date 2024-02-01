export default function debounce(callback, timeout = 400 /* 0.4s */) {
  let cleanup;

  // closure
  return (...args) => {
    clearTimeout(cleanup);
    cleanup = setTimeout(callback.bind(null, ...args), timeout);
  };
}
