import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    
    <header className="flex container">
      <span className="flex logo">
        <img src="/vite.svg" />
        <span>Expense Tracker</span>
      </span>
      <nav>
        <ul className="header-nav flex">
          <li><a href="#home">HOME</a></li>
          <li><a href="#service">SERVICES</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li>
            <Link to ='/auth/login'>SIGN IN</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
