import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";
import { Box, LinearProgress } from "@mui/material";
import NotFoundPage from "./views/NotFoundPage";

const HomePage = lazy(() => import("./views/HomePage"));
const TweetsPage = lazy(() => import("./views/TweetsPage"));

export default function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <Box sx={{ my: "32px" }}>
            <LinearProgress color="success" />
          </Box>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="tweets" element={<TweetsPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
