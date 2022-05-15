import React from 'react';

const SingleReview = (props) => {
    // console.log("single review...", props.review);
    const { reviewerName, review, reviewerEmail, productId, currentDate, currentTime, displayImage } = props.review || {};


    return (
        <div class="bg-gray-50 text-black rounded-lg  w-[34rem] space-y-6 p-10">
            <div class="flex space-x-4 items-center ">
                <div class="w-12 h-12"
                >
                    <img
                        alt="avatar"
                        src={displayImage}
                        class="rounded-full w-full h-full object-cover " />
                    <div>
                    </div>
                </div>
                <div class="space-y-2">
                    <div class="flex space-x-2 items-center">
                        <h2 class="text-base">{reviewerName} </h2>
                        <svg class="h-4 w-4 text-blue-900" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div class="text-blue-900 text-sm"><b>posted</b></div>
                    </div>
                    <p class=" text-xs text-black">
                        {currentDate} <span> {currentTime}</span>
                    </p>
                </div>

            </div>
            <div>
                <p class="text-sm leading-6 text-black">
                    {review}
                </p>
            </div>



        </div>

    );
};

export default SingleReview;