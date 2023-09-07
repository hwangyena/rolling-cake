import { getLocalStorage } from '@/api/fetcher';
import { atom } from 'jotai';

/** Common */
export const popupAtom = atom<Popup | null>(null);
export const popupStore = atom<Popup | null, [Popup | null], void>(
  (get) => get(popupAtom),
  (_get, set, action) => set(popupAtom, action)
);

export const customPopupAtom = atom<CustomPopup | null>(null);
export const customPopupStore = atom<CustomPopup | null, [CustomPopup | null], void>(
  (get) => get(customPopupAtom),
  (_get, set, action) => set(customPopupAtom, action)
);

export const focusInputAtom = atom<FocusInput | null>(null);
export const focusInputStore = atom<FocusInput | null, [FocusInput | null], void>(
  (get) => get(focusInputAtom),
  (_get, set, action) => set(focusInputAtom, action)
);
export const dispatchFocusInput = atom<FocusInput | null, [FocusInput | null], void>(
  null,
  (_get, set, action) => set(focusInputAtom, action)
);

/** FIXME: Data */
export const userAtom = atom<unknown | null>(getLocalStorage<unknown>('rollingCake/user'));
export const userStore = atom<unknown | null, [unknown | null], void>(
  (get) => get(userAtom),
  (_get, set, action) => set(userAtom, action)
);
