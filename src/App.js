import React from 'react';
import CartProvider from './context/cartContext/CartProvider';
import WishlistProvider from './context/wishlistContext/WishlistProvider';
import Routers from './routes/Routers';

function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <Routers />;
      </CartProvider>
    </WishlistProvider>
  );
}
export default App;
