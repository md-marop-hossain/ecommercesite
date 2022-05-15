import React from 'react';
import './DisplayMonitor.css';
import Button from "@material-tailwind/react/Button";
import { Link } from 'react-router-dom';

const DisplayMonitor = (props) => {
    const { _id, title, image, price, screenSize, displayType, resolution, warrantyInformation } = props.monitor || {};

    return (
        <div class="w-full  md:mx-2 mb-4 md:mb-0  ">
            <div class="bg-white rounded-lg overflow-hidden shadow relative  card-height ">
                <img class="h-56 w-full object-cover object-center" src={image} alt="" />
                <div class="p-4 h-auto md:h-40 lg:h-48  ">

                    <h6>{title}</h6>
                    <div class=" text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                        <p>Screen Size : {screenSize}</p>
                        <p>DisplayType : {displayType}</p>
                        <p>Resolution : {resolution}</p>
                        <p>{warrantyInformation}</p>
                        <p>Price : {price}</p>
                    </div>
                    <div class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                    </div>
                    <Button color="blueGray" size="lg" ripple="light">
                        <Link to={`/details/${_id}`}>
                            <button onClick="window.location.reload();" className="single-page-button"> purchase  </button>
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DisplayMonitor;