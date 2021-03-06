import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const navList = [
  { path: "/", name: "Start", exact: true },
  { path: "/add", name: "Dodaj" },
  { path: "/list", name: "Lista" },
];

const Navigation = () => {
  const menu = navList.map((item) => (
    <li key={item.name}>
      <NavLink exact={item.exact} to={item.path}>
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className="navBar">
      <ul>{menu}</ul>
    </nav>
  );
};

export default Navigation;
