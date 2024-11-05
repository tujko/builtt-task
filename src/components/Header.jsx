import { Link } from "react-router-dom";
import CartLength from '../redux/cartLength';
import siteLogo from '/Logo.svg';
import cartIcon from '/Cart.svg';

function Header() {
    return <>
        <div className="top-header">
            <Link to="/"> <img src={siteLogo} alt="Builtt Test" /></Link>
            <Link to="/cart" className="header-cart-btn">
                <img src={cartIcon} alt="Cart" />
                <CartLength></CartLength>
            </Link>
        </div>
    </>
}

export default Header;