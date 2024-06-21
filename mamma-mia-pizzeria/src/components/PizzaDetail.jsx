import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PizzaContext } from '../contexts/Pizzacontext';
import '../index.css'

const PizzaDetail = () => {
  const { id } = useParams();
  const { pizzas, addToCart } = useContext(PizzaContext);
  const pizza = pizzas.find(p => p.id === id);

  if (!pizza) {
    return <div>Pizza not found</div>;
  }

  return (
    <div className="pizza-detail">
      <img src={pizza.img} alt={pizza.name} />
      <h3>{pizza.name}</h3>
      <p>{pizza.desc}</p>
      <p>Precio: ${pizza.price}</p>
      <button onClick={() => addToCart(pizza)}>Agregar</button>
    </div>
  );
};

export default PizzaDetail;
