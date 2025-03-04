import { atom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';

import { CUSTOM_STEP_STORE } from './constant';

/** Step */
export const stepValidAtom = atom(false);

const storage = createJSONStorage<CustomCake>(() => sessionStorage);
export const makeAtom = atomWithStorage<CustomCake>(
  'rolling-cake:make',
  CUSTOM_STEP_STORE,
  storage,
);

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
