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
  // return <ul>{children}</ul>;

  // x = 3
  // y = x + 7

  return (
    <ul>
      {items.map(({ id, name, email }) => (
        <li style={listStyle}>
          <span>{id}</span>
          <span>{name}</span>
          <span>{email}</span>
        </li>
      ))}
    </ul>
  );
}

const listStyle = {
  display: 'flex',
  flexFlow: 'column',
  marginBlockEnd: 20,
};
