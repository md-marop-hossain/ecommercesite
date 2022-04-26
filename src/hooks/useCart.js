import { useState, useEffect } from 'react';
import { getStoredCart } from '../pages/utilities/fakedb';

const useCart = (products) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {

        if (products.length) {
            const savedCart = getStoredCart();
            console.log("...saved cart ", savedCart);
            const storedCart = [];
            console.log("stored..", storedCart);
            for (const key in savedCart) {
                console.log("key..", key);
                const addedProduct = products.find(product => product._id === key);
                console.log("added product...", addedProduct);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
            // console.log('stored Cart..', storedCart);
        }


    }, [products]);
    return [cart, setCart];
};

export default useCart;