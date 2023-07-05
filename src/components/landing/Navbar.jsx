const Navbar = () => {
  return (
    <header className="flex container">
      <span className="flex logo">
        <img src="/vite.svg" />
        <span>Expense Tracker</span>
      </span>
      <nav>
        <ul className="header-nav flex">
          <li>SERVICES</li>
          <li>ABOUT</li>
          <li>
            <button>Signin</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
