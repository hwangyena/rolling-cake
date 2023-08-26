import { atom } from 'jotai';

export const popupAtom = atom<Popup | null>(null);
export const popupStore = atom<Popup | null, [Popup | null], void>(
  (get) => get(popupAtom),
  (_get, set, action) => set(popupAtom, action)
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
