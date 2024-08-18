import {
  channelIcon,
  cloneMusicIcon,
  downloadsIcon,
  historyIcon,
  homeIcon,
  likedVideosIcon,
  playlistIcon,
  shortsIcon,
  subscriptionIcon,
  watchLaterIcon,
  yourClipsIcon,
  yourVideosIcon,
} from "@/assets/icons";

const sidebarUrls1 = [
  {
    name: "Home",
    icon: homeIcon,
    href: "/",
  },
  {
    name: "Shorts",
    icon: shortsIcon,
    href: "/1",
  },
  {
    name: "Subscriptions",
    icon: subscriptionIcon,
    href: "/1",
  },
  {
    name: "Clone Music",
    icon: cloneMusicIcon,
    href: "/1",
  },
];
const sidebarUrls2 = [
  {
    name: "Your channel",
    icon: channelIcon,
    href: "/",
  },
  {
    name: "History",
    icon: historyIcon,
    href: "/",
  },
  {
    name: "Playlists",
    icon: playlistIcon,
    href: "/",
  },
  {
    name: "Your videos",
    icon: yourVideosIcon,
    href: "/",
  },
  {
    name: "Watch later",
    icon: watchLaterIcon,
    href: "/",
  },
  {
    name: "Liked videos",
    icon: likedVideosIcon,
    href: "/",
  },
  {
    name: "Downloads",
    icon: downloadsIcon,
    href: "/",
  },
  {
    name: "Your clips",
    icon: yourClipsIcon,
    href: "/",
  },
];

export { sidebarUrls1, sidebarUrls2 };
