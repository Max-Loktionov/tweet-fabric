import { NavLink } from "react-router-dom";
import UserCard from "../components/UserCard";

export interface IUser {
  id: number;
  user: string;
  avatar: string | null;
  tweets: number;
  followers: number;
}

// const users: IUser[] = [
//   {
//     id: 1,
//     user: "Elon Reeve Musk",
//     tweets: 777,
//     followers: 100500,
//     avatar: "url.jpg",
//   },
// ];

export default function TweetsPage() {
  return (
    <>
      <div>TweetsPage</div>
      {/* {users &&
        users.map((userItem) => (
          <li key={userItem.id}> */}
      <UserCard />

      {/* </li>
        ))} */}
      <div>
        <NavLink to={"/"}>Home</NavLink>
      </div>
    </>
  );
}
