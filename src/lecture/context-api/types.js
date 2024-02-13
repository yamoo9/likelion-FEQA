import { oneOf, exact, string, arrayOf } from 'prop-types';

export const CHAT_ROLE_TYPES = oneOf(['GUEST', 'MEMBER', 'ADMINISTRATOR']);

export const CHAT_USER_TYPE = exact({
  id: string,
  name: string,
  role: CHAT_ROLE_TYPES,
}).isRequired;

export const CHAT_MESSAGE_TYPE = arrayOf(string);
