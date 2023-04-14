// import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";
import { useUpdateFollowingMutation } from "../../redux/tweetsApi";
import noImage from "../../../public/ava.png";
import formattedNumber from "../../helpers/formatted";
import { IUser } from "../../assets/interfaces";
import { Stack, CircularProgress } from "@mui/material";
import { Box, Text, Poster } from "./UserCard.styled";

// https://6439993fbd3623f1b9a428c7.mockapi.io/api/v1/:endpoint

export default function UserCard({ id, user, tweets, followers, avatar, followed }: IUser) {
  const [updateFollowing, { isLoading }] = useUpdateFollowingMutation();
  // const [isFollowing, setFollow] = useState(false);
  const shownFollowers = formattedNumber(followers);

  const handleClickFollow = async () => {
    // if (!follow) return ++followers;
    if (followed) {
      // deleteFollow(id)
      followers -= 1;
      followed = false;
      const body = {
        followers,
        followed,
        id,
      };
      await updateFollowing(body);
      return;
    }
    // addFollow(id)
    followers += 1;
    followed = true;
    const body = {
      followers,
      followed,
      id,
    };
    await updateFollowing(body);
    return;
  };

  return (
    <>
      <Box>
        {isLoading && (
          <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
            <CircularProgress color="secondary" />
            <CircularProgress color="inherit" />
          </Stack>
        )}
      </Box>

      <Box>
        <div>{avatar ? <Poster src={`${avatar}`} alt={user} /> : <Poster src={noImage} alt={user} />}</div>
        <Text>{tweets}</Text>
        <Text>{shownFollowers}</Text>
        <button type="button" onClick={handleClickFollow}>
          {followed ? "Following" : "Follow"}
        </button>
      </Box>
    </>
  );
}
