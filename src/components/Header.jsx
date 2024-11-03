import { Link } from "react-router-dom";
import siteLogo from '/Logo.svg';
import cartIcon from '/Cart.svg';

function Header() {
    return <>
        <div className="top-header">
            <Link href="/"><img src={siteLogo} alt="Builtt Test" /></Link>
            <Link href="/cart"><img src={cartIcon} alt="Cart" /></Link>
        </div>
    </>
}

export default Header;