import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const DisplayManageAllOrder = (props) => {
    const { title, productCode, brand, image } = props.filteredOrder || {};

    return (

        <tr class="text-gray-700">
            <td class="px-4 py-3 border">
                <img src={image} alt='image'></img>
            </td>
            <td class="px-4 py-3 text-ms  border">{title}</td>
            <td class="px-4 py-3 text-xs border">
                <span class="px-2 py-1 leading-tight text-green-700 bg-green-100 rounded-sm"> {props?.filteredOrder?.regularPrice} </span>
            </td>
            <td class="px-4 py-3 text-sm border">{productCode}</td>
            <td class="px-4 py-3 text-sm border">{brand}</td>
            <td class="px-4 py-3 text-sm border">{props?.filteredOrder?.screenSize}</td>
            <td class="px-4 py-3 text-sm border">{props?.filteredOrder?.displayType}</td>
            <td class="px-4 py-3 text-sm border">
                <Stack direction="row" spacing={2}>
                    <Button
                        onClick={() => props.handleDeleteUser(props.filteredOrder._id)}
                        variant="outlined">ORDER CANCEL</Button>
                </Stack>
            </td>
        </tr>

    );
};

export default DisplayManageAllOrder;