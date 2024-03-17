import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles.scss";

import CombinedProvider from "./providers/CombinedProvider";

import RouteGuard from "./guard/RouteGuard";

import Login from "./pages/Login/Login";
import MovieList from "./pages/MovieList/MovieList";
import MovieDetail from "./pages/MovieDetail/MovieDetail";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <CombinedProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/movie-list"
            element={
              <RouteGuard>
                <MovieList />
              </RouteGuard>
            }
          />
          <Route
            path="/movie-detail/:userId"
            element={
              <RouteGuard>
                <MovieDetail />
              </RouteGuard>
            }
          />
        </Routes>
      </Router>
    </CombinedProvider>
  </React.StrictMode>
);
