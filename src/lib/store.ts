import { atom } from 'jotai';
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

export const makeAtom = atom<CakeStep>(CUSTOM_STEP_STORE);

/** Client Storage */
type LocalKey = 'rolling-cake:userId' | 'rolling-cake:isMake';

export const setLocalStorage = (key: LocalKey, value: Record<string, unknown> | string) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = <T>(key: LocalKey): T => {
  return JSON.parse(localStorage.getItem(key) ?? '{}') as T;
};
