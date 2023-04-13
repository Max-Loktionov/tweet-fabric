// import { Link, useLocation } from "react-router-dom";
import noImage from "../../../public/ava.png";
import { Box, Text, Poster } from "./UserCard.styled";

export interface IUser {
  id: number;
  user: string;
  avatar: string | null;
  tweets: number;
  followers: number;
}

const users: IUser[] = [
  {
    id: 1,
    user: "Elon Reeve Musk",
    tweets: 777,
    followers: 100500,
    avatar: "url.jpg",
  },
];

const { user, tweets, followers, avatar } = users[0];

export default function UserCard() {
  //   const location = useLocation();
  return (
    <>
      {/* <Link to={`/${id}`} state={{ from: location }}> */}
      <Box>
        <div>
          {avatar ? (
            <Poster src={`${avatar}`} alt={user} />
          ) : (
            <Poster src={noImage} alt={user} />
          )}
        </div>
        <Text>{tweets}</Text>
        <Text>{followers}</Text>
        <button type="button" onClick={() => console.log("follow")}>
          Follow
        </button>
      </Box>
      {/* </Link> */}
    </>
  );
}
