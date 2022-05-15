import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

// import Backdrop from '@material-ui/core/Backdrop';
// import { CircularProgress } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import MySingleOrder from '../MySingleOrder/MySingleOrder';
import DisplayManageAllOrder from './DisplayManageAllOrder';

// const useStyles = makeStyles((theme) => ({
//     backdrop: {
//         zIndex: theme.zIndex.drawer + 1,
//         color: '#fff',
//     },
// }));

const ManageAllOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    // const [spinner, setSpinner] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                setMyOrders(data)
                // setSpinner(false);
            });
    }, [myOrders]);

    // DELETE AN USER
    const handleDeleteUser = id => {
        console.log("iddddd : ", id);


        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Deleted successfully");
                        const remainingOrder = myOrders.filter(order => order._id !== id);
                        setMyOrders(remainingOrder);
                    }
                })
        }
    }
    return (
        <div class="min-h-screen page-bg">
            <section class="container mx-auto p-6 font-mono">
                <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div class="w-full overflow-x-auto">
                        <table class="w-full">
                            <thead>
                                <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                    <th class="px-4 py-3">Image</th>
                                    <th class="px-4 py-3">Title</th>
                                    <th class="px-4 py-3">Regular Price</th>
                                    <th class="px-4 py-3">Product Code</th>
                                    <th class="px-4 py-3">Brand</th>
                                    <th class="px-4 py-3">Screen Size</th>
                                    <th class="px-4 py-3">Display Type</th>
                                    <th class="px-4 py-3">Action</th>
                                    {/* <th class="px-4 py-3">Payment</th> */}
                                </tr>
                            </thead>
                            <tbody class="bg-white">

                                {myOrders.map(filteredOrder => <DisplayManageAllOrder
                                    filteredOrder={filteredOrder}
                                    handleDeleteUser={handleDeleteUser}
                                >
                                </DisplayManageAllOrder>
                                )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ManageAllOrders;