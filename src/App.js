import React from 'react';
import AddressProvider from './context/addressContext/AddressProvider';
import CartProvider from './context/cartContext/CartProvider';
import OfferProvider from './context/offerContext/OfferProvider';
import OrderHistoryProvider from './context/order-history/orderHistoryProvider';
import WishlistProvider from './context/wishlistContext/WishlistProvider';
import Routers from './routes/Routers';

function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <AddressProvider>
          <OfferProvider>
            <OrderHistoryProvider>
              <Routers />
            </OrderHistoryProvider>
          </OfferProvider>
        </AddressProvider>
      </CartProvider>
    </WishlistProvider>
  );
}
export default App;
