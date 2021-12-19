import api from 'app-interface/api-manager';

const getContacts = () => api.get('Users/GetContacts');

const sendEmailRequest = (email: string) =>
  api.post('ContactRequest/ContactRequestByEmail', {email: email});

const deleteContact = (contactId: string) =>
  api.delete(`ContactRequest/RemoveContact/${contactId}`);

export {getContacts, sendEmailRequest, deleteContact};
