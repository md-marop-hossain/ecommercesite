import React, { useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import DisplayMonitor from '../displayMonitor/DisplayMonitor';
import "./MonitorDetails.css";
import useCart from '../../../../hooks/useCart';
import { addToDb } from '../../../utilities/fakedb';
import Cart from '../../Cart/Cart';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import useAuth from '../../../../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SendIcon from '@mui/icons-material/Send';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Review from '../../../Shared/Review/Review';
import Footer from '../../../Shared/Footer/Footer';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    p: 4,
};
const MonitorDetails = () => {

    const { id } = useParams();
    const { user } = useAuth();
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

    const selectedProductInfo = (key) => {
        const monitorObject = new Object();
        const specificMonitor = specificOrders.find(specificM => specificM._id == key);
        monitorObject.title = specificMonitor.title;
        monitorObject.image = specificMonitor.image;
        monitorObject.price = specificMonitor.price;
        monitorObject.regularPrice = specificMonitor.regularPrice;
        monitorObject.productCode = specificMonitor.productCode;
        monitorObject.brand = specificMonitor.brand;
        monitorObject.panelType = specificMonitor.panelType;
        monitorObject.screenSize = specificMonitor.screenSize;
        monitorObject.displayType = specificMonitor.displayType;
        monitorObject.resolution = specificMonitor.resolution;
        monitorObject.brightness = specificMonitor.brightness;
        monitorObject.responseTime = specificMonitor.responseTime;
        monitorObject.contrastRatio = specificMonitor.contrastRatio;
        monitorObject.colourSupport = specificMonitor.colourSupport;
        monitorObject.refreshRate = specificMonitor.refreshRate;
        monitorObject.user = user.email;
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(monitorObject)
        })
            .then(res => res.json())
            .then(data => {
            }
            )
    }
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const reviewRef = useRef();
    const notify = () => toast.success('Review successfully added. please refresh the current page to see your review', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const handleAddReview = (event) => {
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
        const reviewerName = user.displayName;
        const reviewerEmail = user.email;
        const review = reviewRef.current.value;
        const productId = _id;
        const currentDate = date;
        const currentTime = new Date(new Date().getTime() + 4 * 60 * 60 * 1000).toLocaleTimeString();
        const displayImage = user.photoURL;
        const addCurrentReview = { reviewerName, review, reviewerEmail, productId, currentDate, currentTime, displayImage };
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addCurrentReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    event.target.reset();
                }
            })
        event.preventDefault();

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
                                    <span className='flex '>
                                        {/* <Stack direction="row" spacing={2}>
                                            <Button variant="outlined">Buy Now</Button>
                                        </Stack> */}
                                        <span className='ml-2'>
                                            <Stack direction="row" spacing={2}>
                                                <Button
                                                    onClick={() => {
                                                        handleAddToCart(specificeMonitorService);
                                                        selectedProductInfo(_id)
                                                    }}
                                                    variant="contained">Add to Cart</Button>
                                            </Stack>
                                        </span>
                                    </span>
                                    <p></p>
                                    <span>
                                        <div>
                                            <Stack
                                                onClick={handleOpen}
                                                spacing={2} direction="row">
                                                <Button variant="outlined">Add Product Review</Button>
                                            </Stack>
                                            <Modal
                                                aria-labelledby="transition-modal-title"
                                                aria-describedby="transition-modal-description"
                                                open={open}
                                                onClose={handleClose}
                                                closeAfterTransition
                                                BackdropComponent={Backdrop}
                                                BackdropProps={{
                                                    timeout: 500,
                                                }}
                                            >
                                                <Fade in={open}>
                                                    <Box sx={style}>
                                                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                                            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
                                                                <form onSubmit={handleAddReview}>
                                                                    <div class="form-group mb-6">
                                                                        <textarea
                                                                            ref={reviewRef}
                                                                            class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                                                                            id="exampleFormControlTextarea13"
                                                                            rows="3"
                                                                            placeholder="Message"
                                                                        ></textarea>
                                                                    </div>

                                                                    <Stack direction="row" spacing={2}>

                                                                        <Button
                                                                            type="submit"
                                                                            variant="contained" endIcon={<SendIcon />}
                                                                            onClick={() => notify()}

                                                                        >
                                                                            Send
                                                                        </Button>

                                                                        <ToastContainer
                                                                            position="top-right"
                                                                            autoClose={4000}
                                                                            hideProgressBar={false}
                                                                            newestOnTop={false}
                                                                            closeOnClick
                                                                            rtl={false}
                                                                            pauseOnFocusLoss
                                                                            draggable
                                                                            pauseOnHover
                                                                        />
                                                                        <ToastContainer />
                                                                    </Stack>
                                                                </form>
                                                            </div>
                                                        </Typography>
                                                    </Box>
                                                </Fade>
                                            </Modal>
                                        </div>
                                    </span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Cart cart={cart}>
                            <Link to="/review">
                                <Stack direction="row" spacing={2}>
                                    <Button variant="outlined">Review Your Order</Button>
                                </Stack>
                            </Link>
                        </Cart>
                    </div>
                </div>
            </Container>
            <Container>
                <div>
                    <Container>
                        <div className="my-5 bg-gray-50 h-20 flex items-center justify-center text-gray-700 font-semibold shadow-md">
                            <p className="mx-auto text-center fw-bold h5"><i><u>Product Description</u></i></p>
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
                        <div className="my-5 bg-gray-50 h-20 flex items-center justify-center text-gray-700 font-semibold shadow-md">
                            <p className="mx-auto text-center fw-bold h5"><i><u>Product reviews</u></i></p>
                        </div>
                    </div>
                    <div>
                        <Review currentProductID={_id} >
                        </Review>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="my-5 bg-gray-50 h-20 flex items-center justify-center text-gray-700 font-semibold shadow-md">
                            <p className="mx-auto text-center fw-bold h5"><i><u>Similar Products</u></i></p>
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
            <Footer></Footer>
        </div>
    );
};

export default MonitorDetails;