import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import DisplaySpeaker from '../displaySpeaker/DisplaySpeaker';

const Speaker = () => {
    const [speakers, setSpeakers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/speakerCollection')
            .then(res => res.json())
            .then(data => {
                setSpeakers(data)
            })
    }, [])
    return (
        <Container>

            <div className="grid lg:grid-cols-4 gap-4 sm:grid-cols-1 md:grid-cols-2">
                {
                    speakers.map(speaker => <DisplaySpeaker
                        key={speaker._id}
                        speaker={speaker}
                    >

                    </DisplaySpeaker>)
                }
            </div>

        </Container >
    );
};

export default Speaker;