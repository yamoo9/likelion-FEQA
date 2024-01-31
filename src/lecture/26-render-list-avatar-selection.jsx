import './26-render-list-avatar-selection.css';
import { Avatar } from '@/components';
import contactData from '@/data/contacts.json';

function Exercise() {
  // contactData.items [{ id, gender, name, face, ... }, ]

  const items = contactData.items.map((item) => {
    // 변경 사항
    // 조건: item.face 값이 >= 5면
    if (item.face >= 5) {
      // 처리: item.face = 4로 설정
      item.face = 4;
    }

    // 랜덤 온/오프라인 설정
    // 문
    // if (Math.random() >= 0.5) {
    //   item.isOnline = true;
    // } else {
    //   item.isOnline = false;
    // }

    // 식
    item.isOnline = Math.random() >= 0.5;

    return item;
  }); // map 메서드 -> 새로운 배열

  // console.log(Object.is(contactData.items, items)); // 복제해서 생성된 배열

  // function body 영역
  // 문, 식 모두 사용 가능

  return (
    /* JSX 영역에서는 식만 사용 가능 */
    <ul style={exerciseStyles}>
      {items.map(({ id, gender, face, name, isOnline }) => {
        const photoUrl = `/images/faces/${gender}-0${face}.jpg`;

        // function body 영역
        // 문, 식 모두 사용 가능

        return (
          /* JSX 영역에서는 식만 사용 가능 */
          <li key={id}>
            <Avatar photo={photoUrl} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
}

const exerciseStyles = {
  display: 'flex',
  gap: 20,
  marginBlock: 20,
  listStyle: 'none',
  paddingInlineStart: 0,
  flexFlow: 'row nowrap',
};

export default Exercise;
