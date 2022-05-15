import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const DisplayContactPageInformation = (props) => {

    const { name, email, phone, message } = props.contact || {};

    return (

        <div class="lg:flex items-center justify-center w-full">
            <div tabindex="0" aria-label="card 1" class="mb-3 focus:outline-none lg:w-6/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                <div class="flex items-center border-b border-gray-200 pb-6">
                    <img src="https://media.istockphoto.com/vectors/account-vector-id1257517810?s=612x612" alt="coin avatar" class="w-12 h-12 rounded-full" />
                    <div class="flex items-start justify-between w-full">
                        <div class="pl-3 w-full">
                            <p tabindex="0" class="focus:outline-none text-xl font-medium leading-5 text-gray-800">{name}</p>
                            {/* <p tabindex="0" class="focus:outline-none text-sm leading-normal pt-2 text-gray-500">36 members</p> */}
                        </div>
                        {/* <div role="img" aria-label="bookmark">
                            <svg class="focus:outline-none" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div> */}
                    </div>
                </div>
                <div class="px-2">
                    {/* <p><b>Email : </b> {email}</p> */}
                    <p><b>Phone Number : </b> {phone}</p>
                    <p><b>Message : </b> {message}</p>


                    <Stack direction="row" spacing={2}>
                        <Button
                            onClick={() => window.location = `mailto:${email}`}
                            variant="outlined" endIcon={<SendIcon />}>
                            Send
                        </Button>
                    </Stack>

                    {/* <div tabindex="0" class="focus:outline-none flex">
                        <div class="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#dogecoin</div>
                        <div class="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#crypto</div>
                    </div> */}
                </div>
            </div>
        </div>

    );
};

export default DisplayContactPageInformation;