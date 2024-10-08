import CartWidget from "./CartWidget"
import Logo from "../../assets/logo.png"
import "./navbar.css"


const NavBar = () => {
  return (
    <nav className="navbar">
        <div >
          <img className="logo" src={Logo} alt="Logo" />
        </div>

        <ul>
            <li>Camisetas</li>
            <li>Remeras</li>
            <li>Pantalones</li>
            <li>Accesorios</li>
        </ul>


        <CartWidget />
    </nav>
  )
}

export default NavBar