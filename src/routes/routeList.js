import CatagoriesWide from '../components/pages/categories-wide';
import Home from '../components/pages/home';
import PageNotFound from '../components/pages/PageNotFound';
import OrderHistory from '../components/pages/orderHistory';
import Wishlist from '../components/pages/wishlist/Wishlist';
import Cart from '../components/pages/cart/Cart';
import AboutUs from '../components/pages/aboutUs';
import PageSList from '../components/pages/pages-list/PageList';
import Account from '../components/pages/account/Account';
import Address1 from '../components/pages/address/Address1';
import DeliveryAddress from '../components/pages/address/DeliveryAddress';
import Payment from '../components/pages/payment/payment';
import CategoriesClassic from '../components/pages/categories-classic';

export const ROUTE_DATA = [
  { path: `${process.env.PUBLIC_URL}`, comment: <Home /> },
  { path: `${process.env.PUBLIC_URL}/category-wide`, comment: <CatagoriesWide /> },
  { path: `${process.env.PUBLIC_URL}/order-history`, comment: <OrderHistory /> },
  { path: `${process.env.PUBLIC_URL}/my-wishlist`, comment: <Wishlist /> },
  { path: `${process.env.PUBLIC_URL}/my-cart`, comment: <Cart /> },
  { path: `${process.env.PUBLIC_URL}/about-us`, comment: <AboutUs /> },
  { path: `${process.env.PUBLIC_URL}/page-list`, comment: <PageSList /> },
  { path: `${process.env.PUBLIC_URL}/account`, comment: <Account /> },
  { path: `${process.env.PUBLIC_URL}/address1`, comment: <Address1 /> },
  { path: `${process.env.PUBLIC_URL}/delivery-address`, comment: <DeliveryAddress /> },
  { path: `${process.env.PUBLIC_URL}/payment`, comment: <Payment /> },
  { path: `${process.env.PUBLIC_URL}/category-classic`, comment: <CategoriesClassic /> },
  { path: `${process.env.PUBLIC_URL}/*`, comment: <PageNotFound /> },
];
