// import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useGetTweetsQuery } from "../redux/tweetsApi";
import { IUser } from "../assets/interfaces";
import UserCard from "../components/UserCard";
// import { IUser } from "assets/interfaces";

// export interface IUser {
//   id: number;
//   user: string;
//   avatar: string | null;
//   tweets: number;
//   followers: number;
//   isFollowing: boolean;
// }

// const users: IUser[] = [
//   {
//     id: 1,
//     user: "Elon Reeve Musk",
//     tweets: 777,
//     followers: 10050089,
//     avatar: "url.jpg",
//     isFollowing: false,
//   },
//   {
//     id: 2,
//     user: "Clark Steel",
//     tweets: 777,
//     followers: 1001,
//     avatar: "url.jpg",
//     isFollowing: true,
//   },
// ];

export default function TweetsPage() {
  const { data: users } = useGetTweetsQuery();

  // console.log("users", users);

  // console.log("foll", "35", isFollowing);
  return (
    <>
      <div>TweetsPage</div>
      {users &&
        users.map((userItem: IUser) => (
          <li key={userItem.id}>
            <UserCard
              id={userItem.id}
              user={userItem.user}
              tweets={userItem.tweets}
              followers={userItem.followers}
              avatar={userItem.avatar}
              followed={userItem.followed}
            />
          </li>
        ))}
      <div>
        <NavLink to={"/"}>Home</NavLink>
      </div>
    </>
  );
}
