import React from 'react';
import Button from "@material-tailwind/react/Button";
import { Link } from 'react-router-dom';
import './DisplayTablet.css';

const DisplayTablet = (props) => {
    const { _id, title, image, brand, model, price, regularprice, productcode,
        processor, connectivitymode, displaytype, displaysize, displayresolution, frontcamera,
        ram, storage, battery, simcardtype, cardslot, sound, color, dimension, weight, operatingsystem,
        warrenty } = props.tablet || {};
    return (
        <div class="w-full  md:mx-2 mb-4 md:mb-0  ">
            <div class="bg-white rounded-lg overflow-hidden shadow relative  card-height ">
                <img class="h-56  object-cover object-center" src={image} alt="WebP rules." />
                <div class="p-4 h-auto md:h-40 lg:h-48  ">

                    <h6>{title}</h6>
                    <div class=" text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">

                        <p>Display Size : {displaysize}</p>
                        <p>Processor : {processor}</p>
                        <p>Battery : {battery}</p>
                        <p>{warrenty}</p>
                        <p>Price : {price}</p>


                    </div>
                    <div class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                        {/* <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#something</a>
                    <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#sky</a> */}
                    </div>

                    <Button color="blueGray" size="lg" ripple="light">
                        <Link to={`/tabletDetails/${_id}`}>
                            <button onClick="window.location.reload();" className="single-page-button"> purchase  </button>
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DisplayTablet;