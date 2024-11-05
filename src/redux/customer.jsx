import { useSelector } from 'react-redux';

const Customer = () => {
    let cart = useSelector((state) => state.customer)
    return cart;
}

export default Customer;