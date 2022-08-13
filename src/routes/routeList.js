import CatagoriesWide from '../components/pages/categories-wide';
import Home from '../components/pages/home';
import PageNotFound from '../components/pages/PageNotFound';
import OrderHistory from '../components/pages/orderHistory';
import Wishlist from '../components/pages/wishlist/Wishlist';
import Cart from '../components/pages/cart/Cart';

export const ROUTE_DATA = [
  { path: `${process.env.PUBLIC_URL}`, comment: <Home /> },
  { path: `${process.env.PUBLIC_URL}/category-wide`, comment: <CatagoriesWide /> },
  { path: `${process.env.PUBLIC_URL}/order-history`, comment: <OrderHistory /> },
  { path: `${process.env.PUBLIC_URL}/my-wishlist`, comment: <Wishlist /> },
  { path: `${process.env.PUBLIC_URL}/my-cart`, comment: <Cart /> },
  { path: `${process.env.PUBLIC_URL}/*`, comment: <PageNotFound /> },
];
