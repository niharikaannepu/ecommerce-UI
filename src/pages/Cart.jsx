import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map(item => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>₹ {item.price}</p>

          <button onClick={() => decreaseQty(item.id)}>-</button>
          {item.quantity}
          <button onClick={() => increaseQty(item.id)}>+</button>

          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ₹ {total}</h3>
    </div>
  );
};

export default Cart;
