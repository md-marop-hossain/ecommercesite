import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import DisplayMonitor from '../displayMonitor/DisplayMonitor';

const Monitor = () => {
    const [monitors, setMonitors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/monitorCollection')
            .then(res => res.json())
            .then(data => {
                setMonitors(data)
            });
    })

    return (
        <Container>

            <div className="grid lg:grid-cols-4 gap-4 sm:grid-cols-1 md:grid-cols-2">
                {
                    monitors.map(monitor => <DisplayMonitor
                        key={monitor._id}
                        monitor={monitor}
                    >

                    </DisplayMonitor>)
                }
            </div>

        </Container >
    );
};

export default Monitor;