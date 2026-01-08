import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const navLinkStyle = ({ isActive }) =>
    `px-3 py-2 rounded-full transition-colors duration-150
     border border-transparent
     ${
       isActive
         ? "bg-black text-white"
         : "text-black hover:bg-black hover:text-white"
     }`;

  return (
    <header
      className="
        fixed top-0 left-0 z-50 w-full h-14
        bg-white
        border-b border-gray-300
        flex items-center justify-between px-4
      "
    >
      <Link to="/" className="text-black text-2xl font-medium">
        JAGOTENSES
      </Link>

      <nav className="flex gap-4 text-xl font-medium">
        <NavLink to="/lessons" className={navLinkStyle}>
          Lessons
        </NavLink>

        <NavLink to="/quiz" className={navLinkStyle}>
          Quiz
        </NavLink>

        <NavLink to="/about" className={navLinkStyle}>
          About me
        </NavLink>

        <NavLink to="/contact" className={navLinkStyle}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
