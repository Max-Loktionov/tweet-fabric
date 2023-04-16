// import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";
import { useUpdateFollowingMutation } from "../../redux/tweetsApi";
import noImage from "../../img/ava.png";
import formattedNumber from "../../helpers/formatted";
import { IUser } from "../../assets/interfaces";
import { Box, CircularProgress, Button } from "@mui/material";
import * as S from "./styles";

// https://6439993fbd3623f1b9a428c7.mockapi.io/api/v1/:endpoint

export default function UserCard({ id, user, tweets, followers, avatar, followed }: IUser) {
  const [updateFollowing, { isLoading }] = useUpdateFollowingMutation();
  // const [isFollowing, setFollow] = useState(false);
  const shownFollowers = formattedNumber(followers);

  const handleClickFollow = async () => {
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
        <S.ImgContainer />
        <S.Line />
        <S.ImgWrapper>{avatar ? <S.Poster src={`${avatar}`} alt={user} /> : <S.Poster src={noImage} alt={user} />}</S.ImgWrapper>
        <S.Text>{tweets} tweets</S.Text>
        <S.Text sx={{ mb: "22px" }}>{shownFollowers} followers</S.Text>
        {followed ? (
          <S.ButtonMain color="secondary" variant="contained" onClick={handleClickFollow}>
            {isLoading ? <CircularProgress color="error" size={20} /> : "Following"}
          </S.ButtonMain>
        ) : (
          <S.ButtonMain variant="contained" sx={{ backgroundColor: "#ebd8ff" }} onClick={handleClickFollow}>
            {isLoading ? <CircularProgress color="error" size={20} /> : "Follow"}
          </S.ButtonMain>
        )}
      </S.CardWrapper>
    </>
  );
}
