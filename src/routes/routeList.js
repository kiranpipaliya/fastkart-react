import CatagoriesWide from '../components/pages/categories-wide';
import Home from '../components/pages/home';
import PageNotFound from '../components/pages/PageNotFound';

export const ROUTE_DATA = [
  { path: `${process.env.PUBLIC_URL}`, comment: <Home /> },
  { path: `${process.env.PUBLIC_URL}/category-wide`, comment: <CatagoriesWide /> },
  { path: `${process.env.PUBLIC_URL}/*`, comment: <PageNotFound /> },
];
