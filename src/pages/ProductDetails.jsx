import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const { addToCart } = useContext(CartContext);

  if (!product) return <h2>Not found</h2>;

  
    return (
  <div style={{ display: "flex", gap: 20, padding: 20 }}>
    <img
      src={product.image}
      alt={product.name}
      style={{ width: 300 }}
    />

    <div>
      <h2>{product.name}</h2>

      <p>⭐ {product.rating}/5</p>

      <p>
        <strong>Category:</strong> {product.category}
      </p>

      <p>{product.description}</p>

      <h3>${product.price}</h3>

      <p>
        <del>${product.price + 30}</del>
        <span style={{ color: "red", marginLeft: "10px" }}>
          Save $30
        </span>
      </p>

      <p style={{ color: "green" }}>
        📦 {product.stock}
      </p>

      <p>🚚 {product.delivery}</p>

      <p>🔄 30-Day Return Policy</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  </div>
  
  );
}