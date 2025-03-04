import { atom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';

import { CUSTOM_STEP_STORE } from './constant';

/** Common */
export const focusInputAtom = atom<FocusInput | null>(null);
export const focusInputStore = atom<FocusInput | null, [FocusInput | null], void>(
  (get) => get(focusInputAtom),
  (_get, set, action) => set(focusInputAtom, action),
);

export const snackBarAtom = atom<Snackbar | null>(null);

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
