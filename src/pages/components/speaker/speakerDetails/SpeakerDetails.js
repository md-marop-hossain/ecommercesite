import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import DisplaySpeaker from '../displaySpeaker/DisplaySpeaker';

const SpeakerDetails = () => {
    const { id } = useParams();
    const [specificOrders, setSpecificOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/speakerCollection')
            .then(res => res.json())
            .then(data => {
                setSpecificOrders(data)
            });
    }, [id]);

    const specificeSpeakerService = specificOrders.find(t => t._id == id);
    const similarSpeakerService = specificOrders.filter(ft => ft._id != id);

    const {
        _id, speakerid, title, image, brand, model, price, regularprice, productcode,
        type, outputpower, signalnoiseratio, frequency, subwoofer, satellite,
        bluetooth, color, subwooferdimension, satellitedimension, weight, warranty
    } = specificeSpeakerService || {};
    return (
        <div>
            <Container>
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
                                <p class="card-text">Signal Noise Ratio : {signalnoiseratio}</p>
                                <p class="card-text">Frequency : {frequency}</p>
                                <p class="card-text">Bluetooth: {bluetooth} </p>
                                <p class="card-text fw-light">Regular Price : {regularprice}</p>
                                <p class="card-text fw-bold">Price : {price}</p>
                                <p class="card-text">{warranty}</p>
                                <Button className="btn btn-danger" >Buy Now</Button> <span></span>
                                <Button className="btn btn-primary" >Add to Cart</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Container>
                        <div className="desc-title w-100">
                            <p className="mx-auto text-center fw-bold h4">Product Description</p>
                        </div>
                        <div>
                            <p>Product Code - <b>{productcode}</b></p>
                            <p>Speaker ID - <b>{speakerid}</b></p>
                            <p> {title}</p>
                            <p>Brand - {brand}</p>
                            <p>Sub Woofer: {subwoofer} </p>
                            <p>Satellite: {satellite} </p>
                            <p>Type - {type}</p>
                            <p>Output Power- {outputpower}</p>
                            <p>Bluetooth - {bluetooth}</p>
                            <p>Signal Noise Ratio - {signalnoiseratio}</p>
                            <p>Frequency - {frequency}</p>
                            <p>Color - {color}</p>
                            <p>Subwoofer Dimension - {subwooferdimension}</p>
                            <p>Satellite Dimension - {satellitedimension}</p>

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
                            similarSpeakerService.slice(0, 4).map(speaker =>
                                <DisplaySpeaker
                                    key={speaker._id}
                                    speaker={speaker}
                                >

                                </DisplaySpeaker>
                            )
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SpeakerDetails;