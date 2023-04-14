// import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useUpdateFollowingMutation } from "../../redux/tweetsApi";
import noImage from "../../../public/ava.png";
import formattedNumber from "../../helpers/formatted";
import { IUser } from "../../assets/interfaces";
import { Box, Text, Poster } from "./UserCard.styled";

// https://6439993fbd3623f1b9a428c7.mockapi.io/api/v1/:endpoint

export default function UserCard({ id, user, tweets, followers, avatar, followed }: IUser) {
  const [updateFollowing] = useUpdateFollowingMutation();
  const [isFollowing, setFollow] = useState(false);
  const shownFollowers = formattedNumber(followers);

  const handleClickFollow = async () => {
    // if (!follow) return ++followers;
    if (isFollowing) {
      // deleteFollow(id)

      return setFollow(false);
    }
    // addFollow(id)
    await updateFollowing(id);
    return setFollow(true);
  };

  return (
    <>
      {/* <Link to={`/${id}`} state={{ from: location }}> */}
      <Box>
        <div>{avatar ? <Poster src={`${avatar}`} alt={user} /> : <Poster src={noImage} alt={user} />}</div>
        <Text>{tweets}</Text>
        <Text>{shownFollowers}</Text>
        <button type="button" onClick={handleClickFollow}>
          {followed ? "Following" : "Follow"}
        </button>
      </Box>
      {/* </Link> */}
    </>
  );
}
