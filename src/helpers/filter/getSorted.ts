import { useMemo } from "react";
import { IUser } from "../../assets/interfaces";

const users: IUser[] | undefined = [
  {
    avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1237.jpg",
    user: "Gayle Herman",
    tweets: 32,
    followers: 99003,
    followed: true,
    id: 1,
  },
  {
    avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/683.jpg",
    user: "Jesse Schultz I",
    tweets: 31,
    followers: 43,
    followed: true,
    id: 2,
  },
];

export const sortedUserCards: IUser[] | undefined = useMemo(() => {
  const sortedCards: IUser[] | undefined = users?.slice();
  sortedCards?.sort((a, b) => a.user.localeCompare(b.user));

  return sortedCards;
}, [users]);

export const sortedUser: IUser[] | undefined = useMemo(() => {
  const sortedCards: IUser[] | undefined = users?.slice();
  sortedCards?.sort((a, b) => b.followers - a.followers);

  return sortedCards;
}, [users]);
