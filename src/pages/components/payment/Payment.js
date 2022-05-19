import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Payment.css';

const stripePromise = loadStripe('pk_test_51KyxvoFvWWhUeq9Tf6Hg07y9Zp4JgoaUCn0f9OZEVp9z0Lp399N4uwVV7CymXQKsYVonZUMxS1N8ns2VEat1UGry003YWsG11J');

const Payment = () => {
    const { productId } = useParams();
    const [productPurchases, setProductPurchases] = useState({});
    useEffect(() => {

        fetch(`https://lit-escarpment-04985.herokuapp.com/orders/${productId}`)
            .then(res => res.json())
            .then(data => setProductPurchases(data));

    }, [productId])

    const { title, image, regularPrice, productCode, brand, panelType, screenSize, displayType, resolution, brightness } = productPurchases || {};
    return (
        <div>
            <div className='flex justify-center'>
                <Card sx={{ maxWidth: 500 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image={image}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <p><b>Product Code : </b> {productCode}</p>
                                <p><b>Brand : </b> {brand}</p>
                                <p><b>Screen Size : </b> {screenSize}</p>
                                <p><b>Panel Type : </b> {panelType}</p>
                                <p><b>Display Type : </b> {displayType}</p>
                                <p><b>Resolution : </b> {resolution}</p>
                                <p><b>Brightness : </b> {brightness}</p>
                                <p><b>Regular Price : </b>${regularPrice}</p>
                                <p className='text-emerald-600 payable-price'><i><b>Payable Price : </b>${regularPrice}</i></p>

                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            <div className='flex justify-center'>
                <div className=' mt-5 w-50 cart-style'>
                    <div>
                        {
                            productPurchases?.regularPrice && <Elements stripe={stripePromise}>
                                <CheckOutForm

                                    productPurchases={productPurchases}

                                />
                            </Elements>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;