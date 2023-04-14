import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useGetTweetsQuery } from "../redux/tweetsApi";
import { IUser } from "../assets/interfaces";
import UserCard from "../components/UserCard";
import { Button, Box, Paper } from "@mui/material";

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
  const ITEMS_PER_PAGE = 10; // Number of items to show per page
  const { data: users } = useGetTweetsQuery();

  const [itemsPerPage] = useState(ITEMS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsToShow, setItemsToShow] = useState<IUser[]>([]);
  const [allItems, setAllItems] = useState<IUser[] | undefined>([]);

  useEffect(() => {
    setAllItems(users);
  }, [users]);

  // slice the items array to show only the items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    const items = allItems?.slice(startIndex, endIndex);
    if (!items) return;
    setItemsToShow((prevItems) => [...prevItems, ...items]);
  }, [allItems, itemsPerPage, currentPage, startIndex, endIndex]);

  const loadMoreBtn = () => {
    setCurrentPage(currentPage + 1);
  };

  if (!allItems) {
    return <div />;
  }

  return (
    <>
      <div>TweetsPage</div>
      <Box
        sx={{
          p: 2,
          display: "grid",
          gridTemplateColumns: { md: "1fr 1fr" },
          gap: 2,
        }}
      >
        {users &&
          users.map((userItem: IUser) => (
            <Paper key={userItem.id}>
              <UserCard
                id={userItem.id}
                user={userItem.user}
                tweets={userItem.tweets}
                followers={userItem.followers}
                avatar={userItem.avatar}
                followed={userItem.followed}
              />
            </Paper>
          ))}
      </Box>

      {allItems.length > ITEMS_PER_PAGE && (
        <Button variant="contained" color="secondary" onClick={loadMoreBtn} disabled={Boolean(endIndex >= allItems?.length)}>
          Load more
        </Button>
      )}
      <div>
        <NavLink to={"/"}>Home</NavLink>
      </div>
    </>
  );
}
