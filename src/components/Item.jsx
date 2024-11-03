import { useState } from "react";

function Item(input) {
    const [image, setImage] = useState(input.item.product.image)
    const fetchImage = async () => {
        try {
            if (input.item.product.image) {
                const response = await import(`../assets/product-images/${input.item.product.image}.jpg`);
                setImage(response.default);
            }
        } catch (error) {
            console.log(error);
        }   
    }
    fetchImage();
    return <>
        <div className="product-item">
            <img src={image} alt={input.item.product.name} />
            <h3>{input.item.product.name}</h3>
            <div className="price">
                <span>{input.item.product.price}<sup>RSD</sup></span>
            </div>
        </div>
    </>
}

export default Item;