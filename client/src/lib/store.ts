import { atom } from 'jotai';

export const popupAtom = atom<Popup | null>(null);
export const popupStore = atom<Popup | null, [Popup | null], void>(
  (get) => get(popupAtom),
  (_get, set, action) => set(popupAtom, action)
);
