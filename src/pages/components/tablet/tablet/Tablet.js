import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import DisplayTablet from '../displayTablet/DisplayTablet';

const Tablet = () => {
    const [tablets, setTablets] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tabletCollection')
            .then(res => res.json())
            .then(data => {
                setTablets(data)
            })

    }, [])
    return (
        <Container>

            <div className="grid lg:grid-cols-4 gap-4 sm:grid-cols-1 md:grid-cols-2">
                {
                    tablets.map(tablet => <DisplayTablet
                        key={tablet._id}
                        tablet={tablet}
                    >

                    </DisplayTablet>)
                }
            </div>

        </Container >
    );
};

export default Tablet;