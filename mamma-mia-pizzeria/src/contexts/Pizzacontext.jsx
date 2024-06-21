/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import data from '../data.json';

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setPizzas(data);
  }, []);

  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
  };

  const removeFromCart = (pizzaId) => {
    setCart(cart.filter(p => p.id !== pizzaId));
  };

  return (
    <PizzaContext.Provider value={{ pizzas, cart, addToCart, removeFromCart }}>
      {children}
    </PizzaContext.Provider>
  );
};
