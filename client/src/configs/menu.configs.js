import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
import React from 'react';

const main = [
  {
    display: "home",
    path: "/",
    icon: React.createElement(HomeOutlinedIcon),
    state: "home"
  },
  {
    display: "movies",
    path: "/movie",
    icon: React.createElement(SlideshowOutlinedIcon),
    state: "movie"
  },
  {
    display: "tv series",
    path: "/tv",
    icon: React.createElement(LiveTvOutlinedIcon),
    state: "tv"
  },
  {
    display: "search",
    path: "/search",
    icon: React.createElement(SearchOutlinedIcon),
    state: "search"
  }
];

const user = [
  {
    display: "favorites",
    path: "/favorites",
    icon: React.createElement(FavoriteBorderOutlinedIcon),
    state: "favorite"
  },
  {
    display: "reviews",
    path: "/reviews",
    icon: React.createElement(RateReviewOutlinedIcon),
    state: "reviews"
  },
  {
    display: "password update",
    path: "/password-update",
    icon: React.createElement(LockResetOutlinedIcon),
    state: "password.update"
  }
];

const menuConfigs = { main, user };

export default menuConfigs;
