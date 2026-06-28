import { openDB } from 'idb';

export const dbPromise = openDB('notes-extension', 1, {
  upgrade(db) {
    const store = db.createObjectStore('entries', {
      keyPath: 'id',
    });

    store.createIndex('parentId', 'parentId');
    store.createIndex('updatedAt', 'updatedAt');
    store.createIndex('type', 'type');
  },
});
