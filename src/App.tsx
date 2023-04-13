import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";

const HomePage = lazy(() => import("./views/HomePage"));
const TweetsPage = lazy(() => import("./views/TweetsPage"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>Downloading...</>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/tweets" element={<TweetsPage />} />

            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
