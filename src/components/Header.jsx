import { Link } from "react-router-dom";
import siteLogo from '/Logo.svg';
import cartIcon from '/Cart.svg';

function Header() {
    return <>
        <div className="top-header">
            <Link to="/"><img src={siteLogo} alt="Builtt Test" /></Link>
            <Link to="/cart"><img src={cartIcon} alt="Cart" /></Link>
        </div>
    </>
}

export default Header;