import { CircularProgress } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';

import './CheckOutForm.css';
const CheckOutForm = ({ productPurchases }) => {
    const { regularPrice, title, _id } = productPurchases;
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();


    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ regularPrice })
            })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))

    }, [regularPrice])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        setProcessing(true);

        const { error, paymentMethod } = await stripe.createPaymentMethod({

            type: 'card',
            card
        });
        if (error) {
            setError(error.message);
            setSuccess('');
        }
        else {
            setError('');
            console.log(paymentMethod);
        }

        //payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: title,
                        email: user.email
                    },
                },
            },
        );



        if (intentError) {
            setError(intentError.message);
            setSuccess('');
        }
        else {
            setError('');
            setSuccess('Your payment processed successfully.');
            console.log(paymentIntent);
            setProcessing(false);

            //save to database
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transaction: paymentIntent.client_secret.slice('_secret')[0]
            }

            const url = `http://localhost:5000/orders/${_id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }


    }
    return (
        <div>
            <div>
                <h5 className='payment-gateway flex justify-center'><u>payment gateway</u> </h5>
            </div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                    // border: '2px solid red'
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {
                    processing ? <div className='flex justify-center'><CircularProgress></CircularProgress></div> : <Stack direction="row" spacing={2}>
                        <Button
                            className='mt-5 mb-4'
                            type="submit"
                            disabled={!stripe}
                            variant="outlined" endIcon={<SendIcon />}>
                            pay ${regularPrice}
                        </Button>
                    </Stack>
                }
            </form>
            {
                error && <Stack sx={{ width: '50%' }} spacing={2}>
                    <Alert severity="error">{error}</Alert>
                </Stack>
            }
            {
                success && <Stack sx={{ width: '50%' }} spacing={2}>
                    <Alert severity="success">{success}</Alert>
                </Stack>
            }
        </div>
    );
};



export default CheckOutForm;

{/* <button type="submit" className='' disabled={!stripe}>
                        pay ${regularPrice}
                    </button> */}