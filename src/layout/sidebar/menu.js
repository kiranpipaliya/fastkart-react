import { Grid, Home, Filter, PieChart, Settings, Bell, UserPlus, Bookmark, Heart, FileMinus } from 'react-feather';

export const MENUITEMS = [
  { path: `${process.env.PUBLIC_URL}/`, title: 'Home', type: 'link', icon: <Home /> },
  { path: `${process.env.PUBLIC_URL}/category-wide`, title: 'Shop by Category', type: 'link', icon: <Grid /> },
  { path: `${process.env.PUBLIC_URL}/orders`, title: 'Orders', type: 'link', icon: <FileMinus /> },
  { path: `${process.env.PUBLIC_URL}/page-list`, title: 'Page List', type: 'link', icon: <Heart /> },
  { path: `${process.env.PUBLIC_URL}/wishlist`, title: 'Your Wishlist', type: 'link', icon: <Bookmark /> },
  { path: ``, title: 'Language', type: 'modal', icon: 'flags.png' },
  { path: `${process.env.PUBLIC_URL}/account`, title: 'Your Account', type: 'link', icon: <UserPlus /> },
  { path: `${process.env.PUBLIC_URL}/notification`, title: 'Notification', type: 'link', icon: <Bell /> },
  { path: `${process.env.PUBLIC_URL}/settings`, title: 'Settings', type: 'link', icon: <Settings /> },
  { path: ``, title: 'Rtl', type: 'settingBtn', icon: <PieChart /> },
  { path: ``, title: 'dark', type: 'settingBtn', icon: <Filter /> },
];
