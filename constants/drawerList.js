import CreateIcon from "@material-ui/icons/Create";
import DescriptionIcon from "@material-ui/icons/Description";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import SettingsIcon from "@material-ui/icons/Settings";

const drawerList = [
  {
    title: "Write a Post",
    href: "/create",
    icon: <CreateIcon color="secondary" />,
  },
  {
    title: "Posts",
    href: "/posts",
    icon: <DescriptionIcon color="secondary" />,
  },
  {
    title: "Bookmarks",
    href: "/bookmarks",
    icon: <BookmarkBorderIcon color="secondary" />,
  },
  // {
  //   title: "Setting",
  //   href: "/setting",
  //   icon: <SettingsIcon color="secondary" />,
  // },
];

export default drawerList;
