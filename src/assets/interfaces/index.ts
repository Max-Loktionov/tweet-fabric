export interface IUser {
  id: number;
  user: string;
  avatar: string | null;
  tweets: number;
  followers: number;
  followed: boolean;
}

export interface IProps extends IUser {
  handleClickFollow?: () => void;
}
