import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import './Category.css';

const Category = () => {
    return (

        <div className='mt-4'>

            <Container>
                <div className="">
                    <p className="flex justify-center h2"><u>Featured Category</u></p>
                    <p className="flex justify-center h6">Get Your Desired Product from Featured Category!

                    </p>
                </div>

                <div class="grid lg:grid-cols-5 sm:grid-cols-3 md:grid-cols-4 grid-cols-2 mx-auto w-75  ">

                    <div className="m-2">
                        <Link to={'/monitor'}>
                            <Card style={{ width: '10rem' }}>
                                <Card.Img className="img-fluid mx-auto" style={{ width: '5rem' }} variant="top" src="https://www.startech.com.bd/image/cache/catalog/category-thumb/desktop-48x48.png" />

                                <p className="h5 mx-auto"><span className='style-l'>Monitor</span></p>
                            </Card>
                        </Link>
                    </div>
                    <div className="m-2">
                        <Link to={'/tablet'}>
                            <Card style={{ width: '10rem' }}>
                                <Card.Img className="img-fluid mx-auto" style={{ width: '5rem' }} variant="top" src="https://www.pikpng.com/pngl/m/121-1215511_png-file-svg-mobile-and-tablet-icon-clipart.png" />

                                <p className="h5 mx-auto"><span className='style-l'>Tablet</span></p>
                            </Card>
                        </Link>
                    </div>

                    <div className="m-2">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img className="img-fluid mx-auto" style={{ width: '5rem' }} variant="top" src="https://www.startech.com.bd/image/cache/catalog/category-thumb/cpu-48x48.png" />

                            <p className="h5 mx-auto">CPU</p>
                        </Card>
                    </div>
                    <div className="m-2">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img className="img-fluid mx-auto" style={{ width: '5rem' }} variant="top" src="https://www.startech.com.bd/image/cache/catalog/category-thumb/SSD-48x48.png" />

                            <p className="h5 mx-auto">SSD</p>
                        </Card>
                    </div>
                    <div className="m-2">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img className="img-fluid mx-auto" style={{ width: '5rem' }} variant="top" src="https://www.startech.com.bd/image/cache/catalog/category-thumb/webcam-48x48.png" />

                            <p className="h5 mx-auto">Webcam</p>
                        </Card>
                    </div>
                    <div className="m-2">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img className="img-fluid mx-auto" style={{ width: '5rem' }} variant="top" src="https://www.startech.com.bd/image/cache/catalog/category-thumb/printer-48x48.png" />

                            <p className="h5 mx-auto">Printer</p>
                        </Card>
                    </div>
                    <div className="m-2">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img className="img-fluid mx-auto" style={{ width: '5rem' }} variant="top" src="https://www.startech.com.bd/image/cache/catalog/category-thumb/projector-48x48.png" />

                            <p className="h5 mx-auto">Projector</p>
                        </Card>
                    </div>
                    <div className="m-2">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img className="img-fluid mx-auto" style={{ width: '5rem' }} variant="top" src="https://www.startech.com.bd/image/cache/catalog/category-thumb/router-48x48.png" />

                            <p className="h5 mx-auto">Router</p>
                        </Card>
                    </div>
                    <div className="m-2">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img className="img-fluid mx-auto" style={{ width: '5rem' }} variant="top" src="https://www.startech.com.bd/image/cache/catalog/category-thumb/gadget-48x48.png" />

                            <p className="h5 mx-auto">Gadget</p>
                        </Card>
                    </div>
                    <div className="m-2">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img className="img-fluid mx-auto" style={{ width: '5rem' }} variant="top" src="https://www.startech.com.bd/image/cache/catalog/category-thumb/cable-converter-48x48.png" />

                            <p className="h5 mx-auto">Cable-Converter</p>
                        </Card>
                    </div>




                </div>
            </Container>
        </div>
    );
};

export default Category;