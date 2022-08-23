import React from 'react';
import AddressProvider from './context/addressContext/AddressProvider';
import CartProvider from './context/cartContext/CartProvider';
import WishlistProvider from './context/wishlistContext/WishlistProvider';
import Routers from './routes/Routers';

function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <AddressProvider>
          <Routers />
        </AddressProvider>
      </CartProvider>
    </WishlistProvider>
  );
}
export default App;
