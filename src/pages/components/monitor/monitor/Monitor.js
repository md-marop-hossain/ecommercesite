import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../../Shared/Footer/Footer';
import DisplayMonitor from '../displayMonitor/DisplayMonitor';
import './Monitor.css';

const Monitor = () => {
    const [monitors, setMonitors] = useState([]);
    const [displayMonitors, setDisplayMonitors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/monitorCollection')
            .then(res => res.json())
            .then(data => {
                setMonitors(data);
                setDisplayMonitors(data);
            });
    }, [])
    const handleSearch = event => {
        const searchText = event.target.value;
        console.log(searchText);

        const matchedProducts = monitors.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayMonitors(matchedProducts);
    }
    return (
        <div>
            <div className='my-4'>
                <Container><input
                    className='w-full customize-input'
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search Product" /></Container>
            </div>
            <Container>

                {
                    displayMonitors.length > 0 ? <div className="grid lg:grid-cols-4 gap-4 sm:grid-cols-1 md:grid-cols-2">
                        {
                            displayMonitors.map(monitor => <DisplayMonitor
                                key={monitor._id}
                                monitor={monitor}
                            >

                            </DisplayMonitor>)
                        }
                    </div> : <div className='flex justify-content-center no-product-found'><h4 className='no-product-found'>No Product Found</h4></div>
                }

            </Container >
            <Footer></Footer>
        </div>
    );
};

export default Monitor;