type DBRes<T> = {
  error: boolean | null;
  data: T;
  count: null;
  status: 200 | 201 | 400 | 404;
  statusText: string;
};
