// range 함수 API
// range(start? = 0, end? = 10, step? = 1) → [0, 1, ..., 10]
// range(startOrEnd = 20) → [0, 1, ..., 20]
// range(start = -20, end = 10, step = 10) → [-20, -10, 0, 10]

// range(10, 30) → [10, 11, ..., 30]
// range(30) → [0, 1, ..., 30]
// range(10, 30, 10) → [10, 20, 30]

export default function range(startOrEnd, end, step = 1) {
  const output = [];

  if (!end) {
    end = startOrEnd;
    startOrEnd = 0;
  }

  for (
    let numberValue = startOrEnd;
    numberValue <= end;
    numberValue = numberValue + step
  ) {
    output.push(numberValue);
  }

  return output;
}
