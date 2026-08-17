import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div
      style={{
        background: "#F9FAFB",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Sora',sans-serif",
        padding: "20px",
      }}
    >
      <style>{`@keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-16px);}}`}</style>
      <div style={{ textAlign: "center", maxWidth: "480px" }}>
        <div
          style={{
            fontSize: "96px",
            marginBottom: "16px",
            animation: "float 3s ease-in-out infinite",
          }}
        >
          🍽️
        </div>
        <h1
          style={{
            fontSize: "clamp(28px,6vw,56px)",
            fontWeight: 900,
            color: "#111827",
            margin: "0 0 12px 0",
            letterSpacing: "-0.03em",
          }}
        >
          Oops! 404
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "#6B7280",
            margin: "0 0 8px 0",
            fontWeight: 600,
          }}
        >
          Looks like this page got delivered to the wrong address.
        </p>
        <p style={{ fontSize: "15px", color: "#9CA3AF", marginBottom: "32px" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/"
            style={{
              background: "#FF3D00",
              color: "#fff",
              padding: "14px 28px",
              borderRadius: "14px",
              fontWeight: 800,
              fontSize: "15px",
              textDecoration: "none",
              boxShadow: "0 8px 24px rgba(255,61,0,0.35)",
            }}
          >
            🏠 Go Home
          </Link>
          <Link
            to="/search"
            style={{
              background: "#fff",
              color: "#111827",
              padding: "14px 28px",
              borderRadius: "14px",
              fontWeight: 700,
              fontSize: "15px",
              textDecoration: "none",
              border: "2px solid #E5E7EB",
            }}
          >
            🔍 Search Food
          </Link>
        </div>
      </div>
    </div>
  );
}
