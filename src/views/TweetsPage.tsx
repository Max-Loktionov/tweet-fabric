import { useState, useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";

import { useGetTweetsQuery } from "../redux/tweetsApi";
import { IUser } from "../assets/interfaces";
import UserCard from "../components/UserCard";
import { Button, Box, Paper, Grid, Typography, CircularProgress, Link, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
// export interface IUser {
//   id: number;
//   user: string;
//   avatar: string | null;
//   tweets: number;
//   followers: number;
//   isFollowing: boolean;
// }
// const Item = styled(Paper)(({ theme }) => ({
//   // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   // ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   // color: theme.palette.text.secondary,
// }));
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
  const ITEMS_PER_PAGE = 12; // Number of items to show per page
  const { data: users, isLoading } = useGetTweetsQuery();

  const [itemsPerPage] = useState(ITEMS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsToShow, setItemsToShow] = useState<IUser[]>([]);
  const [allItems, setAllItems] = useState<IUser[] | undefined>([]);
  // const [sortedItems, setSorted] = useState<IUser[] | undefined>(allItems);

  useEffect(() => {
    setAllItems(users);
  }, [users]);
  // if (users) {
  //   const sorter = users?.sort((u, y) => y.followers - u.followers);
  //   console.log("sort", sorter);
  // }

  // useEffect(() => {
  //   setSorted;
  // }, [allItems]);

  const sortedUserCards: IUser[] | undefined = useMemo(() => {
    const sortedCards: IUser[] | undefined = allItems?.slice();
    sortedCards?.sort((a, b) => a.user.localeCompare(b.user));
    console.log("sorted users", sortedCards);
    return sortedCards;
  }, [allItems]);

  // slice the items array to show only the items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    const items = allItems?.slice(startIndex, endIndex);
    if (!items) return;
    setItemsToShow((prevItems) => {
      items !== prevItems;
      return [...prevItems, ...items];
    });
  }, [allItems, itemsPerPage, currentPage, startIndex, endIndex]);

  const loadMoreBtn = () => {
    setCurrentPage(currentPage + 1);
  };

  if (!allItems) {
    return <div />;
  }

  return (
    <>
      <Paper elevation={2}>
        <Typography variant="h4" textAlign="center" fontStyle="italic">
          {isLoading ? <CircularProgress color="inherit" size={20} /> : "TweetsPage"}
        </Typography>
      </Paper>
      <Box sx={{ my: "32px" }}>
        <Grid container rowSpacing={2} justifyContent="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {users &&
            itemsToShow.map((userItem: IUser) => (
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
      </Box>
      {allItems.length > ITEMS_PER_PAGE && (
        <Button
          variant="contained"
          color="success"
          size="large"
          sx={{ mx: "auto", display: "block" }}
          onClick={loadMoreBtn}
          disabled={Boolean(endIndex >= allItems?.length)}
        >
          Load more
        </Button>
      )}

      <Box component="span" sx={{ p: 2, m: 8, backgroundColor: "gray", outline: "1px solid #FDD835", display: "inline-block" }}>
        <NavLink to={"/"}>
          <HomeIcon fontSize="large" color="secondary" />
        </NavLink>
      </Box>
    </>
  );
}
