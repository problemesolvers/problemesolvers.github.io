import { NavLink } from "react-router-dom";

function Navbar({ handleActiveNavToggle }) {
  return (
    <>
      {[
        { label: "Home", route: "", href: "/" },
        { label: "About", route: "about", href: "/about" },
        { label: "Docs", route: "docs", href: "/docs" },
      ].map((link, index) => (
        <NavLink
          className={(data) =>
            data.isActive ? "anchor-text active" : "anchor-text"
          }
          key={`nav-links-${index}`}
          onClick={handleActiveNavToggle}
          to={`/${link.route}`}
          style={{ fontWeight: 300, textAlign: "left" }}
        >
          {link.label}
        </NavLink>
      ))}
    </>
  );
}
export default Navbar;
