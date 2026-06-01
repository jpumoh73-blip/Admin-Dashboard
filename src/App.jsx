import { useState } from "react";

const productsData = [ { id: 1, name: "Air Force Sneakers", price: 120, category: "Shoes", image: "https://source.unsplash.com/400x400/?sneakers" }, { id: 2, name: "Classic Hoodie", price: 45, category: "Clothing", image: "https://source.unsplash.com/400x400/?hoodie" }, { id: 3, name: "Smart Watch", price: 99, category: "Gadgets", image: "https://source.unsplash.com/400x400/?smartwatch" }, { id: 4, name: "Wireless Headphones", price: 80, category: "Gadgets", image: "https://source.unsplash.com/400x400/?headphones" }, { id: 5, name: "Nike T-Shirt", price: 30, category: "Clothing", image: "https://source.unsplash.com/400x400/?tshirt" } ];

export default function App() { const [cart, setCart] = useState([]); const [search, setSearch] = useState(""); const [selectedProduct, setSelectedProduct] = useState(null);

const addToCart = (product) => { setCart([...cart, product]); };

const removeFromCart = (index) => { setCart(cart.filter((_, i) => i !== index)); };

const filteredProducts = productsData.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()) );

const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

return ( <div style={{ fontFamily: "Arial", padding: "20px", background: "#f5f5f5" }}> {/* Header */} <h1 style={{ textAlign: "center" }}>🛍️ My Pro Shop</h1>

{/* Search */}
  <input
    type="text"
    placeholder="Search products..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    style={{ padding: "10px", width: "100%", marginBottom: "20px" }}
  />

  {/* Product Grid */}
  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px" }}>
    {filteredProducts.map((product) => (
      <div key={product.id} style={{ background: "white", padding: "15px", borderRadius: "10px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
        />
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <p><b>${product.price}</b></p>

        <button
          onClick={() => setSelectedProduct(product)}
          style={{ marginRight: "5px" }}
        >
          View
        </button>

        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    ))}
  </div>

  {/* Product Modal */}
  {selectedProduct && (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.6)", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ background: "white", padding: "20px", borderRadius: "10px", width: "300px" }}>
        <img src={selectedProduct.image} style={{ width: "100%" }} />
        <h2>{selectedProduct.name}</h2>
        <p>{selectedProduct.category}</p>
        <p><b>${selectedProduct.price}</b></p>
        <button onClick={() => addToCart(selectedProduct)}>Add to Cart</button>
        <button onClick={() => setSelectedProduct(null)} style={{ marginLeft: "10px" }}>
          Close
        </button>
      </div>
    </div>
  )}

  {/* Cart */}
  <div style={{ marginTop: "40px", background: "white", padding: "15px", borderRadius: "10px" }}>
    <h2>🛒 Cart</h2>
    {cart.length === 0 ? (
      <p>Your cart is empty</p>
    ) : (
      cart.map((item, index) => (
        <div key={index} style={{ display: "flex", justifyContent: "space-between" }}>
          <p>{item.name} - ${item.price}</p>
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))
    )}
    <h3>Total: ${totalPrice}</h3>
  </div>
</div>

); }