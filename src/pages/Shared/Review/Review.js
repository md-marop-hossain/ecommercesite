import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';

const Review = (props) => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, []);
    return (
        <div>
            <Container>
                {
                    reviews.length > 0 ? <div class="grid grid-cols-2 gap-3">
                        {
                            reviews.filter(f => f.productId === props.currentProductID).map(review => <SingleReview
                                key={review._id}
                                review={review}

                            >
                            </SingleReview>)
                        }
                    </div> : <h1 className='flex justify-center'>no reviews</h1>
                }
            </Container>
        </div>
    );
};

export default Review;