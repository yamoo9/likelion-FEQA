// [react] render list
// 오직 자바스크립트!(only javascript) syntax

// [vue] list rendering
// 템플릿(template) syntax

import contactData from '../data/contacts.json';

// [질문] Array는 이터레이터 프로토콜일까요?

// 문(statement)
// for-of 문을 사용할 수 있다? 없다?
// eslint-disable-next-line no-unused-vars
for (const item of contactData.items) {
  // console.log(item);
}

// console.log('--------------------');

// 식(expression)
// forEach (❌ 리액트에 사용하기 부적합 : 왜? 값을 반환하지 않으니까)
const forEachResult = contactData.items.forEach((item) => {
  // console.log(item);
  return item; // undefined
});

console.log(forEachResult); // ?????

console.log('--------------------');

// map (✅ 리액트에 사용하기 적합 : 왜? 값을 반환하니까)
const mapResult = contactData.items.map((item) => {
  // mutation (update)
  item.face += 1;
  return item;
});

console.log(mapResult.length, mapResult);

console.log('--------------------');

// filter (✅ 리액트에 사용하기 적합 : 원본 배열을 파괴하지 않고 새로운 배열을 반환하니까)
const filteredResult = contactData.items.filter((item) => {
  return item.gender.includes('woman');
});

console.log(filteredResult.length, filteredResult);
