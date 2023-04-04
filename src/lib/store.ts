const STORE_KEY = {
  LOCAL_TOKEN: 'LOCAL_TOKEN',
} as const;

export const setLocalStorage = (
  key: keyof typeof STORE_KEY,
  value: Record<string, unknown>
) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: keyof typeof STORE_KEY) => {
  return localStorage.getItem(key);
};

export const clearLocalStorage = (key?: keyof typeof STORE_KEY) => {
  key ? localStorage.removeItem(key) : localStorage.clear();
};
