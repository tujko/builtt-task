import { useState } from "react";
import CartAdder from "../redux/cartAdder";

function Item(input) {
    const [image, setImage] = useState(input.item.product.image)
    const fetchImage = async () => {
        try {
            if (input.item.product.image) {
                const response = await import(`../assets/product-images/${input.item.product.image}.jpg`);
                if(response.default) {
                    setImage(response.default);
                }
            }
        } catch (error) {
            console.log(error);
        }   
    }
    fetchImage();
    return <>
        <div className="product-item">
            <div className="image-container">
                <img src={image} alt={input.item.product.name} />
                <CartAdder cartInput={input} type="list" />
            </div>
            <h3>{input.item.product.name}</h3>
            <div className="price">
                <span>{input.item.product.price}</span>&nbsp;<sup>RSD</sup>
            </div>
        </div>
    </>
}

export default Item;