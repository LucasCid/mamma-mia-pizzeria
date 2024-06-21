import { useContext } from 'react';
import { PizzaContext } from '../contexts/Pizzacontext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(PizzaContext);
  const total = cart.reduce((sum, pizza) => sum + pizza.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.map(pizza => (
        <div key={pizza.id} className="cart-item">
          <img src={pizza.img} alt={pizza.name} />
          <h4>{pizza.name}</h4>
          <p>Price: {pizza.price}</p>
          <button onClick={() => removeFromCart(pizza.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: {total}</h3>
    </div>
  );
};

export default Cart;
