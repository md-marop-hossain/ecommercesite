import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useCart from '../../../../hooks/useCart';
import { addToDb } from '../../../utilities/fakedb';
import Cart from '../../Cart/Cart';
import DisplayTablet from '../displayTablet/DisplayTablet';

const TabletDetails = () => {
    const { id } = useParams();
    const [specificOrders, setSpecificOrders] = useState([]);
    const [cart, setCart] = useCart(specificOrders);
    useEffect(() => {
        fetch('https://lit-escarpment-04985.herokuapp.com/tabletCollection')
            .then(res => res.json())
            .then(data => {
                setSpecificOrders(data)
            });
    }, [id]);

    const specificeTabletService = specificOrders.find(t => t._id == id);
    const similarTabletService = specificOrders.filter(ft => ft._id != id);
    const { _id, title, image, brand, model, price, regularprice, productcode,
        processor, connectivitymode, displaytype, displaysize, displayresolution, frontcamera,
        ram, storage, battery, simcardtype, cardslot, sound, color, dimension, weight, operatingsystem,
        warranty, tabletid } = specificeTabletService || {};
    const handleAddToCart = (product) => {
        console.log("product.........", product._id);
        const exists = cart.find(pd => pd._id === product._id);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd._id !== product._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product._id);
    }
    return (
        <div className='mt-4'>
            <Container>
                <div className="grid grid-cols-2 gap-4">
                    <div class="card mb-3" className="mxWidth" >
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={image} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{title}</h5>
                                    <p class="card-text">Brand : {brand}</p>
                                    <p class="card-text">Model : {model}</p>
                                    <p class="card-text">{displaytype} {displaysize}display</p>
                                    <p class="card-text">Ram : {ram}, Rom : {storage} </p>
                                    <p class="card-text">Processor: {processor} </p>
                                    <p class="card-text fw-light">Regular Price : {regularprice}</p>
                                    <p class="card-text fw-bold">Price : {price}</p>
                                    <p class="card-text">{warranty}</p>
                                    <Button className="btn btn-danger" >Buy Now</Button> <span></span>
                                    <Button
                                        onClick={() => handleAddToCart(specificeTabletService)}
                                        className="btn btn-primary" >Add to Cart</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Cart cart={cart}>
                            <Link to="/">
                                <button className="btn-regular">Review Your Order</button>
                            </Link>

                        </Cart>
                    </div>
                </div>
            </Container>
            <Container>
                <div>
                    <Container>
                        <div className="desc-title w-100">
                            <p className="mx-auto text-center fw-bold h4">Product Description</p>
                        </div>
                        <div>
                            <p>Product Code - <b>{productcode}</b></p>
                            <p>Tablet Id - <b>{tabletid}</b></p>
                            <p> {title}</p>
                            <p>Brand - {brand}</p>
                            <p> Front Camera - {frontcamera}</p>
                            <p>Connectivity mode - {connectivitymode}</p>
                            <p>Battery - {battery}</p>
                            <p>Sim Card Type - {simcardtype}</p>
                            <p>Card Slot - {cardslot}</p>
                            <p>Sound - {sound}</p>
                            <p>Color - {color}</p>
                            <p>Operating System - {operatingsystem}</p>
                            <p>Resolution - {displayresolution}</p>
                            <p>Dimension - {dimension}</p>
                            <p>Weight - {weight}</p>
                            <p>{warranty}</p>
                        </div>
                    </Container>
                </div>
                <div>
                    <div>
                        <div className="desc-title-t w-100 mb-4">
                            <p className="mx-auto text-center fw-bold h2">Similar Products</p>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-4 gap-4 sm:grid-cols-1 md:grid-cols-2">
                        {
                            similarTabletService.slice(0, 4).map(tablet =>
                                <DisplayTablet
                                    key={tablet._id}
                                    tablet={tablet}
                                >

                                </DisplayTablet>
                            )
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TabletDetails;