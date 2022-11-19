import CarWidget from "../CarWidget/CarWidget";
import "./NavBar.css" ;
import { Link } from "react-router-dom";
function NavBar () {
    return (
        <div>
            <div className="Nav-Bar">
            <ul className="nav justify-content-center">
            <li className="nav-item">
            <Link to='/'><img src="https://res.cloudinary.com/ddnw5orwf/image/upload/v1667861756/logos/logo4_mji8x4.png"/></Link>
                </li>

  <button className="categoriasBoton  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Categorias
  </button>
  <ul className="dropdown-menu">
    <li><Link to="/category/cd" className="dropdown-item">Discos</Link></li>
    <li><Link to="/category/vinillo" className="dropdown-item">Vinilllos</Link></li>
    <li><Link to="/category/cassette" className="dropdown-item">Cassettes</Link></li>
  </ul>
  <li> <CarWidget/> </li>
            </ul>
            </div>
        </div>
    )
}

export default NavBar ;