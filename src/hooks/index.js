// [커스텀 훅을 왜 만들까?]
// 스톱워치에서 구현했던 유사한 기능을 또!!! 또 구현!!
// 로직 복사 + 붙여넣기 -> 수정 (DRY)
// 로직 재사용
// 함수???
// 훅의 규칙! => use로 시작하는 함수! 아! 사용자가 정의하는 훅 함수!
// 아하!!! 커스텀 훅으로 만들자!!!

export { default as useTime } from './useTime';
export { default as useReference } from './useReference';
