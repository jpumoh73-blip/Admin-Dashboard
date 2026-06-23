import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#121212" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        minHeight: "100vh"
      }}
    >
      <BrowserRouter>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            margin: "10px",
            padding: "8px 12px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        <Navbar
           search={search}
            setSearch={setSearch}
            darkMode={darkMode}
          />

        <Routes>
          <Route
           path="/"
          element={<Home darkMode={darkMode} search={search} />}
         />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;