import { useSelector } from 'react-redux';

const CartLength = () => {
    let cart = useSelector((state) => state.customer.cart)
    return <>
        <span>{(cart && cart.length > 0)?cart.length:''}</span>
    </>;
}

export default CartLength;