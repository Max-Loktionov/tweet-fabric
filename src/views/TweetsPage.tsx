import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useGetTweetsQuery } from "../redux/tweetsApi";
import { IUser } from "../assets/interfaces";
import UserCard from "../components/UserCard";
import { Button, Box, Paper, Grid, Typography, CircularProgress, LinearProgress } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { getFiltredCards } from "../helpers/filter";
import BasicSelect from "../components/BasicSelect";

export default function TweetsPage() {
  const ITEMS_PER_PAGE = 12; // Number of items to show per page
  const { data: users, isLoading } = useGetTweetsQuery();

  const [endIndex, setEndIdx] = useState(ITEMS_PER_PAGE);
  const [allItems, setAllItems] = useState<IUser[] | undefined>([]);

  const filteredCards = getFiltredCards(users);

  const startIndex = 0;

  const handleClickLoadMoreBtn = () => {
    setEndIdx(endIndex + ITEMS_PER_PAGE);
  };

  useEffect(() => {
    setAllItems(users);
  }, [users]);

  if (!users) {
    return (
      <Box sx={{ my: "32px" }}>
        <LinearProgress color="success" />
      </Box>
    );
  }

  return (
    <>
      <Paper elevation={2}>
        <Typography variant="h4" textAlign="center" fontStyle="italic">
          {isLoading ? <CircularProgress color="success" size={20} /> : "TweetsPage"}
        </Typography>
      </Paper>
      <BasicSelect />
      <Box sx={{ my: "32px" }}>
        {isLoading ? (
          <LinearProgress color="success" />
        ) : (
          <Grid container rowSpacing={2} justifyContent="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {users &&
              filteredCards &&
              filteredCards.slice(startIndex, endIndex).map((userItem: IUser) => (
                <Grid item xs={8} sm={6} md={4} justifyContent="center" key={userItem.id}>
                  <UserCard
                    id={userItem.id}
                    user={userItem.user}
                    tweets={userItem.tweets}
                    followers={userItem.followers}
                    avatar={userItem.avatar}
                    followed={userItem.followed}
                  />
                </Grid>
              ))}
          </Grid>
        )}
      </Box>

      {users && allItems && allItems.length > ITEMS_PER_PAGE && (
        <Button
          variant="contained"
          color="success"
          size="large"
          sx={{ mx: "auto", display: "block" }}
          onClick={handleClickLoadMoreBtn}
          disabled={Boolean(endIndex >= allItems?.length)}
        >
          Load more
        </Button>
      )}

      <Box component="span" sx={{ p: 2, m: 8, backgroundColor: "gray", display: "inline-block" }}>
        <NavLink to={"/"}>
          <HomeIcon fontSize="large" color="secondary" />
        </NavLink>
      </Box>
    </>
  );
}
