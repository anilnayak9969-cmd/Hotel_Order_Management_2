import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../contex/CartContext";
import { useAuth } from "../../contex/AuthContext";

function Navbar1({ onOpenSidebar }) {
  const { totalItems, setCartOpen } = useCart();
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .nav-cart-btn { position:relative; background:none; border:none; cursor:pointer; font-size:20px; padding:4px 8px; transition:transform 0.2s; }
        .nav-cart-btn:hover { transform:scale(1.15); }
        .cart-badge { position:absolute; top:-4px; right:-4px; background:#FF3D00; color:#fff; width:18px; height:18px; border-radius:50%; font-size:10px; font-weight:800; display:flex; align-items:center; justify-content:center; animation:badgePop 0.3s ease; }
        @keyframes badgePop { 0%{transform:scale(0);} 70%{transform:scale(1.3);} 100%{transform:scale(1);} }
        .search-bar-nav { display:flex; align-items:center; gap:6px; background:#F9FAFB; border:1px solid #E5E7EB; border-radius:10px; padding:6px 14px; cursor:pointer; transition:border-color 0.2s; color:#9CA3AF; font-size:14px; font-family:'Sora',sans-serif; }
        .search-bar-nav:hover { border-color:#FF3D00; color:#374151; }
        .user-avatar { width:32px; height:32px; borderRadius:50%; background:#FF3D00; color:#fff; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:13px; cursor:pointer; border:none; }
      `}</style>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white shadow-sm"
        style={{ borderBottom: "1px solid #F3F4F6" }}
      >
        <div className="container-fluid px-4">
          <button
            onClick={onOpenSidebar}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "22px",
              marginRight: "8px",
              color: "#111827",
            }}
          >
            ☰
          </button>
          <Link
            to="/"
            className="navbar-brand d-flex align-items-center gap-2 fw-bold"
            style={{ color: "#111827", textDecoration: "none" }}
          >
            <span
              style={{
                background: "#FF3D00",
                color: "#fff",
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
              }}
            >
              🍴
            </span>
            FoodRush
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarOne"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarOne">
            <div
              className="mx-auto"
              style={{ maxWidth: "360px", width: "100%" }}
            >
              <div
                className="search-bar-nav"
                onClick={() => navigate("/search")}
              >
                <span>🔍</span>
                <span>Search for restaurants or dishes...</span>
              </div>
            </div>
            <ul className="navbar-nav mb-2 mb-lg-0">
              {[
                ["/", "Home"],
                ["/about", "About"],
                ["/services", "Services"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li className="nav-item" key={to}>
                  <NavLink
                    className="nav-link"
                    to={to}
                    end={to === "/"}
                    style={{ fontSize: "14px", fontWeight: 600 }}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="d-flex align-items-center gap-2 ms-lg-3 mt-3 mt-lg-0">
              <button
                className="nav-cart-btn"
                onClick={() => setCartOpen(true)}
              >
                🛒
                {totalItems > 0 && (
                  <span className="cart-badge">{totalItems}</span>
                )}
              </button>
              {isLoggedIn ? (
                <div className="d-flex align-items-center gap-2">
                  <Link to="/dashboard" style={{ textDecoration: "none" }}>
                    <button className="user-avatar">
                      {user?.name?.[0]?.toUpperCase() || "👤"}
                    </button>
                  </Link>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => {
                      logout();
                      navigate("/");
                    }}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <Link className="btn btn-outline-danger btn-sm" to="/login">
                    Sign In
                  </Link>
                  <Link className="btn btn-danger btn-sm" to="/register">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar1;
