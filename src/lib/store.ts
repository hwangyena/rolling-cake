import { atom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import { CUSTOM_STEP_STORE } from './constant';

/** Common */
export const popupAtom = atom<Popup | null>(null);
export const popupStore = atom<Popup | null, [Popup | null], void>(
  (get) => get(popupAtom),
  (_get, set, action) => set(popupAtom, action),
);

export const focusInputAtom = atom<FocusInput | null>(null);
export const focusInputStore = atom<FocusInput | null, [FocusInput | null], void>(
  (get) => get(focusInputAtom),
  (_get, set, action) => set(focusInputAtom, action),
);

export const snackBarAtom = atom<Snackbar | null>(null);

/** Step */
export const stepValidAtom = atom(false);

const storage = createJSONStorage<Cake>(() => sessionStorage);
export const makeAtom = atomWithStorage<Cake>('rolling-cake:make', CUSTOM_STEP_STORE, storage);

/** Client Storage */
type LocalKey = 'rolling-cake:userId';

export const setLocalStorage = (key: LocalKey, value: Record<string, unknown> | string) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = <T>(key: LocalKey): T | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  return localStorage.getItem(key) ? (JSON.parse(localStorage.getItem(key) ?? '{}') as T) : null;
};
