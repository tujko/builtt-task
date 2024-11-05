import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import CartListing from "../redux/cartListing";
import CartSummary from "../redux/cartSummary";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Cart() {
    const navigate = useNavigate();
    let loggedIn = useSelector((state) => state.customer.loggedIn);
    let cart = useSelector((state) => state.customer.cart);
    if (!loggedIn || cart.length == 0) {
        useEffect(() => {
            navigate("/");
        });
    }
    return <>
        <Header/>
        <div className="cart">
            <h3>Tvoja korpa</h3>
            <div className="cart-content">
                <div className="cart-list">
                    <CartListing/>
                </div>
                <div className="cart-sidebar">
                    <h3>Tvoja narudžbina</h3>
                    <CartSummary/>
                </div>
            </div>
        </div>
    </>
}

export default Cart;