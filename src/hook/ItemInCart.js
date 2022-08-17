import React, { useContext, useState, useEffect } from 'react';
import CartContext from '../context/cartContext/cartContext';

const useItemInCart = (id) => {
  const [itemInCart, setItemInCart] = useState(false);
  const [CartItem, setCartItem] = useState(false);

  const cartCtx = useContext(CartContext);
  useEffect(() => {
    const ifItemIsInCart = cartCtx.items.map((item) => item.id).includes(id);
    setItemInCart(ifItemIsInCart);

    if (itemInCart) {
      const cartItemInCart = cartCtx.items.filter((item) => item.id === id);
      setCartItem(...cartItemInCart);
    }
  }, [cartCtx.items, itemInCart]);

  return [itemInCart, CartItem];
};
export default useItemInCart;
