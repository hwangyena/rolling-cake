import { atom } from 'jotai';
import { STEP_CUSTOM_INIT } from './constant';

/** Common */
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

/** Step */
// TODO: type more detail
export const stepAtom = atom<Map<string, string | Record<string, unknown>>>(
  new Map(Object.entries(STEP_CUSTOM_INIT))
);

export const stepStore = atom<
  Map<string, string | Record<string, unknown>>,
  [Map<string, string | Record<string, unknown>>],
  void
>(
  (get) => get(stepAtom),
  (_get, set, action) => set(stepAtom, action)
);

export const stepValidAtom = atom(false);
