import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQty } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: 10 }}>
          <h4>{item.name}</h4>
          <p>${item.price}</p>

          <input
            type="number"
            value={item.quantity}
            onChange={(e) =>
              updateQty(item.id, Number(e.target.value))
            }
          />

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ${total}</h3>
    </div>
  );
}