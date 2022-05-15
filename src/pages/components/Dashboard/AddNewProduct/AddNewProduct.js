import { Container } from '@mui/material';
import React, { useRef } from 'react';
import useAuth from '../../../../hooks/useAuth';
import './AddNewProduct.css';

const AddNewProduct = () => {

    const titleRef = useRef();
    const imageRef = useRef();
    const priceRef = useRef();
    const regularPriceRef = useRef();
    const productCodeRef = useRef();
    const brandRef = useRef();
    const panelRef = useRef();
    const screenSizeRef = useRef();
    const displayTypeRef = useRef();
    const resolutionRef = useRef();
    const brightNessRef = useRef();
    const responseTimeRef = useRef();
    const constrastRatioRef = useRef();
    const colourSupportRef = useRef();
    const refreshRateRef = useRef();
    const warrantyInformationRef = useRef();

    const handleAddNewMonitor = e => {
        const title = titleRef.current.value;
        const image = imageRef.current.value;
        const price = priceRef.current.value;
        const regularPrice = regularPriceRef.current.value;
        const productCode = productCodeRef.current.value;
        const brand = brandRef.current.value;
        const panelType = panelRef.current.value;
        const screenSize = screenSizeRef.current.value;
        const displayType = displayTypeRef.current.value;
        const resolution = resolutionRef.current.value;
        const brightness = brightNessRef.current.value;
        const responseTime = responseTimeRef.current.value;
        const contrastRatio = constrastRatioRef.current.value;
        const colourSupport = colourSupportRef.current.value;
        const refreshRate = refreshRateRef.current.value;
        const warrantyInformation = warrantyInformationRef.current.value;

        const addNewMonitor = { brand, brightness, colourSupport, contrastRatio, displayType, image, panelType, price, productCode, refreshRate, regularPrice, resolution, responseTime, screenSize, title, warrantyInformation };

        fetch('http://localhost:5000/monitorCollection', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addNewMonitor)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Sucessfully added product');
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        <div className='page-bg'>

            <Container>

                <div>
                    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
                        <form onSubmit={handleAddNewMonitor}>

                            <div class="form-group mb-6">
                                <input type="text" class="form-control
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
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                    aria-describedby="emailHelp123" placeholder="Product Name"
                                    ref={titleRef}
                                />
                            </div>
                            <div class="form-group mb-6">
                                <input type="text" class="form-control
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
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                    aria-describedby="emailHelp123" placeholder="Product Image URL"
                                    ref={imageRef}
                                />
                            </div>
                            <div class="form-group mb-6">
                                <input type="text" class="form-control
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
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                    aria-describedby="emailHelp123" placeholder="Product Price"
                                    ref={priceRef} />
                            </div>
                            <div class="form-group mb-6">
                                <input type="text" class="form-control
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
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                    aria-describedby="emailHelp123" placeholder="Regular Price"
                                    ref={regularPriceRef} />
                            </div>
                            <div class="form-group mb-6">
                                <input type="text" class="form-control
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
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                    aria-describedby="emailHelp123" placeholder="Product Code"
                                    ref={productCodeRef} />
                            </div>
                            <div class="form-group mb-6">
                                <input type="text" class="form-control
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
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                    aria-describedby="emailHelp123" placeholder="Brand"
                                    ref={brandRef} />
                            </div>
                            <div class="form-group mb-6">
                                <input type="text" class="form-control
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
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                    aria-describedby="emailHelp123" placeholder="Panel Type"
                                    ref={panelRef} />
                            </div>
                            <div class="form-group mb-6">
                                <input type="text" class="form-control
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
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                    aria-describedby="emailHelp123" placeholder="Screen Size"
                                    ref={screenSizeRef}
                                />
                            </div>
                            <div class="form-group mb-6">
                                <input type="text" class="form-control
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
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                    aria-describedby="emailHelp123" placeholder="Display Type"
                                    ref={displayTypeRef} />
                            </div>
                            <div class="form-group mb-6">
                                <input type="text" class="form-control
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
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                    aria-describedby="emailHelp123" placeholder="Resolution"
                                    ref={resolutionRef}
                                />
                            </div>
                            <div class="form-group mb-6">
                                <input type="text" class="form-control
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
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                    aria-describedby="emailHelp123" placeholder="Brightness"
                                    ref={brightNessRef} />
                            </div>
                            <div class="form-group mb-6">
                                <input type="text" class="form-control
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
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                    aria-describedby="emailHelp123" placeholder="ResponseTime"
                                    ref={responseTimeRef} />
                            </div>
                            <div class="form-group mb-6">
                                <input type="text" class="form-control
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
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                    aria-describedby="emailHelp123" placeholder="ContrastRatio"
                                    ref={constrastRatioRef} />
                            </div>
                            <div class="form-group mb-6">
                                <input type="text" class="form-control
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
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                                    aria-describedby="emailHelp124" placeholder="Colour Support"
                                    ref={colourSupportRef}
                                />
                            </div>

                            <div class="form-group mb-6">
                                <input type="text" class="form-control block
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
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
                                    placeholder="Refresh Rate"

                                    ref={refreshRateRef} />
                            </div>
                            <div class="form-group mb-6">
                                <input type="text" class="form-control block
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
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
                                    placeholder="Warranty Information"
                                    ref={warrantyInformationRef} />
                            </div>

                            <button type="submit" class="
w-full
px-6
py-2.5
bg-black
text-white
font-medium
text-xs
leading-tight
uppercase
rounded
shadow-md
hover:bg-blue-700 hover:shadow-lg
focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
active:bg-blue-800 active:shadow-lg
transition
duration-150
ease-in-out">Sign up</button>
                        </form>
                    </div>
                </div >

            </Container>

        </div>
    );
};

export default AddNewProduct;

