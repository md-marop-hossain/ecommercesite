import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import DisplayMonitor from '../displayMonitor/DisplayMonitor';
import "./MonitorDetails.css";
import useCart from '../../../../hooks/useCart';
import { addToDb } from '../../../utilities/fakedb';
import Cart from '../../Cart/Cart';
import { Link } from 'react-router-dom';


const MonitorDetails = () => {

    const { id } = useParams();
    const [specificOrders, setSpecificOrders] = useState([]);

    const [cart, setCart] = useCart(specificOrders);

    useEffect(() => {
        fetch('http://localhost:5000/monitorCollection')
            .then(res => res.json())
            .then(data => {
                setSpecificOrders(data)
            });
    }, [id]);


    const specificeMonitorService = specificOrders.find(t => t._id == id);
    const similarMonitorService = specificOrders.filter(ft => ft._id != id);

    const { brand, brightness, colourSupport, contrastRatio, displayType, image, monitorID, panelType, price, productCode, refreshRate, regularPrice, resolution, responseTime, screenSize, title, warrantyInformation, _id } = specificeMonitorService || {};


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
                                    <p class="card-text">Resolution : {resolution}</p>
                                    <p class="card-text">{displayType} {screenSize} display</p>
                                    <p class="card-text fw-light">Regular Price : {regularPrice}</p>
                                    <p class="card-text fw-bold">Price : {price}</p>
                                    <p class="card-text">{warrantyInformation}</p>
                                    <Button className="btn btn-danger" >Buy Now</Button> <span></span>
                                    <Button
                                        onClick={() => handleAddToCart(specificeMonitorService)}
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
                            <p>Product Code - <b>{productCode}</b></p>
                            <p>Monitor Id - <b>{monitorID}</b></p>
                            <p> {title}</p>
                            <p>Brand - {brand}</p>
                            <p> Brightness - {brightness}</p>
                            <p>Colour Support - {colourSupport}</p>
                            <p>Contrast Ratio - {contrastRatio}</p>
                            <p>Panel Type - {panelType}</p>
                            <p>Refresh Rate - {refreshRate}</p>
                            <p>{responseTime}</p>
                            <p>Display Type - {displayType}</p>
                            <p>Screen Size - {screenSize}</p>
                            <p>Resolution - {resolution}</p>
                            <p>{warrantyInformation}</p>
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
                            similarMonitorService.slice(0, 4).map(monitor =>
                                <DisplayMonitor
                                    key={monitor._id}
                                    monitor={monitor}
                                >

                                </DisplayMonitor>
                            )
                        }
                    </div>
                </div>
            </Container>


        </div>
    );
};

export default MonitorDetails;