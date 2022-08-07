import { Home, Grid, Search, ShoppingBag } from 'react-feather';
export const FOOTER_MENU = [
  { path: `${process.env.PUBLIC_URL}/`, title: 'Home', icon: <Home /> },
  { path: `${process.env.PUBLIC_URL}/category-wide`, title: 'Category', icon: <Grid /> },
  { path: `${process.env.PUBLIC_URL}/search`, title: 'Search', icon: <Search /> },
  { path: `${process.env.PUBLIC_URL}/offer`, title: 'Offers', loardIcon: true, icon: 'assets/icons/gift.json' },
  { path: `${process.env.PUBLIC_URL}/Cart`, title: 'Cart', icon: <ShoppingBag /> },
];
