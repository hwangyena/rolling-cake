type CustomPopup = {
  title: 'Alert' | 'Welcome!';
  content: string;
  hasIcon?: boolean;
  onConfirm: () => void;
};

type Snackbar = {
  text: string;
};

type Filter = {
  label: string;
  value: string;
};

type Nullable<T> = T | undefined | null;
