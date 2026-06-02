import { useState } from "react";
 
const productsData = [
  {id:1,name:"Air Force Sneakers Shoe",price:120,image:"/images/shoe.jpg"},
  {id:2,name:"Classic Hoodie",price:55,image:"/images/Classichoodie.jpg"},
  {id:3,name:"Smart Watch",price:99,image:"/images/smartwatch.jpg"},
  {id:4,name:"Wireless Headphones",price:80,images:"/images/wireless headphone.jpg"},
  {id:5,name:"Nike T-Shirt",price:30,images:"/images/t-shirt.jpg"},
]

const productsData = [ { id: 1, name: "Air Force Sneakers Shoe ", price: 120, category: "Shoes", image: "https://source.unsplash.com/400x400/?sneakers" }, { id: 2, name: "Classic Hoodie", price: 45, category: "Clothing", image: "https://source.unsplash.com/400x400/?hoodie" }, { id: 3, name: "Smart Watch", price: 99, category: "Gadgets", image: "https://source.unsplash.com/400x400/?smartwatch" }, { id: 4, name: "Wireless Headphones", price: 80, category: "Gadgets", image: "https://source.unsplash.com/400x400/?headphones" }, { id: 5, name: "Nike T-Shirt", price: 30, category: "Clothing", image: "https://source.unsplash.com/400x400/?tshirt" } ];

export default function App() { export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🛍️ My Pro Shop</h1>
      
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        
        {productsData.map(product => (
          <div 
            key={product.id} 
            style={{ border: "1px solid #ddd", padding: "10px", width: "200px" }}
          >
            <img 
              src={product.image} 
              alt={product.name}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}

      </div>
    </div>
  )
} }