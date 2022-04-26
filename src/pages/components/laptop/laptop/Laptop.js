import React, { useEffect, useState } from 'react';

const Laptop = () => {

    const [laptops, setLaptops] = useState([]);

    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => console.log(data));
    })

    return (
        <div>

        </div>
    );
};

export default Laptop;