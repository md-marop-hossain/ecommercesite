import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useCart from '../../../../hooks/useCart';
import { removeFromDb } from '../../../utilities/fakedb';
import Cart from '../../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './OrderReview.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Footer from '../../../Shared/Footer/Footer';

const OrderReview = () => {
    const [monitors, setMonitors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/monitorCollection')
            .then(res => res.json())
            .then(data => setMonitors(data));
    }, []);

    const [cart, setCart] = useCart(monitors);
    const history = useHistory();

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handleProceedToShipping = () => {
        // setCart([]);
        // clearTheCart();
        history.push('/shipping');
    }

    return (

        <div>
            <div className='grid grid-cols-4 gap-4'>
                <div className='col-span-3 '>

                    {
                        cart.map(monitor => <ReviewItem
                            key={monitor.key}
                            monitor={monitor}
                            handleRemove={handleRemove}

                        >


                        </ReviewItem>)
                    }


                </div>

                <div className='cart-space'>

                    <Cart cart={cart}>
                        <Stack direction="row" spacing={2}>
                            <Button
                                onClick={handleProceedToShipping}
                                variant="outlined" endIcon={<SendIcon />}>
                                Proceed to Shipping
                            </Button>
                        </Stack>
                    </Cart>

                </div>


            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>

    );
};

export default OrderReview;