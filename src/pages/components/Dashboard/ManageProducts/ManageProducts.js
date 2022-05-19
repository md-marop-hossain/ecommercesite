import React from 'react';
import { useEffect, useState } from 'react';
import DisplayManageProducts from './DisplayManageProducts';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const ManageProducts = () => {
    const [manageProducts, setManageProducts] = useState([]);

    useEffect(() => {
        fetch('https://lit-escarpment-04985.herokuapp.com/monitorCollection')
            .then(res => res.json())
            .then(data => {
                setManageProducts(data)
                console.log("data...", data)
                // setSpinner(false);
            })
    }, [])

    const handleManageProducts = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://lit-escarpment-04985.herokuapp.com/monitorCollection/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Deleted successfully");
                        const remainingProducts = manageProducts.filter(order => order._id !== id);
                        setManageProducts(remainingProducts);
                    }
                })
        }
    }
    return (
        <div className='page-bg'>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="fixed">
                    <div class="grid grid-cols-3 gap-4">
                        {
                            manageProducts.map(manageProduct => <DisplayManageProducts
                                key={manageProduct._id}
                                manageProduct={manageProduct}
                                handleManageProducts={handleManageProducts}
                            >
                            </DisplayManageProducts>)

                        }
                    </div>
                </Container>
            </React.Fragment>
        </div>
    );
};

export default ManageProducts;