import { atom } from 'jotai';

/** UserId */
const LOCAL_USER_ID = 'rolling-cake:userId';
const userIdAtom = atom(localStorage.getItem(LOCAL_USER_ID));
export const userIdStore = atom<string | null, [string | null], void>(
  (get) => get(userIdAtom),
  (_get, set, newId) => {
    set(userIdAtom, newId);
    newId ? localStorage.setItem(LOCAL_USER_ID, newId) : localStorage.removeItem(LOCAL_USER_ID);
  },
);
