import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 18,
        textAlign: "center",
        padding: "0 24px",
      }}
    >
      <h1 style={{ fontSize: "5rem", color: "var(--teal)" }}>404</h1>
      <p style={{ color: "var(--slate)", maxWidth: 420 }}>
        This page wandered off somewhere — let's get you back to the
        portfolio.
      </p>
      <Link to="/" className="btn btn-outline">
        Back to Home
      </Link>
    </div>
  );
}
