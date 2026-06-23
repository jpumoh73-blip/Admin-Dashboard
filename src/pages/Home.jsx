// pages/Home.jsx
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home({ darkMode, search }) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes((search || "").toLowerCase())
  );

  // 🎨 Theme system
  const theme = {
    background: darkMode ? "#0f1111" : "#f5f6fa",
    text: darkMode ? "#ffffff" : "#111111",
    subText: darkMode ? "#aaa" : "#555",
    card: darkMode ? "#1a1f1f" : "#ffffff",

    // 💜 Purple ONLY in dark mode
    accent: darkMode ? "#6c5ce7" : "#e0e0e0",
  };

  return (
    <div
      style={{
        ...styles.page,
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      {/* HERO SECTION */}
      <div
        style={{
          ...styles.hero,
          background: theme.card,
        }}
      >
        <h1 style={{ color: theme.text }}>
          Welcome to Mini Amazon 🛒
        </h1>

        <p style={{ color: theme.subText }}>
          Best deals on shoes, gadgets & fashion — all in one place.
        </p>

        {/* Accent line */}
        <div
          style={{
            ...styles.accentLine,
            background: theme.accent,
          }}
        />
      </div>

      {/* SECTION HEADER */}
      <div style={styles.sectionHeader}>
        <h2 style={{ color: theme.text }}>
          🔥 Trending Products
        </h2>

        <p style={{ color: theme.subText }}>
          {filteredProducts.length} items found
        </p>
      </div>

      {/* PRODUCT GRID */}
      <div style={styles.grid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              darkMode={darkMode}
            />
          ))
        ) : (
          <div style={styles.empty}>
            <h2 style={{ color: theme.text }}>
              No products found 😢
            </h2>
            <p style={{ color: theme.subText }}>
              Try searching something else
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "20px",
    transition: "all 0.3s ease",
  },

  hero: {
    padding: "25px",
    borderRadius: "12px",
    marginBottom: "25px",
    transition: "all 0.3s ease",
  },

  accentLine: {
    width: "60px",
    height: "4px",
    marginTop: "10px",
    borderRadius: "4px",
  },

  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },

  empty: {
    gridColumn: "1 / -1",
    textAlign: "center",
    padding: "50px 0",
  },
};