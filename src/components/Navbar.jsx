const Navbar = () => {


    return (
        <nav className='navbar-container'>
        <div className='logo'>
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
        
      <ul className='nav-link-container'>
        <li><a href="#home" className='nav-links'>Home</a></li>
        <li><a href="#location" className='nav-links'>Location</a></li>
        <li><a href="#about" className='nav-links'>About</a></li>
        <li><a href="#contact" className='nav-links'>Contact</a></li>
        </ul>

      <div>
        <button className="login-button">Login</button>
      </div>
      </nav>
    )
}

export default Navbar