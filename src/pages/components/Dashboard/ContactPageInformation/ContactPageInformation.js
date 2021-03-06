import React, { useEffect, useState } from 'react';
import DisplayContactPageInformation from './DisplayContactPageInformation';

const ContactPageInformation = () => {

    const [contactInfo, setContactInfo] = useState([]);
    useEffect(() => {
        fetch('https://lit-escarpment-04985.herokuapp.com/contact')
            .then(res => res.json())
            .then(data => setContactInfo(data));

    })
    return (
        <div>
            <div aria-label="group of cards" tabindex="0" class="focus:outline-none py-8 w-full">
                <div class="grid lg:grid-cols-2 sm:grid-cols-1  ">
                    {
                        contactInfo.map(contact =>
                            <DisplayContactPageInformation
                                key={contact._id}
                                contact={contact}
                            >
                            </DisplayContactPageInformation>)

                    }

                </div>
            </div>
        </div>
    );
};

export default ContactPageInformation;