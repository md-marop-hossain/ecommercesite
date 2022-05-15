import React from 'react';
import Button from '@mui/material/Button';
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
                        </div>
                    </div>
                </div>
                <div class="px-2">
                    <p><b>Phone Number : </b> {phone}</p>
                    <p><b>Message : </b> {message}</p>
                    <Stack direction="row" spacing={2}>
                        <Button
                            onClick={() => window.location = `mailto:${email}`}
                            variant="outlined" endIcon={<SendIcon />}>
                            Send
                        </Button>
                    </Stack>
                </div>
            </div>
        </div>

    );
};

export default DisplayContactPageInformation;