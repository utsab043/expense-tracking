const Navbar = () => {
  return (
    <header className="flex container">
      <span>
        <img src="/vite.svg" />
      </span>
      <nav>
        <ul className="header-nav flex">
          <li>SERVICES</li>
          <li>ABOUT</li>
          <li><button>Signin</button></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar