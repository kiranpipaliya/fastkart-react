import { Grid, Home, Filter, PieChart, Settings, Bell, UserPlus, Heart, FileMinus, FileText } from 'react-feather';

export const ACCOUNT_OPTION = [
  { path: `${process.env.PUBLIC_URL}/`, title: 'Home', type: 'link', icon: <Home /> },
  { path: `${process.env.PUBLIC_URL}/category-wide`, title: 'Shop by Category', type: 'link', icon: <Grid /> },
  { path: `${process.env.PUBLIC_URL}/order-history`, title: 'Orders', type: 'link', icon: <FileMinus /> },
  { path: `${process.env.PUBLIC_URL}/my-wishlist`, title: 'Your Wishlist', type: 'link', icon: <Heart /> },
  { path: ``, title: 'Language', type: 'modal', icon: 'flags.png' },
  { path: `${process.env.PUBLIC_URL}/notification`, title: 'Notification', type: 'link', icon: <Bell /> },
  { path: `${process.env.PUBLIC_URL}/settings`, title: 'Settings', type: 'link', icon: <Settings /> },
  { path: ``, title: 'Rtl', type: 'settingBtn', icon: <PieChart /> },
  { path: ``, title: 'dark', type: 'settingBtn', icon: <Filter /> },
];
