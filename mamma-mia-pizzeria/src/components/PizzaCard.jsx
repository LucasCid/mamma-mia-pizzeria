/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PizzaContext } from '../contexts/Pizzacontext';
import '../index.css'

const PizzaCard = ({ pizza }) => {
  const { addToCart } = useContext(PizzaContext);

  return (
    <div className="pizza-card">
      <img src={pizza.img} alt={pizza.name} />
      <h3>{pizza.name}</h3>
      {/* <ul><li>{pizza.ingredients.sort()}</li></ul> */}
      <ul>
        {pizza.ingredients.sort().map((ingredient, index) => (
          <li key={index}>&#127829;{ingredient}</li>
        ))}
      </ul>
      <p>Precio: ${pizza.price}</p>
      <button onClick={() => addToCart(pizza)}>Agregar</button>
      <Link to={`/pizza/${pizza.id}`}>Ver Detalles</Link>
    </div>
  );
};

export default PizzaCard;
