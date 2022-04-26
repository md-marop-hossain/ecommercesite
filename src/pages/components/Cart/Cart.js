import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    // const totalReducer = (previous, product) => previous + product.price;
    // const total = cart.reduce(totalReducer, 0);
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 5 : 0;
    const tax = (total + shipping) * 0.01;
    const grandTotal = total + shipping + tax;

    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">

            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Order Summary</div>
                <p class="text-gray-800 text-base"> Items Ordered: {totalQuantity}</p>
                <p class="text-gray-700 text-base">Total: ${total.toFixed(2)}</p>
                <p class="text-gray-700 text-base"> Shipping: ${shipping}</p>
                <p class="text-gray-700 text-base"> tax: ${tax.toFixed(2)}</p>
                <p class="text-gray-700 text-base"> Grand Total: ${grandTotal.toFixed(2)}</p>
                {props.children}

            </div>
        </div>
    );
};

export default Cart;



