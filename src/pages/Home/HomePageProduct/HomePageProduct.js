import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import DisplayMonitor from '../../components/monitor/displayMonitor/DisplayMonitor';
import DisplaySpeaker from '../../components/speaker/displaySpeaker/DisplaySpeaker';
import DisplayTablet from '../../components/tablet/displayTablet/DisplayTablet';

const HomePageProduct = () => {
    const [monitors, setMonitors] = useState([]);

    useEffect(() => {
        fetch('https://lit-escarpment-04985.herokuapp.com/monitorCollection')
            .then(res => res.json())
            .then(data => {
                setMonitors(data);

            });
    })

    const [tablets, setTablets] = useState([]);

    useEffect(() => {
        fetch('https://lit-escarpment-04985.herokuapp.com/tabletCollection')
            .then(res => res.json())
            .then(data => {
                setTablets(data)
            })

    }, [])

    const [speakers, setSpeakers] = useState([]);

    useEffect(() => {
        fetch('https://lit-escarpment-04985.herokuapp.com/speakerCollection')
            .then(res => res.json())
            .then(data => {
                setSpeakers(data)
            })
    }, [])

    return (
        <div>
            <Container>
                <div className='mt-5 mb-4'>
                    <h3 className='flex justify-center'><u>Featured Products</u>
                    </h3>
                    <h6 className='flex justify-center'>Check & Get Your Desired Product !</h6>
                </div>
                <div class="grid lg:grid-cols-3 md:grid-cols-2
gap-4">
                    {
                        monitors.slice(0, 6).map(monitor => <DisplayMonitor
                            key={monitor._id}
                            monitor={monitor}
                        >

                        </DisplayMonitor>)
                    }

                </div>
                {/* <div class="grid lg:grid-cols-3 md:grid-cols-2
 gap-4">
                    {
                        tablets.slice(0, 3).map(tablet => <DisplayTablet
                            key={tablet._id}
                            tablet={tablet}
                        >

                        </DisplayTablet>)
                    }

                </div>

                <div class="grid lg:grid-cols-3 md:grid-cols-2
 gap-4">
                    {
                        speakers.slice(0, 3).map(speaker => <DisplaySpeaker
                            key={speaker._id}
                            speaker={speaker}
                        >

                        </DisplaySpeaker>)
                    }

                </div> */}
            </Container >
        </div>
    );
};

export default HomePageProduct;