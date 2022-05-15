import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import './TopProductCarousel.css';


const TopProductCarousel = () => {



    return (
        <div className='mt-4'>
            <h4 className='carousel-header flex justify-center'><u>Popular Product</u></h4>
            <div className="">
                <Container>

                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-75 mx-auto"
                                src='https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=721&q=80'
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-75 mx-auto"
                                src='https://images.unsplash.com/photo-1588382472578-8d8b337b277a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                                alt="Second slide"
                            />


                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-75 mx-auto"
                                src='https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80'
                                alt="Third slide"
                            />


                        </Carousel.Item>
                    </Carousel>
                </Container>

            </div>


        </div >
    );
};

export default TopProductCarousel;