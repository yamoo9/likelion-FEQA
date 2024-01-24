/* eslint-disable react/jsx-key */

// import { createElement as h } from 'react';
import './25-mapping-over-data.css';
import contactData from '../data/contacts.json';
import { ContactCard, ContactCardList } from './23-contact-card';

function ListItem({ item }) {
  return <li>{item.name}</li>;
}

export default function Exercise() {
  return (
    <ContactCardList>
      {
        /* <ul> */ contactData.items.map(
          (item) => (
            // JSX
            // <ContactCard key={item.id} {...item} />
            <ListItem key={item.id} item={item} />
            // <li key={item.id}>{item.name}</li>
          )
          // React API
          // h(ContactCard, /* props */ { key: item.id, ...item })
          // React.createElement(type, props)  // props = { key, ... }
        )
      }
    </ContactCardList>
  );
}

// key 속성은 왜 필요할까요?

// - key의 필요성에 대해 이해하려면 리액트 렌더링 과정에 대해 깊이 이해해야 합니다.
// - 리액트는 실제로 데이터를 변경할 때 어떤 일이 발생하는지 구체적으로 알지 못합니다.
// - 리액트가 보는 모든 것은 이전/이후의 변화일 뿐입니다.
// - 리액트는 새로운 스냅샷에 맞게 DOM을 변경하는 방법을 알아내야 합니다.
// - 리액트는 변화를 분석해 새 항목을 삭제 또는 추가, 편집할 수 있습니다.
// - 이러한 비교 과정은 볼륨에 따라 많은 시간을 요하게 됩니다.
// - 그러므로 이전 / 이후 변화가 있는 것만 비교하는 것이 보다 효과적인 알고리즘입니다.
// - 효과적인 비교를 위해서는 고유 식별자가 필요합니다. 그것이 key 입니다.
// - 모든 스냅샷에서 각 아이템을 고유하게 식별하므로서
//   리액트는 정확히 변경사항을 확인해 최상의 성능으로 변화를 반영합니다.
