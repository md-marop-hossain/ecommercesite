import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const DisplayManageProducts = (props) => {

    const { image, title, price, regularPrice, productCode, brand,
        panelType, screenSize, displayType, warrantyInformation, _id
    } = props.manageProduct || {};

    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <p><b>Product code: </b> {productCode}</p>
                        <p><b>Product Price : </b> {price}</p>
                        <p><b>Product RegularPrice : </b> {regularPrice}</p>

                        <p><b>Brand : </b> {brand}</p>
                        <p><b>PanelType : </b> {panelType}</p>
                        <p><b>Screen Size : </b> {screenSize}</p>
                        <p><b>Display Type : </b> {displayType}</p>
                        <p><b>{warrantyInformation} </b></p>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Stack spacing={2} direction="row">
                        <Button
                            onClick={() => { props.handleManageProducts(_id) }}
                            variant="outlined">Remove Product</Button>
                    </Stack>
                </CardActions>
            </Card>
        </>
    );
};

export default DisplayManageProducts;