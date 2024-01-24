/* eslint-disable react/jsx-key */

import './25-mapping-over-data.css';
import contactData from '../data/contacts.json';

export default function Exercise() {
  const { items } = contactData;

  const children = items.map(({ id, name, email }) => {
    return (
      <li style={listStyle}>
        <span>{id}</span>
        <span>{name}</span>
        <span>{email}</span>
      </li>
    );
  });

  return <ul>{children}</ul>;
}

const listStyle = {
  display: 'flex',
  flexFlow: 'column',
  marginBlockEnd: 20,
};
