import logo from "./Asset/logo.svg"
import dropdown from "./Asset/dropdown.svg"
import { Link } from "react-router-dom";
import "./Css/Nav.css"

function Nav(){
    return(
        <nav>
          <div className="logo">
                <Link to={"/"}><img src={logo} width={277} height={81}/></Link>
          </div>
          <div className="Menu">
            <div className="ModelDropdown">
                  <Link className="Model">Model <img src={dropdown} width={24} height={24} alt="Dropdown"/></Link>
                  <div className="DropdownContent">
                    <Link to="/lung">Lung</Link>
                  </div>
            </div>
            <Link>Services</Link>
            <Link>About</Link>
            <Link>Contact</Link>
          </div>
      </nav>
    )
}

export default Nav;