type Login = {
  code: number;
  message: string;
  content: User & {
    token: string;
  };
};

type User = {
  userId: number;
  userName: string;
};
