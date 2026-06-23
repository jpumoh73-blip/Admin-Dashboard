import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export default function Navbar({ search, setSearch, darkMode }) {
  const { cart } = useContext(CartContext);

  const theme = {
    navBg: darkMode ? "rgba(15, 17, 17, 0.95)" : "#ffffff",
    text: darkMode ? "#ffffff" : "#111111",
    inputBg: darkMode ? "#1e293b" : "#f1f5f9",
    border: darkMode ? "rgba(255,255,255,0.08)" : "#ddd",

    // 💜 Purple ONLY in dark mode
    accent: darkMode ? "#6c5ce7" : "#111111",
  };

  const handleSearch = () => {
    alert(`Searching for: ${search}`);
  };

  return (
    <div
      style={{
        ...styles.nav,
        background: theme.navBg,
        borderBottom: `1px solid ${theme.border}`,
      }}
    >
      {/* LOGO */}
      <Link
        to="/"
        style={{
          ...styles.logo,
          color: theme.accent,// 💜 Purple ONLY in dark mode
        }}
      >
        🛒 Mini Amazon
      </Link>

      {/* SEARCH */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        style={styles.searchContainer}
      >
        <input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            ...styles.input,
            background: theme.inputBg,
            color: theme.text,
            border: `1px solid ${theme.border}`,
          }}
        />

        <button
          type="submit"
          style={{
            ...styles.button,
            background: theme.inputBg,//SAME as search bar
            color:theme.text,
              border:`1px solid ${theme.border}`,
              }}
        >
          🔍 Search
        </button>
      </form>

      {/* CART */}
      <Link
        to="/cart"
        style={{
          ...styles.cart,
          color: theme.text,
          border: `1px solid ${theme.border}`,
          background: darkMode
            ? "rgba(255,255,255,0.05)"
            : "#f1f5f9",
        }}
      >
        Cart ({cart.length})
      </Link>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    padding: "16px 24px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    transition: "0.3s ease",
  },

  logo: {
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "22px",
  },

  searchContainer: {
    display: "flex",
    flex: 1,
    gap: "10px",
    maxWidth: "800px",
  },

  input: {
    flex: 1,
    padding: "14px 16px",
    borderRadius: "12px",
    outline: "none",
    fontSize: "14px",
  },

  button: {
    padding: "14px 22px",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "600",
  },

  cart: {
    textDecoration: "none",
    fontWeight: "600",
    padding: "10px 16px",
    borderRadius: "12px",
  },
};