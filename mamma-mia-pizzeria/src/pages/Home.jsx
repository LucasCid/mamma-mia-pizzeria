/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import PizzaCard from '../components/PizzaCard';
import { PizzaContext } from '../contexts/Pizzacontext';

const Home = () => {
  const { pizzas } = useContext(PizzaContext);

  return (
    <div className="home">
      <h1>Nuestras Pizzas</h1>
      <div className="pizza-list">
        {pizzas.map(pizza => (
          <PizzaCard key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default Home;
