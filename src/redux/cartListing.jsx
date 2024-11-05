import { useSelector } from "react-redux";
import CartAdder from "./cartAdder";

const CartListing = () => {
    let customer = useSelector((state) => state.customer);

    return <>
        {   
            customer.cart.map((item, index)=> {
                return <div key="index" className="cart-item">
                            <div className="cart-image">
                                <img src={"/product-images/" + item.image + ".jpg"} alt="" />
                            </div>
                            <div className="cart-item-content">
                                <div className="cart-item-info">
                                    <h3>{item.name}</h3>
                                </div>
                                <div className="price">
                                    <span>{item.price}</span>&nbsp;<sup>RSD</sup>
                                </div>
                                <div className="cart-qty-update">
                                    <CartAdder cartInput={item} type="cart" />
                                </div>
                            </div>
                        </div>
            })
        }
    </>
}

export default CartListing;