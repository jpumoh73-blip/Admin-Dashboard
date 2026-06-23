import { useNavigate } from "react-router-dom";

export default function ProductCard({ product, darkMode }) {
  const navigate = useNavigate();

  const theme = {
    card: darkMode ? "#111827" : "#ffffff",
    text: darkMode ? "#ffffff" : "#111111",
    subText: darkMode ? "#94a3b8" : "#555",
    price: darkMode ? "#22c55e" : "#16a34a",

    // 💜 ONLY in dark mode
    accent: darkMode ? "#6c5ce7" : "#111111",
  };

  return (
    <div
      style={{
        ...styles.card,
        background: theme.card,
        border: darkMode
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid #e5e7eb",
      }}
      onClick={() => navigate(`/product/${product.id}`)}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = darkMode
          ? "0 20px 40px rgba(0,0,0,0.35)"
          : "0 20px 40px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = darkMode
          ? "0 8px 20px rgba(0,0,0,0.25)"
          : "0 6px 15px rgba(0,0,0,0.08)";
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={styles.image}
      />

      <div style={styles.body}>
        <h3 style={{ ...styles.name, color: theme.text }}>
          {product.name}
        </h3>

        <p style={{ ...styles.price, color: theme.price }}>
          ${product.price}
        </p>

        <div style={{ ...styles.meta, color: theme.subText }}>
          <span>⭐ {product.rating}</span>
          <span>📦 In Stock</span>
        </div>

        <button
          style={{
            ...styles.button,
            background: darkMode
              ? "linear-gradient(135deg,#6c5ce7,#3b82f6)"
              : "#111111",
          }}
        >
          View Product →
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    borderRadius: "18px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  image: {
    width: "100%",
    height: "240px",
    objectFit: "cover",
  },

  body: {
    padding: "18px",
  },

  name: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "10px",
  },

  price: {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "12px",
  },

  meta: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    marginBottom: "18px",
  },

  button: {
    width: "100%",
    padding: "12px",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    fontWeight: "600",
    cursor: "pointer",
  },
};