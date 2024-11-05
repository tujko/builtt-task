import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const CartSummary = () => {
    let cart = useSelector((state) => state.customer.cart);
    let subtotal = 0;
    for (let i=0; i<cart.length; i++) {
        let item = cart[i];
        subtotal += item.qty * item.price;
    }
    return <>
        <div className="summary">
            <div>
                <div>Ukupno</div>
                <div className="price">
                    <span>{subtotal}</span>&nbsp;<sup>RSD</sup>
                </div>
            </div>
            <div className="border-b border-b-middleGray">
                <div>Isporuka Daily Express*</div>
                <div className="text-sm">Besplatna</div>
            </div>
            <div className="border-b border-b-middleGray">
                <div>Ukupno za uplatu</div>
                <div className="price">
                <span>{subtotal}</span>&nbsp;<sup>RSD</sup>
                </div>
            </div>
            <div className="text-sm my-0">Cena je sa uključenim PDV-om</div>
        </div>
        <Link className="btn mt-8" to="/">Prijavi se za brže plaćanje</Link>
    </>;
}

export default CartSummary;