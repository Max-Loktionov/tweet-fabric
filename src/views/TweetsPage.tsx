import { useState, useEffect, useMemo } from "react";
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

  const [itemsPerPage] = useState(ITEMS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsToShow, setItemsToShow] = useState<IUser[]>([]);
  const [allItems, setAllItems] = useState<IUser[] | undefined>([]);

  // const sortedUserCards: IUser[] | undefined = useMemo(() => {
  //   const sortedCards: IUser[] | undefined = users?.slice();
  //   sortedCards?.sort((a, b) => a.user.localeCompare(b.user));

  //   return sortedCards;
  // }, [users]);

  // const sortedUser: IUser[] | undefined = useMemo(() => {
  //   const sortedCards: IUser[] | undefined = users?.slice();
  //   sortedCards?.sort((a, b) => b.followers - a.followers);

  //   return sortedCards;
  // }, [users]);

  // slice the items array to show only the items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    const items = users?.slice(startIndex, endIndex);
    if (!items) return;
    setItemsToShow((prevItems) => {
      items !== prevItems;
      return [...prevItems, ...items];
    });
  }, [allItems, itemsPerPage, currentPage, startIndex, endIndex]);

  const handleClickLoadMoreBtn = () => {
    setCurrentPage(currentPage + 1);
  };
  // if (users) {
  const filteredCards = getFiltredCards(users);

  useEffect(() => {
    setAllItems(users);
  }, [users]);
  // }

  if (!allItems) {
    return <div />;
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
              filteredCards.map((userItem: IUser) => (
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

      {allItems.length > ITEMS_PER_PAGE && (
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
