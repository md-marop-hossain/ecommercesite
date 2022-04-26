import React from 'react';
import Button from "@material-tailwind/react/Button";
import { Link } from 'react-router-dom';

const DisplaySpeaker = (props) => {

    const { _id, speakerid, title, image, brand, model, price, regularprice, productcode,
        type, outputpower, signalnoiseratio, frequency, subwoofer, satellite,
        bluetooth, color, subwooferdimension, satellitedimension, weight, warranty } = props.speaker || {};

    return (
        <div class="w-full  md:mx-2 mb-4 md:mb-0  ">
            <div class="bg-white rounded-lg overflow-hidden shadow relative  card-height ">
                <img class="h-56 w-full object-cover object-center" src={image} alt="" />
                <div class="p-4 h-auto md:h-40 lg:h-48  ">

                    <h6>{title}</h6>
                    <div class=" text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">

                        <p>Frequency : {frequency}</p>
                        <p>Output Power : {outputpower}</p>
                        <p>Bluetooth : {bluetooth}</p>
                        <p>{warranty}</p>
                        <p>Price : {price}</p>


                    </div>
                    <div class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">

                    </div>

                    <Button color="blueGray" size="lg" ripple="light">
                        <Link to={`/speakerDetails/${_id}`}>
                            <button onClick="window.location.reload();" className="single-page-button"> purchase  </button>
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DisplaySpeaker;