import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </div>
  );
};

export default NavigationBar;
