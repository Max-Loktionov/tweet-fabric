// import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";
import { useUpdateFollowingMutation } from "../../redux/tweetsApi";
import noImage from "../../../public/ava.png";
import formattedNumber from "../../helpers/formatted";
import { IUser } from "../../assets/interfaces";
import { Box, CircularProgress, Button } from "@mui/material";
import { Text, Poster } from "./UserCard.styled";
import * as S from "./styles";

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
      <S.CardWrapper>
        <div>{avatar ? <Poster src={`${avatar}`} alt={user} /> : <Poster src={noImage} alt={user} />}</div>
        <Text>{tweets}</Text>
        <Text>{shownFollowers}</Text>
        {followed ? (
          <Button variant="contained" sx={{ mx: "auto", display: "block" }} color="success" onClick={handleClickFollow}>
            {isLoading ? <CircularProgress color="error" size={20} /> : "Following"}
          </Button>
        ) : (
          <Button variant="contained" color="info" sx={{ mx: "auto", display: "block" }} onClick={handleClickFollow}>
            {isLoading ? <CircularProgress color="error" size={20} /> : "Follow"}
          </Button>
        )}
      </S.CardWrapper>
    </>
  );
}
