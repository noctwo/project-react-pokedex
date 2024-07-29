import { Link } from "react-router-dom";
import "./Header.css"
import { useState } from "react";
import TypeMenu from "../TypeMenu/TypeMenu";
const Header = () => {

    const [menu, setMenu] = useState<boolean>(false);
    const toggleMenu = () =>{
        setMenu(!menu);
    }
    
    return ( 
        <>
            {menu ? (<TypeMenu />) :(
            <header>
            <div className="logo">
                <Link to="/">
                <img src="/img/poke-logo.png"></img>
                </Link>
            </div>
            <div className="nav-content">
                <div className="menu" onClick={toggleMenu}>
                <img src="/img/bars.svg"></img>
                </div>
                <div className="search">
                <input type="text" placeholder="search Pokemon"></input>
                </div>
                <div className="darkmode">
                <img src="/img/circle-half-stroke.svg"></img>
                </div>
            </div>
            </header>
            )}
            </>
     );
}
 
export default Header;