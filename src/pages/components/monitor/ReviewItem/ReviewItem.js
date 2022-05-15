import React from 'react';
import './ReviewItem.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../../Shared/Footer/Footer';

const ReviewItem = (props) => {

    const { brand, brightness, colourSupport, contrastRatio, displayType, image, monitorID, panelType, price, productCode, refreshRate, regularPrice, resolution, responseTime, screenSize, title, warrantyInformation, _id, quantity } = props.monitor || {};

    const { handleRemove } = props;

    const notify = () => toast.success('Item successfully deleted. please refresh the current page to see your remaining order', {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    return (
        <div>
            <div class="flex justify-center m-5 ">
                <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg ">
                    <img class=" w-full h-100 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={image} alt="" />
                    <div class="p-6 flex flex-col justify-start">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                        <p class="text-gray-700 text-base mb-4">

                            <p class="">Brand : {brand}</p>
                            <p class="">Resolution : {resolution}</p>
                            <p class="">{displayType} {screenSize} display</p>
                            <p class=" fw-light">Regular Price : {regularPrice}</p>
                            <p class=" fw-bold">Price : {price}</p>
                            <p class=" fw-bold"><i>Quantity: {quantity}</i></p>
                            <p class="">{warrantyInformation}</p>

                        </p>
                        <div>
                            <Stack direction="row" spacing={2}>
                                <Button onClick={() => { handleRemove(_id); notify() }} variant="outlined" startIcon={<DeleteIcon />}>
                                    remove item
                                </Button>
                                <ToastContainer
                                    position="top-center"
                                    autoClose={4000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                />
                            </Stack>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;