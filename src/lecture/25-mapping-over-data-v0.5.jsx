import './25-mapping-over-data.css';
import contactData from '../data/contacts.json';
import { ContactCard, ContactCardList } from './23-contact-card';

export default function Exercise() {
  return (
    <ContactCardList>
      {contactData.items.map((item) => (
        <ContactCard key={item.id} {...item} />
      ))}
    </ContactCardList>
  );
}
