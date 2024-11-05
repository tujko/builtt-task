import { useDispatch } from "react-redux";
import { addToCart, updateCart, removeFromCart } from "./customerSlice"
import { useState } from "react";
import cartIcon from '/CartWhite.svg';

const CartAdder = (data, type) => {
    const dispatch = useDispatch();
    const input = (data.type === "list") ? data.cartInput.item.product : data.cartInput;

    const [qty, setQty] = useState(input.qty);
    const updateCartItem = (q) => {
        dispatch(updateCart({
            sku: input.sku,
            type: "qty",
            value: q
        }));
    };
    const removeCartItem = () => {
        if (input.sku) {
            dispatch(removeFromCart(input.sku));
        }
    };
    const increment = () => {
        let incremented = qty + 1;
        (incremented <= input.qty) && setQty(incremented);
        if (data.type === "cart") {
            updateCart(incremented);
        }
    };
    const decrement = () => {
        let decremented = qty - 1;
        (decremented >= 0) && setQty(decremented);
        if (data.type === "cart") {
            updateCartItem(decremented);
        }
    };
    const addItemToCart = () => {
        const inputItem = {
            sku: input.sku,
            name: input.name,
            image: input.image,
            qty: qty,
            price: input.price
        };
        dispatch(addToCart(inputItem));
    };

    const [image, setImage] = useState(input.image)
    const fetchImage = async () => {
        try {
            if (input.image) {
                const response = await import(`../assets/product-images/${input.image}.jpg`);
                setImage(response.default);
            }
        } catch (error) {
            console.log(error);
        }   
    }
    fetchImage();
    let inputId = "quantity"+input.index;
    
    if (data.type === "cart") {
        return <>
            <div className="add-to-cart">
                <div className="quantity-input-wrapper">
                    <input className="quantity-input" type="number" 
                    id={inputId} name={inputId} value={qty} 
                    onChange={e => setQty(e.target.value)} 
                    min="0" max={input.qty} />
                    <div className="decrement-btn" onClick={decrement}>
                        <span>-</span>
                    </div>
                    <div className="increment-btn" onClick={increment}>
                        <span>+</span>
                    </div>
                </div>
            </div>
            <span className="link" onClick={removeCartItem}>Ukloni</span>
        </>
    } 

    if (data.type === "list") {
        return <>
            <div className="add-to-cart">
                <div className="quantity-input-wrapper">
                    <input className="quantity-input" type="number" 
                    id={inputId} name={inputId} value={qty} 
                    onChange={e => setQty(e.target.value)} 
                    min="0" max={input.qty} />
                    <div className="decrement-btn" onClick={decrement}>
                        <span>-</span>
                    </div>
                    <div className="increment-btn" onClick={increment}>
                        <span>+</span>
                    </div>
                </div>
                <div className="add-to-cart-btn" onClick={addItemToCart}>
                    <img src={cartIcon} />
                </div>
            </div>
        </>
    }

    return <></>
}

export default CartAdder;