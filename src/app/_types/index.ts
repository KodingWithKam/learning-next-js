export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export type Comment = {
  id: number;
  email: string;
  name: string;
  body: string;
  postId: number;
};
