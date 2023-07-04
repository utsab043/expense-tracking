const Navbar = () => {
  return (
    <header>
      <span>
        <img src="/vite.svg" />
      </span>
      <nav>
        <ul className="header-nav">
          <li>SERVICES</li>
          <li>ABOUT</li>
          <li><button>Signin</button></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar