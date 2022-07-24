import Home from '../components/home';
import CategoryWide from '../components/categoryWide';

export const routes = [
  { path: `${process.env.PUBLIC_URL}/home`, Component: <Home /> },
  { path: `${process.env.PUBLIC_URL}/category-wide`, Component: <CategoryWide /> },
];
