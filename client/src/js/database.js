import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('putDb implemented');
  const textEdDb = await openDB('textEdDb', 1);
  const tx = contactDb.transaction('textEdDb', 'readwrite');
  const store = tx.objectStore('textEdDb');
  const request = store.put({ id: 1, textEdDb: content });
  const result = await request;
  console.log('Saved', result);
  return result;
};
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('putDb implemented');
  const textEdDb = await openDB('textEdDb', 1);
  const tx = contactDb.transaction('textEdDb', 'readwrite');
  const store = tx.objectStore('textEdDb');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
