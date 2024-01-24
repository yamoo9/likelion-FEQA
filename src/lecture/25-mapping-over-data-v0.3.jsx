/* eslint-disable react/jsx-key */

import './25-mapping-over-data.css';
import contactData from '../data/contacts.json';
import { ContactCard, ContactCardList } from './23-contact-card';

// items = []
// item = {}

export default function Exercise() {
  return (
    <ContactCardList>
      {contactData.items.map((item /* { name, job, ... } */) => (
        // <ContactCard {...item} />
        // ⏷
        // <ContactCard {name, job, ...} />
        // ⏷
        // React.createElement(ContactCard, {name, job, ...})
        <ContactCard {...item} />
      ))}
    </ContactCardList>
  );
}
